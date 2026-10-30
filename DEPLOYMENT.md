# Deployment Guide

This project is a Next.js documentation and developer platform for **Safepay**, built with [Fumadocs](https://fumadocs.vercel.app/) and featuring native [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) server integration for AI coding assistants.

It is configured for deployment to **Vercel** in the **Bombay (`bom1`)** region.

---

## 1. Architecture Overview

```
                          Internet / Users / AI Agents
                                       │
                                       ▼
                       Vercel Domain / Custom Domains
              (safepay.alihamas.pk, safepay-docs.vercel.app)
                                       │
                    ┌──────────────────┴──────────────────┐
                    │                                     │
           Path: /docs, /*                       Path: /api/mcp, /api/search
                    │                                     │
                    ▼                                     ▼
          Next.js Static & SSR                   Next.js Route Handlers
        (Fumadocs Documentation)                   (MCP & Search APIs)
```

- **Frontend & Docs**: Built with Next.js 16 App Router and Fumadocs.
- **MCP Server (`/api/mcp`)**: Server-Sent Events (SSE) and HTTP streaming endpoint allowing AI agents (Cursor, Claude Desktop, Claude Code, Windsurf) to query Safepay documentation.
- **Search API (`/api/search`)**: In-memory and index search powered by Fumadocs server search.
- **Region**: Set to **Bombay / Mumbai (`bom1`)** in `vercel.json` for low latency across South Asia.

---

## 2. Deployments

All deployments use the locally installed `vercel` CLI package (`devDependencies`), bypassing any global installation (such as Homebrew).

### Dry Run (Validation)

To test the build packaging and verify files before deploying:

```bash
bun run deploy:check
```

### Preview Deployment

To deploy an isolated preview on `*.vercel.app`:

```bash
bun run deploy
```

### Production Deployment

To ship directly to production (`safepay.alihamas.pk` / `safepay-docs.vercel.app`):

```bash
bun run deploy:prod
```

### First-Time Project Setup / Linking

To link this repository to your Vercel team (`alihamasdev-team`):

```bash
bun run deploy:setup
```

---

## 3. Custom Domains (`*.alihamas.pk` & `*.vercel.app`)

1. Go to your [Vercel Dashboard](https://vercel.com) &rarr; **safepay-docs** &rarr; **Settings** &rarr; **Domains**.
2. Add your custom domain (e.g., `safepay.alihamas.pk`).
3. In your DNS provider (Cloudflare, etc.):
   - **Type**: `CNAME`
   - **Name**: `safepay`
   - **Target / Value**: `cname.vercel-dns.com`

---

## 4. CORS & Multi-Domain Support

The proxy layer ([`src/proxy.ts`](file:///Users/mac/Developer/safepay-docs/src/proxy.ts)) dynamically handles cross-origin requests:

- **Wildcard Subdomains**: Automatically allows all `*.alihamas.pk` and `alihamas.pk` origins with `credentials: true`.
- **Vercel Deployments**: Automatically allows all `*.vercel.app` preview and production URLs with `credentials: true`.
- **Local Development**: Allows `http://localhost:*` and `127.0.0.1`.
- **MCP & Public Clients**: Allows AI assistants and external HTTP clients to access `/api/mcp`, `/api/search`, and `/llms.txt`.
- **Preflight `OPTIONS`**: Automatically responds with `204 No Content` and the appropriate CORS headers.

---

## 5. Key Configuration Details

1. **Bombay Region (`vercel.json`)**:
   `"regions": ["bom1"]` directs Vercel to provision and execute Serverless Functions in Mumbai / Bombay.

2. **Metadata & OpenGraph Base URL (`src/app/layout.tsx`)**:
   `metadataBase` dynamically resolves against `NEXT_PUBLIC_SITE_URL`, `VERCEL_PROJECT_PRODUCTION_URL`, or `VERCEL_URL`, guaranteeing accurate social preview images across all domains.

3. **Lean Deployment Uploads (`.vercelignore`)**:
   Excludes `.git`, `.next`, `.turbo`, `.vscode`, and log files from the upload bundle, accelerating deployment upload times.
