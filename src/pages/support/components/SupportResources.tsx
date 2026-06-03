import { CircleHelp, Users } from "lucide-react";

export default function SupportResources() {
	return (
		<section className="py-20 bg-gray-50">
			<div className="max-w-7xl mx-auto px-6 lg:px-12">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold text-secondary mb-4">
						Support Resources
					</h2>
					<p className="text-gray-600">
						Find answers and resources to help you get started
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-6">
					<a
						href="/support"
						className="bg-white p-6 rounded-xl border border-gray-100 hover:border-teal-200 hover:bg-teal-50/30 transition-colors cursor-pointer"
					>
						<div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-lg mb-4">
							<CircleHelp className="text-2xl text-teal-600" />
						</div>
						<h3 className="text-lg font-semibold text-secondary mb-2">FAQ</h3>
						<p className="text-sm text-gray-600">
							Quick answers to common questions
						</p>
					</a>

					<a
						href="/contact"
						className="bg-white p-6 rounded-xl border border-gray-100 hover:border-teal-200 hover:bg-teal-50/30 transition-colors cursor-pointer"
					>
						<div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-lg mb-4">
							<i className="ri-community-line text-2xl text-orange-600"></i>
						</div>
						<h3 className="text-lg font-semibold text-secondary mb-2">
							Community
						</h3>
						<p className="text-sm text-gray-600">
							Connect with other developers
						</p>
					</a>
				</div>
			</div>
		</section>
	);
}
