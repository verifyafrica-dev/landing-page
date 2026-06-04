import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { featureDetails, type FeatureDetail } from "@/mocks/featureDetails";
import Navbar from "@/pages/home/components/Navbar";
import Footer from "@/pages/home/components/Footer";
import { useDemoModal } from "@/hooks/useDemoModal";
import SEOHead from "@/components/feature/SEOHead";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FinalCTA from "@/pages/home/components/FinalCTA";

const CATEGORIES = [
	{ label: "All Features", value: "all" },
	{ label: "Identity & KYC", value: "identity" },
	{ label: "Compliance & AML", value: "compliance" },
	{ label: "Fraud & Risk", value: "fraud" },
	{ label: "Monitoring", value: "monitoring" },
];

const CATEGORY_MAP: Record<string, string[]> = {
	identity: [
		"identity-verification",
		"business-verification-kyb",
		"biometrics-liveness",
	],
	compliance: ["aml-sanctions-screening", "address-verification-geolocation"],
	fraud: ["fraud-detection", "transaction-risk-scoring"],
	monitoring: ["ongoing-monitoring"],
};

const FEATURE_COLORS: Record<
	string,
	{
		band: string;
		icon: string;
		iconHover: string;
		badge: string;
		tagline: string;
		titleHover: string;
		borderHover: string;
		footer: string;
	}
> = {
	"identity-verification": {
		band: "from-teal-50 to-cyan-50",
		icon: "bg-teal-100 text-teal-600",
		iconHover: "group-hover:bg-teal-200",
		badge: "bg-teal-100 text-teal-700",
		tagline: "text-teal-600",
		titleHover: "group-hover:text-teal-700",
		borderHover: "hover:border-teal-300",
		footer: "bg-teal-50/40",
	},
	"business-verification-kyb": {
		band: "from-emerald-50 to-teal-50",
		icon: "bg-emerald-100 text-emerald-600",
		iconHover: "group-hover:bg-emerald-200",
		badge: "bg-emerald-100 text-emerald-700",
		tagline: "text-emerald-600",
		titleHover: "group-hover:text-emerald-700",
		borderHover: "hover:border-emerald-300",
		footer: "bg-emerald-50/40",
	},
	"aml-sanctions-screening": {
		band: "from-orange-50 to-amber-50",
		icon: "bg-orange-100 text-orange-600",
		iconHover: "group-hover:bg-orange-200",
		badge: "bg-orange-100 text-orange-700",
		tagline: "text-orange-600",
		titleHover: "group-hover:text-orange-700",
		borderHover: "hover:border-orange-300",
		footer: "bg-orange-50/40",
	},
	"fraud-detection": {
		band: "from-rose-50 to-pink-50",
		icon: "bg-rose-100 text-rose-600",
		iconHover: "group-hover:bg-rose-200",
		badge: "bg-rose-100 text-rose-700",
		tagline: "text-rose-600",
		titleHover: "group-hover:text-rose-700",
		borderHover: "hover:border-rose-300",
		footer: "bg-rose-50/40",
	},
	"biometrics-liveness": {
		band: "from-violet-50 to-purple-50",
		icon: "bg-violet-100 text-violet-600",
		iconHover: "group-hover:bg-violet-200",
		badge: "bg-violet-100 text-violet-700",
		tagline: "text-violet-600",
		titleHover: "group-hover:text-violet-700",
		borderHover: "hover:border-violet-300",
		footer: "bg-violet-50/40",
	},
	"address-verification-geolocation": {
		band: "from-sky-50 to-blue-50",
		icon: "bg-sky-100 text-sky-600",
		iconHover: "group-hover:bg-sky-200",
		badge: "bg-sky-100 text-sky-700",
		tagline: "text-sky-600",
		titleHover: "group-hover:text-sky-700",
		borderHover: "hover:border-sky-300",
		footer: "bg-sky-50/40",
	},
	"transaction-risk-scoring": {
		band: "from-amber-50 to-yellow-50",
		icon: "bg-amber-100 text-amber-600",
		iconHover: "group-hover:bg-amber-200",
		badge: "bg-amber-100 text-amber-700",
		tagline: "text-amber-600",
		titleHover: "group-hover:text-amber-700",
		borderHover: "hover:border-amber-300",
		footer: "bg-amber-50/40",
	},
	"ongoing-monitoring": {
		band: "from-green-50 to-emerald-50",
		icon: "bg-green-100 text-green-600",
		iconHover: "group-hover:bg-green-200",
		badge: "bg-green-100 text-green-700",
		tagline: "text-green-600",
		titleHover: "group-hover:text-green-700",
		borderHover: "hover:border-green-300",
		footer: "bg-green-50/40",
	},
};

