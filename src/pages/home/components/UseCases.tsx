import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
	ArrowRightIcon,
	ArrowUpRightIcon,
	CaretLeftIcon,
	CaretRightIcon,
} from "@phosphor-icons/react";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import { useCaseCategories } from "@/mocks/caseStudies";
import { Button } from "@/components/ui/button";

const useCases = useCaseCategories.map((category) => ({
	id: category.id,
	title: category.category,
	description: category.description,
	icon: category.icon,
	iconColor: category.color,
	caseStudyId: category.id,
}));

const COUNT = useCases.length;
const START = COUNT;
const AUTOPLAY_MS = 3000;

function UseCaseCard({
	useCase,
	cardRef,
}: {
	useCase: (typeof useCases)[number];
	cardRef?: React.RefObject<HTMLAnchorElement | null>;
}) {
	const Icon = useCase.icon;

	return (
		<Link
			ref={cardRef}
			to={`/case-studies?open=${useCase.caseStudyId}`}
			className="group relative shrink-0 w-[280px] sm:w-[300px] lg:w-[calc((100%-3.5rem)/3)] bg-white border border-gray-200 rounded-xl p-5 sm:p-6 hover:border-gray-300 hover:shadow-sm transition-all duration-300 cursor-pointer overflow-hidden"
		>
			<div className="flex items-center gap-3 mb-3">
				<div
					className={`w-9 h-9 flex items-center justify-center rounded-lg bg-gradient-to-br ${useCase.iconColor} text-white shrink-0`}
				>
					<Icon className="w-4 h-4" />
				</div>
				<h3 className="text-sm sm:text-base font-bold text-secondary leading-snug group-hover:text-teal-700 transition-colors duration-300">
					{useCase.title}
				</h3>
			</div>
			<p className="text-sm text-gray-500 leading-relaxed line-clamp-3 font-medium">
				{useCase.description}
			</p>
			<div className="absolute bottom-3 right-3 w-7 h-7 flex items-center justify-center bg-secondary rounded-full opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 z-20">
				<ArrowUpRightIcon className="text-white text-sm" />
			</div>
		</Link>
	);
}

function CarouselRow({
	items,
	offset,
	enableTransition,
	onTransitionEnd,
	cardRef,
}: {
	items: (typeof useCases)[number][];
	offset: number;
	enableTransition: boolean;
	onTransitionEnd?: () => void;
	cardRef?: React.RefObject<HTMLAnchorElement | null>;
}) {
	return (
		<div className="overflow-hidden">
			<div
				className={`flex gap-4 sm:gap-5 will-change-transform ${
					enableTransition ? "transition-transform duration-500 ease-out" : ""
				}`}
				style={{
					transform: `translateX(calc(${offset} * var(--carousel-step, 0px)))`,
				}}
				onTransitionEnd={onTransitionEnd}
			>
				{items.map((useCase, i) => (
					<UseCaseCard
						key={`${useCase.id}-${i}`}
						useCase={useCase}
						cardRef={i === 0 ? cardRef : undefined}
					/>
				))}
			</div>
		</div>
	);
}

export default function UseCases() {
	const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
	const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({
		threshold: 0.15,
	});

	const [position, setPosition] = useState(START);
	const [step, setStep] = useState(0);
	const [enableTransition, setEnableTransition] = useState(true);
	const cardRef = useRef<HTMLAnchorElement>(null);
	const positionRef = useRef(START);
	const isResettingRef = useRef(false);

	const bottomRowCases = [...useCases].reverse();
	const loopedTop = [...useCases, ...useCases, ...useCases];
	const loopedBottom = [
		...bottomRowCases,
		...bottomRowCases,
		...bottomRowCases,
	];

	const measureStep = useCallback(() => {
		if (!cardRef.current) return;
		const cardWidth = cardRef.current.offsetWidth;
		const gap = window.innerWidth >= 640 ? 20 : 16;
		setStep(cardWidth + gap);
	}, []);

	useEffect(() => {
		positionRef.current = position;
	}, [position]);

	useEffect(() => {
		measureStep();
		window.addEventListener("resize", measureStep);
		return () => window.removeEventListener("resize", measureStep);
	}, [measureStep]);

	const resetLoop = useCallback((nextPosition: number) => {
		isResettingRef.current = true;
		setEnableTransition(false);
		setPosition(nextPosition);
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				setEnableTransition(true);
				isResettingRef.current = false;
			});
		});
	}, []);

	const handleTransitionEnd = useCallback(() => {
		if (isResettingRef.current) return;

		const current = positionRef.current;
		if (current >= COUNT * 2) {
			resetLoop(current - COUNT);
		} else if (current < COUNT) {
			resetLoop(current + COUNT);
		}
	}, [resetLoop]);

	const goNext = useCallback(() => {
		setPosition((prev) => prev + 1);
	}, []);

	const goPrev = useCallback(() => {
		setPosition((prev) => prev - 1);
	}, []);

	const [timerKey, setTimerKey] = useState(0);

	const resetAutoplayTimer = useCallback(() => {
		setTimerKey((key) => key + 1);
	}, []);

	const handlePrev = () => {
		goPrev();
		resetAutoplayTimer();
	};

	const handleNext = () => {
		goNext();
		resetAutoplayTimer();
	};

	useEffect(() => {
		const interval = setInterval(goNext, AUTOPLAY_MS);
		return () => clearInterval(interval);
	}, [goNext, timerKey]);

	const topOffset = -position;
	const bottomOffset = position - COUNT * 2;

	return (
		<section
			id="use-cases"
			className="py-12 sm:py-16 lg:py-24 bg-gray-50 overflow-hidden"
		>
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
						Use Cases
					</h2>
					<p className="text-sm sm:text-base lg:text-xl text-gray-600 px-2">
						Trusted by regulated businesses across industries
					</p>
				</div>

				<div
					ref={sectionRef}
					className={`space-y-4 sm:space-y-5 transition-all duration-700 ${
						sectionVisible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-8"
					}`}
					style={{ "--carousel-step": `${step}px` } as React.CSSProperties}
				>
					<CarouselRow
						items={loopedTop}
						offset={topOffset}
						enableTransition={enableTransition}
						onTransitionEnd={handleTransitionEnd}
						cardRef={cardRef}
					/>

					<CarouselRow
						items={loopedBottom}
						offset={bottomOffset}
						enableTransition={enableTransition}
					/>

					<div className="flex justify-center gap-3 pt-4 sm:pt-6">
						<Button
							onClick={handlePrev}
							aria-label="Previous use cases"
							className="h-10 rounded-full cursor-pointer"
						>
							<CaretLeftIcon className="w-5 h-5" />
						</Button>
						<Button
							onClick={handleNext}
							aria-label="Next use cases"
							className="h-10 rounded-full cursor-pointer"
						>
							<CaretRightIcon className="w-5 h-5" />
						</Button>
					</div>
				</div>

				<div
					className={`flex justify-center mt-10 sm:mt-12 lg:mt-16 transition-all duration-700 delay-300 ${
						sectionVisible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-6"
					}`}
				>
					<Button
						variant="outline"
						size="lg"
						asChild
						className="h-auto gap-2.5 px-7 py-3.5 rounded-full border-2 border-secondary text-secondary font-semibold text-sm sm:text-base hover:bg-secondary hover:text-white cursor-pointer"
					>
						<Link to="/case-studies">
							View all use cases
							<span className="w-5 h-5 flex items-center justify-center rounded-full bg-secondary text-white group-hover/button:bg-white group-hover/button:text-secondary transition-all duration-300 group-hover/button:translate-x-1">
								<ArrowRightIcon className="text-xs" />
							</span>
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
