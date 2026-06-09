import { useState, useEffect, lazy, Suspense } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDemoModal } from "../../../hooks/useDemoModal";
import Navbar from "@/pages/home/components/Navbar";
import SEOHead from "../../../components/feature/SEOHead";
import BackToTop from "../../../components/feature/BackToTop";
import EmailGateModal from "../components/EmailGateModal";
import { track } from "../../../lib/analytics";
import { resources } from "../page";
import {
	CheckCircleIcon,
	CheckIcon,
	ClockIcon,
	DownloadIcon,
	FilePdfIcon,
	FileXIcon,
	FlameIcon,
	LinkedinLogoIcon,
	LinkIcon,
	ListBulletsIcon,
	LockIcon,
	LockOpenIcon,
	ShieldCheckIcon,
	XLogoIcon,
} from "@phosphor-icons/react";

const Footer = lazy(() => import("@/pages/home/components/Footer"));

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://verifyafrica.io";

export default function ResourceDetailPage() {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();
	const { openDemo } = useDemoModal();
	const [isUnlocked, setIsUnlocked] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [copiedLink, setCopiedLink] = useState(false);

	const resource = resources.find((r) => r.id === id);

	useEffect(() => {
		if (!resource) return;
		const stored = localStorage.getItem("verifyafrica_unlocked");
		if (stored) {
			try {
				const unlocked = JSON.parse(stored);
				setIsUnlocked(unlocked.includes(resource.id));
			} catch {
				setIsUnlocked(false);
			}
		}
		track("resource_viewed", {
			resource_id: resource.id,
			resource_title: resource.title,
		});
	}, [resource]);

	if (!resource) {
		return (
			<div className="min-h-screen bg-gray-50 flex items-center justify-center">
				<div className="text-center">
					<div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
						<FileXIcon className="text-2xl text-gray-400" />
					</div>
					<h1 className="text-xl font-bold text-secondary mb-2">
						Resource Not Found
					</h1>
					<p className="text-gray-500 mb-6">
						This resource does not exist or has been moved.
					</p>
					<button
						onClick={() => navigate("/resources")}
						className="px-6 py-2.5 bg-teal-500 text-white text-sm font-medium rounded-lg hover:bg-teal-600 transition-all cursor-pointer"
					>
						Browse All Resources
					</button>
				</div>
			</div>
		);
	}

	const isPdfResource = !!resource.pdfUrl;
	const pageUrl = `${SITE_URL}/resources/${resource.id}`;

	const handleUnlock = (resourceId: string, email: string) => {
		const domain = email.split("@")[1] || "unknown";
		track("resource_unlocked", {
			resource_id: resourceId,
			resource_title: resource.title,
			email_domain: domain,
		});
		setIsUnlocked(true);
		setIsModalOpen(false);
		const stored = JSON.parse(
			localStorage.getItem("verifyafrica_unlocked") || "[]",
		);
		if (!stored.includes(resourceId)) {
			stored.push(resourceId);
			localStorage.setItem("verifyafrica_unlocked", JSON.stringify(stored));
		}
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

	const handleShare = (channel: "linkedin" | "twitter" | "copy_link") => {
		track("resource_shared", {
			resource_id: resource.id,
			resource_title: resource.title,
			channel,
		});

		const text = encodeURIComponent(
			`Check out this free compliance resource: ${resource.title}`,
		);
		const url = encodeURIComponent(pageUrl);

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
			navigator.clipboard.writeText(pageUrl).then(() => {
				setCopiedLink(true);
				setTimeout(() => setCopiedLink(false), 2000);
			});
		}
	};

	const schema = [
		{
			"@context": "https://schema.org",
			"@type": "Article",
			"@id": `${pageUrl}#article`,
			headline: resource.title,
			description: resource.description,
			url: pageUrl,
			inLanguage: "en",
			isPartOf: { "@id": `${SITE_URL}/#website` },
			about: { "@id": `${SITE_URL}/#organization` },
			dateModified:
				resource.dateAdded || new Date().toISOString().split("T")[0],
			publisher: { "@id": `${SITE_URL}/#organization` },
			author: { "@type": "Organization", name: "VerifyAfrica", url: SITE_URL },
			mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
		},
		{
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			"@id": `${pageUrl}#breadcrumb`,
			itemListElement: [
				{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
				{
					"@type": "ListItem",
					position: 2,
					name: "Resources",
					item: `${SITE_URL}/resources`,
				},
				{
					"@type": "ListItem",
					position: 3,
					name: resource.title,
					item: pageUrl,
				},
			],
		},
	];

	return (
		<div className="min-h-screen bg-gray-50">
			<SEOHead
				title={`${resource.title} | VerifyAfrica Resources`}
				description={resource.description}
				keywords={`${resource.title.toLowerCase()}, compliance resource africa, ${resource.category.toLowerCase()}, african fintech compliance, verifyafrica`}
				canonical={`/resources/${resource.id}`}
				image="https://readdy.ai/api/search-image?query=professional%20compliance%20resource%20document%20guide%20teal%20emerald%20color%20scheme%20clean%20modern%20corporate%20illustration%20minimal%20background&width=1200&height=630&seq=og-resource-detail&orientation=landscape"
				twitterCard="summary_large_image"
				schema={schema}
			/>
			<Navbar
				onRequestDemo={openDemo}
				variant="solid"
			/>

			{/* Hero Section */}
			<section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-gradient-to-br from-teal-50 via-emerald-50 to-white">
				<div className="max-w-4xl mx-auto px-6">
					<div className="flex items-start gap-4 mb-6">
						<div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center shrink-0">
							<resource.icon
								className="text-3xl text-teal-600"
								aria-hidden
							/>
						</div>
						<div>
							<div className="flex items-center gap-2 mb-2">
								{resource.isNew && (
									<span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full flex items-center gap-1">
										<FlameIcon />
										Recently Added
									</span>
								)}
								<span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
									{resource.category}
								</span>
							</div>
							<h1 className="text-2xl md:text-4xl font-bold text-secondary leading-tight">
								{resource.title}
							</h1>
						</div>
					</div>

					<p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-3xl">
						{resource.description}
					</p>

					<div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8">
						<span className="flex items-center gap-1">
							<ClockIcon />
							{resource.readTime}
						</span>
						<span className="flex items-center gap-1">
							<ListBulletsIcon />
							{resource.pages}
						</span>
						{isPdfResource && (
							<span className="flex items-center gap-1 text-teal-600">
								<FilePdfIcon />
								PDF Download
							</span>
						)}
					</div>

					{/* Share Buttons */}
					<div className="flex items-center gap-3">
						<span className="text-sm text-gray-500">Share this resource:</span>
						<button
							onClick={() => handleShare("linkedin")}
							className="px-4 py-2 bg-[#0077b5] text-white text-sm font-medium rounded-lg hover:bg-[#006396] transition-all cursor-pointer flex items-center gap-2"
						>
							<LinkedinLogoIcon />
							LinkedIn
						</button>
						<button
							onClick={() => handleShare("twitter")}
							className="px-4 py-2 bg-secondary text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-all cursor-pointer flex items-center gap-2"
						>
							<XLogoIcon />X
						</button>
						<button
							onClick={() => handleShare("copy_link")}
							className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-teal-50 hover:text-teal-600 transition-all cursor-pointer flex items-center gap-2 relative"
						>
							{copiedLink ? <CheckIcon /> : <LinkIcon />}
							{copiedLink ? "Copied!" : "Copy Link"}
						</button>
					</div>
				</div>
			</section>

			{/* Content Section */}
			<section className="py-12 md:py-16">
				<div className="max-w-4xl mx-auto px-6">
					<div className="grid lg:grid-cols-[1fr_320px] gap-10">
						{/* Main Content */}
						<div>
							{/* Teaser Content */}
							<div className="bg-white rounded-xl border border-gray-100 p-6 md:p-8 mb-6">
								<h2 className="text-lg font-bold text-secondary mb-4">
									What You Will Learn
								</h2>
								<ul className="space-y-3">
									{resource.teaserContent.map((item, index) => (
										<li
											key={index}
											className="flex items-start gap-3 text-gray-600"
										>
											<div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
												<CheckIcon className="text-teal-600 text-sm" />
											</div>
											<span className="leading-relaxed">{item}</span>
										</li>
									))}
								</ul>
							</div>

							{/* Gated Content or Unlock CTA */}
							{isUnlocked ? (
								isPdfResource ? (
									<div className="bg-emerald-50 rounded-xl border border-emerald-100 p-6 md:p-8">
										<div className="flex items-center gap-3 mb-4">
											<div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
												<LockOpenIcon className="text-2xl text-emerald-600" />
											</div>
											<div>
												<h3 className="text-lg font-bold text-secondary">
													PDF Unlocked
												</h3>
												<p className="text-sm text-gray-500">
													Your download is ready
												</p>
											</div>
										</div>
										<p className="text-gray-600 mb-6 leading-relaxed">
											You now have full access to the complete PDF. Click below
											to download or view the document.
										</p>
										<button
											onClick={handleDownload}
											className="w-full py-3.5 bg-emerald-500 text-white text-sm font-medium rounded-lg hover:bg-emerald-600 transition-all cursor-pointer flex items-center justify-center gap-2"
										>
											<DownloadIcon />
											Download PDF
										</button>
									</div>
								) : (
									<div className="bg-emerald-50 rounded-xl border border-emerald-100 p-6 md:p-8">
										<div className="flex items-center gap-3 mb-4">
											<div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
												<LockOpenIcon className="text-2xl text-emerald-600" />
											</div>
											<div>
												<h3 className="text-lg font-bold text-secondary">
													Full Content Unlocked
												</h3>
												<p className="text-sm text-gray-500">
													All actionable items are now visible
												</p>
											</div>
										</div>
										<ul className="space-y-3">
											{resource.gatedContent?.map((item, index) => (
												<li
													key={index}
													className="flex items-start gap-3 text-gray-700"
												>
													<div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
														<CheckCircleIcon className="text-emerald-600 text-sm" />
													</div>
													<span className="leading-relaxed">{item}</span>
												</li>
											))}
										</ul>
									</div>
								)
							) : (
								<div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl border border-teal-100 p-6 md:p-8">
									<div className="flex items-center gap-3 mb-4">
										<div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
											<LockIcon className="text-2xl text-teal-600" />
										</div>
										<div>
											<h3 className="text-lg font-bold text-secondary">
												{isPdfResource
													? "PDF Download Locked"
													: "Full Content Locked"}
											</h3>
											<p className="text-sm text-gray-500">
												Enter your company email to unlock
											</p>
										</div>
									</div>
									<p className="text-gray-600 mb-6 leading-relaxed">
										{isPdfResource
											? "The complete PDF is available for download. Enter your company email address to get instant access to the full document."
											: "The actionable checklist, templates, and implementation guides are locked. Enter your company email to unlock the complete resource."}
									</p>
									<button
										onClick={() => setIsModalOpen(true)}
										className="w-full py-3.5 bg-teal-500 text-white text-sm font-medium rounded-lg hover:bg-teal-600 transition-all cursor-pointer flex items-center justify-center gap-2 group"
									>
										<LockOpenIcon />
										{isPdfResource
											? "Unlock PDF Download"
											: "Unlock Full Resource"}
									</button>
									<div className="flex items-center justify-center gap-4 text-xs text-gray-400 mt-4">
										<span className="flex items-center gap-1">
											<CheckIcon className="text-teal-500" />
											No spam
										</span>
										<span className="flex items-center gap-1">
											<CheckIcon className="text-teal-500" />
											Company emails only
										</span>
										<span className="flex items-center gap-1">
											<CheckIcon className="text-teal-500" />
											Instant access
										</span>
									</div>
								</div>
							)}
						</div>

						{/* Sidebar */}
						<div className="hidden lg:block">
							<div className="sticky top-28 space-y-6">
								{/* Related Resources */}
								<div className="bg-white rounded-xl border border-gray-100 p-6">
									<h3 className="text-sm font-bold text-secondary mb-4">
										More Resources
									</h3>
									<ul className="space-y-3">
										{resources
											.filter((r) => r.id !== resource.id)
											.slice(0, 4)
											.map((r) => (
												<li key={r.id}>
													<button
														onClick={() => navigate(`/resources/${r.id}`)}
														className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer text-left w-full"
													>
														<div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center shrink-0">
															<i
																className={`${r.icon} text-teal-600 text-sm`}
															/>
														</div>
														<div>
															<p className="text-sm font-medium text-gray-800 hover:text-teal-700 transition-colors leading-snug">
																{r.title}
															</p>
															<p className="text-xs text-gray-400 mt-0.5">
																{r.category}
															</p>
														</div>
													</button>
												</li>
											))}
									</ul>
								</div>

								{/* CTA */}
								<div className="bg-teal-50 rounded-xl p-6">
									<div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mb-3">
										<ShieldCheckIcon className="text-teal-600" />
									</div>
									<h3 className="text-sm font-bold text-secondary mb-2">
										Need Help Implementing?
									</h3>
									<p className="text-xs text-gray-500 mb-4 leading-relaxed">
										Our compliance team can help you put these frameworks into
										practice across your target markets.
									</p>
									<button
										onClick={openDemo}
										className="w-full py-2.5 bg-teal-500 text-white text-sm font-medium rounded-lg hover:bg-teal-600 transition-all cursor-pointer"
									>
										Request a Demo
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Suspense fallback={null}>
				<Footer />
			</Suspense>
			<BackToTop />

			<EmailGateModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				resourceTitle={resource.title}
				resourceId={resource.id}
				onUnlock={handleUnlock}
			/>
		</div>
	);
}
