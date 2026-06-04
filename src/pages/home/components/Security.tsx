import { Globe, Lock, ShieldCheck } from "lucide-react";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

const pillars = [
	{
		title: "SOC 2 Type II Certified",
		description:
			"We meet SOC 2 Type II with audited controls across security, availability, and confidentiality. All systems use strict change management, access control, and continuous monitoring validated annually.",
		icon: ShieldCheck,
	},
	{
		title: "Data Security",
		description:
			"We secure data with AES-256 encryption at rest, TLS 1.3 in transit, strict RBAC, and continuous monitoring. Routine third-party penetration tests and a formal vulnerability program validate and remediate risks.",
		icon: Lock,
	},
	{
		title: "GDPR",
		description:
			"We operate under full GDPR oversight with strict data-minimization, encryption, access governance, and auditability across all processing. All data handling follows EU privacy requirements.",
		icon: Globe,
	},
] as const;

export default function Security() {
	const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

	return (
		<section
			ref={ref}
			className="py-16 sm:py-20 lg:py-28 bg-black text-white overflow-hidden"
		>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
				<div
					className={`text-center mb-10 sm:mb-14 lg:mb-16 transition-all duration-700 ease-out ${
						isVisible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-8"
					}`}
				>
					<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight tracking-tight mb-4 sm:mb-5">
						Enterprise-grade security built in by design
					</h2>
					<p className="text-sm sm:text-base lg:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
						VerifyAfrica is committed to supporting the most rigorous
						international compliance standards across every system and workflow.
					</p>
				</div>

				<div
					className={`rounded-2xl sm:rounded-3xl bg-zinc-900 border border-white/10 overflow-hidden transition-all duration-700 ease-out delay-150 ${
						isVisible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-10"
					}`}
				>
					<div className="grid grid-cols-1 md:grid-cols-3">
						{pillars.map((pillar, index) => {
							const Icon = pillar.icon;

							return (
								<div
									key={pillar.title}
									className={`flex flex-col p-6 sm:p-8 lg:p-10 min-h-[280px] sm:min-h-[320px] ${
										index < pillars.length - 1
											? "border-b md:border-b-0 md:border-r border-white/10"
											: ""
									}`}
									style={{
										opacity: isVisible ? 1 : 0,
										transform: isVisible
											? "translateY(0)"
											: "translateY(20px)",
										transition: `all 0.5s ease-out ${250 + index * 120}ms`,
									}}
								>
									<h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">
										{pillar.title}
									</h3>
									<p className="text-sm sm:text-[0.9375rem] text-zinc-400 leading-relaxed flex-1">
										{pillar.description}
									</p>
									<div className="mt-8 sm:mt-10 pt-4">
										<Icon
											className="w-10 h-10 sm:w-12 sm:h-12 text-white/90 stroke-[1.25]"
											aria-hidden
										/>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
