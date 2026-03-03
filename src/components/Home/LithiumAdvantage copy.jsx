import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import {
  Feather,
  BatteryCharging,
  Zap,
  Droplet,
  Minimize,
  ArrowRight,
} from "lucide-react";
import Animated from "../common/Animated";

const advantageData = [
  {
    id: 1,
    icon: <Feather size={24} />,
    title: "Lightweight & Compact",
    lithiumStat: "Up to 70% Lighter",
    leadStat: "Heavy & Bulky",
    description:
      "Improves vehicle handling, efficiency, and overall design flexibility with significantly reduced weight.",
    compareNote:
      "Lead-acid batteries add bulk and drastically reduce overall performance.",
  },
  {
    id: 2,
    icon: <BatteryCharging size={24} />,
    title: "Extended Lifespan",
    lithiumStat: "800–2,000+ Cycles",
    leadStat: "300–500 Cycles",
    description:
      "Designed to last 3–5 years or more, reducing replacement frequency and long-term operating costs.",
    compareNote:
      "Traditional lead-acid requires frequent, costly replacements.",
  },
  {
    id: 3,
    icon: <Zap size={24} />,
    title: "Rapid Charging Capability",
    lithiumStat: "2–4 Hours",
    leadStat: "8–10+ Hours",
    description:
      "Get back to operation quickly with high-efficiency, fast-absorbing lithium charging systems.",
    compareNote:
      "Lead-acid requires massive downtime plus mandatory cool-down periods.",
  },
  {
    id: 4,
    icon: <Droplet size={24} />,
    title: "No Maintenance Required",
    lithiumStat: "Zero Watering",
    leadStat: "High Maintenance",
    description:
      "No electrolyte checks, no acid spills, and absolutely no regular servicing required.",
    compareNote:
      "Lead-acid demands regular watering, equalization, and terminal cleaning.",
  },
  {
    id: 5,
    icon: <Minimize size={24} />,
    title: "High Energy Density",
    lithiumStat: "More Power. Less Space.",
    leadStat: "Low Energy Density",
    description:
      "Delivers maximum energy output in a compact footprint, enabling sleek designs and efficient integration.",
    compareNote:
      "Lead-acid requires significantly larger spaces for equivalent power output.",
  },
];

const LithiumAdvantage = () => {
  const [isComparing, setIsComparing] = useState(false);

  return (
    <Section id="advantage">
      {/* Subtle Floating Background Chips */}
      <FloatingChip style={{ top: "15%", left: "5%" }}>
        AI-Ready BMS
      </FloatingChip>
      <FloatingChip style={{ top: "40%", right: "5%" }}>
        2026 Compliant
      </FloatingChip>
      <FloatingChip style={{ bottom: "20%", left: "10%" }}>
        High Efficiency
      </FloatingChip>

      <Container>
        <HeaderArea>
          <Animated animation="fadeInDown" duration={0.6}>
            <Eyebrow>THE LITHIUM ADVANTAGE</Eyebrow>
            <MainHeading>Why Modern Energy Demands Lithium-Ion</MainHeading>
            <Subheading>
              Engineered for performance, longevity, and intelligence — lithium
              technology redefines what batteries can do in 2026 and beyond.
            </Subheading>
          </Animated>

          <Animated animation="fadeIn" delay={0.3}>
            <ToggleContainer>
              <ToggleLabel $active={!isComparing}>Lithium-Ion</ToggleLabel>
              <ToggleSwitch
                onClick={() => setIsComparing(!isComparing)}
                $isComparing={isComparing}
              >
                <ToggleKnob
                  layout
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </ToggleSwitch>
              <ToggleLabel $active={isComparing} className="compare-label">
                vs Lead-Acid
              </ToggleLabel>
            </ToggleContainer>
          </Animated>
        </HeaderArea>

        <ValueGrid>
          {advantageData.map((item, index) => (
            <Animated
              key={item.id}
              animation="fadeInUp"
              delay={index * 0.1}
              duration={0.5}
            >
              <ValueCard $isComparing={isComparing}>
                <CardHeader>
                  <IconWrapper $isComparing={isComparing}>
                    {item.icon}
                  </IconWrapper>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>

                <StatWrapper>
                  <AnimatePresence mode="wait">
                    <HighlightStat
                      key={isComparing ? "lead" : "lithium"}
                      $isComparing={isComparing}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {isComparing ? item.leadStat : item.lithiumStat}
                    </HighlightStat>
                  </AnimatePresence>
                </StatWrapper>

                <Description>{item.description}</Description>

                <AnimatePresence>
                  {isComparing && (
                    <CompareNote
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    >
                      <strong>Lead-Acid Penalty:</strong> {item.compareNote}
                    </CompareNote>
                  )}
                </AnimatePresence>
              </ValueCard>
            </Animated>
          ))}
        </ValueGrid>

        <Animated animation="slideUp" delay={0.4} duration={0.6}>
          <CTABand>
            <CTAHeadline>
              Experience the Intelligence Behind Lithium
            </CTAHeadline>
            <CTAButton href="/technology">
              See Our Technology <ArrowRight size={20} />
            </CTAButton>
            <CTASubtext>
              Discover AI-powered BMS & Predictive Analytics
            </CTASubtext>
          </CTABand>
        </Animated>
      </Container>
    </Section>
  );
};

export default LithiumAdvantage;

// --- STYLED COMPONENTS ---

