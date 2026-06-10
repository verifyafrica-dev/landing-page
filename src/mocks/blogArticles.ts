// 2026-06-10: Article added — scaling-africa-1-trillion-digital-economy-trust-tax
export const blogCategories = [
  'All Articles',
  'Regulatory Updates',
  'Best Practices',
  'Case Studies',
  'Industry News',
  'Guides & Tutorials',
];

// Image dimension guide:
//   cardImage  → 400x225  (article card on blog listing page, related articles)
//   heroImage  → 896x384  (full-width article page hero, max-w-4xl × h-96)
//   featured   → 800x450  (featured hero card on blog page, ~640x320)
// Serving correctly-sized images avoids downloading 2–4× more bytes than needed.

export const blogArticles = [
  {
    id: 'understanding-kyc-regulations-west-africa-2025',
    title: 'KYC Regulations in West Africa: 2025 Guide',
    excerpt:
      "A comprehensive breakdown of the evolving Know Your Customer requirements across ECOWAS member states, including Nigeria's updated NDPR framework and Ghana's new digital identity mandates.",
    category: 'Regulatory Updates',
    author: 'Adaeze Okonkwo',
    authorRole: 'Head of Compliance',
    date: 'Jan 15, 2025',
    readTime: '8 min read',
    // Featured hero card on blog listing — larger display area
    image:
      'https://readdy.ai/api/search-image?query=modern%20abstract%20digital%20compliance%20document%20with%20geometric%20patterns%20teal%20and%20dark%20green%20color%20scheme%20professional%20corporate%20style%20clean%20minimalist%20background%20with%20subtle%20grid%20lines%20and%20data%20visualization%20elements&width=800&height=450&seq=blog1&orientation=landscape',
    // Full-width article page hero
    heroImage:
      'https://readdy.ai/api/search-image?query=wide%20panoramic%20abstract%20digital%20regulatory%20compliance%20concept%20West%20Africa%20geometric%20network%20patterns%20teal%20emerald%20dark%20green%20gradient%20ultra%20clean%20professional%20corporate%20illustration%20data%20flow%20lines%20modern%20fintech&width=896&height=384&seq=kyc-west-africa-hero-896&orientation=landscape',
    featured: false,
  },
  {
    id: 'aml-screening-best-practices-african-fintechs',
    title: 'AML Screening Best Practices for Africa',
    excerpt:
      'Learn how leading African fintech companies are implementing robust anti-money laundering screening processes while maintaining seamless user onboarding experiences.',
    category: 'Best Practices',
    author: 'Kwame Mensah',
    authorRole: 'Senior Analyst',
    date: 'Jan 10, 2025',
    readTime: '6 min read',
    // Card image — used in blog listing and related articles grids
    image:
      'https://readdy.ai/api/search-image?query=abstract%20financial%20technology%20security%20shield%20digital%20network%20connections%20teal%20accent%20colors%20clean%20white%20background%20modern%20corporate%20illustration%20professional%20fintech%20concept%20card%20size&width=400&height=225&seq=aml-card-400&orientation=landscape',
    // Article page hero — wider and taller for the full-width display
    heroImage:
      'https://readdy.ai/api/search-image?query=wide%20panoramic%20abstract%20anti-money%20laundering%20financial%20security%20concept%20shield%20network%20graph%20nodes%20representing%20transaction%20screening%20African%20fintech%20dark%20teal%20emerald%20gradient%20geometric%20data%20flow%20lines%20professional%20corporate%20illustration%20ultra%20clean%20modern%20high%20resolution&width=896&height=384&seq=aml-hero-896&orientation=landscape',
    featured: false,
  },
  {
    id: 'case-study-paystack-identity-verification',
    title: 'How AI Verification Cut Payment Fraud by 73%',
    excerpt:
      "Discover how one of Africa's largest payment processors leveraged VerifyAfrica's AI-powered identity checks to dramatically cut fraud while improving approval rates.",
    category: 'Case Studies',
    author: 'Fatima Al-Hassan',
    authorRole: 'Product Manager',
    date: 'Jan 5, 2025',
    readTime: '10 min read',
    image:
      'https://readdy.ai/api/search-image?query=abstract%20data%20analytics%20dashboard%20charts%20graphs%20showing%20fraud%20reduction%20metrics%20teal%20emerald%20color%20palette%20clean%20modern%20design%20professional%20business%20intelligence%20visualization%20card&width=400&height=225&seq=paystack-card-400&orientation=landscape',
    heroImage:
      'https://readdy.ai/api/search-image?query=wide%20panoramic%20abstract%20payment%20fraud%20reduction%20analytics%20concept%20glowing%20metric%20charts%20shield%20and%20identity%20verification%20elements%20teal%20emerald%20dark%20background%20professional%20corporate%20illustration%20ultra%20clean%20modern%20fintech&width=896&height=384&seq=paystack-hero-896&orientation=landscape',
    featured: false,
  },
  {
    id: 'south-africa-fica-amendments-2025',
    title: 'South Africa FICA 2025: Compliance Guide',
    excerpt:
      "The Financial Intelligence Centre Act has undergone significant updates. Here's a detailed guide on the new requirements and how to prepare your compliance workflows.",
    category: 'Regulatory Updates',
    author: 'Thabo Ndlovu',
    authorRole: 'Regulatory Affairs',
    date: 'Dec 28, 2024',
    readTime: '7 min read',
    image:
      'https://readdy.ai/api/search-image?query=abstract%20legal%20compliance%20document%20official%20seal%20geometric%20patterns%20dark%20teal%20gold%20accents%20professional%20regulatory%20theme%20clean%20modern%20illustration%20corporate%20governance%20card&width=400&height=225&seq=fica-card-400&orientation=landscape',
    heroImage:
      'https://readdy.ai/api/search-image?query=wide%20panoramic%20abstract%20South%20Africa%20financial%20regulation%20compliance%20concept%20official%20document%20seal%20geometric%20patterns%20teal%20dark%20green%20gold%20accents%20professional%20clean%20corporate%20illustration%20modern%20high%20detail&width=896&height=384&seq=fica-hero-896&orientation=landscape',
    featured: false,
  },
  {
    id: 'biometric-verification-guide-africa',
    title: 'Biometric Verification in Africa: 2025 Guide',
    excerpt:
      'From facial recognition to fingerprint matching, explore the biometric technologies transforming identity verification across the continent and their regulatory implications.',
    category: 'Guides & Tutorials',
    author: 'Adaeze Okonkwo',
    authorRole: 'Head of Compliance',
    date: 'Dec 20, 2024',
    readTime: '12 min read',
    image:
      'https://readdy.ai/api/search-image?query=abstract%20biometric%20facial%20recognition%20technology%20digital%20scan%20lines%20geometric%20face%20outline%20teal%20cyan%20color%20scheme%20futuristic%20clean%20background%20modern%20tech%20illustration%20card%20size&width=400&height=225&seq=biometric-card-400&orientation=landscape',
    heroImage:
      'https://readdy.ai/api/search-image?query=wide%20panoramic%20abstract%20biometric%20verification%20technology%20African%20identity%20concept%20facial%20scan%20fingerprint%20digital%20network%20teal%20cyan%20dark%20background%20futuristic%20clean%20professional%20corporate%20illustration%20high%20resolution%20ultra%20modern&width=896&height=384&seq=biometric-hero-896&orientation=landscape',
    featured: false,
  },
  {
    id: 'igaming-compliance-east-africa',
    title: 'iGaming Compliance in East Africa 2025',
    excerpt:
      "East Africa's iGaming market is booming — but so is regulatory scrutiny. Kenya's BCLB, Tanzania's Gaming Board, and Uganda's NLGRB are tightening KYC, AML, and responsible gambling requirements. Here's what every operator needs to know to stay licensed and compliant in 2025.",
    category: 'Regulatory Updates',
    author: 'Kwame Mensah',
    authorRole: 'Senior Analyst',
    date: 'Mar 28, 2025',
    readTime: '11 min read',
    image:
      'https://readdy.ai/api/search-image?query=professional%20East%20African%20compliance%20technology%20abstract%20shield%20identity%20verification%20elements%20dark%20teal%20gradient%20subtle%20geometric%20patterns%20modern%20corporate%20illustration%20minimal%20clean%20card&width=400&height=225&seq=igaming-card-400&orientation=landscape',
    heroImage:
      'https://readdy.ai/api/search-image?query=wide%20panoramic%20abstract%20East%20Africa%20iGaming%20regulatory%20compliance%20concept%20shield%20license%20document%20gaming%20elements%20teal%20dark%20green%20gradient%20clean%20professional%20corporate%20illustration%20modern%20high%20detail&width=896&height=384&seq=igaming-hero-896&orientation=landscape',
    featured: false,
  },
  {
    id: 'building-risk-based-approach-customer-due-diligence',
    title: 'Risk-Based Customer Due Diligence Framework',
    excerpt:
      'Step-by-step framework for implementing risk-based CDD processes that satisfy regulators while keeping onboarding friction low for legitimate customers.',
    category: 'Best Practices',
    author: 'Fatima Al-Hassan',
    authorRole: 'Product Manager',
    date: 'Dec 10, 2024',
    readTime: '8 min read',
    image:
      'https://readdy.ai/api/search-image?query=abstract%20risk%20assessment%20matrix%20layered%20geometric%20shapes%20gradient%20teal%20emerald%20professional%20corporate%20style%20clean%20minimalist%20background%20business%20strategy%20concept%20card&width=400&height=225&seq=cdd-card-400&orientation=landscape',
    heroImage:
      'https://readdy.ai/api/search-image?query=wide%20panoramic%20abstract%20customer%20due%20diligence%20risk%20matrix%20framework%20concept%20layered%20geometric%20shapes%20teal%20emerald%20dark%20background%20professional%20corporate%20illustration%20modern%20clean%20high%20resolution&width=896&height=384&seq=cdd-hero-896&orientation=landscape',
    featured: false,
  },
  {
    id: 'case-study-fx-broker-compliance-automation',
    title: 'FX Broker Automates 90% of Compliance Checks',
    excerpt:
      'This forex brokerage serving 12 African markets transformed their manual compliance process into a fully automated pipeline, cutting review time from days to minutes.',
    category: 'Case Studies',
    author: 'Thabo Ndlovu',
    authorRole: 'Regulatory Affairs',
    date: 'Dec 5, 2024',
    readTime: '11 min read',
    image:
      'https://readdy.ai/api/search-image?query=abstract%20automation%20workflow%20connected%20nodes%20process%20arrows%20teal%20dark%20green%20color%20scheme%20clean%20modern%20corporate%20illustration%20efficiency%20technology%20concept%20card&width=400&height=225&seq=fx-card-400&orientation=landscape',
    heroImage:
      'https://readdy.ai/api/search-image?query=wide%20panoramic%20abstract%20forex%20compliance%20automation%20workflow%20African%20markets%20connected%20nodes%20data%20pipeline%20teal%20emerald%20dark%20background%20professional%20corporate%20illustration%20clean%20modern%20high%20detail&width=896&height=384&seq=fx-hero-896&orientation=landscape',
    featured: false,
  },
  {
    id: 'gdpr-vs-ndpr-comparison-guide',
    title: 'GDPR vs NDPR: Compliance for Africa & EU',
    excerpt:
      'Operating between Europe and Nigeria? This guide breaks down the key differences and overlaps between GDPR and NDPR to help you build a unified data protection strategy.',
    category: 'Guides & Tutorials',
    author: 'Adaeze Okonkwo',
    authorRole: 'Head of Compliance',
    date: 'Nov 28, 2024',
    readTime: '10 min read',
    image:
      'https://readdy.ai/api/search-image?query=abstract%20data%20protection%20privacy%20concept%20lock%20shield%20elements%20split%20design%20two%20regulatory%20frameworks%20teal%20warm%20gold%20accents%20clean%20professional%20corporate%20style%20card&width=400&height=225&seq=gdpr-card-400&orientation=landscape',
    heroImage:
      'https://readdy.ai/api/search-image?query=wide%20panoramic%20abstract%20GDPR%20NDPR%20dual%20data%20protection%20framework%20comparison%20concept%20split%20design%20teal%20gold%20Europe%20Africa%20clean%20professional%20corporate%20illustration%20modern%20high%20resolution&width=896&height=384&seq=gdpr-hero-896&orientation=landscape',
    featured: false,
  },
  {
    id: 'scaling-africa-1-trillion-digital-economy-trust-tax',
    title: "Scaling Africa's $1 Trillion Digital Economy",
    excerpt:
      'Scaling a pan-African fintech? Learn how to eliminate the "Trust Tax," avoid cross-border KYC bottlenecks, and build infrastructure-level compliance.',
    category: 'Best Practices',
    author: 'Adaeze Okonkwo',
    authorRole: 'Head of Compliance',
    date: 'Jun 10, 2026',
    readTime: '9 min read',
    image:
      'https://readdy.ai/api/search-image?query=abstract%20African%20digital%20economy%20concept%20geometric%20data%20streams%20flowing%20across%20a%20stylized%20map%20of%20Africa%20dark%20teal%20emerald%20green%20gradient%20gold%20accent%20nodes%20fintech%20infrastructure%20clean%20professional%20corporate%20illustration%20minimal%20card%20size&width=400&height=225&seq=blog-trust-tax-card&orientation=landscape',
    heroImage:
      'https://readdy.ai/api/search-image?query=wide%20panoramic%20abstract%20African%20digital%20economy%20trillion%20dollar%20infrastructure%20concept%20glowing%20network%20nodes%20connecting%20across%20a%20stylized%20African%20continent%20map%20dark%20teal%20emerald%20green%20gradient%20with%20gold%20highlights%20fintech%20compliance%20technology%20clean%20professional%20corporate%20illustration%20ultra%20modern&width=896&height=384&seq=blog-trust-tax-hero&orientation=landscape',
    featured: true,
  },
];

export const popularResources = [
  {
    title: 'African KYC Compliance Checklist 2025',
    downloads: 2340,
    type: 'PDF Guide',
  },
  {
    title: 'AML Risk Assessment Template',
    downloads: 1870,
    type: 'Template',
  },
  {
    title: 'Regulatory Map: Africa 54 Countries',
    downloads: 1650,
    type: 'Interactive Map',
  },
  {
    title: 'Identity Verification API Documentation',
    downloads: 1420,
    type: 'Developer Docs',
  },
  {
    title: "Compliance Officer's Handbook for Africa",
    downloads: 1180,
    type: 'eBook',
  },
];
