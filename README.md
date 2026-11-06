<!-- prettier-ignore -->
<div align="center">

<img src="./public/logo.svg" alt="Safepay Logo" height="38" />

# Safepay Documentation & Developer Platform

[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3-00d8ff?style=flat-square&logo=react)](https://react.dev/)
[![Fumadocs](https://img.shields.io/badge/Fumadocs-v16.18-7c3aed?style=flat-square)](https://fumadocs.dev/)
[![Bun](https://img.shields.io/badge/Bun-1.4-fbf0df?style=flat-square&logo=bun&logoColor=black)](https://bun.sh/)
[![TypeScript](https://img.shields.io/badge/TypeScript-7.0-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Model Context Protocol](https://img.shields.io/badge/MCP-Enabled-00a3ee?style=flat-square&logo=anthropic&logoColor=white)](https://modelcontextprotocol.io/)

Official developer documentation, interactive OpenAPI references, and native Model Context Protocol (MCP) server for the Safepay payment gateway.

[Overview](#overview) • [Key Features](#key-features) • [Architecture](#architecture) • [Getting Started](#getting-started) • [Available Scripts](#available-scripts) • [AI & MCP Integration](#ai--mcp-integration) • [OpenAPI Reference Generation](#openapi-reference-generation) • [Project Structure](#project-structure) • [Deployment](#deployment)

</div>

---

## Overview

**Safepay Docs** is the developer portal for Safepay, engineered with Next.js 16, React 19, and Fumadocs. It provides high-speed, comprehensive guidance for integrating digital payment solutions in Pakistan and cross-border markets—spanning card processing, 3D Secure 2.0, Raast instant bank transfers, tokenization, and subscription management.

Beyond human-readable guides, this platform acts as an AI-first knowledge hub. It provides an embedded [Model Context Protocol (MCP)](https://modelcontextprotocol.io) server (`/api/mcp`) and `/llms.txt` endpoints to let AI coding agents (such as Cursor, Claude Desktop, and Windsurf) query, search, and implement Safepay APIs directly inside developers' IDEs.

## Key Features

- **End-to-End Payment Guides**: Step-by-step implementation for Express Checkout, Safepay Atoms, React SDK, Raast Dynamic QR & Request-to-Pay (RTP), 3D Secure, Subscriptions, and HMAC webhook verification.
- **Interactive OpenAPI Reference**: Complete REST API specifications auto-generated from `openapi.json` into type-safe Fumadocs MDX pages with schema explorers and request samples.
- **Native MCP Server**: Real-time Model Context Protocol endpoint at `/api/mcp` supporting tools for full-text search and document retrieval directly from LLMs.
- **LLM-Optimized Endpoints**: Native support for `/llms.txt` and `/llms-full.txt` standards for zero-setup context ingestion by external agents.
- **Fast Full-Text Search**: Instant client and server-side search powered by Fumadocs server index (`/api/search`).
- **Strict Quality & Link Validation**: Built-in verification via Rust-based Oxlint and Oxfmt, paired with automated link and anchor integrity checks using `next-validate-link`.
- **Dynamic Multi-Domain CORS**: Secure cross-origin access across custom domains (`*.alihamas.pk`, `safepay.alihamas.pk`) and Vercel preview environments.

## Architecture

```
                                  Clients & AI Assistants
               (Web Browsers, Cursor, Claude Desktop, Windsurf, HTTP Clients)
                                             │
                                             ▼
                                    Vercel Edge Router
                      (safepay.alihamas.pk / safepay-docs.vercel.app)
                                             │
                       ┌─────────────────────┴─────────────────────┐
                       │                                           │
                       ▼                                           ▼
             Next.js Static & SSR Routes                  API Route Handlers
                       │                                           │
        ┌──────────────┴──────────────┐             ┌──────────────┴──────────────┐
        ▼                             ▼             ▼              ▼              ▼
 Documentation Pages           OpenAPI Explorer   /api/mcp     /api/search   /llms[-full].txt
  (/docs/payments,             (/docs/api-ref)   (MCP Server) (Doc Search)   (Agent Context)
   /docs/developers)
```

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) 1.2+ (recommended) or Node.js 20+
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/alihamasdev/safepay-docs.git
   cd safepay-docs
   ```

2. **Install dependencies:**

   ```bash
   bun install
   ```

3. **Start the development server:**
   ```bash
   bun dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the documentation locally.

## Available Scripts

| Script             | Command                          | Description                                                      |
| :----------------- | :------------------------------- | :--------------------------------------------------------------- |
| `dev`              | `next dev`                       | Starts the local Next.js development server with Turbopack.      |
| `build`            | `next build`                     | Compiles and builds the production application.                  |
| `start`            | `next start`                     | Runs the compiled production build locally.                      |
| `check`            | `oxlint --fix && oxfmt --write`  | Executes fast Rust-based linting and formatting.                 |
| `check-types`      | `next typegen && tsc --noEmit`   | Generates Next.js route types and runs TypeScript type checking. |
| `deploy:prev`      | `vercel`                         | Deploys an isolated preview build to Vercel.                     |
| `deploy:prod`      | `vercel --prod`                  | Deploys current tree directly to production.                     |
| `check-links`      | `bun scripts/validate-links.ts`  | Scans MDX documents for dead internal links and invalid anchors. |
| `generate:openapi` | `node scripts/generate-docs.mjs` | Generates MDX API references from `public/openapi.json`.         |

## AI & MCP Integration

Safepay Docs features a native MCP server implementation ([`src/app/api/mcp/route.ts`](src/app/api/mcp/route.ts)) exposing documentation tools to AI coding agents.

### Connecting Your AI Assistant

#### Cursor

Add the following to your Cursor configuration (`~/.cursor/mcp.json`):

```json
{
	"mcpServers": {
		"safepay-docs": {
			"url": "https://safepay.alihamas.pk/api/mcp"
		}
	}
}
```

#### Claude Desktop

Add to your `claude_desktop_config.json`:

```json
{
	"mcpServers": {
		"safepay-docs": {
			"url": "https://safepay.alihamas.pk/api/mcp"
		}
	}
}
```

#### Antigravity

Add the server to your `~/.gemini/config/mcp_config.json`:

```json
{
	"mcpServers": {
		"safepay-docs": {
			"serverUrl": "https://safepay.alihamas.pk/api/mcp"
		}
	}
}
```

### LLM Text Endpoints

- **`/llms.txt`**: Clean structured table of contents and documentation manifest.
- **`/llms-full.txt`**: Aggregated full-text markdown corpus suitable for context window injection.

> [!NOTE]
> For local development testing of MCP tools, point your client configuration to `http://localhost:3000/api/mcp`.

## OpenAPI Reference Generation

API reference pages under `content/docs/api-reference` are dynamically compiled from the OpenAPI 3.0 specification (`public/openapi.json`).

To regenerate documentation after modifying `openapi.json`:

```bash
bun run generate:openapi
```

This script parses the specification via Fumadocs OpenAPI and organizes routes into domain-specific categories (Payments, Subscriptions, Merchant Shoppers, and Authentication).

## Project Structure

```
safepay-docs/
├── content/
│   └── docs/                     # MDX documentation source files
│       ├── api-reference/        # Generated OpenAPI endpoint guides
│       ├── developers/           # Integration journeys, SDKs, webhooks, error guides
│       ├── payments/             # Core payment concepts, Raast, tokenization, checkout
│       └── mcp.mdx               # Model Context Protocol user guide
├── public/
│   ├── images/                   # Diagram assets and UI screenshots
│   ├── logo.svg                  # Adaptive theme-aware SVG project logo
│   └── openapi.json              # Safepay OpenAPI 3.0 REST specification
├── scripts/
│   ├── generate-docs.mjs         # OpenAPI-to-MDX documentation generator
│   └── validate-links.ts         # Internal link and anchor validation script
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── mcp/route.ts      # Model Context Protocol SSE & HTTP handler
│   │   │   └── search/route.ts   # Fumadocs search index API
│   │   ├── docs/                 # Documentation route layouts and views
│   │   ├── llms.txt/             # LLM discovery index endpoint
│   │   ├── llms-full.txt/        # LLM full documentation corpus endpoint
│   │   └── layout.tsx            # Global layout, fonts, and metadata configuration
│   ├── components/               # Custom MDX components, icons, and UI widgets
│   ├── lib/                      # Fumadocs content source loaders, routes, and helpers
│   └── proxy.ts                  # Edge CORS, preflight OPTIONS, and header handling
├── DEPLOYMENT.md                 # Production deployment and DNS routing runbook
├── next.config.ts                # Next.js configuration with Fumadocs MDX plugins
└── package.json                  # Dependencies, metadata, and build scripts
```

## Deployment

The project is pre-configured for automated continuous deployment with Vercel:

1. **Serverless Infrastructure**: Zero-config serverless function execution and global edge caching for optimal performance.
2. **CORS & Domain Handlers**: Automatic validation for custom domain `safepay.alihamas.pk` alongside all preview deployment subdomains (`*.vercel.app`).
3. **Optimized Uploads**: Controlled via `.vercelignore` to keep deployment build artifacts lightweight.