const DEFAULT_FEATURE_COLORS = FEATURE_COLORS["identity-verification"];

const CATEGORY_LABEL_MAP: Record<string, string> = {
	"identity-verification": "Identity & KYC",
	"business-verification-kyb": "Identity & KYC",
	"aml-sanctions-screening": "Compliance & AML",
	"fraud-detection": "Fraud & Risk",
	"biometrics-liveness": "Identity & KYC",
	"address-verification-geolocation": "Compliance & AML",
	"transaction-risk-scoring": "Fraud & Risk",
	"ongoing-monitoring": "Monitoring",
};

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://verifyafrica.io";

const featuresIndexSchema = [
	{
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		"@id": `${SITE_URL}/features#webpage`,
		name: "Platform Features – KYC, AML, Biometrics & KYB for Africa | VerifyAfrica",
		url: `${SITE_URL}/features`,
		description:
			"Explore all VerifyAfrica platform capabilities: identity verification, KYB, AML screening, biometrics, fraud detection, address verification, transaction risk scoring, and ongoing monitoring across all 54 African countries.",
		inLanguage: "en",
		isPartOf: { "@id": `${SITE_URL}/#website` },
		about: { "@id": `${SITE_URL}/#organization` },
		dateModified: new Date().toISOString().split("T")[0],
		publisher: { "@id": `${SITE_URL}/#organization` },
		breadcrumb: {
			"@type": "BreadcrumbList",
			itemListElement: [
				{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
				{
					"@type": "ListItem",
					position: 2,
					name: "Features",
					item: `${SITE_URL}/features`,
				},
			],
		},
	},
	{
		"@context": "https://schema.org",
		"@type": "ItemList",
		name: "VerifyAfrica Platform Features",
		url: `${SITE_URL}/features`,
		numberOfItems: 8,
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Identity Verification",
				url: `${SITE_URL}/features/identity-verification`,
			},
			{
				"@type": "ListItem",
				position: 2,
				name: "Business Verification (KYB)",
				url: `${SITE_URL}/features/business-verification-kyb`,
			},
			{
				"@type": "ListItem",
				position: 3,
				name: "AML & Sanctions Screening",
				url: `${SITE_URL}/features/aml-sanctions-screening`,
			},
			{
				"@type": "ListItem",
				position: 4,
				name: "Fraud Detection",
				url: `${SITE_URL}/features/fraud-detection`,
			},
			{
				"@type": "ListItem",
				position: 5,
				name: "Biometrics & Liveness",
				url: `${SITE_URL}/features/biometrics-liveness`,
			},
			{
				"@type": "ListItem",
				position: 6,
				name: "Address Verification & Geolocation",
				url: `${SITE_URL}/features/address-verification-geolocation`,
			},
			{
				"@type": "ListItem",
				position: 7,
				name: "Transaction Risk Scoring",
				url: `${SITE_URL}/features/transaction-risk-scoring`,
			},
			{
				"@type": "ListItem",
				position: 8,
				name: "Ongoing Monitoring",
				url: `${SITE_URL}/features/ongoing-monitoring`,
			},
		],
	},
];

type FeatureColors = (typeof FEATURE_COLORS)[string];

