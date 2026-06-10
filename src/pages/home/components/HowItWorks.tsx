import {
	ArrowRightIcon,
	CodeIcon,
	SquaresFourIcon,
	type Icon,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

const options = [
	{
		variant: "light" as const,
		icon: SquaresFourIcon,
		title: "VerifyAfrica Dashboard",
		description:
			"Manage onboarding, monitor risk, and review cases through our compliance interface. Perfect for teams who need a visual workflow and case management system.",
		href: "https://dashboard.verifyafrica.io/login",
		linkLabel: "Explore Dashboard",
	},
	{
		variant: "dark" as const,
		icon: CodeIcon,
		title: "Integrate via API",
		description:
			"Embed identity and compliance checks directly into your onboarding flow or CRM. Flexible, modular, and built for scale.",
		href: "/docs",
		linkLabel: "View API Docs",
		isLink: true,
	},
];

export default function HowItWorks() {
	const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
	const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({
		threshold: 0.2,
	});

	return (
		<section className="py-12 sm:py-16 lg:py-24 bg-white overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
				<div
					ref={headerRef}
					className={`text-center mb-10 sm:mb-12 lg:mb-16 transition-all duration-700 ${
						headerVisible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-10"
					}`}
				>
					<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-2 sm:mb-4">
						How It Works
					</h2>
					<p className="text-sm sm:text-base lg:text-xl text-gray-600 px-2">
						Choose the integration method that fits your workflow
					</p>
				</div>

				<div
					ref={cardsRef}
					className="flex flex-col md:flex-row gap-4 sm:gap-6 lg:gap-8"
				>
					{options.map((option, index) => (
						<HowItWorksCard
							key={option.title}
							{...option}
							isVisible={cardsVisible}
							index={index}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

const SLIDE_CODE_STYLE = `
  @keyframes slideCode {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

if (
	typeof document !== "undefined" &&
	!document.getElementById("slide-code-kf")
) {
	const style = document.createElement("style");
	style.id = "slide-code-kf";
	style.textContent = SLIDE_CODE_STYLE;
	document.head.appendChild(style);
}

export type HowItWorksCardVariant = "light" | "dark";

export interface HowItWorksCardProps {
	variant: HowItWorksCardVariant;
	icon: Icon;
	title: string;
	description: string;
	href: string;
	linkLabel: string;
	isLink?: boolean;
	isVisible: boolean;
	index?: number;
}

const variantStyles = {
	light: {
		card: "bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100",
		hiddenRotate: "-rotate-1",
		iconHoverRotate: "group-hover:rotate-6",
		title: "text-secondary group-hover:text-teal-700",
		description: "text-gray-700",
		link: "text-teal-600 hover:text-teal-700",
		linkUnderline: "bg-teal-600",
	},
	dark: {
		card: "bg-gradient-to-br from-gray-900 to-gray-800 text-white",
		hiddenRotate: "rotate-1",
		iconHoverRotate: "group-hover:-rotate-6",
		title: "group-hover:text-teal-300",
		description: "text-gray-300",
		link: "text-teal-400 hover:text-teal-300",
		linkUnderline: "bg-teal-400",
	},
} as const;

function HowItWorksCard({
	variant,
	icon,
	title,
	description,
	href,
	linkLabel,
	isLink = false,
	isVisible,
	index = 0,
}: HowItWorksCardProps) {
	const styles = variantStyles[variant];
	const CardIcon = icon;
	const linkClassName = `inline-flex items-center gap-2 font-semibold transition-all group/link text-sm sm:text-base ${styles.link}`;
	const linkContent = (
		<>
			<span className="relative">
				{linkLabel}
				<span
					className={`absolute bottom-0 left-0 w-0 h-0.5 ${styles.linkUnderline} group-hover/link:w-full transition-all duration-300`}
				/>
			</span>
			<ArrowRightIcon className="transition-transform group-hover/link:translate-x-2" />
		</>
	);

	return (
		<div
			className={`group relative flex-1 flex flex-col rounded-xl sm:rounded-2xl p-5 sm:p-7 lg:p-10 overflow-hidden cursor-default ${styles.card} ${
				isVisible
					? "opacity-100 translate-y-0 rotate-0"
					: `opacity-0 translate-y-12 ${styles.hiddenRotate}`
			}`}
			style={{
				transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 150}ms`,
			}}
		>
			{variant === "light" ? (
				<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
					<div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-teal-200/30 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700" />
					<div className="absolute bottom-0 left-0 w-36 sm:w-48 h-36 sm:h-48 bg-cyan-200/30 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 group-hover:scale-150 transition-transform duration-700" />
				</div>
			) : (
				<>
					<div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 hidden sm:block">
						{[...Array(8)].map((_, i) => (
							<div
								key={i}
								className="absolute h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent"
								style={{
									top: `${15 + i * 12}%`,
									left: "10%",
									right: "10%",
									transform: `translateX(${i % 2 === 0 ? "-100%" : "100%"})`,
									animation: `slideCode ${3 + i * 0.5}s linear infinite`,
									animationDelay: `${i * 0.3}s`,
								}}
							/>
						))}
					</div>
					<div className="absolute top-1/2 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-teal-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-teal-500/20 group-hover:scale-125 transition-all duration-700" />
				</>
			)}

			<div className="relative flex flex-col flex-1">
				<div className="flex  flex-col">
					<div
						className={`w-11 h-11 sm:w-14 md:w-16 sm:h-14 md:h-16 flex items-center justify-center bg-teal-500 rounded-lg sm:rounded-xl mb-3 sm:mb-6 transition-all duration-500 group-hover:scale-110 ${styles.iconHoverRotate} group-hover:shadow-lg group-hover:shadow-teal-500/30`}
					>
						<CardIcon className="text-xl sm:text-2xl md:text-3xl text-white transition-transform duration-300 group-hover:scale-110" aria-hidden />
					</div>
					<h3
						className={`text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4 transition-colors duration-300 ${styles.title}`}
					>
						{title}
					</h3>
				</div>
				<div className="flex-1 flex flex-col justify-between">
					<p
						className={`text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-6 ${styles.description}`}
					>
						{description}
					</p>
					{isLink ? (
						<Link to={href} className={linkClassName}>
							{linkContent}
						</Link>
					) : (
						<a
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							className={linkClassName}
						>
							{linkContent}
						</a>
					)}
				</div>
			</div>
		</div>
	);
}
