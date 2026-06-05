import { lazy, Suspense, ReactNode } from "react";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Navbar from "./components/Navbar";
import SEOHead from "../../components/feature/SEOHead";
import { useDemoModal } from "../../hooks/useDemoModal";

// Below-fold sections — lazy loaded so they don't block the initial paint
const ProblemSolution = lazy(() => import("./components/ProblemSolution"));
const Features = lazy(() => import("./components/Features"));
const ComplianceSystem = lazy(() => import("./components/ComplianceSystem"));
const HowItWorks = lazy(() => import("./components/HowItWorks"));
const UseCases = lazy(() => import("./components/UseCases"));
const Pricing = lazy(() => import("./components/Pricing"));
const Security = lazy(() => import("./components/Security"));
const FAQ = lazy(() => import("./components/FAQ"));
const FinalCTA = lazy(() => import("./components/FinalCTA"));
const Footer = lazy(() => import("./components/Footer"));

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://verifyafrica.io";

const homeSchema = [
	// ── WebSite — canonical anchor, shared across all pages via @id ──────────
	{
		"@context": "https://schema.org",
		"@type": "WebSite",
		"@id": `${SITE_URL}/#website`,
		name: "VerifyAfrica",
		url: SITE_URL,
		description:
			"AI-powered KYC, AML screening, and identity verification across all 54 African countries.",
		inLanguage: "en",
		publisher: { "@id": `${SITE_URL}/#organization` },
		potentialAction: {
			"@type": "SearchAction",
			target: {
				"@type": "EntryPoint",
				urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
			},
			"query-input": "required name=search_term_string",
		},
	},

	// ── Organization — canonical anchor, referenced by all other pages ───────
	{
		"@context": "https://schema.org",
		"@type": "Organization",
		"@id": `${SITE_URL}/#organization`,
		name: "VerifyAfrica",
		legalName: "VerifyAfrica Ltd",
		url: SITE_URL,
		logo: {
			"@type": "ImageObject",
			"@id": `${SITE_URL}/#logo`,
			url: `${SITE_URL}/logo.png`,
			width: 200,
			height: 60,
			caption: "VerifyAfrica",
		},
		image: { "@id": `${SITE_URL}/#logo` },
		description:
			"VerifyAfrica provides AI-powered compliance and identity infrastructure for Africa, covering KYC, KYB, AML screening, biometrics, and fraud detection across all 54 African countries.",
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
		areaServed: { "@type": "Place", name: "Africa" },
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

	// ── WebPage — homepage node, linked to the org + website anchors ─────────
	{
		"@context": "https://schema.org",
		"@type": "WebPage",
		"@id": `${SITE_URL}/#webpage`,
		url: SITE_URL,
		name: "KYC, AML, Biometrics & KYB Verification in Africa | VerifyAfrica",
		description:
			"Onboard and monitor users across all 54 African countries through one platform. AI-driven KYC, AML screening, biometrics, and audit-ready compliance controls.",
		inLanguage: "en",
		isPartOf: { "@id": `${SITE_URL}/#website` },
		about: { "@id": `${SITE_URL}/#organization` },
		dateModified: new Date().toISOString().split("T")[0],
		speakable: {
			"@type": "SpeakableSpecification",
			cssSelector: ["h1", "h2"],
		},
		breadcrumb: {
			"@type": "BreadcrumbList",
			itemListElement: [
				{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
			],
		},
	},

	// ── SoftwareApplication — product listing ────────────────────────────────
	{
		"@context": "https://schema.org",
		"@type": "SoftwareApplication",
		name: "VerifyAfrica Platform",
		applicationCategory: "BusinessApplication",
		operatingSystem: "Web",
		url: SITE_URL,
		author: { "@id": `${SITE_URL}/#organization` },
		description:
			"One API to verify identities, businesses, and risk profiles across all 54 African countries using AI-driven checks, registry integrations, and audit-ready compliance controls.",
		offers: {
			"@type": "Offer",
			priceCurrency: "USD",
			availability: "https://schema.org/InStock",
		},
	},
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: [
			{
				"@type": "Question",
				name: "What countries does VerifyAfrica cover?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "VerifyAfrica supports identity verification and compliance workflows across all 54 African countries, using a mix of AI-driven checks and official registry integrations where available.",
				},
			},
			{
				"@type": "Question",
				name: "How is VerifyAfrica different from global KYC providers?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Global tools often require multiple integrations and lack audit-ready controls for African markets. VerifyAfrica provides a single compliance platform with verification, governance, and ongoing monitoring built specifically for Africa.",
				},
			},
			{
				"@type": "Question",
				name: "Do you integrate with government registries?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Where available, VerifyAfrica connects to official registries and authoritative data sources to strengthen verification accuracy, combined with AI-based validation and multi-source checks.",
				},
			},
			{
				"@type": "Question",
				name: "Is VerifyAfrica suitable for regulated industries?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Yes. The platform is built as a Compliance Operating System with audit logs, evidence retention, decision transparency, and governance controls to support regulated environments.",
				},
			},
			{
				"@type": "Question",
				name: "Can we use your API instead of the dashboard?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Yes. Businesses can integrate via API directly into their onboarding flows or use the VerifyAfrica dashboard for case management and monitoring.",
				},
			},
			{
				"@type": "Question",
				name: "Do you offer ongoing monitoring?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Yes. VerifyAfrica provides continuous monitoring, risk signals, and configurable alerts beyond initial onboarding.",
				},
			},
			{
				"@type": "Question",
				name: "How is pricing structured?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Pricing includes a monthly platform fee plus usage-based verification pricing, with volume tiers and enterprise configurations available.",
				},
			},
			{
				"@type": "Question",
				name: "How long does integration take?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Most API integrations take 1–2 weeks, depending on workflow complexity.",
				},
			},
		],
	},
];