export default function FeaturesIndexPage() {
	const [search, setSearch] = useState("");
	const [activeCategory, setActiveCategory] = useState("all");
	const { openDemo } = useDemoModal();

	const filtered = useMemo(() => {
		let list = featureDetails;

		if (activeCategory !== "all") {
			const slugs = CATEGORY_MAP[activeCategory] ?? [];
			list = list.filter((f) => slugs.includes(f.slug));
		}

		if (search.trim()) {
			const q = search.toLowerCase();
			list = list.filter(
				(f) =>
					f.title.toLowerCase().includes(q) ||
					f.description.toLowerCase().includes(q) ||
					f.tagline.toLowerCase().includes(q) ||
					f.capabilities.some((c) => c.title.toLowerCase().includes(q)),
			);
		}

		return list;
	}, [search, activeCategory]);

	return (
		<>
			<SEOHead
				title="Platform Features – KYC, AML, Biometrics & KYB for Africa | VerifyAfrica"
				description="Explore all VerifyAfrica platform capabilities: identity verification, KYB, AML screening, biometrics, fraud detection, address verification, transaction risk scoring, and ongoing monitoring across all 54 African countries."
				keywords="KYC features Africa, AML screening platform, identity verification API, biometrics Africa, KYB business verification, fraud detection Africa"
				canonical="/features"
				image="https://readdy.ai/api/search-image?query=compliance%20platform%20features%20overview%20grid%20teal%20emerald%20abstract%20technology%20icons%20identity%20verification%20AML%20biometrics%20fraud%20detection%20professional%20corporate%20clean%20minimal%20background%20Africa%20fintech&width=1200&height=630&seq=og-features-index-v1&orientation=landscape"
				twitterCard="summary_large_image"
				schema={featuresIndexSchema}
			/>
			<Navbar
				onRequestDemo={openDemo}
				variant="solid"
			/>

			{/* Hero */}
			<section className="pt-32 pb-16 bg-linear-to-b from-gray-50 to-white overflow-hidden relative">
				<div className="absolute inset-0 overflow-hidden pointer-events-none">
					<div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl" />
					<div className="absolute top-32 -left-16 w-64 h-64 bg-cyan-100/30 rounded-full blur-3xl" />
				</div>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
					<div className="text-center max-w-3xl mx-auto">
						<div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 border border-teal-100 rounded-full text-teal-600 text-xs font-semibold tracking-wide uppercase mb-6">
							<i className="ri-apps-2-line text-sm" />
							Platform Capabilities
						</div>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-secondary leading-tight mb-5">
							Everything You Need to{" "}
							<span className="text-teal-500">Verify Africa</span>
						</h1>
						<p className="text-lg text-gray-600 leading-relaxed mb-8">
							A single compliance and identity platform covering every
							verification need — from KYC to AML, biometrics to transaction
							risk.
						</p>
						<div className="flex flex-col sm:flex-row gap-3 justify-center">
							<Button
								size="lg"
								onClick={openDemo}
								className="h-auto px-7 py-3 bg-teal-500 text-white font-semibold hover:bg-teal-600 cursor-pointer"
							>
								Request a Demo
							</Button>
							<Button
								variant="outline"
								size="lg"
								asChild
								className="h-auto px-7 py-3 font-semibold hover:border-teal-400 hover:text-teal-600 cursor-pointer"
							>
								<Link to="/docs">Read API Docs</Link>
							</Button>
						</div>
					</div>

					{/* Stats strip */}
					<div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">
						{[
							{ value: "8", label: "Core Products" },
							{ value: "54", label: "African Countries" },
							{ value: "<3s", label: "Average Check Time" },
							{ value: "99.9%", label: "API Uptime" },
						].map((stat) => (
							<div
								key={stat.label}
								className="bg-white border border-gray-100 rounded-xl p-5 text-center"
							>
								<div className="text-2xl sm:text-3xl font-extrabold text-teal-500 mb-1">
									{stat.value}
								</div>
								<div className="text-xs sm:text-sm text-gray-500 font-medium">
									{stat.label}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Search & Filter Bar */}
			<section className="sticky top-16 sm:top-20 lg:top-28 z-30 bg-white border-b border-gray-100">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4">
					<div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
						{/* Search */}
						<div className="relative flex-1 min-w-0 w-full sm:max-w-xs">
							<i className="ri-search-line pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 text-sm text-muted-foreground" />
							<Input
								type="search"
								placeholder="Search features…"
								value={search}
								onChange={(e) => setSearch(e.target.value)}
								className="h-10 bg-gray-50 pl-9 pr-9"
							/>
							{search && (
								<Button
									type="button"
									variant="ghost"
									size="icon"
									onClick={() => setSearch("")}
									aria-label="Clear search"
									className="absolute right-1 top-1/2 size-7 -translate-y-1/2 text-muted-foreground hover:text-foreground"
								>
									<i className="ri-close-line text-sm" />
								</Button>
							)}
						</div>

						{/* Category pills */}
						<div className="flex items-center gap-2 flex-wrap">
							{CATEGORIES.map((cat) => (
								<Button
									key={cat.value}
									type="button"
									size="sm"
									onClick={() => setActiveCategory(cat.value)}
									className={`h-auto rounded-full px-3 py-1.5 text-xs font-semibold whitespace-nowrap cursor-pointer ${
										activeCategory === cat.value
											? "bg-teal-500 text-white hover:bg-teal-600"
											: "bg-gray-100 text-gray-600 hover:bg-teal-50 hover:text-teal-600"
									}`}
								>
									{cat.label}
								</Button>
							))}
						</div>

						{/* Result count */}
						<div className="text-xs text-gray-400 whitespace-nowrap ml-auto hidden sm:block">
							{filtered.length} of {featureDetails.length} features
						</div>
					</div>
				</div>
			</section>

			{/* Features Grid */}
			<section className="py-14 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
					{filtered.length === 0 ? (
						<div className="text-center py-24">
							<div className="w-16 h-16 flex items-center justify-center mx-auto bg-gray-100 rounded-2xl mb-4">
								<i className="ri-search-line text-3xl text-gray-400" />
							</div>
							<h3 className="text-lg font-semibold text-gray-700 mb-2">
								No features match your search
							</h3>
							<p className="text-sm text-gray-400 mb-6">
								Try a different keyword or clear your filters.
							</p>
							<Button
								onClick={() => {
									setSearch("");
									setActiveCategory("all");
								}}
								className="bg-teal-500 text-white hover:bg-teal-600 cursor-pointer"
							>
								Clear Filters
							</Button>
						</div>
					) : (
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
							{filtered.map((feature) => (
								<FeatureIndexCard
									key={feature.slug}
									feature={feature}
								/>
							))}
						</div>
					)}
				</div>
			</section>

			{/* Bottom CTA */}
			<FinalCTA onRequestDemo={openDemo} />

			<Footer />
		</>
	);
}

function FeatureIndexCard({ feature }: { feature: FeatureDetail }) {
	const colors: FeatureColors =
		FEATURE_COLORS[feature.slug] ?? DEFAULT_FEATURE_COLORS;
	const categoryLabel = CATEGORY_LABEL_MAP[feature.slug] ?? "";

	return (
		<Card
			className={`group relative gap-0 overflow-hidden border border-gray-200 bg-white py-0 shadow-none ring-0 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] ${colors.borderHover}`}
		>
			{/* <div className={`h-1.5 w-full bg-linear-to-r ${colors.band}`} /> */}
			<Link
				to={`/features/${feature.slug}`}
				className="flex flex-col h-full cursor-pointer"
			>
				<CardHeader className="flex flex-col sm:flex-row gap-4 sm:gap-5 px-5 pt-5 pb-0 sm:px-6 sm:pt-6">
					<div
						className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 ${colors.icon} ${colors.iconHover}`}
					>
						<i className={`${feature.icon} text-xl`} />
					</div>
					<div className="min-w-0 flex-1 space-y-1">
						<div className="flex items-start justify-between gap-2">
							<CardTitle
								className={`text-base sm:text-lg font-bold text-secondary leading-snug transition-colors duration-300 ${colors.titleHover}`}
							>
								{feature.title}
							</CardTitle>
							{categoryLabel && (
								<span
									className={`hidden shrink-0 rounded-full px-2 py-1 text-[10px] font-semibold sm:inline-flex ${colors.badge}`}
								>
									{categoryLabel}
								</span>
							)}
						</div>
						<CardDescription
							className={`text-sm font-medium italic ${colors.tagline}`}
						>
							{feature.tagline}
						</CardDescription>
					</div>
				</CardHeader>

				<CardContent className="px-5 pb-0 py-2 sm:px-6">
					<p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
						{feature.description}
					</p>
					<div className="mt-4 flex flex-wrap items-center gap-4">
						{feature.stats.slice(0, 3).map((stat) => (
							<div
								key={stat.label}
								className="flex items-center gap-1.5"
							>
								<span className="text-sm font-bold text-secondary">
									{stat.value}
								</span>
								<span className="text-xs text-gray-400">{stat.label}</span>
							</div>
						))}
					</div>
				</CardContent>

				<CardFooter
					className={`mt-auto flex-col items-start border-t border-gray-200 px-5 py-4 sm:px-6 ${colors.footer}`}
				>
					<div className="flex flex-wrap items-center gap-2">
						{feature.capabilities.slice(0, 4).map((cap) => (
							<span
								key={cap.title}
								className="inline-flex items-center gap-1 rounded-full border border-gray-100 bg-gray-50 px-2.5 py-1 text-xs text-gray-500"
							>
								<i className={`${cap.icon} text-[10px]`} />
								{cap.title}
							</span>
						))}
						{feature.capabilities.length > 4 && (
							<span className="text-xs text-gray-400">
								+{feature.capabilities.length - 4} more
							</span>
						)}
					</div>
				</CardFooter>
			</Link>

			<div className="pointer-events-none absolute bottom-4 right-4 flex h-7 w-7 translate-y-1 items-center justify-center rounded-full bg-secondary opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
				<i className="ri-arrow-right-up-line text-sm text-white" />
			</div>
		</Card>
	);
}
