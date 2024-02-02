import { Probot } from "probot";
import app from "../../../probot-app/index.js";
import type { WebhookEventName } from "@octokit/webhooks-types";
import { readRawBody } from "h3";

export default eventHandler(async (event) => {
  const eventName = event.headers.get("x-github-event") as WebhookEventName;
  const signatureSHA256 = event.headers.get("x-hub-signature-256") as string;
  const id = event.headers.get("x-github-delivery") as string;
  const body = await readRawBody(event);

  if (!body || !signatureSHA256 || !id || !eventName) {
    return new Response("Bad request", { status: 400 });
  }

  const probot = new Probot({
    appId: process.env.APP_ID,
    privateKey: process.env.PRIVATE_KEY,
    secret: process.env.WEBHOOK_SECRET,
  });

  await probot.load(app);

  probot.webhooks.verifyAndReceive({
    id,
    name: eventName as any,
    payload: body,
    signature: signatureSHA256,
  });
});
