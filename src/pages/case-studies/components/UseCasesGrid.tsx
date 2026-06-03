import { useState } from "react";
import { Building, FileSearch } from "lucide-react";
import { useCaseCategories } from "../../../mocks/caseStudies";
import UseCaseCard from "./UseCaseCard";
import UseCaseModal from "./UseCaseModal";

interface UseCasesGridProps {
	onRequestDemo: () => void;
}

export default function UseCasesGrid({ onRequestDemo }: UseCasesGridProps) {
	const [selectedCategory, setSelectedCategory] = useState("All Categories");
	const [selectedUseCase, setSelectedUseCase] = useState<
		(typeof useCaseCategories)[0] | null
	>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const industries = [
		"All Industries",
		"Banking",
		"Fintech",
		"FX Brokers",
		"Telecommunications",
		"E-commerce",
		"Insurance",
		"Crypto & Web3",
	];

	const filteredUseCases =
		selectedCategory === "All Categories"
			? useCaseCategories
			: useCaseCategories.filter((uc) => uc.category === selectedCategory);

	const handleCardClick = (useCase: (typeof useCaseCategories)[0]) => {
		setSelectedUseCase(useCase);
		setIsModalOpen(true);
	};

	return (
		<section className="py-16 lg:py-24 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
				{/* Section Header */}
				<div className="text-center mb-12">
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full mb-4">
						<i className="ri-building-line text-teal-600"></i>
						<span className="text-teal-600 text-sm font-medium">
							Industry Solutions
						</span>
					</div>
					<h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
						Who Needs Identity Verification?
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Explore how different industries leverage VerifyAfrica to streamline
						compliance, prevent fraud, and build trust.
					</p>
				</div>

				{/* Filter Bar */}
				<div className="flex flex-wrap items-center justify-center gap-3 mb-12">
					{industries.map((category) => (
						<button
							key={category}
							onClick={() => setSelectedCategory(category)}
							className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
								selectedCategory === category
									? "bg-secondary text-white"
									: "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
							}`}
						>
							{category}
						</button>
					))}
				</div>

				{/* Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{filteredUseCases.map((useCase) => (
						<UseCaseCard
							key={useCase.id}
							category={useCase.category}
							icon={useCase.icon}
							color={useCase.color}
							description={useCase.description}
							useCases={useCase.useCases}
							benefits={useCase.benefits}
							image={useCase.image}
							onClick={() => handleCardClick(useCase)}
						/>
					))}
				</div>

				{/* Empty State */}
				{filteredUseCases.length === 0 && (
					<div className="text-center py-16">
						<i className="ri-file-search-line text-5xl text-gray-300 mb-4 block"></i>
						<h3 className="text-xl font-semibold text-gray-700 mb-2">
							No use cases found
						</h3>
						<p className="text-gray-500">
							Try selecting a different category filter.
						</p>
					</div>
				)}
			</div>

			{/* Modal */}
			<UseCaseModal
				useCase={selectedUseCase}
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				onRequestDemo={onRequestDemo}
			/>
		</section>
	);
}
