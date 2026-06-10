import { useState, useEffect, lazy, Suspense } from "react";
import { useDemoModal } from "../../hooks/useDemoModal";
import Navbar from "@/pages/home/components/Navbar";
import SEOHead from "../../components/feature/SEOHead";
import BackToTop from "../../components/feature/BackToTop";
import { DEFAULT_OG_IMAGE, RESOURCES_SEO } from "@/constants/seo";
import {
	createBreadcrumbList,
	createWebPageSchema,
} from "@/lib/schema";
import ResourcesHero from "./components/ResourcesHero";
import ResourceCard, { Resource } from "./components/ResourceCard";
import {
	BankIcon,
	ChartBarHorizontalIcon,
	ChartLineIcon,
	ChartPieIcon,
	ChatsCircleIcon,
	DetectiveIcon,
	FingerprintIcon,
	GlobeIcon,
	ShieldCheckIcon,
	UserFocusIcon,
	UserPlusIcon,
} from "@phosphor-icons/react";

const Footer = lazy(() => import("@/pages/home/components/Footer"));

export const resources: Resource[] = [
	{
		id: "verifyafrica-correspondent-banking-2026",
		title:
			"Correspondent Banking & African Fintechs: The 2026 Compliance & Access Guide",
		description:
			"A definitive guide to understanding how correspondent banking relationships work, why African fintechs and payment operators lose access, and what compliance infrastructure is required to open and retain correspondent banking lines in 2026. Covers derisking triggers, FATF greylist exposure, AML programme standards, and the documentation architecture that separates funded operators from those cut off.",
		icon: BankIcon,
		category: "PDF Guide",
		readTime: "28 min read",
		pages: "27 pages",
		pdfUrl:
			"https://storage.readdy-site.link/project_files/e867a79c-6ad4-431f-b9b4-472c3bcdc336/cf5539c8-4463-4fb6-a08d-4de955ec9d7c_VA_Article1_Correspondent_Banking_2026-1-1.pdf?v=7523c4ca864cb5d2f8290524f2cecc44",
		isNew: true,
		dateAdded: "2026-05-18",
		teaserContent: [
			"How correspondent banking relationships actually work: the tiered structure of nostro/vostro accounts, respondent bank obligations, and why a single derisking decision by a Tier 1 correspondent can simultaneously cut off dozens of African payment operators downstream",
			"The FATF greylist derisking multiplier: how Nigeria, Kenya, South Africa, and Egypt FATF greylist status creates automatic enhanced due diligence triggers in US, UK, and EU correspondent banks — and the specific compliance signals that reduce risk appetite withdrawal",
			"Why African fintechs get derisked before banks: the transaction monitoring gap, the AML programme credibility deficit, and how correspondent banks score respondent risk using SWIFT KYC Registry completeness, Wolfsberg questionnaire quality, and transaction volume anomaly flags",
			"The four derisking triggers that are 100% within your control: AML policy documentation gaps, compliance officer seniority signals, transaction monitoring system credibility, and FATF-aligned sanctions screening coverage",
			"What the correspondent bank relationship manager is actually evaluating: how to read a due diligence request, what a Wolfsberg Group questionnaire response signals about your programme maturity, and the documentation that converts a compliance review from a risk assessment into a business development conversation",
		],
		gatedContent: [
			"Correspondent banking due diligence package builder: complete documentation checklist covering AML policy, compliance officer appointment, MLRO designation, board-level oversight evidence, and FATF-aligned programme certification — structured for SWIFT KYC Registry submission",
			"Wolfsberg Group questionnaire completion guide: line-by-line response framework for the Correspondent Banking Due Diligence Questionnaire (CBDDQ) calibrated to African fintech and payment operator AML programme realities",
			"SWIFT KYC Registry optimisation guide: mandatory vs. optional fields, document quality standards, annual update protocols, and the completeness score thresholds that reduce correspondent bank enhanced due diligence friction",
			"Derisking risk assessment and mitigation matrix: self-assessment tool to identify your highest correspondent banking risk signals with remediation steps, implementation timelines, and programme investment estimates",
			"AML programme credibility scorecard for correspondent bank review: transaction monitoring system documentation, SAR/STR filing rate benchmarks, compliance training records, and board-level AML governance evidence — the 12 signals that separate retained respondents from derisked ones",
			"Correspondent bank outreach playbook: how to initiate, manage, and document correspondent bank relationship conversations — including escalation paths when due diligence stalls, relationship manager communication templates, and compliance team introduction protocols",
			"FATF greylist exposure mitigation guide: jurisdiction-by-jurisdiction analysis of how Nigeria, Kenya, South Africa, and Egypt greylist status affects correspondent access, with enhanced due diligence response templates and programme gap remediation roadmaps",
			"Alternative correspondent banking access strategies: how to use payment aggregators, sponsored access models, and regional development bank settlement infrastructure as transitional solutions while building direct correspondent relationships",
		],
	},
	{
		id: "verifyafrica-synthetic-identity-fraud-2026",
		title:
			"Synthetic Identity Fraud in Africa: The 2026 Detection & Prevention Guide",
		description:
			"A comprehensive guide to understanding and combating synthetic identity fraud across African markets in 2026. Covers how fraudsters exploit fragmented registry systems, BVN/NIN/Ghana Card spoofing techniques, AI-generated document fraud, liveness bypass attacks, and the detection architecture that stops synthetic identities before they cost you.",
		icon: DetectiveIcon,
		category: "PDF Guide",
		readTime: "32 min read",
		pages: "30 pages",
		pdfUrl:
			"https://storage.readdy-site.link/project_files/e867a79c-6ad4-431f-b9b4-472c3bcdc336/d238570a-bfa0-4956-8b31-02854c1be75f_VA_Article2_Synthetic_Identity_Fraud_2026-1-1.pdf?v=8a5e5e12e5cbe59fe0018e3a2a38f8b6",
		isNew: false,
		dateAdded: "2026-05-18",
		teaserContent: [
			"Why Africa is the fastest-growing target for synthetic identity fraud: how fragmented national registry systems, inconsistent document standards, and low biometric database penetration create structural exploitation windows for organised fraud networks",
			"The five synthetic identity construction patterns documented in African markets: BVN farming, NIN-document mismatch injection, Ghana Card clone layering, ghost applicant stacking, and AI-generated selfie bypass — with real detection signatures for each",
			"Registry gap exploitation mechanics: how fraudsters use the lag between NIMC enrollment and BVN linkage, the NIA verification API downtime windows, and IPRS query failure fallbacks to inject synthetic profiles into compliant onboarding flows",
			"Liveness detection bypass evolution in 2026: 3D mask attacks, deepfake video injection, and high-resolution print attacks calibrated to West and East African biometric thresholds — and why ISO 30107-3 Level 2 compliance is now the minimum defensible standard",
			"The cost calculation operators underreport: why synthetic identity fraud losses in African fintech are 3–5x higher than card fraud losses when you include downstream credit exposure, regulatory penalty risk, and correspondent banking derisking triggers",
		],
		gatedContent: [
			"Synthetic identity fraud detection matrix: 40-signal scoring model covering document authenticity, registry cross-validation, behavioural patterns, device fingerprinting, and network graph indicators — calibrated for Nigerian, Kenyan, Ghanaian, and South African markets",
			"Registry cross-validation architecture guide: how to build BVN-NIN-NIMC triangulation, Ghana Card NIA real-time verification, IPRS Huduma Namba cross-check, and DHA Smart ID liveness matching into a single fraud signal layer",
			"Liveness detection vendor evaluation scorecard: ISO 30107-3 Level 2 compliance assessment, African demographic accuracy testing protocol, deepfake and 3D mask bypass resistance benchmarking, and latency thresholds for mobile-first onboarding",
			"Synthetic identity network graph detection playbook: how to identify fraud rings using device ID clustering, shared biometric partial-match flagging, velocity pattern analysis, and referral network anomaly detection",
			"AI-generated document detection checklist: metadata integrity checks, font embedding analysis, micro-print resolution testing, hologram simulation detection, and printer artefact pattern recognition for Nigerian, Ghanaian, Kenyan, and South African ID documents",
			"Fraud operations escalation matrix: alert triage workflow, case management SLAs, law enforcement referral thresholds, and NFIU/FIC/CBK suspicious activity reporting templates triggered by confirmed synthetic identity detection",
			"Post-fraud remediation playbook: account suspension procedures, credit bureau reporting, registry authority notification, and correspondent bank disclosure requirements following a synthetic identity fraud confirmation",
			"Synthetic identity fraud ROI calculator: input your monthly onboarding volume, current false negative rate, average exposure per synthetic account, and regulatory penalty probability to produce an annualised fraud loss estimate and detection investment justification",
		],
	},
	{
		id: "verifyafrica-onboarding-revenue-gap-2026",
		title:
			"The African Fintech Onboarding Gap: How KYC Friction Is Silently Costing You Customers",
		description:
			"A data-driven revenue analysis showing how KYC friction costs African fintechs millions annually. Covers the $2M+ annual LTV loss calculation at 10,000 monthly onboarding attempts, the 72-hour rule for lost users, the CBN March 2026 Baseline Standards mandate, and what the top 10% of African fintech operators do differently to achieve 85%+ onboarding conversion.",
		icon: ChartLineIcon,
		category: "PDF Guide",
		readTime: "30 min read",
		pages: "11 pages",
		pdfUrl:
			"https://storage.readdy-site.link/project_files/e867a79c-6ad4-431f-b9b4-472c3bcdc336/3e0913b1-19e6-4133-8941-deea8bd34ce3_VA_Article4_Onboarding_Revenue_Gap_2026-1-1.pdf?v=dbe1a06e7242f8fbaae568fff720f9e4",
		isNew: false,
		dateAdded: "2026-05-15",
		teaserContent: [
			"The metric that explains why your growth is slower than it should be: why KYC false positive rates are a growth metric, not just a compliance metric — and how the CBN March 2026 mandate is simultaneously a revenue opportunity",
			"The real cost of a false positive: a conservative LTV calculation showing $2M+ annual loss at 10,000 monthly onboarding attempts, with a scaled table from 5,000 to 100,000 monthly attempts including CAC waste",
			"The 72-hour rule: why the standard LTV calculation understates the true commercial cost of a KYC rejection — your rejected users register on a competing platform within 72 hours",
			"Why KYC friction is structurally higher in Africa than any other market: address verification failure, document format gaps, biometric accuracy gaps, and registry query absence explained",
			"What the top 10% of African fintech operators do differently: registry-first verification, alternative pathways, confidence scoring, tiered friction, and monthly false positive rate review",
		],
		gatedContent: [
			"Complete KYC friction revenue loss self-assessment framework: all input variables (monthly attempts, conversion rate, false positive rate, ARPU, LTV, CAC) with guided calculation to produce your annual total",
			"CBN Baseline Standards compliance mapping: how all 10 requirements of Circular BSD/DIR/PUB/LAB/019/002 map to specific conversion improvements — compliance and revenue optimisation as one investment",
			"Registry-first implementation guide: NIBSS, NIMC, IPRS, and NIA query architecture — how to build the verification layer that reduces false positives and satisfies the CBN mandate simultaneously",
			"Confidence scoring routing matrix: how to route high-confidence, borderline, and low-confidence users to approval, enhanced monitoring, and manual review — eliminating binary pass/fail false positives",
			"Alternative verification pathway decision trees: Ghana Card unavailable, address verification failure, liveness failure — the exact fallback architecture that eliminates dead ends in the onboarding flow",
			"Biometric accuracy gap remediation: the 10–34 percentage point error rate documented for darker skin tones, and how VerifyAfrica's liveness models trained on West, East, and Southern African demographics address this",
			"Monthly false positive rate review template: tracking false positives by verification step, document type, demographic segment, and market — with threshold adjustment and model update protocols",
			"The 85% vs 65–70% conversion gap analysis: the architecture and operational differences between top-decile African fintech operators and the median, with implementation roadmap to close the gap",
		],
	},
	{
		id: "verifyafrica-series-a-due-diligence-2026",
		title:
			"Series A Due Diligence in Africa: The 2026 Investor Compliance Guide",
		description:
			"A comprehensive guide to navigating investor-grade due diligence for Series A fundraising in Africa in 2026. Covers KYC/AML obligations for investors and founders, regulatory readiness across key African markets, data room compliance requirements, beneficial ownership disclosure, and enforcement trends affecting African tech startups raising institutional capital.",
		icon: ChartPieIcon,
		category: "PDF Guide",
		readTime: "35 min read",
		pages: "33 pages",
		pdfUrl:
			"https://storage.readdy-site.link/project_files/e867a79c-6ad4-431f-b9b4-472c3bcdc336/7a8358a3-80f9-4ae9-8cc0-54a0892cac90_VA_Article3_Series_A_Due_Diligence_2026-1-1.pdf?v=36635a8d0f5500d702687d9ca396053b",
		isNew: false,
		dateAdded: "2026-05-12",
		teaserContent: [
			"Series A KYC obligations for institutional investors: how VC funds, family offices, and development finance institutions apply enhanced due diligence to African startup founders and cap tables before wiring term sheet capital",
			"Regulatory readiness as a fundraising signal: how CBN, FIC, CBK, and BoG licensing status, AML programme maturity, and data protection compliance directly influence investor risk appetite and valuation multiples at Series A",
			"Beneficial ownership disclosure requirements: FATF-aligned UBO thresholds, nominee shareholder red flags, and how African founders must structure cap table transparency to satisfy LP-level due diligence requirements from US and European fund managers",
			"Data room compliance architecture: what investor legal teams actually look for in KYC documentation, regulatory correspondence, board resolutions, and compliance officer appointment records during Series A legal due diligence",
			"Enforcement trends shaping African startup fundraising in 2026: CBN fintech licensing crackdowns, FIC administrative penalties, and how regulatory non-compliance has derailed late-stage deals and triggered escrow holdbacks across West and East Africa",
		],
		gatedContent: [
			"Complete Series A investor due diligence checklist: 60-point KYC/AML readiness matrix mapped to CBN, FIC, CBK, BoG, and FATF requirements with red/amber/green status indicators",
			"Data room compliance blueprint: folder structure, document naming conventions, and mandatory regulatory filings that satisfy Tier 1 VC and DFI legal teams in 2026",
			"Beneficial ownership disclosure template: UBO declaration forms, nominee shareholder disclosure letters, and cap table annotation guide aligned to FATF Recommendation 24 and African national UBO registers",
			"Regulatory readiness scorecard: self-assessment tool for African founders to benchmark AML programme maturity, licensing status, and data protection compliance before entering Series A diligence",
			"Investor KYC package builder: step-by-step guide to assembling founder identity documents, source of funds evidence, and corporate registry extracts that satisfy LP-level due diligence requirements",
			"Term sheet compliance clauses: annotated examples of KYC representations, regulatory warranty language, and compliance condition precedents appearing in 2025-2026 African Series A term sheets",
			"Post-investment compliance obligations: board-level AML governance requirements, investor reporting obligations, and regulatory change notification duties triggered by Series A institutional investment",
			"African Series A regulatory risk matrix: jurisdiction-by-jurisdiction breakdown of licensing requirements, enforcement risk, and compliance cost estimates for Nigeria, Kenya, South Africa, Ghana, and Egypt",
		],
	},
	{
		id: "verifyafrica-kyc-ghana-guide-2026",
		title: "KYC in Ghana: The 2026 Compliance Guide",
		description:
			"A comprehensive guide to navigating Ghana's Know Your Customer landscape in 2026. Covers Bank of Ghana tiered KYC mandates, Ghana Card / NIA integration, Ghana Data Protection Act compliance, FIC AML/CFT guidance, and enforcement actions affecting banks, fintechs, mobile money operators, and capital market intermediaries.",
		icon: ShieldCheckIcon,
		category: "PDF Guide",
		readTime: "33 min read",
		pages: "31 pages",
		pdfUrl:
			"https://storage.readdy-site.link/project_files/e867a79c-6ad4-431f-b9b4-472c3bcdc336/34c82c06-a1c2-4710-bf4e-3558a97beca3_VerifyAfrica_KYC_Ghana_Guide_2026-main.pdf?v=0afece7e9da2a8d0e3d5c5a68edbe075",
		isNew: false,
		dateAdded: "2026-05-05",
		teaserContent: [
			"Bank of Ghana tiered KYC framework: how simplified, standard, and enhanced due diligence classifications drive document requirements and transaction limits for Ghanaian fintechs and rural banks",
			"Ghana Card / NIA integration: real-time identity verification via the National Identification Authority, phased rollout of the Ghana Card as sole ID, and fallback procedures for legacy voter ID and NHIS card holders",
			"Ghana Data Protection Act compliance in KYC: lawful processing grounds for biometric data, data controller registration with the Data Protection Commission, and cross-border transfer restrictions when verifying Ghanaian citizens",
			"Financial Intelligence Centre (FIC) guidance: AML/CFT reporting obligations, suspicious transaction reporting workflows, and sector-specific compliance for banks, forex bureaus, and mobile money operators",
			"Sector-specific enforcement snapshot: SEC Ghana capital markets KYC, NCA mobile money agent verification mandates, and GIPC foreign investment due diligence requirements shaping compliance in 2026",
		],
		gatedContent: [
			"Complete Ghana KYC requirement matrix by customer risk tier with BoG-aligned document acceptance rules and transaction limit mapping",
			"Ghana Card verification API integration guide with NIA endpoint mapping, sandbox onboarding steps, and error handling for real-time verification",
			"BoG financial institution licensing KYC prerequisites: prudential guidelines compliance, customer onboarding audit checklists, and remediation templates",
			"FIC suspicious transaction reporting template with STR filing workflows, deadlines, and escalation matrices for banks and MMOs",
			"Ghana Data Protection Act data protection impact assessment template tailored for biometric KYC processing and DPC registration workflows",
			"Mobile money and MTN MoMo agent KYC workflow: BoG agent eligibility criteria, biometric enrollment, liveness detection, and transaction monitoring thresholds",
			"Ghanaian PEP and politically exposed person screening guide with West African databases, adverse media sources, and political exposure tiering",
			"SEC Ghana and NCA compliance examination preparation pack: inspection checklists, documentation requirements, and remediation templates for capital market and telecom operators",
		],
	},
	{
		id: "verifyafrica-kyc-kenya-guide-2026",
		title: "KYC in Kenya: The 2026 Compliance Guide",
		description:
			"A comprehensive guide to navigating Kenya's Know Your Customer landscape in 2026. Covers CBK tiered KYC mandates, POCAMLA amendments, Kenya Data Protection Act compliance, Huduma Namba integration, and enforcement actions affecting banks, fintechs, mobile money operators, and iGaming platforms.",
		icon: ShieldCheckIcon,
		category: "PDF Guide",
		readTime: "34 min read",
		pages: "32 pages",
		pdfUrl:
			"https://storage.readdy-site.link/project_files/e867a79c-6ad4-431f-b9b4-472c3bcdc336/8ef122e5-96ba-4eed-966f-7aff3d90420e_VerifyAfrica_KYC_Kenya_Guide_2026-main.pdf?v=37e8871624e4c9886c3426d9d65fb32a",
		dateAdded: "2026-05-05",
		teaserContent: [
			"CBK tiered KYC framework: how low-risk, medium-risk, and high-risk customer classifications drive document requirements, transaction limits, and ongoing monitoring frequency for Kenyan fintechs",
			"POCAMLA 2024/2025 amendments: expanded reporting entity categories, strengthened beneficial ownership thresholds, and new proliferation financing risk assessment obligations under the FRC",
			"Kenya Data Protection Act compliance in KYC: lawful processing grounds for biometric data, data minimisation principles, cross-border transfer restrictions, and ODPC registration requirements for financial institutions",
			"Huduma Namba / NIIMS integration: real-time identity verification via the Integrated Population Registration System, phased rollout status for digital ID adoption, and fallback procedures for legacy ID holders",
			"Sector-specific KYC enforcement: CBK prudential guidelines for digital credit providers, BCLB betting operator identity verification mandates, and Capital Markets Authority compliance for capital market intermediaries in 2026",
		],
		gatedContent: [
			"Complete Kenya KYC requirement matrix by customer risk tier with CBK-aligned document acceptance rules and transaction limit mapping",
			"POCAMLA reporting entity registration checklist with FRC compliance officer appointment and AML programme documentation templates",
			"Kenya Data Protection Act data protection impact assessment template tailored for biometric KYC processing and ODPC filing workflows",
			"Huduma Namba API integration guide with NIIMS endpoint mapping, sandbox onboarding steps, and error handling for real-time verification",
			"FRC suspicious transaction and suspicious activity reporting templates with STR/SAR filing workflows, deadlines, and escalation matrices",
			"Kenyan PEP and domestic influential person screening guide with East African databases, adverse media sources, and political exposure tiering",
			"Mobile money and M-Pesa agent KYC workflow: CBK agent eligibility criteria, biometric enrollment, liveness detection, and transaction monitoring thresholds",
			"CBK digital credit provider licensing KYC prerequisites: prudential guidelines compliance, customer onboarding audit checklists, and remediation templates",
		],
	},
	{
		id: "verifyafrica-kyc-southafrica-guide-2026",
		title: "KYC in South Africa: The 2026 Compliance Guide",
		description:
			"A comprehensive guide to navigating South Africa's Know Your Customer landscape in 2026. Covers FICA 2024 amendments, FIC updated guidance, POPIA data protection compliance, DHA Smart ID integration, and enforcement actions affecting financial services, fintechs, and VASPs.",
		icon: ShieldCheckIcon,
		category: "PDF Guide",
		readTime: "32 min read",
		pages: "30 pages",
		pdfUrl:
			"https://storage.readdy-site.link/project_files/e867a79c-6ad4-431f-b9b4-472c3bcdc336/f4c8fc2e-822a-40dd-8750-29973c9baca9_VerifyAfrica_KYC_SouthAfrica_Guide_2026-main.pdf?v=92a0e6293b58a35291079e85ca5d0641",
		dateAdded: "2026-05-04",
		teaserContent: [
			"FICA 2024 amendments: new accountable institution categories, expanded KYC obligations, and updated risk management programme requirements for South African fintechs",
			"FIC guidance updates: targeted financial sanctions alignment, proliferation financing risk assessment, and Customer Due Diligence remediation timelines for existing relationships",
			"POPIA compliance in KYC: lawful processing conditions, consent requirements, data minimisation principles, and cross-border transfer restrictions when verifying South African citizens",
			"DHA Smart ID integration: real-time identity verification via Home Affairs APIs, Green ID Book deprecation roadmap, and biometric matching requirements for account opening",
			"South African regulatory enforcement snapshot: FIC administrative penalties, Prudential Authority restrictions, and SARB fintech licensing KYC prerequisites in 2026",
		],
		gatedContent: [
			"Complete South Africa KYC requirement matrix by customer risk tier with FICA-aligned document acceptance rules",
			"FICA Accountable Institution registration checklist with compliance officer appointment and risk programme documentation",
			"POPIA data protection impact assessment template tailored for KYC and biometric data processing",
			"DHA Smart ID verification API integration guide with endpoint mapping, sandbox access, and error handling",
			"FIC Targeted Financial Sanctions screening workflow with S/RES/1373 alignment and real-time list updates",
			"South African PEP and domestic influential person screening guide with African-specific databases and adverse media sources",
			"VASP KYC compliance under FIC guidance: travel rule implementation, wallet screening, and transaction monitoring thresholds",
			"South African regulatory examination preparation pack: FIC inspection checklists, documentation requirements, and remediation templates",
		],
	},
	{
		id: "verifyafrica-kyc-nigeria-guide-2026",
		title: "KYC in Nigeria: The 2026 Compliance Guide",
		description:
			"A definitive guide to navigating Nigeria's evolving Know Your Customer landscape in 2026. Covers BVN-NIN integration, CBN tiered KYC mandates, document verification standards, and enforcement timelines for fintechs, banks, and DFS providers.",
		icon: ShieldCheckIcon,
		category: "PDF Guide",
		readTime: "30 min read",
		pages: "28 pages",
		pdfUrl:
			"https://storage.readdy-site.link/project_files/e867a79c-6ad4-431f-b9b4-472c3bcdc336/922d7ee9-d4a8-4a9c-aa75-28f30e9e9807_VerifyAfrica_KYC_Nigeria_Guide_2026-main.pdf?v=61e929957ad5cafcace658337bf955e7",
		dateAdded: "2026-05-04",
		teaserContent: [
			"Nigeria's tiered KYC framework: how BVN, NIN, and NIMC integration requirements differ across Tier 1, Tier 2, and Tier 3 customer classifications",
			"CBN's 2026 digital identity mandates and updated compliance deadlines for fintechs, MMOs, and agent banking networks",
			"Document verification standards for all Nigerian ID types: international passport, driver's license, permanent voter's card, and NIN slip",
			"Regulatory enforcement snapshot: recent CBN fines, operational restrictions, and lessons from 2025 compliance failures",
			"Agent banking and mobile money KYC under updated NFIU guidelines: biometric capture, geolocation, and real-time reporting requirements",
		],
		gatedContent: [
			"Complete Nigeria KYC requirement matrix by customer tier with risk weighting and document acceptance rules",
			"BVN verification API integration checklist with endpoint mapping, sample payloads, and sandbox test cases",
			"NIN linkage compliance timeline: 18-month migration roadmap for existing customer bases with batch verification strategies",
			"Document image quality standards: resolution, lighting, angle, and anti-tampering requirements for each Nigerian ID type",
			"Enhanced Due Diligence trigger conditions specific to Nigerian regulatory expectations and sector-specific thresholds",
			"CBN suspicious transaction reporting template with filing workflows, deadlines, and escalation matrices",
			"Agent banking KYC workflow diagram: biometric enrollment, liveness detection, and geotagged transaction logging",
			"Nigeria-specific PEP and sanctions screening guide: accessing local databases, adverse media sources, and watchlist coverage",
		],
	},
	{
		id: "verifyafrica-kyc-africa-2025",
		title: "KYC in Africa: The 2025 Compliance Landscape",
		description:
			"A comprehensive report mapping why global KYC tools fail in Africa, how 54 fragmented national identity systems create compliance liability, and what regulated businesses must do to build audit-ready, multi-market infrastructure before the window closes.",
		icon: ShieldCheckIcon,
		category: "PDF Guide",
		readTime: "25 min read",
		pages: "24 pages",
		pdfUrl:
			"https://storage.readdy-site.link/project_files/e867a79c-6ad4-431f-b9b4-472c3bcdc336/179228f6-217a-403a-beae-cca2db9f91c4_VerifyAfrica_KYC_Africa_2025_Main-.pdf?v=b43fc6288706d73b5e186eb41f58eba3",
		dateAdded: "2026-04-28",
		teaserContent: [
			"The 54-market fragmentation problem: why identity verification in Africa requires fundamentally different infrastructure from Western markets",
			"National identity system deep-dives: how Nigeria's NIMC, BVN and Voter ID layers work, South Africa's POPIA-compliant DHA access, Kenya's IPRS structural differences, and Ghana's NIA real-time integration",
			"Regulatory enforcement timeline: CBN digital identity mandates, South Africa FIC updates, Kenya CBK KYC tightening, and FATF greylist implications",
			"Cost of compliance failure analysis: regulatory fines, lost banking partnerships, onboarding churn, and fraud losses from inadequate screening",
			"Infrastructure maturity assessment: which markets have registry APIs, which require document-level verification, and where manual review is still unavoidable",
		],
	},
	{
		id: "african-kyc-compliance-checklist-2025",
		title: "African KYC Compliance Checklist 2025",
		description:
			"A comprehensive checklist covering Know Your Customer requirements across all 54 African countries. Built for compliance teams operating in multiple jurisdictions.",
		icon: ShieldCheckIcon,
		category: "Checklist",
		readTime: "15 min read",
		pages: "12 pages",
		teaserContent: [
			"Overview of KYC requirements across ECOWAS, EAC, SADC, and other regional blocs",
			"Key regulatory bodies per country: CBN, FSCA, CBK, BCLB, and more",
			"Document verification standards and acceptable ID types by region",
			"Risk-based approach fundamentals and customer classification tiers",
			"Common compliance gaps that trigger regulatory penalties",
		],
		gatedContent: [
			"Country-by-country document requirements matrix (all 54 nations)",
			"Enhanced Due Diligence trigger conditions per jurisdiction",
			"PEP screening workflow with African-specific databases",
			"Customer risk scoring template with weighted criteria",
			"Ongoing monitoring frequency matrix by risk category",
			"Audit-ready documentation checklist for regulatory examinations",
			"Cross-border data sharing compliance requirements",
			"Implementation timeline and resource allocation guide",
		],
	},
	{
		id: "aml-risk-assessment-template",
		title: "AML Risk Assessment Template for African Fintechs",
		description:
			"A practical, ready-to-use risk assessment framework designed specifically for fintech companies operating across African markets.",
		icon: ChartBarHorizontalIcon,
		category: "Template",
		readTime: "20 min read",
		pages: "18 pages",
		teaserContent: [
			"How a risk-based approach fundamentally changes resource allocation in African AML programs",
			"Geographic risk mapping: money laundering typologies unique to West Africa, East Africa, and Southern Africa",
			"Customer risk factor weighting for mobile money, agent banking, and cross-border remittance products",
			"Integration of local transaction pattern data to reduce false positives in sanctions screening",
			"Building defensible risk-scoring methodology that satisfies both FATF and local regulators",
		],
		gatedContent: [
			"Editable risk assessment scoring matrix with 47 weighted risk factors",
			"5-tier customer risk classification framework with threshold calculators",
			"Geographic risk ratings for all 54 African countries with regulatory context",
			"Product and delivery channel risk weighting calculator (mobile money, cards, remittance)",
			"Transaction monitoring threshold setting guide with sample rules",
			"AML policy template pre-filled for African fintech licensing requirements",
			"Quarterly staff training curriculum with African financial crime typologies",
			"Regulatory reporting calendar with 18 jurisdiction-specific deadlines",
		],
	},
	{
		id: "pep-screening-guide-africa",
		title: "PEP Screening Guide: Africa Edition",
		description:
			"Everything you need to know about screening Politically Exposed Persons in African markets, from domestic PEPs to foreign and international organization PEPs.",
		icon: UserFocusIcon,
		category: "Guide",
		readTime: "12 min read",
		pages: "10 pages",
		teaserContent: [
			"Definition of PEPs under FATF and African regulatory frameworks",
			"Categories: domestic, foreign, international organization, and family/close associates",
			"Why PEP screening is critical in African financial services",
			"Common challenges: limited databases, name variations, political instability",
			"Regulatory expectations across major African jurisdictions",
		],
		gatedContent: [
			"Step-by-step PEP screening workflow diagram",
			"African PEP database directory with coverage and accuracy ratings",
			"Name matching best practices for African naming conventions",
			"Adverse media screening sources and alert configuration",
			"PEP risk escalation matrix and approval workflows",
			"Ongoing monitoring schedule for PEP relationships",
			"Red flags and suspicious activity indicators specific to African PEPs",
			"Case studies: real PEP compliance failures and lessons learned",
		],
	},
	{
		id: "biometric-verification-playbook",
		title: "Biometric Verification Implementation Playbook",
		description:
			"A step-by-step implementation guide for deploying biometric identity verification across African markets, from vendor selection to go-live.",
		icon: FingerprintIcon,
		category: "Playbook",
		readTime: "25 min read",
		pages: "22 pages",
		teaserContent: [
			"Regulatory landscape for biometric data across Africa: NDPR, POPIA, Kenya DPA, and emerging frameworks",
			"Data residency requirements and their architectural implications for cloud vs. on-premise deployments",
			"Accuracy and bias testing protocols for African demographic diversity (skin tone, age, lighting conditions)",
			"Liveness detection standards: ISO 30107 compliance, passive vs. active approaches, and deepfake countermeasures",
			"Integration architecture patterns: API, SDK, and hosted solutions for different deployment scenarios",
		],
		gatedContent: [
			"Vendor evaluation scorecard with 25 weighted criteria (accuracy, latency, African coverage, pricing)",
			"Technical integration checklist with test case specifications for each platform",
			"Liveness detection configuration matrix by risk tier and regulatory requirement",
			"Data protection impact assessment template specific to biometric processing",
			"Consent workflow design patterns that satisfy NDPR, POPIA, and GDPR simultaneously",
			"Performance benchmarking framework with industry KPIs and measurement protocols",
			"Biometric matching failure fallback procedures and manual review routing",
			"Go-live readiness checklist with post-launch monitoring and model drift detection plan",
		],
	},
	{
		id: "cross-border-data-protection-checklist",
		title: "Cross-Border Data Protection Compliance Checklist",
		description:
			"Navigate the complex web of data protection regulations when operating across African and European markets. Side-by-side comparison and actionable compliance steps.",
		icon: GlobeIcon,
		category: "Checklist",
		readTime: "18 min read",
		pages: "16 pages",
		teaserContent: [
			"Jurisdiction overlap analysis: when operating in both Europe and Nigeria triggers dual compliance obligations",
			"Consent mechanism comparison: how GDPR and NDPR differ on explicit consent, sensitive data, and withdrawal rights",
			"Cross-border data transfer legal bases: adequacy decisions, standard contractual clauses, and binding corporate rules",
			"Data breach notification divergence: 72-hour rules, authority differences, and documentation requirements",
			"Building a unified data protection program that satisfies both frameworks without duplicating effort",
		],
		gatedContent: [
			"Editable side-by-side regulatory comparison matrix (GDPR vs NDPR vs POPIA vs Kenya DPA)",
			"Multi-jurisdiction data mapping template with flow diagram placeholders",
			"Consent form template pack compliant with all 4 frameworks in one workflow",
			"Data breach notification decision tree and timeline calculator by jurisdiction",
			"DPO appointment requirements matrix with responsibility checklists per country",
			"Cross-border transfer impact assessment template with risk scoring",
			"Record of processing activities template with 54-country regulatory trigger mapping",
			"Regulatory authority contact directory with escalation procedures",
		],
	},
	{
		id: "fintech-onboarding-compliance-playbook",
		title: "Fintech Customer Onboarding Compliance Playbook",
		description:
			"The complete playbook for building a compliant, friction-free customer onboarding process that satisfies regulators while converting users.",
		icon: UserPlusIcon,
		category: "Playbook",
		readTime: "22 min read",
		pages: "20 pages",
		teaserContent: [
			"Regulatory onboarding requirements for fintechs across Africa",
			"Balancing compliance friction with user experience and conversion",
			"Identity verification tiers: basic, standard, enhanced due diligence",
			"Document verification best practices for African ID documents",
			"Real-time vs. batch verification: when to use each approach",
		],
		gatedContent: [
			"Complete onboarding workflow diagram with decision trees",
			"Document acceptance matrix by country and ID type",
			"Customer risk scoring at point of onboarding",
			"Approval matrix and escalation procedures",
			"SLA targets for verification turnaround by risk tier",
			"User experience optimization for mobile-first African markets",
			"Re-verification triggers and periodic review schedule",
			"Onboarding compliance audit checklist and self-assessment tool",
		],
	},
];

