import AgricultureSolutions from "../components/Solutions/AgricultureSolutions";
import CommercialInfrastructure from "../components/Solutions/CommercialInfrastructure";
import LogisticsWarehousing from "../components/Solutions/LogisticsWarehousing";
import ResidentialSolutions from "../components/Solutions/ResidentialSolutions";
import SolutionsHero from "../components/Solutions/SolutionsHero";

function Solutions() {
  return (
    <>
      <SolutionsHero />
      <LogisticsWarehousing />
      <AgricultureSolutions />
      <ResidentialSolutions />
      <CommercialInfrastructure />
    </>
  );
}

export default Solutions;
