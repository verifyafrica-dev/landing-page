import { ArrowRight } from "lucide-react";

interface CaseStudyResult {
	metric: string;
	label: string;
}

interface CaseStudyCardProps {
	title: string;
	client: string;
	industry: string;
	challenge: string;
	results: CaseStudyResult[];
	image: string;
	featured?: boolean;
	onClick: () => void;
}

export default function CaseStudyCard({
	title,
	client,
	industry,
	challenge,
	results,
	image,
	featured,
	onClick,
}: CaseStudyCardProps) {
	return (
		<div
			onClick={onClick}
			className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 ${
				featured ? "ring-2 ring-teal-500/20" : ""
			}`}
		>
			{/* Image */}
			<div className="relative h-48 sm:h-56 overflow-hidden">
				<img
					src={image}
					alt={title}
					className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

				{/* Industry Badge */}
				<div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
					<span className="text-xs font-medium text-gray-700">{industry}</span>
				</div>

				{/* Featured Badge */}
				{featured && (
					<div className="absolute top-4 left-4 px-3 py-1 bg-teal-500 rounded-full">
						<span className="text-xs font-medium text-white">Featured</span>
					</div>
				)}

				{/* Client Name */}
				<div className="absolute bottom-4 left-4">
					<span className="text-white font-semibold text-lg">{client}</span>
				</div>
			</div>

			{/* Content */}
			<div className="p-6">
				<h3 className="text-lg font-bold text-secondary mb-3 group-hover:text-teal-600 transition-colors line-clamp-2">
					{title}
				</h3>

				<p className="text-sm text-gray-600 mb-5 line-clamp-2">{challenge}</p>

				{/* Results */}
				<div className="grid grid-cols-3 gap-3 mb-5 pt-5 border-t border-gray-100">
					{results.map((result, index) => (
						<div
							key={index}
							className="text-center"
						>
							<div className="text-xl font-bold text-teal-600">
								{result.metric}
							</div>
							<div className="text-xs text-gray-500">{result.label}</div>
						</div>
					))}
				</div>

				{/* CTA */}
				<div className="flex items-center justify-between">
					<span className="text-sm font-medium text-teal-600 group-hover:text-teal-700 transition-colors">
						Read Full Story
					</span>
					<ArrowRight className="w-4 h-4 text-teal-600 group-hover:translate-x-1 transition-transform" />
				</div>
			</div>
		</div>
	);
}
