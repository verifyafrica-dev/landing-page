import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { HoverUnderline } from "@/components/ui/hover-underline";
import { cn } from "@/lib/utils";

export interface FAQItem {
	question: string;
	answer: string;
}

interface FAQProps {
	faqs: FAQItem[];
	title?: string;
	id?: string;
	showContactLink?: boolean;
	className?: string;
}

export default function FAQ({
	faqs,
	title = "Frequently Asked Questions",
	id,
	showContactLink = true,
	className,
}: FAQProps) {
	const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

	return (
		<section
			id={id}
			className={cn(
				"py-16 sm:py-20 lg:py-28 bg-[#f6f6f4] overflow-hidden",
				className,
			)}
		>
			<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
				<div
					ref={ref}
					className={cn(
						"transition-all duration-700",
						isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
					)}
				>
					<h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-secondary text-center mb-10 sm:mb-14 tracking-tight">
						{title}
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

					{showContactLink && (
						<p className="text-sm sm:text-base text-gray-500 font-medium text-center pt-10 sm:pt-12">
							Still have questions?{" "}
							<Link
								to="/contact"
								className="text-teal-600 font-semibold hover:text-teal-700 transition-colors relative group"
							>
								<span>Contact us</span>
								<HoverUnderline className="-bottom-0.75 bg-teal-600" />
							</Link>
						</p>
					)}
				</div>
			</div>
		</section>
	);
}
