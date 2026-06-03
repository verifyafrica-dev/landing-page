import { useEffect } from "react";
import {
	Calendar,
	Check,
	ChevronRight,
	CircleCheck,
	CircleHelp,
	type LucideIcon,
	X,
} from "lucide-react";

interface UseCaseBenefit {
	metric: string;
	label: string;
}

interface UseCase {
	id: number;
	category: string;
	icon: string;
	color: string;
	description: string;
	useCases: string[];
	benefits: UseCaseBenefit[];
	image: string;
}

interface UseCaseModalProps {
	useCase: UseCase | null;
	isOpen: boolean;
	onClose: () => void;
	onRequestDemo: () => void;
}

export default function UseCaseModal({
	useCase,
	isOpen,
	onClose,
	onRequestDemo,
}: UseCaseModalProps) {
	useEffect(() => {
		return () => {
			document.body.style.overflow = "";
		};
	}, []);

	if (!isOpen || !useCase) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
			{/* Backdrop */}
			<div
				className="fixed inset-0 bg-black/60 backdrop-blur-sm"
				onClick={onClose}
			></div>

			{/* Modal */}
			<div className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
				{/* Close Button */}
				<button
					onClick={onClose}
					className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-gray-100 transition-colors cursor-pointer"
				>
					<i className="ri-close-line text-xl text-gray-700"></i>
				</button>

				{/* Hero Image */}
				<div className="relative h-56 sm:h-64">
					<img
						src={useCase.image}
						alt={useCase.category}
						className="w-full h-full object-cover object-top"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

					<div className="absolute bottom-6 left-6 right-6 flex items-end gap-4">
						<div
							className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${useCase.color} shadow-lg`}
						>
							<i className={`${useCase.icon} text-2xl text-white`}></i>
						</div>
						<div>
							<h2 className="text-2xl sm:text-3xl font-bold text-white">
								{useCase.category}
							</h2>
						</div>
					</div>
				</div>

				{/* Content */}
				<div className="p-6 sm:p-8">
					{/* Description */}
					<p className="text-gray-600 text-lg mb-6">{useCase.description}</p>

					{/* Benefits Grid */}
					<div className="grid grid-cols-3 gap-4 mb-8 p-5 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl">
						{useCase.benefits.map((benefit, index) => (
							<div
								key={index}
								className="text-center"
							>
								<div className="text-2xl sm:text-3xl font-bold text-teal-600">
									{benefit.metric}
								</div>
								<div className="text-sm text-gray-600">{benefit.label}</div>
							</div>
						))}
					</div>

					{/* Use Cases */}
					<div className="mb-8">
						<h3 className="text-lg font-bold text-secondary mb-4 flex items-center gap-2">
							<i className="ri-checkbox-circle-line text-teal-500"></i>
							Key Use Cases
						</h3>
						<div className="grid sm:grid-cols-2 gap-3">
							{useCase.useCases.map((item, index) => (
								<div
									key={index}
									className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
								>
									<div className="w-8 h-8 flex items-center justify-center bg-teal-100 rounded-lg">
										<i className="ri-check-line text-teal-600"></i>
									</div>
									<span className="text-gray-700 text-sm">{item}</span>
								</div>
							))}
						</div>
					</div>

					{/* Why VerifyAfrica */}
					<div className="mb-8 p-5 bg-gray-50 rounded-xl">
						<h3 className="text-lg font-bold text-secondary mb-3 flex items-center gap-2">
							<i className="ri-question-line text-teal-500"></i>
							Why Choose VerifyAfrica?
						</h3>
						<ul className="space-y-2">
							<li className="flex items-start gap-2 text-gray-600 text-sm">
								<i className="ri-arrow-right-s-line text-teal-500 mt-0.5"></i>
								<span>
									Pan-African coverage with 35+ countries and 50+ ID types
								</span>
							</li>
							<li className="flex items-start gap-2 text-gray-600 text-sm">
								<i className="ri-arrow-right-s-line text-teal-500 mt-0.5"></i>
								<span>AI-powered verification with 99.7% accuracy rate</span>
							</li>
							<li className="flex items-start gap-2 text-gray-600 text-sm">
								<i className="ri-arrow-right-s-line text-teal-500 mt-0.5"></i>
								<span>
									Full regulatory compliance across all African markets
								</span>
							</li>
							<li className="flex items-start gap-2 text-gray-600 text-sm">
								<i className="ri-arrow-right-s-line text-teal-500 mt-0.5"></i>
								<span>
									Easy API integration with comprehensive documentation
								</span>
							</li>
						</ul>
					</div>

					{/* CTA */}
					<div className="flex flex-col sm:flex-row gap-4">
						<button
							onClick={() => {
								onClose();
								onRequestDemo();
							}}
							className="flex-1 px-6 py-3 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition-colors cursor-pointer whitespace-nowrap"
						>
							<i className="ri-calendar-line mr-2"></i>
							Request a Demo
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
