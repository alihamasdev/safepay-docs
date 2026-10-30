import { createMdxPlugin } from "fumadocs-mdx/bun";
import { type FileObject, printErrors, scanURLs, validateFiles } from "next-validate-link";

declare const Bun: {
	plugin: (plugin: unknown) => void;
};

Bun.plugin(createMdxPlugin());
await new Promise((resolve) => setTimeout(resolve, 300));

const { source } = await import("@/lib/source");

async function checkLinks() {
	const scanned = await scanURLs({
		// pick a preset for your React framework
		preset: "next",
		populate: {
			"docs/[[...slug]]": source.getPages().map((page) => {
				return {
					value: {
						slug: page.slugs,
					},
					hashes: getHeadings(page),
				};
			}),
		},
	});

	printErrors(
		await validateFiles(await getFiles(), {
			scanned,
			// check `href` attributes in different MDX components
			markdown: {
				components: {
					Card: { attributes: ["href"] },
				},
			},
			// check relative paths
			checkRelativePaths: "as-url",
			whitelist: (url) => url.startsWith("/openapi.json") || url.startsWith("/llms") || url.startsWith("/api/mcp"),
		}),
		true,
	);
}

function getHeadings({ data }: (typeof source)["$inferPage"]): string[] {
	return data.toc.map((item) => item.url.slice(1));
}

function getFiles() {
	const promises = source.getPages().map(async (page): Promise<FileObject> => ({
		path: page.absolutePath ?? page.path,
		content: await page.data.getText("raw"),
		url: page.url,
		data: page.data,
	}));

	return Promise.all(promises);
}

void checkLinks();
