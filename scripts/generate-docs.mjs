import { generateFiles } from "fumadocs-openapi";
import { createOpenAPI } from "fumadocs-openapi/server";

const openapi = createOpenAPI({
	input: ["./content/docs/api-reference/openapi.json"],
});

await generateFiles({
	input: openapi,
	output: "./content/docs/api-reference",
	per: "operation",
	groupBy: (op) => {
		const tag = op.item?.tags?.[0] || "Other";
		if (tag === "API Authentication") return "api-authentication";
		if (tag === "API Keys") return "api-keys";
		if (tag.startsWith("Merchant Shoppers")) {
			const sub = tag
				.replace("Merchant Shoppers - ", "")
				.trim()
				.toLowerCase()
				.replace(/[^a-z0-9]+/g, "-");
			return `merchant-shoppers/${sub}`;
		}
		if (tag.startsWith("Payments")) {
			const sub = tag
				.replace("Payments - ", "")
				.trim()
				.toLowerCase()
				.replace(/[^a-z0-9]+/g, "-");
			return `payments/${sub}`;
		}
		if (tag.startsWith("Subscriptions")) {
			const sub = tag
				.replace("Subscriptions - ", "")
				.trim()
				.toLowerCase()
				.replace(/[^a-z0-9]+/g, "-");
			return `subscriptions/${sub}`;
		}
		if (tag === "Quick Links") {
			return "quick-links/v1";
		}
		if (tag === "Quick Links - V2") {
			return "quick-links/v2";
		}
		if (tag.startsWith("Safepay Shoppers")) {
			const sub = tag
				.replace("Safepay Shoppers - ", "")
				.trim()
				.toLowerCase()
				.replace(/[^a-z0-9]+/g, "-");
			return `safepay-shoppers/${sub}`;
		}
		return "other";
	},
	meta: true,
	beforeWrite(files) {
		// 1. Root meta.json: define groups as separators (labels) and folders
		const rootMeta = files.find((f) => f.path === "meta.json");
		if (rootMeta) {
			const parsed = JSON.parse(rootMeta.content);
			parsed.title = "API Reference";
			parsed.root = true;
			parsed.pages = [
				"index",
				"---API Authentication---",
				"...api-authentication",
				"---API Keys---",
				"...api-keys",
				"---Merchant Shoppers---",
				"...merchant-shoppers",
				"---Payments---",
				"...payments",
				"---Subscriptions---",
				"...subscriptions",
				"---Quick Links---",
				"...quick-links",
				"---Safepay Shoppers---",
				"...safepay-shoppers",
			];
			rootMeta.content = JSON.stringify(parsed, null, 2);
		}

		// 2. Add intermediate meta.json for the 5 nested primary folders
		files.push({
			path: "merchant-shoppers/meta.json",
			content: JSON.stringify(
				{
					title: "Merchant Shoppers",
					pages: ["crud", "customer-payment-methods", "addresses"],
				},
				null,
				2,
			),
		});

		files.push({
			path: "payments/meta.json",
			content: JSON.stringify(
				{
					title: "Payments",
					pages: ["setup", "order", "configuration", "cancellations", "reporting", "meta", "webhooks"],
				},
				null,
				2,
			),
		});

		files.push({
			path: "subscriptions/meta.json",
			content: JSON.stringify(
				{
					title: "Subscriptions",
					pages: ["plans", "subscriptions", "transactions"],
				},
				null,
				2,
			),
		});

		files.push({
			path: "quick-links/meta.json",
			content: JSON.stringify(
				{
					title: "Quick Links",
					pages: ["v1", "v2"],
				},
				null,
				2,
			),
		});

		files.push({
			path: "safepay-shoppers/meta.json",
			content: JSON.stringify(
				{
					title: "Safepay Shoppers",
					pages: ["crud", "payment-methods"],
				},
				null,
				2,
			),
		});

		// 3. Set human-friendly titles for subfolder meta.json files
		const subTitleMap = {
			"api-authentication/meta.json": "API Authentication",
			"api-keys/meta.json": "API Keys",
			"merchant-shoppers/crud/meta.json": "CRUD",
			"merchant-shoppers/customer-payment-methods/meta.json": "Customer Payment Methods",
			"merchant-shoppers/addresses/meta.json": "Addresses",
			"payments/setup/meta.json": "Setup",
			"payments/order/meta.json": "Order",
			"payments/configuration/meta.json": "Configuration",
			"payments/cancellations/meta.json": "Cancellations",
			"payments/reporting/meta.json": "Reporting",
			"payments/meta/meta.json": "Meta",
			"payments/webhooks/meta.json": "Webhooks",
			"subscriptions/plans/meta.json": "Plans",
			"subscriptions/subscriptions/meta.json": "Subscriptions",
			"subscriptions/transactions/meta.json": "Transactions",
			"quick-links/v1/meta.json": "V1",
			"quick-links/v2/meta.json": "V2",
			"safepay-shoppers/crud/meta.json": "CRUD",
			"safepay-shoppers/payment-methods/meta.json": "Payment Methods",
		};

		for (const file of files) {
			if (subTitleMap[file.path]) {
				try {
					const meta = JSON.parse(file.content);
					meta.title = subTitleMap[file.path];
					file.content = JSON.stringify(meta, null, 2);
				} catch {}
			}
		}
	},
});

console.log("Successfully generated hierarchical API reference docs!");
