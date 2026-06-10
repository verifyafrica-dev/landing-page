import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { featureDetails, type FeatureDetail } from "@/mocks/featureDetails";
import Navbar from "@/pages/home/components/Navbar";
import Footer from "@/pages/home/components/Footer";
import { useDemoModal } from "@/hooks/useDemoModal";
import SEOHead from "@/components/feature/SEOHead";
import { DEFAULT_OG_IMAGE, FEATURES_INDEX_SEO } from "@/constants/seo";
import {
	createBreadcrumbList,
	createWebPageSchema,
	pageUrl,
} from "@/lib/schema";
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
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import FinalCTA from "@/pages/home/components/FinalCTA";
import {
	ArrowRightIcon,
	ArrowUpRightIcon,
	MagnifyingGlassIcon,
	SquaresFourIcon,
	XIcon,
} from "@phosphor-icons/react";

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

const featuresPath = FEATURES_INDEX_SEO.canonical;
const featuresUrl = pageUrl(featuresPath);

const featuresIndexSchema = [
	createWebPageSchema({
		path: featuresPath,
		type: "CollectionPage",
		name: FEATURES_INDEX_SEO.title,
		description: FEATURES_INDEX_SEO.description,
	}),
	createBreadcrumbList(featuresPath, [
		{ name: "Home", path: "/" },
		{ name: "Features", path: featuresPath },
	]),
	{
		"@context": "https://schema.org",
		"@type": "ItemList",
		name: "VerifyAfrica Platform Features",
		url: featuresUrl,
		numberOfItems: 8,
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Identity Verification",
				url: `${featuresUrl}/identity-verification`,
			},
			{
				"@type": "ListItem",
				position: 2,
				name: "Business Verification (KYB)",
				url: `${featuresUrl}/business-verification-kyb`,
			},
			{
				"@type": "ListItem",
				position: 3,
				name: "AML & Sanctions Screening",
				url: `${featuresUrl}/aml-sanctions-screening`,
			},
			{
				"@type": "ListItem",
				position: 4,
				name: "Fraud Detection",
				url: `${featuresUrl}/fraud-detection`,
			},
			{
				"@type": "ListItem",
				position: 5,
				name: "Biometrics & Liveness",
				url: `${featuresUrl}/biometrics-liveness`,
			},
			{
				"@type": "ListItem",
				position: 6,
				name: "Address Verification & Geolocation",
				url: `${featuresUrl}/address-verification-geolocation`,
			},
			{
				"@type": "ListItem",
				position: 7,
				name: "Transaction Risk Scoring",
				url: `${featuresUrl}/transaction-risk-scoring`,
			},
			{
				"@type": "ListItem",
				position: 8,
				name: "Ongoing Monitoring",
				url: `${featuresUrl}/ongoing-monitoring`,
			},
		],
	},
];

type FeatureColors = (typeof FEATURE_COLORS)[string];

type FeatureCardVariationId =
	| "gallery-glass"
	| "editorial-border"
	| "bento-dashboard"
	| "aurora-dark"
	| "soft-device"
	| "luminous-ledger"
	| "split-signal"
	| "stacked-proof"
	| "neo-receipt"
	| "trust-capsule"
	| "type-ledger"
	| "quiet-luxury"
	| "command-strip"
	| "proof-poster"
	| "minimal-receipt"
	| "apple-glass-tile"
	| "vision-depth"
	| "ios-settings"
	| "keynote-product"
	| "safari-preview"
	| "metric-hero"
	| "split-narrative"
	| "capability-first"
	| "radial-proof"
	| "timeline-stack"
	| "magazine-cover"
	| "command-center"
	| "proof-ribbon"
	| "floating-modules"
	| "comparison-panel"
	| "system-summary"
	| "verification-console"
	| "capability-matrix"
	| "audit-trail"
	| "outcome-panel";

const FEATURE_CARD_VARIATION_STYLES: Record<
	FeatureCardVariationId,
	{
		card: string;
		overlay?: string;
		hideIcon?: boolean;
		layout?:
			| "metricHero"
			| "splitNarrative"
			| "capabilityFirst"
			| "radialProof"
			| "timelineStack"
			| "magazineCover"
			| "commandCenter"
			| "proofRibbon"
			| "floatingModules"
			| "comparisonPanel";
		header: string;
		icon: string;
		badge: string;
		title: string;
		tagline: string;
		content: string;
		description: string;
		statsWrap: string;
		stat: string;
		statValue: string;
		statLabel: string;
		footer: string;
		capability: string;
		more: string;
		arrow: string;
	}
