import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie } from "lucide-react";

type ConsentStatus = "accepted" | "declined" | null;

const STORAGE_KEY = "va_cookie_consent";

export default function CookieConsentBanner() {
	const [status, setStatus] = useState<ConsentStatus>(null);
	const [visible, setVisible] = useState(false);
	const [isExiting, setIsExiting] = useState(false);

	useEffect(() => {
		const stored = localStorage.getItem(STORAGE_KEY) as ConsentStatus | null;
		if (stored === "accepted" || stored === "declined") {
			setStatus(stored);
			return;
		}
		// Small delay so it doesn't flash before page renders
		const t = setTimeout(() => setVisible(true), 1200);
		return () => clearTimeout(t);
	}, []);

	const handleDecision = (decision: "accepted" | "declined") => {
		setIsExiting(true);
		setTimeout(() => {
			localStorage.setItem(STORAGE_KEY, decision);
			setStatus(decision);
			setVisible(false);
			setIsExiting(false);
		}, 400);
	};

	if (status !== null || !visible) return null;

	return (
		<div
			className={`fixed bottom-0 left-0 right-0 z-[9999] transition-transform duration-500 ease-out ${
				isExiting ? "translate-y-full" : "translate-y-0"
			}`}
			role="dialog"
			aria-label="Cookie consent"
			aria-live="polite"
		>
			{/* Backdrop gradient for readability */}
			<div className="bg-white border-t border-gray-200 shadow-2xl shadow-black/10">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 lg:py-5">
					<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-8">
						{/* Cookie icon */}
						<div className="hidden lg:flex w-10 h-10 flex-shrink-0 items-center justify-center rounded-full bg-teal-50 border border-teal-100">
							<Cookie className="text-teal-600 text-lg" />
						</div>

						{/* Message */}
						<div className="flex-1 min-w-0">
							<p className="text-sm text-gray-700 leading-relaxed">
								<span className="font-semibold text-secondary">
									We use cookies
								</span>{" "}
								to improve your experience, analyse site traffic, and
								personalise content. By clicking{" "}
								<strong className="text-teal-700">"Accept All"</strong> you
								consent to our use of cookies. You can choose{" "}
								<strong>"Reject Non-Essential"</strong> to only allow strictly
								necessary cookies.{" "}
								<Link
									to="/cookie-policy"
									className="text-teal-600 hover:text-teal-700 underline underline-offset-2 font-medium whitespace-nowrap"
								>
									Cookie Policy
								</Link>
							</p>
						</div>

						{/* Action buttons */}
						<div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 w-full sm:w-auto">
							<button
								onClick={() => handleDecision("declined")}
								className="flex-1 sm:flex-none px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:border-gray-400 hover:text-gray-800 transition-colors whitespace-nowrap cursor-pointer"
							>
								Reject Non-Essential
							</button>
							<button
								onClick={() => handleDecision("accepted")}
								className="flex-1 sm:flex-none px-5 py-2 text-sm font-semibold text-white bg-teal-600 rounded-lg hover:bg-teal-700 active:bg-teal-800 transition-colors whitespace-nowrap cursor-pointer shadow-sm"
							>
								Accept All
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
