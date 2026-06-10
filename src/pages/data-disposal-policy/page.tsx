import SEOHead from "../../components/feature/SEOHead";
import Footer from "@/pages/home/components/Footer";
import { useDemoModal } from "../../hooks/useDemoModal";
import Navbar from "../home/components/Navbar";
import { DATA_DISPOSAL_POLICY_SEO, DEFAULT_OG_IMAGE } from "@/constants/seo";
import { createLegalPageSchema } from "@/lib/schema";

const dataDisposalSchema = createLegalPageSchema(
	DATA_DISPOSAL_POLICY_SEO.canonical,
	"Data Disposal & Destruction Policy – VerifyAfrica",
	DATA_DISPOSAL_POLICY_SEO.description,
	"Data Disposal Policy",
);

export default function DataDisposalPolicyPage() {
	const { openDemo } = useDemoModal();

	return (
		<div className="min-h-screen bg-white">
			<SEOHead
				title={DATA_DISPOSAL_POLICY_SEO.title}
				description={DATA_DISPOSAL_POLICY_SEO.description}
				canonical={DATA_DISPOSAL_POLICY_SEO.canonical}
				noIndex={DATA_DISPOSAL_POLICY_SEO.noIndex}
				imageAlt={DATA_DISPOSAL_POLICY_SEO.imageAlt}
				schema={dataDisposalSchema}
				{...DEFAULT_OG_IMAGE}
			/>
			<Navbar
				onRequestDemo={openDemo}
				variant="solid"
			/>

			{/* Content */}
			<main className="max-w-4xl mx-auto px-6 pt-32 pb-12">
				<div className="mb-8">
					<h1 className="text-3xl font-bold text-secondary mb-2">
						Data Disposal & Destruction Policy
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
						At VerifyAfrica Inc. ("VerifyAfrica," "we," "our," or "us"), we take
						data stewardship seriously. Protecting the personal and corporate
						information entrusted to us is at the heart of our mission as a
						trusted KYC, KYB, and identity verification provider. This Data
						Disposal & Destruction Policy explains how we retain, store,
						anonymize, and permanently destroy personal and business data once
						it is no longer required for the purpose for which it was collected.
					</p>
					<p className="text-gray-600 leading-relaxed mb-4">
						VerifyAfrica is incorporated in the State of Delaware, United
						States. Through this structure, we uphold compliance with the
						General Data Protection Regulation (GDPR), the Nigeria Data
						Protection Regulation (NDPR), and relevant U.S. privacy standards.
						We apply the most stringent data-protection principles globally,
						ensuring that every stage of the data lifecycle — from collection to
						destruction — aligns with lawful, fair, and secure processing.
					</p>
					<p className="text-gray-600 leading-relaxed">
						This policy applies to all data processed through our website
						(verifyafrica.io), APIs, SDKs, client dashboards, and operational
						systems, as well as to all data controlled or processed on our
						behalf by third-party vendors, partners, and group entities.
					</p>
				</section>

				{/* Purpose of This Policy */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						Purpose of This Policy
					</h2>
					<p className="text-gray-600 leading-relaxed mb-4">
						The purpose of this policy is to establish a consistent, auditable
						framework for data retention, deletion, and destruction that
						ensures:
					</p>
					<ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mb-4">
						<li>
							Personal and business data are not kept longer than necessary.
						</li>
						<li>
							Data disposal is carried out securely, verifiably, and in
							compliance with applicable laws.
						</li>
						<li>
							Individuals and organizations retain meaningful control over their
							data, including the right to request erasure.
						</li>
						<li>
							VerifyAfrica maintains transparency and accountability in all
							data-handling activities.
						</li>
					</ul>
					<p className="text-gray-600 leading-relaxed">
						In essence, this policy guarantees that once information is no
						longer needed — legally, contractually, or operationally — it is
						destroyed or anonymized in a way that eliminates the risk of
						unauthorized recovery or misuse.
					</p>
				</section>

				{/* Legal and Regulatory Alignment */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						Legal and Regulatory Alignment
					</h2>
					<p className="text-gray-600 leading-relaxed mb-4">
						Our data disposal and retention practices are grounded in multiple
						overlapping frameworks:
					</p>
					<ul className="list-disc list-inside text-gray-600 space-y-3 ml-4 mb-4">
						<li>
							<strong>Under GDPR (EU),</strong> we comply with Article 5(1)(e),
							which mandates that personal data be kept "no longer than is
							necessary for the purposes for which the personal data are
							processed." We also respect Article 17 (Right to Erasure) and
							Article 30 (Record of Processing Activities).
						</li>
						<li>
							<strong>Under NDPR (Nigeria),</strong> we adhere to Principle
							2.1(5), which requires that personal data be retained only as long
							as necessary to achieve the purpose of processing or as required
							by law.
						</li>
						<li>
							<strong>Under Delaware and U.S. law,</strong> we apply the Federal
							Trade Commission's (FTC) data-disposal guidelines and relevant
							sectoral privacy rules governing the protection and destruction of
							consumer and corporate information.
						</li>
					</ul>
					<p className="text-gray-600 leading-relaxed">
						These combined standards ensure that VerifyAfrica's retention and
						destruction model remains globally harmonized and locally compliant.
					</p>
				</section>

				{/* Data Retention Principles */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						Data Retention Principles
					</h2>
					<p className="text-gray-600 leading-relaxed mb-4">
						VerifyAfrica retains data only for as long as it is needed to
						fulfill a legitimate business, contractual, or regulatory purpose.
						Retention periods vary depending on data type, purpose, and
						jurisdictional requirements.
					</p>
					<p className="text-gray-600 leading-relaxed mb-4">
						KYC and KYB verification data (including documents, biometric
						captures, and verification results) are typically retained for five
						(5) years from the date of verification, unless a longer period is
						required by law, such as anti-money laundering (AML) record-keeping
						obligations.
					</p>
					<p className="text-gray-600 leading-relaxed mb-4">
						Client account data (such as invoices, billing information, and
						audit logs) are retained for seven (7) years in accordance with
						financial reporting and anti-fraud obligations.
					</p>
					<p className="text-gray-600 leading-relaxed mb-4">
						Consent records are retained for as long as necessary to demonstrate
						lawful processing and accountability, typically seven (7) years
						after the underlying verification or contract ends.
					</p>
					<p className="text-gray-600 leading-relaxed mb-4">
						System and security logs may be retained for up to twelve (12)
						months to support forensic and operational integrity, after which
						they are anonymized or securely deleted.
					</p>
					<p className="text-gray-600 leading-relaxed mb-4">
						Marketing and communications data (such as newsletter sign-ups) are
						retained only until consent is withdrawn or the purpose expires,
						whichever comes first.
					</p>
					<p className="text-gray-600 leading-relaxed">
						These timelines are regularly reviewed to ensure that retention
						remains proportionate, justified, and consistent with current laws
						and business needs.
					</p>
				</section>

				{/* Data Minimization and Archiving */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						Data Minimization and Archiving
					</h2>
					<p className="text-gray-600 leading-relaxed mb-4">
						We practice data minimization throughout the lifecycle. This means
						we collect only the data necessary for a defined purpose, avoid
						redundancy, and limit access to authorized personnel.
					</p>
					<p className="text-gray-600 leading-relaxed">
						When data is no longer active but must be preserved temporarily (for
						example, for ongoing audits or pending legal inquiries), it is
						transferred to a secure archival state. Archived data is encrypted,
						access-restricted, and isolated from production environments. Once
						the retention period expires, archival data is automatically flagged
						for destruction.
					</p>
				</section>

				{/* Methods of Data Destruction */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						Methods of Data Destruction
					</h2>
					<p className="text-gray-600 leading-relaxed mb-4">
						When data reaches the end of its retention period or is deleted upon
						request, VerifyAfrica ensures destruction using methods that render
						the data unrecoverable. The specific techniques depend on data type
						and storage medium:
					</p>
					<ul className="list-disc list-inside text-gray-600 space-y-3 ml-4">
						<li>
							<strong>Digital Data:</strong> Deleted using secure overwriting
							and cryptographic erasure methods that comply with NIST SP 800-88
							(Rev.1) standards. Files, logs, and backups are securely wiped
							from servers and cloud systems using multi-pass algorithms,
							ensuring no residual data remains.
						</li>
						<li>
							<strong>Encrypted Data:</strong> When data is encrypted,
							destruction is achieved by destroying encryption keys, a process
							known as crypto-shredding, which instantly renders all associated
							data unreadable.
						</li>
						<li>
							<strong>Physical Media:</strong> Any drives, servers, or physical
							media that stored personal or verification data are decommissioned
							through certified destruction providers who issue a Certificate of
							Destruction confirming compliance with international standards
							such as ISO/IEC 27040 and ISO 21964.
						</li>
						<li>
							<strong>Third-Party Systems:</strong> Vendors and subprocessors
							are contractually required to destroy or return all VerifyAfrica
							data upon termination of engagement. Verification of destruction
							or return is obtained through written confirmation or audit
							reporting.
						</li>
					</ul>
				</section>

				{/* Data Disposal Requests and Right to Erasure */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						Data Disposal Requests and Right to Erasure
					</h2>
					<p className="text-gray-600 leading-relaxed mb-4">
						Under GDPR and NDPR, individuals have the right to request that
						their personal data be deleted when it is no longer necessary for
						processing or when consent is withdrawn. VerifyAfrica honors such
						requests promptly and transparently.
					</p>
					<p className="text-gray-600 leading-relaxed mb-4">
						When we receive a verified deletion or "right to be forgotten"
						request, we:
					</p>
					<ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mb-4">
						<li>
							Authenticate the requester's identity to ensure lawful access;
						</li>
						<li>
							Identify all relevant data across production, backups, and
							archives;
						</li>
						<li>
							Delete or anonymize the data within 30 days unless a legal
							obligation requires retention (for example, AML laws or
							contractual obligations to financial institutions); and
						</li>
						<li>
							Confirm completion of the deletion request to the requester in
							writing.
						</li>
					</ul>
					<p className="text-gray-600 leading-relaxed">
						Deletion requests for data processed on behalf of our business
						clients are routed through the client, who serves as the data
						controller. VerifyAfrica assists in fulfilling those requests under
						the terms of our Data Processing Addendum.
					</p>
				</section>

				{/* Backups and Redundancy Controls */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						Backups and Redundancy Controls
					</h2>
					<p className="text-gray-600 leading-relaxed mb-4">
						VerifyAfrica maintains encrypted backups for disaster recovery and
						business continuity. Backups are stored in geographically redundant
						locations under strict access controls. Data contained within
						backups is logically isolated and cannot be accessed directly for
						operational use.
					</p>
					<p className="text-gray-600 leading-relaxed">
						When deletion or destruction occurs, the same request is propagated
						to backup systems through automated retention logic. Backup datasets
						are overwritten or replaced on rolling cycles, ensuring that deleted
						data does not persist beyond the system's maximum backup window
						(typically 90 days).
					</p>
				</section>

				{/* Audit Trails and Verification of Destruction */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						Audit Trails and Verification of Destruction
					</h2>
					<p className="text-gray-600 leading-relaxed mb-4">
						Every data disposal event — whether system-triggered, manual, or
						upon request — is logged in an immutable Data Disposal Register
						maintained by the Compliance & Data Protection Officer (CDPO). Each
						entry records:
					</p>
					<ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mb-4">
						<li>The data category and retention period;</li>
						<li>The destruction method used;</li>
						<li>The responsible system or vendor;</li>
						<li>The date and time of completion; and</li>
						<li>
							Verification of completion (hash confirmation or destruction
							certificate).
						</li>
					</ul>
					<p className="text-gray-600 leading-relaxed">
						Quarterly audits confirm that destruction procedures have been
						executed as scheduled. The CDPO and CJ Solutions Ltd's Group
						Compliance Office review these logs to ensure ongoing
						accountability, transparency, and legal conformity.
					</p>
				</section>

				{/* Exceptions and Legal Holds */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						Exceptions and Legal Holds
					</h2>
					<p className="text-gray-600 leading-relaxed mb-4">
						In certain circumstances, VerifyAfrica may be required to preserve
						data beyond its standard retention period — for example, in response
						to litigation holds, regulatory investigations, or ongoing legal
						claims. In such cases, destruction is temporarily suspended until
						the hold is lifted.
					</p>
					<p className="text-gray-600 leading-relaxed">
						All holds must be approved by the General Counsel or the Compliance
						& Data Protection Officer, and affected records are tagged in the
						system to prevent accidental deletion. Once the legal or regulatory
						requirement concludes, the data is promptly destroyed following
						standard procedures.
					</p>
				</section>

				{/* Group Oversight and Governance */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						Group Oversight and Governance
					</h2>
					<p className="text-gray-600 leading-relaxed mb-4">
						Because VerifyAfrica operates under the governance framework of CJ
						Solutions Ltd (Cyprus), oversight of data retention and destruction
						is coordinated at group level. This ensures that U.S. and EU
						compliance practices remain harmonized and that African client data
						processed under VerifyAfrica's systems is subject to the same level
						of diligence and transparency.
					</p>
					<p className="text-gray-600 leading-relaxed">
						The CJ Solutions Group Compliance Office periodically reviews
						VerifyAfrica's data lifecycle controls, approves retention
						schedules, and conducts joint audits of destruction records. This
						dual-jurisdiction oversight provides an additional layer of
						assurance to regulators, partners, and clients.
					</p>
				</section>

				{/* Updates to This Policy */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						Updates to This Policy
					</h2>
					<p className="text-gray-600 leading-relaxed mb-4">
						We review this Data Disposal & Destruction Policy annually or
						whenever material changes occur in law, technology, or business
						operations. Updates are published on
						verifyafrica.io/data-destruction-policy, and the "Last Updated" date
						at the top of the page indicates when revisions took effect.
					</p>
					<p className="text-gray-600 leading-relaxed">
						Continued use of our website, services, or integrations after an
						update constitutes acknowledgment of the revised policy. We
						encourage clients and partners to review this page periodically to
						remain informed about our current data-handling and disposal
						practices.
					</p>
				</section>

				{/* Contact Us */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-secondary mb-4">
						Contact Us
					</h2>
					<p className="text-gray-600 leading-relaxed mb-4">
						For questions or requests related to data retention, deletion, or
						destruction, please contact us at:
					</p>
					<p className="text-gray-600 leading-relaxed mb-4">
						📩 support@verifyafrica.io
						<br />
						VerifyAfrica Inc., State of Delaware, United States
						<br />
						<br />
					</p>
					<p className="text-gray-600 leading-relaxed">
						If you believe that we have not properly honored a data deletion or
						disposal request, you also have the right to contact your local data
						protection authority, such as the Office of the Delaware Attorney
						General, or the Nigeria Data Protection Bureau (NDPB).
					</p>
				</section>
			</main>
			<Footer />
		</div>
	);
}
