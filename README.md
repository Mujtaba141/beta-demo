# Lumen Digital — Vercel demo

Includes all pages, Swedish/English content, images and case studies.
The form is a labelled demo; no messages are sent or stored.
No Cloudflare database, passwords, API keys or client enquiries are included.

## GitHub deployment
Create a repository and upload this folder's contents, with package.json at root.
On vercel.com select Add New > Project, import the repository, select Next.js,
keep default settings and Deploy. No environment variables are required.

## Deploy from your computer
Install Node.js 22. Open a terminal in this folder and run:
    npx vercel
Follow login and setup prompts. For a production deployment:
    npx vercel --prod

## Development
    corepack enable
    pnpm install
    pnpm dev

Before public business launch: configure email delivery and complete privacy details.
