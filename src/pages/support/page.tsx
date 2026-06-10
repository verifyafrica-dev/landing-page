import { lazy, Suspense } from "react";
import { useDemoModal } from "../../hooks/useDemoModal";
import Navbar from "@/pages/home/components/Navbar";
import SupportHero from "./components/SupportHero";
import SEOHead from "../../components/feature/SEOHead";
import { DEFAULT_OG_IMAGE, SUPPORT_SEO } from "@/constants/seo";
import {
	createBreadcrumbList,
	createFaqSchema,
	createWebPageSchema,
	pageUrl,
} from "@/lib/schema";

// Below-fold — lazy loaded so they don't block initial paint
const SupportForm = lazy(() => import("./components/SupportForm"));
const SupportResources = lazy(() => import("./components/SupportResources"));
const Footer = lazy(() => import("@/pages/home/components/Footer"));

const supportPath = SUPPORT_SEO.canonical;

const supportSchema = [
	createWebPageSchema({
		path: supportPath,
		name: SUPPORT_SEO.title,
		description: SUPPORT_SEO.description,
		speakableCssSelectors: ["h1", "h2"],
		potentialAction: {
			"@type": "CommunicateAction",
			target: pageUrl(supportPath),
			name: "Contact VerifyAfrica Support",
		},
	}),
	createFaqSchema([
		{
			question: "How do I submit a support ticket to VerifyAfrica?",
			answer:
				"You can submit a support ticket through the support form on this page. Provide your name, email, company, and a detailed description of your issue. Our team will respond within one business day.",
		},
		{
			question: "What is the typical response time for support requests?",
			answer:
				"Standard support requests are addressed within 1 business day. Enterprise clients with priority support agreements receive responses within 4 hours during business hours.",
		},
		{
			question: "Where can I find the VerifyAfrica API documentation?",
			answer:
				"Full API documentation, including endpoint references, authentication guides, and code examples in multiple languages, is available at docs.verifyafrica.io.",
		},
		{
			question: "How do I get sandbox credentials to test the VerifyAfrica API?",
			answer:
				"Sandbox credentials are available upon request. Contact our team through the support form or at dev@verifyafrica.io and we will provision your test environment within one business day.",
		},
		{
			question:
				"What should I do if a verification check returns an unexpected result?",
			answer:
				"If a verification returns an unexpected result, review the response payload for error codes and messages, then consult our API documentation. If the issue persists, submit a support ticket with your request ID and expected vs. actual response so our team can investigate.",
		},
	]),
	createBreadcrumbList(supportPath, [
		{ name: "Home", path: "/" },
		{ name: "Support", path: supportPath },
	]),
];

export default function SupportPage() {
	const { openDemo } = useDemoModal();

	return (
		<div className="min-h-screen bg-white">
			<SEOHead
				title={SUPPORT_SEO.title}
				description={SUPPORT_SEO.description}
				ogDescription={SUPPORT_SEO.ogDescription}
				twitterDescription={SUPPORT_SEO.twitterDescription}
				keywords={SUPPORT_SEO.keywords}
				canonical={SUPPORT_SEO.canonical}
				imageAlt={SUPPORT_SEO.imageAlt}
				schema={supportSchema}
				{...DEFAULT_OG_IMAGE}
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
