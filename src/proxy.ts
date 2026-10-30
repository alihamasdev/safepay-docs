import { isMarkdownPreferred, rewritePath } from "fumadocs-core/negotiation";
import { type NextRequest, NextResponse } from "next/server";

import { docsContentRoute, docsRoute } from "@/lib/shared";

const { rewrite: rewriteDocs } = rewritePath(`${docsRoute}{/*path}`, `${docsContentRoute}{/*path}/content.md`);
const { rewrite: rewriteSuffix } = rewritePath(`${docsRoute}{/*path}.md`, `${docsContentRoute}{/*path}/content.md`);

function isAllowedOrigin(origin: string | null): boolean {
	if (!origin) return false;
	try {
		const { hostname } = new URL(origin);
		if (
			hostname === "localhost" ||
			hostname === "127.0.0.1" ||
			hostname === "vercel.app" ||
			hostname.endsWith(".vercel.app") ||
			hostname === "alihamas.pk" ||
			hostname.endsWith(".alihamas.pk")
		) {
			return true;
		}
	} catch {
		return false;
	}
	return false;
}

function applyCorsHeaders(response: NextResponse, origin: string | null) {
	if (origin && isAllowedOrigin(origin)) {
		response.headers.set("Access-Control-Allow-Origin", origin);
		response.headers.set("Access-Control-Allow-Credentials", "true");
	} else {
		response.headers.set("Access-Control-Allow-Origin", "*");
	}
	response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
	response.headers.set(
		"Access-Control-Allow-Headers",
		"Content-Type, Authorization, X-Requested-With, Baggage, Sentry-Trace, Accept, Mcp-Version",
	);
	response.headers.set("Access-Control-Max-Age", "86400");
}

export default function proxy(request: NextRequest) {
	const origin = request.headers.get("origin");
	const pathname = request.nextUrl.pathname;

	// Handle preflight OPTIONS requests for API and LLM routes
	if (request.method === "OPTIONS" && (pathname.startsWith("/api/") || pathname.startsWith("/llms"))) {
		const response = new NextResponse(null, { status: 204 });
		applyCorsHeaders(response, origin);
		return response;
	}

	const result = rewriteSuffix(pathname);
	if (result) {
		const response = NextResponse.rewrite(new URL(result, request.nextUrl));
		applyCorsHeaders(response, origin);
		return response;
	}

	if (isMarkdownPreferred(request)) {
		const result = rewriteDocs(pathname);

		if (result) {
			const response = NextResponse.rewrite(new URL(result, request.nextUrl), {
				// this URL has two representations, selected by `Accept`
				headers: { Vary: "Accept" },
			});
			applyCorsHeaders(response, origin);
			return response;
		}
	}

	const response = NextResponse.next();
	if (origin || pathname.startsWith("/api/") || pathname.startsWith("/llms")) {
		applyCorsHeaders(response, origin);
	}
	return response;
}
