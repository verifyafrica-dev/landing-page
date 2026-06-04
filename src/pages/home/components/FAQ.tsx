import FAQ from "@/components/feature/FAQ";

const faqs = [
	{
		question: "What countries does VerifyAfrica cover?",
		answer:
			"VerifyAfrica supports identity verification and compliance workflows across all 54 African countries, using a mix of AI-driven checks and official registry integrations where available.",
	},
	{
		question: "Do you integrate with government registries?",
		answer:
			"Where available, VerifyAfrica connects to official registries and authoritative data sources to strengthen verification accuracy, combined with AI-based validation and multi-source checks.",
	},
	{
		question: "Is VerifyAfrica suitable for regulated industries?",
		answer:
			"Yes. The platform is built as a Compliance Operating System with audit logs, evidence retention, decision transparency, and governance controls to support regulated environments.",
	},
	{
		question: "Can we use your API instead of the dashboard?",
		answer:
			"Yes. Businesses can integrate via API directly into their onboarding flows or use the VerifyAfrica dashboard for case management and monitoring.",
	},
	{
		question: "Do you offer ongoing monitoring?",
		answer:
			"Yes. VerifyAfrica provides continuous monitoring, risk signals, and configurable alerts beyond initial onboarding.",
	},
	{
		question: "What is VerifyAfrica's pricing model?",
		answer:
			"Pricing includes a monthly platform fee plus usage-based verification pricing, with volume tiers and enterprise configurations available.",
	},
	{
		question: "How long does integration take?",
		answer:
			"Most API integrations take 1–2 weeks, depending on workflow complexity.",
	},
];

export default function HomeFAQ() {
	return (
		<FAQ
			id="faq"
			faqs={faqs}
		/>
	);
}
