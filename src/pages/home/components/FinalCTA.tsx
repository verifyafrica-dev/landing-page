import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { track } from "@/lib/analytics";
import { Button } from "@/components/ui/button";

interface FinalCTAProps {
	onRequestDemo: () => void;
}

function DashboardPreview() {
	const navItems = [
		"Inbox",
		"Verifications",
		"Compliance",
		"Risk monitoring",
		"Audit trail",
		"Analytics",
	];

	return (
		<div
			className="relative mx-auto w-full max-w-lg lg:max-w-none h-[280px] sm:h-[320px] lg:h-[380px] select-none pointer-events-none"
			aria-hidden
		>
			<div className="absolute inset-0 bg-gradient-to-l from-white via-transparent to-transparent z-10" />

			<div className="absolute inset-0 flex items-center justify-center lg:justify-end lg:pr-4">
				<div
					className="relative w-[92%] sm:w-[85%] lg:w-[520px] h-full"
					style={{ perspective: "1200px" }}
				>
					{/* Back panel — sidebar */}
					<div
						className="absolute top-6 left-0 w-[58%] h-[88%] bg-white rounded-xl border border-gray-200 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] overflow-hidden"
						style={{
							transform: "rotateY(-8deg) rotateX(4deg) translateZ(-20px)",
						}}
					>
						<div className="px-4 py-3 border-b border-gray-100 flex items-center gap-2">
							<div className="w-2 h-2 rounded-full bg-teal-500" />
							<span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
								VerifyAfrica
							</span>
						</div>
						<div className="p-3 space-y-1">
							{navItems.map((item, i) => (
								<div
									key={item}
									className={`px-2.5 py-1.5 rounded-md text-[11px] ${
										i === 1
											? "bg-teal-50 text-teal-700 font-medium"
											: "text-gray-500"
									}`}
								>
									{item}
								</div>
							))}
						</div>
					</div>

					{/* Front panel — review card */}
					<div
						className="absolute top-0 right-0 w-[72%] h-[92%] bg-white rounded-xl border border-gray-200 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)] overflow-hidden"
						style={{
							transform: "rotateY(-12deg) rotateX(6deg) translateZ(30px)",
						}}
					>
						<div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
							<span className="text-xs font-semibold text-gray-800">
								Verification Review
							</span>
							<span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 font-medium">
								Pending
							</span>
						</div>
						<div className="p-4 space-y-4">
							<div>
								<p className="text-[10px] text-gray-400 uppercase tracking-wide mb-1">
									Risk score
								</p>
								<p className="text-3xl font-bold text-red-500 leading-none">
									28
								</p>
							</div>
							<div className="space-y-2">
								<div className="h-2 rounded-full bg-gray-100 overflow-hidden">
									<div className="h-full w-[72%] bg-teal-500 rounded-full" />
								</div>
								<div className="flex gap-2 flex-wrap">
									<span className="text-[10px] px-2 py-0.5 rounded bg-red-50 text-red-600">
										PEP match
									</span>
									<span className="text-[10px] px-2 py-0.5 rounded bg-orange-50 text-orange-600">
										Document flag
									</span>
								</div>
							</div>
							<div className="rounded-lg bg-gray-50 p-3 space-y-2">
								<div className="h-2 w-full bg-gray-200 rounded" />
								<div className="h-2 w-4/5 bg-gray-200 rounded" />
								<div className="h-2 w-3/5 bg-gray-200 rounded" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function FinalCTA({ onRequestDemo }: FinalCTAProps) {
	const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

	return (
		<section
			ref={ref}
			className="py-16 sm:py-20 lg:py-28 bg-white overflow-hidden"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
					<div
						className={`transition-all duration-700 ${
							isVisible
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-8"
						}`}
					>
						<h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-secondary leading-tight tracking-tight mb-4 sm:mb-5">
							Turn compliance into a system of action
						</h2>
						<p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 sm:mb-10 max-w-xl">
							Engineered for regulated teams to deliver consistent verification,
							meet compliance standards, and maintain full traceability across
							African markets.
						</p>
						<div
							className={`flex flex-col sm:flex-row gap-3 sm:gap-4 transition-all duration-700 delay-150 ${
								isVisible
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-8"
							}`}
						>
							<Button
								size="lg"
								className="h-11 px-6 rounded-lg bg-teal-500 text-white hover:bg-teal-600 cursor-pointer"
								onClick={() => {
									track("demo_cta_clicked", {
										source: "final_cta",
										location: "bottom_section",
									});
									onRequestDemo();
								}}
							>
								Schedule a Demo
							</Button>
							<Button
								variant="outline"
								size="lg"
								asChild
								className="h-11 px-6 rounded-lg cursor-pointer"
							>
								<Link to="/docs">Start Integration</Link>
							</Button>
						</div>
					</div>

					<div
						className={`transition-all duration-700 delay-200 ${
							isVisible
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-10"
						}`}
					>
						<DashboardPreview />
					</div>
				</div>
			</div>
		</section>
	);
}
