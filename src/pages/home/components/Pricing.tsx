import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { CheckIcon, CrownIcon, TrendUpIcon } from "@phosphor-icons/react";
import { track } from "@/lib/analytics";
import { useDemoModal } from "@/hooks/useDemoModal";
import { HoverUnderline } from "@/components/ui/hover-underline";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const plans = [
	{
		id: "growth",
		name: "Growth Tier",
		description: "For scaling businesses expanding into African markets",
		platformFee: "$950",
		verificationPrice: "$6–$10",
		features: [
			"All verification types included",
			"Dashboard access",
			"API integration",
			"Standard support",
			"Audit trail & reporting",
			"Up to 5 team members",
		],
		badge: null,
		highlight: false,
		icon: TrendUpIcon,
	},
	{
		id: "enterprise",
		name: "Enterprise Tier",
		description: "For regulated, high-volume operators",
		platformFee: "$1,750",
		verificationPrice: "$5–$7",
		features: [
			"Everything in Growth",
			"Priority support & SLA",
			"Custom risk configurations",
			"Dedicated account manager",
			"Advanced reporting & analytics",
			"Unlimited team members",
			"Custom integrations",
		],
		badge: "Recommended",
		highlight: true,
		icon: CrownIcon,
	},
] as const;

export default function Pricing() {
	const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
	const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({
		threshold: 0.2,
	});
	const { openDemo } = useDemoModal();

	return (
		<section
			id="pricing"
			className="py-12 sm:py-16 lg:py-24 bg-white "
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
				<div
					ref={headerRef}
					className={`text-center mb-10 sm:mb-12 lg:mb-16 transition-all duration-700 ${
						headerVisible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-10"
					}`}
				>
					<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-2 sm:mb-4">
						Transparent Pricing
					</h2>
					<p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
						Flexible pricing and custom configurations available
					</p>
				</div>

				<div
					ref={cardsRef}
					className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto"
				>
					{plans.map((plan, index) => {
						const Icon = plan.icon;
						const cardClasses = `flex flex-col border-2 overflow-visible relative ring-0 ${
							plan.highlight
								? "border-teal-500 bg-gradient-to-br from-teal-50 via-white to-gray-900/5 shadow-lg shadow-teal-500/10"
								: "border-gray-200 hover:border-secondary/30 transition-colors"
						}`;

						return (
							<Card
								key={plan.id}
								className={cardClasses}
								style={{
									opacity: cardsVisible ? 1 : 0,
									transform: cardsVisible
										? "translateY(0) scale(1)"
										: "translateY(50px) scale(0.95)",
									transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 150}ms`,
								}}
							>
								{plan.badge && (
									<div className="absolute -top-3 left-1/2 -translate-x-1/2">
										<span className="bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
											{plan.badge}
										</span>
									</div>
								)}
								<CardHeader className="p-6">
									<div className="flex items-center gap-2 mb-2">
										<div
											className={`flex items-center justify-center w-8 h-8 rounded-lg ${
												plan.highlight ? "bg-teal-500/15" : "bg-secondary/10"
											}`}
										>
											<Icon
												className={`w-4 h-4 ${
													plan.highlight ? "text-teal-600" : "text-secondary"
												}`}
											/>
										</div>
										<CardTitle className="text-xl text-secondary">
											{plan.name}
										</CardTitle>
									</div>
									<CardDescription className="font-medium">
										{plan.description}
									</CardDescription>
									<div className="mt-4">
										<span className="text-4xl font-bold text-secondary ">
											{plan.platformFee}
										</span>
										<span className="text-muted-foreground font-medium">
											/month
										</span>
										<p className="text-muted-foreground text-sm mt-1 font-medium">
											Platform fee
										</p>
									</div>
									<p className="text-teal-700 text-xs font-semibold mt-3">
										Verification pricing: {plan.verificationPrice} per bundle
										check
									</p>
								</CardHeader>
								<CardContent className="flex-1 p-6 pt-0">
									<ul className="space-y-3">
										{plan.features.map((feature) => (
											<li
												key={feature}
												className="flex items-center gap-3 text-sm text-gray-700 font-medium"
											>
												<CheckIcon className="size-4 text-teal-500 shrink-0" />
												{feature}
											</li>
										))}
									</ul>
								</CardContent>
								<CardFooter className="border-0 bg-transparent p-6 pt-0">
									<Button
										variant={plan.highlight ? "default" : "outline"}
										className={`w-full h-12 rounded-full text-base cursor-pointer ${
											plan.highlight
												? "bg-teal-500 text-white hover:bg-teal-600 shadow-md shadow-teal-500/20"
												: "border-secondary text-secondary hover:bg-secondary hover:text-white"
										}`}
										onClick={() => {
											track("pricing_plan_clicked", { plan: plan.name });
											openDemo();
										}}
									>
										Get Started
									</Button>
								</CardFooter>
							</Card>
						);
					})}
				</div>

				<div
					className={`mt-8 sm:mt-10 lg:mt-12 text-center transition-all duration-700 delay-500 ${
						cardsVisible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-6"
					}`}
				>
					<p className="text-sm sm:text-base text-gray-500 font-medium text-center pt-10 sm:pt-12">
						Still have questions?{" "}
						<Link
							to="/contact"
							className="text-teal-600 font-semibold hover:text-teal-700 transition-colors relative group"
						>
							<span>Contact our sales team</span>
							<HoverUnderline className="-bottom-0.75 bg-teal-600" />
						</Link>
					</p>
				</div>
			</div>
		</section>
	);
}
