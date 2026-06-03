import { Mail, Phone } from "lucide-react";

export default function ContactInfo() {
	return (
		<section className="py-20 bg-gray-50">
			<div className="max-w-7xl mx-auto px-6 lg:px-12">
				<div className="grid md:grid-cols-2 gap-8">
					<div className="bg-white p-8 rounded-xl shadow-sm">
						<div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-lg mb-4">
							<Mail className="text-2xl text-teal-600" />
						</div>
						<h3 className="text-lg font-semibold text-secondary mb-2">
							Email Us
						</h3>
						<p className="text-sm text-gray-600 mb-4">
							Our team typically responds within 24 hours
						</p>
						<a
							href="mailto:support@verifyafrica.io"
							className="text-sm text-teal-600 hover:text-teal-700 font-medium"
						>
							support@verifyafrica.io
						</a>
					</div>

					<div className="bg-white p-8 rounded-xl shadow-sm">
						<div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-lg mb-4">
							<Phone className="text-2xl text-teal-600" />
						</div>
						<h3 className="text-lg font-semibold text-secondary mb-2">
							Call Us
						</h3>
						<p className="text-sm text-gray-600 mb-4">
							Monday to Friday, 9am to 6pm WAT
						</p>
						<a
							href="tel:+35795981879"
							className="text-sm text-teal-600 hover:text-teal-700 font-medium"
						>
							+35795981879
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
