import {
	ShieldCheck,
	Lock,
	FileShield,
	CreditCard,
	Landmark,
	type LucideIcon,
} from "lucide-react";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

const certifications: {
	name: string;
	description: string;
	icon: LucideIcon;
}[] = [
	{
		name: "ISO 27001",
		description: "Information Security",
		icon: ShieldCheck,
	},
	{
		name: "SOC 2 Type II",
		description: "Service Organization",
		icon: Lock,
	},
	{
		name: "GDPR",
		description: "Data Protection",
		icon: FileShield,
	},
	{
		name: "PCI DSS",
		description: "Payment Security",
		icon: CreditCard,
	},
	{
		name: "NDPR",
		description: "Nigeria Data Protection",
		icon: Landmark,
	},
];

export default function Certifications() {
	const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

	return (
		<section
			ref={ref}
			className="py-20 bg-gray-50/60"
		>
			<div className="max-w-6xl mx-auto px-6 lg:px-12">
				<div className="text-center mb-12">
					<h2
						className={`text-2xl lg:text-3xl font-bold text-secondary mb-3 transition-all duration-700 ${
							isVisible
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-6"
						}`}
					>
						Certified &amp; Compliant
					</h2>
					<p
						className={`text-sm text-gray-500 max-w-xl mx-auto transition-all duration-700 delay-100 ${
							isVisible
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-6"
						}`}
					>
						We hold the highest security and compliance certifications to
						protect your data and operations.
					</p>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
					{certifications.map((cert, index) => (
						<div
							key={index}
							className={`group flex flex-col items-center p-6 bg-white rounded-lg border border-gray-100 hover:shadow-md hover:border-teal-200 transition-all duration-500 cursor-default ${
								isVisible
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-8"
							}`}
							style={{ transitionDelay: `${150 + index * 100}ms` }}
						>
							<div className="w-14 h-14 flex items-center justify-center bg-teal-50 rounded-full mb-4 group-hover:bg-teal-100 group-hover:scale-110 transition-all duration-300">
								<cert.icon className="text-2xl text-teal-600" />
							</div>
							<span className="text-sm font-bold text-secondary mb-1">
								{cert.name}
							</span>
							<span className="text-xs text-gray-400">{cert.description}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
