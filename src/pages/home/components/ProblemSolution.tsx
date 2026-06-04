import { AlertTriangle, ShieldCheck } from "lucide-react";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

const problemParagraphs = [
	"Africa has 54 countries. Each one runs its own national ID system, its own data protection laws, and its own regulatory rules. A compliance tool that works in Europe won't automatically work in Nigeria, Kenya, or Ghana.",
	"Nigeria uses the NIMC NIN database. South Africa relies on the Department of Home Affairs. Kenya has the IPRS. Ghana has the NIA. Each system has different data formats and different integration requirements.",
	"Managing all of these separately is slow and risky. VerifyAfrica connects them all through one API. Your team focuses on risk decisions, not on maintaining integrations.",
];

const solutionParagraphs = [
	"VerifyAfrica brings together everything your compliance team needs. Document verification, biometric liveness checks, business registry lookups, AML screening, PEP checks, and ongoing monitoring, all in one place.",
	"Every check creates a timestamped audit trail. It meets the requirements of regulators across Africa, including Nigeria's CBN, South Africa's FIC, Kenya's CBK, and Ghana's BoG.",
	"Most teams integrate via API in one to two weeks. Or go live in hours using our hosted Link Mode, no frontend work needed.",
];

const solutionHighlight =
	"A single platform built for Africa's unique compliance challenges, combining AI-driven verification with local registry integrations and audit-ready controls.";

export default function ProblemSolution() {
	const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({
		threshold: 0.2,
	});
	const { ref: panelRef, isVisible: panelVisible } = useScrollAnimation({
		threshold: 0.15,
	});

	return (
		<section
			ref={headerRef}
			className="py-12 sm:py-16 lg:py-24 bg-black text-white overflow-hidden"
		>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
				<div
					className={`text-center mb-10 sm:mb-14 lg:mb-16 transition-all duration-700 ease-out ${
						headerVisible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-8"
					}`}
				>
					<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight tracking-tight mb-4 sm:mb-5">
						Built for Africa&apos;s Compliance Reality
					</h2>
					<p className="text-sm sm:text-base lg:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
						From fragmented national systems to a single audit-ready platform.
					</p>
				</div>

				<div
					ref={panelRef}
					className={`rounded-2xl sm:rounded-3xl bg-zinc-900 border border-white/10 overflow-hidden transition-all duration-700 ease-out delay-150 ${
						panelVisible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-10"
					}`}
				>
					<div className="grid grid-cols-1 md:grid-cols-2">
						<div
							className="flex flex-col p-6 sm:p-8 lg:p-10 min-h-[320px] border-b md:border-b-0 md:border-r border-white/10"
							style={{
								opacity: panelVisible ? 1 : 0,
								transform: panelVisible ? "translateY(0)" : "translateY(20px)",
								transition: "all 0.5s ease-out 250ms",
							}}
						>
							<h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">
								The Problem
							</h3>
							<div className="space-y-4 text-sm sm:text-[0.9375rem] text-zinc-400 leading-relaxed flex-1">
								{problemParagraphs.map((paragraph) => (
									<p key={paragraph.slice(0, 32)}>{paragraph}</p>
								))}
							</div>
							<div className="mt-8 sm:mt-10 pt-4">
								<AlertTriangle
									className="w-10 h-10 sm:w-12 sm:h-12 text-red-400/90 stroke-[1.25]"
									aria-hidden
								/>
							</div>
						</div>

						<div
							className="flex flex-col p-6 sm:p-8 lg:p-10 min-h-[320px]"
							style={{
								opacity: panelVisible ? 1 : 0,
								transform: panelVisible ? "translateY(0)" : "translateY(20px)",
								transition: "all 0.5s ease-out 370ms",
							}}
						>
							<h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">
								The VerifyAfrica Solution
							</h3>
							<div className="space-y-4 text-sm sm:text-[0.9375rem] text-zinc-400 leading-relaxed flex-1">
								{solutionParagraphs.map((paragraph) => (
									<p key={paragraph.slice(0, 32)}>{paragraph}</p>
								))}
							</div>
							<div className="mt-8 sm:mt-10 pt-4 border-t border-white/10">
								<div className="flex items-start gap-3">
									<ShieldCheck
										className="w-10 h-10 sm:w-12 sm:h-12 text-teal-400 stroke-[1.25] shrink-0"
										aria-hidden
									/>
									<p className="text-xs sm:text-sm text-zinc-500 leading-relaxed pt-1">
										{solutionHighlight}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
