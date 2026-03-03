import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import {
  Feather,
  BatteryCharging,
  Zap,
  Droplet,
  Minimize,
  ArrowRight,
  Cpu,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import Animated from "../common/Animated";

const advantageData = [
  {
    id: 1,
    icon: <Feather size={22} />,
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
    icon: <BatteryCharging size={22} />,
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
    icon: <Zap size={22} />,
    title: "Rapid Charging",
    lithiumStat: "2–4 Hours",
    leadStat: "8–10+ Hours",
    description:
      "Get back to operation quickly with high-efficiency, fast-absorbing lithium charging systems.",
    compareNote:
      "Lead-acid requires massive downtime plus mandatory cool-down periods.",
  },
  {
    id: 4,
    icon: <Droplet size={22} />,
    title: "Zero Maintenance",
    lithiumStat: "Zero Watering",
    leadStat: "High Maintenance",
    description:
      "No electrolyte checks, no acid spills, and absolutely no regular servicing required.",
    compareNote:
      "Lead-acid demands regular watering, equalization, and terminal cleaning.",
  },
  {
    id: 5,
    icon: <Minimize size={22} />,
    title: "High Energy Density",
    lithiumStat: "More Power. Less Space.",
    leadStat: "Low Energy Density",
    description:
      "Delivers maximum energy output in a compact footprint, enabling sleek designs and efficient integration.",
    compareNote:
      "Lead-acid requires significantly larger spaces for equivalent power output.",
  },
];

/* ── Decorative badges shown inside the section header area ── */
const BADGES = [
  { icon: <Cpu size={13} />, label: "AI-Ready BMS" },
  { icon: <CheckCircle size={13} />, label: "2026 Compliant" },
  { icon: <TrendingUp size={13} />, label: "High Efficiency" },
];

const LithiumAdvantage = () => {
  const [isComparing, setIsComparing] = useState(false);

  return (
    <Section id="advantage">
      <Container>
        {/* ── Header ── */}
        <HeaderArea>
          <Animated animation="fadeInDown" duration={0.6}>
            <Eyebrow>The Lithium Advantage</Eyebrow>
            <MainHeading>
              Why Modern Energy
              <br />
              <HeadingAccent $isComparing={isComparing}>
                {isComparing
                  ? "Suffers Without Lithium"
                  : "Demands Lithium-Ion"}
              </HeadingAccent>
            </MainHeading>
            <Subheading>
              Engineered for performance, longevity, and intelligence — lithium
              technology redefines what batteries can do in 2026 and beyond.
            </Subheading>

            {/* Inline badges — proper placement inside flow */}
            <BadgeRow>
              {BADGES.map((b) => (
                <Badge key={b.label}>
                  {b.icon}
                  {b.label}
                </Badge>
              ))}
            </BadgeRow>
          </Animated>

          {/* Toggle */}
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
              <ToggleLabel $active={isComparing} $isRed={isComparing}>
                vs Lead-Acid
              </ToggleLabel>
            </ToggleContainer>
          </Animated>
        </HeaderArea>

        {/* ── Cards ── */}
        {/* Row 1 — 3 equal cards */}
        <ValueGrid>
          {advantageData.slice(0, 3).map((item, index) => (
            <Animated
              key={item.id}
              animation="fadeInUp"
              delay={index * 0.1}
              duration={0.5}
            >
              <ValueCard $isComparing={isComparing}>
                <CardTopAccent $isComparing={isComparing} />
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

        {/* Row 2 — 2 wider cards, centered in a 2-col grid */}
        <ValueGridTwo>
          {advantageData.slice(3).map((item, index) => (
            <Animated
              key={item.id}
              animation="fadeInUp"
              delay={(index + 3) * 0.1}
              duration={0.5}
            >
              <ValueCard $isComparing={isComparing}>
                <CardTopAccent $isComparing={isComparing} />
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
        </ValueGridTwo>

        {/* ── CTA Band ── */}
        <Animated animation="slideUp" delay={0.4} duration={0.6}>
          <CTABand>
            <CTALeft>
              <CTAHeadline>
                Experience the Intelligence Behind Lithium
              </CTAHeadline>
              <CTASubtext>
                Discover AI-powered BMS & Predictive Analytics
              </CTASubtext>
            </CTALeft>
            <CTAButton href="/technology">
              See Our Technology <ArrowRight size={17} />
            </CTAButton>
          </CTABand>
        </Animated>
      </Container>
    </Section>
  );
};

export default LithiumAdvantage;

/* ─── Keyframes ──────────────────────────────── */
const subtlePulse = keyframes`
  0%, 100% { opacity: 0.55; }
  50%       { opacity: 0.85; }
`;

/* ─── Section ────────────────────────────────── */
const Section = styled.section`
  padding: 110px 0;
  background: var(--color-bg);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    right: -8%;
    bottom: -8%;
    width: 500px;
    height: 500px;
    background: radial-gradient(
      circle,
      rgba(0, 200, 81, 0.05) 0%,
      transparent 70%
    );
    pointer-events: none;
    z-index: 0;
  }

  @media (max-width: 768px) {
    padding: 70px 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 2;
`;

/* ─── Header ─────────────────────────────────── */
const HeaderArea = styled.div`
  text-align: center;
  margin-bottom: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;

  @media (max-width: 768px) {
    text-align: left;
    align-items: flex-start;
    margin-bottom: 40px;
  }
`;

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-primary);
  background: rgba(0, 200, 81, 0.08);
  border: 1px solid rgba(0, 200, 81, 0.2);
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
`;

const MainHeading = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  color: var(--color-text);
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0;
`;

const HeadingAccent = styled.span`
  background: ${({ $isComparing }) =>
    $isComparing
      ? "linear-gradient(90deg, #F44336, #FF7043)"
      : "linear-gradient(90deg, var(--color-primary), var(--color-accent))"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: background 0.4s ease;
`;

const Subheading = styled.p`
  font-size: 1.05rem;
  color: var(--color-text-muted);
  max-width: 620px;
  line-height: 1.65;
  margin: 0;
`;

/* Inline badge row — sits naturally in header flow */
const BadgeRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  flex-wrap: wrap;
  margin-top: 0.25rem;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.73rem;
  font-weight: 600;
  color: var(--color-text-muted);
  background: var(--color-surface);
  border: 1px solid var(--color-border-light);
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  letter-spacing: 0.04em;
  animation: ${subtlePulse} 4s ease-in-out infinite;

  svg {
    color: var(--color-primary);
  }

  &:nth-child(2) {
    animation-delay: 1.3s;
  }
  &:nth-child(3) {
    animation-delay: 2.6s;
  }
`;

/* ─── Toggle ─────────────────────────────────── */
const ToggleContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.875rem;
  background: var(--color-surface);
  padding: 0.6rem 1.25rem;
  border-radius: 999px;
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
`;

const ToggleLabel = styled.span`
  font-size: 0.9rem;
  font-weight: 700;
  transition: color 0.3s ease;
  color: ${({ $active, $isRed }) =>
    !$active
      ? "var(--color-text-muted)"
      : $isRed
        ? "var(--color-error)"
        : "var(--color-text)"};
`;

const ToggleSwitch = styled.div`
  width: 52px;
  height: 28px;
  background: ${({ $isComparing }) =>
    $isComparing ? "var(--color-error)" : "var(--color-primary)"};
  border-radius: 999px;
  display: flex;
  align-items: center;
  padding: 3px;
  cursor: pointer;
  transition: background 0.3s ease;
  justify-content: ${({ $isComparing }) =>
    $isComparing ? "flex-end" : "flex-start"};
`;

const ToggleKnob = styled(motion.div)`
  width: 22px;
  height: 22px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
`;

/* ─── Grid ───────────────────────────────────── */
const ValueGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    margin-bottom: 1.25rem;
  }
`;

/* We need cards 4-5 in their own centered 2-col sub-row.
   We'll handle this by wrapping the last 2 items differently in JSX —
   but since the grid is flat, we use a CSS trick:
   cards 4 and 5 span the grid but sit in a centered 2-col band. */

/* Row 2 — 2 centered wider cards */
const ValueGridTwo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 56px;
  /* Constrain to 2/3 of container width and center it */
  max-width: 840px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;

  @media (max-width: 1024px) {
    max-width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

/* ─── Card ───────────────────────────────────── */
const ValueCard = styled.div`
  background: var(--color-surface);
  border: 1px solid
    ${({ $isComparing }) =>
      $isComparing ? "rgba(244,67,54,0.2)" : "var(--color-border-light)"};
  border-radius: 18px;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  transition: all 0.35s ease;
  box-shadow: var(--shadow-sm);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ $isComparing }) =>
      $isComparing
        ? "0 12px 32px rgba(244,67,54,0.1)"
        : "0 12px 32px rgba(0,200,81,0.08)"};
    border-color: ${({ $isComparing }) =>
      $isComparing ? "rgba(244,67,54,0.4)" : "rgba(0,200,81,0.3)"};
  }
`;

/* Replaces the ::before approach — explicit element avoids stacking context bugs */
const CardTopAccent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: ${({ $isComparing }) =>
    $isComparing
      ? "linear-gradient(90deg, #F44336, #FF7043)"
      : "linear-gradient(90deg, var(--color-primary), var(--color-accent))"};
  transition: background 0.4s ease;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  margin-bottom: 0.875rem;
  margin-top: 0.5rem;
`;

const IconWrapper = styled.div`
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  background: ${({ $isComparing }) =>
    $isComparing ? "rgba(244,67,54,0.08)" : "rgba(0,200,81,0.08)"};
  color: ${({ $isComparing }) =>
    $isComparing ? "#F44336" : "var(--color-primary)"};
  border: 1px solid
    ${({ $isComparing }) =>
      $isComparing ? "rgba(244,67,54,0.2)" : "rgba(0,200,81,0.18)"};
  border-radius: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
`;

const CardTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--color-text);
  line-height: 1.3;
  margin: 0;
