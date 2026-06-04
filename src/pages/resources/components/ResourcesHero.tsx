import { LockOpen } from "lucide-react";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

export default function ResourcesHero() {
	const { ref, isVisible } = useScrollAnimation();

	return (
		<section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
			<div
				ref={ref}
				className={`relative max-w-4xl mx-auto px-6 text-center transition-all duration-700 ${
					isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
				}`}
			>
				<div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-700 text-sm font-medium rounded-full mb-6">
					<LockOpen className="size-4" />
					<span>Free Resources for Compliance Teams</span>
				</div>
				<h1 className="text-3xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
					Compliance Resources &amp; Guides
				</h1>
				<p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-4">
					Actionable frameworks, checklists, and playbooks built for African
					compliance teams. Get 60-70% of the value upfront — unlock the full
					actionable content with your company email.
				</p>
				<div className="flex items-center justify-center gap-6 text-sm text-gray-500 mt-8">
					<span className="flex items-center gap-2">
						<i className="ri-check-line text-teal-500" />
						No spam, ever
					</span>
					<span className="flex items-center gap-2">
						<i className="ri-check-line text-teal-500" />
						Company emails only
					</span>
					<span className="flex items-center gap-2">
						<i className="ri-check-line text-teal-500" />
						Instant access
					</span>
				</div>
			</div>
		</section>
	);
}
