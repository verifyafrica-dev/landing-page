import { ShieldCheckIcon } from "@phosphor-icons/react";
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
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
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
					className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8"
				>
					<div
						className={`lg:col-span-2 bg-gradient-to-br from-red-900 to-red-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 text-white transition-all duration-700 ease-out ${
							panelVisible
								? "opacity-100 translate-x-0"
								: "opacity-0 -translate-x-16"
						}`}
					>
						<h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
							The Problem
						</h2>
						{problemParagraphs.map((paragraph, index) => (
							<p
								key={paragraph.slice(0, 32)}
								className={`text-red-100 leading-relaxed text-sm sm:text-base${
									index > 0 ? " mt-4" : ""
								}`}
							>
								{paragraph}
							</p>
						))}
					</div>

					<div
						className={`lg:col-span-3 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border border-teal-100 transition-all duration-700 ease-out delay-200 flex flex-col justify-between ${
							panelVisible
								? "opacity-100 translate-x-0"
								: "opacity-0 translate-x-16"
						}`}
					>
						<div>
							<h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-900">
								The VerifyAfrica Solution
							</h2>
							{solutionParagraphs.map((paragraph, index) => (
								<p
									key={paragraph.slice(0, 32)}
									className={`text-gray-700 leading-relaxed text-sm sm:text-base${
										index > 0 ? " mt-4" : ""
									}`}
								>
									{paragraph}
								</p>
							))}
						</div>
						<div
							className={`mt-6 sm:mt-8 flex items-start gap-3 transition-all duration-500 delay-500 ${
								panelVisible
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-4"
							}`}
						>
							<ShieldCheckIcon
								className="w-6 h-6 sm:w-8 sm:h-8 text-teal-500 shrink-0"
								weight="fill"
								aria-hidden
							/>
							<p className="text-gray-600 text-xs sm:text-sm leading-relaxed flex-1">
								{solutionHighlight}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
