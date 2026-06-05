import Navbar from "@/pages/home/components/Navbar";
import CaseStudiesHero from "./components/CaseStudiesHero";
import AfricaMapVisualization from "./components/AfricaMapVisualization";
import UseCasesGrid from "./components/UseCasesGrid";
import CaseStudiesFAQ from "./components/CaseStudiesFAQ";
import FinalCTA from "@/pages/home/components/FinalCTA";
import Footer from "@/pages/home/components/Footer";
import SEOHead from "../../components/feature/SEOHead";
import BackToTop from "../../components/feature/BackToTop";
import { useDemoModal } from "../../hooks/useDemoModal";

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://verifyafrica.io";

const caseStudiesSchema = [
	// ── WebPage ──────────────────────────────────────────────────────────────
	{
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		"@id": `${SITE_URL}/case-studies#webpage`,
		name: "Case Studies & Use Cases – KYC & AML Across Africa | VerifyAfrica",
		url: `${SITE_URL}/case-studies`,
		description:
			"Explore how VerifyAfrica powers KYC, AML, and identity verification for Fintech, FX Brokers, iGaming, Payment Providers, and Marketplaces across 54 African countries.",
		inLanguage: "en",
		isPartOf: { "@id": `${SITE_URL}/#website` },
		about: { "@id": `${SITE_URL}/#organization` },
		dateModified: new Date().toISOString().split("T")[0],
		speakable: {
			"@type": "SpeakableSpecification",
			cssSelector: ["h1", "h2", ".case-studies-hero"],
		},
		breadcrumb: { "@id": `${SITE_URL}/case-studies#breadcrumb` },
		publisher: { "@id": `${SITE_URL}/#organization` },
	},

	// ── Organization (back-reference) ────────────────────────────────────────
	{
		"@context": "https://schema.org",
		"@type": "Organization",
		"@id": `${SITE_URL}/#organization`,
		name: "VerifyAfrica",
		url: SITE_URL,
		logo: {
			"@type": "ImageObject",
			url: `${SITE_URL}/logo.png`,
			width: 200,
			height: 60,
		},
		description:
			"VerifyAfrica is Africa's leading AI-powered KYC, AML, and identity verification platform, enabling compliant onboarding across all 54 African countries.",
		areaServed: { "@type": "Place", name: "Africa" },
		sameAs: [
			"https://x.com/V3rifyAfrica",
			"https://www.linkedin.com/company/verifyafrica",
			"https://www.instagram.com/verifyafrica_official",
		],
	},

	// ── ItemList — industries served ─────────────────────────────────────────
	{
		"@context": "https://schema.org",
		"@type": "ItemList",
		"@id": `${SITE_URL}/case-studies#industries`,
		name: "Industries Served by VerifyAfrica",
		description:
			"Regulated industries across Africa that use VerifyAfrica for KYC, AML, and identity verification compliance.",
		numberOfItems: 8,
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Banks & Financial Institutions",
				url: `${SITE_URL}/case-studies`,
				description:
					"Traditional banks, microfinance institutions, and credit unions requiring robust KYC/AML compliance across Africa.",
			},
			{
				"@type": "ListItem",
				position: 2,
				name: "Fintechs & Payment Providers",
				url: `${SITE_URL}/case-studies`,
				description:
					"Digital payment platforms, mobile money operators, and fintech startups scaling across Africa with instant user verification.",
			},
			{
				"@type": "ListItem",
				position: 3,
				name: "FX Brokers",
				url: `${SITE_URL}/case-studies`,
				description:
					"Foreign exchange brokers requiring automated risk-based client tiering, EDD, and cross-border regulatory reporting.",
			},
			{
				"@type": "ListItem",
				position: 4,
				name: "iGaming & Sports Betting",
				url: `${SITE_URL}/case-studies`,
				description:
					"Online casinos and sports betting operators meeting AML and responsible gambling compliance across Africa's regulated markets.",
			},
			{
				"@type": "ListItem",
				position: 5,
				name: "Telecommunications",
				url: `${SITE_URL}/case-studies`,
				description:
					"Mobile network operators requiring SIM registration, mobile money compliance, and SIM swap fraud prevention.",
			},
			{
				"@type": "ListItem",
				position: 6,
				name: "E-commerce & Marketplaces",
				url: `${SITE_URL}/case-studies`,
				description:
					"Online marketplaces verifying buyers and sellers with identity confirmation and payment fraud prevention.",
			},
			{
				"@type": "ListItem",
				position: 7,
				name: "Insurance Companies",
				url: `${SITE_URL}/case-studies`,
				description:
					"Insurance providers requiring policyholder verification and claims fraud prevention across Africa.",
			},
			{
				"@type": "ListItem",
				position: 8,
				name: "Crypto & Web3",
				url: `${SITE_URL}/case-studies`,
				description:
					"Cryptocurrency exchanges and DeFi platforms meeting FATF travel rule and global compliance standards.",
			},
		],
	},

	// ── BreadcrumbList ───────────────────────────────────────────────────────
	{
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"@id": `${SITE_URL}/case-studies#breadcrumb`,
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
				name: "Case Studies & Use Cases",
				item: `${SITE_URL}/case-studies`,
			},
		],
	},
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: [
			{
				"@type": "Question",
				name: "What industries does VerifyAfrica serve?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "VerifyAfrica serves a wide range of regulated industries including Fintech, FX Brokers, iGaming & sports betting operators, Payment Service Providers, Banks & Microfinance Institutions, Telecoms, E-commerce marketplaces, Insurance, and Crypto & Web3 platforms. Our compliance infrastructure is purpose-built for the nuances of each vertical.",
				},
			},
			{
				"@type": "Question",
				name: "How quickly can we integrate the VerifyAfrica API?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Most teams complete their core API integration within 1–2 weeks. We provide full REST API documentation, code samples in six languages, sandbox credentials, and a dedicated onboarding engineer for enterprise accounts. Lighter integrations using our hosted verification link (Link Mode) can go live within hours.",
				},
			},
			{
				"@type": "Question",
				name: "Can VerifyAfrica handle high-volume KYC onboarding at scale?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Yes. The platform is built on horizontally scalable cloud infrastructure and supports real-time verification at any volume. Bulk Verification endpoints allow batch processing of up to 100 records per request for back-book remediation or mass onboarding programmes.",
				},
			},
			{
				"@type": "Question",
				name: "Which African countries and document types are supported?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "VerifyAfrica supports identity verification across all 54 African countries. Document coverage includes national ID cards, passports, driver's licences, and voter IDs across key markets such as Nigeria, South Africa, Kenya, Ghana, Egypt, Tanzania, Uganda, Côte d'Ivoire, and more.",
				},
			},
			{
				"@type": "Question",
				name: "What compliance results have clients achieved with VerifyAfrica?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Across our client base, outcomes include a 68% reduction in average KYC onboarding time, a 73% drop in fraud losses through AI-powered synthetic identity detection, a 54% decrease in false positive rates on AML screening, and compliance teams redeploying up to 40% of manual review capacity to higher-value risk analysis.",
				},
			},
			{
				"@type": "Question",
				name: "Does VerifyAfrica support AML screening and ongoing monitoring?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Yes. Beyond initial KYC, VerifyAfrica provides real-time AML screening against global sanctions lists, PEP databases, and adverse media sources. Continuous monitoring alerts compliance teams the moment a previously cleared customer appears on a new watchlist.",
				},
			},
			{
				"@type": "Question",
				name: "How does VerifyAfrica handle data privacy across different African jurisdictions?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "VerifyAfrica operates a privacy-first data architecture aligned with GDPR, Nigeria's NDPR, Kenya's Data Protection Act, and South Africa's POPIA. Regional data residency options are available and all cross-border transfers are governed by Standard Contractual Clauses.",
				},
			},
			{
				"@type": "Question",
				name: "Which African gambling regulators does VerifyAfrica support?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "VerifyAfrica supports iGaming operators regulated across all major African gambling jurisdictions: Kenya (Betting Control and Licensing Board – BCLB), Nigeria (National Lottery Regulatory Commission – NLRC and Lagos State Lotteries Board), South Africa (Western Cape, Eastern Cape and Gauteng Gambling Boards), Tanzania (Gaming Board of Tanzania – GBT), Uganda (National Lotteries and Gaming Regulatory Board – NLGRB), and Ghana (Gaming Commission of Ghana). Each jurisdiction has pre-mapped KYC and AML workflows covering player identity verification, PEP and sanctions screening, source of funds checks, self-exclusion register queries, and regulatory reporting.",
				},
			},
			{
				"@type": "Question",
				name: "Is there a way to try VerifyAfrica before committing to a plan?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Absolutely. We offer sandbox API credentials with test data and simulated responses for all verification types. Enterprise prospects also receive a guided proof-of-concept engagement where our team configures a live verification flow matched to your specific use case — free of charge and without obligation.",
				},
			},
		],
	},
];

