import { lazy, Suspense } from "react";
import { useDemoModal } from "../../hooks/useDemoModal";
import Navbar from "@/pages/home/components/Navbar";
import SupportHero from "./components/SupportHero";
import SEOHead from "../../components/feature/SEOHead";

// Below-fold — lazy loaded so they don't block initial paint
const SupportForm = lazy(() => import("./components/SupportForm"));
const SupportResources = lazy(() => import("./components/SupportResources"));
const Footer = lazy(() => import("@/pages/home/components/Footer"));

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://verifyafrica.io";

const supportSchema = [
	{
		"@context": "https://schema.org",
		"@type": "WebPage",
		"@id": `${SITE_URL}/support#webpage`,
		name: "VerifyAfrica Support – Help Center & Resources",
		url: `${SITE_URL}/support`,
		description:
			"Access VerifyAfrica support resources, submit a support ticket, and find answers to common questions about our KYC and AML compliance platform.",
		inLanguage: "en",
		isPartOf: { "@id": `${SITE_URL}/#website` },
		about: { "@id": `${SITE_URL}/#organization` },
		dateModified: new Date().toISOString().split("T")[0],
		publisher: { "@id": `${SITE_URL}/#organization` },
		breadcrumb: { "@id": `${SITE_URL}/support#breadcrumb` },
		speakable: {
			"@type": "SpeakableSpecification",
			cssSelector: ["h1", "h2"],
		},
		potentialAction: {
			"@type": "CommunicateAction",
			target: `${SITE_URL}/support`,
			name: "Contact VerifyAfrica Support",
		},
	},
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
		contactPoint: [
			{
				"@type": "ContactPoint",
				email: "support@verifyafrica.io",
				contactType: "customer support",
				areaServed: "Africa",
				availableLanguage: ["English", "French", "Arabic", "Portuguese"],
			},
		],
		sameAs: [
			"https://x.com/V3rifyAfrica",
			"https://www.linkedin.com/company/verifyafrica",
			"https://www.instagram.com/verifyafrica_official",
		],
	},
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: [
			{
				"@type": "Question",
				name: "How do I submit a support ticket to VerifyAfrica?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "You can submit a support ticket through the support form on this page. Provide your name, email, company, and a detailed description of your issue. Our team will respond within one business day.",
				},
			},
			{
				"@type": "Question",
				name: "What is the typical response time for support requests?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Standard support requests are addressed within 1 business day. Enterprise clients with priority support agreements receive responses within 4 hours during business hours.",
				},
			},
			{
				"@type": "Question",
				name: "Where can I find the VerifyAfrica API documentation?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Full API documentation, including endpoint references, authentication guides, and code examples in multiple languages, is available at verifyafrica.io/docs.",
				},
			},
			{
				"@type": "Question",
				name: "How do I get sandbox credentials to test the VerifyAfrica API?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Sandbox credentials are available upon request. Contact our team through the support form or at dev@verifyafrica.io and we will provision your test environment within one business day.",
				},
			},
			{
				"@type": "Question",
				name: "What should I do if a verification check returns an unexpected result?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "If a verification returns an unexpected result, review the response payload for error codes and messages, then consult our API documentation. If the issue persists, submit a support ticket with your request ID and expected vs. actual response so our team can investigate.",
				},
			},
		],
	},
	{
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"@id": `${SITE_URL}/support#breadcrumb`,
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
				name: "Support",
				item: `${SITE_URL}/support`,
			},
		],
	},
];

export default function SupportPage() {
	const { openDemo } = useDemoModal();

	return (
		<div className="min-h-screen bg-white">
			<SEOHead
				title="Support – Help Center & Resources | VerifyAfrica"
				description="Find answers, submit support tickets, and access documentation for VerifyAfrica's KYC, AML, and identity verification platform. Our team is ready to help."
				keywords="VerifyAfrica support, KYC platform help, AML compliance support, identity verification documentation"
				canonical="/support"
				schema={supportSchema}
			/>
			<Navbar
				onRequestDemo={openDemo}
				variant="solid"
			/>
			{/* Above-fold — always eager */}
			<SupportHero />
			{/* Below-fold — lazy loaded + content-visibility deferred */}
			<Suspense
				fallback={
					<div
						className="py-20 bg-white"
						style={{ containIntrinsicSize: "0 600px" }}
					/>
				}
			>
				<div
					style={{ contentVisibility: "auto", containIntrinsicSize: "0 700px" }}
				>
					<SupportForm />
				</div>
			</Suspense>
			<Suspense
				fallback={
					<div
						className="py-20 bg-gray-50"
						style={{ containIntrinsicSize: "0 400px" }}
					/>
				}
			>
				<div
					style={{ contentVisibility: "auto", containIntrinsicSize: "0 400px" }}
				>
					<SupportResources />
				</div>
			</Suspense>
			<Suspense fallback={null}>
				<Footer />
			</Suspense>
		</div>
	);
}
