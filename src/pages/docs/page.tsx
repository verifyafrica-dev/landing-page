import { useState } from "react";
import { useDemoModal } from "../../hooks/useDemoModal";
import Navbar from "@/pages/home/components/Navbar";
import Footer from "@/pages/home/components/Footer";
import BackToTop from "../../components/feature/BackToTop";
import DocsSidebar from "./components/DocsSidebar";
import DocsContent from "./components/DocsContent";
import SEOHead from "../../components/feature/SEOHead";

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://verifyafrica.io";

const docsSchema = [
	{
		"@context": "https://schema.org",
		"@type": "TechArticle",
		"@id": `${SITE_URL}/docs#webpage`,
		name: "VerifyAfrica API Documentation – Identity Verification REST API",
		url: `${SITE_URL}/docs`,
		description:
			"Complete REST API documentation for integrating VerifyAfrica identity verification, KYC, and AML screening across Africa into your application.",
		inLanguage: "en",
		isPartOf: { "@id": `${SITE_URL}/#website` },
		about: { "@id": `${SITE_URL}/#organization` },
		dateModified: new Date().toISOString().split("T")[0],
		publisher: { "@id": `${SITE_URL}/#organization` },
		breadcrumb: { "@id": `${SITE_URL}/docs#breadcrumb` },
		audience: {
			"@type": "Audience",
			audienceType: "Developers",
		},
		teaches:
			"How to integrate KYC, AML, and identity verification for African markets via REST API",
		proficiencyLevel: "Beginner",
	},
	// ── Service schema — signals to Google this page is about a product/service ──
	{
		"@context": "https://schema.org",
		"@type": "Service",
		"@id": `${SITE_URL}/docs#service`,
		name: "VerifyAfrica Identity Verification API",
		url: `${SITE_URL}/docs`,
		description:
			"A REST API enabling developers to integrate KYC, AML screening, biometric verification, and KYB business verification across all 54 African countries into any application.",
		provider: { "@id": `${SITE_URL}/#organization` },
		serviceType: "Identity Verification API",
		areaServed: { "@type": "Place", name: "Africa" },
		audience: {
			"@type": "Audience",
			audienceType: "Software Developers",
		},
		hasOfferCatalog: {
			"@type": "OfferCatalog",
			name: "VerifyAfrica API Endpoints",
			itemListElement: [
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "Identity Document Verification API",
						description:
							"Verify national IDs, passports, and driver's licences across 54 African countries.",
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "Biometric & Liveness API",
						description:
							"Facial recognition and liveness detection to prevent spoofing and synthetic identity fraud.",
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "AML Screening API",
						description:
							"Real-time screening against global sanctions lists, PEP databases, and adverse media sources.",
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "KYB Business Verification API",
						description:
							"Verify business entities, directors, and beneficial owners across African corporate registries.",
					},
				},
			],
		},
	},
	{
		"@context": "https://schema.org",
		"@type": "ItemList",
		name: "VerifyAfrica API Documentation Sections",
		url: `${SITE_URL}/docs`,
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Identity Document Verification",
				url: `${SITE_URL}/docs#id-document`,
				description:
					"Verify national IDs, passports, and driver's licences across 54 African countries.",
			},
			{
				"@type": "ListItem",
				position: 2,
				name: "Biometric & Liveness Verification",
				url: `${SITE_URL}/docs#biometric`,
				description:
					"Facial recognition and liveness detection to prevent spoofing and synthetic identity fraud.",
			},
			{
				"@type": "ListItem",
				position: 3,
				name: "AML Screening",
				url: `${SITE_URL}/docs#aml`,
				description:
					"Real-time screening against global sanctions lists, PEP databases, and adverse media sources.",
			},
			{
				"@type": "ListItem",
				position: 4,
				name: "Business Verification (KYB)",
				url: `${SITE_URL}/docs#kyb`,
				description:
					"Verify business entities, directors, and beneficial owners across African corporate registries.",
			},
			{
				"@type": "ListItem",
				position: 5,
				name: "Address Verification",
				url: `${SITE_URL}/docs#address`,
				description:
					"Validate residential and business addresses across African markets.",
			},
			{
				"@type": "ListItem",
				position: 6,
				name: "Bulk Verification",
				url: `${SITE_URL}/docs#bulk`,
				description:
					"Batch processing endpoints for back-book remediation and mass onboarding programmes.",
			},
		],
	},
	{
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"@id": `${SITE_URL}/docs#breadcrumb`,
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
				name: "API Documentation",
				item: `${SITE_URL}/docs`,
			},
		],
	},
];

export default function DocsPage() {
	const { openDemo } = useDemoModal();
	const [selectedVerification, setSelectedVerification] =
		useState("id_document");
	const [apiSection, setApiSection] = useState<"single" | "bulk">("single");

	return (
		<div className="min-h-screen bg-gray-50">
			<SEOHead
				title="API Documentation – Identity Verification REST API | VerifyAfrica"
				description="Integrate VerifyAfrica's identity verification, KYC, and AML screening across Africa with our simple REST API. Full documentation, code examples, and endpoint references."
				keywords="VerifyAfrica API docs, KYC API Africa, identity verification REST API, AML screening API documentation"
				canonical="/docs"
				image="https://readdy.ai/api/search-image?query=developer%20REST%20API%20documentation%20code%20terminal%20dark%20background%20teal%20accent%20highlights%20professional%20software%20integration%20code%20snippets%20clean%20minimal%20design%20JSON%20request%20response%20blocks&width=1200&height=630&seq=og-docs-v1&orientation=landscape"
				twitterCard="summary_large_image"
				schema={docsSchema}
			/>
			<Navbar
				onRequestDemo={openDemo}
				variant="solid"
			/>

			<section className="bg-gradient-to-r from-gray-900 to-gray-800 pt-28 pb-12">
				<div className="max-w-7xl mx-auto px-6 lg:px-12">
					<h1 className="text-3xl lg:text-4xl font-bold text-white mb-3">
						API Documentation
					</h1>
					<p className="text-gray-300 text-lg">
						Integrate identity verification across Africa with our simple,
						powerful REST API
					</p>
				</div>
			</section>

			<div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
				<div className="flex flex-col lg:flex-row gap-8">
					<DocsSidebar
						selectedVerification={selectedVerification}
						setSelectedVerification={setSelectedVerification}
						apiSection={apiSection}
						setApiSection={setApiSection}
					/>
					<DocsContent
						selectedVerification={selectedVerification}
						apiSection={apiSection}
					/>
				</div>
			</div>

			<div className="bg-gray-100 border-t border-gray-200 py-6">
				<div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
					<p className="text-sm text-gray-600">
						Need help? Contact us at{" "}
						<a
							href="mailto:dev@verifyafrica.io"
							className="text-teal-600 hover:text-teal-700 font-medium"
						>
							dev@verifyafrica.io
						</a>
					</p>
				</div>
			</div>

			<Footer />
			<BackToTop />
		</div>
	);
}
