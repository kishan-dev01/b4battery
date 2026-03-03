import React from "react";
import styled from "styled-components";
import {
  Sun,
  Layers,
  Sparkles,
  Maximize,
  Grid2X2,
  ArrowRight,
} from "lucide-react";
import Animated from "../common/Animated";

const solarInnovations = [
  {
    id: "topcon",
    title: "TOPCon (Tunnel Oxide Passivated Contact)",
    label: "Market Leader (~70% Share)",
    description:
      "Advanced N-type silicon architecture that reduces electron recombination losses, increasing overall panel efficiency and durability.",
    highlightLabel: "Efficiency Range",
    highlight1: "23–25% efficiency",
    highlight2: "Strong heat resistance",
    icon: <Sun size={24} strokeWidth={1.5} />,
  },
  {
    id: "hjt",
    title: "HJT (Heterojunction Technology)",
    label: "Premium Hybrid Design",
    description:
      "Combines crystalline silicon with thin-film layers to improve low-light performance and temperature stability.",
    highlightLabel: "Efficiency Range",
    highlight1: "26%+ efficiency",
    highlight2: "Excellent fog & cloud performance",
    icon: <Layers size={24} strokeWidth={1.5} />,
  },
  {
    id: "perovskite",
    title: "Perovskite-Silicon Tandem Cells",
    label: "Breakthrough Innovation",
    description:
      "Layered architecture combining silicon (red spectrum capture) and perovskite (blue spectrum capture) to surpass traditional efficiency limits.",
    highlightLabel: "Efficiency Range",
    highlight1: "28–30% commercial efficiency",
    highlight2: "Next-gen spectrum capture",
    icon: <Sparkles size={24} strokeWidth={1.5} />,
  },
  {
    id: "bifacial",
    title: "Bifacial Glass-to-Glass",
    label: "Dual-Side Energy Capture",
    description:
      "Captures sunlight from both front and rear surfaces using reflective ground surfaces to increase total output.",
    highlightLabel: "Performance Gain",
    highlight1: "10–20% higher energy generation",
    highlight2: "Lower degradation rate",
    icon: <Maximize size={24} strokeWidth={1.5} />,
  },
  {
    id: "mbb",
    title: "MBB & Half-Cut Cells",
    label: "Reliability Architecture",
    description:
      "Multi-Busbar (MBB) reduces resistance and heat loss, while Half-Cut cell design ensures continued performance even under partial shading.",
    highlightLabel: "Primary Benefit",
    highlight1: "Improved durability",
    highlight2: "Lower thermal stress",
    icon: <Grid2X2 size={24} strokeWidth={1.5} />,
  },
];

const SolarInnovations = () => {
  return (
    <Section id="solar-innovations">
      <Container>
        {/* --- HEADER AREA --- */}
        <HeaderArea>
          <Animated animation="fadeInDown" duration={0.6}>
            <Eyebrow>SOLAR CELL TECHNOLOGY</Eyebrow>
            <MainHeading>High-Efficiency Solar Standards for 2026</MainHeading>
            <Subheading>
              Modern photovoltaic systems are built on advanced N-type
              architectures and precision-engineered cell designs that maximize
              energy harvest in limited space.
            </Subheading>
            <IntroText>
              Solar innovation in 2026 is driven by higher efficiency, lower
              degradation, and smarter panel architecture. Our systems integrate
              next-generation cell technologies engineered for durability and
              performance.
            </IntroText>
          </Animated>
        </HeaderArea>

        {/* --- INNOVATION BLOCKS --- */}
        <GridContainer>
          {solarInnovations.map((item, index) => (
            <Animated
              key={item.id}
              animation="fadeInUp"
              delay={index * 0.1}
              duration={0.5}
            >
              <InnovationCard>
                <CardHeader>
                  <IconWrapper>{item.icon}</IconWrapper>
                  <PositioningLabel>{item.label}</PositioningLabel>
                </CardHeader>

                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>

                <HighlightBox>
                  <HighlightTitle>{item.highlightLabel}:</HighlightTitle>
                  <HighlightItem>
                    <span className="dot"></span> {item.highlight1}
                  </HighlightItem>
                  <HighlightItem>
                    <span className="dot"></span> {item.highlight2}
                  </HighlightItem>
                </HighlightBox>
              </InnovationCard>
            </Animated>
          ))}
        </GridContainer>

        {/* --- SUMMARY STATEMENT --- */}
        <Animated animation="fadeIn" delay={0.4} duration={0.6}>
          <SummaryStatement>
            Pairing these high-efficiency solar architectures with our
            intelligent BMS and advanced lithium storage creates a fully
            optimized, zero-loss energy ecosystem.
          </SummaryStatement>
        </Animated>
      </Container>
    </Section>
  );
};

export default SolarInnovations;

// --- STYLED COMPONENTS ---

const Section = styled.section`
  padding: 120px 0;
  background-color: var(--color-bg); /* Clean, light background */
  position: relative;

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

// --- Header Styles ---
const HeaderArea = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 40px;

  @media (max-width: 768px) {
    text-align: left;
    margin-bottom: 32px;
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
  font-size: 2.75rem;
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 1rem;
  line-height: 1.2;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const Subheading = styled.p`
  font-size: 1.15rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
  font-weight: 500;
`;

const IntroText = styled.p`
  font-size: 1rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin: 0;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border-light);
`;

// --- Grid & Card Styles ---
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-bottom: 40px;

  /* Centers the last row nicely if there are 5 items */
  @media (min-width: 1025px) {
    & > div:nth-child(4) {
      grid-column: 1 / 2;
      margin-left: 50%; /* Shift right */
    }
    & > div:nth-child(5) {
      grid-column: 2 / 3;
      margin-left: 50%; /* Shift right */
    }
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    & > div:nth-child(4),
    & > div:nth-child(5) {
      margin-left: 0;
      grid-column: auto;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const InnovationCard = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border-light);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.3s ease;

  @media (min-width: 1025px) {
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.04);
      border-color: var(--color-border);
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.25rem;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  color: var(--color-primary);
  background: var(--color-surface-secondary);
  width: 48px;
  height: 48px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const PositioningLabel = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-primary-dark);
  background: rgba(0, 200, 81, 0.08);
  padding: 0.4rem 0.8rem;
  border-radius: 50px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-align: right;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--color-text);
  margin: 0 0 0.75rem 0;
  line-height: 1.3;
`;

const CardDescription = styled.p`
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
  flex-grow: 1; /* Pushes the highlight box to the bottom */
`;

const HighlightBox = styled.div`
  background: var(--color-surface-secondary);
  border: 1px solid var(--color-border-light);
  border-radius: 10px;
  padding: 1rem;
`;

const HighlightTitle = styled.div`
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.5rem;
`;

const HighlightItem = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.3rem;

  &:last-child {
    margin-bottom: 0;
  }

  .dot {
    width: 6px;
    height: 6px;
    background-color: var(--color-primary);
    border-radius: 50%;
    flex-shrink: 0;
  }
`;

const SummaryStatement = styled.div`
  text-align: center;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text-secondary);
  max-width: 800px;
  margin: 0 auto;
  padding-top: 40px;
  border-top: 1px solid var(--color-border-light);
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: left;
    padding-top: 32px;
  }
`;
