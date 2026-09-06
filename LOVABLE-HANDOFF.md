# Nuanu Investor Day — Lovable handoff

This repository contains the complete current website source and only the image assets used by the site. The large local photo library is intentionally excluded.

## Local preview

Requirements: Node.js 22.13 or newer and pnpm.

```bash
pnpm install
pnpm run dev
```

The primary page is `/`; the working design route is also available at `/concept-planes`.

## Transfer into Lovable

Lovable does not currently create a project by importing an arbitrary existing GitHub repository. Use the connected-repository workflow instead:

1. Open the existing Nuanu project in Lovable.
2. In **Settings → Connectors → GitHub**, connect GitHub and connect this Lovable project. Lovable creates its own linked repository.
3. Copy the URL of that new repository.
4. Replace the repository's files on its default `main` branch with the files from this package, then commit and push.
5. Lovable syncs changes made on `main` back into the project.

Do not rename, move, or delete the repository after Lovable connects it; the connection relies on its exact GitHub path.

## Current published reference

https://nuanu-investor-day.yura-georgy-alexeev.chatgpt.site

