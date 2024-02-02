import { Probot } from "probot";
import app from "../probot-app/index.js";

let probot: Probot;

export function useProbot(): Probot {
  if (!probot) {
    probot = new Probot({
      appId: process.env.APP_ID,
      privateKey: process.env.PRIVATE_KEY,
      secret: process.env.WEBHOOK_SECRET,
    });
    probot.load(app);
  }
  return probot;
}
