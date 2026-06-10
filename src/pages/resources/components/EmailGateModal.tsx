import { useState, useEffect } from "react";
import {
	CheckIcon,
	CircleNotchIcon,
	LockOpenIcon,
	WarningIcon,
	X,
} from "@phosphor-icons/react";

interface EmailGateModalProps {
	isOpen: boolean;
	onClose: () => void;
	resourceTitle: string;
	resourceId: string;
	onUnlock: (resourceId: string, email: string) => void;
}

const FREE_EMAIL_DOMAINS = [
	"gmail.com",
	"yahoo.com",
	"hotmail.com",
	"outlook.com",
	"aol.com",
	"icloud.com",
	"mail.com",
	"protonmail.com",
	"yandex.com",
	"zoho.com",
	"live.com",
	"msn.com",
	"qq.com",
	"163.com",
	"126.com",
	"foxmail.com",
	"gmx.com",
	"gmx.net",
	"hey.com",
	"me.com",
	"mac.com",
	"pm.me",
	"tutanota.com",
	"fastmail.com",
];

export default function EmailGateModal({
	isOpen,
	onClose,
	resourceTitle,
	resourceId,
	onUnlock,
}: EmailGateModalProps) {
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	useEffect(() => {
		if (isOpen) {
			setEmail("");
			setError("");
			setIsSubmitting(false);
			setIsSuccess(false);
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	const validateEmail = (value: string): string | null => {
		if (!value.trim()) return "Please enter your email address";
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(value)) return "Please enter a valid email address";
		const domain = value.split("@")[1]?.toLowerCase();
		if (!domain) return "Invalid email address";
		if (FREE_EMAIL_DOMAINS.includes(domain)) {
			return "Please use your company email address (Gmail, Yahoo, etc. are not accepted)";
		}
		return null;
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const validationError = validateEmail(email);
		if (validationError) {
			setError(validationError);
			return;
		}

		setIsSubmitting(true);
		setError("");

		try {
			const formData = new URLSearchParams();
			formData.append("email", email);
			formData.append("resource", resourceTitle);
			formData.append("resource_id", resourceId);

			const response = await fetch(
				"https://readdy.ai/api/form/d7phe8vhqnrhtnv4fihg",
				{
					method: "POST",
					headers: { "Content-Type": "application/x-www-form-urlencoded" },
					body: formData.toString(),
				},
			);

			if (response.ok) {
				setIsSuccess(true);
				onUnlock(resourceId, email);
				// Store in localStorage
				const unlocked = JSON.parse(
					localStorage.getItem("verifyafrica_unlocked") || "[]",
				);
				if (!unlocked.includes(resourceId)) {
					unlocked.push(resourceId);
					localStorage.setItem(
						"verifyafrica_unlocked",
						JSON.stringify(unlocked),
					);
				}
			} else {
				setError("Something went wrong. Please try again.");
			}
		} catch {
			setError("Network error. Please check your connection and try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
			<div
				className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm"
				onClick={onClose}
			/>
			<div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
				{/* Header */}
				<div className="bg-gradient-to-r from-teal-500 to-emerald-500 px-6 py-5">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-3">
							<div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
								<LockOpenIcon className="size-5 text-white" />
							</div>
							<div>
								<h3 className="text-white font-semibold text-sm">
									Unlock Full Resource
								</h3>
								<p className="text-white/80 text-xs truncate max-w-[200px]">
									{resourceTitle}
								</p>
							</div>
						</div>
						<button
							onClick={onClose}
							className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors cursor-pointer"
						>
							<X className="size-5" />
						</button>
					</div>
				</div>

				{/* Body */}
				<div className="px-6 py-6">
					{!isSuccess ? (
						<form
							onSubmit={handleSubmit}
							data-readdy-form
							id={`lead-form-${resourceId}`}
						>
							<p className="text-gray-600 text-sm mb-5 leading-relaxed">
								Enter your company email to unlock the complete actionable
								checklist, framework, and step-by-step implementation guide.
							</p>

							<div className="mb-4">
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Work Email Address
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={email}
									onChange={(e) => {
										setEmail(e.target.value);
										if (error) setError("");
									}}
									placeholder="you@company.com"
									className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
									disabled={isSubmitting}
								/>
								{error && (
									<p className="mt-2 text-xs text-red-600 flex items-center gap-1">
										<WarningIcon />
										{error}
									</p>
								)}
							</div>

							<button
								type="submit"
								disabled={isSubmitting}
								className="w-full py-3 bg-teal-500 text-white text-sm font-medium rounded-lg hover:bg-teal-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2"
							>
								{isSubmitting ? (
									<>
										<CircleNotchIcon className="animate-spin" />
										Unlocking...
									</>
								) : (
									<>
										<LockOpenIcon />
										Unlock Resource
									</>
								)}
							</button>

							<p className="mt-4 text-xs text-gray-400 text-center">
								We respect your privacy. No spam, unsubscribe anytime.
							</p>
						</form>
					) : (
						<div className="text-center py-4">
							<div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<CheckIcon className="text-3xl text-emerald-600" />
							</div>
							<h4 className="text-lg font-semibold text-secondary mb-2">
								Resource Unlocked!
							</h4>
							<p className="text-sm text-gray-600 mb-6">
								You now have full access to the complete guide. Scroll down to
								view the actionable content.
							</p>
							<button
								onClick={onClose}
								className="px-6 py-2.5 bg-teal-500 text-white text-sm font-medium rounded-lg hover:bg-teal-600 transition-all cursor-pointer"
							>
								View Content
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
