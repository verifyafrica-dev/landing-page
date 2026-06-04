import { useParams, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { featureDetails } from '@/mocks/featureDetails';
import { useDemoModal } from '@/hooks/useDemoModal';
import Navbar from '@/pages/home/components/Navbar';
import SEOHead from '@/components/feature/SEOHead';
import FeatureHero from './components/FeatureHero';
import FeatureStats from './components/FeatureStats';
import FeatureHowItWorks from './components/FeatureHowItWorks';
import FeatureCapabilities from './components/FeatureCapabilities';
import FeatureUseCases from './components/FeatureUseCases';
import FAQ from '@/components/feature/FAQ';
import FeatureCTA from './components/FeatureCTA';
import FeatureOtherFeatures from './components/FeatureOtherFeatures';

const Footer = lazy(() => import('@/components/feature/Footer'));

const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://verifyafrica.io';

export default function FeaturePage() {
  const { slug } = useParams<{ slug: string }>();
  const { openDemo } = useDemoModal();

  const feature = featureDetails.find((f) => f.slug === slug);

  if (!feature) {
    return <Navigate to="/" replace />;
  }

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${SITE_URL}/features/${feature.slug}#webpage`,
      name: `${feature.title} – VerifyAfrica`,
      url: `${SITE_URL}/features/${feature.slug}`,
      description: feature.description,
      inLanguage: 'en',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Features', item: `${SITE_URL}/#features` },
          { '@type': 'ListItem', position: 3, name: feature.title, item: `${SITE_URL}/features/${feature.slug}` },
        ],
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: feature.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={`${feature.title} – VerifyAfrica | KYC & Compliance for Africa`}
        description={feature.description}
        keywords={`${feature.title.toLowerCase()}, KYC Africa, compliance Africa, VerifyAfrica`}
        canonical={`/features/${feature.slug}`}
        image={feature.heroImage}
        twitterCard="summary_large_image"
        schema={schema}
      />
      <Navbar onRequestDemo={openDemo} />
      <FeatureHero feature={feature} />
      <FeatureStats feature={feature} />
      <FeatureHowItWorks feature={feature} />
      <FeatureCapabilities feature={feature} />
      <FeatureUseCases feature={feature} />
      <FAQ faqs={feature.faqs} />
      <FeatureOtherFeatures currentSlug={feature.slug} />
      <FeatureCTA />
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
