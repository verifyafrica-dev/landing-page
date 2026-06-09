import AfricaMapSvg from "./hero/shared/AfricaMapSvg";
import CountryNodes from "./hero/shared/CountryNodes";
import HeroContent from "./hero/shared/HeroContent";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";

interface HeroProps {
	onRequestDemo: () => void;
	id?: string;
	animate?: boolean;
}

export default function Hero({
	onRequestDemo,
	id = "hero",
	animate = true,
}: HeroProps) {
	return (
		<section
			id={id}
			className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-slate-950"
		>
			<div className="absolute inset-0 bg-slate-950" />
			<div className="absolute inset-0 flex items-center justify-center">
				<div className="absolute w-[80vmin] h-[80vmin] max-w-[700px] rounded-full bg-teal-500/8 blur-3xl" />
			</div>

			<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
				<div
					className={`relative sm:w-[70vmin] max-w-[800px] aspect-1000/1001 opacity-90${animate ? " animate-scale-pulse origin-center" : ""}`}
				>
					<AfricaMapSvg
						fill="transparent"
						stroke="rgba(45,212,191,0.7)"
						strokeWidth={1.2}
						animateDrawLoop={animate}
						animatePulse={false}
					/>
					{animate && (
						<CountryNodes
							variant="sequential-pulse"
							size="sm"
						/>
					)}
				</div>
			</div>

			<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 pointer-events-none" />

			<HeroContent onRequestDemo={onRequestDemo} />

			<ScrollIndicator className="text-white/40" />
		</section>
	);
}
