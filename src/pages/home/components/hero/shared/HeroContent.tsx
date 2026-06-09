import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { track } from "@/lib/analytics";
import { ArrowRightIcon, CodeIcon } from "@phosphor-icons/react";

interface HeroContentProps {
	onRequestDemo: () => void;
	isLoaded?: boolean;
	layout?: "centered" | "left";
	className?: string;
}

export default function HeroContent({
	onRequestDemo,
	isLoaded: isLoadedProp,
	layout = "centered",
	className = "",
}: HeroContentProps) {
	const [isLoaded, setIsLoaded] = useState(isLoadedProp ?? false);

	useEffect(() => {
		if (isLoadedProp === undefined) {
			setIsLoaded(true);
		} else {
			setIsLoaded(isLoadedProp);
		}
	}, [isLoadedProp]);

	const alignClass =
		layout === "left"
			? "text-left items-start"
			: "text-center items-center mx-auto";

	return (
		<div
			className={`relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 pb-12 pt-24 text-white sm:px-6 sm:pb-12 sm:pt-24 md:pt-20 lg:px-12 ${alignClass} ${className}`}
		>
			<div
				className={`inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-5 py-1 sm:py-2 mb-4 sm:mb-6 md:mb-8 transition-all duration-700 hover:bg-white/20 cursor-default ${
					isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
				}`}
			>
				<span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-teal-400 rounded-full animate-ping-slow" />
				<span className="text-[11px] sm:text-sm md:text-base font-medium tracking-wide">
					Pan-African Compliance Infrastructure
				</span>
			</div>

			<h1
				className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 leading-[1.2] sm:leading-[1.15] transition-all duration-700 delay-150 ${
					isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
				} ${layout === "left" ? "max-w-xl" : ""}`}
			>
				<span className="inline-block animate-text-shimmer bg-clip-text drop-shadow-lg">
					Identity &amp; Compliance
				</span>
				<br />
				<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-teal-300 bg-[length:200%_auto] animate-gradient-x drop-shadow-lg">
					Built for Africa
				</span>
			</h1>

			<p
				className={`text-sm sm:text-base md:text-xl lg:text-2xl text-white/90 max-w-4xl mb-6 sm:mb-10 md:mb-12 leading-relaxed px-1 sm:px-2 drop-shadow-md transition-all duration-700 delay-300 ${
					isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
				} ${layout === "left" ? "max-w-lg px-0" : "mx-auto"}`}
			>
				Verify identities, screen for risk, and stay compliant across all 54
				African countries through one unified platform.
			</p>

			<div
				className={`flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-4 mb-8 sm:mb-14 md:mb-16 px-2 sm:px-0 transition-all duration-700 ${
					layout === "left" ? "justify-start px-0" : "justify-center"
				} ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
				style={{ transitionDelay: "450ms" }}
			>
				<button
					onClick={() => {
						track("demo_cta_clicked", {
							source: "hero",
							location: "hero_primary_button",
						});
						onRequestDemo();
					}}
					className="group relative px-6 sm:px-8 py-3.5 sm:py-4 bg-teal-500 text-white text-sm sm:text-base font-semibold rounded-lg overflow-hidden transition-all hover:shadow-teal-500/50 hover:shadow-2xl whitespace-nowrap flex items-center justify-center space-x-2 cursor-pointer"
					style={{ textShadow: "0 1px 3px rgba(0, 0, 0, 0.3)" }}
				>
					<span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
					<span className="relative z-10 flex items-center space-x-2">
						<span>Request a Demo</span>
						<ArrowRightIcon className="text-lg transition-transform group-hover:translate-x-2" />
					</span>
				</button>
				<Link
					to="/docs"
					className="group px-6 sm:px-8 py-3.5 sm:py-4 bg-white/10 backdrop-blur-sm text-white text-sm sm:text-base font-semibold rounded-lg border border-white/30 hover:bg-white/20 hover:border-white/50 transition-all whitespace-nowrap flex items-center justify-center space-x-2"
					style={{ textShadow: "0 1px 3px rgba(0, 0, 0, 0.4)" }}
				>
					<span>View API Docs</span>
					<CodeIcon className="text-lg transition-transform group-hover:rotate-12 group-hover:scale-110" />
				</Link>
			</div>

			<div
				className={`grid grid-cols-3 gap-3 sm:gap-8 max-w-2xl transition-all duration-700 ${
					layout === "left" ? "" : "mx-auto"
				} ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
				style={{ transitionDelay: "600ms" }}
			>
				<StatCounter
					value={54}
					suffix=""
					label="African Countries"
					delay={700}
					isLoaded={isLoaded}
				/>
				<StatCounter
					value={99.9}
					suffix="%"
					label="Uptime SLA"
					delay={800}
					isLoaded={isLoaded}
					decimals={1}
				/>
				<StatCounter
					value={2}
					prefix="<"
					suffix="s"
					label="Verification Speed"
					delay={900}
					isLoaded={isLoaded}
				/>
			</div>
		</div>
	);
}

function StatCounter({
	value,
	suffix = "",
	prefix = "",
	label,
	delay,
	isLoaded,
	decimals = 0,
}: {
	value: number;
	suffix?: string;
	prefix?: string;
	label: string;
	delay: number;
	isLoaded: boolean;
	decimals?: number;
}) {
	const [count, setCount] = useState(0);
	const hasAnimatedRef = useRef(false);
	const visibilityRef = useRef(true);

	useEffect(() => {
		const handleVisibilityChange = () => {
			visibilityRef.current = !document.hidden;
		};
		document.addEventListener("visibilitychange", handleVisibilityChange);

		if (!isLoaded || hasAnimatedRef.current) {
			return () =>
				document.removeEventListener(
					"visibilitychange",
					handleVisibilityChange,
				);
		}

		const timer = setTimeout(() => {
			hasAnimatedRef.current = true;
			const duration = 1800;
			const startTime = Date.now();
			let rafId: number | null = null;

			const animate = () => {
				if (!visibilityRef.current) {
					rafId = requestAnimationFrame(animate);
					return;
				}

				const now = Date.now();
				const progress = Math.min((now - startTime) / duration, 1);
				const easeOutQuart = 1 - Math.pow(1 - progress, 4);
				const currentValue =
					decimals > 0
						? parseFloat((value * easeOutQuart).toFixed(decimals))
						: Math.floor(value * easeOutQuart);

				setCount(currentValue);

				if (progress < 1) {
					rafId = requestAnimationFrame(animate);
				}
			};

			rafId = requestAnimationFrame(animate);

			return () => {
				if (rafId) cancelAnimationFrame(rafId);
			};
		}, delay);

		return () => {
			clearTimeout(timer);
			document.removeEventListener("visibilitychange", handleVisibilityChange);
		};
	}, [isLoaded, value, delay, decimals]);

	return (
		<div
			className="text-center group cursor-default"
			style={{
				opacity: isLoaded ? 1 : 0,
				transform: isLoaded ? "translateY(0)" : "translateY(20px)",
				transition: `all 0.5s ease-out ${delay}ms`,
			}}
		>
			<div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-teal-300 mb-0.5 sm:mb-1 transition-transform group-hover:scale-110">
				{prefix}
				{decimals > 0 ? count.toFixed(decimals) : count}
				{suffix}
			</div>
			<div className="text-[9px] sm:text-xs md:text-sm text-white/70 group-hover:text-white/90 transition-colors leading-tight">
				{label}
			</div>
		</div>
	);
}
