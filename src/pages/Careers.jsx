import BenefitsSection from "../components/Careers/BenefitsSection";
import CareersHero from "../components/Careers/CareersHero";
import JobApplication from "../components/Careers/JobApplication";
import JobOpportunities from "../components/Careers/JobOpportunities";
import WhyChooseB4Battery from "../components/Careers/WhyChooseB4Battery";

function Careers() {
  return (
    <>
      <CareersHero />
      <WhyChooseB4Battery />
      <BenefitsSection />
      <JobOpportunities />
      <JobApplication />
    </>
  );
}

export default Careers;
