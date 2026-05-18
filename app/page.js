import Header from "./components/Header";
import Banner from "./components/Banner";
import Challenges from "./components/Challenges";
import FeatureCustomize from "./components/FeatureCustomize";
import AutomationResults from "./components/AutomationResults";
import FlexibleDelivery from "./components/FlexibleDelivery";
import CompleteDocumentation from "./components/CompleteDocumentation";
import Faqs from "./components/Faqs";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "PRIME® by Atlas Systems",
    "operatingSystem": "All",
    "applicationCategory": "BusinessApplication",
    "description": "PRIME is an AI-powered automated provider onboarding, data assessment, credentialing, monitoring, and compliance solution.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Atlas Systems",
      "url": "https://atlassystems.com"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Banner />
        <Challenges />
        <FeatureCustomize />
        <AutomationResults />
        <FlexibleDelivery />
        <CompleteDocumentation />
        <Faqs />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
