import { lazy, Suspense } from "react";
import { useDemoModal } from "../../hooks/useDemoModal";
import Navbar from "@/pages/home/components/Navbar";
import AboutHero from "./components/AboutHero";
import SEOHead from "../../components/feature/SEOHead";

// Lazy-load everything below the fold — none of these are needed for FCP
const OurStory = lazy(() => import("./components/OurStory"));
const CoreValues = lazy(() => import("./components/CoreValues"));
const Footer = lazy(() => import("@/pages/home/components/Footer"));

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://verifyafrica.io";

const aboutSchema = [
	// ── WebPage ──────────────────────────────────────────────────────────────
	{
		"@context": "https://schema.org",
		"@type": "AboutPage",
		"@id": `${SITE_URL}/about#webpage`,
		name: "About VerifyAfrica – Our Mission, Team & Values",
		url: `${SITE_URL}/about`,
		description:
			"Learn about VerifyAfrica – the team, mission, and values behind Africa's leading AI-powered KYC and compliance infrastructure.",
		inLanguage: "en",
		isPartOf: { "@id": `${SITE_URL}/#website` },
		about: { "@id": `${SITE_URL}/#organization` },
		dateModified: new Date().toISOString().split("T")[0],
		// Speakable — tells Google Assistant / voice search which sections to read aloud
		speakable: {
			"@type": "SpeakableSpecification",
			cssSelector: ["#story", "#values"],
		},
		breadcrumb: { "@id": `${SITE_URL}/about#breadcrumb` },
		publisher: { "@id": `${SITE_URL}/#organization` },
	},

	// ── Website anchor ───────────────────────────────────────────────────────
	{
		"@context": "https://schema.org",
		"@type": "WebSite",
		"@id": `${SITE_URL}/#website`,
		url: SITE_URL,
		name: "VerifyAfrica",
		description:
			"Africa's leading AI-powered KYC, AML, and identity verification platform.",
		publisher: { "@id": `${SITE_URL}/#organization` },
		inLanguage: "en",
		// SiteLinksSearchBox — enables Google to show a search box in SERPs
		potentialAction: {
			"@type": "SearchAction",
			target: {
				"@type": "EntryPoint",
				urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
			},
			"query-input": "required name=search_term_string",
		},
	},

	// ── Organization (rich) ──────────────────────────────────────────────────
	{
		"@context": "https://schema.org",
		"@type": "Organization",
		"@id": `${SITE_URL}/#organization`,
		name: "VerifyAfrica",
		legalName: "VerifyAfrica Ltd",
		url: SITE_URL,
		logo: {
			"@type": "ImageObject",
			url: `${SITE_URL}/logo.png`,
			width: 200,
			height: 60,
		},
		image: `${SITE_URL}/og-image.png`,
		description:
			"VerifyAfrica is Africa's leading AI-powered KYC, AML, and identity verification platform, enabling compliant onboarding across all 54 African countries for Fintech, FX Brokers, iGaming, Banks, and Marketplaces.",
		foundingDate: "2023",
		foundingLocation: {
			"@type": "Place",
			name: "Lagos, Nigeria",
			address: {
				"@type": "PostalAddress",
				addressLocality: "Lagos",
				addressCountry: "NG",
			},
		},
		address: {
			"@type": "PostalAddress",
			addressCountry: "CY",
		},
		areaServed: {
			"@type": "Place",
			name: "Africa",
			geo: {
				"@type": "GeoCoordinates",
				latitude: 8.7832,
				longitude: 34.5085,
			},
		},
		numberOfEmployees: {
			"@type": "QuantitativeValue",
			minValue: 10,
			maxValue: 50,
		},
		knowsAbout: [
			"KYC compliance Africa",
			"AML screening",
			"Identity verification",
			"Biometric verification",
			"Document verification",
			"Regulatory compliance Africa",
			"NDPR compliance",
			"POPIA compliance",
			"FATF compliance",
			"Fintech compliance",
			"iGaming compliance Africa",
			"FX broker compliance",
		],
		hasOfferCatalog: {
			"@type": "OfferCatalog",
			name: "VerifyAfrica Compliance Services",
			itemListElement: [
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "KYC Identity Verification",
						description:
							"AI-powered identity verification across all 54 African countries supporting national IDs, passports, and driver's licences.",
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "AML Screening & Monitoring",
						description:
							"Real-time AML screening against global sanctions lists, PEP databases, and adverse media with continuous monitoring.",
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "Biometric Verification",
						description:
							"Liveness detection and facial biometric matching to prevent identity fraud during onboarding.",
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "KYB Business Verification",
						description:
							"Know Your Business verification for corporate onboarding including director checks and UBO identification.",
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "Compliance API",
						description:
							"REST API and hosted Link Mode for fast integration of KYC, AML, and biometric checks into any platform.",
					},
				},
			],
		},
		sameAs: [
			"https://x.com/V3rifyAfrica",
			"https://www.linkedin.com/company/verifyafrica",
			"https://www.instagram.com/verifyafrica_official",
		],
		contactPoint: [
			{
				"@type": "ContactPoint",
				email: "support@verifyafrica.io",
				contactType: "customer support",
				areaServed: "Africa",
				availableLanguage: ["English", "French", "Arabic", "Portuguese"],
			},
			{
				"@type": "ContactPoint",
				email: "sales@verifyafrica.io",
				contactType: "sales",
				areaServed: "Africa",
				availableLanguage: ["English"],
			},
		],
	},

	// ── BreadcrumbList ───────────────────────────────────────────────────────
	{
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"@id": `${SITE_URL}/about#breadcrumb`,
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Home",
				item: SITE_URL,
			},
			{
				"@type": "ListItem",
				position: 2,
				name: "About VerifyAfrica",
				item: `${SITE_URL}/about`,
			},
		],
	},
];

export default function AboutPage() {
	const { openDemo } = useDemoModal();

	return (
		<div className="min-h-screen bg-white">
			<SEOHead
				title="About VerifyAfrica – Our Mission, Team & Values"
				description="Discover the story behind VerifyAfrica. We are building Africa's most trusted AI-powered KYC, AML, and identity verification infrastructure to power compliant growth across 54 countries."
				keywords="about VerifyAfrica, KYC Africa team, compliance infrastructure Africa, identity verification mission"
				canonical="/about"
				image="https://readdy.ai/api/search-image?query=corporate%20mission%20and%20values%20concept%20abstract%20illustration%20teal%20and%20warm%20white%20tones%20professional%20company%20culture%20diverse%20team%20silhouettes%20modern%20Africa%20technology%20company%20clean%20minimalist%20background%20geometric%20shapes&width=1200&height=630&seq=og-about-v1&orientation=landscape"
				twitterCard="summary_large_image"
				schema={aboutSchema}
			/>
			<Navbar
				onRequestDemo={openDemo}
				variant="solid"
			/>
			<AboutHero />
			<Suspense fallback={<div className="h-96 bg-white" />}>
				<OurStory />
			</Suspense>
			<Suspense fallback={<div className="h-64 bg-gray-50" />}>
				<CoreValues />
			</Suspense>
			<Suspense fallback={null}>
				<Footer />
			</Suspense>
		</div>
	);
}
