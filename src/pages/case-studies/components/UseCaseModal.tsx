import {
	CalendarIcon,
	CheckCircleIcon,
	QuestionIcon,
	ShieldStarIcon,
	type Icon,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { TagList } from "./country-detail/components";

const ACCENT_COLOR = "#14b8a6";

interface UseCaseBenefit {
	metric: string;
	label: string;
}

interface UseCase {
	id: number;
	category: string;
	icon: Icon;
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

const WHY_VERIFY_AFRICA = [
	"Pan-African coverage with 35+ countries and 50+ ID types",
	"AI-powered verification with 99.7% accuracy rate",
	"Full regulatory compliance across all African markets",
	"Easy API integration with comprehensive documentation",
] as const;

function EditorialBand({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) {
	return (
		<section className={cn("px-8 py-10", className)}>{children}</section>
	);
}

export default function UseCaseModal({
	useCase,
	isOpen,
	onClose,
	onRequestDemo,
}: UseCaseModalProps) {
	if (!useCase) return null;

	const CategoryIcon = useCase.icon;

	return (
		<Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
			<DialogContent
				className="max-h-[90vh] gap-0 overflow-hidden p-0 sm:max-w-2xl"
				showCloseButton
			>
				<div className="max-h-[85vh] overflow-y-auto">
					{/* Lead */}
					<EditorialBand className="bg-background pb-6 pt-8">
						<div className="flex items-end gap-5">
							<div
								className={cn(
									"flex size-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br shadow-sm",
									useCase.color,
								)}
							>
								<CategoryIcon className="size-6 text-white" />
							</div>
							<DialogHeader className="gap-1 text-left">
								<p
									className="text-xs font-semibold uppercase tracking-widest"
									style={{ color: ACCENT_COLOR }}
								>
									Use Case
								</p>
								<DialogTitle className="text-3xl font-bold leading-none tracking-tight">
									{useCase.category}
								</DialogTitle>
								<DialogDescription className="text-sm">
									{useCase.description}
								</DialogDescription>
							</DialogHeader>
						</div>
					</EditorialBand>

					{/* Benefits */}
					<EditorialBand className="bg-muted/40">
						<div className="grid grid-cols-3 divide-x divide-border">
							{useCase.benefits.map(({ metric, label }) => (
								<div key={label} className="px-4 first:pl-0 last:pr-0">
									<div
										className="text-3xl font-bold tracking-tight sm:text-4xl"
										style={{ color: ACCENT_COLOR }}
									>
										{metric}
									</div>
									<div className="mt-1 text-sm text-muted-foreground">
										{label}
									</div>
								</div>
							))}
						</div>
					</EditorialBand>

					{/* Key use cases */}
					<EditorialBand className="border-t border-border bg-background">
						<div className="mb-5 flex items-center gap-2">
							<CheckCircleIcon
								className="size-5"
								style={{ color: ACCENT_COLOR }}
							/>
							<h3 className="text-lg font-semibold">Key Use Cases</h3>
						</div>
						<TagList items={useCase.useCases} />
					</EditorialBand>

					{/* Why VerifyAfrica */}
					<EditorialBand className="bg-muted/40">
						<div className="mb-6 flex items-center gap-2">
							<QuestionIcon className="size-5" style={{ color: ACCENT_COLOR }} />
							<h3 className="text-lg font-semibold">Why Choose VerifyAfrica?</h3>
						</div>
						<div className="grid gap-4 sm:grid-cols-2">
							{WHY_VERIFY_AFRICA.map((point) => (
								<div
									key={point}
									className="flex items-start gap-4 border-l-2 pl-4"
									style={{ borderColor: ACCENT_COLOR }}
								>
									<ShieldStarIcon className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
									<div>
										<p className="font-medium text-foreground">{point}</p>
									</div>
								</div>
							))}
						</div>
					</EditorialBand>
				</div>

				<DialogFooter className="mx-0 mb-0 flex-row items-center justify-between gap-4 border-t bg-muted/20 px-5 py-4">
					<div className="flex items-center gap-2 text-xs text-muted-foreground">
						<CalendarIcon className="size-3.5 shrink-0" />
						<span className="hidden sm:inline">
							Schedule a personalized walkthrough
						</span>
					</div>
					<div className="flex items-center gap-2">
						<DialogClose asChild>
							<Button variant="secondary" size="sm">
								Close
							</Button>
						</DialogClose>
						<Button
							size="sm"
							className="bg-teal-500 text-white hover:bg-teal-400"
							onClick={() => {
								onClose();
								onRequestDemo();
							}}
						>
							<CalendarIcon className="size-3.5" />
							Request Demo
						</Button>
					</div>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
