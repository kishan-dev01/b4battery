import React from "react";
import styled, { keyframes } from "styled-components";
import { Sun, Layers, Sparkles, Maximize, Grid2X2 } from "lucide-react";
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
    icon: <Sun size={20} strokeWidth={1.5} />,
    color: "#00C851",
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
    icon: <Layers size={20} strokeWidth={1.5} />,
    color: "#2196F3",
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
    icon: <Sparkles size={20} strokeWidth={1.5} />,
    color: "#FF9800",
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
    icon: <Maximize size={20} strokeWidth={1.5} />,
    color: "#9C27B0",
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
    icon: <Grid2X2 size={20} strokeWidth={1.5} />,
    color: "#FFD600",
  },
];

const SolarInnovations = () => {
  return (
    <Section id="solar-innovations">
      <SectionBgGrid />
      <SectionGlow />

      <Container>
        {/* ── HEADER ── */}
        <HeaderArea>
          <Animated animation="fadeInDown" duration={0.6}>
            <Eyebrow>
              <Sun size={13} /> Solar Cell Technology
            </Eyebrow>
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

        {/* ── CARDS ── */}
        <GridContainer>
          {solarInnovations.map((item, index) => (
            <Animated
              key={item.id}
              animation="fadeInUp"
              delay={index * 0.1}
              duration={0.5}
            >
              <InnovationCard $color={item.color}>
                <CardTopAccent $color={item.color} />

                <CardHeader>
                  <IconWrap $color={item.color}>
                    <span style={{ color: item.color }}>{item.icon}</span>
                  </IconWrap>
                  <PositioningLabel $color={item.color}>
                    {item.label}
                  </PositioningLabel>
                </CardHeader>

                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>

                <HighlightBox $color={item.color}>
                  <HighlightTitle>{item.highlightLabel}:</HighlightTitle>
                  <HighlightItem>
                    <Dot $color={item.color} /> {item.highlight1}
                  </HighlightItem>
                  <HighlightItem>
                    <Dot $color={item.color} /> {item.highlight2}
                  </HighlightItem>
                </HighlightBox>
              </InnovationCard>
            </Animated>
          ))}
        </GridContainer>

        {/* ── SUMMARY ── */}
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

/* ─── Keyframes ──────────────────────────────── */
const pulseGlow = keyframes`
  0%, 100% { opacity: 0.4; }
  50%       { opacity: 0.7; }
`;

/* ─── Section Shell ──────────────────────────── */
const Section = styled.section`
  padding: 100px 0;
  position: relative;
  overflow: hidden;
  background: linear-gradient(140deg, #080e1a 0%, #0c1a0e 55%, #080e1a 100%);

  @media (max-width: 768px) {
    padding: 72px 0;
  }
`;

const SectionBgGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0, 200, 81, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 200, 81, 0.04) 1px, transparent 1px);
  background-size: 44px 44px;
  pointer-events: none;
`;

const SectionGlow = styled.div`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      ellipse at 20% 30%,
      rgba(255, 214, 0, 0.07) 0%,
      transparent 45%
    ),
    radial-gradient(
      ellipse at 80% 70%,
      rgba(0, 200, 81, 0.07) 0%,
      transparent 45%
    );
  pointer-events: none;
  animation: ${pulseGlow} 6s ease-in-out infinite;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 18px;
  }
`;

/* ─── Header ─────────────────────────────────── */
const HeaderArea = styled.div`
  text-align: center;
  max-width: 780px;
  margin: 0 auto 3rem;

  @media (max-width: 768px) {
    text-align: left;
    margin-bottom: 2rem;
  }
`;

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-primary);
  background: rgba(0, 200, 81, 0.1);
  border: 1px solid rgba(0, 200, 81, 0.22);
  padding: 0.32rem 0.85rem;
  border-radius: 999px;
  margin-bottom: 1.1rem;
`;

const MainHeading = styled.h2`
  font-size: clamp(1.9rem, 3.5vw, 2.75rem);
  font-weight: 900;
  color: #fff;
  margin: 0 0 1rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
`;

const Subheading = styled.p`
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.65;
  margin: 0 0 1.25rem;
  font-weight: 500;
`;

const IntroText = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.35);
  line-height: 1.7;
  margin: 0;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

/* ─── Grid ───────────────────────────────────── */
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1.25rem;
  margin-bottom: 3rem;

  /*
    6-column base: row 1 → 3 cards × 2col each;
    row 2 → 2 cards centered, offset by 1col on each side.
  */
  & > div:nth-child(1) {
    grid-column: 1 / 3;
  }
  & > div:nth-child(2) {
    grid-column: 3 / 5;
  }
  & > div:nth-child(3) {
    grid-column: 5 / 7;
  }
  & > div:nth-child(4) {
    grid-column: 2 / 4;
  }
  & > div:nth-child(5) {
    grid-column: 4 / 6;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    & > div:nth-child(1),
    & > div:nth-child(2),
    & > div:nth-child(3),
    & > div:nth-child(4),
    & > div:nth-child(5) {
      grid-column: auto;
    }
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

/* ─── Card ───────────────────────────────────── */
const InnovationCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  transition: all 0.25s ease;
  height: 100%;

  &:hover {
    background: rgba(255, 255, 255, 0.055);
    border-color: ${({ $color }) => $color}44;
    transform: translateY(-4px);
    box-shadow: 0 12px 32px ${({ $color }) => $color}18;
  }
`;

const CardTopAccent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: ${({ $color }) => $color};
  opacity: 0.7;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.875rem;
  margin-bottom: 1.1rem;
`;

const IconWrap = styled.div`
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  border-radius: 11px;
  background: ${({ $color }) => $color}18;
  border: 1px solid ${({ $color }) => $color}28;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PositioningLabel = styled.span`
  font-size: 0.68rem;
  font-weight: 700;
  color: ${({ $color }) => $color};
  background: ${({ $color }) => $color}18;
  border: 1px solid ${({ $color }) => $color}28;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  text-align: right;
  line-height: 1.4;
`;

const CardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 800;
  color: #fff;
  margin: 0 0 0.6rem;
  line-height: 1.3;
`;

const CardDescription = styled.p`
  font-size: 0.855rem;
  color: rgba(255, 255, 255, 0.48);
  line-height: 1.65;
  margin: 0 0 1.25rem;
  flex-grow: 1;
`;

const HighlightBox = styled.div`
  background: ${({ $color }) => $color}0c;
  border: 1px solid ${({ $color }) => $color}22;
  border-radius: 10px;
  padding: 0.875rem 1rem;
`;

const HighlightTitle = styled.div`
  font-size: 0.68rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.35);
  text-transform: uppercase;
  letter-spacing: 0.07em;
  margin-bottom: 0.5rem;
`;

const HighlightItem = styled.div`
  font-size: 0.855rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.75);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.3rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Dot = styled.span`
  width: 6px;
  height: 6px;
  background: ${({ $color }) => $color};
  border-radius: 50%;
  flex-shrink: 0;
  box-shadow: 0 0 6px ${({ $color }) => $color}88;
`;

/* ─── Summary ────────────────────────────────── */
const SummaryStatement = styled.div`
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.45);
  max-width: 760px;
  margin: 0 auto;
  padding-top: 2.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  line-height: 1.7;

  @media (max-width: 768px) {
    text-align: left;
    padding-top: 2rem;
    font-size: 0.95rem;
  }
`;
