import { Globe } from "lucide-react";

export default function CaseStudiesHero() {
	return (
		<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 bg-gradient-to-br from-secondary via-gray-800 to-secondary"></div>
			<div className="absolute inset-0 opacity-30">
				<div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl"></div>
				<div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
			</div>

			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
				<div className="text-center">
					{/* Badge */}
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full mb-6">
						<Globe className="w-4 h-4 text-teal-400" />
						<span className="text-teal-400 text-sm font-medium">
							Use Cases &amp; Coverage
						</span>
					</div>

					{/* Headline */}
					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
						Who Needs
						<br />
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
							VerifyAfrica?
						</span>
					</h1>

					<p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
						From banks to fintechs, e-commerce to FX Brokers, discover how
						different industries use our identity verification platform across
						54 African countries.
					</p>

					{/* Stats */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
						{[
							{ value: "10", label: "Industry Categories" },
							{ value: "54", label: "Countries Covered" },
							{ value: "50+", label: "ID Types Supported" },
							{ value: "5", label: "African Regions" },
						].map((stat, index) => (
							<div
								key={index}
								className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
							>
								<div className="text-3xl sm:text-4xl font-bold text-teal-400 mb-1">
									{stat.value}
								</div>
								<div className="text-sm text-gray-400">{stat.label}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
