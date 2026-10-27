import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { Step, Steps } from "fumadocs-ui/components/steps";
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";

import { Card } from "@/components/ui/card";
import { Tab, Tabs } from "@/components/ui/tabs";

export function getMDXComponents(components?: MDXComponents) {
	return {
		...defaultMdxComponents,
		Card,
		Steps,
		Step,
		Tabs,
		Tab,
		Accordion,
		Accordions,
		...components,
	} satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
	type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
