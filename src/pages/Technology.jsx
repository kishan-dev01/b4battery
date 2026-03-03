import BatteryChemistries from "../components/Technology/BatteryChemistries";
import BmsArchitecture from "../components/Technology/BmsArchitecture";
import InverterIntelligence from "../components/Technology/InverterIntelligence";
import SolarInnovations from "../components/Technology/SolarInnovations";
import TechnologyHero from "../components/Technology/TechnologyHero";

function Technology() {
  return (
    <>
      <TechnologyHero />
      <BmsArchitecture />
      <BatteryChemistries />
      <SolarInnovations />
      <InverterIntelligence />
    </>
  );
}

export default Technology;
