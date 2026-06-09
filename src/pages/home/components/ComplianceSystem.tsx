import { CheckCircleIcon } from "@phosphor-icons/react";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

export default function ComplianceSystem() {
	const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

	const features = [
		"Immutable audit trails",
		"Evidence retention & export",
		"Decision transparency",
		"Role-based access controls",
		"Maker / checker workflows",
		"Risk configuration by jurisdiction",
		"Continuous monitoring",
	];

	return (
		<section
			ref={ref}
			className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-center">
					<div
						className={`transition-all duration-700 ease-out ${
							isVisible
								? "opacity-100 translate-x-0"
								: "opacity-0 -translate-x-12"
						}`}
					>
						<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-6">
							Built as a Compliance Operating System
						</h2>
						<p className="text-sm sm:text-base lg:text-xl text-gray-300 leading-relaxed mb-3 sm:mb-6 lg:mb-8 font-medium">
							VerifyAfrica is not just a KYC tool. It&apos;s compliance
							infrastructure.
						</p>
						<p className="text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed font-medium">
							Designed to keep your onboarding defensible to regulators,
							partners, and auditors.
						</p>
					</div>

					<div className="grid grid-cols-1 gap-2.5 sm:gap-4">
						{features.map((feature, index) => (
							<div
								key={index}
								className="flex items-center space-x-2.5 sm:space-x-4 bg-white/5 backdrop-blur-sm rounded-lg p-2.5 sm:p-4 border border-white/10 hover:bg-white/10 transition-all hover:translate-x-2 duration-300"
								style={{
									opacity: isVisible ? 1 : 0,
									transform: isVisible ? "translateX(0)" : "translateX(40px)",
									transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${200 + index * 80}ms`,
								}}
							>
								<div className="w-4 h-4 sm:w-6 sm:h-6 flex items-center justify-center flex-shrink-0">
									<CheckCircleIcon className="text-base sm:text-xl text-teal-400" />
								</div>
								<span className="text-xs sm:text-sm md:text-base font-medium">
									{feature}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
