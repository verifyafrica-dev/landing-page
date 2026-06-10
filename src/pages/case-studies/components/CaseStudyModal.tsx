import {
	DownloadIcon,
	LightbulbIcon,
	QuotesIcon,
	WarningIcon,
	XIcon,
} from "@phosphor-icons/react";
import { useEffect } from "react";

interface CaseStudyResult {
	metric: string;
	label: string;
}

interface CaseStudy {
	id: number;
	title: string;
	client: string;
	industry: string;
	challenge: string;
	solution: string;
	results: CaseStudyResult[];
	quote: string;
	author: string;
	role: string;
	image: string;
}

interface CaseStudyModalProps {
	caseStudy: CaseStudy | null;
	isOpen: boolean;
	onClose: () => void;
}

export default function CaseStudyModal({
	caseStudy,
	isOpen,
	onClose,
}: CaseStudyModalProps) {
	useEffect(() => {
		return () => {
			document.body.style.overflow = "";
		};
	}, []);

	if (!isOpen || !caseStudy) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
			{/* Backdrop */}
			<div
				className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm"
				onClick={onClose}
			></div>

			{/* Modal */}
			<div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
				{/* Close Button */}
				<button
					onClick={onClose}
					className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-gray-100 transition-colors cursor-pointer"
				>
					<XIcon className="text-xl text-gray-700" />
				</button>

				{/* Hero Image */}
				<div className="relative h-64 sm:h-80">
					<img
						src={caseStudy.image}
						alt={caseStudy.title}
						className="w-full h-full object-cover object-top"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

					<div className="absolute bottom-6 left-6 right-6">
						<div className="inline-block px-3 py-1 bg-teal-500 rounded-full mb-3">
							<span className="text-xs font-medium text-white">
								{caseStudy.industry}
							</span>
						</div>
						<h2 className="text-2xl sm:text-3xl font-bold text-white">
							{caseStudy.title}
						</h2>
					</div>
				</div>

				{/* Content */}
				<div className="p-6 sm:p-8">
					{/* Results Grid */}
					<div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-gray-50 rounded-xl">
						{caseStudy.results.map((result, index) => (
							<div
								key={index}
								className="text-center"
							>
								<div className="text-2xl sm:text-3xl font-bold text-teal-600">
									{result.metric}
								</div>
								<div className="text-sm text-gray-600">{result.label}</div>
							</div>
						))}
					</div>

					{/* Challenge */}
					<div className="mb-8">
						<h3 className="text-lg font-bold text-secondary mb-3 flex items-center gap-2">
							<WarningIcon className="text-orange-500" />
							The Challenge
						</h3>
						<p className="text-gray-600 leading-relaxed">
							{caseStudy.challenge}
						</p>
					</div>

					{/* Solution */}
					<div className="mb-8">
						<h3 className="text-lg font-bold text-secondary mb-3 flex items-center gap-2">
							<LightbulbIcon className="text-teal-500" />
							The Solution
						</h3>
						<p className="text-gray-600 leading-relaxed">
							{caseStudy.solution}
						</p>
					</div>

					{/* Quote */}
					<div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 mb-8">
						<QuotesIcon className="text-4xl text-teal-300 mb-2 block" />
						<p className="text-lg text-gray-800 italic mb-4">
							{caseStudy.quote}
						</p>
						<div className="flex items-center gap-3">
							<div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
								<span className="text-white font-bold text-lg">
									{caseStudy.author
										.split(" ")
										.map((n) => n[0])
										.join("")}
								</span>
							</div>
							<div>
								<div className="font-semibold text-secondary">
									{caseStudy.author}
								</div>
								<div className="text-sm text-gray-600">{caseStudy.role}</div>
							</div>
						</div>
					</div>

					{/* CTA */}
					<div className="flex flex-col sm:flex-row gap-4">
						<button className="flex-1 px-6 py-3 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition-colors cursor-pointer whitespace-nowrap">
							<DownloadIcon className="mr-2" />
							Download PDF Case Study
						</button>
						<button
							onClick={onClose}
							className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap"
						>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
