import UtilityBar from "../../components/UtilityBar/UtilityBar";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Hero from "../../components/Hero/Hero";
import AccessibilityPanel from "../../components/AccessibilityPanel/AccessibilityPanel";
import ImpactSection from "../../components/ImpactSection/ImpactSection";
import Footer from "../../components/Footer/Footer";

import "../../components/UtilityBar/UtilityBar.css";
import "../../components/Breadcrumb/Breadcrumb.css";
import "../../components/Hero/Hero.css";
import "../../components/AccessibilityPanel/AccessibilityPanel.css";
import "../../components/ImpactSection/ImpactSection.css";
import "../../components/Footer/Footer.css";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <UtilityBar />
      <Breadcrumb />
      <div className="home__hero-row">
        <Hero />
        <AccessibilityPanel />
      </div>
      <ImpactSection />
      <Footer />
    </div>
  );
}
