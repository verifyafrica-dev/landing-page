import { useDemoModal } from "../../hooks/useDemoModal";
import Navbar from "@/pages/home/components/Navbar";
import ContactHero from "./components/ContactHero";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import Footer from "@/pages/home/components/Footer";
import SEOHead from "../../components/feature/SEOHead";

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://verifyafrica.io";

const contactSchema = [
	{
		"@context": "https://schema.org",
		"@type": "ContactPage",
		"@id": `${SITE_URL}/contact#webpage`,
		name: "Contact VerifyAfrica – Request a Demo or Get Support",
		url: `${SITE_URL}/contact`,
		description:
			"Get in touch with VerifyAfrica to request a demo, ask about our KYC and AML compliance platform, or discuss enterprise integration across Africa.",
		inLanguage: "en",
		isPartOf: { "@id": `${SITE_URL}/#website` },
		about: { "@id": `${SITE_URL}/#organization` },
		dateModified: new Date().toISOString().split("T")[0],
		publisher: { "@id": `${SITE_URL}/#organization` },
		breadcrumb: { "@id": `${SITE_URL}/contact#breadcrumb` },
	},
	{
		"@context": "https://schema.org",
		"@type": "Organization",
		"@id": `${SITE_URL}/#organization`,
		name: "VerifyAfrica",
		url: SITE_URL,
		logo: {
			"@type": "ImageObject",
			url: `${SITE_URL}/logo.png`,
			width: 200,
			height: 60,
		},
		description:
			"VerifyAfrica is Africa's leading AI-powered KYC, AML, and identity verification platform, enabling compliant onboarding across all 54 African countries.",
		areaServed: { "@type": "Place", name: "Africa" },
		contactPoint: [
			{
				"@type": "ContactPoint",
				email: "support@verifyafrica.io",
				contactType: "customer support",
				areaServed: "Africa",
				availableLanguage: ["English", "French", "Arabic", "Portuguese"],
			},
			{
				"@type": "ContactPoint",
				email: "sales@verifyafrica.io",
				contactType: "sales",
				areaServed: "Africa",
				availableLanguage: ["English"],
			},
		],
		sameAs: [
			"https://x.com/V3rifyAfrica",
			"https://www.linkedin.com/company/verifyafrica",
			"https://www.instagram.com/verifyafrica_official",
		],
	},
	{
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"@id": `${SITE_URL}/contact#breadcrumb`,
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Home",
				item: SITE_URL,
			},
			{
				"@type": "ListItem",
				position: 2,
				name: "Contact",
				item: `${SITE_URL}/contact`,
			},
		],
	},
];

export default function ContactPage() {
	const { openDemo } = useDemoModal();

	return (
		<div className="min-h-screen bg-white">
			<SEOHead
				title="Contact Us – Request a Demo or Get Support | VerifyAfrica"
				description="Contact VerifyAfrica to request a demo, learn about our KYC, AML, and identity verification platform, or get enterprise support. We cover all 54 African countries."
				keywords="contact VerifyAfrica, request demo KYC Africa, compliance platform support, identity verification Africa contact"
				canonical="/contact"
				image="https://readdy.ai/api/search-image?query=professional%20business%20contact%20communication%20concept%20abstract%20teal%20and%20white%20clean%20minimal%20corporate%20handshake%20or%20message%20icon%20illustration%20Africa%20compliance%20technology%20partnership%20enterprise&width=1200&height=630&seq=og-contact-v1&orientation=landscape"
				twitterCard="summary_large_image"
				schema={contactSchema}
			/>
			<Navbar
				onRequestDemo={openDemo}
				variant="solid"
			/>
			<ContactHero />
			<ContactForm />
			<ContactInfo />
			<Footer />
		</div>
	);
}
