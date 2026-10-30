import { createMcpHandler, McpServer } from "@modelcontextprotocol/server";
import { registerSearchTool, registerSourceTools } from "fumadocs-core/mcp";
import { createFromSource } from "fumadocs-core/search/server";

import { docsLlms, source } from "@/lib/source";

const handler = createMcpHandler(() => {
	const mcp = new McpServer({
		name: "safepay-docs",
		version: "1.0.0",
	});

	registerSourceTools(mcp, source, docsLlms);
	registerSearchTool(mcp, createFromSource(source));

	return mcp;
});

export async function GET(request: Request) {
	return handler.fetch(request);
}

export async function POST(request: Request) {
	return handler.fetch(request);
}

export async function DELETE(request: Request) {
	return handler.fetch(request);
}

export async function OPTIONS() {
	return new Response(null, {
		status: 204,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
			"Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With, Baggage, Sentry-Trace, Accept, Mcp-Version",
		},
	});
}
