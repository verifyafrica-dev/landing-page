import { Fragment } from "react";
import type { FeatureDetail } from "@/mocks/featureDetails";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@phosphor-icons/react";

interface FeatureHeroProps {
	feature: FeatureDetail;
}

function HeroCTAs({ className }: { className?: string }) {
	return (
		<div className={cn("flex flex-col sm:flex-row gap-4", className)}>
			<Button
				size="lg"
				asChild
				className="h-auto px-7 py-3.5 bg-teal-500 text-white font-semibold hover:bg-teal-400 cursor-pointer"
			>
				<Link to="/contact">
					Request Demo
					<ArrowRightIcon />
				</Link>
			</Button>
			<Button
				variant="outline"
				size="lg"
				asChild
				className="h-auto px-7 py-3.5 border-white/30 bg-transparent text-white font-semibold hover:border-white/60 hover:bg-white/10 hover:text-white cursor-pointer"
			>
				<a
					href="https://dashboard.verifyafrica.io/login"
					target="_blank"
					rel="noopener noreferrer"
				>
					Explore Dashboard
				</a>
			</Button>
		</div>
	);
}

export default function FeatureHero({ feature }: FeatureHeroProps) {
	const FeatureIcon = feature.icon;

	return (
		<section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
			<Fragment>
				<div className="absolute inset-0">
					<img
						src={feature.heroImage}
						alt={feature.title}
						className="w-full h-full object-cover object-center scale-105 animate-[slow-zoom_20s_ease-in-out_infinite_alternate]"
					/>
					<div className="absolute inset-0 bg-black/55" />
					<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
				</div>
				<div
					className="absolute inset-0 opacity-[0.07]"
					style={{
						backgroundImage:
							"linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
						backgroundSize: "64px 64px",
					}}
				/>
			</Fragment>

			<div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-32 max-w-5xl mx-auto">
				<Fragment>
					<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-teal-300 text-sm font-medium mb-8">
						<FeatureIcon className="size-4" aria-hidden />
						<span>
							{feature.tagline.split("—")[0]?.trim() || feature.tagline}
						</span>
					</div>
					<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-none mb-8">
						{feature.title}
					</h1>
					<p className="text-lg sm:text-xl text-white max-w-2xl leading-relaxed mb-12">
						{feature.description}
					</p>
					<HeroCTAs className="justify-center" />
				</Fragment>
			</div>

			<ScrollIndicator className="text-white/40" />

			<style>{`
				@keyframes slow-zoom {
					from { transform: scale(1.05); }
					to { transform: scale(1.12); }
				}
			`}</style>
		</section>
	);
}
