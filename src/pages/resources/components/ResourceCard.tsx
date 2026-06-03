import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
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
	Link,
	List,
	Lock,
	LockOpen,
} from "lucide-react";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import EmailGateModal from "./EmailGateModal";
import { track } from "../../../lib/analytics";

function LinkedInIcon({ className }: { className?: string }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			className={className}
			aria-hidden
		>
			<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
		</svg>
	);
}

function XIcon({ className }: { className?: string }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			className={className}
			aria-hidden
		>
			<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
		</svg>
	);
}

export interface Resource {
	id: string;
	title: string;
	description: string;
	teaserContent: string[];
	gatedContent?: string[];
	pdfUrl?: string;
	icon: LucideIcon;
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

	const handleShare = useCallback(
		(channel: "linkedin" | "twitter" | "copy_link") => {
			track("resource_shared", {
				resource_id: resource.id,
				resource_title: resource.title,
				channel,
			});

			const text = encodeURIComponent(
				`Check out this free compliance resource: ${resource.title}`,
			);
			const url = encodeURIComponent(shareUrl);

			if (channel === "linkedin") {
				window.open(
					`https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
					"_blank",
					"noopener,noreferrer",
				);
			} else if (channel === "twitter") {
				window.open(
					`https://twitter.com/intent/tweet?text=${text}&url=${url}`,
					"_blank",
					"noopener,noreferrer",
				);
			} else if (channel === "copy_link") {
				navigator.clipboard.writeText(shareUrl).then(() => {
					setCopiedLink(true);
					setTimeout(() => setCopiedLink(false), 2000);
				});
			}
		},
		[resource.id, resource.title, shareUrl],
	);

	const isPdfResource = !!resource.pdfUrl;

	return (
		<>
			<div
				id={resource.id}
				ref={ref}
				className={`bg-white rounded-xl border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-teal-500/5 hover:border-teal-100 scroll-mt-32 ${
					isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
				}`}
			>
				{/* Card Header */}
				<div className="p-6 pb-4">
					<div className="flex items-start justify-between mb-4">
						<div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
							<resource.icon className="size-5 text-teal-600" />
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

					<h3 className="text-lg font-bold text-secondary mb-2 leading-snug">
						{resource.title}
					</h3>
					<p className="text-sm text-gray-500 mb-4 leading-relaxed">
						{resource.description}
					</p>

					<div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
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
				</div>

				{/* Teaser Content */}
				<div className="px-6 pb-4">
					<div className="bg-gray-50 rounded-lg p-4">
						<p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
							What you will learn
						</p>
						<ul className="space-y-2">
							{resource.teaserContent.map((item, index) => (
								<li
									key={index}
									className="flex items-start gap-2 text-sm text-gray-600"
								>
									<Check className="size-4 text-teal-500 mt-0.5 flex-shrink-0" />
									<span>{item}</span>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Gated Content Preview (shown when unlocked for text resources) */}
				{isUnlocked &&
					showGatedContent &&
					!isPdfResource &&
					resource.gatedContent && (
						<div className="px-6 pb-4">
							<div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
								<p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-3 flex items-center gap-2">
									<LockOpen className="size-3.5" />
									Full Actionable Content — Unlocked
								</p>
								<ul className="space-y-2">
									{resource.gatedContent.map((item, index) => (
										<li
											key={index}
											className="flex items-start gap-2 text-sm text-gray-700"
										>
											<CircleCheck className="size-4 text-emerald-500 mt-0.5 flex-shrink-0" />
											<span>{item}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					)}

				{/* PDF Download Preview (shown when unlocked for PDF resources) */}
				{isUnlocked && isPdfResource && (
					<div className="px-6 pb-4">
						<div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
							<p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-3 flex items-center gap-2">
								<LockOpen className="size-3.5" />
								PDF Unlocked — Ready to Download
							</p>
							<p className="text-sm text-gray-600 mb-3">
								Your PDF is now available. Click below to download or view the
								full article.
							</p>
							<button
								onClick={handleDownload}
								className="w-full py-2.5 bg-emerald-500 text-white text-sm font-medium rounded-lg hover:bg-emerald-600 transition-all cursor-pointer flex items-center justify-center gap-2"
							>
								<Download className="size-4" />
								Download PDF
							</button>
						</div>
					</div>
				)}

				{/* View Full Page + Share */}
				<div className="px-6 pb-3">
					<div className="flex items-center justify-between mb-3">
						<button
							onClick={() => navigate(`/resources/${resource.id}`)}
							className="text-sm text-teal-600 font-medium hover:text-teal-700 transition-colors cursor-pointer flex items-center gap-1"
						>
							View Full Page
							<ArrowRight className="size-4" />
						</button>
					</div>
					<div className="flex items-center gap-2">
						<span className="text-xs text-gray-400 mr-1">Share:</span>
						<button
							onClick={() => handleShare("linkedin")}
							className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-[#0077b5] hover:text-white transition-all cursor-pointer"
							title="Share on LinkedIn"
						>
							<LinkedInIcon className="size-4" />
						</button>
						<button
							onClick={() => handleShare("twitter")}
							className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-black hover:text-white transition-all cursor-pointer"
							title="Share on X/Twitter"
						>
							<XIcon className="size-3.5" />
						</button>
						<button
							onClick={() => handleShare("copy_link")}
							className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-teal-500 hover:text-white transition-all cursor-pointer relative"
							title="Copy direct link"
						>
							{copiedLink ? (
								<Check className="size-4" />
							) : (
								<Link className="size-4" />
							)}
							{copiedLink && (
								<span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap">
									Copied!
								</span>
							)}
						</button>
					</div>
				</div>

				{/* Action Button */}
				<div className="px-6 pb-6">
					{isUnlocked ? (
						isPdfResource ? (
							<button
								onClick={handleDownload}
								className="w-full py-3 bg-emerald-500 text-white text-sm font-medium rounded-lg hover:bg-emerald-600 transition-all cursor-pointer flex items-center justify-center gap-2"
							>
								<Download className="size-4" />
								Download PDF
							</button>
						) : (
							<button
								onClick={() => setShowGatedContent(!showGatedContent)}
								className="w-full py-3 bg-emerald-500 text-white text-sm font-medium rounded-lg hover:bg-emerald-600 transition-all cursor-pointer flex items-center justify-center gap-2"
							>
								{showGatedContent ? (
									<EyeOff className="size-4" />
								) : (
									<Eye className="size-4" />
								)}
								{showGatedContent ? "Hide Full Content" : "View Full Content"}
							</button>
						)
					) : (
						<button
							onClick={() => setIsModalOpen(true)}
							className="w-full py-3 bg-teal-500 text-white text-sm font-medium rounded-lg hover:bg-teal-600 transition-all cursor-pointer flex items-center justify-center gap-2 group"
						>
							<Lock className="size-4 group-hover:hidden" />
							<LockOpen className="size-4 hidden group-hover:inline" />
							{isPdfResource ? "Unlock PDF Download" : "Unlock Full Guide"}
						</button>
					)}
				</div>
			</div>

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
