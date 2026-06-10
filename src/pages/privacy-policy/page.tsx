import SEOHead from "../../components/feature/SEOHead";
import Footer from "@/pages/home/components/Footer";
import { useDemoModal } from "../../hooks/useDemoModal";
import Navbar from "../home/components/Navbar";
import { DEFAULT_OG_IMAGE, PRIVACY_POLICY_SEO } from "@/constants/seo";
import { createLegalPageSchema } from "@/lib/schema";

const privacySchema = createLegalPageSchema(
	PRIVACY_POLICY_SEO.canonical,
	"Privacy Policy – VerifyAfrica",
	PRIVACY_POLICY_SEO.description,
	"Privacy Policy",
);

export default function PrivacyPolicyPage() {
	const { openDemo } = useDemoModal();

	return (
		<div className="min-h-screen bg-white">
			<SEOHead
				title={PRIVACY_POLICY_SEO.title}
				description={PRIVACY_POLICY_SEO.description}
				canonical={PRIVACY_POLICY_SEO.canonical}
				noIndex={PRIVACY_POLICY_SEO.noIndex}
				imageAlt={PRIVACY_POLICY_SEO.imageAlt}
				schema={privacySchema}
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
						Privacy Policy
					</h1>
					<p className="text-gray-500">Last Updated: January 8, 2026</p>
				</div>

				<hr className="border-gray-200 mb-10" />

				{/* 1. Introduction */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						1. Introduction
					</h2>
					<p className="text-gray-600 leading-relaxed mb-4">
						At VerifyAfrica, privacy is not merely a regulatory obligation — it
						is the cornerstone of our brand promise and a non‑negotiable part of
						our corporate DNA. The company recognizes that identity verification
						inherently involves the collection and processing of personal and
						sensitive data. Therefore, it has adopted a privacy‑first operating
						model that embeds protection mechanisms into every layer of its
						infrastructure and service delivery pipeline.
					</p>
					<p className="text-gray-600 leading-relaxed">
						This Privacy Policy outlines the guiding principles under which
						VerifyAfrica processes personal data, the lawful bases for doing so,
						the rights of data subjects, and the organizational and technical
						safeguards that ensure data integrity across all markets in which
						the company operates.
					</p>
				</section>

				{/* 2. Scope and Applicability */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						2. Scope and Applicability
					</h2>
					<p className="text-gray-600 leading-relaxed mb-4">
						This Policy applies to all processing of personal data by
						VerifyAfrica, whether collected directly from individuals,
						indirectly through corporate clients integrating our APIs, or via
						third‑party identity databases. It extends to all subsidiaries,
						contractors, vendors, and affiliates that participate in the
						provision of VerifyAfrica&apos;s services.
					</p>
					<p className="text-gray-600 leading-relaxed">
						It covers all identifiable information, including personal
						identifiers, biometric data, financial or transactional data, device
						and system logs, and any metadata that could, either directly or
						indirectly, reveal an individual&apos;s identity or digital
						footprint.
					</p>
				</section>

				{/* 3. Lawful Basis for Processing */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						3. Lawful Basis for Processing
					</h2>
					<p className="text-gray-600 leading-relaxed mb-4">
						VerifyAfrica processes data strictly in accordance with the lawful
						bases permitted under applicable laws. In most cases, this includes:
					</p>
					<ul className="space-y-3 ml-6 mb-4">
						<li className="text-gray-600 leading-relaxed">
							<strong className="text-gray-800">
								Performance of a Contract:
							</strong>{" "}
							When processing is required to fulfill a service request initiated
							by a client or user.
						</li>
						<li className="text-gray-600 leading-relaxed">
							<strong className="text-gray-800">Legal Obligation:</strong> When
							required to comply with AML, CFT, or sanctions regulations imposed
							by law.
						</li>
						<li className="text-gray-600 leading-relaxed">
							<strong className="text-gray-800">Legitimate Interest:</strong>{" "}
							When processing enables fraud prevention, service enhancement, or
							operational analytics, provided that such interests do not
							override the rights and freedoms of data subjects.
						</li>
						<li className="text-gray-600 leading-relaxed">
							<strong className="text-gray-800">Consent:</strong> When
							individuals voluntarily grant permission for processing specific
							categories of data, particularly biometric information.
						</li>
					</ul>
					<p className="text-gray-600 leading-relaxed">
						The company maintains detailed consent records, demonstrating that
						every processing activity has a defined purpose and lawful basis
						documented in its internal Data Processing Register.
					</p>
				</section>

				{/* 4. Categories of Data Processed */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						4. Categories of Data Processed
					</h2>
					<p className="text-gray-600 leading-relaxed mb-4">
						VerifyAfrica may collect and process the following categories of
						data, depending on the service provided and integration model used:
					</p>
					<ul className="space-y-3 ml-6">
						<li className="text-gray-600 leading-relaxed">
							<strong className="text-gray-800">Identification Data:</strong>{" "}
							Full name, date of birth, nationality, gender, national
							identification number, passport or driver&apos;s license details.
						</li>
						<li className="text-gray-600 leading-relaxed">
							<strong className="text-gray-800">Biometric Data:</strong> Facial
							images, fingerprints, or other biometric identifiers necessary for
							liveness and document verification.
						</li>
						<li className="text-gray-600 leading-relaxed">
							<strong className="text-gray-800">Contact Data:</strong> Email
							addresses, phone numbers, and residential or business addresses.
						</li>
						<li className="text-gray-600 leading-relaxed">
							<strong className="text-gray-800">
								Device and Technical Data:
							</strong>{" "}
							IP addresses, browser fingerprints, system logs, and location
							metadata to enhance fraud detection.
						</li>
						<li className="text-gray-600 leading-relaxed">
							<strong className="text-gray-800">Verification Artifacts:</strong>{" "}
							Submitted documents, scanned IDs, or video evidence captured
							during the KYC process.
						</li>
					</ul>
				</section>

				{/* 5. California Privacy Rights */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						5. California Privacy Rights (CCPA/CPRA Disclosure)
					</h2>
					<p className="text-gray-600 leading-relaxed mb-4">
						While VerifyAfrica does not currently meet the applicability
						thresholds under the California Consumer Privacy Act (as amended by
						the California Privacy Rights Act), we respect the privacy rights of
						all individuals whose information we may process.
					</p>
					<p className="text-gray-600 leading-relaxed mb-4">
						If and when we process the personal information of California
						residents, we do so solely as a service provider on behalf of our
						business clients and under their instructions. We do not sell or
						share personal information as those terms are defined under the
						CCPA/CPRA.
					</p>
					<p className="text-gray-600 leading-relaxed">
						California residents may nevertheless contact us at{" "}
						<a
							href="mailto:support@verifyafrica.io"
							className="text-teal-600 hover:underline"
						>
							support@verifyafrica.io
						</a>{" "}
						to inquire about the categories of personal information processed,
						the purpose of processing, or to request deletion where applicable.
					</p>
				</section>

				{/* 6. Data Collection and Purpose Limitation */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						6. Data Collection and Purpose Limitation
					</h2>
					<p className="text-gray-600 leading-relaxed mb-4">
						VerifyAfrica collects only the minimum amount of data necessary for
						the purpose for which it is processed. The company&apos;s platform
						is designed around a &quot;data minimization&quot; architecture,
						ensuring that personal data is never retained longer than needed or
						used for secondary purposes without appropriate legal grounds.
					</p>
					<p className="text-gray-600 leading-relaxed">
						All data collected through VerifyAfrica&apos;s systems are used
						solely to verify identity, conduct risk assessments, and fulfill
						legal compliance requirements. Under no circumstances does
						VerifyAfrica sell, trade, or monetize user data.
					</p>
				</section>

				{/* 7. Cross-Border Transfers */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						7. Cross-Border Transfers
					</h2>
					<p className="text-gray-600 leading-relaxed">
						Given VerifyAfrica&apos;s multinational operations, data may be
						transferred across borders between the United States, the European
						Union, and African countries where clients operate. To ensure
						legality and security, all cross‑border transfers are governed by
						Standard Contractual Clauses (SCCs) and intercompany Data Transfer
						Agreements between VerifyAfrica and CJ Solutions Ltd. The company
						also employs regional data storage strategies to comply with local
						data residency laws where applicable (e.g., Nigeria, Kenya, and
						South Africa).
					</p>
				</section>

				{/* 8. Data Retention and Destruction */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						8. Data Retention and Destruction
					</h2>
					<p className="text-gray-600 leading-relaxed">
						Personal data is retained only for as long as necessary to fulfill
						its intended purpose, or as required by law or regulatory
						authorities. Once retention periods expire, data is permanently
						deleted using certified data destruction protocols. Anonymized or
						aggregated data may be retained for analytics or performance
						benchmarking, provided such data can no longer be linked to
						identifiable individuals.
					</p>
				</section>

				{/* 9. Data Security and Technical Safeguards */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						9. Data Security and Technical Safeguards
					</h2>
					<p className="text-gray-600 leading-relaxed">
						VerifyAfrica employs state‑of‑the‑art cybersecurity measures,
						including multi‑layer encryption (AES‑256 at rest, TLS 1.3 in
						transit), intrusion detection systems, secure development practices,
						and continuous monitoring. Access to personal data is role‑based and
						restricted under the principle of least privilege. The company also
						conducts regular third‑party penetration tests and vulnerability
						assessments, with findings reported to the Board&apos;s Compliance
						Committee.
					</p>
				</section>

				{/* 10. Data Subject Rights */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						10. Data Subject Rights
					</h2>
					<p className="text-gray-600 leading-relaxed">
						All data subjects interacting with VerifyAfrica retain rights of
						access, rectification, erasure, portability, and objection under
						applicable privacy laws. Requests are managed through a structured
						process handled by the Data Protection Officer (DPO), with
						acknowledgment issued within 48 hours and resolution typically
						within 30 days.
					</p>
				</section>

				{/* 11. Third-Party Processors and Vendors */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						11. Third-Party Processors and Vendors
					</h2>
					<p className="text-gray-600 leading-relaxed">
						Any external vendors engaged by VerifyAfrica for hosting,
						verification, or analytics are subject to rigorous due diligence.
						Each vendor relationship is governed by a Data Processing Agreement
						that ensures compliance with privacy regulations, audit rights, and
						confidentiality clauses.
					</p>
				</section>

				{/* 12. Accountability and Enforcement */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						12. Accountability and Enforcement
					</h2>
					<p className="text-gray-600 leading-relaxed">
						VerifyAfrica maintains detailed audit logs of all data access and
						processing activities. Breaches of this policy by employees,
						contractors, or partners are treated as serious compliance
						violations and may result in disciplinary or contractual sanctions.
					</p>
				</section>

				{/* 13. Contact Us */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						13. Contact Us
					</h2>
					<p className="text-gray-600 leading-relaxed mb-4">
						If you have any questions, concerns, or requests regarding this
						Privacy Policy or our data practices, please contact us:
					</p>
					<div className="text-gray-600 leading-relaxed">
						<p className="mb-1">
							Email:{" "}
							<a
								href="mailto:support@verifyafrica.io"
								className="text-teal-600 hover:underline"
							>
								support@verifyafrica.io
							</a>
						</p>
						<p>
							For data protection inquiries, you may also contact our Data
							Protection Officer at{" "}
							<a
								href="mailto:dpo@verifyafrica.io"
								className="text-teal-600 hover:underline"
							>
								dpo@verifyafrica.io
							</a>
							.
						</p>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
