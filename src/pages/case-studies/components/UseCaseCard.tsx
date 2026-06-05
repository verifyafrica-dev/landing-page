import { ArrowRight, type LucideIcon } from "lucide-react";
import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface UseCaseBenefit {
	metric: string;
	label: string;
}

interface UseCaseCardProps {
	category: string;
	icon: LucideIcon;
	color: string;
	description: string;
	useCases: string[];
	benefits: UseCaseBenefit[];
	image: string;
	onClick: () => void;
}

export default function UseCaseCard({
	category,
	icon: Icon,
	color,
	description,
	benefits,
	image,
	onClick,
}: UseCaseCardProps) {
	return (
		<Card
			role="button"
			tabIndex={0}
			onClick={onClick}
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " ") {
					e.preventDefault();
					onClick();
				}
			}}
			className="group relative h-[400px] cursor-pointer gap-0 overflow-hidden border-0 bg-secondary py-0 shadow-none ring-0 transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
		>
			<img
				src={image}
				alt={category}
				className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
			/>

			{/* Default — title only */}
			<div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-secondary/80 via-secondary/20 to-transparent p-6 transition-opacity duration-300 group-hover:opacity-0">
				<CardTitle className="text-xl font-bold text-white leading-snug">
					{category}
				</CardTitle>
			</div>

			{/* Hover reveal — centered badge + details */}
			<div className="absolute inset-0 flex translate-y-4 flex-col justify-end bg-secondary/90 p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
				{/* <div
					className={cn(
						"mb-4 flex size-14 items-center justify-center rounded-2xl bg-linear-to-br shadow-lg",
						color,
					)}
				>
					<Icon className="size-6 text-white" />
				</div> */}

				<CardTitle className="text-lg font-bold text-white">
					{category}
				</CardTitle>

				<p className="mt-2 line-clamp-3 text-sm leading-relaxed text-white/75">
					{description}
				</p>

				<div className="mt-4 flex gap-3">
					{benefits.slice(0, 2).map((benefit) => (
						<div
							key={benefit.label}
							className="flex-1 rounded-lg bg-white/10 px-3 py-2"
						>
							<div className="text-sm font-bold text-teal-300">
								{benefit.metric}
							</div>
							<div className="text-[10px] text-white/50">{benefit.label}</div>
						</div>
					))}
				</div>

				<Button
					className="mt-5 h-auto w-full bg-teal-500 py-2.5 text-white hover:bg-teal-400"
					tabIndex={-1}
				>
					Explore solution
					<ArrowRight className="size-4" />
				</Button>
			</div>
		</Card>
	);
}
