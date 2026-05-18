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
  return (
    <>
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
