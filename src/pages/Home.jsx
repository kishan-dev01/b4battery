import styled from "styled-components";
// import ThemeToggle from "../utils/ThemeToggle";
// import MyComponent from "../components/extras/MyComponent";
// import TestAnimation from "../components/extras/TestAnimation";
import HeroSection from "../components/Home/HeroSection";
import FeaturesSection from "../components/Home/FeaturesSection";
import StatsSection from "../components/Home/StatsSection";
import WhyUsSection from "../components/Home/WhyUsSection";
import ConsultationCTA from "../components/Home/ConsultationCTA";
import MissionSection from "../components/Home/MissionSection";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import AboutSection from "../components/Home/AboutSection";
import PageTransition from "../utils/PageTransition";
import HowItWorks from "../components/Home/HowItWorks";
import OurSegments from "../components/Home/OurSegments";
import OurPartners from "../components/Home/OurPartners";
import GetToKnowUs from "../components/Home/GetToKnowUs";
import FAQSection from "../components/Home/FAQSection";
import AboutUs from "../components/AboutUs/AboutUs";
import ProductGrid from "../components/Home/ProductGrid";
import ServiceSupport from "../components/Home/ServiceSupport";
import ProductVerticalsSection from "../components/Home/ProductVerticalsSection";
import LithiumAdvantage from "../components/Home/LithiumAdvantage";
import SmartTechnology from "../components/Home/SmartTechnology";
import BaaSSection from "../components/Home/BaaSSection";
import SustainabilitySection from "../components/Home/SustainabilitySection";
import IndustriesSection from "../components/Home/IndustriesSection";

const Container = styled.div`
  /* border: 1px solid white; */
  height: 100vh;
  width: auto;
  gap: 2rem;
  flex-direction: column;
`;

function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <AboutSection />
      <ProductVerticalsSection />
      <LithiumAdvantage />
      <ProductGrid />
      <SmartTechnology />
      <BaaSSection />
      <SustainabilitySection />
      <IndustriesSection />
      {/* <StatsSection /> */}
      {/* <OurSegments /> */}
      {/* <HowItWorks /> */}
      <ServiceSupport />
      {/* <OurPartners /> */}
      <GetToKnowUs />
      <FAQSection />
      {/* <FeaturesSection /> */}
      {/* <WhyUsSection /> */}
      {/* <ConsultationCTA /> */}
      {/* <MissionSection /> */}
      {/* <TestimonialsSection /> */}
    </PageTransition>
  );
}

export default Home;