export default function CaseStudiesPage() {
	const { openDemo } = useDemoModal();

	return (
		<div className="min-h-screen bg-white">
			<SEOHead
				title="Case Studies & Use Cases – KYC & AML Across Africa | VerifyAfrica"
				description="See how VerifyAfrica's compliance platform serves Fintech, FX Brokers, iGaming, Payment Providers, and Marketplaces across all 54 African countries with AI-powered KYC and AML."
				keywords="KYC case studies Africa, AML use cases, identity verification Africa fintech, FX broker compliance Africa"
				canonical="/case-studies"
				image="https://readdy.ai/api/search-image?query=African%20fintech%20banking%20compliance%20industry%20sectors%20use%20cases%20mosaic%20grid%20teal%20emerald%20gradient%20professional%20corporate%20abstract%20illustration%20business%20identity%20verification%20KYC%20AML%20clean%20modern%20background&width=1200&height=630&seq=og-casestudies-v1&orientation=landscape"
				twitterCard="summary_large_image"
				schema={caseStudiesSchema}
				geoRegion="AF"
				geoPosition="8.7832;34.5085"
				geoPlacename="Africa"
			/>
			<Navbar
				onRequestDemo={openDemo}
				variant="solid"
			/>
			<CaseStudiesHero />
			<AfricaMapVisualization />
			<UseCasesGrid onRequestDemo={openDemo} />
			<CaseStudiesFAQ />
			<FinalCTA onRequestDemo={openDemo} />
			<Footer />
			<BackToTop />
		</div>
	);
}