const resourcesSchema = [
	createWebPageSchema({
		path: RESOURCES_SEO.canonical,
		type: "CollectionPage",
		name: RESOURCES_SEO.title,
		description: RESOURCES_SEO.description,
	}),
	createBreadcrumbList(RESOURCES_SEO.canonical, [
		{ name: "Home", path: "/" },
		{ name: "Resources", path: RESOURCES_SEO.canonical },
	]),
];

export default function ResourcesPage() {
	const { openDemo } = useDemoModal();
	const [unlockedResources, setUnlockedResources] = useState<string[]>([]);

	useEffect(() => {
		const stored = localStorage.getItem("verifyafrica_unlocked");
		if (stored) {
			try {
				setUnlockedResources(JSON.parse(stored));
			} catch {
				setUnlockedResources([]);
			}
		}
	}, []);

	// Scroll to hash on load
	useEffect(() => {
		const hash = window.location.hash;
		if (hash) {
			const id = hash.replace("#", "");
			const element = document.getElementById(id);
			if (element) {
				setTimeout(() => {
					element.scrollIntoView({ behavior: "smooth", block: "start" });
				}, 300);
			}
		}
	}, []);

	const handleUnlock = (id: string) => {
		setUnlockedResources((prev) => {
			if (prev.includes(id)) return prev;
			const updated = [...prev, id];
			localStorage.setItem("verifyafrica_unlocked", JSON.stringify(updated));
			return updated;
		});
	};

	return (
		<div className="min-h-screen bg-gray-50">
			<SEOHead
				title={RESOURCES_SEO.title}
				description={RESOURCES_SEO.description}
				ogDescription={RESOURCES_SEO.ogDescription}
				twitterDescription={RESOURCES_SEO.twitterDescription}
				keywords={RESOURCES_SEO.keywords}
				canonical={RESOURCES_SEO.canonical}
				imageAlt={RESOURCES_SEO.imageAlt}
				schema={resourcesSchema}
				{...DEFAULT_OG_IMAGE}
			/>
			<Navbar
				onRequestDemo={openDemo}
				variant="solid"
			/>

			<ResourcesHero />

			{/* Resources Grid */}
			<section className="py-24">
				<div className="max-w-7xl mx-auto px-6 lg:px-12">
					<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
						{resources.map((resource) => (
							<ResourceCard
								key={resource.id}
								resource={resource}
								isUnlocked={unlockedResources.includes(resource.id)}
								onUnlock={handleUnlock}
							/>
						))}
					</div>
				</div>
			</section>

			{/* Bottom CTA */}
			<section className="py-24 bg-white border-t border-gray-100">
				<div className="max-w-3xl mx-auto px-6 text-center">
					<div className="w-14 h-14 mx-auto mb-6 bg-teal-100 rounded-2xl flex items-center justify-center">
						<ChatsCircleIcon className="text-2xl text-teal-600" />
					</div>
					<h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
						Need a Custom Compliance Resource?
					</h2>
					<p className="text-gray-500 mb-8 max-w-xl mx-auto leading-relaxed">
						Our compliance team can build tailored checklists, templates, and
						guides specific to your industry and target markets across Africa.
					</p>
					<button
						onClick={openDemo}
						className="px-8 py-3 bg-teal-500 text-white text-sm font-medium rounded-lg hover:bg-teal-600 transition-all whitespace-nowrap cursor-pointer shadow-sm"
					>
						Talk to Our Team
					</button>
				</div>
			</section>

			<Suspense fallback={null}>
				<Footer />
			</Suspense>
			<BackToTop />
		</div>
	);
}
