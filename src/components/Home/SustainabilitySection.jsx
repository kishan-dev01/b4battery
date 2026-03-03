import React from "react";
import styled from "styled-components";
import {
  Leaf,
  FlaskConical,
  RefreshCw,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Animated from "../common/Animated";

const sustainabilityData = [
  {
    id: 1,
    icon: <Leaf size={28} strokeWidth={1.5} />,
    title: "Ethical Material Sourcing",
    description:
      "We prioritize responsibly mined raw materials and continuously audit supply chains to ensure transparency and environmental accountability.",
    microHighlight: "Transitioning away from cobalt-intensive chemistries.",
  },
  {
    id: 2,
    icon: <FlaskConical size={28} strokeWidth={1.5} />,
    title: "Shift to LFP Chemistry",
    description:
      "Lithium Iron Phosphate (LFP) eliminates cobalt dependency while delivering superior thermal stability and long cycle life.",
    microHighlight: "Safer. More stable. Longer-lasting.",
  },
  {
    id: 3,
    icon: <RefreshCw size={28} strokeWidth={1.5} />,
    title: "Second-Life Energy Loop",
    description:
      "When EV batteries drop below optimal mobility performance (70–80% capacity), we repurpose them for solar storage, rural grids, and backup systems.",
    microHighlight: "Extending usable life beyond mobility.",
  },
  {
    id: 4,
    icon: <ShieldCheck size={28} strokeWidth={1.5} />,
    title: "95% Material Recovery",
    description:
      "Fully compliant with Extended Producer Responsibility (EPR) guidelines, ensuring responsible end-of-life recycling.",
    microHighlight: "Zero-waste lifecycle commitment.",
  },
];

const SustainabilitySection = () => {
  return (
    <Section id="sustainability">
      {/* Faint Circular Background Motif representing the Circular Economy */}
      <CircularMotif>
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
      </CircularMotif>

      <Container>
        {/* --- Header Area --- */}
        <HeaderArea>
          <Animated animation="fadeInDown" duration={0.6}>
            <Eyebrow>SUSTAINABLE ENERGY</Eyebrow>
            <MainHeading>
              Engineered for Performance. Designed for the Planet.
            </MainHeading>
            <Subheading>
              From ethical sourcing to second-life repurposing, our batteries
              follow a zero-waste lifecycle philosophy.
            </Subheading>
          </Animated>
        </HeaderArea>

        {/* --- 2x2 Pillars Grid --- */}
        <GridContainer>
          {sustainabilityData.map((pillar, index) => (
            <Animated
              key={pillar.id}
              animation="fadeInUp"
              delay={index * 0.15}
              duration={0.6}
            >
              <PillarCard>
                <CardTop>
                  <IconWrapper>{pillar.icon}</IconWrapper>
                  <PillarTitle>{pillar.title}</PillarTitle>
                </CardTop>
                <PillarDescription>{pillar.description}</PillarDescription>
                <MicroHighlight>
                  <span className="dot"></span>
                  {pillar.microHighlight}
                </MicroHighlight>
              </PillarCard>
            </Animated>
          ))}
        </GridContainer>

        {/* --- Centered CTA Area --- */}
        <Animated animation="fadeIn" delay={0.4} duration={0.8}>
          <CTAArea>
            <CTAHeadline>Building a Circular Energy Future</CTAHeadline>
            <CTASubtext>
              Explore our sustainability roadmap and compliance standards.
            </CTASubtext>
            <CTAButton href="/sustainability">
              View Our Impact <ArrowRight size={20} />
            </CTAButton>
          </CTAArea>
        </Animated>
      </Container>
    </Section>
  );
};

export default SustainabilitySection;

// --- STYLED COMPONENTS ---

const Section = styled.section`
  padding: 120px 0;
  /* Very light, breathable background gradient */
  background: linear-gradient(
    180deg,
    var(--color-bg) 0%,
    rgba(0, 200, 81, 0.02) 100%
  );
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

// Subtle Circular Economy Graphic
const CircularMotif = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 1000px;
  height: 1000px;
  pointer-events: none;
  z-index: 0;

  .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 1px solid var(--color-primary);
    opacity: 0.04; /* Extremely faint */
  }

  .circle-1 {
    width: 600px;
    height: 600px;
  }

  .circle-2 {
    width: 900px;
    height: 900px;
    border-width: 2px;
  }

  @media (max-width: 768px) {
    display: none; /* Hide on mobile to keep it clean */
  }
`;

const Container = styled.div`
  max-width: 1100px; /* Kept slightly constrained for optimal reading width */
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

// --- Header Styles ---
const HeaderArea = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 50px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const Eyebrow = styled.span`
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--color-primary);
  margin-bottom: 1.25rem;
  display: inline-block;
`;

const MainHeading = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 1.25rem;
  line-height: 1.15;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const Subheading = styled.p`
  font-size: 1.15rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
`;

// --- Grid & Pillars Styles ---
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-bottom: 60px;

  @media (max-width: 992px) {
    gap: 24px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-bottom: 48px;
  }
`;

const PillarCard = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border-light);
  border-radius: 20px;
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);

  /* Soft, elegant hover elevation */
  @media (min-width: 1025px) {
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
      border-color: var(--color-border);
    }
  }

  @media (max-width: 768px) {
    padding: 32px 24px;
  }
`;

const CardTop = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 1.25rem;
`;

const IconWrapper = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--color-surface-secondary);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const PillarTitle = styled.h3`
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const PillarDescription = styled.p`
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
  flex-grow: 1;
`;

const MicroHighlight = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-primary-dark);
  background: rgba(0, 200, 81, 0.06);
  padding: 0.6rem 1rem;
  border-radius: 8px;
  margin-top: auto;
  align-self: flex-start;

  .dot {
    width: 6px;
    height: 6px;
    background-color: var(--color-primary);
    border-radius: 50%;
    flex-shrink: 0;
  }
`;

// --- CTA Area Styles ---
const CTAArea = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CTAHeadline = styled.h3`
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const CTASubtext = styled.p`
  font-size: 1rem;
  color: var(--color-text-muted);
  margin: 0 0 2rem 0;
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: var(--color-primary);
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-size: 1.05rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 200, 81, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 200, 81, 0.35);
    background: var(--color-primary-dark);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
