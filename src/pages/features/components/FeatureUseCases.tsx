import type { FeatureDetail } from "@/mocks/featureDetails";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface FeatureUseCasesProps {
	feature: FeatureDetail;
}

export default function FeatureUseCases({ feature }: FeatureUseCasesProps) {
	const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
	const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({
		threshold: 0.1,
	});

	const industryIcons: Record<string, string> = {
		Fintech: "ri-bank-line",
		Neobanks: "ri-bank-line",
		"Fintech & Neobanks": "ri-bank-line",
		"Fintech & Banking": "ri-bank-line",
		"Banks & Lenders": "ri-building-2-line",
		iGaming: "ri-gamepad-line",
		"iGaming & Betting": "ri-gamepad-line",
		"FX & Remittance": "ri-exchange-dollar-line",
		Marketplaces: "ri-store-2-line",
		"B2B Marketplaces": "ri-store-2-line",
		"Payment Processors": "ri-secure-payment-line",
		Insurance: "ri-shield-line",
		Lending: "ri-money-dollar-circle-line",
		"E-commerce": "ri-shopping-cart-line",
		Telecoms: "ri-phone-line",
		Healthcare: "ri-heart-pulse-line",
		"Asset Management": "ri-funds-line",
	};

	const getIcon = (industry: string) => {
		for (const key of Object.keys(industryIcons)) {
			if (industry.includes(key)) return industryIcons[key];
		}
		return "ri-building-line";
	};

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
						Use Cases
					</span>
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4">
						Built for every industry in Africa
					</h2>
					<p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
						Trusted by fintechs, banks, iGaming operators, and more across the
						continent.
					</p>
				</div>

				<div
					ref={cardsRef}
					className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6"
				>
					{feature.useCases.map((uc, i) => (
						<div
							key={i}
							className="flex gap-5 p-6 bg-gray-50 rounded-xl border hover:shadow-md transition-all duration-300"
							style={{
								opacity: cardsVisible ? 1 : 0,
								transform: cardsVisible ? "translateY(0)" : "translateY(20px)",
								transition: `all 0.5s ease-out ${i * 100}ms`,
							}}
						>
							<div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-lg shrink-0">
								<i
									className={`${getIcon(uc.industry)} text-xl text-teal-600`}
								/>
							</div>
							<div>
								<h3 className="text-base font-bold text-secondary mb-1.5">
									{uc.industry}
								</h3>
								<p className="text-sm text-gray-600 leading-relaxed">
									{uc.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
