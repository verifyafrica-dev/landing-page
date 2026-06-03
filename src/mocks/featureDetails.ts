import type { LucideIcon } from 'lucide-react';
import {
  AlertTriangle,
  BarChart2,
  BarChart3,
  Bell,
  Brain,
  Bug,
  Building,
  Building2,
  Camera,
  Code2,
  Database,
  FileText,
  Fingerprint,
  Gauge,
  GitBranch,
  Globe,
  History,
  LayoutDashboard,
  LineChart,
  Link,
  List,
  Map,
  MapPin,
  Newspaper,
  PieChart,
  Radar,
  RefreshCw,
  Route,
  Scan,
  ScanLine,
  Settings,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  UserSearch,
  Users,
  Video,
  Webhook,
  Workflow,
  Bot,
  Navigation,
  FileChartColumn,
  Star,
  Heart,
} from 'lucide-react';

export interface FeatureDetail {
  slug: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  stats: { value: string; label: string }[];
  howItWorks: { step: number; title: string; description: string }[];
  capabilities: { icon: LucideIcon; title: string; description: string }[];
  useCases: { industry: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const featureDetails: FeatureDetail[] = [
  {
    slug: 'identity-verification',
    icon: PLACEHOLDER_shield-check-line',
    title: 'Identity Verification',
    tagline: 'Verify any African identity in seconds — not days.',
    description:
      'VerifyAfrica\'s AI-driven identity verification engine supports national IDs, passports, driver\'s licences, and voter cards across all 54 African countries. Reduce fraud, meet KYC obligations, and onboard customers faster than ever.',
    heroImage:
      'https://readdy.ai/api/search-image?query=digital%20identity%20verification%20technology%20concept%20with%20glowing%20shield%20and%20document%20scan%20lines%20on%20dark%20teal%20background%20abstract%20modern%20African%20fintech%20security%20illustration%20clean%20minimal%20geometric%20shapes&width=1200&height=600&seq=feat-idv-hero&orientation=landscape',
    stats: [
      { value: '54', label: 'African Countries' },
      { value: '99.2%', label: 'Accuracy Rate' },
      { value: '<3s', label: 'Average Check Time' },
      { value: '40+', label: 'Document Types' },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Document Capture',
        description:
          'The user captures or uploads a government-issued ID. Our SDK supports camera capture, file upload, and NFC chip reading for e-passports.',
      },
      {
        step: 2,
        title: 'AI Extraction & Validation',
        description:
          'Our OCR and AI models extract data fields, detect tampering, check MRZ integrity, and cross-reference against issuing authority patterns.',
      },
      {
        step: 3,
        title: 'Database Cross-Check',
        description:
          'Extracted data is verified against national registry databases and government APIs where available, confirming the document is genuine and active.',
      },
      {
        step: 4,
        title: 'Risk Score & Decision',
        description:
          'A risk score is generated and a pass/fail/review decision is returned via API in under 3 seconds, with a full audit trail.',
      },
    ],
    capabilities: [
      { icon: PLACEHOLDER_file-text-line', title: 'Multi-Document Support', description: 'National IDs, passports, driver\'s licences, voter cards, residence permits, and more.' },
      { icon: PLACEHOLDER_scan-line', title: 'MRZ & Barcode Reading', description: 'Machine-readable zone and barcode extraction for instant data parsing.' },
      { icon: PLACEHOLDER_shield-flash-line', title: 'Tamper Detection', description: 'AI models detect photo substitution, font inconsistencies, and digital manipulation.' },
      { icon: PLACEHOLDER_database-2-line', title: 'Registry Verification', description: 'Direct integration with national registries in Nigeria, Ghana, Kenya, South Africa, and more.' },
      { icon: PLACEHOLDER_global-line', title: 'Pan-African Coverage', description: 'All 54 African countries supported with localised document templates.' },
      { icon: PLACEHOLDER_code-s-slash-line', title: 'REST API & SDK', description: 'Simple REST API and mobile SDKs for iOS and Android for fast integration.' },
    ],
    useCases: [
      { industry: 'Fintech & Neobanks', description: 'Onboard customers compliantly in minutes, meeting CBN, BOG, and other central bank KYC requirements.' },
      { industry: 'iGaming & Betting', description: 'Verify player age and identity to comply with gaming authority regulations across Africa.' },
      { industry: 'FX & Remittance', description: 'Meet FATF travel rule requirements and verify senders/receivers for cross-border transfers.' },
      { industry: 'Marketplaces', description: 'Build trust between buyers and sellers with verified identity badges.' },
    ],
    faqs: [
      { question: 'Which African countries are supported?', answer: 'All 54 African countries are supported. Coverage depth varies — some countries have direct registry integrations while others use document-level verification.' },
      { question: 'How long does a verification take?', answer: 'Most verifications complete in under 3 seconds. Complex cases requiring manual review are flagged and typically resolved within minutes.' },
      { question: 'Is the data stored?', answer: 'Document images are processed and discarded by default. Extracted data is retained per your data retention policy and our NDPR/GDPR-compliant infrastructure.' },
    ],
  },
  {
    slug: 'business-verification-kyb',
    icon: PLACEHOLDER_building-line',
    title: 'Business Verification (KYB)',
    tagline: 'Know every business you work with — from registration to UBO.',
    description:
      'VerifyAfrica\'s KYB engine verifies companies across Africa using registry integrations, corporate structure analysis, and director/UBO checks. Onboard business clients confidently and stay compliant with FATF and local regulations.',
    heroImage:
      'https://readdy.ai/api/search-image?query=corporate%20business%20verification%20concept%20with%20building%20silhouette%20and%20network%20graph%20connections%20on%20clean%20teal%20white%20background%20abstract%20modern%20African%20business%20compliance%20illustration%20geometric%20minimal&width=1200&height=600&seq=feat-kyb-hero&orientation=landscape',
    stats: [
      { value: '30+', label: 'Country Registries' },
      { value: '5min', label: 'Average KYB Time' },
      { value: '100%', label: 'UBO Tracing' },
      { value: '24/7', label: 'Monitoring' },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Company Lookup',
        description: 'Enter a company name or registration number. We query national business registries to retrieve official incorporation data.',
      },
      {
        step: 2,
        title: 'Corporate Structure Mapping',
        description: 'We map the full ownership structure, subsidiaries, parent companies, and beneficial owners, to identify control chains.',
      },
      {
        step: 3,
        title: 'Director & UBO Verification',
        description: 'Each director and ultimate beneficial owner (UBO) is individually verified using our KYC engine and screened against AML databases.',
      },
      {
        step: 4,
        title: 'Risk Report & Ongoing Monitoring',
        description: 'A comprehensive risk report is generated. Ongoing monitoring alerts you to any changes in company status, directors, or sanctions.',
      },
    ],
    capabilities: [
      { icon: PLACEHOLDER_building-4-line', title: 'Registry Integration', description: 'Direct connections to CAC (Nigeria), CIPC (South Africa), RGC (Ghana), and 27+ more registries.' },
      { icon: PLACEHOLDER_git-branch-line', title: 'Ownership Mapping', description: 'Visualise full corporate ownership trees with percentage stakes and control flags.' },
      { icon: PLACEHOLDER_user-search-line', title: 'UBO Identification', description: 'Automatically identify and verify all beneficial owners above configurable thresholds (e.g. 10%, 25%).' },
      { icon: PLACEHOLDER_file-list-3-line', title: 'Document Collection', description: 'Collect and verify certificates of incorporation, memoranda, and financial statements.' },
      { icon: PLACEHOLDER_alert-line', title: 'AML Screening', description: 'Screen all entities and individuals against global sanctions, PEP, and adverse media databases.' },
      { icon: PLACEHOLDER_refresh-line', title: 'Ongoing Monitoring', description: 'Continuous monitoring of company status, director changes, and new sanctions hits.' },
    ],
    useCases: [
      { industry: 'Banks & Lenders', description: 'Perform thorough due diligence on corporate borrowers and business account applicants.' },
      { industry: 'Payment Processors', description: 'Verify merchant businesses before onboarding to prevent fraud and money laundering.' },
      { industry: 'Insurance', description: 'Validate business clients and their principals before issuing commercial policies.' },
      { industry: 'B2B Marketplaces', description: 'Verify supplier and buyer businesses to build a trusted trading ecosystem.' },
    ],
    faqs: [
      { question: 'What registries do you connect to?', answer: 'We connect to 30+ African business registries including CAC (Nigeria), CIPC (South Africa), RGC (Ghana), ORC (Kenya), and more. Global registries are also supported.' },
      { question: 'Can you verify foreign companies operating in Africa?', answer: 'Yes. We support verification of foreign-registered entities and their local subsidiaries or branches.' },
      { question: 'What is the UBO threshold?', answer: 'The default UBO threshold is 25% ownership or control, but this is fully configurable to match your regulatory requirements.' },
    ],
  },
  {
    slug: 'aml-sanctions-screening',
    icon: PLACEHOLDER_alert-line',
    title: 'AML & Sanctions Screening',
    tagline: 'Screen every customer against every list — in real time.',
    description:
      'Real-time AML screening against 1,500+ global sanctions lists, PEP databases, and adverse media sources. Catch high-risk individuals and entities at onboarding and throughout the customer lifecycle with continuous monitoring.',
    heroImage:
      'https://readdy.ai/api/search-image?query=AML%20anti%20money%20laundering%20screening%20concept%20with%20radar%20scan%20and%20alert%20icons%20on%20dark%20teal%20background%20abstract%20modern%20compliance%20technology%20illustration%20clean%20geometric%20shapes%20minimal&width=1200&height=600&seq=feat-aml-hero&orientation=landscape',
    stats: [
      { value: '1,500+', label: 'Sanctions Lists' },
      { value: '<500ms', label: 'Screening Speed' },
      { value: '200+', label: 'Countries Covered' },
      { value: '99.9%', label: 'Uptime SLA' },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Data Submission',
        description: 'Submit individual or entity data via API — name, date of birth, nationality, and any available identifiers.',
      },
      {
        step: 2,
        title: 'Fuzzy Matching',
        description: 'Our AI-powered fuzzy matching engine screens against 1,500+ lists, handling name variations, transliterations, and aliases.',
      },
      {
        step: 3,
        title: 'Match Scoring & Deduplication',
        description: 'Each potential match is scored for confidence. False positives are filtered using contextual data to reduce alert fatigue.',
      },
      {
        step: 4,
        title: 'Alert & Workflow',
        description: 'Confirmed matches trigger alerts with full match details. Your team can review, escalate, or clear matches within the dashboard.',
      },
    ],
    capabilities: [
      { icon: PLACEHOLDER_global-line', title: '1,500+ Lists', description: 'OFAC, UN, EU, HMT, FATF, and 1,500+ national and international sanctions lists.' },
      { icon: PLACEHOLDER_user-star-line', title: 'PEP Screening', description: 'Politically Exposed Persons database covering 200+ countries with family and close associates.' },
      { icon: PLACEHOLDER_newspaper-line', title: 'Adverse Media', description: 'AI-powered adverse media screening across news sources in 50+ languages.' },
      { icon: PLACEHOLDER_brain-line', title: 'Fuzzy Matching AI', description: 'Handles name variations, transliterations, nicknames, and aliases with high accuracy.' },
      { icon: PLACEHOLDER_refresh-line', title: 'Continuous Monitoring', description: 'Ongoing screening of your entire customer base with real-time alerts on new hits.' },
      { icon: PLACEHOLDER_dashboard-line', title: 'Case Management', description: 'Built-in case management for reviewing, escalating, and documenting screening decisions.' },
    ],
    useCases: [
      { industry: 'Fintech & Banking', description: 'Meet FATF, CBN, and local AML obligations with automated screening at onboarding and ongoing monitoring.' },
      { industry: 'FX & Remittance', description: 'Screen senders and receivers for every transaction to comply with travel rule requirements.' },
      { industry: 'iGaming', description: 'Identify PEPs and sanctioned individuals before they deposit or withdraw funds.' },
      { industry: 'Insurance', description: 'Screen policyholders and beneficiaries to prevent insurance fraud and sanctions violations.' },
    ],
    faqs: [
      { question: 'How do you reduce false positives?', answer: 'Our AI scoring engine uses contextual data (DOB, nationality, ID numbers) to score match confidence and filter out false positives, significantly reducing alert fatigue.' },
      { question: 'Can I screen in bulk?', answer: 'Yes. Our bulk screening API allows you to screen thousands of records simultaneously, ideal for periodic portfolio reviews.' },
      { question: 'What is continuous monitoring?', answer: 'Continuous monitoring re-screens your existing customer base against updated lists automatically, alerting you when a previously clean customer appears on a new list.' },
    ],
  },
  {
    slug: 'fraud-detection',
    icon: PLACEHOLDER_bug-line',
    title: 'Fraud Detection',
    tagline: 'Stop fraud before it costs you — with AI that learns.',
    description:
      'VerifyAfrica\'s AI-powered fraud detection engine analyses behavioural signals, device intelligence, and identity patterns to catch fraudsters at onboarding and throughout the customer lifecycle. Protect your platform without adding friction for legitimate users.',
    heroImage:
      'https://readdy.ai/api/search-image?query=fraud%20detection%20AI%20technology%20concept%20with%20neural%20network%20pattern%20recognition%20and%20alert%20signals%20on%20dark%20teal%20background%20abstract%20modern%20security%20illustration%20clean%20geometric%20shapes%20minimal&width=1200&height=600&seq=feat-fraud-hero&orientation=landscape',
    stats: [
      { value: '94%', label: 'Fraud Catch Rate' },
      { value: '<0.1%', label: 'False Positive Rate' },
      { value: '200+', label: 'Risk Signals' },
      { value: 'Real-time', label: 'Detection Speed' },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Signal Collection',
        description: 'Device fingerprint, IP intelligence, behavioural biometrics, and identity data are collected at the point of interaction.',
      },
      {
        step: 2,
        title: 'AI Risk Modelling',
        description: 'Our ML models analyse 200+ risk signals simultaneously, comparing against known fraud patterns and your historical data.',
      },
      {
        step: 3,
        title: 'Pattern Recognition',
        description: 'Cross-customer pattern analysis detects coordinated fraud rings, synthetic identity clusters, and account takeover attempts.',
      },
      {
        step: 4,
        title: 'Decision & Action',
        description: 'A risk score and recommended action (allow/challenge/block) is returned in real time. Rules are fully configurable.',
      },
    ],
    capabilities: [
      { icon: PLACEHOLDER_smartphone-line', title: 'Device Intelligence', description: 'Device fingerprinting, emulator detection, and VPN/proxy identification.' },
      { icon: PLACEHOLDER_map-pin-2-line', title: 'IP & Geolocation', description: 'IP reputation scoring, impossible travel detection, and geolocation risk signals.' },
      { icon: PLACEHOLDER_user-heart-line', title: 'Behavioural Biometrics', description: 'Typing patterns, mouse movements, and interaction timing to detect bots and account takeovers.' },
      { icon: PLACEHOLDER_links-line', title: 'Network Analysis', description: 'Graph-based analysis to detect fraud rings and shared identity signals across accounts.' },
      { icon: PLACEHOLDER_settings-3-line', title: 'Custom Rules Engine', description: 'Build and deploy custom fraud rules without code using our visual rules builder.' },
      { icon: PLACEHOLDER_line-chart-line', title: 'Adaptive ML', description: 'Models continuously learn from your feedback to improve accuracy over time.' },
    ],
    useCases: [
      { industry: 'Neobanks', description: 'Detect synthetic identities and account takeovers during onboarding and login.' },
      { industry: 'iGaming', description: 'Identify bonus abuse, multi-accounting, and payment fraud before they impact your margins.' },
      { industry: 'Lending', description: 'Catch fraudulent loan applications using identity and behavioural signals.' },
      { industry: 'E-commerce', description: 'Prevent payment fraud and account takeovers on your marketplace or store.' },
    ],
    faqs: [
      { question: 'Does fraud detection add friction for legitimate users?', answer: 'No. Our risk-based approach only adds friction (e.g. step-up verification) for high-risk interactions. Low-risk users experience a seamless flow.' },
      { question: 'Can I customise the risk rules?', answer: 'Yes. Our visual rules builder lets you create, test, and deploy custom rules without writing code. You can also use our API to integrate your own models.' },
      { question: 'What is a fraud ring?', answer: 'A fraud ring is a group of coordinated fraudsters sharing devices, IPs, or identity data. Our network analysis detects these clusters even when individual accounts appear legitimate.' },
    ],
  },
  {
    slug: 'biometrics-liveness',
    icon: PLACEHOLDER_fingerprint-line',
    title: 'Biometrics & Liveness',
    tagline: 'Prove the person is real — not a photo, mask, or deepfake.',
    description:
      'VerifyAfrica\'s biometric verification and liveness detection engine ensures the person presenting a document is genuinely present and alive. Defeat spoofing attacks including printed photos, video replays, 3D masks, and AI-generated deepfakes.',
    heroImage:
      'https://readdy.ai/api/search-image?query=biometric%20face%20recognition%20liveness%20detection%20technology%20concept%20with%20facial%20scan%20grid%20and%20fingerprint%20on%20dark%20teal%20background%20abstract%20modern%20security%20illustration%20clean%20geometric%20shapes%20minimal&width=1200&height=600&seq=feat-bio-hero&orientation=landscape',
    stats: [
      { value: '99.8%', label: 'Liveness Accuracy' },
      { value: '<2s', label: 'Check Duration' },
      { value: '0%', label: 'Deepfake Pass Rate' },
      { value: 'ISO 30107', label: 'Certified Standard' },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Selfie Capture',
        description: 'The user takes a selfie via our SDK. Passive liveness runs automatically — no head turns or blinks required for most checks.',
      },
      {
        step: 2,
        title: 'Liveness Detection',
        description: 'Our AI analyses depth maps, texture, and micro-movements to confirm a live person is present, defeating photos, videos, and masks.',
      },
      {
        step: 3,
        title: 'Facial Matching',
        description: 'The selfie is compared against the document photo using 3D facial geometry matching, achieving 99.8% accuracy.',
      },
      {
        step: 4,
        title: 'Result & Audit Trail',
        description: 'A match score and liveness confidence score are returned. All images and scores are stored in a tamper-proof audit trail.',
      },
    ],
    capabilities: [
      { icon: PLACEHOLDER_camera-line', title: 'Passive Liveness', description: 'No user action required — liveness is detected from a single selfie frame.' },
      { icon: PLACEHOLDER_vidicon-line', title: 'Active Liveness', description: 'Challenge-response liveness for high-risk scenarios requiring stronger assurance.' },
      { icon: PLACEHOLDER_robot-line', title: 'Deepfake Detection', description: 'AI models trained to detect GAN-generated and diffusion-model deepfake faces.' },
      { icon: PLACEHOLDER_scan-2-line', title: '3D Facial Matching', description: '3D geometry-based facial comparison for high accuracy across lighting conditions.' },
      { icon: PLACEHOLDER_smartphone-line', title: 'Mobile SDK', description: 'Native iOS and Android SDKs with optimised camera handling for African network conditions.' },
      { icon: PLACEHOLDER_file-shield-2-line', title: 'ISO 30107 Compliant', description: 'Certified against ISO 30107-3 Presentation Attack Detection standards.' },
    ],
    useCases: [
      { industry: 'Fintech & Banking', description: 'Confirm customer identity at account opening and for high-value transaction authorisation.' },
      { industry: 'iGaming', description: 'Verify player identity and age at registration to meet gaming authority requirements.' },
      { industry: 'Telecoms', description: 'SIM swap prevention and subscriber identity verification.' },
      { industry: 'Healthcare', description: 'Patient identity verification for telemedicine and prescription services.' },
    ],
    faqs: [
      { question: 'Does passive liveness work on all devices?', answer: 'Passive liveness works on any device with a front-facing camera. Our SDK automatically falls back to active liveness on older devices with lower camera quality.' },
      { question: 'Can it detect deepfakes?', answer: 'Yes. Our models are specifically trained on deepfake datasets including GAN and diffusion-model generated faces, achieving a 0% deepfake pass rate in testing.' },
      { question: 'What happens in low-light conditions?', answer: 'Our models are trained on diverse lighting conditions common in African environments. The SDK also provides real-time guidance to users to improve capture quality.' },
    ],
  },
  {
    slug: 'address-verification-geolocation',
    icon: PLACEHOLDER_map-pin-line',
    title: 'Address Verification & Geolocation',
    tagline: 'Confirm where your customers really are — across all of Africa.',
    description:
      'VerifyAfrica\'s address verification and geolocation intelligence engine validates customer addresses and uses location signals to assess risk. Designed for African address formats where traditional postal verification fails.',
    heroImage:
      'https://readdy.ai/api/search-image?query=address%20verification%20geolocation%20map%20pins%20and%20location%20signals%20on%20dark%20teal%20background%20abstract%20modern%20Africa%20map%20technology%20illustration%20clean%20geometric%20shapes%20minimal&width=1200&height=600&seq=feat-addr-hero&orientation=landscape',
    stats: [
      { value: '54', label: 'Countries Covered' },
      { value: '95%', label: 'Address Match Rate' },
      { value: '50+', label: 'Geolocation Signals' },
      { value: 'Real-time', label: 'Risk Assessment' },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Address Submission',
        description: 'The customer submits their address. Our engine normalises it against African address formats, including informal and landmark-based addresses.',
      },
      {
        step: 2,
        title: 'Document-Based Verification',
        description: 'Utility bills, bank statements, and government letters are accepted as proof of address and verified using OCR and AI.',
      },
      {
        step: 3,
        title: 'Geolocation Cross-Check',
        description: 'Device GPS, IP geolocation, and Wi-Fi signals are cross-referenced against the stated address to detect inconsistencies.',
      },
      {
        step: 4,
        title: 'Risk Signal Generation',
        description: 'A location risk score is generated, flagging VPN use, impossible travel, high-risk jurisdictions, and address mismatches.',
      },
    ],
    capabilities: [
      { icon: PLACEHOLDER_map-2-line', title: 'African Address Normalisation', description: 'Handles informal, landmark-based, and non-standard African address formats.' },
      { icon: PLACEHOLDER_file-text-line', title: 'Proof of Address OCR', description: 'Extract and verify address data from utility bills, bank statements, and government letters.' },
      { icon: PLACEHOLDER_gps-line', title: 'GPS Verification', description: 'Verify customer location using device GPS with tamper detection.' },
      { icon: PLACEHOLDER_global-line', title: 'IP Intelligence', description: 'IP geolocation, VPN/proxy detection, and Tor exit node identification.' },
      { icon: PLACEHOLDER_route-line', title: 'Impossible Travel Detection', description: 'Flag accounts showing physically impossible location changes between sessions.' },
      { icon: PLACEHOLDER_alert-line', title: 'High-Risk Jurisdiction Flags', description: 'Automatic flagging of addresses in FATF grey-listed or sanctioned jurisdictions.' },
    ],
    useCases: [
      { industry: 'Fintech & Banking', description: 'Verify customer addresses for KYC compliance and detect location-based fraud signals.' },
      { industry: 'Insurance', description: 'Validate policyholder addresses for accurate risk pricing and fraud prevention.' },
      { industry: 'Lending', description: 'Confirm borrower addresses and detect location inconsistencies that signal fraud.' },
      { industry: 'E-commerce', description: 'Validate delivery addresses and detect shipping fraud using geolocation signals.' },
    ],
    faqs: [
      { question: 'How do you handle informal African addresses?', answer: 'Our address normalisation engine is trained on African address formats, including landmark-based addresses common in West Africa and informal settlement addresses in Southern Africa.' },
      { question: 'What documents are accepted for proof of address?', answer: 'Utility bills, bank statements, government letters, and tenancy agreements are accepted. Documents must be dated within the last 3 months by default (configurable).' },
      { question: 'What is impossible travel detection?', answer: 'If a customer logs in from Lagos and then from Nairobi 30 minutes later, that is physically impossible. Our system flags these events as potential account takeover or shared credential signals.' },
    ],
  },
  {
    slug: 'transaction-risk-scoring',
    icon: PLACEHOLDER_bar-chart-line',
    title: 'Transaction Risk Scoring & Decisioning',
    tagline: 'Score every transaction. Automate every decision.',
    description:
      'VerifyAfrica\'s configurable risk scoring engine evaluates every transaction in real time, combining identity signals, behavioural data, and transaction patterns to generate accurate risk scores and automated decisions.',
    heroImage:
      'https://readdy.ai/api/search-image?query=transaction%20risk%20scoring%20financial%20data%20analytics%20concept%20with%20bar%20charts%20and%20risk%20gauge%20on%20dark%20teal%20background%20abstract%20modern%20fintech%20illustration%20clean%20geometric%20shapes%20minimal&width=1200&height=600&seq=feat-txn-hero&orientation=landscape',
    stats: [
      { value: '<100ms', label: 'Scoring Latency' },
      { value: '300+', label: 'Risk Features' },
      { value: '99.9%', label: 'API Uptime' },
      { value: 'Fully', label: 'Configurable' },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Transaction Data Ingestion',
        description: 'Transaction details, amount, currency, counterparty, channel, and device, are submitted via API in real time.',
      },
      {
        step: 2,
        title: 'Feature Engineering',
        description: 'Our engine enriches the transaction with 300+ derived features including velocity checks, peer comparisons, and historical patterns.',
      },
      {
        step: 3,
        title: 'ML Risk Scoring',
        description: 'Multiple ML models score the transaction simultaneously. Scores are combined using an ensemble approach for maximum accuracy.',
      },
      {
        step: 4,
        title: 'Automated Decision',
        description: 'A risk score and decision (approve/review/decline) is returned in under 100ms. Decision logic is fully configurable via rules or ML thresholds.',
      },
    ],
    capabilities: [
      { icon: PLACEHOLDER_speed-line', title: 'Real-time Scoring', description: 'Sub-100ms scoring latency for seamless integration into payment flows.' },
      { icon: PLACEHOLDER_settings-3-line', title: 'Configurable Rules', description: 'Visual rules builder for creating velocity checks, amount limits, and custom logic.' },
      { icon: PLACEHOLDER_bar-chart-2-line', title: 'Velocity Checks', description: 'Monitor transaction frequency, amounts, and patterns across configurable time windows.' },
      { icon: PLACEHOLDER_group-line', title: 'Peer Benchmarking', description: 'Compare customer behaviour against anonymised peer groups to detect anomalies.' },
      { icon: PLACEHOLDER_flow-chart', title: 'Decision Workflows', description: 'Build automated decision workflows with step-up authentication and manual review routing.' },
      { icon: PLACEHOLDER_pie-chart-line', title: 'Analytics Dashboard', description: 'Real-time analytics on transaction volumes, risk distributions, and decision outcomes.' },
    ],
    useCases: [
      { industry: 'Payment Processors', description: 'Score every payment in real time to prevent fraud while minimising false declines.' },
      { industry: 'Neobanks', description: 'Automate transaction monitoring and SAR filing workflows for AML compliance.' },
      { industry: 'FX & Remittance', description: 'Score cross-border transfers for money laundering risk and sanctions exposure.' },
      { industry: 'Lending', description: 'Assess repayment risk and detect early signs of default using transaction patterns.' },
    ],
    faqs: [
      { question: 'How fast is the scoring API?', answer: 'Our scoring API returns results in under 100ms at the 99th percentile, making it suitable for real-time payment authorisation flows.' },
      { question: 'Can I use my own ML models?', answer: 'Yes. You can bring your own models and integrate them into our decisioning engine via our model API, combining your models with our feature engineering.' },
      { question: 'How do I handle false positives?', answer: 'Our dashboard provides feedback tools to mark decisions as correct or incorrect. This feedback is used to retrain models and adjust rules to reduce false positives over time.' },
    ],
  },
  {
    slug: 'ongoing-monitoring',
    icon: PLACEHOLDER_refresh-line',
    title: 'Ongoing Monitoring',
    tagline: 'Compliance doesn\'t stop at onboarding — neither do we.',
    description:
      'VerifyAfrica\'s ongoing monitoring service continuously re-screens your entire customer base against updated sanctions lists, PEP databases, adverse media, and risk signals, alerting you the moment a customer\'s risk profile changes.',
    heroImage:
      'https://readdy.ai/api/search-image?query=ongoing%20monitoring%20continuous%20surveillance%20concept%20with%20circular%20refresh%20arrows%20and%20alert%20signals%20on%20dark%20teal%20background%20abstract%20modern%20compliance%20technology%20illustration%20clean%20geometric%20shapes%20minimal&width=1200&height=600&seq=feat-mon-hero&orientation=landscape',
    stats: [
      { value: '24/7', label: 'Continuous Monitoring' },
      { value: '<1hr', label: 'Alert Delivery Time' },
      { value: '1,500+', label: 'Lists Monitored' },
      { value: '100%', label: 'Portfolio Coverage' },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Portfolio Enrolment',
        description: 'Enrol your entire customer base via API or bulk upload. Each customer is assigned a monitoring profile with configurable alert thresholds.',
      },
      {
        step: 2,
        title: 'Continuous Re-screening',
        description: 'As sanctions lists, PEP databases, and adverse media sources are updated, your entire portfolio is automatically re-screened.',
      },
      {
        step: 3,
        title: 'Change Detection',
        description: 'Our engine detects changes in customer risk profiles, new sanctions hits, PEP status changes, adverse media mentions, and KYC data changes.',
      },
      {
        step: 4,
        title: 'Alert & Case Management',
        description: 'Alerts are delivered via webhook, email, or dashboard. Each alert includes full context and links to your case management workflow.',
      },
    ],
    capabilities: [
      { icon: PLACEHOLDER_radar-line', title: 'Real-time List Updates', description: 'Sanctions and PEP lists are monitored and re-screened within minutes of updates.' },
      { icon: PLACEHOLDER_newspaper-line', title: 'Adverse Media Monitoring', description: 'Continuous monitoring of news sources in 50+ languages for negative mentions.' },
      { icon: PLACEHOLDER_notification-3-line', title: 'Configurable Alerts', description: 'Set alert thresholds, delivery channels, and escalation rules per customer segment.' },
      { icon: PLACEHOLDER_history-line', title: 'Audit Trail', description: 'Complete audit trail of all screening events, alerts, and case decisions for regulatory review.' },
      { icon: PLACEHOLDER_webhook-line', title: 'Webhook Delivery', description: 'Real-time alert delivery via webhooks for seamless integration into your workflows.' },
      { icon: PLACEHOLDER_file-chart-line', title: 'Regulatory Reporting', description: 'Automated generation of monitoring reports for regulatory submissions.' },
    ],
    useCases: [
      { industry: 'Banks & Lenders', description: 'Meet ongoing CDD requirements and detect changes in customer risk profiles post-onboarding.' },
      { industry: 'Fintech', description: 'Automate periodic KYC refresh and sanctions re-screening without manual effort.' },
      { industry: 'Insurance', description: 'Monitor policyholders and beneficiaries throughout the policy lifecycle.' },
      { industry: 'Asset Management', description: 'Continuously monitor investors and beneficial owners for sanctions and PEP changes.' },
    ],
    faqs: [
      { question: 'How quickly are alerts delivered after a list update?', answer: 'Alerts are delivered within 1 hour of a list update for standard monitoring. Real-time monitoring (available on Enterprise plans) delivers alerts within minutes.' },
      { question: 'Can I configure different alert thresholds for different customer segments?', answer: 'Yes. You can configure alert thresholds, delivery channels, and escalation rules per customer segment or risk tier.' },
      { question: 'Is there an audit trail for monitoring decisions?', answer: 'Yes. Every screening event, alert, and case decision is recorded in a tamper-proof audit trail that can be exported for regulatory review.' },
    ],
  },
];
