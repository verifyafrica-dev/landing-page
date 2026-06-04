import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
	ArrowRight,
	Check,
	CircleCheck,
	Clock,
	Download,
	Eye,
	EyeOff,
	FileText,
	Flame,
	List,
	Lock,
	LockOpen,
} from "lucide-react";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import EmailGateModal from "./EmailGateModal";
import { track } from "../../../lib/analytics";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface Resource {
	id: string;
	title: string;
	description: string;
	teaserContent: string[];
	gatedContent?: string[];
	pdfUrl?: string;
	icon: string;
	category: string;
	readTime: string;
	pages: string;
	isNew?: boolean;
	dateAdded?: string;
}

interface ResourceCardProps {
	resource: Resource;
	isUnlocked: boolean;
	onUnlock: (id: string) => void;
}

export default function ResourceCard({
	resource,
	isUnlocked,
	onUnlock,
}: ResourceCardProps) {
	const navigate = useNavigate();
	const { ref, isVisible } = useScrollAnimation();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [showGatedContent, setShowGatedContent] = useState(false);
	const [copiedLink, setCopiedLink] = useState(false);

	const siteUrl = import.meta.env.VITE_SITE_URL || "https://verifyafrica.io";
	const shareUrl = `${siteUrl}/resources/${resource.id}`;

	useEffect(() => {
		if (isVisible) {
			track("resource_viewed", {
				resource_id: resource.id,
				resource_title: resource.title,
			});
		}
	}, [isVisible, resource.id, resource.title]);

	const handleUnlock = (id: string, email: string) => {
		const domain = email.split("@")[1] || "unknown";
		track("resource_unlocked", {
			resource_id: id,
			resource_title: resource.title,
			email_domain: domain,
		});
		onUnlock(id);
		setIsModalOpen(false);
		setShowGatedContent(true);
	};

	const handleDownload = () => {
		if (resource.pdfUrl) {
			track("resource_downloaded", {
				resource_id: resource.id,
				resource_title: resource.title,
				type: "pdf",
			});
			window.open(resource.pdfUrl, "_blank", "noopener,noreferrer");
		}
	};

	const shareText = `Check out this free compliance resource: ${resource.title}`;

	const getShareLink = (channel: "linkedin" | "twitter" | "copy_link") => {
		if (channel === "copy_link") {
			return shareUrl;
		}
		const encodedUrl = encodeURIComponent(shareUrl);
		if (channel === "linkedin") {
			return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
		}
		return `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodedUrl}`;
	};

	const trackShare = (channel: "linkedin" | "twitter" | "copy_link") => {
		track("resource_shared", {
			resource_id: resource.id,
			resource_title: resource.title,
			channel,
		});
	};

	const handleCopyLink = async () => {
		trackShare("copy_link");
		try {
			await navigator.clipboard.writeText(shareUrl);
			setCopiedLink(true);
			setTimeout(() => setCopiedLink(false), 2000);
		} catch {
			// clipboard unavailable
		}
	};

	const isPdfResource = !!resource.pdfUrl;

	return (
		<>
			<Card
				id={resource.id}
				ref={ref}
				className={cn(
					"flex flex-col h-full scroll-mt-32 transition-all duration-500 hover:shadow-lg hover:border-teal-100 border-gray-100 py-0 gap-0",
					isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
				)}
			>
				<CardHeader className="p-6 pb-4">
					<div className="flex items-center justify-between mb-4">
						<div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center shrink-0">
							<i className={`${resource.icon} text-xl text-teal-600`} />
						</div>
						<div className="flex items-center gap-2">
							{resource.isNew && (
								<span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full flex items-center gap-1">
									<Flame className="size-3.5" />
									Recently Added
								</span>
							)}
							<span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
								{resource.category}
							</span>
						</div>
					</div>

					<CardTitle className="text-lg font-bold text-secondary leading-snug">
						{resource.title}
					</CardTitle>
					<CardDescription className="text-gray-500 leading-relaxed mt-2">
						{resource.description}
					</CardDescription>

					<div className="flex items-center gap-4 text-xs text-gray-400 mt-4">
						<span className="flex items-center gap-1">
							<Clock className="size-3.5" />
							{resource.readTime}
						</span>
						<span className="flex items-center gap-1">
							<List className="size-3.5" />
							{resource.pages}
						</span>
						{isPdfResource && (
							<span className="flex items-center gap-1 text-teal-600">
								<FileText className="size-3.5" />
								PDF
							</span>
						)}
					</div>
				</CardHeader>

				<CardContent className="px-6 pb-4 flex-1 space-y-4">
					<Accordion
						type="single"
						collapsible
						className="rounded-lg border border-gray-100 bg-gray-50 px-3"
					>
						<AccordionItem
							value="teaser"
							className="border-0"
						>
							<AccordionTrigger className="py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 hover:no-underline hover:text-teal-600 cursor-pointer">
								What you will learn
							</AccordionTrigger>
							<AccordionContent className="pb-3">
								<ul className="space-y-2">
									{resource.teaserContent.map((item, index) => (
										<li
											key={index}
											className="flex items-start gap-2 text-sm text-gray-600"
										>
											<Check className="size-4 text-teal-500 mt-0.5 shrink-0" />
											<span>{item}</span>
										</li>
									))}
								</ul>
							</AccordionContent>
						</AccordionItem>
					</Accordion>

					{isUnlocked &&
						showGatedContent &&
						!isPdfResource &&
						resource.gatedContent && (
							<Accordion
								type="single"
								collapsible
								defaultValue="gated"
								className="rounded-lg border border-emerald-100 bg-emerald-50 px-3"
							>
								<AccordionItem
									value="gated"
									className="border-0"
								>
									<AccordionTrigger className="py-3 text-xs font-semibold uppercase tracking-wider text-emerald-700 hover:no-underline cursor-pointer">
										<span className="flex items-center gap-2">
											<LockOpen className="size-3.5" />
											Full Actionable Content — Unlocked
										</span>
									</AccordionTrigger>
									<AccordionContent className="pb-3">
										<ul className="space-y-2">
											{resource.gatedContent.map((item, index) => (
												<li
													key={index}
													className="flex items-start gap-2 text-sm text-gray-700"
												>
													<CircleCheck className="size-4 text-emerald-500 mt-0.5 shrink-0" />
													<span>{item}</span>
												</li>
											))}
										</ul>
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						)}

					{isUnlocked && isPdfResource && (
						<div className="rounded-lg border border-emerald-100 bg-emerald-50 p-4">
							<p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-3 flex items-center gap-2">
								<LockOpen className="size-3.5" />
								PDF Unlocked — Ready to Download
							</p>
							<p className="text-sm text-gray-600 mb-3">
								Your PDF is now available. Click below to download or view the
								full article.
							</p>
							<Button
								onClick={handleDownload}
								className="w-full h-auto py-2.5 bg-emerald-500 text-white hover:bg-emerald-600 cursor-pointer"
							>
								<Download className="size-4" />
								Download PDF
							</Button>
						</div>
					)}
				</CardContent>

				<CardFooter className="flex-col items-stretch gap-4 mt-auto border-0 bg-transparent p-6 pt-0">
					<div>
						<Button
							variant="link"
							onClick={() => navigate(`/resources/${resource.id}`)}
							className="h-auto p-0 text-teal-600 font-medium hover:text-teal-700 cursor-pointer"
						>
							View Full Page
							<ArrowRight className="size-4" />
						</Button>
						<div className="flex items-center gap-2 mt-3">
							<span className="text-xs text-gray-400 mr-1">Share:</span>
							<Button
								variant="outline"
								size="icon"
								asChild
								className="size-8 cursor-pointer"
							>
								<a
									href={getShareLink("linkedin")}
									target="_blank"
									rel="noopener noreferrer"
									title="Share on LinkedIn"
									onClick={() => trackShare("linkedin")}
								>
									<i
										className="ri-linkedin-fill text-base"
										aria-hidden
									/>
								</a>
							</Button>
							<Button
								variant="outline"
								size="icon"
								asChild
								className="size-8 cursor-pointer"
							>
								<a
									href={getShareLink("twitter")}
									target="_blank"
									rel="noopener noreferrer"
									title="Share on X/Twitter"
									onClick={() => trackShare("twitter")}
								>
									<i
										className="ri-twitter-x-fill text-base"
										aria-hidden
									/>
								</a>
							</Button>
							<Button
								variant="outline"
								size="icon"
								asChild
								className="size-8 cursor-pointer relative"
							>
								<a
									href={getShareLink("copy_link")}
									title="Copy direct link"
									onClick={(e) => {
										e.preventDefault();
										handleCopyLink();
									}}
								>
									<i
										className={cn(
											"text-base",
											copiedLink ? "ri-check-line" : "ri-link",
										)}
										aria-hidden
									/>
									{copiedLink && (
										<span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap pointer-events-none">
											Copied!
										</span>
									)}
								</a>
							</Button>
						</div>
					</div>

					{isUnlocked ? (
						isPdfResource ? (
							<Button
								onClick={handleDownload}
								className="w-full h-auto py-3 bg-emerald-500 text-white hover:bg-emerald-600 cursor-pointer"
							>
								<Download className="size-4" />
								Download PDF
							</Button>
						) : (
							<Button
								onClick={() => setShowGatedContent(!showGatedContent)}
								className="w-full h-auto py-3 bg-emerald-500 text-white hover:bg-emerald-600 cursor-pointer"
							>
								{showGatedContent ? (
									<EyeOff className="size-4" />
								) : (
									<Eye className="size-4" />
								)}
								{showGatedContent ? "Hide Full Content" : "View Full Content"}
							</Button>
						)
					) : (
						<Button
							onClick={() => setIsModalOpen(true)}
							className="w-full h-auto py-3 bg-teal-500 text-white hover:bg-teal-600 cursor-pointer group"
						>
							<Lock className="size-4 group-hover:hidden" />
							<LockOpen className="size-4 hidden group-hover:inline" />
							{isPdfResource ? "Unlock PDF Download" : "Unlock Full Guide"}
						</Button>
					)}
				</CardFooter>
			</Card>

			<EmailGateModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				resourceTitle={resource.title}
				resourceId={resource.id}
				onUnlock={handleUnlock}
			/>
		</>
	);
}