> = {
	"gallery-glass": {
		card: "border border-teal-200/70 bg-white/80 py-0 shadow-[0_24px_70px_rgba(15,23,42,0.10)] ring-1 ring-white/70 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(20,184,166,0.18)]",
		overlay:
			"pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-teal-300/30 blur-3xl",
		header: "flex flex-col sm:flex-row gap-4 sm:gap-5 px-5 pt-5 pb-0 sm:px-6 sm:pt-6",
		icon: "bg-white text-teal-600 shadow-[0_12px_30px_rgba(20,184,166,0.20)] ring-1 ring-teal-100 group-hover:bg-teal-50",
		badge: "bg-white/80 text-teal-700 ring-1 ring-teal-100",
		title: "text-secondary group-hover:text-teal-700",
		tagline: "text-teal-600",
		content: "px-5 pb-0 py-2 sm:px-6",
		description: "text-gray-600",
		statsWrap: "mt-4 flex flex-wrap items-center gap-3",
		stat: "rounded-2xl border border-teal-100 bg-white/70 px-3 py-2",
		statValue: "text-secondary",
		statLabel: "text-gray-400",
		footer: "mt-auto flex-col items-start border-t border-teal-100/80 bg-white/55 px-5 py-4 sm:px-6",
		capability:
			"border border-teal-100 bg-white/80 text-gray-500 shadow-sm",
		more: "text-teal-600",
		arrow: "bg-teal-500 text-white shadow-[0_12px_24px_rgba(20,184,166,0.28)]",
	},
	"editorial-border": {
		card: "border-2 border-secondary bg-white py-0 shadow-[8px_8px_0_0_rgba(15,23,42,0.96)] ring-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-[12px_12px_0_0_rgba(20,184,166,0.65)]",
		header: "flex flex-col sm:flex-row gap-4 sm:gap-5 px-5 pt-5 pb-0 sm:px-6 sm:pt-6",
		icon: "rounded-full bg-secondary text-white group-hover:bg-teal-500",
		badge: "border border-secondary bg-white text-secondary",
		title: "text-secondary group-hover:text-secondary",
		tagline: "text-teal-700 not-italic",
		content: "px-5 pb-0 py-3 sm:px-6",
		description: "text-gray-700",
		statsWrap: "mt-4 grid grid-cols-3 gap-2",
		stat: "border-l-2 border-secondary pl-2",
		statValue: "text-secondary",
		statLabel: "text-gray-500",
		footer: "mt-auto flex-col items-start border-t-2 border-secondary bg-teal-50 px-5 py-4 sm:px-6",
		capability: "border border-secondary/20 bg-white text-secondary",
		more: "text-secondary",
		arrow: "bg-secondary text-white",
	},
	"bento-dashboard": {
		card: "border border-gray-200 bg-gray-50 py-0 shadow-none ring-1 ring-gray-100 transition-all duration-300 hover:border-teal-200 hover:bg-white hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)]",
		header: "flex flex-col sm:flex-row gap-4 sm:gap-5 px-4 pt-4 pb-0 sm:px-5 sm:pt-5",
		icon: "rounded-2xl bg-secondary text-white shadow-sm group-hover:bg-teal-500",
		badge: "bg-gray-900 text-white",
		title: "text-secondary group-hover:text-teal-700",
		tagline: "text-gray-500 not-italic",
		content: "px-4 pb-0 py-2 sm:px-5",
		description: "text-gray-600",
		statsWrap: "mt-4 grid grid-cols-3 gap-2",
		stat: "rounded-xl border border-gray-200 bg-white px-3 py-2",
		statValue: "text-secondary",
		statLabel: "text-gray-400",
		footer: "mt-auto flex-col items-start border-t border-gray-200 bg-white px-4 py-4 sm:px-5",
		capability: "border border-gray-200 bg-gray-50 text-gray-600",
		more: "text-gray-400",
		arrow: "bg-secondary text-white",
	},
	"aurora-dark": {
		card: "border border-white/10 bg-secondary py-0 shadow-[0_28px_80px_rgba(15,23,42,0.35)] ring-1 ring-teal-300/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_100px_rgba(20,184,166,0.22)]",
		overlay:
			"pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(45,212,191,0.22),transparent_30%),radial-gradient(circle_at_92%_8%,rgba(94,234,212,0.16),transparent_24%)]",
		header: "flex flex-col sm:flex-row gap-4 sm:gap-5 px-5 pt-5 pb-0 sm:px-6 sm:pt-6",
		icon: "bg-teal-400/15 text-teal-300 ring-1 ring-teal-300/25 group-hover:bg-teal-400/25",
		badge: "bg-white/10 text-teal-100 ring-1 ring-white/10",
		title: "text-white group-hover:text-teal-200",
		tagline: "text-teal-300",
		content: "px-5 pb-0 py-2 sm:px-6",
		description: "text-gray-300",
		statsWrap: "mt-4 flex flex-wrap items-center gap-2",
		stat: "rounded-2xl border border-white/10 bg-white/5 px-3 py-2",
		statValue: "text-white",
		statLabel: "text-gray-400",
		footer: "mt-auto flex-col items-start border-t border-white/10 bg-white/[0.03] px-5 py-4 sm:px-6",
		capability: "border border-white/10 bg-white/5 text-gray-300",
		more: "text-teal-300",
		arrow: "bg-teal-400 text-secondary shadow-[0_12px_28px_rgba(45,212,191,0.25)]",
	},
	"soft-device": {
		card: "rounded-[2rem] border border-gray-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] py-0 shadow-[0_22px_60px_rgba(15,23,42,0.08)] ring-8 ring-gray-100/70 transition-all duration-300 hover:-translate-y-1 hover:ring-teal-50 hover:shadow-[0_26px_70px_rgba(15,23,42,0.12)]",
		header: "flex flex-col gap-4 px-5 pt-5 pb-0 sm:px-6 sm:pt-6",
		icon: "rounded-2xl bg-teal-50 text-teal-600 ring-1 ring-teal-100 group-hover:bg-teal-100",
		badge: "bg-teal-50 text-teal-700",
		title: "text-secondary group-hover:text-teal-700",
		tagline: "text-gray-500 not-italic",
		content: "px-5 pb-0 py-2 sm:px-6",
		description: "text-gray-600",
		statsWrap: "mt-4 flex flex-wrap items-center gap-2",
		stat: "rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-gray-100",
		statValue: "text-secondary",
		statLabel: "text-gray-400",
		footer: "mt-auto flex-col items-start border-t border-gray-100 bg-white/80 px-5 py-4 sm:px-6",
		capability: "border border-gray-100 bg-gray-50 text-gray-500",
		more: "text-teal-600",
		arrow: "bg-white text-secondary shadow-[0_10px_25px_rgba(15,23,42,0.12)] ring-1 ring-gray-100",
	},
	"luminous-ledger": {
		card: "border border-teal-100 bg-white py-0 shadow-[0_18px_55px_rgba(15,23,42,0.08)] ring-1 ring-teal-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(20,184,166,0.16)]",
		overlay:
			"pointer-events-none absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-teal-300 via-teal-500 to-gray-900",
		header: "flex flex-col sm:flex-row gap-4 sm:gap-5 px-5 pt-5 pb-0 sm:px-7 sm:pt-7",
		icon: "rounded-2xl bg-teal-500 text-white shadow-[0_14px_35px_rgba(20,184,166,0.35)] group-hover:bg-secondary",
		badge: "bg-teal-50 text-teal-700 ring-1 ring-teal-100",
		title: "text-secondary group-hover:text-teal-700",
		tagline: "text-teal-600 not-italic",
		content: "px-5 pb-0 py-3 sm:px-7",
		description: "text-gray-600",
		statsWrap: "mt-4 grid grid-cols-3 gap-2",
		stat: "rounded-2xl bg-gray-50 px-3 py-2 ring-1 ring-gray-100",
		statValue: "text-secondary",
		statLabel: "text-gray-400",
		footer: "mt-auto flex-col items-start border-t border-gray-100 bg-white px-5 py-4 sm:px-7",
		capability: "border border-teal-100 bg-teal-50/60 text-teal-700",
		more: "text-teal-600",
		arrow: "bg-secondary text-white",
	},
	"split-signal": {
		card: "border border-gray-200 bg-white py-0 shadow-[0_16px_45px_rgba(15,23,42,0.07)] ring-0 transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]",
		overlay:
			"pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-teal-50 to-transparent",
		header: "flex flex-col sm:flex-row gap-4 sm:gap-5 px-5 pt-5 pb-0 sm:px-6 sm:pt-6",
		icon: "rounded-xl bg-white text-teal-600 shadow-[0_8px_22px_rgba(15,23,42,0.10)] ring-1 ring-teal-200 group-hover:bg-teal-500 group-hover:text-white",
		badge: "bg-secondary text-white",
		title: "text-secondary group-hover:text-teal-700",
		tagline: "text-gray-500 not-italic",
		content: "px-5 pb-0 py-3 sm:px-6",
		description: "text-gray-600",
		statsWrap: "mt-4 flex flex-wrap items-center gap-2",
		stat: "rounded-xl border border-gray-100 bg-white px-3 py-2 shadow-sm",
		statValue: "text-secondary",
		statLabel: "text-gray-400",
		footer: "mt-auto flex-col items-start border-t border-gray-100 bg-gray-50 px-5 py-4 sm:px-6",
		capability: "border border-gray-200 bg-white text-gray-600",
		more: "text-gray-400",
		arrow: "bg-teal-500 text-white",
	},
	"stacked-proof": {
		card: "border border-gray-200 bg-[linear-gradient(135deg,#f8fafc_0%,#ffffff_48%,#f0fdfa_100%)] py-0 shadow-none ring-1 ring-gray-100 transition-all duration-300 hover:border-teal-200 hover:shadow-[0_18px_55px_rgba(15,23,42,0.09)]",
		header: "flex flex-col sm:flex-row gap-4 sm:gap-5 px-4 pt-4 pb-0 sm:px-5 sm:pt-5",
		icon: "rounded-2xl bg-secondary text-white ring-4 ring-white group-hover:bg-teal-500",
		badge: "bg-white text-teal-700 ring-1 ring-teal-100",
		title: "text-secondary group-hover:text-teal-700",
		tagline: "text-teal-700",
		content: "px-4 pb-0 py-2 sm:px-5",
		description: "text-gray-600",
		statsWrap: "mt-4 flex flex-col gap-2",
		stat: "justify-between rounded-2xl border border-gray-100 bg-white px-3 py-2",
		statValue: "text-secondary",
		statLabel: "text-gray-400",
		footer: "mt-auto flex-col items-start border-t border-white bg-white/70 px-4 py-4 sm:px-5",
		capability: "border border-gray-100 bg-white text-gray-500",
		more: "text-teal-600",
		arrow: "bg-secondary text-white",
	},
	"neo-receipt": {
		card: "rounded-[1.75rem] border border-dashed border-teal-300 bg-white py-0 shadow-[0_20px_60px_rgba(15,23,42,0.08)] ring-1 ring-teal-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(20,184,166,0.14)]",
		header: "flex flex-col sm:flex-row gap-4 sm:gap-5 px-5 pt-5 pb-0 sm:px-6 sm:pt-6",
		icon: "rounded-full bg-teal-50 text-teal-600 ring-1 ring-teal-200 group-hover:bg-teal-500 group-hover:text-white",
		badge: "bg-gray-50 text-secondary ring-1 ring-gray-100",
		title: "text-secondary group-hover:text-teal-700",
		tagline: "text-gray-500 not-italic",
		content: "px-5 pb-0 py-3 sm:px-6",
		description: "text-gray-600",
		statsWrap: "mt-4 divide-y divide-dashed divide-gray-200 rounded-2xl border border-dashed border-gray-200 bg-gray-50 px-3",
		stat: "justify-between py-2",
		statValue: "text-secondary",
		statLabel: "text-gray-500",
		footer: "mt-auto flex-col items-start border-t border-dashed border-gray-200 bg-white px-5 py-4 sm:px-6",
		capability: "border border-dashed border-teal-200 bg-teal-50 text-teal-700",
		more: "text-teal-600",
		arrow: "bg-teal-500 text-white",
	},
	"trust-capsule": {
		card: "rounded-[2.5rem] border border-teal-100 bg-teal-50/50 py-0 shadow-[0_24px_70px_rgba(20,184,166,0.12)] ring-1 ring-white transition-all duration-300 hover:-translate-y-1 hover:bg-white",
		header: "flex flex-col items-start gap-4 px-6 pt-6 pb-0 sm:px-7 sm:pt-7",
		icon: "rounded-full bg-white text-teal-600 shadow-[0_12px_32px_rgba(20,184,166,0.22)] ring-1 ring-teal-100 group-hover:bg-secondary group-hover:text-white",
		badge: "bg-white text-teal-700 ring-1 ring-teal-100",
		title: "text-secondary group-hover:text-teal-700",
		tagline: "text-teal-700",
		content: "px-6 pb-0 py-3 sm:px-7",
		description: "text-gray-600",
		statsWrap: "mt-4 flex flex-wrap items-center gap-2",
		stat: "rounded-full bg-white px-3 py-2 ring-1 ring-teal-100",
		statValue: "text-secondary",
		statLabel: "text-gray-400",
		footer: "mt-auto flex-col items-start border-t border-teal-100/70 bg-white/65 px-6 py-4 sm:px-7",
		capability: "border border-white bg-white text-gray-500 shadow-sm",
		more: "text-teal-600",
		arrow: "bg-secondary text-white",
	},
	"type-ledger": {
		card: "border border-secondary/15 bg-white py-0 shadow-none ring-0 transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:shadow-[0_20px_55px_rgba(15,23,42,0.08)]",
		hideIcon: true,
		header: "flex flex-col gap-3 px-5 pt-5 pb-0 sm:px-6 sm:pt-6",
		icon: "",
		badge: "border border-secondary/20 bg-white text-secondary",
		title: "text-2xl text-secondary group-hover:text-teal-700",
		tagline: "text-teal-700 not-italic",
		content: "px-5 pb-0 py-3 sm:px-6",
		description: "text-gray-700",
		statsWrap: "mt-5 grid grid-cols-3 gap-0 border-y border-secondary/10",
		stat: "flex-col items-start gap-0 px-3 py-3 first:pl-0 last:pr-0 [&:not(:last-child)]:border-r [&:not(:last-child)]:border-secondary/10",
		statValue: "text-secondary",
		statLabel: "text-gray-400",
		footer: "mt-auto flex-col items-start border-t border-secondary/10 bg-white px-5 py-4 sm:px-6",
		capability: "border border-gray-200 bg-white text-gray-500",
		more: "text-secondary",
		arrow: "bg-secondary text-white",
	},
	"quiet-luxury": {
		card: "rounded-3xl border border-gray-200 bg-[#fbfaf7] py-0 shadow-[0_18px_50px_rgba(15,23,42,0.06)] ring-0 transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-[0_24px_65px_rgba(15,23,42,0.10)]",
		hideIcon: true,
		header: "flex flex-col gap-3 px-6 pt-6 pb-0 sm:px-7 sm:pt-7",
		icon: "",
		badge: "bg-white/70 text-teal-700 ring-1 ring-teal-100",
		title: "text-secondary group-hover:text-teal-700",
		tagline: "text-gray-500 not-italic",
		content: "px-6 pb-0 py-3 sm:px-7",
		description: "text-gray-600",
		statsWrap: "mt-5 flex flex-wrap items-center gap-2",
		stat: "rounded-2xl bg-white/70 px-3 py-2 ring-1 ring-gray-100",
		statValue: "text-secondary",
		statLabel: "text-gray-400",
		footer: "mt-auto flex-col items-start border-t border-gray-200/70 bg-white/45 px-6 py-4 sm:px-7",
		capability: "border border-gray-200 bg-white/70 text-gray-500",
		more: "text-teal-600",
		arrow: "bg-white text-secondary shadow-sm ring-1 ring-gray-200",
	},
	"command-strip": {
		card: "border border-secondary bg-secondary py-0 shadow-[0_22px_65px_rgba(15,23,42,0.22)] ring-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_85px_rgba(15,23,42,0.30)]",
		hideIcon: true,
		overlay:
			"pointer-events-none absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-teal-300 via-teal-500 to-white/20",
		header: "flex flex-col gap-3 px-5 pt-6 pb-0 sm:px-6",
		icon: "",
		badge: "bg-teal-400 text-secondary",
		title: "text-white group-hover:text-teal-200",
		tagline: "text-teal-200 not-italic",
		content: "px-5 pb-0 py-3 sm:px-6",
		description: "text-gray-300",
		statsWrap: "mt-4 grid grid-cols-3 gap-2",
		stat: "rounded-xl border border-white/10 bg-white/5 px-3 py-2",
		statValue: "text-white",
		statLabel: "text-gray-400",
		footer: "mt-auto flex-col items-start border-t border-white/10 bg-white/[0.03] px-5 py-4 sm:px-6",
		capability: "border border-white/10 bg-white/5 text-gray-300",
		more: "text-teal-300",
		arrow: "bg-teal-400 text-secondary",
	},
	"proof-poster": {
		card: "border border-gray-200 bg-white py-0 shadow-[0_18px_55px_rgba(15,23,42,0.08)] ring-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_75px_rgba(15,23,42,0.12)]",
		hideIcon: true,
		overlay:
			"pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full border-[32px] border-teal-100",
		header: "flex flex-col gap-3 px-5 pt-5 pb-0 sm:px-7 sm:pt-7",
		icon: "",
		badge: "bg-secondary text-white",
		title: "text-3xl text-secondary tracking-[-0.04em] group-hover:text-teal-700",
		tagline: "text-teal-600 not-italic",
		content: "px-5 pb-0 py-4 sm:px-7",
		description: "text-gray-600",
		statsWrap: "mt-5 flex flex-wrap items-center gap-4",
		stat: "flex-col items-start gap-0",
		statValue: "text-secondary",
		statLabel: "text-gray-400 uppercase tracking-wider",
		footer: "mt-auto flex-col items-start border-t border-gray-100 bg-gray-50/60 px-5 py-4 sm:px-7",
		capability: "border border-gray-200 bg-white text-gray-500",
		more: "text-teal-600",
		arrow: "bg-secondary text-white",
	},
	"minimal-receipt": {
		card: "rounded-2xl border border-gray-200 bg-white py-0 shadow-[0_14px_45px_rgba(15,23,42,0.07)] ring-0 transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-[0_20px_60px_rgba(15,23,42,0.10)]",
		hideIcon: true,
		header: "flex flex-col gap-3 px-5 pt-5 pb-0 sm:px-6 sm:pt-6",
		icon: "",
		badge: "bg-gray-100 text-gray-600",
		title: "text-secondary group-hover:text-teal-700",
		tagline: "text-gray-500 not-italic",
		content: "px-5 pb-0 py-3 sm:px-6",
		description: "text-gray-600",
		statsWrap: "mt-4 divide-y divide-gray-100 rounded-2xl border border-gray-100 bg-gray-50 px-3",
		stat: "justify-between py-2",
		statValue: "text-secondary",
		statLabel: "text-gray-400",
		footer: "mt-auto flex-col items-start border-t border-gray-100 bg-white px-5 py-4 sm:px-6",
		capability: "border border-gray-100 bg-gray-50 text-gray-500",
		more: "text-gray-400",
		arrow: "bg-secondary text-white",
	},
	"apple-glass-tile": {
		card: "rounded-[2.25rem] border border-white/70 bg-white/75 py-0 shadow-[0_30px_90px_rgba(15,23,42,0.10)] ring-1 ring-gray-100/70 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/90 hover:shadow-[0_36px_110px_rgba(15,23,42,0.14)]",
		overlay:
			"pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(20,184,166,0.18),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.72),rgba(240,253,250,0.32))]",
		header: "flex flex-col sm:flex-row gap-4 sm:gap-5 px-6 pt-6 pb-0 sm:px-7 sm:pt-7",
		icon: "rounded-2xl bg-white/80 text-teal-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_12px_32px_rgba(15,23,42,0.10)] ring-1 ring-white group-hover:text-secondary",
		badge: "bg-white/75 text-gray-600 shadow-sm ring-1 ring-gray-100",
		title: "text-secondary group-hover:text-teal-700",
		tagline: "text-gray-500 not-italic",
		content: "px-6 pb-0 py-3 sm:px-7",
		description: "text-gray-600",
		statsWrap: "mt-5 grid grid-cols-3 gap-2",
		stat: "rounded-2xl bg-white/70 px-3 py-2 shadow-sm ring-1 ring-white",
		statValue: "text-secondary",
		statLabel: "text-gray-400",
		footer: "mt-auto flex-col items-start border-t border-white/80 bg-white/45 px-6 py-4 sm:px-7",
		capability: "border border-white bg-white/70 text-gray-500 shadow-sm",
		more: "text-teal-600",
		arrow: "bg-white/90 text-secondary shadow-[0_10px_30px_rgba(15,23,42,0.12)] ring-1 ring-gray-100",
	},
	"vision-depth": {
		card: "rounded-[2rem] border border-white/20 bg-secondary py-0 shadow-[0_34px_110px_rgba(15,23,42,0.36)] ring-1 ring-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_40px_130px_rgba(20,184,166,0.24)]",
		overlay:
			"pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_28%_12%,rgba(45,212,191,0.28),transparent_28%),radial-gradient(circle_at_76%_0%,rgba(255,255,255,0.16),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.08),transparent)]",
		header: "flex flex-col sm:flex-row gap-4 sm:gap-5 px-6 pt-6 pb-0 sm:px-7 sm:pt-7",
		icon: "rounded-[1.35rem] bg-white/10 text-teal-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] ring-1 ring-white/15 backdrop-blur-md group-hover:bg-teal-300 group-hover:text-secondary",
		badge: "bg-white/10 text-teal-100 ring-1 ring-white/15",
		title: "text-white group-hover:text-teal-100",
		tagline: "text-teal-200 not-italic",
		content: "px-6 pb-0 py-3 sm:px-7",
		description: "text-gray-300",
		statsWrap: "mt-5 grid grid-cols-3 gap-2",
		stat: "rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-2 backdrop-blur-sm",
		statValue: "text-white",
		statLabel: "text-gray-400",
		footer: "mt-auto flex-col items-start border-t border-white/10 bg-white/[0.04] px-6 py-4 sm:px-7",
		capability: "border border-white/10 bg-white/[0.06] text-gray-300",
		more: "text-teal-200",
		arrow: "bg-teal-300 text-secondary shadow-[0_14px_32px_rgba(45,212,191,0.26)]",
	},
	"ios-settings": {
		card: "rounded-[2rem] border border-gray-200 bg-gray-100 py-0 shadow-[0_20px_60px_rgba(15,23,42,0.08)] ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-50 hover:shadow-[0_26px_75px_rgba(15,23,42,0.11)]",
		header: "flex flex-col sm:flex-row gap-4 sm:gap-5 px-4 pt-4 pb-0 sm:px-5 sm:pt-5",
		icon: "rounded-[1.15rem] bg-teal-500 text-white shadow-sm group-hover:bg-secondary",
		badge: "bg-white text-gray-500 ring-1 ring-gray-200",
		title: "text-secondary group-hover:text-teal-700",
		tagline: "text-gray-500 not-italic",
		content: "px-4 pb-0 py-2 sm:px-5",
		description: "text-gray-600",
		statsWrap: "mt-4 divide-y divide-gray-100 rounded-3xl bg-white px-4 shadow-sm ring-1 ring-gray-100",
		stat: "justify-between py-3",
		statValue: "text-secondary",
		statLabel: "text-gray-400",
		footer: "mt-auto flex-col items-start border-t-0 bg-transparent px-4 py-4 sm:px-5",
		capability: "border border-gray-100 bg-white text-gray-500 shadow-sm",
		more: "text-teal-600",
		arrow: "bg-white text-secondary shadow-sm ring-1 ring-gray-200",
	},
	"keynote-product": {
		card: "rounded-[2.5rem] border border-white/10 bg-[linear-gradient(145deg,#020617_0%,#111827_48%,#0f766e_130%)] py-0 shadow-[0_34px_120px_rgba(15,23,42,0.42)] ring-1 ring-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_42px_140px_rgba(15,23,42,0.50)]",
		overlay:
			"pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal-300/20 blur-3xl",
		hideIcon: true,
		header: "flex flex-col gap-4 px-6 pt-7 pb-0 sm:px-8 sm:pt-8",
		icon: "",
		badge: "bg-white/10 text-teal-100 ring-1 ring-white/10",
		title: "text-4xl text-white tracking-[-0.055em] group-hover:text-teal-100",
		tagline: "text-teal-200 not-italic",
		content: "px-6 pb-0 py-4 sm:px-8",
		description: "text-gray-300",
		statsWrap: "mt-6 flex flex-wrap items-center gap-5",
		stat: "flex-col items-start gap-0",
		statValue: "text-white",
		statLabel: "text-gray-400 uppercase tracking-wider",
		footer: "mt-auto flex-col items-start border-t border-white/10 bg-white/[0.03] px-6 py-5 sm:px-8",
		capability: "border border-white/10 bg-white/[0.06] text-gray-300",
		more: "text-teal-200",
		arrow: "bg-white text-secondary shadow-[0_12px_34px_rgba(255,255,255,0.14)]",
	},
	"safari-preview": {
		card: "rounded-[1.75rem] border border-gray-200 bg-white py-0 shadow-[0_26px_80px_rgba(15,23,42,0.12)] ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_34px_100px_rgba(15,23,42,0.16)] before:absolute before:left-0 before:right-0 before:top-0 before:h-10 before:border-b before:border-gray-100 before:bg-gray-50",
		overlay:
			"pointer-events-none absolute left-5 top-4 z-10 flex h-2.5 w-10 rounded-full bg-[radial-gradient(circle_at_5px_5px,#ef4444_0_4px,transparent_4.5px),radial-gradient(circle_at_20px_5px,#f59e0b_0_4px,transparent_4.5px),radial-gradient(circle_at_35px_5px,#22c55e_0_4px,transparent_4.5px)]",
		header: "flex flex-col sm:flex-row gap-4 sm:gap-5 px-5 pt-16 pb-0 sm:px-6",
		icon: "rounded-xl bg-teal-50 text-teal-600 ring-1 ring-teal-100 group-hover:bg-teal-500 group-hover:text-white",
		badge: "bg-gray-100 text-gray-500",
		title: "text-secondary group-hover:text-teal-700",
		tagline: "text-gray-500 not-italic",
		content: "px-5 pb-0 py-3 sm:px-6",
		description: "text-gray-600",
		statsWrap: "mt-4 grid grid-cols-3 gap-2 rounded-2xl border border-gray-100 bg-gray-50 p-2",
		stat: "rounded-xl bg-white px-2.5 py-2 shadow-sm",
		statValue: "text-secondary",
		statLabel: "text-gray-400",
		footer: "mt-auto flex-col items-start border-t border-gray-100 bg-white px-5 py-4 sm:px-6",
		capability: "border border-gray-100 bg-gray-50 text-gray-500",
		more: "text-teal-600",
		arrow: "bg-secondary text-white",
	},
	"metric-hero": {
		card: "rounded-[2.25rem] border border-teal-100 bg-white py-0 shadow-[0_28px_90px_rgba(15,23,42,0.10)] ring-1 ring-gray-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_36px_110px_rgba(20,184,166,0.16)]",
		overlay:
			"pointer-events-none absolute -right-20 top-8 h-56 w-56 rounded-full bg-teal-100 blur-3xl",
		layout: "metricHero",
		header: "",
		icon: "rounded-2xl bg-secondary text-white shadow-[0_16px_40px_rgba(15,23,42,0.16)] group-hover:bg-teal-500",
		badge: "bg-teal-50 text-teal-700 ring-1 ring-teal-100",
		title: "text-secondary group-hover:text-teal-700",
		tagline: "text-gray-500 not-italic",
		content: "",
		description: "text-gray-600",
		statsWrap: "",
		stat: "",
		statValue: "text-secondary",
		statLabel: "text-gray-400",
		footer: "",
		capability: "border border-gray-100 bg-gray-50 text-gray-500",
		more: "text-teal-600",
		arrow: "bg-secondary text-white",
	},
	"split-narrative": {
		card: "rounded-[2rem] border border-gray-200 bg-white py-0 shadow-[0_26px_80px_rgba(15,23,42,0.10)] ring-1 ring-gray-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_34px_105px_rgba(15,23,42,0.14)]",
		layout: "splitNarrative",
		header: "",
		icon: "rounded-2xl bg-teal-500 text-white shadow-lg group-hover:bg-white group-hover:text-secondary",
		badge: "bg-white/10 text-teal-100 ring-1 ring-white/10",
		title: "text-secondary group-hover:text-teal-700",
		tagline: "text-teal-700 not-italic",
		content: "",
		description: "text-gray-600",
		statsWrap: "",
		stat: "",
		statValue: "text-white",
		statLabel: "text-gray-400",
		footer: "",
		capability: "border border-white/10 bg-white/[0.06] text-gray-300",
		more: "text-teal-200",
		arrow: "bg-teal-400 text-secondary",
	},
	"capability-first": {
		card: "rounded-[2rem] border border-gray-200 bg-gray-50 py-0 shadow-[0_20px_70px_rgba(15,23,42,0.08)] ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_28px_90px_rgba(15,23,42,0.12)]",
		layout: "capabilityFirst",
		header: "",
		icon: "rounded-xl bg-white text-teal-600 ring-1 ring-teal-100",
		badge: "bg-secondary text-white",
		title: "text-secondary group-hover:text-teal-700",
		tagline: "text-gray-500 not-italic",
		content: "",
		description: "text-gray-600",
		statsWrap: "",
		stat: "",
		statValue: "text-secondary",
		statLabel: "text-gray-400",
		footer: "",
		capability: "border border-gray-100 bg-white text-gray-600 shadow-sm",
		more: "text-teal-600",
		arrow: "bg-secondary text-white",
	},
	"radial-proof": {
		card: "rounded-[2.5rem] border border-teal-100 bg-[radial-gradient(circle_at_50%_35%,#f0fdfa_0%,#ffffff_58%)] py-0 shadow-[0_30px_100px_rgba(20,184,166,0.14)] ring-1 ring-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_38px_120px_rgba(20,184,166,0.20)]",
		layout: "radialProof",
		header: "",
		icon: "rounded-full bg-white text-teal-600 shadow-[0_18px_50px_rgba(20,184,166,0.20)] ring-1 ring-teal-100 group-hover:bg-secondary group-hover:text-white",
		badge: "bg-white text-teal-700 ring-1 ring-teal-100",
		title: "text-secondary group-hover:text-teal-700",
		tagline: "text-teal-700 not-italic",
		content: "",
		description: "text-gray-600",
		statsWrap: "",
		stat: "",
		statValue: "text-secondary",
		statLabel: "text-gray-400",
		footer: "",
		capability: "border border-teal-100 bg-white/80 text-gray-500 shadow-sm",
		more: "text-teal-600",
		arrow: "bg-secondary text-white",
	},
	"timeline-stack": {
		card: "rounded-[2rem] border border-gray-200 bg-white py-0 shadow-[0_22px_75px_rgba(15,23,42,0.09)] ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-[0_30px_95px_rgba(15,23,42,0.13)]",
		layout: "timelineStack",
		header: "",
		icon: "rounded-xl bg-teal-50 text-teal-600 ring-1 ring-teal-100 group-hover:bg-teal-500 group-hover:text-white",
		badge: "bg-gray-100 text-gray-500",
		title: "text-secondary group-hover:text-teal-700",
		tagline: "text-gray-500 not-italic",
		content: "",
		description: "text-gray-600",
		statsWrap: "",
		stat: "",
		statValue: "text-secondary",
		statLabel: "text-gray-400",
		footer: "",
		capability: "border border-gray-100 bg-gray-50 text-gray-600",
		more: "text-teal-600",
		arrow: "bg-secondary text-white",
	},
	"magazine-cover": {
		card: "rounded-none border border-secondary bg-[#fbfaf7] py-0 shadow-[12px_12px_0_0_rgba(15,23,42,0.95)] ring-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-[16px_16px_0_0_rgba(20,184,166,0.55)]",
		layout: "magazineCover",
		hideIcon: true,
		header: "",
		icon: "",
		badge: "border border-secondary bg-[#fbfaf7] text-secondary",
		title: "text-secondary group-hover:text-secondary",
		tagline: "text-teal-700 not-italic",
		content: "",
		description: "text-gray-700",
		statsWrap: "",
		stat: "",
		statValue: "text-secondary",
		statLabel: "text-gray-500",
		footer: "",
		capability: "border border-secondary/20 bg-white/70 text-secondary",
		more: "text-secondary",
		arrow: "bg-secondary text-white",
	},
	"command-center": {
		card: "rounded-[1.75rem] border border-white/10 bg-secondary py-0 shadow-[0_30px_95px_rgba(15,23,42,0.34)] ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_38px_115px_rgba(15,23,42,0.42)]",
		overlay:
			"pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(45,212,191,0.12)_1px,transparent_1px),linear-gradient(rgba(45,212,191,0.08)_1px,transparent_1px)] bg-[size:28px_28px]",
		layout: "commandCenter",
		header: "",
		icon: "rounded-xl bg-teal-400 text-secondary shadow-[0_12px_30px_rgba(45,212,191,0.25)]",
		badge: "bg-teal-400 text-secondary",
		title: "text-white group-hover:text-teal-100",
		tagline: "text-teal-200 not-italic",
		content: "",
		description: "text-gray-300",
		statsWrap: "",
		stat: "",
		statValue: "text-white",
		statLabel: "text-gray-400",
		footer: "",
		capability: "border border-white/10 bg-white/[0.06] text-gray-300",
		more: "text-teal-200",
		arrow: "bg-teal-400 text-secondary",
	},
	"proof-ribbon": {
		card: "rounded-[2.25rem] border border-teal-100 bg-white py-0 shadow-[0_28px_90px_rgba(20,184,166,0.12)] ring-1 ring-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_36px_115px_rgba(20,184,166,0.18)]",
		overlay:
			"pointer-events-none absolute left-0 right-0 top-1/2 h-24 -translate-y-1/2 bg-gradient-to-r from-teal-50 via-teal-100/70 to-transparent",
		layout: "proofRibbon",
		header: "",
		icon: "rounded-2xl bg-white text-teal-600 shadow-sm ring-1 ring-teal-100 group-hover:bg-secondary group-hover:text-white",
		badge: "bg-teal-50 text-teal-700 ring-1 ring-teal-100",
		title: "text-secondary group-hover:text-teal-700",
		tagline: "text-gray-500 not-italic",
		content: "",
		description: "text-gray-600",
		statsWrap: "",
		stat: "",
		statValue: "text-secondary",
		statLabel: "text-gray-400",
		footer: "",
		capability: "border border-gray-100 bg-white text-gray-500 shadow-sm",
		more: "text-teal-600",
		arrow: "bg-secondary text-white",
	},
	"floating-modules": {
		card: "rounded-[2rem] border border-gray-200 bg-[linear-gradient(135deg,#ffffff_0%,#f8fafc_42%,#f0fdfa_100%)] py-0 shadow-[0_30px_95px_rgba(15,23,42,0.10)] ring-1 ring-gray-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_38px_120px_rgba(15,23,42,0.15)]",
		overlay:
			"pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-teal-200/35 blur-3xl",
		layout: "floatingModules",
		header: "",
		icon: "rounded-[1.4rem] bg-white text-teal-600 shadow-[0_16px_40px_rgba(15,23,42,0.10)] ring-1 ring-white group-hover:bg-teal-500 group-hover:text-white",
		badge: "bg-white/80 text-teal-700 shadow-sm ring-1 ring-teal-100",
		title: "text-secondary group-hover:text-teal-700",
		tagline: "text-gray-500 not-italic",
		content: "",
		description: "text-gray-600",
		statsWrap: "",
		stat: "",
		statValue: "text-secondary",
		statLabel: "text-gray-400",
		footer: "",
		capability: "border border-white bg-white/80 text-gray-500 shadow-sm",
		more: "text-teal-600",
		arrow: "bg-white text-secondary shadow-sm ring-1 ring-gray-100",
	},
	"comparison-panel": {
		card: "rounded-[2rem] border border-gray-200 bg-white py-0 shadow-[0_24px_80px_rgba(15,23,42,0.10)] ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-[0_32px_100px_rgba(15,23,42,0.14)]",
		layout: "comparisonPanel",
		hideIcon: true,
		header: "",
		icon: "",
		badge: "bg-secondary text-white",
		title: "text-secondary group-hover:text-teal-700",
		tagline: "text-teal-700 not-italic",
		content: "",
		description: "text-gray-600",
		statsWrap: "",
		stat: "",
		statValue: "text-secondary",
		statLabel: "text-gray-400",
		footer: "",
		capability: "border border-teal-100 bg-teal-50/70 text-teal-700",
		more: "text-teal-600",
		arrow: "bg-secondary text-white",
	},
	"system-summary": {
		card: "rounded-[2rem] border border-gray-200 bg-white py-0 shadow-[0_22px_70px_rgba(15,23,42,0.08)] ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-[0_28px_90px_rgba(15,23,42,0.12)]",
		layout: "metricHero",
		header: "",
		icon: "rounded-2xl bg-teal-50 text-teal-600 ring-1 ring-teal-100 group-hover:bg-teal-500 group-hover:text-white",
		badge: "bg-gray-100 text-gray-600 ring-1 ring-gray-200",
		title: "text-secondary group-hover:text-teal-700",
		tagline: "text-gray-500 not-italic",
		content: "",
		description: "text-gray-600",
		statsWrap: "",
		stat: "",
		statValue: "text-secondary",
		statLabel: "text-gray-400",
		footer: "",
		capability: "border border-gray-100 bg-gray-50 text-gray-600",
		more: "text-teal-600",
		arrow: "bg-secondary text-white",
	},
	"verification-console": {
		card: "rounded-[2rem] border border-gray-200 bg-secondary py-0 shadow-[0_24px_80px_rgba(15,23,42,0.24)] ring-1 ring-gray-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_100px_rgba(15,23,42,0.32)]",
		layout: "commandCenter",
		header: "",
		icon: "rounded-xl bg-teal-400 text-secondary shadow-sm",
		badge: "bg-teal-400 text-secondary",
		title: "text-white group-hover:text-teal-100",
		tagline: "text-teal-200 not-italic",
		content: "",
		description: "text-gray-300",
		statsWrap: "",
		stat: "",
		statValue: "text-white",
		statLabel: "text-gray-400",
		footer: "",
		capability: "border border-white/10 bg-white/6 text-gray-300",
		more: "text-teal-200",
		arrow: "bg-teal-400 text-secondary",
	},
	"capability-matrix": {
		card: "rounded-[2rem] border border-gray-200 bg-gray-50 py-0 shadow-[0_20px_70px_rgba(15,23,42,0.08)] ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:border-teal-200 hover:shadow-[0_28px_90px_rgba(15,23,42,0.12)]",
		layout: "capabilityFirst",
		header: "",
		icon: "rounded-xl bg-white text-teal-600 ring-1 ring-teal-100",
		badge: "bg-secondary text-white",
		title: "text-secondary group-hover:text-teal-700",
		tagline: "text-gray-500 not-italic",
		content: "",
		description: "text-gray-600",
		statsWrap: "",
		stat: "",
		statValue: "text-secondary",
		statLabel: "text-gray-400",
		footer: "",
		capability: "border border-gray-100 bg-white text-gray-600 shadow-sm",
		more: "text-teal-600",
		arrow: "bg-secondary text-white",
	},
	"audit-trail": {
		card: "rounded-[2rem] border border-gray-200 bg-white py-0 shadow-[0_22px_75px_rgba(15,23,42,0.08)] ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-[0_30px_95px_rgba(15,23,42,0.12)]",
		layout: "timelineStack",
		header: "",
		icon: "rounded-xl bg-teal-50 text-teal-600 ring-1 ring-teal-100 group-hover:bg-teal-500 group-hover:text-white",
		badge: "bg-gray-100 text-gray-600",
		title: "text-secondary group-hover:text-teal-700",
		tagline: "text-gray-500 not-italic",
		content: "",
		description: "text-gray-600",
		statsWrap: "",
		stat: "",
		statValue: "text-secondary",
		statLabel: "text-gray-400",
		footer: "",
		capability: "border border-gray-100 bg-gray-50 text-gray-600",
		more: "text-teal-600",
		arrow: "bg-secondary text-white",
	},
	"outcome-panel": {
		card: "rounded-[2rem] border border-gray-200 bg-white py-0 shadow-[0_24px_80px_rgba(15,23,42,0.08)] ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-[0_32px_100px_rgba(15,23,42,0.12)]",
		layout: "comparisonPanel",
		hideIcon: true,
		header: "",
		icon: "",
		badge: "bg-secondary text-white",
		title: "text-secondary group-hover:text-teal-700",
		tagline: "text-teal-700 not-italic",
		content: "",
		description: "text-gray-600",
		statsWrap: "",
		stat: "",
		statValue: "text-secondary",
		statLabel: "text-gray-400",
		footer: "",
		capability: "border border-teal-100 bg-teal-50/70 text-teal-700",
		more: "text-teal-600",
		arrow: "bg-secondary text-white",
	},
};

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
				title={FEATURES_INDEX_SEO.title}
				description={FEATURES_INDEX_SEO.description}
				ogDescription={FEATURES_INDEX_SEO.ogDescription}
				twitterDescription={FEATURES_INDEX_SEO.twitterDescription}
				keywords={FEATURES_INDEX_SEO.keywords}
				canonical={FEATURES_INDEX_SEO.canonical}
				imageAlt={FEATURES_INDEX_SEO.imageAlt}
				schema={featuresIndexSchema}
				{...DEFAULT_OG_IMAGE}
			/>
			<Navbar
				onRequestDemo={openDemo}
				variant="solid"
			/>

			{/* Hero */}
			<section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
				<div
					className="absolute inset-0 opacity-[0.07]"
					style={{
						backgroundImage:
							"linear-gradient(rgba(15,23,42,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,.8) 1px, transparent 1px)",
						backgroundSize: "64px 64px",
					}}
				/>
				<div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-32 max-w-5xl mx-auto">
					<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/15 bg-secondary/5 backdrop-blur-sm text-secondary text-sm font-medium mb-8">
						<SquaresFourIcon />
						<span>Platform Capabilities</span>
					</div>
					<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-secondary tracking-tighter leading-none mb-8">
						Everything You Need to{" "}
						<span className="text-teal-500">Verify Africa</span>
					</h1>
					<p className="text-lg sm:text-xl text-secondary max-w-3xl leading-relaxed mb-12">
						A single compliance and identity platform covering every
						verification need — from KYC to AML, biometrics to transaction risk.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button
							size="lg"
							onClick={openDemo}
							className="h-auto px-7 py-3.5 bg-teal-500 text-white font-semibold hover:bg-teal-400 cursor-pointer"
						>
							Request a Demo
							<ArrowRightIcon />
						</Button>
						<Button
							variant="outline"
							size="lg"
							asChild
							className="h-auto px-7 py-3.5 border-secondary/30 bg-transparent text-secondary font-semibold hover:border-secondary/60 hover:bg-secondary/10 hover:text-secondary cursor-pointer"
						>
							<a
								href="https://docs.verifyafrica.io"
								target="_blank"
								rel="noopener noreferrer"
							>
								Read API Docs
							</a>
						</Button>
					</div>
				</div>
				<ScrollIndicator />
			</section>

			{/* Search & Filter Bar */}
			<section className="sticky top-16 sm:top-20 z-30 bg-white border-b border-gray-100">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4">
					<div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center flex-wrap">
						{/* Search */}
						<div className="relative flex-1 min-w-40 w-full lg:max-w-md">
							<MagnifyingGlassIcon className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 text-sm text-muted-foreground" />
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
									<XIcon className="text-sm" />
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
								<MagnifyingGlassIcon className="text-3xl text-gray-400" />
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
						<div className="grid grid-cols-1 items-stretch gap-4 sm:gap-6 md:grid-cols-2">
							{filtered.map((feature) => (
								<FeatureIndexCard
									key={feature.slug}
									feature={feature}
									variation="system-summary"
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

function FeatureIndexCard({
	feature,
	variation = "system-summary",
}: {
	feature: FeatureDetail;
	variation?: FeatureCardVariationId;
}) {
	const colors: FeatureColors =
		FEATURE_COLORS[feature.slug] ?? DEFAULT_FEATURE_COLORS;
	const categoryLabel = CATEGORY_LABEL_MAP[feature.slug] ?? "";
	const variant = FEATURE_CARD_VARIATION_STYLES[variation];

	if (variant.layout) {
		return (
			<FeatureIndexCustomCard
				feature={feature}
				categoryLabel={categoryLabel}
				colors={colors}
				variant={variant}
			/>
		);
	}

	return (
		<Card
			className={`group relative gap-0 overflow-hidden ${variant.card} ${colors.borderHover}`}
		>
			{variant.overlay && <div className={variant.overlay} />}
			{/* <div className={`h-1.5 w-full bg-gradient-to-r ${colors.band}`} /> */}
			<Link
				to={`/features/${feature.slug}`}
				className="relative z-10 flex h-full flex-col cursor-pointer"
			>
				<CardHeader className={variant.header}>
					{!variant.hideIcon && (
						<div
							className={`flex h-12 w-12 shrink-0 items-center justify-center transition-colors duration-300 ${variant.icon}`}
						>
							<feature.icon
								className="text-xl"
								aria-hidden
							/>
						</div>
					)}
					<div className="min-w-0 flex-1 space-y-1">
						<div className="flex items-start justify-between gap-2">
							<CardTitle
								className={`text-base sm:text-lg font-bold leading-snug transition-colors duration-300 ${variant.title}`}
							>
								{feature.title}
							</CardTitle>
							{categoryLabel && (
								<span
									className={`hidden shrink-0 rounded-full px-2 py-1 text-[10px] font-semibold sm:inline-flex ${variant.badge}`}
								>
									{categoryLabel}
								</span>
							)}
						</div>
						<CardDescription
							className={`text-sm font-medium italic ${variant.tagline}`}
						>
							{feature.tagline}
						</CardDescription>
					</div>
				</CardHeader>

				<CardContent className={variant.content}>
					<p
						className={`text-sm leading-relaxed line-clamp-2 ${variant.description}`}
					>
						{feature.description}
					</p>
					<div className={variant.statsWrap}>
						{feature.stats.slice(0, 3).map((stat) => (
							<div
								key={stat.label}
								className={`flex items-center gap-1.5 ${variant.stat}`}
							>
								<span className={`text-sm font-bold ${variant.statValue}`}>
									{stat.value}
								</span>
								<span className={`text-xs font-semibold ${variant.statLabel}`}>
									{stat.label}
								</span>
							</div>
						))}
					</div>
				</CardContent>

				<CardFooter
					className={variant.footer}
				>
					<div className="flex flex-wrap items-center gap-2">
						{feature.capabilities.slice(0, 4).map((cap) => (
							<span
								key={cap.title}
								className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${variant.capability}`}
							>
								<cap.icon
									className="text-[10px]"
									aria-hidden
								/>
								{cap.title}
							</span>
						))}
						{feature.capabilities.length > 4 && (
							<span className={`text-xs font-medium ${variant.more}`}>
								+{feature.capabilities.length - 4} more
							</span>
						)}
					</div>
				</CardFooter>
			</Link>

			<div
				className={`pointer-events-none absolute bottom-4 right-4 z-20 flex h-7 w-7 translate-y-1 items-center justify-center rounded-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 ${variant.arrow}`}
			>
				<ArrowUpRightIcon className="text-sm" />
			</div>
		</Card>
	);
}

function FeatureIndexCustomCard({
	feature,
	categoryLabel,
	colors,
	variant,
}: {
	feature: FeatureDetail;
	categoryLabel: string;
	colors: FeatureColors;
	variant: (typeof FEATURE_CARD_VARIATION_STYLES)[FeatureCardVariationId];
}) {
	const primaryStat = feature.stats[0];
	const supportingStats = feature.stats.slice(1, 4);
	const visibleCapabilities = feature.capabilities.slice(0, 4);

	return (
		<Card
			className={`group relative gap-0 overflow-hidden ${variant.card} ${colors.borderHover}`}
		>
			{variant.overlay && <div className={variant.overlay} />}
			<Link
				to={`/features/${feature.slug}`}
				className="relative z-10 flex h-full cursor-pointer flex-col"
			>
				{variant.layout === "metricHero" && (
					<div className="flex h-full flex-col p-6 sm:p-7">
						<div className="mb-6 flex items-center justify-between gap-4">
							<div
								className={`flex h-12 w-12 items-center justify-center ${variant.icon}`}
							>
								<feature.icon
									className="text-xl"
									aria-hidden
								/>
							</div>
							{categoryLabel && (
								<span
									className={`rounded-full px-3 py-1 text-[10px] font-semibold ${variant.badge}`}
								>
									{categoryLabel}
								</span>
							)}
						</div>
						<div className="mb-6">
							<div className="text-6xl font-bold tracking-[-0.08em] text-secondary sm:text-7xl">
								{primaryStat.value}
							</div>
							<div className="mt-1 text-xs font-bold uppercase tracking-[0.24em] text-teal-600">
								{primaryStat.label}
							</div>
						</div>
						<div className="mt-auto">
							<h3
								className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${variant.title}`}
							>
								{feature.title}
							</h3>
							<p className={`mt-2 text-sm font-medium ${variant.tagline}`}>
								{feature.tagline}
							</p>
							<p className={`mt-4 text-sm leading-relaxed ${variant.description}`}>
								{feature.description}
							</p>
							<div className="mt-5 grid grid-cols-2 gap-2">
								{supportingStats.map((stat) => (
									<div
										key={stat.label}
										className="rounded-2xl bg-gray-50 px-3 py-2 ring-1 ring-gray-100"
									>
										<div className={`text-sm font-bold ${variant.statValue}`}>
											{stat.value}
										</div>
										<div className={`text-[11px] font-semibold ${variant.statLabel}`}>
											{stat.label}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				)}

				{variant.layout === "splitNarrative" && (
					<div className="grid h-full grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
						<div className="flex flex-col bg-secondary p-6 text-white sm:p-7">
							<div
								className={`mb-6 flex h-12 w-12 items-center justify-center ${variant.icon}`}
							>
								<feature.icon
									className="text-xl"
									aria-hidden
								/>
							</div>
							<div className="space-y-2">
								{visibleCapabilities.map((cap) => (
									<div
										key={cap.title}
										className={`flex items-center gap-2 rounded-2xl px-3 py-2 text-xs font-medium ${variant.capability}`}
									>
										<cap.icon
											className="text-sm"
											aria-hidden
										/>
										{cap.title}
									</div>
								))}
							</div>
						</div>
						<div className="flex flex-col p-6 sm:p-7">
							{categoryLabel && (
								<span
									className={`mb-4 w-fit rounded-full px-3 py-1 text-[10px] font-semibold ${variant.badge}`}
								>
									{categoryLabel}
								</span>
							)}
							<h3
								className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${variant.title}`}
							>
								{feature.title}
							</h3>
							<p className={`mt-2 text-sm font-semibold ${variant.tagline}`}>
								{feature.tagline}
							</p>
							<p className={`mt-5 text-sm leading-relaxed ${variant.description}`}>
								{feature.description}
							</p>
							<div className="mt-auto grid grid-cols-3 gap-2 pt-6">
								{feature.stats.slice(0, 3).map((stat) => (
									<div
										key={stat.label}
										className="rounded-2xl bg-gray-50 px-3 py-2"
									>
										<div className="text-sm font-bold text-secondary">
											{stat.value}
										</div>
										<div className="text-[11px] font-semibold text-gray-400">
											{stat.label}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				)}

				{variant.layout === "capabilityFirst" && (
					<div className="flex h-full flex-col p-5 sm:p-6">
						<div className="grid grid-cols-2 gap-2">
							{visibleCapabilities.map((cap) => (
								<div
									key={cap.title}
									className={`flex min-h-24 flex-col justify-between rounded-3xl p-4 ${variant.capability}`}
								>
									<cap.icon
										className="text-xl text-teal-600"
										aria-hidden
									/>
									<span>{cap.title}</span>
								</div>
							))}
						</div>
						<div className="mt-6 flex items-start justify-between gap-4">
							<div>
								<h3
									className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${variant.title}`}
								>
									{feature.title}
								</h3>
								<p className={`mt-2 text-sm font-medium ${variant.tagline}`}>
									{feature.tagline}
								</p>
							</div>
							{categoryLabel && (
								<span
									className={`shrink-0 rounded-full px-3 py-1 text-[10px] font-semibold ${variant.badge}`}
								>
									{categoryLabel}
								</span>
							)}
						</div>
						<p className={`mt-4 text-sm leading-relaxed ${variant.description}`}>
							{feature.description}
						</p>
						<div className="mt-auto flex flex-wrap gap-2 pt-5">
							{feature.stats.slice(0, 3).map((stat) => (
								<div
									key={stat.label}
									className="rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-gray-100"
								>
									<span className="text-sm font-bold text-secondary">
										{stat.value}
									</span>{" "}
									<span className="text-xs font-semibold text-gray-400">
										{stat.label}
									</span>
								</div>
							))}
						</div>
					</div>
				)}

				{variant.layout === "radialProof" && (
					<div className="flex h-full flex-col p-6 text-center sm:p-8">
						{categoryLabel && (
							<span
								className={`mx-auto mb-5 rounded-full px-3 py-1 text-[10px] font-semibold ${variant.badge}`}
							>
								{categoryLabel}
							</span>
						)}
						<div className="relative mx-auto mb-6 flex h-36 w-36 items-center justify-center rounded-full border border-teal-100 bg-white/70">
							<div
								className={`flex h-20 w-20 items-center justify-center ${variant.icon}`}
							>
								<feature.icon
									className="text-3xl"
									aria-hidden
								/>
							</div>
							{feature.stats.slice(0, 3).map((stat, index) => (
								<div
									key={stat.label}
									className={`absolute rounded-2xl bg-white px-3 py-2 text-left shadow-sm ring-1 ring-teal-100 ${
										index === 0
											? "-left-12 top-4"
											: index === 1
												? "-right-12 top-10"
												: "bottom-0 left-1/2 -translate-x-1/2"
									}`}
								>
									<div className="text-sm font-bold text-secondary">
										{stat.value}
									</div>
									<div className="text-[10px] font-semibold text-gray-400">
										{stat.label}
									</div>
								</div>
							))}
						</div>
						<h3
							className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${variant.title}`}
						>
							{feature.title}
						</h3>
						<p className={`mt-2 text-sm font-semibold ${variant.tagline}`}>
							{feature.tagline}
						</p>
						<p className={`mt-4 text-sm leading-relaxed ${variant.description}`}>
							{feature.description}
						</p>
						<div className="mt-auto flex flex-wrap justify-center gap-2 pt-5">
							{visibleCapabilities.slice(0, 3).map((cap) => (
								<span
									key={cap.title}
									className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${variant.capability}`}
								>
									<cap.icon
										className="text-[10px]"
										aria-hidden
									/>
									{cap.title}
								</span>
							))}
						</div>
					</div>
				)}

				{variant.layout === "timelineStack" && (
					<div className="flex h-full flex-col p-6 sm:p-7">
						<div className="mb-6 flex items-center justify-between gap-4">
							<div>
								<h3
									className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${variant.title}`}
								>
									{feature.title}
								</h3>
								<p className={`mt-2 text-sm font-medium ${variant.tagline}`}>
									{feature.tagline}
								</p>
							</div>
							{!variant.hideIcon && (
								<div
									className={`flex h-12 w-12 shrink-0 items-center justify-center ${variant.icon}`}
								>
									<feature.icon
										className="text-xl"
										aria-hidden
									/>
								</div>
							)}
						</div>
						<div className="space-y-3">
							{feature.stats.slice(0, 3).map((stat, index) => {
								const capability = feature.capabilities[index];
								return (
									<div
										key={stat.label}
										className="grid grid-cols-[auto_1fr] gap-3 rounded-3xl border border-gray-100 bg-gray-50 p-3"
									>
										<div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-bold text-teal-600 shadow-sm">
											{index + 1}
										</div>
										<div>
											<div className="flex flex-wrap items-center gap-2">
												<span className="text-sm font-bold text-secondary">
													{stat.value}
												</span>
												<span className="text-xs font-semibold text-gray-400">
													{stat.label}
												</span>
											</div>
											{capability && (
												<div className="mt-1 flex items-center gap-1 text-xs font-medium text-gray-500">
													<capability.icon
														className="text-[11px] text-teal-600"
														aria-hidden
													/>
													{capability.title}
												</div>
											)}
										</div>
									</div>
								);
							})}
						</div>
						<p className={`mt-5 text-sm leading-relaxed ${variant.description}`}>
							{feature.description}
						</p>
					</div>
				)}

				{variant.layout === "magazineCover" && (
					<div className="flex h-full flex-col p-6 sm:p-8">
						<div className="mb-8 flex items-center justify-between border-b border-secondary pb-3">
							<span className="text-xs font-bold uppercase tracking-[0.28em] text-secondary">
								VerifyAfrica Index
							</span>
							{categoryLabel && (
								<span
									className={`rounded-full px-3 py-1 text-[10px] font-semibold ${variant.badge}`}
								>
									{categoryLabel}
								</span>
							)}
						</div>
						<h3
							className={`max-w-lg text-5xl font-bold leading-none tracking-[-0.075em] transition-colors duration-300 sm:text-6xl ${variant.title}`}
						>
							{feature.title}
						</h3>
						<p className={`mt-5 max-w-md text-base font-semibold ${variant.tagline}`}>
							{feature.tagline}
						</p>
						<div className="mt-auto grid gap-6 pt-10 lg:grid-cols-[1fr_0.85fr]">
							<p className={`text-sm leading-relaxed ${variant.description}`}>
								{feature.description}
							</p>
							<div className="space-y-3">
								{feature.stats.slice(0, 3).map((stat) => (
									<div
										key={stat.label}
										className="flex items-baseline justify-between gap-4 border-b border-secondary/15 pb-2"
									>
										<span className={`text-2xl font-bold ${variant.statValue}`}>
											{stat.value}
										</span>
										<span className={`text-right text-xs font-semibold ${variant.statLabel}`}>
											{stat.label}
										</span>
									</div>
								))}
							</div>
						</div>
						<div className="mt-6 flex flex-wrap gap-2">
							{visibleCapabilities.slice(0, 3).map((cap) => (
								<span
									key={cap.title}
									className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${variant.capability}`}
								>
									<cap.icon
										className="text-[10px]"
										aria-hidden
									/>
									{cap.title}
								</span>
							))}
						</div>
					</div>
				)}

				{variant.layout === "commandCenter" && (
					<div className="flex h-full flex-col p-5 sm:p-6">
						<div className="mb-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/6 px-3 py-2">
							<div className="flex items-center gap-2">
								<span className="h-2 w-2 rounded-full bg-teal-300" />
								<span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-300">
									Live Capability
								</span>
							</div>
							{categoryLabel && (
								<span
									className={`rounded-full px-3 py-1 text-[10px] font-semibold ${variant.badge}`}
								>
									{categoryLabel}
								</span>
							)}
						</div>
						<div className="grid gap-4 lg:grid-cols-[1fr_0.9fr]">
							<div>
								<div
									className={`mb-5 flex h-12 w-12 items-center justify-center ${variant.icon}`}
								>
									<feature.icon
										className="text-xl"
										aria-hidden
									/>
								</div>
								<h3
									className={`text-3xl font-bold tracking-[-0.04em] transition-colors duration-300 ${variant.title}`}
								>
									{feature.title}
								</h3>
								<p className={`mt-2 text-sm font-semibold ${variant.tagline}`}>
									{feature.tagline}
								</p>
								<p className={`mt-5 text-sm leading-relaxed ${variant.description}`}>
									{feature.description}
								</p>
							</div>
							<div className="space-y-2">
								{feature.stats.slice(0, 3).map((stat) => (
									<div
										key={stat.label}
										className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3"
									>
										<div className={`text-xl font-bold ${variant.statValue}`}>
											{stat.value}
										</div>
										<div className={`text-xs font-semibold ${variant.statLabel}`}>
											{stat.label}
										</div>
									</div>
								))}
							</div>
						</div>
						<div className="mt-auto flex flex-wrap gap-2 pt-5">
							{visibleCapabilities.map((cap) => (
								<span
									key={cap.title}
									className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${variant.capability}`}
								>
									<cap.icon
										className="text-[10px]"
										aria-hidden
									/>
									{cap.title}
								</span>
							))}
						</div>
					</div>
				)}

				{variant.layout === "proofRibbon" && (
					<div className="flex h-full flex-col p-6 sm:p-7">
						<div className="mb-6 flex items-start justify-between gap-5">
							<div>
								<h3
									className={`text-3xl font-bold tracking-[-0.045em] transition-colors duration-300 ${variant.title}`}
								>
									{feature.title}
								</h3>
								<p className={`mt-2 text-sm font-medium ${variant.tagline}`}>
									{feature.tagline}
								</p>
							</div>
							<div
								className={`flex h-12 w-12 shrink-0 items-center justify-center ${variant.icon}`}
							>
								<feature.icon
									className="text-xl"
									aria-hidden
								/>
							</div>
						</div>
						<div className="relative my-3 grid grid-cols-3 gap-2 rounded-[1.75rem] bg-white/80 p-3 shadow-sm ring-1 ring-teal-100">
							{feature.stats.slice(0, 3).map((stat) => (
								<div
									key={stat.label}
									className="rounded-2xl bg-teal-50/70 px-3 py-3 text-center"
								>
									<div className={`text-lg font-bold ${variant.statValue}`}>
										{stat.value}
									</div>
									<div className={`text-[10px] font-semibold ${variant.statLabel}`}>
										{stat.label}
									</div>
								</div>
							))}
						</div>
						<p className={`mt-5 text-sm leading-relaxed ${variant.description}`}>
							{feature.description}
						</p>
						<div className="mt-auto grid grid-cols-2 gap-2 pt-5">
							{visibleCapabilities.slice(0, 4).map((cap) => (
								<div
									key={cap.title}
									className={`flex items-center gap-2 rounded-2xl px-3 py-2 text-xs font-medium ${variant.capability}`}
								>
									<cap.icon
										className="text-sm text-teal-600"
										aria-hidden
									/>
									{cap.title}
								</div>
							))}
						</div>
					</div>
				)}

				{variant.layout === "floatingModules" && (
					<div className="grid h-full gap-3 p-5 sm:p-6 lg:grid-cols-[1fr_0.8fr]">
						<div className="flex flex-col rounded-[1.75rem] bg-white/80 p-5 shadow-sm ring-1 ring-white">
							<div className="mb-5 flex items-center justify-between gap-4">
								<div
									className={`flex h-12 w-12 items-center justify-center ${variant.icon}`}
								>
									<feature.icon
										className="text-xl"
										aria-hidden
									/>
								</div>
								{categoryLabel && (
									<span
										className={`rounded-full px-3 py-1 text-[10px] font-semibold ${variant.badge}`}
									>
										{categoryLabel}
									</span>
								)}
							</div>
							<h3
								className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${variant.title}`}
							>
								{feature.title}
							</h3>
							<p className={`mt-2 text-sm font-semibold ${variant.tagline}`}>
								{feature.tagline}
							</p>
							<p className={`mt-5 text-sm leading-relaxed ${variant.description}`}>
								{feature.description}
							</p>
						</div>
						<div className="grid gap-3">
							<div className="rounded-3xl bg-white/80 p-4 shadow-sm ring-1 ring-white">
								<div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-teal-600">
									Proof
								</div>
								<div className="space-y-2">
									{feature.stats.slice(0, 3).map((stat) => (
										<div
											key={stat.label}
											className="flex items-center justify-between gap-3"
										>
											<span className={`text-sm font-bold ${variant.statValue}`}>
												{stat.value}
											</span>
											<span className={`text-right text-xs font-semibold ${variant.statLabel}`}>
												{stat.label}
											</span>
										</div>
									))}
								</div>
							</div>
							<div className="rounded-3xl bg-white/80 p-4 shadow-sm ring-1 ring-white">
								<div className="flex flex-wrap gap-2">
									{visibleCapabilities.slice(0, 3).map((cap) => (
										<span
											key={cap.title}
											className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${variant.capability}`}
										>
											<cap.icon
												className="text-[10px]"
												aria-hidden
											/>
											{cap.title}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
				)}

				{variant.layout === "comparisonPanel" && (
					<div className="flex h-full flex-col p-6 sm:p-7">
						<div className="mb-6 flex items-start justify-between gap-4">
							<div>
								{categoryLabel && (
									<span
										className={`mb-4 inline-flex rounded-full px-3 py-1 text-[10px] font-semibold ${variant.badge}`}
									>
										{categoryLabel}
									</span>
								)}
								<h3
									className={`text-3xl font-bold tracking-[-0.04em] transition-colors duration-300 ${variant.title}`}
								>
									{feature.title}
								</h3>
							</div>
							<div className="hidden rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700 sm:block">
								Upgrade Path
							</div>
						</div>
						<div className="grid gap-3 lg:grid-cols-2">
							<div className="rounded-3xl border border-gray-100 bg-gray-50 p-4">
								<div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
									Before
								</div>
								<p className="text-sm leading-relaxed text-gray-500">
									Fragmented checks, manual reviews, and scattered compliance
									signals slow down onboarding.
								</p>
							</div>
							<div className="rounded-3xl border border-teal-100 bg-teal-50/80 p-4">
								<div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
									With VerifyAfrica
								</div>
								<p className={`text-sm leading-relaxed ${variant.description}`}>
									{feature.description}
								</p>
							</div>
						</div>
						<div className="mt-5 grid grid-cols-3 gap-2">
							{feature.stats.slice(0, 3).map((stat) => (
								<div
									key={stat.label}
									className="rounded-2xl border border-gray-100 bg-white px-3 py-2 shadow-sm"
								>
									<div className={`text-sm font-bold ${variant.statValue}`}>
										{stat.value}
									</div>
									<div className={`text-[11px] font-semibold ${variant.statLabel}`}>
										{stat.label}
									</div>
								</div>
							))}
						</div>
						<div className="mt-auto flex flex-wrap gap-2 pt-5">
							{visibleCapabilities.slice(0, 4).map((cap) => (
								<span
									key={cap.title}
									className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${variant.capability}`}
								>
									<cap.icon
										className="text-[10px]"
										aria-hidden
									/>
									{cap.title}
								</span>
							))}
						</div>
					</div>
				)}
			</Link>

			<div
				className={`pointer-events-none absolute bottom-4 right-4 z-20 flex h-7 w-7 translate-y-1 items-center justify-center rounded-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 ${variant.arrow}`}
			>
				<ArrowUpRightIcon className="text-sm" />
			</div>
		</Card>
	);
}
