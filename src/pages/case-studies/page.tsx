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
import { CASE_STUDIES_SEO, DEFAULT_OG_IMAGE } from "@/constants/seo";
import {
	createBreadcrumbList,
	createWebPageSchema,
	pageUrl,
} from "@/lib/schema";

const caseStudiesPath = CASE_STUDIES_SEO.canonical;
const caseStudiesUrl = pageUrl(caseStudiesPath);

const caseStudiesSchema = [
	createWebPageSchema({
		path: caseStudiesPath,
		type: "CollectionPage",
		name: CASE_STUDIES_SEO.title,
		description: CASE_STUDIES_SEO.description,
		speakableCssSelectors: ["h1", "h2", ".case-studies-hero"],
	}),
	{
		"@context": "https://schema.org",
		"@type": "ItemList",
		"@id": `${caseStudiesUrl}#industries`,
		name: "Industries Served by VerifyAfrica",
		description:
			"Regulated industries across Africa that use VerifyAfrica for KYC, AML, and identity verification compliance.",
		numberOfItems: 8,
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Banks & Financial Institutions",
				url: caseStudiesUrl,
				description:
					"Traditional banks, microfinance institutions, and credit unions requiring robust KYC/AML compliance across Africa.",
			},
			{
				"@type": "ListItem",
				position: 2,
				name: "Fintechs & Payment Providers",
				url: caseStudiesUrl,
				description:
					"Digital payment platforms, mobile money operators, and fintech startups scaling across Africa with instant user verification.",
			},
			{
				"@type": "ListItem",
				position: 3,
				name: "FX Brokers",
				url: caseStudiesUrl,
				description:
					"Foreign exchange brokers requiring automated risk-based client tiering, EDD, and cross-border regulatory reporting.",
			},
			{
				"@type": "ListItem",
				position: 4,
				name: "iGaming & Sports Betting",
				url: caseStudiesUrl,
				description:
					"Online casinos and sports betting operators meeting AML and responsible gambling compliance across Africa's regulated markets.",
			},
			{
				"@type": "ListItem",
				position: 5,
				name: "Telecommunications",
				url: caseStudiesUrl,
				description:
					"Mobile network operators requiring SIM registration, mobile money compliance, and SIM swap fraud prevention.",
			},
			{
				"@type": "ListItem",
				position: 6,
				name: "E-commerce & Marketplaces",
				url: caseStudiesUrl,
				description:
					"Online marketplaces verifying buyers and sellers with identity confirmation and payment fraud prevention.",
			},
			{
				"@type": "ListItem",
				position: 7,
				name: "Insurance Companies",
				url: caseStudiesUrl,
				description:
					"Insurance providers requiring policyholder verification and claims fraud prevention across Africa.",
			},
			{
				"@type": "ListItem",
				position: 8,
				name: "Crypto & Web3",
				url: caseStudiesUrl,
				description:
					"Cryptocurrency exchanges and DeFi platforms meeting FATF travel rule and global compliance standards.",
			},
		],
	},
	createBreadcrumbList(caseStudiesPath, [
		{ name: "Home", path: "/" },
		{ name: "Case Studies & Use Cases", path: caseStudiesPath },
	]),
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
				title={CASE_STUDIES_SEO.title}
				description={CASE_STUDIES_SEO.description}
				ogDescription={CASE_STUDIES_SEO.ogDescription}
				twitterDescription={CASE_STUDIES_SEO.twitterDescription}
				keywords={CASE_STUDIES_SEO.keywords}
				canonical={CASE_STUDIES_SEO.canonical}
				imageAlt={CASE_STUDIES_SEO.imageAlt}
				schema={caseStudiesSchema}
				geoRegion="AF"
				geoPosition="8.7832;34.5085"
				geoPlacename="Africa"
				{...DEFAULT_OG_IMAGE}
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
