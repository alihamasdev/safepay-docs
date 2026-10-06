"use client";

import { createCodeUsageGeneratorRegistry } from "fumadocs-openapi/requests/generators";
import { curl } from "fumadocs-openapi/requests/generators/curl";
import { javascript } from "fumadocs-openapi/requests/generators/javascript";
import { python } from "fumadocs-openapi/requests/generators/python";
import { createOpenAPIPage } from "fumadocs-openapi/ui";

import type { CodeUsageGenerator } from "fumadocs-openapi/requests/generators";

const phpGenerator: CodeUsageGenerator = {
	label: "PHP",
	lang: "php",
	generate(data) {
		const method = data.method.toUpperCase();
		const headers: string[] = [];

		if (data.bodyMediaType) {
			headers.push(`"Content-Type: ${data.bodyMediaType}"`);
		}

		for (const [k, v] of Object.entries(data.header || {})) {
			headers.push(`"${k}: ${v.value}"`);
		}

		let bodyOption = "";
		if (data.body) {
			if (data.bodyMediaType === "application/json") {
				bodyOption = `\ncurl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(${JSON.stringify(data.body, null, 2)}));`;
			} else if (typeof data.body === "string") {
				bodyOption = `\ncurl_setopt($ch, CURLOPT_POSTFIELDS, ${JSON.stringify(data.body)});`;
			} else {
				bodyOption = `\ncurl_setopt($ch, CURLOPT_POSTFIELDS, ${JSON.stringify(data.body, null, 2)});`;
			}
		}

		const headersCode =
			headers.length > 0
				? `curl_setopt($ch, CURLOPT_HTTPHEADER, [\n${headers.map((h) => "  " + h).join(",\n")}\n]);`
				: `curl_setopt($ch, CURLOPT_HTTPHEADER, []);`;

		return `<?php

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "${data.url}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "${method}");
${headersCode}${bodyOption}

$response = curl_exec($ch);

if (curl_errno($ch)) {
    echo "Error: " . curl_error($ch);
} else {
    echo $response;
}

curl_close($ch);
`;
	},
};

const codeUsages = createCodeUsageGeneratorRegistry();

// Required languages in exact order: Nodejs, PHP, Python, curl
codeUsages.add("nodejs", {
	...javascript,
	label: "Node.js",
	lang: "js",
});

codeUsages.add("php", phpGenerator);

codeUsages.add("python", {
	...python,
	label: "Python",
	lang: "python",
});

codeUsages.add("curl", {
	...curl,
	label: "curl",
	lang: "bash",
});

export const OpenAPIPage = createOpenAPIPage({
	codeUsages,
});
