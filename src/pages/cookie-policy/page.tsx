import SEOHead from "../../components/feature/SEOHead";
import Footer from "@/pages/home/components/Footer";
import { useDemoModal } from "../../hooks/useDemoModal";
import Navbar from "../home/components/Navbar";
import { COOKIE_POLICY_SEO, DEFAULT_OG_IMAGE } from "@/constants/seo";
import { createLegalPageSchema } from "@/lib/schema";

const cookieSchema = createLegalPageSchema(
	COOKIE_POLICY_SEO.canonical,
	"Cookie Policy – VerifyAfrica",
	COOKIE_POLICY_SEO.description,
	"Cookie Policy",
);

export default function CookiePolicyPage() {
	const { openDemo } = useDemoModal();

	return (
		<div className="min-h-screen bg-white">
			<SEOHead
				title={COOKIE_POLICY_SEO.title}
				description={COOKIE_POLICY_SEO.description}
				canonical={COOKIE_POLICY_SEO.canonical}
				noIndex={COOKIE_POLICY_SEO.noIndex}
				imageAlt={COOKIE_POLICY_SEO.imageAlt}
				schema={cookieSchema}
				{...DEFAULT_OG_IMAGE}
			/>
			<Navbar
				onRequestDemo={openDemo}
				variant="solid"
			/>

			{/* Content */}
			<main className="max-w-4xl mx-auto px-6 pt-32 pb-12">
				{/* Title */}
				<div className="text-center mb-10">
					<h1 className="text-4xl font-bold text-secondary mb-3">
						Cookie Policy
					</h1>
					<p className="text-gray-500">Last Updated: January 8, 2026</p>
				</div>

				<hr className="border-gray-200 mb-10" />

				{/* Introduction */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						Introduction
					</h2>
					<p className="text-gray-600 leading-relaxed mb-4">
						This Cookie Policy explains how VerifyAfrica Inc. ("VerifyAfrica,"
						"we," "our," or "us") uses cookies and similar technologies on the
						website verifyafrica.io, in our web dashboards, API documentation
						portals, and any other online services that link to this notice
						(collectively, the "Site").
					</p>
					<p className="text-gray-600 leading-relaxed mb-4">
						VerifyAfrica is a Delaware-incorporated company and a wholly owned
						subsidiary of CJ Solutions Ltd, a Cyprus-based compliance and AML
						advisory group. Because of this cross-border structure, we follow
						not only U.S. law but also the European Union's General Data
						Protection Regulation (GDPR) and Nigeria's Data Protection
						Regulation (NDPR). This means we handle cookies and online
						identifiers in a way that respects user choice, data minimization,
						and transparency no matter where you visit us from.
					</p>
					<p className="text-gray-600 leading-relaxed">
						By continuing to browse our Site after seeing a cookie banner or
						notification, you consent to the use of cookies described here. If
						you do not agree, you can manage or disable cookies at any time
						using your browser settings or our cookie preferences tool.
					</p>
				</section>

				{/* What Cookies Are */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						What Cookies Are
					</h2>
					<p className="text-gray-600 leading-relaxed mb-4">
						Cookies are small text files that websites place on your device
						(computer, tablet, or phone) when you visit. They allow websites to
						recognize your device, remember your preferences, and improve your
						browsing experience. Some cookies are strictly necessary for a
						website to function, while others help analyze usage, personalize
						content, and deliver relevant communications.
					</p>
					<p className="text-gray-600 leading-relaxed">
						Similar technologies such as local storage, web beacons, pixels, and
						SDK event trackers may also be used for the same purposes. We refer
						to all of these collectively as "cookies" in this policy.
					</p>
				</section>

				{/* Why We Use Cookies */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						Why We Use Cookies
					</h2>
					<p className="text-gray-600 leading-relaxed mb-6">
						VerifyAfrica uses cookies to provide, secure, and improve our
						services. We group our cookie usage into several key purposes.
					</p>

					<h3 className="text-lg font-medium text-gray-800 mb-3">
						1. Essential Cookies
					</h3>
					<p className="text-gray-600 leading-relaxed mb-6">
						These cookies are required to make the Site work properly. They
						enable core functionality such as page navigation, form submissions,
						account login, session management, and security features. Without
						them, parts of the Site will not function correctly.
					</p>

					<h3 className="text-lg font-medium text-gray-800 mb-3">
						2. Analytics and Performance Cookies
					</h3>
					<p className="text-gray-600 leading-relaxed mb-6">
						We use analytics cookies to understand how visitors interact with
						verifyafrica.io — for example, which pages are visited most, where
						visitors come from, and how long they stay. This helps us improve
						performance, usability, and the relevance of our content. Where
						possible, we configure analytics to anonymize IP addresses and to
						respect "Do Not Track" signals.
					</p>

					<h3 className="text-lg font-medium text-gray-800 mb-3">
						3. Preference and Functionality Cookies
					</h3>
					<p className="text-gray-600 leading-relaxed mb-6">
						These cookies remember choices you make, such as language settings,
						cookie-consent selections, and dashboard display preferences. They
						allow the Site to deliver a more personal and consistent experience
						each time you visit.
					</p>

					<h3 className="text-lg font-medium text-gray-800 mb-3">
						4. Marketing and Communication Cookies
					</h3>
					<p className="text-gray-600 leading-relaxed">
						If we run limited campaigns or newsletters, these cookies help
						measure the effectiveness of our communications. They allow us to
						understand whether someone opened an email, visited a page, or
						expressed interest in a feature. We do not use invasive advertising
						networks or cross-site behavioral tracking.
					</p>
				</section>

				{/* Legal Basis for Using Cookies */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						Legal Basis for Using Cookies
					</h2>
					<p className="text-gray-600 leading-relaxed mb-4">
						Under GDPR and NDPR, the legal basis for using strictly necessary
						cookies is VerifyAfrica's legitimate interest in providing a
						functional, secure, and efficient website. For all other categories
						— such as analytics, preference, and marketing cookies — we rely on
						your consent, which you can give through our cookie banner or
						preferences tool.
					</p>
					<p className="text-gray-600 leading-relaxed mb-4">
						When you first visit verifyafrica.io, a cookie banner appears. By
						selecting "Accept All," you consent to our use of optional cookies.
						You can click "Manage Preferences" to choose specific categories or
						"Reject Non-Essential Cookies" to continue using the Site with only
						essential cookies active.
					</p>
					<p className="text-gray-600 leading-relaxed">
						Consent can be withdrawn or modified at any time via the "Cookie
						Settings" link in the footer of our Site. Withdrawal of consent will
						not affect cookies already necessary for basic operation.
					</p>
				</section>

				{/* Cookies Placed by Third Parties */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						Cookies Placed by Third Parties
					</h2>
					<p className="text-gray-600 leading-relaxed mb-4">
						Some cookies on our Site are placed by third-party providers we use
						to operate and analyze our platform. These may include cloud hosting
						services, analytics platforms, and customer support or live-chat
						tools. Each provider acts as a data processor on VerifyAfrica's
						behalf and is bound by a written agreement requiring compliance with
						GDPR and NDPR standards.
					</p>
					<p className="text-gray-600 leading-relaxed">
						Where third-party cookies are set directly by an external platform
						(for example, embedded videos or social-media buttons), those
						providers may act as independent controllers. In such cases, their
						own privacy and cookie policies apply, and we encourage you to
						review them for more information.
					</p>
				</section>

				{/* Managing Cookies and Your Choices */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						Managing Cookies and Your Choices
					</h2>
					<p className="text-gray-600 leading-relaxed mb-4">
						You can manage or delete cookies at any time by adjusting your
						browser settings. Most browsers let you block or delete cookies, or
						alert you when a site tries to place them. The following links
						provide guidance for popular browsers:
					</p>
					<ul className="list-disc list-inside text-gray-600 mb-4 space-y-2 ml-4">
						<li>Chrome: support.google.com/chrome</li>
						<li>Firefox: support.mozilla.org</li>
						<li>Safari: support.apple.com</li>
						<li>Edge: support.microsoft.com</li>
					</ul>
					<p className="text-gray-600 leading-relaxed mb-4">
						If you disable or delete cookies, some parts of the Site may not
						function as intended.
					</p>
					<p className="text-gray-600 leading-relaxed">
						EU and African visitors can also use our on-site cookie management
						panel to exercise granular control. If you withdraw consent, we
						immediately deactivate all non-essential cookies and remove any
						identifiers associated with you from those systems.
					</p>
				</section>

				{/* How Long Cookies Last */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						How Long Cookies Last
					</h2>
					<p className="text-gray-600 leading-relaxed">
						Cookies can be "session" cookies, which expire when you close your
						browser, or "persistent" cookies, which remain for a set period
						unless you delete them. VerifyAfrica uses a combination of both. We
						retain persistent cookies only as long as necessary for their stated
						purpose. Analytics cookies typically expire within 13 months, while
						preference cookies may persist up to 24 months to honor your
						selections.
					</p>
				</section>

				{/* Children and Cookies */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						Children and Cookies
					</h2>
					<p className="text-gray-600 leading-relaxed">
						VerifyAfrica's Site and services are intended for business users and
						are not directed at children under the age of sixteen. We do not
						knowingly store cookies or collect personal data from children. If
						you believe a child has used our services without parental consent,
						please contact privacy@verifyafrica.io so we can take appropriate
						action.
					</p>
				</section>

				{/* Cross-Border Data Handling */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						Cross-Border Data Handling
					</h2>
					<p className="text-gray-600 leading-relaxed">
						Because VerifyAfrica operates from the United States under oversight
						of CJ Solutions Ltd in Cyprus, cookies and data collected through
						them may be transferred internationally. These transfers occur under
						recognized safeguards, including Standard Contractual Clauses and
						intercompany data-transfer agreements. All cookies and analytics
						data are stored on secure, access-controlled servers, with
						encryption and anonymization applied where appropriate.
					</p>
				</section>

				{/* Updates to This Cookie Policy */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						Updates to This Cookie Policy
					</h2>
					<p className="text-gray-600 leading-relaxed">
						We may update this Cookie Policy from time to time to reflect
						changes in law, technology, or our operational practices. The latest
						version will always be available at verifyafrica.io/cookie-policy,
						and we will post clear notice of any material changes. Continued use
						of our Site after an update means you accept the revised policy.
					</p>
				</section>

				{/* Contact Us */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						Contact Us
					</h2>
					<p className="text-gray-600 leading-relaxed mb-4">
						If you have questions about this Cookie Policy or our use of cookies
						and similar technologies, please contact us at:
					</p>
					<div className="text-gray-600 leading-relaxed">
						<p className="mb-1">📩 support@verifyafrica.io</p>
						<p className="mb-1">
							VerifyAfrica Inc., State of Delaware, United States
						</p>
						<p>
							With oversight by CJ Solutions Ltd, Compliance Officer, Limassol,
							Cyprus
						</p>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
