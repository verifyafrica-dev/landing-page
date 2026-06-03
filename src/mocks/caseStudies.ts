import {
  ArrowLeftRight,
  Building,
  Coins,
  Gamepad2,
  Radio,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export const useCaseCategories: {
  id: number;
  category: string;
  icon: LucideIcon;
  color: string;
  description: string;
  useCases: string[];
  benefits: { metric: string; label: string }[];
  image: string;
}[] = [
  {
    id: 1,
    category: "Banks & Financial Institutions",
    icon: Building,
    color: "from-teal-500 to-emerald-500",
    description: "Traditional banks, microfinance institutions, and credit unions requiring robust KYC/AML compliance.",
    useCases: [
      "Customer onboarding & account opening",
      "Loan application verification",
      "Anti-money laundering (AML) screening",
      "Transaction monitoring",
      "Regulatory reporting"
    ],
    benefits: [
      { metric: "80%", label: "Faster Onboarding" },
      { metric: "99.7%", label: "Verification Accuracy" },
      { metric: "100%", label: "Regulatory Compliance" }
    ],
    image: "https://readdy.ai/api/search-image?query=Modern%20African%20bank%20interior%20with%20professional%20staff%20helping%20customers%20sleek%20contemporary%20design%20with%20warm%20lighting%20and%20green%20accents%20clean%20corporate%20environment&width=600&height=400&seq=uc1&orientation=landscape"
  },
  {
    id: 2,
    category: "Fintechs & Payment Providers",
    icon: Smartphone,
    color: "from-cyan-500 to-teal-500",
    description: "Digital payment platforms, mobile money operators, and fintech startups scaling across Africa.",
    useCases: [
      "Instant user verification",
      "Fraud prevention & detection",
      "Cross-border compliance",
      "Merchant onboarding",
      "Wallet creation & management"
    ],
    benefits: [
      { metric: "3 sec", label: "Verification Time" },
      { metric: "92%", label: "Fraud Reduction" },
      { metric: "35+", label: "Countries Supported" }
    ],
    image: "https://readdy.ai/api/search-image?query=Young%20African%20professional%20using%20mobile%20payment%20app%20on%20smartphone%20in%20modern%20urban%20setting%20bright%20natural%20lighting%20contemporary%20lifestyle%20fintech%20concept&width=600&height=400&seq=uc2&orientation=landscape"
  },
  {
    id: 3,
    category: "FX Brokers",
    icon: ArrowLeftRight,
    color: "from-orange-500 to-amber-500",
    description: "Foreign exchange brokers and trading platforms requiring sophisticated risk management and regulatory compliance for high-volume cross-border trading operations.",
    useCases: [
      "Automated risk-based client tiering (Retail, Professional, Institutional)",
      "Enhanced due diligence (EDD) for high-risk jurisdictions",
      "Source of wealth & funds verification with document analysis",
      "Real-time PEP and sanctions screening across 240+ watchlists",
      "Ongoing transaction monitoring with behavioral analytics",
      "Leverage limit compliance based on client classification",
      "Cross-border regulatory reporting (MiFID II, ESMA, CySEC)",
      "Adverse media screening and reputation risk assessment"
    ],
    benefits: [
      { metric: "75%", label: "Faster KYC Processing" },
      { metric: "98.5%", label: "Regulatory Compliance Rate" },
      { metric: "<2 min", label: "Real-time Risk Scoring" },
      { metric: "60%", label: "Reduced Manual Reviews" }
    ],
    image: "https://readdy.ai/api/search-image?query=Professional%20African%20forex%20trader%20analyzing%20currency%20charts%20on%20multiple%20screens%20modern%20trading%20desk%20setup%20focused%20concentration%20financial%20markets%20technology%20workspace%20ambient%20lighting&width=600&height=400&seq=uc9&orientation=landscape"
  },
  {
    id: 4,
    category: "Telecommunications",
    icon: Radio,
    color: "from-purple-500 to-violet-500",
    description: "Mobile network operators and telecom companies requiring SIM registration and mobile money compliance.",
    useCases: [
      "SIM card registration",
      "Mobile money account verification",
      "Device fingerprinting",
      "SIM swap fraud prevention",
      "Subscriber identity management"
    ],
    benefits: [
      { metric: "50M+", label: "Users Verified" },
      { metric: "0.3s", label: "Auth Speed" },
      { metric: "95%", label: "Fraud Prevention" }
    ],
    image: "https://readdy.ai/api/search-image?query=African%20telecommunications%20store%20with%20customers%20and%20staff%20modern%20retail%20environment%20with%20mobile%20devices%20displayed%20bright%20commercial%20lighting%20professional%20service%20setting&width=600&height=400&seq=uc3&orientation=landscape"
  },
  {
    id: 5,
    category: "E-commerce & Marketplaces",
    icon: ShoppingBag,
    color: "from-rose-500 to-pink-500",
    description: "Online marketplaces, e-commerce platforms, and delivery services verifying buyers and sellers.",
    useCases: [
      "Seller/merchant verification",
      "Buyer identity confirmation",
      "Delivery address validation",
      "Payment fraud prevention",
      "Trust & safety compliance"
    ],
    benefits: [
      { metric: "85%", label: "Faster Onboarding" },
      { metric: "50+", label: "ID Types Supported" },
      { metric: "70%", label: "Chargeback Reduction" }
    ],
    image: "https://readdy.ai/api/search-image?query=African%20e-commerce%20business%20owner%20packing%20orders%20in%20modern%20warehouse%20organized%20shelving%20with%20products%20bright%20industrial%20lighting%20entrepreneurial%20small%20business%20scene&width=600&height=400&seq=uc4&orientation=landscape"
  },
  {
    id: 6,
    category: "Insurance Companies",
    icon: ShieldCheck,
    color: "from-indigo-500 to-blue-500",
    description: "Insurance providers requiring policyholder verification and claims fraud prevention.",
    useCases: [
      "Policyholder KYC verification",
      "Claims identity validation",
      "Agent/broker verification",
      "Beneficiary confirmation",
      "Fraud detection & prevention"
    ],
    benefits: [
      { metric: "60%", label: "Claims Processing Speed" },
      { metric: "45%", label: "Fraud Reduction" },
      { metric: "98%", label: "Identity Match Rate" }
    ],
    image: "https://readdy.ai/api/search-image?query=African%20insurance%20agent%20meeting%20with%20family%20clients%20in%20modern%20office%20professional%20consultation%20setting%20warm%20lighting%20trust%20and%20security%20concept&width=600&height=400&seq=uc5&orientation=landscape"
  },
  {
    id: 7,
    category: "iGaming & Sports Betting",
    icon: Gamepad2,
    color: "from-emerald-500 to-teal-500",
    description: "Online casinos, sports betting operators, and lottery platforms meeting AML and responsible gambling compliance across Africa's fast-growing regulated markets.",
    useCases: [
      "Age & identity verification at registration",
      "AML screening & PEP checks for high-value players",
      "Source of funds verification for large deposits",
      "Self-exclusion & responsible gambling checks",
      "Ongoing transaction monitoring & risk scoring",
      "Regulatory reporting (BCLB, NLRC, Western Cape Board)",
      "Affiliate & agent KYB onboarding",
      "Geolocation & jurisdiction compliance"
    ],
    benefits: [
      { metric: "< 5s", label: "Player Verification" },
      { metric: "99.2%", label: "Regulatory Pass Rate" },
      { metric: "65%", label: "Fraud Reduction" }
    ],
    image: "https://readdy.ai/api/search-image?query=Modern%20African%20sports%20betting%20platform%20interface%20on%20laptop%20and%20mobile%20devices%20in%20a%20sleek%20contemporary%20office%20environment%20with%20teal%20and%20dark%20green%20accent%20lighting%20professional%20technology%20workspace%20clean%20minimalist%20background&width=600&height=400&seq=uc-igaming-v1&orientation=landscape"
  },
  {
    id: 9,
    category: "Crypto & Web3",
    icon: Coins,
    color: "from-yellow-500 to-orange-500",
    description: "Cryptocurrency exchanges, DeFi platforms, and Web3 companies meeting global compliance standards.",
    useCases: [
      "Exchange user verification",
      "Wallet KYC compliance",
      "Travel rule compliance",
      "Sanctions screening",
      "Risk-based authentication"
    ],
    benefits: [
      { metric: "FATF", label: "Compliant" },
      { metric: "Real-time", label: "Screening" },
      { metric: "Global", label: "Coverage" }
    ],
    image: "https://readdy.ai/api/search-image?query=Young%20African%20tech%20professional%20working%20on%20cryptocurrency%20trading%20platform%20multiple%20monitors%20showing%20charts%20modern%20home%20office%20setup%20ambient%20lighting%20fintech%20workspace&width=600&height=400&seq=uc8&orientation=landscape"
  }
];

export const countriesServed = [
  // West Africa (16 countries)
  { name: "Nigeria", code: "NG", flag: "🇳🇬", region: "West Africa", idTypes: ["NIN", "BVN", "Voter's Card", "Driver's License", "Passport"] },
  { name: "Ghana", code: "GH", flag: "🇬🇭", region: "West Africa", idTypes: ["Ghana Card", "Voter's ID", "Passport", "Driver's License", "SSNIT"] },
  { name: "Senegal", code: "SN", flag: "🇸🇳", region: "West Africa", idTypes: ["National ID", "Passport", "Driver's License", "Voter's Card"] },
  { name: "Côte d'Ivoire", code: "CI", flag: "🇨🇮", region: "West Africa", idTypes: ["National ID", "Passport", "Driver's License", "Consular Card"] },
  { name: "Mali", code: "ML", flag: "🇲🇱", region: "West Africa", idTypes: ["NINA", "Passport", "Driver's License"] },
  { name: "Burkina Faso", code: "BF", flag: "🇧🇫", region: "West Africa", idTypes: ["CNIB", "Passport", "Driver's License"] },
  { name: "Niger", code: "NE", flag: "🇳🇪", region: "West Africa", idTypes: ["National ID", "Passport", "Driver's License"] },
  { name: "Benin", code: "BJ", flag: "🇧🇯", region: "West Africa", idTypes: ["National ID", "Passport", "Driver's License", "Voter's Card"] },
  { name: "Togo", code: "TG", flag: "🇹🇬", region: "West Africa", idTypes: ["National ID", "Passport", "Driver's License"] },
  { name: "Liberia", code: "LR", flag: "🇱🇷", region: "West Africa", idTypes: ["National ID", "Passport", "Voter's Card"] },
  { name: "Sierra Leone", code: "SL", flag: "🇸🇱", region: "West Africa", idTypes: ["National ID", "Passport", "Voter's Card"] },
  { name: "Guinea", code: "GN", flag: "🇬🇳", region: "West Africa", idTypes: ["National ID", "Passport"] },
  { name: "Guinea-Bissau", code: "GW", flag: "🇬🇼", region: "West Africa", idTypes: ["National ID", "Passport"] },
  { name: "Gambia", code: "GM", flag: "🇬🇲", region: "West Africa", idTypes: ["National ID", "Passport", "Driver's License"] },
  { name: "Cape Verde", code: "CV", flag: "🇨🇻", region: "West Africa", idTypes: ["National ID", "Passport", "Driver's License"] },
  { name: "Mauritania", code: "MR", flag: "🇲🇷", region: "West Africa", idTypes: ["National ID", "Passport", "Driver's License"] },
  
  // East Africa (14 countries)
  { name: "Kenya", code: "KE", flag: "🇰🇪", region: "East Africa", idTypes: ["National ID", "Passport", "Alien ID", "Driver's License"] },
  { name: "Tanzania", code: "TZ", flag: "🇹🇿", region: "East Africa", idTypes: ["NIDA", "Passport", "Voter's ID", "Driver's License"] },
  { name: "Uganda", code: "UG", flag: "🇺🇬", region: "East Africa", idTypes: ["National ID", "Passport", "Driver's License", "Voter's Card"] },
  { name: "Rwanda", code: "RW", flag: "🇷🇼", region: "East Africa", idTypes: ["National ID", "Passport", "Driver's License"] },
  { name: "Ethiopia", code: "ET", flag: "🇪🇹", region: "East Africa", idTypes: ["National ID", "Passport", "Driver's License"] },
  { name: "Eritrea", code: "ER", flag: "🇪🇷", region: "East Africa", idTypes: ["National ID", "Passport"] },
  { name: "Djibouti", code: "DJ", flag: "🇩🇯", region: "East Africa", idTypes: ["National ID", "Passport", "Driver's License"] },
  { name: "Somalia", code: "SO", flag: "🇸🇴", region: "East Africa", idTypes: ["National ID", "Passport"] },
  { name: "South Sudan", code: "SS", flag: "🇸🇸", region: "East Africa", idTypes: ["National ID", "Passport"] },
  { name: "Burundi", code: "BI", flag: "🇧🇮", region: "East Africa", idTypes: ["National ID", "Passport", "Driver's License"] },
  { name: "Mauritius", code: "MU", flag: "🇲🇺", region: "East Africa", idTypes: ["National ID", "Passport", "Driver's License"] },
  { name: "Seychelles", code: "SC", flag: "🇸🇨", region: "East Africa", idTypes: ["National ID", "Passport", "Driver's License"] },
  { name: "Comoros", code: "KM", flag: "🇰🇲", region: "East Africa", idTypes: ["National ID", "Passport"] },
  { name: "Madagascar", code: "MG", flag: "🇲🇬", region: "East Africa", idTypes: ["National ID", "Passport", "Driver's License"] },
  
  // Southern Africa (10 countries)
  { name: "South Africa", code: "ZA", flag: "🇿🇦", region: "Southern Africa", idTypes: ["National ID", "Passport", "Driver's License", "Asylum Seeker Permit"] },
  { name: "Zambia", code: "ZM", flag: "🇿🇲", region: "Southern Africa", idTypes: ["NRC", "Passport", "Driver's License"] },
  { name: "Zimbabwe", code: "ZW", flag: "🇿🇼", region: "Southern Africa", idTypes: ["National ID", "Passport", "Driver's License"] },
  { name: "Botswana", code: "BW", flag: "🇧🇼", region: "Southern Africa", idTypes: ["Omang", "Passport", "Driver's License"] },
  { name: "Namibia", code: "NA", flag: "🇳🇦", region: "Southern Africa", idTypes: ["National ID", "Passport", "Driver's License"] },
  { name: "Mozambique", code: "MZ", flag: "🇲🇿", region: "Southern Africa", idTypes: ["BI", "Passport", "Driver's License", "DIRE"] },
  { name: "Angola", code: "AO", flag: "🇦🇴", region: "Southern Africa", idTypes: ["BI", "Passport", "Driver's License"] },
  { name: "Malawi", code: "MW", flag: "🇲🇼", region: "Southern Africa", idTypes: ["National ID", "Passport", "Driver's License"] },
  { name: "Eswatini", code: "SZ", flag: "🇸🇿", region: "Southern Africa", idTypes: ["National ID", "Passport", "Driver's License"] },
  { name: "Lesotho", code: "LS", flag: "🇱🇸", region: "Southern Africa", idTypes: ["National ID", "Passport", "Driver's License"] },
  
  // North Africa (7 countries)
  { name: "Egypt", code: "EG", flag: "🇪🇬", region: "North Africa", idTypes: ["National ID", "Passport", "Driver's License"] },
  { name: "Morocco", code: "MA", flag: "🇲🇦", region: "North Africa", idTypes: ["National ID", "Passport", "Driver's License", "Residence Permit"] },
  { name: "Tunisia", code: "TN", flag: "🇹🇳", region: "North Africa", idTypes: ["CIN", "Passport", "Driver's License"] },
  { name: "Algeria", code: "DZ", flag: "🇩🇿", region: "North Africa", idTypes: ["National ID", "Passport", "Driver's License"] },
  { name: "Libya", code: "LY", flag: "🇱🇾", region: "North Africa", idTypes: ["National ID", "Passport"] },
  { name: "Sudan", code: "SD", flag: "🇸🇩", region: "North Africa", idTypes: ["National ID", "Passport"] },
  { name: "Western Sahara", code: "EH", flag: "🇪🇭", region: "North Africa", idTypes: ["National ID", "Passport"] },
  
  // Central Africa (7 countries)
  { name: "Cameroon", code: "CM", flag: "🇨🇲", region: "Central Africa", idTypes: ["National ID", "Passport", "Driver's License"] },
  { name: "DRC", code: "CD", flag: "🇨🇩", region: "Central Africa", idTypes: ["National ID", "Passport", "Voter's Card"] },
  { name: "Republic of Congo", code: "CG", flag: "🇨🇬", region: "Central Africa", idTypes: ["National ID", "Passport", "Driver's License"] },
  { name: "Gabon", code: "GA", flag: "🇬🇦", region: "Central Africa", idTypes: ["National ID", "Passport", "Driver's License"] },
  { name: "Equatorial Guinea", code: "GQ", flag: "🇬🇶", region: "Central Africa", idTypes: ["National ID", "Passport"] },
  { name: "Central African Republic", code: "CF", flag: "🇨🇫", region: "Central Africa", idTypes: ["National ID", "Passport"] },
  { name: "Chad", code: "TD", flag: "🇹🇩", region: "Central Africa", idTypes: ["National ID", "Passport", "Driver's License"] },
  { name: "São Tomé and Príncipe", code: "ST", flag: "🇸🇹", region: "Central Africa", idTypes: ["National ID", "Passport"] }
];

export const regions = [
  "All Regions",
  "West Africa",
  "East Africa",
  "Southern Africa",
  "North Africa",
  "Central Africa"
];

// Keep for backward compatibility
export const industries = [
  "All Categories",
  "Banks & Financial Institutions",
  "Fintechs & Payment Providers",
  "Telecommunications",
  "E-commerce & Marketplaces",
  "Insurance Companies",
  "iGaming & Sports Betting",
  "Crypto & Web3"
];

// Map useCaseCategories to caseStudies format with proper structure
export const caseStudies = useCaseCategories.map(category => ({
  ...category,
  title: category.category,
  client: category.category.split(' ')[0],
  industry: category.category,
  challenge: category.description,
  results: category.benefits,
  featured: category.id === 1 || category.id === 2
}));
