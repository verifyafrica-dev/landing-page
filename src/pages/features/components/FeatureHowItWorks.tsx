import { Fragment } from "react";
import type { FeatureDetail } from "@/mocks/featureDetails";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface FeatureHowItWorksProps {
	feature: FeatureDetail;
}

export default function FeatureHowItWorks({ feature }: FeatureHowItWorksProps) {
	const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
	const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation({
		threshold: 0.12,
	});

	return (
		<section className="py-16 md:py-24 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
				<div
					ref={headerRef}
					className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
						headerVisible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-8"
					}`}
				>
					<span className="inline-block px-4 py-1.5 bg-teal-50 text-teal-600 text-sm font-semibold rounded-full mb-4">
						How It Works
					</span>
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4">
						From submission to decision in seconds
					</h2>
					<p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
						A transparent, auditable process designed for speed and compliance.
					</p>
				</div>

				<div
					ref={stepsRef}
					className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
				>
					{feature.howItWorks.map((step, i) => {
						const isDark = i % 2 === 1;
						return (
							<div
								key={step.step}
								className={cn(
									"group relative rounded-2xl p-6 sm:p-8 overflow-hidden border transition-all duration-500",
									isDark
										? "bg-gradient-to-br from-gray-900 to-gray-800 border-white/10 text-white"
										: "bg-gradient-to-br from-teal-50 to-cyan-50 border-teal-100",
								)}
								style={{
									opacity: stepsVisible ? 1 : 0,
									transform: stepsVisible
										? "translateY(0)"
										: "translateY(20px)",
									transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${i * 100}ms`,
								}}
							>
								<Fragment>
									<span
										className={cn(
											"absolute top-4 right-4 text-5xl sm:text-6xl font-bold tabular-nums leading-none select-none",
											isDark ? "text-white/10" : "text-teal-500/15",
										)}
									>
										{String(step.step).padStart(2, "0")}
									</span>
									<div className="relative pt-10">
										{/* <div
											className={cn(
												"w-10 h-10 rounded-lg flex items-center justify-center mb-4 font-bold text-sm",
												isDark
													? "bg-teal-500/20 text-teal-300 border border-teal-400/30"
													: "bg-teal-500 text-white",
											)}
										>
											{step.step}
										</div> */}
										<h3
											className={cn(
												"text-lg sm:text-xl font-bold mb-3",
												isDark ? "text-white" : "text-secondary",
											)}
										>
											{step.title}
										</h3>
										<p
											className={cn(
												"text-sm sm:text-base leading-relaxed",
												isDark ? "text-gray-300" : "text-gray-600",
											)}
										>
											{step.description}
										</p>
									</div>
								</Fragment>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
