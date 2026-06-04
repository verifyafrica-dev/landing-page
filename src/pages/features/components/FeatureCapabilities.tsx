import type { FeatureDetail } from "@/mocks/featureDetails";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface FeatureCapabilitiesProps {
	feature: FeatureDetail;
}

export default function FeatureCapabilities({
	feature,
}: FeatureCapabilitiesProps) {
	const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
	const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({
		threshold: 0.1,
	});

	return (
		<section className="py-16 md:py-24 bg-gray-50">
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
						Capabilities
					</span>
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4">
						Everything included, out of the box
					</h2>
					<p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
						No stitching together multiple vendors. Every capability you need in
						a single API.
					</p>
				</div>

				<div
					ref={gridRef}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
				>
					{feature.capabilities.map((cap, i) => (
						<FeatureCapabilityCard
							key={cap.title}
							icon={cap.icon}
							title={cap.title}
							description={cap.description}
							index={i}
							isVisible={gridVisible}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

interface FeatureCapabilityCardProps {
	icon: string;
	title: string;
	description: string;
	index: number;
	isVisible: boolean;
}

function FeatureCapabilityCard({
	icon,
	title,
	description,
	index,
	isVisible,
}: FeatureCapabilityCardProps) {
	return (
		<div
			className="bg-white rounded-xl p-6 border hover:shadow-md transition-all duration-300 group"
			style={{
				opacity: isVisible ? 1 : 0,
				transform: isVisible ? "translateY(0)" : "translateY(20px)",
				transition: `all 0.5s ease-out ${index * 80}ms`,
			}}
		>
			<div className="w-11 h-11 flex items-center justify-center bg-teal-50 rounded-lg mb-4 group-hover:bg-teal-100 transition-colors duration-300">
				<i className={`${icon} text-xl text-teal-600`} />
			</div>
			<h3 className="text-base font-bold text-secondary mb-2 group-hover:text-teal-700 transition-colors duration-300">
				{title}
			</h3>
			<p className="text-sm text-gray-600 leading-relaxed">{description}</p>
		</div>
	);
}
