import { lazy, Suspense } from "react";
import { useDemoModal } from "../../hooks/useDemoModal";
import Navbar from "@/pages/home/components/Navbar";
import AboutHero from "./components/AboutHero";
import SEOHead from "../../components/feature/SEOHead";
import { ABOUT_SEO, DEFAULT_OG_IMAGE } from "@/constants/seo";
import {
	createBreadcrumbList,
	createWebPageSchema,
} from "@/lib/schema";

// Lazy-load everything below the fold — none of these are needed for FCP
const OurStory = lazy(() => import("./components/OurStory"));
const CoreValues = lazy(() => import("./components/CoreValues"));
const Footer = lazy(() => import("@/pages/home/components/Footer"));

const aboutSchema = [
	createWebPageSchema({
		path: ABOUT_SEO.canonical,
		type: "AboutPage",
		name: ABOUT_SEO.title,
		description: ABOUT_SEO.description,
		speakableCssSelectors: ["#story", "#values"],
	}),
	createBreadcrumbList(ABOUT_SEO.canonical, [
		{ name: "Home", path: "/" },
		{ name: "About VerifyAfrica", path: ABOUT_SEO.canonical },
	]),
];

export default function AboutPage() {
	const { openDemo } = useDemoModal();

	return (
		<div className="min-h-screen bg-white">
			<SEOHead
				title={ABOUT_SEO.title}
				description={ABOUT_SEO.description}
				ogDescription={ABOUT_SEO.ogDescription}
				twitterDescription={ABOUT_SEO.twitterDescription}
				keywords={ABOUT_SEO.keywords}
				canonical={ABOUT_SEO.canonical}
				imageAlt={ABOUT_SEO.imageAlt}
				schema={aboutSchema}
				{...DEFAULT_OG_IMAGE}
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
