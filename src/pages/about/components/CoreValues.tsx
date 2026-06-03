import {
	ShieldCheck,
	Globe,
	Lightbulb,
	Users,
	Lock,
	Scale,
	type LucideIcon,
} from "lucide-react";
import { useStaggerAnimation } from "../../../hooks/useScrollAnimation";

const values: {
	icon: LucideIcon;
	title: string;
	description: string;
	bg: string;
	iconColor: string;
}[] = [
	{
		icon: ShieldCheck,
		title: "Trust First",
		description:
			"Every decision we make is rooted in building and maintaining trust — with our clients, their customers, and the regulators who oversee them.",
		bg: "bg-teal-50",
		iconColor: "text-teal-600",
	},
	{
		icon: Globe,
		title: "Africa-Native",
		description:
			"We don’t adapt foreign solutions for Africa. We build from the ground up, understanding local regulations, data sources, and market nuances.",
		bg: "bg-amber-50",
		iconColor: "text-amber-600",
	},
	{
		icon: Lightbulb,
		title: "Relentless Innovation",
		description:
			"From AI-powered document verification to real-time risk scoring, we continuously push the boundaries of what compliance technology can do.",
		bg: "bg-rose-50",
		iconColor: "text-rose-600",
	},
	{
		icon: Users,
		title: "Customer Obsession",
		description:
			"Our clients’ success is our success. We provide dedicated support, custom integrations, and proactive compliance guidance to every partner.",
		bg: "bg-cyan-50",
		iconColor: "text-cyan-600",
	},
	{
		icon: Lock,
		title: "Security by Design",
		description:
			"Data protection isn’t an afterthought. We embed security into every layer of our platform — from encryption at rest to SOC 2 compliance.",
		bg: "bg-emerald-50",
		iconColor: "text-emerald-600",
	},
	{
		icon: Scale,
		title: "Regulatory Excellence",
		description:
			"We stay ahead of evolving regulations across 54 countries, ensuring our clients are always compliant with the latest requirements.",
		bg: "bg-orange-50",
		iconColor: "text-orange-600",
	},
];

export default function CoreValues() {
	// useStaggerAnimation returns a ref that we must attach to a DOM element.
	// Defensive check: if the ref is not yet attached, we simply render nothing
	// to avoid accessing undefined properties.
	const { ref, isVisible, getDelay } = useStaggerAnimation(values.length, 120);

	if (!ref) {
		// This should never happen, but it protects the component from runtime crashes.
		return null;
	}

	return (
		<section
			id="values"
			ref={ref}
			className="py-24 bg-gray-50/60"
		>
			<div className="max-w-6xl mx-auto px-6 lg:px-12">
				<div className="text-center mb-16">
					<span
						className={`inline-block text-xs font-semibold tracking-widest uppercase text-teal-600 mb-3 transition-all duration-600 ${
							isVisible
								? "opacity-100 translate-y-0"
								: "opacity-0 -translate-y-4"
						}`}
					>
						Core Values
					</span>
					<h2
						className={`text-3xl lg:text-4xl font-bold text-secondary mb-4 transition-all duration-700 delay-100 ${
							isVisible
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-6"
						}`}
					>
						What Drives Us Forward
					</h2>
					<p
						className={`text-base text-gray-500 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
							isVisible
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-6"
						}`}
					>
						Our values shape every product decision, every client interaction,
						and every line of code we write.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{values.map((value, index) => (
						<div
							key={index}
							className={`group p-7 rounded-lg border border-gray-100 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-500 ${
								isVisible
									? "opacity-100 translate-y-0 scale-100"
									: "opacity-0 translate-y-8 scale-95"
							}`}
							style={{ transitionDelay: `${getDelay(index) + 200}ms` }}
						>
							<div
								className={`w-12 h-12 flex items-center justify-center ${value.bg} rounded-lg mb-5 group-hover:scale-110 transition-transform duration-300`}
							>
								<value.icon className={`text-xl ${value.iconColor}`} />
							</div>
							<h4 className="text-lg font-bold text-secondary mb-2">
								<a
									href="#values"
									className="hover:text-teal-600 transition-colors"
								>
									{value.title}
								</a>
							</h4>
							<p className="text-sm text-gray-500 leading-relaxed">
								{value.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