`;

const StatWrapper = styled.div`
  min-height: 38px;
  margin-bottom: 0.5rem;
`;

const HighlightStat = styled(motion.div)`
  font-size: 1.6rem;
  font-weight: 900;
  letter-spacing: -0.03em;
  color: ${({ $isComparing }) =>
    $isComparing ? "#F44336" : "var(--color-primary)"};
  font-family: var(--font-family-secondary);
  line-height: 1;
`;

const Description = styled.p`
  color: var(--color-text-muted);
  line-height: 1.65;
  font-size: 0.9rem;
  margin: 0;
  flex-grow: 1;
`;

const CompareNote = styled(motion.div)`
  background: rgba(244, 67, 54, 0.05);
  border: 1px solid rgba(244, 67, 54, 0.15);
  border-left: 3px solid #f44336;
  padding: 0.6rem 0.875rem;
  font-size: 0.8rem;
  color: var(--color-text-muted);
  border-radius: 0 8px 8px 0;
  overflow: hidden;
  line-height: 1.5;

  strong {
    color: #f44336;
    font-weight: 700;
  }
`;

/* ─── Second row centering wrapper ──────────────
   We render cards 4-5 inside a full-width 3-col
   spanning wrapper so they sit centered.           */
/* (handled via CSS grid spanning below)            */

/* ─── CTA Band ───────────────────────────────── */
const CTABand = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border-light);
  border-radius: 20px;
  padding: 2.25rem 2.75rem;
  box-shadow: var(--shadow-sm);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 2rem 1.5rem;
    gap: 1.5rem;
  }
`;

const CTALeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const CTAHeadline = styled.h3`
  font-size: clamp(1.25rem, 2.5vw, 1.65rem);
  font-weight: 800;
  color: var(--color-text);
  margin: 0;
  line-height: 1.2;
`;

const CTASubtext = styled.span`
  font-size: 0.875rem;
  color: var(--color-text-muted);
  font-weight: 500;
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-primary-dark)
  );
  color: white;
  padding: 0.9rem 2rem;
  border-radius: 999px;
  font-size: 0.975rem;
  font-weight: 700;
  text-decoration: none;
  flex-shrink: 0;
  transition: all 0.25s ease;
  box-shadow: 0 4px 16px rgba(0, 200, 81, 0.3);
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 200, 81, 0.4);
    color: #fff;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;
