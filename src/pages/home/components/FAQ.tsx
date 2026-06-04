import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

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

export default function FAQ() {
	const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

	return (
		<section
			id="faq"
			className="py-16 sm:py-20 lg:py-28 bg-[#f6f6f4] overflow-hidden"
		>
			<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
				<div
					ref={ref}
					className={`transition-all duration-700 ${
						isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
					}`}
				>
					<h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-secondary text-center mb-10 sm:mb-14 tracking-tight">
						Frequently Asked Questions
					</h2>

					<Accordion
						type="single"
						collapsible
						defaultValue="item-0"
						className="w-full border-t border-gray-200"
					>
						{faqs.map((faq, index) => (
							<AccordionItem
								key={faq.question}
								value={`item-${index}`}
								className="border-b border-gray-200"
							>
								<AccordionTrigger className="py-5 sm:py-6 text-base sm:text-lg font-semibold text-secondary hover:no-underline items-center gap-4 **:data-[slot=accordion-trigger-icon]:hidden cursor-pointer">
									<span className="text-left flex-1">{faq.question}</span>
									<Plus className="size-4 shrink-0 text-gray-400 transition-transform duration-300 ease-out group-data-[state=open]/accordion-trigger:rotate-45" />
								</AccordionTrigger>
								<AccordionContent className="text-sm sm:text-base text-gray-500 leading-relaxed pb-5 sm:pb-6">
									{faq.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>

					<p className="text-sm sm:text-base text-gray-500 font-medium text-center pt-10 sm:pt-12">
						Still have questions?{" "}
						<Link
							to="/contact"
							className="text-teal-600 font-semibold hover:text-teal-700 transition-colors relative group"
						>
							<span>Contact us</span>
							<span className="absolute -bottom-0.75 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
						</Link>
					</p>
				</div>
			</div>
		</section>
	);
}
