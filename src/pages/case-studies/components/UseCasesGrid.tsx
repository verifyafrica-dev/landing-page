import { useMemo, useState } from "react";
import { Building2 } from "lucide-react";
import { useCaseCategories } from "../../../mocks/caseStudies";
import UseCaseCard from "./UseCaseCard";
import UseCaseModal from "./UseCaseModal";
import { Button } from "@/components/ui/button";

interface UseCasesGridProps {
	onRequestDemo: () => void;
}

const ALL_CATEGORIES = "All Categories";

export default function UseCasesGrid({ onRequestDemo }: UseCasesGridProps) {
	const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORIES);
	const [selectedUseCase, setSelectedUseCase] = useState<
		(typeof useCaseCategories)[0] | null
	>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const industryFilters = useMemo(
		() => [ALL_CATEGORIES, ...useCaseCategories.map((uc) => uc.category)],
		[],
	);

	const filteredUseCases =
		selectedCategory === ALL_CATEGORIES
			? useCaseCategories
			: useCaseCategories.filter((uc) => uc.category === selectedCategory);

	const handleCardClick = (useCase: (typeof useCaseCategories)[0]) => {
		setSelectedUseCase(useCase);
		setIsModalOpen(true);
	};

	return (
		<section className="py-16 lg:py-24 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-16">
				<div className="text-center">
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full mb-4">
						<Building2 className="size-4 text-teal-600" />
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

				{/* <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
					{industryFilters.map((category) => {
						const isActive = selectedCategory === category;

						return (
							<Button
								key={category}
								variant={isActive ? "secondary" : "outline"}
								size="sm"
								onClick={() => setSelectedCategory(category)}
								className={`h-auto rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap cursor-pointer ${
									isActive
										? "bg-secondary text-white hover:bg-secondary/90"
										: "border-gray-200 bg-white text-gray-600 hover:bg-gray-100"
								}`}
							>
								{category}
							</Button>
						);
					})}
				</div> */}

				{filteredUseCases.length > 0 ? (
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
				) : (
					<div className="text-center py-16">
						<Building2 className="mx-auto mb-4 size-12 text-gray-300" />
						<h3 className="text-xl font-semibold text-gray-700 mb-2">
							No use cases found
						</h3>
						<p className="text-gray-500 mb-6">
							Try selecting a different category filter.
						</p>
						<Button
							variant="outline"
							onClick={() => setSelectedCategory(ALL_CATEGORIES)}
							className="cursor-pointer"
						>
							Show All Categories
						</Button>
					</div>
				)}
			</div>

			<UseCaseModal
				useCase={selectedUseCase}
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				onRequestDemo={onRequestDemo}
			/>
		</section>
	);
}
