import { SITE_URL } from "@/constants/seo";

export const SCHEMA_IDS = {
	website: `${SITE_URL}/#website`,
	organization: `${SITE_URL}/#organization`,
	logo: `${SITE_URL}/#logo`,
	homeWebpage: `${SITE_URL}/#webpage`,
} as const;

export function pageUrl(path: string): string {
	if (!path || path === "/") {
		return `${SITE_URL}/`;
	}
	return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function todayIsoDate(): string {
	return new Date().toISOString().split("T")[0];
}

export function breadcrumbId(path: string): string {
	return `${pageUrl(path)}#breadcrumb`;
}

export function webpageId(path: string): string {
	return `${pageUrl(path)}#webpage`;
}

export interface BreadcrumbItem {
	name: string;
	/** Route path, e.g. `/about`. Use `/` for home. */
	path: string;
}

export function createBreadcrumbList(pagePath: string, items: BreadcrumbItem[]) {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"@id": breadcrumbId(pagePath),
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.name,
			item: pageUrl(item.path),
		})),
	};
}

export interface WebPageSchemaOptions {
	path: string;
	name: string;
	description: string;
	type?: string;
	speakableCssSelectors?: string[];
	linkBreadcrumb?: boolean;
	potentialAction?: object;
}

/** Standard page node — references canonical #website and #organization anchors from the homepage. */
export function createWebPageSchema(options: WebPageSchemaOptions) {
	const url = pageUrl(options.path);
	const schema: Record<string, unknown> = {
		"@context": "https://schema.org",
		"@type": options.type ?? "WebPage",
		"@id": webpageId(options.path),
		name: options.name,
		url,
		description: options.description,
		inLanguage: "en",
		isPartOf: { "@id": SCHEMA_IDS.website },
		about: { "@id": SCHEMA_IDS.organization },
		dateModified: todayIsoDate(),
		publisher: { "@id": SCHEMA_IDS.organization },
	};

	if (options.speakableCssSelectors?.length) {
		schema.speakable = {
			"@type": "SpeakableSpecification",
			cssSelector: options.speakableCssSelectors,
		};
	}

	if (options.linkBreadcrumb !== false) {
		schema.breadcrumb = { "@id": breadcrumbId(options.path) };
	}

	if (options.potentialAction) {
		schema.potentialAction = options.potentialAction;
	}

	return schema;
}

export function createLegalPageSchema(
	path: string,
	name: string,
	description: string,
	breadcrumbLabel: string,
) {
	return [
		createWebPageSchema({ path, name, description }),
		createBreadcrumbList(path, [
			{ name: "Home", path: "/" },
			{ name: breadcrumbLabel, path },
		]),
	];
}

export function createFaqSchema(
	questions: Array<{ question: string; answer: string }>,
) {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: questions.map(({ question, answer }) => ({
			"@type": "Question",
			name: question,
			acceptedAnswer: {
				"@type": "Answer",
				text: answer,
			},
		})),
	};
}
