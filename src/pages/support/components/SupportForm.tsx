import { useState } from "react";

export default function SupportForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		priority: "",
		category: "",
		subject: "",
		description: "",
	});
	const [status, setStatus] = useState<
		"idle" | "submitting" | "success" | "error"
	>("idle");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus("submitting");

		try {
			const formBody = new URLSearchParams();
			Object.entries(formData).forEach(([key, value]) => {
				formBody.append(key, value);
			});

			const response = await fetch(
				"https://readdy.ai/api/form/d7phe8vhqnrhtnv4fih0",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
					},
					body: formBody.toString(),
				},
			);

			if (response.ok) {
				setStatus("success");
				setFormData({
					name: "",
					email: "",
					priority: "",
					category: "",
					subject: "",
					description: "",
				});
				setTimeout(() => setStatus("idle"), 5000);
			} else {
				setStatus("error");
				setTimeout(() => setStatus("idle"), 5000);
			}
		} catch (error) {
			setStatus("error");
			setTimeout(() => setStatus("idle"), 5000);
		}
	};

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<section className="py-20 bg-white">
			<div className="max-w-4xl mx-auto px-6 lg:px-12">
				<div className="mb-12 text-center">
					<h2 className="text-3xl font-bold text-secondary mb-4">
						Submit a Support Request
					</h2>
					<p className="text-gray-600">
						Fill out the form below and our team will respond as soon as
						possible
					</p>
				</div>

				<form
					id="support-form"
					data-readdy-form
					onSubmit={handleSubmit}
					className="space-y-6"
				>
					<div className="grid md:grid-cols-2 gap-6">
						<div>
							<label
								htmlFor="name"
								className="block text-sm font-medium text-gray-700 mb-2"
							>
								Full Name *
							</label>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								required
								className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
								placeholder="John Doe"
							/>
						</div>

						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700 mb-2"
							>
								Email Address *
							</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								required
								className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
								placeholder="john@company.com"
							/>
						</div>
					</div>

					<div className="grid md:grid-cols-2 gap-6">
						<div>
							<label
								htmlFor="priority"
								className="block text-sm font-medium text-gray-700 mb-2"
							>
								Priority Level *
							</label>
							<select
								id="priority"
								name="priority"
								value={formData.priority}
								onChange={handleChange}
								required
								className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
							>
								<option value="">Select priority</option>
								<option value="Low">Low</option>
								<option value="Medium">Medium</option>
								<option value="High">High</option>
								<option value="Critical">Critical</option>
							</select>
						</div>

						<div>
							<label
								htmlFor="category"
								className="block text-sm font-medium text-gray-700 mb-2"
							>
								Category *
							</label>
							<select
								id="category"
								name="category"
								value={formData.category}
								onChange={handleChange}
								required
								className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
							>
								<option value="">Select category</option>
								<option value="API Integration">API Integration</option>
								<option value="Technical Issue">Technical Issue</option>
								<option value="Billing">Billing</option>
								<option value="Account Access">Account Access</option>
								<option value="Feature Request">Feature Request</option>
								<option value="Other">Other</option>
							</select>
						</div>
					</div>

					<div>
						<label
							htmlFor="subject"
							className="block text-sm font-medium text-gray-700 mb-2"
						>
							Subject *
						</label>
						<input
							type="text"
							id="subject"
							name="subject"
							value={formData.subject}
							onChange={handleChange}
							required
							className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
							placeholder="Brief description of your issue"
						/>
					</div>

					<div>
						<label
							htmlFor="description"
							className="block text-sm font-medium text-gray-700 mb-2"
						>
							Description *
						</label>
						<textarea
							id="description"
							name="description"
							value={formData.description}
							onChange={handleChange}
							required
							maxLength={500}
							rows={6}
							className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm resize-none"
							placeholder="Please provide as much detail as possible about your issue..."
						></textarea>
						<p className="text-xs text-gray-500 mt-1">
							{formData.description.length}/500 characters
						</p>
					</div>

					{status === "success" && (
						<div className="p-4 bg-green-50 border border-green-200 rounded-lg">
							<p className="text-sm text-green-800">
								Your support request has been submitted successfully. We'll get
								back to you within 24 hours.
							</p>
						</div>
					)}

					{status === "error" && (
						<div className="p-4 bg-red-50 border border-red-200 rounded-lg">
							<p className="text-sm text-red-800">
								Something went wrong. Please try again later.
							</p>
						</div>
					)}

					<button
						type="submit"
						disabled={status === "submitting"}
						className="w-full px-8 py-4 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
					>
						{status === "submitting" ? "Submitting..." : "Submit Request"}
					</button>

					<p className="text-xs text-gray-400 text-center flex items-center justify-center gap-1.5">
						<span className="w-3.5 h-3.5 flex items-center justify-center">
							<Lock className="text-xs" />
						</span>
						Your information is secure and encrypted. By submitting, you agree
						to our{" "}
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
			</div>
		</section>
	);
}
