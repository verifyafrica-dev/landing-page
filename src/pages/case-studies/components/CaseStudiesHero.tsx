import { Globe } from "lucide-react";

const stats = [
	{ value: "10", label: "Industry Categories" },
	{ value: "54", label: "Countries Covered" },
	{ value: "50+", label: "ID Types Supported" },
	{ value: "5", label: "African Regions" },
];

export default function CaseStudiesHero() {
	return (
		<section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
			<div
				className="absolute inset-0 opacity-[0.07]"
				style={{
					backgroundImage:
						"linear-gradient(rgba(15,23,42,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,.8) 1px, transparent 1px)",
					backgroundSize: "64px 64px",
				}}
			/>

			<div className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-32">
				<div className="text-center">
					{/* Badge */}
					<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/15 bg-secondary/5 backdrop-blur-sm text-secondary text-sm font-medium mb-8">
						<Globe className="w-4 h-4" />
						<span>Use Cases &amp; Coverage</span>
					</div>

					{/* Headline */}
					<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-secondary tracking-tighter leading-none mb-8">
						Who Needs
						<br />
						<span className="text-transparent bg-clip-text bg-linear-to-r from-teal-500 to-cyan-500">
							VerifyAfrica?
						</span>
					</h1>

					<p className="text-lg sm:text-xl text-secondary max-w-3xl mx-auto leading-relaxed mb-12">
						From banks to fintechs, e-commerce to FX Brokers, discover how
						different industries use our identity verification platform across
						54 African countries.
					</p>

					{/* Stats */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
						{stats.map((stat, index) => (
							<div
								key={index}
								className="bg-secondary/5 backdrop-blur-sm border border-secondary/10 rounded-2xl p-6 flex flex-col gap-1"
							>
								<p className="text-3xl sm:text-4xl font-bold text-teal-600">
									{stat.value}
								</p>
								<p className="text-sm text-secondary/60">{stat.label}</p>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="relative z-10 pb-10 flex flex-col items-center gap-2 text-secondary/40 text-xs uppercase tracking-widest">
				<span>Scroll</span>
				<i className="ri-arrow-down-line text-lg animate-bounce" />
			</div>
		</section>
	);
}