/** Minimal skeleton shown while lazy chunks download */
function SectionSkeleton() {
	return (
		<div
			className="py-16 bg-white"
			aria-hidden="true"
			style={{ containIntrinsicSize: "0 400px" }}
		/>
	);
}

/** Wrapper that defers rendering cost for off-screen sections */
function LazySection({
	children,
	height = 600,
}: {
	children: ReactNode;
	height?: number;
}) {
	return (
		<div
			style={{
				contentVisibility: "auto",
				containIntrinsicSize: `0 ${height}px`,
			}}
		>
			{children}
		</div>
	);
}

export default function HomePage() {
	const { openDemo } = useDemoModal();

	return (
		<div className="min-h-screen bg-white">
			<SEOHead
				title="KYC, AML, Biometrics & KYB Verification in Africa"
				description="Onboard and monitor users across all 54 African countries through one platform. Verify identities, businesses, and risk profiles using AI-driven KYC, AML screening, biometrics, ongoing monitoring and audit-ready compliance controls for Banks, Fintech, FX Brokers, iGaming, and Marketplaces."
				keywords="KYC Africa, AML screening Africa, identity verification Africa, VerifyAfrica, compliance platform Africa"
				canonical="/"
				image="https://readdy.ai/api/search-image?query=professional%20digital%20compliance%20platform%20Africa%20continent%20map%20silhouette%20overlay%20teal%20emerald%20color%20scheme%20clean%20abstract%20technology%20dashboard%20identity%20verification%20corporate%20background%20minimal%20geometric%20design&width=1200&height=630&seq=og-home-v1&orientation=landscape"
				twitterCard="summary_large_image"
				schema={homeSchema}
			/>
			<Navbar onRequestDemo={openDemo} />
			{/* Above-fold — always eager */}
			<Hero onRequestDemo={openDemo} />
			<TrustStrip />
			{/* Below-fold — lazy loaded + content-visibility deferred with accurate height hints */}
			<Suspense fallback={<SectionSkeleton />}>
				<LazySection height={500}>
					<ProblemSolution />
				</LazySection>
			</Suspense>
			<Suspense fallback={<SectionSkeleton />}>
				<LazySection height={700}>
					<Features />
				</LazySection>
			</Suspense>
			<Suspense fallback={<SectionSkeleton />}>
				<LazySection height={480}>
					<ComplianceSystem />
				</LazySection>
			</Suspense>
			<Suspense fallback={<SectionSkeleton />}>
				<LazySection height={520}>
					<HowItWorks />
				</LazySection>
			</Suspense>
			<Suspense fallback={<SectionSkeleton />}>
				<LazySection height={600}>
					<UseCases />
				</LazySection>
			</Suspense>
			<Suspense fallback={<SectionSkeleton />}>
				<LazySection height={700}>
					<Pricing />
				</LazySection>
			</Suspense>
			<Suspense fallback={<SectionSkeleton />}>
				<LazySection height={400}>
					<Security />
				</LazySection>
			</Suspense>
			<Suspense fallback={<SectionSkeleton />}>
				<LazySection height={600}>
					<FAQ />
				</LazySection>
			</Suspense>
			<Suspense fallback={<SectionSkeleton />}>
				<LazySection height={350}>
					<FinalCTA onRequestDemo={openDemo} />
				</LazySection>
			</Suspense>
			<Suspense fallback={<SectionSkeleton />}>
				<Footer />
			</Suspense>
		</div>
	);
}
