import { useState, FormEvent, useEffect } from "react";
import { track } from "@/lib/analytics";
import {
	ArrowRightIcon,
	CalendarIcon,
	CheckIcon,
	LockIcon,
	XIcon,
} from "@phosphor-icons/react";

interface DemoRequestFormProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function DemoRequestForm({
	isOpen,
	onClose,
}: DemoRequestFormProps) {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [errors, setErrors] = useState<Record<string, string>>({});

	// Fire once when the modal opens
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
			track("demo_modal_opened", { source: "demo_request_form" });
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	const validate = (form: HTMLFormElement) => {
		const newErrors: Record<string, string> = {};
		const data = new FormData(form);
		if (!data.get("first_name"))
			newErrors.first_name = "First name is required";
		if (!data.get("last_name")) newErrors.last_name = "Last name is required";
		const emailVal = data.get("email") as string;
		const blockedDomains = [
			"gmail.com",
			"yahoo.com",
			"yahoo.co.uk",
			"yahoo.co.in",
			"yahoo.fr",
			"yahoo.de",
			"hotmail.com",
			"hotmail.co.uk",
			"hotmail.fr",
			"outlook.com",
			"live.com",
			"msn.com",
			"aol.com",
			"icloud.com",
			"me.com",
			"mac.com",
			"protonmail.com",
			"proton.me",
			"pm.me",
			"tutanota.com",
			"tutamail.com",
			"zoho.com",
			"yandex.com",
			"yandex.ru",
			"mail.com",
			"mail.ru",
			"gmx.com",
			"gmx.net",
			"gmx.de",
			"web.de",
			"inbox.com",
			"fastmail.com",
			"hushmail.com",
			"rediffmail.com",
			"lycos.com",
			"rocketmail.com",
			"att.net",
			"verizon.net",
			"comcast.net",
			"sbcglobal.net",
		];
		if (!emailVal || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
			newErrors.email = "Valid work email is required";
		} else {
			const domain = emailVal.split("@")[1]?.toLowerCase();
			if (blockedDomains.includes(domain)) {
				newErrors.email =
					"Please use your company email address (personal emails like Gmail or Yahoo are not accepted)";
			}
		}
		if (!data.get("company")) newErrors.company = "Company name is required";
		if (!data.get("company_size"))
			newErrors.company_size = "Please select company size";
		const message = data.get("message") as string;
		if (message && message.length > 500)
			newErrors.message = "Message must be under 500 characters";
		return newErrors;
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const validationErrors = validate(form);
		setErrors(validationErrors);
		if (Object.keys(validationErrors).length > 0) return;

		setIsSubmitting(true);
		const formData = new FormData(form);

		// Build email content
		const firstName = formData.get("first_name") as string;
		const lastName = formData.get("last_name") as string;
		const email = formData.get("email") as string;
		const company = formData.get("company") as string;
		const companySize = formData.get("company_size") as string;
		const industry = formData.get("industry") as string;
		const phone = formData.get("phone") as string;
		const message = formData.get("message") as string;

		// Track successful submission before opening email client
		track("demo_form_submitted", {
			company_size: companySize,
			industry: industry || "Not specified",
			has_phone: Boolean(phone),
		});

		const subject = encodeURIComponent(
			`Demo Request from ${firstName} ${lastName} - ${company}`,
		);
		const body = encodeURIComponent(
			`New Demo Request

Contact Information:
- Name: ${firstName} ${lastName}
- Email: ${email}
- Phone: ${phone || "Not provided"}

Company Details:
- Company: ${company}
- Company Size: ${companySize}
- Industry: ${industry || "Not specified"}

Message:
${message || "No additional message provided"}

---
This demo request was submitted via the VerifyAfrica website.`,
		);

		// Open email client
		window.location.href = `mailto:sales@verifyafrica.io?subject=${subject}&body=${body}`;

		setTimeout(() => {
			setIsSubmitting(false);
			setIsSubmitted(true);
		}, 500);
	};

	const handleClose = () => {
		onClose();
		setTimeout(() => {
			setIsSubmitted(false);
			setErrors({});
		}, 300);
	};

	const inputBase =
		"w-full px-4 py-3 text-sm bg-white border rounded-md outline-none transition-all duration-200 focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 placeholder:text-gray-400";
	const labelBase = "block text-sm font-medium text-gray-700 mb-1.5";

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-[100] flex items-center justify-center">
			{/* Backdrop */}
			<div
				className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
				onClick={handleClose}
			></div>

			{/* Modal */}
			<div className="relative w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl animate-fadeIn">
				{/* Close button */}
				<button
					onClick={handleClose}
					className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer z-10"
				>
					<XIcon className="text-lg text-gray-600" />
				</button>

				<div className="p-8">
					{isSubmitted ? (
						<div className="text-center py-12">
							<div className="w-16 h-16 flex items-center justify-center bg-teal-100 rounded-full mx-auto mb-5">
								<CheckIcon className="text-3xl text-teal-600" />
							</div>
							<h3 className="text-xl font-bold text-secondary mb-2">
								Demo Request Received!
							</h3>
							<p className="text-sm text-gray-500 max-w-sm mx-auto mb-6">
								Thank you for your interest. Our team will reach out within 24
								hours to schedule your personalized demo.
							</p>
							<button
								onClick={handleClose}
								className="px-6 py-2.5 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-700 transition-colors cursor-pointer whitespace-nowrap"
							>
								Close
							</button>
						</div>
					) : (
						<>
							<div className="mb-6">
								<div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-semibold tracking-wide uppercase mb-4">
									<span className="w-4 h-4 flex items-center justify-center mr-1.5">
										<CalendarIcon className="text-sm" />
									</span>
									Schedule a Demo
								</div>
								<h3 className="text-2xl font-bold text-secondary mb-2">
									See VerifyAfrica in Action
								</h3>
								<p className="text-sm text-gray-500">
									Get a personalized walkthrough of our identity verification
									platform.
								</p>
							</div>

							<form
								id="demo-request-form"
								data-readdy-form
								onSubmit={handleSubmit}
								className="space-y-4"
							>
								{/* Name Row */}
								<div className="grid grid-cols-2 gap-4">
									<div>
										<label
											htmlFor="first_name"
											className={labelBase}
										>
											First Name *
										</label>
										<input
											type="text"
											id="first_name"
											name="first_name"
											placeholder="John"
											className={`${inputBase} ${errors.first_name ? "border-red-400 focus:ring-red-200 focus:border-red-400" : "border-gray-200"}`}
										/>
										{errors.first_name && (
											<p className="text-xs text-red-500 mt-1">
												{errors.first_name}
											</p>
										)}
									</div>
									<div>
										<label
											htmlFor="last_name"
											className={labelBase}
										>
											Last Name *
										</label>
										<input
											type="text"
											id="last_name"
											name="last_name"
											placeholder="Doe"
											className={`${inputBase} ${errors.last_name ? "border-red-400 focus:ring-red-200 focus:border-red-400" : "border-gray-200"}`}
										/>
										{errors.last_name && (
											<p className="text-xs text-red-500 mt-1">
												{errors.last_name}
											</p>
										)}
									</div>
								</div>

								{/* Email */}
								<div>
									<label
										htmlFor="email"
										className={labelBase}
									>
										Work Email *
									</label>
									<input
										type="email"
										id="email"
										name="email"
										placeholder="john@company.com"
										className={`${inputBase} ${errors.email ? "border-red-400 focus:ring-red-200 focus:border-red-400" : "border-gray-200"}`}
									/>
									{errors.email && (
										<p className="text-xs text-red-500 mt-1">{errors.email}</p>
									)}
								</div>

								{/* Company */}
								<div>
									<label
										htmlFor="company"
										className={labelBase}
									>
										Company Name *
									</label>
									<input
										type="text"
										id="company"
										name="company"
										placeholder="Acme Inc."
										className={`${inputBase} ${errors.company ? "border-red-400 focus:ring-red-200 focus:border-red-400" : "border-gray-200"}`}
									/>
									{errors.company && (
										<p className="text-xs text-red-500 mt-1">
											{errors.company}
										</p>
									)}
								</div>

								{/* Company Size & Industry */}
								<div className="grid grid-cols-2 gap-4">
									<div>
										<label
											htmlFor="company_size"
											className={labelBase}
										>
											Company Size *
										</label>
										<select
											id="company_size"
											name="company_size"
											defaultValue=""
											className={`${inputBase} cursor-pointer ${errors.company_size ? "border-red-400 focus:ring-red-200 focus:border-red-400" : "border-gray-200"}`}
										>
											<option
												value=""
												disabled
											>
												Select...
											</option>
											<option value="1-10">1–10</option>
											<option value="11-50">11–50</option>
											<option value="51-200">51–200</option>
											<option value="201-500">201–500</option>
											<option value="500+">500+</option>
										</select>
										{errors.company_size && (
											<p className="text-xs text-red-500 mt-1">
												{errors.company_size}
											</p>
										)}
									</div>
									<div>
										<label
											htmlFor="industry"
											className={labelBase}
										>
											Industry
										</label>
										<select
											id="industry"
											name="industry"
											defaultValue=""
											className={`${inputBase} border-gray-200 cursor-pointer`}
										>
											<option
												value=""
												disabled
											>
												Select...
											</option>
											<option value="Fintech">Fintech</option>
											<option value="Banking">Banking</option>
											<option value="Insurance">Insurance</option>
											<option value="Telecom">Telecom</option>
											<option value="Crypto">Crypto / Web3</option>
											<option value="Lending">Lending</option>
											<option value="Other">Other</option>
										</select>
									</div>
								</div>

								{/* Phone */}
								<div>
									<label
										htmlFor="phone"
										className={labelBase}
									>
										Phone Number
									</label>
									<input
										type="tel"
										id="phone"
										name="phone"
										placeholder="+234 800 000 0000"
										className={`${inputBase} border-gray-200`}
									/>
								</div>

								{/* Message */}
								<div>
									<label
										htmlFor="message"
										className={labelBase}
									>
										What are you looking to verify?
									</label>
									<textarea
										id="message"
										name="message"
										rows={3}
										maxLength={500}
										placeholder="Tell us about your verification needs..."
										className={`${inputBase} resize-none border-gray-200 ${errors.message ? "border-red-400 focus:ring-red-200 focus:border-red-400" : ""}`}
									></textarea>
									{errors.message && (
										<p className="text-xs text-red-500 mt-1">
											{errors.message}
										</p>
									)}
								</div>

								{/* Submit */}
								<button
									type="submit"
									disabled={isSubmitting}
									className="w-full py-3.5 bg-teal-600 text-white text-sm font-semibold rounded-lg hover:bg-teal-700 transition-all duration-200 hover:shadow-lg hover:shadow-teal-600/20 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap flex items-center justify-center gap-2 cursor-pointer"
								>
									{isSubmitting ? (
										<>
											<span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
											Submitting...
										</>
									) : (
										<>
											Request a Demo
											<ArrowRightIcon className="text-base" />
										</>
									)}
								</button>

								<p className="text-xs text-gray-400 text-center flex items-center justify-center gap-1.5">
									<span className="w-3.5 h-3.5 flex items-center justify-center">
										<LockIcon className="text-xs" />
									</span>
									Your information is secure and encrypted. By submitting, you
									agree to our{" "}
									<a
										href="/privacy-policy"
										target="_blank"
										rel="noopener noreferrer"
										className="underline underline-offset-2 hover:text-teal-500 transition-colors cursor-pointer"
									>
										Privacy Policy
									</a>
									.
								</p>
							</form>
						</>
					)}
				</div>
			</div>

			<style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
		</div>
	);
}
