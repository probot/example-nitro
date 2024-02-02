# Probot example for Nitro

Look at the [Nitro documentation](https://nitro.unjs.io/) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# yarn
yarn install

# pnpm
pnpm install
```

## Required Environment Variables

Similar to Probot's default behavior, you need to set the following environment variables:

- `APP_ID` - The ID of the GitHub App
- `WEBHOOK_SECRET` - The secret used to secure the webhook
- `PRIVATE_KEY` - The private key of the GitHub App

## Development Server

Start the development server on <http://localhost:3000>

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nitro.unjs.io/deploy) for more information.
