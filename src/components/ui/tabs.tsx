import { Tab, Tabs as BaseTabs, type TabsProps } from "fumadocs-ui/components/tabs";

const COMMON_LANGUAGES = ["node", "php", "javascript", "js", "typescript", "ts", "python", "py", "curl", "bash", "ruby", "go", "java"];

export function Tabs({ groupId, persist, ...props }: TabsProps) {
	const isLanguageTab = props.items?.some((item) => {
		const lower = item.toLowerCase();
		return COMMON_LANGUAGES.some((lang) => lower.includes(lang));
	});

	const resolvedGroupId = groupId ?? (isLanguageTab ? "language" : undefined);
	const resolvedPersist = persist ?? Boolean(resolvedGroupId);

	return <BaseTabs groupId={resolvedGroupId} persist={resolvedPersist} {...props} />;
}

export { Tab, type TabsProps };
