import SEOHead from "../../components/feature/SEOHead";
import Footer from "@/pages/home/components/Footer";
import { useDemoModal } from "../../hooks/useDemoModal";
import Navbar from "../home/components/Navbar";
import { DEFAULT_OG_IMAGE, TERMS_SEO } from "@/constants/seo";
import { createLegalPageSchema } from "@/lib/schema";

const termsSchema = createLegalPageSchema(
	TERMS_SEO.canonical,
	"Terms of Service – VerifyAfrica",
	TERMS_SEO.description,
	"Terms of Service",
);

export default function TermsOfServicePage() {
	const { openDemo } = useDemoModal();

	return (
		<div className="min-h-screen bg-white">
			<SEOHead
				title={TERMS_SEO.title}
				description={TERMS_SEO.description}
				canonical={TERMS_SEO.canonical}
				noIndex={TERMS_SEO.noIndex}
				imageAlt={TERMS_SEO.imageAlt}
				schema={termsSchema}
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
						Terms of Service
					</h1>
					<p className="text-gray-500">Last Updated: January 8, 2026</p>
				</div>

				<hr className="border-gray-200 mb-10" />

				{/* 1. Introduction and Contractual Nature */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						1. Introduction and Contractual Nature
					</h2>
					<p className="text-gray-600 leading-relaxed mb-4">
						These Terms of Use form the legally binding agreement between
						VerifyAfrica Inc. ("VerifyAfrica," "the Company," "we," or "us") — a
						Delaware-incorporated and any individual or organization ("Client,"
						"User," or "Partner") that accesses, integrates, or utilizes the
						VerifyAfrica platform, APIs, SDKs, or any related services.
					</p>
					<p className="text-gray-600 leading-relaxed mb-4">
						By accessing our systems, whether through direct API calls,
						dashboard interfaces, mobile SDKs, or authorized reseller platforms,
						you acknowledge that you have read, understood, and agreed to these
						Terms. These Terms govern all commercial, technical, and compliance
						relationships with VerifyAfrica and its affiliates, and they remain
						binding throughout the duration of service engagement.
					</p>
					<p className="text-gray-600 leading-relaxed">
						VerifyAfrica provides digital identity verification, KYC, AML, and
						sanctions screening services through cloud-hosted infrastructure and
						API integrations. The platform's sole purpose is to assist regulated
						entities and technology companies in fulfilling their compliance
						obligations under local and international law. It does not replace a
						client's own legal duties, but rather supports them in meeting those
						obligations more efficiently and transparently.
					</p>
				</section>

				{/* 2. Relationship Between VerifyAfrica and the Client */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						2. Relationship Between VerifyAfrica and the Client
					</h2>
					<p className="text-gray-600 leading-relaxed mb-4">
						In all operational contexts, VerifyAfrica acts as a Data Processor
						within the meaning of the GDPR and NDPR, processing personal data on
						behalf of the Client, who acts as the Data Controller. This
						distinction is critical for legal and operational clarity. While
						VerifyAfrica provides the technology and safeguards for identity
						verification, the Client retains ultimate responsibility for
						determining the lawful basis for collecting personal data, obtaining
						consent, and complying with applicable privacy and AML laws in its
						jurisdiction.
					</p>
					<p className="text-gray-600 leading-relaxed">
						For certain functions — such as fraud prevention, internal risk
						assessment, or system analytics — VerifyAfrica may also act as an
						independent Data Controller, where it determines the means and
						purposes of specific processing activities necessary to maintain
						system integrity or fulfill statutory obligations. In such cases,
						VerifyAfrica ensures that processing remains compliant with the
						principles of transparency, necessity, and proportionality.
					</p>
				</section>

				{/* 3. Authorized Use of Services */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						3. Authorized Use of Services
					</h2>
					<p className="text-gray-600 leading-relaxed mb-4">
						The VerifyAfrica platform and all associated products are provided
						solely for lawful, compliance-oriented purposes. Clients are
						expected to use the system exclusively for identity verification,
						sanctions screening, and risk management functions permitted by law.
					</p>
					<p className="text-gray-600 leading-relaxed mb-4">
						Any attempt to reverse-engineer, resell, repackage, sublicense, or
						otherwise exploit the platform outside the scope of contractual
						authorization is strictly prohibited. The Client must also ensure
						that all API requests and data submissions originate from authorized
						systems, with credentials securely stored and managed in accordance
						with VerifyAfrica's authentication protocols.
					</p>
					<p className="text-gray-600 leading-relaxed">
						Unauthorized access, data scraping, or mass extraction of identity
						records is considered a material breach of contract and may result
						in immediate suspension, account termination, or referral to
						regulatory authorities.
					</p>
				</section>

				{/* 4. Client Responsibilities */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						4. Client Responsibilities
					</h2>
					<p className="text-gray-600 leading-relaxed mb-4">
						Clients integrating VerifyAfrica's services acknowledge and agree to
						maintain the following obligations:
					</p>
					<p className="text-gray-600 leading-relaxed mb-4">
						They shall ensure that their collection of end-user data complies
						with applicable privacy and data protection laws and that such data
						is transmitted to VerifyAfrica securely and with proper consent.
						Clients are required to implement appropriate technical and
						organizational measures to protect API credentials, encryption keys,
						and transmission channels against unauthorized access or misuse.
					</p>
					<p className="text-gray-600 leading-relaxed mb-4">
						Clients must also maintain records of verification activities,
						provide accurate and up-to-date data during onboarding, and refrain
						from submitting false or misleading information for verification
						purposes. Failure to maintain data integrity undermines the
						reliability of verification outcomes and may expose both parties to
						legal and reputational risk.
					</p>
					<p className="text-gray-600 leading-relaxed">
						In addition, each Client must have a designated compliance contact
						person who serves as the liaison for all audit inquiries, data
						protection requests, and risk escalations related to the Client's
						use of the platform.
					</p>
				</section>

				{/* 5. VerifyAfrica's Obligations */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						5. VerifyAfrica's Obligations
					</h2>
					<p className="text-gray-600 leading-relaxed mb-4">
						VerifyAfrica shall operate its platform with professional diligence,
						industry-standard security, and transparency. The Company shall
						ensure that its systems remain compliant with applicable data
						protection and AML legislation. VerifyAfrica shall process personal
						data only as instructed by the Client, except where required to do
						otherwise by law.
					</p>
					<p className="text-gray-600 leading-relaxed mb-4">
						The Company commits to maintaining continuous uptime of its core
						services at or above 99.9%, excluding planned maintenance or
						circumstances beyond its reasonable control (force majeure). It will
						provide Clients with advance notice of major updates, policy
						amendments, or technical changes that may affect integration
						stability or compliance posture.
					</p>
					<p className="text-gray-600 leading-relaxed">
						VerifyAfrica will also provide its clients with relevant
						documentation — including its Privacy Policy, Security Statement,
						and Data Processing Addendum — to ensure full transparency regarding
						data handling practices.
					</p>
				</section>

				{/* 6. Service Availability and Continuity */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						6. Service Availability and Continuity
					</h2>
					<p className="text-gray-600 leading-relaxed mb-4">
						While VerifyAfrica employs enterprise-grade infrastructure with
						redundancy and high availability, the Company cannot guarantee
						uninterrupted access in all cases. Maintenance windows, third-party
						service outages, or exceptional security incidents may cause
						temporary interruptions.
					</p>
					<p className="text-gray-600 leading-relaxed">
						In such events, VerifyAfrica will take all reasonable steps to
						restore functionality swiftly, communicate proactively with Clients,
						and maintain data integrity throughout. All critical data and audit
						logs are backed up in multiple geographically distributed data
						centers to ensure no data loss or corruption occurs during
						restoration.
					</p>
				</section>

				{/* 7. Intellectual Property Rights */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						7. Intellectual Property Rights
					</h2>
					<p className="text-gray-600 leading-relaxed mb-4">
						All intellectual property, including but not limited to source code,
						algorithms, documentation, trade names, designs, trademarks, and
						proprietary technology used in or developed for the VerifyAfrica
						platform, are and shall remain the exclusive property of
						VerifyAfrica and its parent company, CJ Solutions Ltd.
					</p>
					<p className="text-gray-600 leading-relaxed">
						Clients receive a limited, revocable, non-transferable license to
						use VerifyAfrica's services strictly in accordance with the terms of
						their commercial agreement. This license does not confer ownership
						rights or entitle Clients to claim any intellectual property in
						software, databases, or AI models developed by VerifyAfrica.
					</p>
				</section>

				{/* 8. Confidentiality */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						8. Confidentiality
					</h2>
					<p className="text-gray-600 leading-relaxed mb-4">
						Both parties should maintain strict confidentiality regarding any
						non-public information exchanged during their business relationship.
						This includes technical data, business plans, verification results,
						and customer information. Each party shall use such information
						solely for the purpose of fulfilling their contractual obligations
						and shall protect it with at least the same degree of care as it
						protects its own confidential information.
					</p>
					<p className="text-gray-600 leading-relaxed">
						Disclosure may occur only when required by law, regulation, or valid
						court order, and only after providing reasonable notice to the other
						party, unless legally prohibited from doing so.
					</p>
				</section>

				{/* 9. Limitation of Liability */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						9. Limitation of Liability
					</h2>
					<p className="text-gray-600 leading-relaxed mb-4">
						VerifyAfrica's liability, whether arising from contract, tort, or
						otherwise, shall be limited to the total amount paid by the Client
						for the service in the twelve months preceding the event giving rise
						to the claim. In no event shall VerifyAfrica be liable for indirect,
						consequential, or punitive damages, including loss of business,
						reputation, or data, except where such loss arises from the
						Company's proven gross negligence or willful misconduct.
					</p>
					<p className="text-gray-600 leading-relaxed">
						Clients acknowledge that digital verification relies on third-party
						data sources and that VerifyAfrica cannot guarantee the absolute
						accuracy of external data beyond what is technically and legally
						feasible. The Company assumes no liability for verification outcomes
						that are inaccurate due to falsified documents, compromised data
						sources, or incomplete third-party responses.
					</p>
				</section>

				{/* 10. Suspension and Termination */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						10. Suspension and Termination
					</h2>
					<p className="text-gray-600 leading-relaxed mb-4">
						VerifyAfrica reserves the right to suspend or terminate a client's
						access to its services in the event of material breach, misuse of
						data, non-payment, or regulatory violations. Termination shall not
						relieve the Client of any obligations accrued prior to the
						termination date.
					</p>
					<p className="text-gray-600 leading-relaxed">
						Upon termination, VerifyAfrica will securely delete or return all
						Client data within a reasonable period, unless retention is required
						by law. Audit logs and AML screening records may be retained in
						anonymized form to fulfill statutory obligations and maintain
						historical traceability.
					</p>
				</section>

				{/* 11. Jurisdiction and Governing Law */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						11. Jurisdiction and Governing Law
					</h2>
					<p className="text-gray-600 leading-relaxed mb-4">
						These Terms shall be governed by and construed in accordance with
						the laws of the State of Delaware, United States. Where operations
						extend into Africa or the European Union, VerifyAfrica shall also
						adhere to the applicable data protection and financial crime
						prevention frameworks of those jurisdictions.
					</p>
					<p className="text-gray-600 leading-relaxed">
						Any dispute arising from or related to the use of VerifyAfrica's
						services shall first be addressed through good faith negotiations.
						If unresolved, the dispute shall be submitted to arbitration in
						Delaware, under the rules of the American Arbitration Association,
						without prejudice to any mandatory legal rights in the Client's home
						jurisdiction.
					</p>
				</section>

				{/* 12. Amendments */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						12. Amendments
					</h2>
					<p className="text-gray-600 leading-relaxed">
						VerifyAfrica may update or modify these Terms from time to time to
						reflect changes in law, technology, or service scope. Clients will
						be notified in advance of material changes and continued use of the
						platform after such notice constitutes acceptance of the revised
						Terms.
					</p>
				</section>

				{/* Contact Information */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						Contact Information
					</h2>
					<p className="text-gray-600 leading-relaxed mb-4">
						If you have any questions about these Terms of Service, please
						contact us at:
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
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
