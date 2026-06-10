import { useParams, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import { featureDetails } from "@/mocks/featureDetails";
import { useDemoModal } from "@/hooks/useDemoModal";
import Navbar from "@/pages/home/components/Navbar";
import SEOHead from "@/components/feature/SEOHead";
import { DEFAULT_OG_IMAGE } from "@/constants/seo";
import {
	createBreadcrumbList,
	createFaqSchema,
	createWebPageSchema,
} from "@/lib/schema";
import FeatureHero from "./components/FeatureHero";
import FeatureStats from "./components/FeatureStats";
import FeatureHowItWorks from "./components/FeatureHowItWorks";
import FeatureCapabilities from "./components/FeatureCapabilities";
import FeatureUseCases from "./components/FeatureUseCases";
import FAQ from "@/components/feature/FAQ";
import FinalCTA from "@/pages/home/components/FinalCTA";
import FeatureOtherFeatures from "./components/FeatureOtherFeatures";

const Footer = lazy(() => import("@/pages/home/components/Footer"));

export default function FeaturePage() {
	const { slug } = useParams<{ slug: string }>();
	const { openDemo } = useDemoModal();

	const feature = featureDetails.find((f) => f.slug === slug);

	if (!feature) {
		return (
			<Navigate
				to="/"
				replace
			/>
		);
	}

	const featurePath = `/features/${feature.slug}`;

	const schema = [
		createWebPageSchema({
			path: featurePath,
			name: `${feature.title} – VerifyAfrica`,
			description: feature.description,
		}),
		createBreadcrumbList(featurePath, [
			{ name: "Home", path: "/" },
			{ name: "Features", path: "/features" },
			{ name: feature.title, path: featurePath },
		]),
		createFaqSchema(
			feature.faqs.map((faq) => ({
				question: faq.question,
				answer: faq.answer,
			})),
		),
	];

	return (
		<div className="min-h-screen bg-white">
			<SEOHead
				title={`${feature.title} – VerifyAfrica | KYC & Compliance for Africa`}
				description={feature.description}
				ogDescription={feature.description}
				keywords={`${feature.title.toLowerCase()}, KYC Africa, compliance Africa, VerifyAfrica`}
				canonical={featurePath}
				image={feature.heroImage ?? DEFAULT_OG_IMAGE.image}
				imageAlt={`${feature.title} – VerifyAfrica`}
				twitterCard="summary_large_image"
				{...(feature.heroImage
					? {}
					: {
							imageWidth: DEFAULT_OG_IMAGE.imageWidth,
							imageHeight: DEFAULT_OG_IMAGE.imageHeight,
						})}
				schema={schema}
			/>
			<Navbar onRequestDemo={openDemo} />
			<FeatureHero feature={feature} />
			<FeatureStats feature={feature} />
			<FeatureHowItWorks feature={feature} />
			<FeatureCapabilities feature={feature} />
			<FeatureUseCases feature={feature} />
			<FAQ faqs={feature.faqs} />
			<FeatureOtherFeatures currentSlug={feature.slug} />
			<FinalCTA onRequestDemo={openDemo} />
			<Suspense fallback={null}>
				<Footer />
			</Suspense>
		</div>
	);
}