const Section = styled.section`
  padding: 120px 0;
  background: linear-gradient(
    135deg,
    var(--color-bg) 0%,
    var(--color-bg-secondary) 100%
  );
  position: relative;
  overflow: hidden;

  /* Subtle background outline silhouette (Lead Acid) */
  &::before {
    content: "";
    position: absolute;
    right: -5%;
    bottom: -10%;
    width: 600px;
    height: 600px;
    background: radial-gradient(
      circle,
      var(--color-border-light) 0%,
      transparent 70%
    );
    opacity: 0.4;
    z-index: 0;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 70px 0;
  }
`;

const FloatingChip = styled.div`
  position: absolute;
  padding: 0.5rem 1rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: var(--shadow-sm);
  z-index: 1;
  pointer-events: none;
  opacity: 0.6;

  @media (max-width: 1024px) {
    display: none; /* Hide on smaller screens to prevent clutter */
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 18px;
  }
`;

// --- Header Area ---
const HeaderArea = styled.div`
  text-align: center;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    text-align: left;
    align-items: flex-start;
    margin-bottom: 40px;
  }
`;

const Eyebrow = styled.span`
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--color-primary);
  margin-bottom: 1rem;
  display: inline-block;
`;

const MainHeading = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 1.25rem;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const Subheading = styled.p`
  font-size: 1.15rem;
  color: var(--color-text-secondary);
  max-width: 700px;
  line-height: 1.6;
  margin: 0 auto 2rem;

  @media (max-width: 768px) {
    font-size: 1.05rem;
    margin: 0 0 2rem 0;
  }
`;

// --- Interactive Toggle ---
const ToggleContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  background: var(--color-surface);
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
`;

const ToggleLabel = styled.span`
  font-size: 0.95rem;
  font-weight: 700;
  color: ${(props) =>
    props.$active ? "var(--color-text)" : "var(--color-text-muted)"};
  transition: color 0.3s ease;

  &.compare-label {
    color: ${(props) =>
      props.$active
        ? "var(--color-error, #F44336)"
        : "var(--color-text-muted)"};
  }
`;

const ToggleSwitch = styled.div`
  width: 60px;
  height: 32px;
  background: ${(props) =>
    props.$isComparing ? "var(--color-border)" : "var(--color-primary)"};
  border-radius: 50px;
  display: flex;
  align-items: center;
  padding: 4px;
  cursor: pointer;
  transition: background 0.3s ease;
  justify-content: ${(props) =>
    props.$isComparing ? "flex-end" : "flex-start"};
`;

const ToggleKnob = styled(motion.div)`
  width: 24px;
  height: 24px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

// --- Grid & Cards ---
const ValueGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 60px;

  /* Staggered layout on desktop to make it dynamic */
  @media (min-width: 1025px) {
    & > div:nth-child(2) {
      transform: translateY(20px);
    }
    & > div:nth-child(4) {
      grid-column: 1 / 3;
      width: 66%;
      justify-self: center;
    }
    & > div:nth-child(5) {
      grid-column: 2 / 4;
      width: 66%;
      justify-self: center;
      transform: translateY(-20px);
    }
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-bottom: 50px;
  }
`;

const ValueCard = styled.div`
  background: var(--color-surface);
  border: 1px solid
    ${(props) =>
      props.$isComparing
        ? "rgba(244, 67, 54, 0.3)"
        : "var(--color-border-light)"};
  border-radius: 20px;
  padding: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.4s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${(props) =>
      props.$isComparing
        ? "var(--color-error, #F44336)"
        : "var(--color-primary)"};
    opacity: ${(props) => (props.$isComparing ? 0.8 : 0)};
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
    border-color: ${(props) =>
      props.$isComparing
        ? "rgba(244, 67, 54, 0.5)"
        : "var(--color-primary-light)"};
  }

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  background: ${(props) =>
    props.$isComparing
      ? "rgba(244, 67, 54, 0.1)"
      : "var(--color-surface-secondary)"};
  color: ${(props) =>
    props.$isComparing ? "#F44336" : "var(--color-primary)"};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-text);
  line-height: 1.3;
`;

const StatWrapper = styled.div`
  min-height: 40px; /* Prevents layout jump during animation */
  margin-bottom: 0.75rem;
`;

const HighlightStat = styled(motion.div)`
  font-size: 1.75rem;
  font-weight: 800;
  color: ${(props) =>
    props.$isComparing
      ? "var(--color-error, #F44336)"
      : "var(--color-primary)"};
  letter-spacing: -0.5px;
  font-family: var(--font-family-secondary);
`;

const Description = styled.p`
  color: var(--color-text-secondary);
  line-height: 1.6;
  font-size: 1rem;
  margin: 0;
  flex-grow: 1;
`;

const CompareNote = styled(motion.div)`
  background: rgba(244, 67, 54, 0.05);
  border-left: 3px solid #f44336;
  padding: 0.75rem 1rem;
  font-size: 0.85rem;
  color: var(--color-text);
  border-radius: 0 8px 8px 0;
  overflow: hidden;

  strong {
    color: #f44336;
  }
`;

// --- CTA Band ---
const CTABand = styled.div`
  background: linear-gradient(
    135deg,
    var(--color-surface) 0%,
    var(--color-bg) 100%
  );
  border: 1px solid var(--color-border);
  border-radius: 24px;
  padding: 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: var(--shadow-md);

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const CTAHeadline = styled.h3`
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
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
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 200, 81, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 200, 81, 0.4);
    background: var(--color-primary-dark);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CTASubtext = styled.span`
  display: block;
  margin-top: 1rem;
  font-size: 0.9rem;
  color: var(--color-text-muted);
  font-weight: 500;
`;
