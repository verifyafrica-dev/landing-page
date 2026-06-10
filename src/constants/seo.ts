export const SITE_URL =
	import.meta.env.VITE_SITE_URL || "https://verifyafrica.io";

export const SITE_NAME = "VerifyAfrica";

export const TWITTER_SITE = "@VerifyAfrica";

export const BRAND_LOGO_PATH = "/assets/brand/meta-logo.svg";

export const BRAND_LOGO_URL = `${SITE_URL}${BRAND_LOGO_PATH}`;

export const BRAND_LOGO_WIDTH = 439;

export const BRAND_LOGO_HEIGHT = 257;

export const DEFAULT_OG_IMAGE_WIDTH = 1200;

export const DEFAULT_OG_IMAGE_HEIGHT = 630;

export const OG_LOCALE = "en_US";

export const OG_LOCALE_ALTERNATES = ["fr_FR", "ar_AR", "pt_PT"] as const;

export function resolveCanonicalUrl(path?: string): string {
	if (!path || path === "/") {
		return `${SITE_URL}/`;
	}
	return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function resolveImageUrl(image?: string): string | undefined {
	if (!image) return undefined;
	return image.startsWith("http") ? image : `${SITE_URL}${image}`;
}

/** Homepage SEO copy — tuned per channel character limits */
export const HOME_SEO = {
	title: "KYC, AML, Biometrics & KYB for Africa | VerifyAfrica",
	description:
		"VerifyAfrica delivers AI-powered KYC, AML, KYB and biometrics in all 54 African countries. One platform for banks, fintech and marketplaces.",
	ogDescription:
		"AI-powered KYC, AML, KYB and biometrics across 54 African countries. One platform for banks, fintech and marketplaces.",
	twitterDescription:
		"Onboard and monitor users across all 54 African countries. AI-driven KYC, AML screening, biometrics, and audit-ready compliance for banks, fintech, FX brokers, iGaming, and marketplaces.",
	imageAlt: "VerifyAfrica – KYC, AML, Biometrics & KYB for Africa",
} as const;

/** Shared Open Graph / Twitter image props — brand logo on every page */
export const DEFAULT_OG_IMAGE = {
	image: BRAND_LOGO_PATH,
	imageWidth: BRAND_LOGO_WIDTH,
	imageHeight: BRAND_LOGO_HEIGHT,
	twitterCard: "summary_large_image" as const,
};

export const ABOUT_SEO = {
	title: "About VerifyAfrica – Our Mission, Team & Values",
	description:
		"Discover the story behind VerifyAfrica. We are building Africa's most trusted AI-powered KYC, AML, and identity verification infrastructure to power compliant growth across 54 countries.",
	ogDescription:
		"Meet the team building Africa's most trusted KYC, AML, and identity verification infrastructure across 54 countries.",
	twitterDescription:
		"VerifyAfrica is building Africa's most trusted compliance infrastructure — AI-powered KYC, AML, and identity verification across all 54 countries.",
	imageAlt: "About VerifyAfrica – Our Mission, Team & Values",
	keywords:
		"about VerifyAfrica, KYC Africa team, compliance infrastructure Africa, identity verification mission",
	canonical: "/about",
} as const;

export const CONTACT_SEO = {
	title: "Contact Us – Request a Demo or Get Support | VerifyAfrica",
	description:
		"Contact VerifyAfrica to request a demo, learn about our KYC, AML, and identity verification platform, or get enterprise support. We cover all 54 African countries.",
	ogDescription:
		"Request a demo or get support for VerifyAfrica's KYC and AML platform. Enterprise integration across all 54 African countries.",
	twitterDescription:
		"Get in touch with VerifyAfrica — request a demo, discuss enterprise KYC/AML integration, or reach our support team across Africa.",
	imageAlt: "Contact VerifyAfrica – Request a Demo or Get Support",
	keywords:
		"contact VerifyAfrica, request demo KYC Africa, compliance platform support, identity verification Africa contact",
	canonical: "/contact",
} as const;

export const CASE_STUDIES_SEO = {
	title: "Case Studies & Use Cases – KYC & AML Across Africa | VerifyAfrica",
	description:
		"See how VerifyAfrica's compliance platform serves Fintech, FX Brokers, iGaming, Payment Providers, and Marketplaces across all 54 African countries with AI-powered KYC and AML.",
	ogDescription:
		"How Fintech, FX Brokers, iGaming, and marketplaces use VerifyAfrica for KYC and AML across 54 African countries.",
	twitterDescription:
		"Real-world KYC and AML use cases for Fintech, FX Brokers, iGaming, and marketplaces powered by VerifyAfrica across Africa.",
	imageAlt: "VerifyAfrica Case Studies & Use Cases – KYC & AML Across Africa",
	keywords:
		"KYC case studies Africa, AML use cases, identity verification Africa fintech, FX broker compliance Africa",
	canonical: "/case-studies",
} as const;

export const FEATURES_INDEX_SEO = {
	title: "Platform Features – KYC, AML, Biometrics & KYB for Africa | VerifyAfrica",
	description:
		"Explore all VerifyAfrica platform capabilities: identity verification, KYB, AML screening, biometrics, fraud detection, address verification, transaction risk scoring, and ongoing monitoring across all 54 African countries.",
	ogDescription:
		"Identity verification, KYB, AML screening, biometrics, fraud detection, and ongoing monitoring — all in one platform for Africa.",
	twitterDescription:
		"Explore VerifyAfrica's full platform: KYC, KYB, AML screening, biometrics, fraud detection, and monitoring across 54 African countries.",
	imageAlt: "VerifyAfrica Platform Features – KYC, AML, Biometrics & KYB for Africa",
	keywords:
		"KYC features Africa, AML screening platform, identity verification API, biometrics Africa, KYB business verification, fraud detection Africa",
	canonical: "/features",
} as const;

export const SUPPORT_SEO = {
	title: "Support – Help Center & Resources | VerifyAfrica",
	description:
		"Find answers, submit support tickets, and access documentation for VerifyAfrica's KYC, AML, and identity verification platform. Our team is ready to help.",
	ogDescription:
		"Submit support tickets and find documentation for VerifyAfrica's KYC and AML compliance platform.",
	twitterDescription:
		"VerifyAfrica support — help center, documentation, and ticket submission for KYC, AML, and identity verification.",
	imageAlt: "VerifyAfrica Support – Help Center & Resources",
	keywords:
		"VerifyAfrica support, KYC platform help, AML compliance support, identity verification documentation",
	canonical: "/support",
} as const;

export const RESOURCES_SEO = {
	title: "Free Compliance Resources & Guides | VerifyAfrica",
	description:
		"Download free KYC checklists, AML templates, PEP screening guides, and compliance playbooks built for African fintech and financial services teams.",
	ogDescription:
		"Free KYC checklists, AML templates, and compliance playbooks for African fintech and financial services teams.",
	twitterDescription:
		"Free compliance resources for Africa — KYC checklists, AML templates, PEP guides, and playbooks from VerifyAfrica.",
	imageAlt: "VerifyAfrica Free Compliance Resources & Guides",
	keywords:
		"KYC checklist Africa, AML template, PEP screening guide, compliance playbook, African fintech compliance",
	canonical: "/resources",
} as const;

export const PRIVACY_POLICY_SEO = {
	title: "Privacy Policy | VerifyAfrica",
	description:
		"Read VerifyAfrica's Privacy Policy to understand how we collect, process, and protect personal data in our KYC, AML, and identity verification platform.",
	imageAlt: "VerifyAfrica Privacy Policy",
	canonical: "/privacy-policy",
	noIndex: true,
} as const;

export const TERMS_SEO = {
	title: "Terms of Service | VerifyAfrica",
	description:
		"Read VerifyAfrica's Terms of Service governing access to and use of our KYC, AML, and identity verification compliance platform.",
	imageAlt: "VerifyAfrica Terms of Service",
	canonical: "/terms",
	noIndex: true,
} as const;

export const COOKIE_POLICY_SEO = {
	title: "Cookie Policy | VerifyAfrica",
	description:
		"Learn how VerifyAfrica uses cookies and similar technologies on our KYC and AML compliance platform, and how you can manage your preferences.",
	imageAlt: "VerifyAfrica Cookie Policy",
	canonical: "/cookie-policy",
	noIndex: true,
} as const;

export const DATA_DISPOSAL_POLICY_SEO = {
	title: "Data Disposal & Destruction Policy | VerifyAfrica",
	description:
		"Read VerifyAfrica's Data Disposal & Destruction Policy covering secure data retention, archiving, and certified destruction practices under GDPR, NDPR, and U.S. law.",
	imageAlt: "VerifyAfrica Data Disposal & Destruction Policy",
	canonical: "/data-disposal-policy",
	noIndex: true,
} as const;
