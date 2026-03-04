import React from "react";
import styled, { keyframes } from "styled-components";
import {
  ArrowRight,
  Zap,
  Clock,
  BatteryMedium,
  Wrench,
  Maximize,
  Cpu,
  Cloud,
  RefreshCw,
  Sliders,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import Animated from "../../components/common/Animated";

const advantagesData = [
  {
    icon: <Zap size={20} />,
    title: "Lightweight & Compact",
    description:
      "Up to 70% lighter than traditional lead-acid batteries, improving vehicle handling and overall efficiency.",
    color: "#FFD600",
  },
  {
    icon: <Clock size={20} />,
    title: "Fast Charging",
    description:
      "Recharge in just 2–4 hours compared to the 8–10 hours required for conventional batteries.",
    color: "#2196F3",
  },
  {
    icon: <BatteryMedium size={20} />,
    title: "Longer Lifespan",
    description:
      "Provides 800 to 2,000+ charge cycles, delivering reliable performance for 3–5 years or more.",
    color: "#00C851",
  },
  {
    icon: <Wrench size={20} />,
    title: "Maintenance-Free",
    description:
      "No water refilling or electrolyte monitoring required, simplifying long-term ownership.",
    color: "#FF9800",
  },
  {
    icon: <Maximize size={20} />,
    title: "High Energy Density",
    description:
      "Delivers more power within a compact footprint, enabling sleek electric vehicle designs.",
    color: "#9C27B0",
  },
];

const bmsFeatures = [
  {
    icon: <Cpu size={18} />,
    title: "Predictive Analytics",
    description:
      "AI algorithms analyze cell health and predict wear before failure occurs, enabling proactive battery health checks.",
    color: "#00C851",
  },
  {
    icon: <Cloud size={18} />,
    title: "Cloud Monitoring",
    description:
      "Real-time data synchronization allows remote monitoring and diagnostics through cloud-connected systems.",
    color: "#2196F3",
  },
  {
    icon: <RefreshCw size={18} />,
    title: "OTA Diagnostics",
    description:
      "If the battery experiences abnormal behavior, technicians can diagnose issues remotely using over-the-air diagnostics.",
    color: "#FF9800",
  },
  {
    icon: <Sliders size={18} />,
    title: "Adaptive Cell Balancing",
    description:
      "Active cell balancing technology ensures all battery cells operate at peak efficiency, extending battery lifespan by up to 25%.",
    color: "#9C27B0",
  },
];

const performancePoints = [
  "High energy density design for compact electric vehicle integration",
  "Reliable power delivery across long operating cycles",
  "Consistent output throughout the discharge cycle",
  "Reduced downtime through faster charging capabilities",
];

const EVLithiumBatteries = () => {
  return (
    <PageWrapper>
      {/* ── 1. HERO ── */}
      <HeroSection>
        <HeroBgGrid />
        <HeroGlow />
        <Container>
          <HeroGrid>
            <HeroContent>
              <Animated animation="fadeInDown" duration={0.6}>
                <Eyebrow>Mobility Energy Solution</Eyebrow>
                <HeroHeading>
                  EV Lithium
                  <br />
                  <HeroAccent>Batteries</HeroAccent>
                </HeroHeading>
                <HeroSubheading>
                  Advanced lithium-ion battery systems engineered for modern
                  electric mobility, delivering higher energy density, faster
                  charging, and intelligent battery management.
                </HeroSubheading>
                <HeroDescription>
                  Designed for next-generation electric vehicles, these
                  lithium-ion batteries provide reliable power, lightweight
                  construction, and extended lifecycle performance while
                  eliminating the maintenance challenges associated with
                  traditional lead-acid systems.
                </HeroDescription>
                <HeroCTARow>
                  <CTAButtonPrimary href="/technology">
                    Explore Technology <ArrowRight size={16} />
                  </CTAButtonPrimary>
                  <CTAButtonGhost href="/contact-us">
                    Get a Quote
                  </CTAButtonGhost>
                </HeroCTARow>
              </Animated>
            </HeroContent>

            <HeroImageArea>
              <Animated animation="fadeIn" delay={0.2} duration={0.8}>
                <HeroImageFrame>
                  <HeroImageGlow />
                  <img
                    src="/images/products/ev-lithium-battery.png"
                    alt="EV Lithium Battery"
                    loading="lazy"
                  />
                </HeroImageFrame>
              </Animated>
            </HeroImageArea>
          </HeroGrid>
        </Container>
      </HeroSection>

      {/* ── 2. KEY ADVANTAGES ── */}
      <AdvantagesSection>
        <Container>
          <Animated animation="fadeInDown" duration={0.6}>
            <SectionEyebrow centered>Benefits</SectionEyebrow>
            <SectionTitle centered>Why Choose Lithium-Ion?</SectionTitle>
          </Animated>
          <AdvantagesGrid>
            {advantagesData.slice(0, 3).map((adv, index) => (
              <Animated
                key={index}
                animation="fadeInUp"
                delay={index * 0.08}
                duration={0.5}
              >
                <AdvantageCard $color={adv.color}>
                  <AdvCardAccent $color={adv.color} />
                  <IconBox $color={adv.color}>{adv.icon}</IconBox>
                  <CardTitle>{adv.title}</CardTitle>
                  <CardDesc>{adv.description}</CardDesc>
                </AdvantageCard>
              </Animated>
            ))}
          </AdvantagesGrid>
          <AdvantagesGridTwo>
            {advantagesData.slice(3).map((adv, index) => (
              <Animated
                key={index + 3}
                animation="fadeInUp"
                delay={(index + 3) * 0.08}
                duration={0.5}
              >
                <AdvantageCard $color={adv.color}>
                  <AdvCardAccent $color={adv.color} />
                  <IconBox $color={adv.color}>{adv.icon}</IconBox>
                  <CardTitle>{adv.title}</CardTitle>
                  <CardDesc>{adv.description}</CardDesc>
                </AdvantageCard>
              </Animated>
            ))}
          </AdvantagesGridTwo>
        </Container>
      </AdvantagesSection>

      {/* ── 3. SMART BATTERY TECHNOLOGY ── */}
      <TechnologySection>
        <Container>
          <SplitLayout>
            <TechVisualArea>
              <Animated animation="fadeInRight" duration={0.8}>
                <TechPanel>
                  <TechPanelGrid />
                  <TechPanelGlow />
                  <TechPanelContent>
                    <TechPanelBadge>2026 Smart BMS</TechPanelBadge>
                    <TechMetricGrid>
                      {[
                        { val: "25%", label: "Longer Life" },
                        { val: "OTA", label: "Remote Updates" },
                        { val: "99.8%", label: "Uptime" },
                        { val: "Real-Time", label: "Cloud Sync" },
                      ].map((m) => (
                        <TechMetric key={m.label}>
                          <TechMetricVal>{m.val}</TechMetricVal>
                          <TechMetricLabel>{m.label}</TechMetricLabel>
                        </TechMetric>
                      ))}
                    </TechMetricGrid>
                  </TechPanelContent>
                </TechPanel>
              </Animated>
            </TechVisualArea>

            <TechContentArea>
              <Animated animation="fadeInLeft" duration={0.6}>
                <SectionEyebrow>Smart Battery Intelligence</SectionEyebrow>
                <SectionTitle>
                  AI-Powered Battery
                  <br />
                  Management System
                </SectionTitle>
                <SectionDescription>
                  Our 2026-edition lithium batteries are not just energy storage
                  systems—they function as intelligent devices powered by
                  advanced battery management software.
                </SectionDescription>
                <FeaturesList>
                  {bmsFeatures.map((feature, index) => (
                    <FeatureItem key={index}>
                      <FeatureIcon $color={feature.color}>
                        <span style={{ color: feature.color }}>
                          {feature.icon}
                        </span>
                      </FeatureIcon>
                      <FeatureText>
                        <FeatureTitle>{feature.title}</FeatureTitle>
                        {feature.description}
                      </FeatureText>
                    </FeatureItem>
                  ))}
                </FeaturesList>
              </Animated>
            </TechContentArea>
          </SplitLayout>
        </Container>
      </TechnologySection>

      {/* ── 4. PERFORMANCE & LIFECYCLE ── */}
      <PerformanceSection>
        <Container>
          <PerformanceLayout>
            <PerformanceContent>
              <Animated animation="fadeInUp" duration={0.6}>
                <SectionEyebrow>Performance</SectionEyebrow>
                <SectionTitle>
                  Engineered for
                  <br />
                  Long-Term Performance
                </SectionTitle>
                <PerformancePointsList>
                  {performancePoints.map((point, index) => (
                    <li key={index}>
                      <CheckCircle2 size={18} className="check-icon" />
                      <span>{point}</span>
                    </li>
                  ))}
                </PerformancePointsList>
              </Animated>
            </PerformanceContent>

            <PerformanceVisual>
              <Animated animation="fadeIn" delay={0.2} duration={0.8}>
                <PerfPanel>
                  {[
                    {
                      label: "Charge Cycles",
                      val: "2,000+",
                      color: "#00C851",
                      pct: 90,
                    },
                    {
                      label: "Charging Time",
                      val: "2–4 hrs",
                      color: "#2196F3",
                      pct: 30,
                    },
                    {
                      label: "Weight Reduction",
                      val: "70%",
                      color: "#FF9800",
                      pct: 70,
                    },
                    {
                      label: "Lifecycle",
                      val: "3–5 yrs",
                      color: "#9C27B0",
                      pct: 80,
                    },
                  ].map((row) => (
                    <PerfRow key={row.label}>
                      <PerfRowTop>
                        <PerfRowLabel>{row.label}</PerfRowLabel>
                        <PerfRowVal $color={row.color}>{row.val}</PerfRowVal>
                      </PerfRowTop>
                      <PerfBar>
                        <PerfFill $color={row.color} $pct={row.pct} />
                      </PerfBar>
                    </PerfRow>
                  ))}
                </PerfPanel>
              </Animated>
            </PerformanceVisual>
          </PerformanceLayout>
        </Container>
      </PerformanceSection>

      {/* ── 5. SUSTAINABILITY ── */}
      <SustainabilitySection>
        <Container>
          <Animated animation="slideUp" duration={0.6}>
            <SectionEyebrow centered>Environment</SectionEyebrow>
            <SectionTitle centered>
              Sustainable Energy from Cell to Lifecycle
            </SectionTitle>
            <SectionDescription centered maxW>
              Our EV lithium batteries are designed with environmental
              responsibility in mind.
            </SectionDescription>
            <SustainabilityGrid>
              {[
                {
                  text: "Transition toward Lithium Iron Phosphate (LFP) chemistry to reduce cobalt reliance",
                  color: "#00C851",
                },
                {
                  text: "Second-life battery programs repurpose used EV batteries for solar storage applications",
                  color: "#2196F3",
                },
                {
                  text: "Compliance with Extended Producer Responsibility (EPR) regulations ensures that up to 95% of battery materials are recovered and recycled",
                  color: "#FF9800",
                },
              ].map((item, i) => (
                <SustainCard key={i} $color={item.color}>
                  <SustainDot $color={item.color} />
                  <SustainText>{item.text}</SustainText>
                </SustainCard>
              ))}
            </SustainabilityGrid>
          </Animated>
        </Container>
      </SustainabilitySection>

      {/* ── CTA ── */}
      <CtaSection>
        <CtaBg />
        <CtaGrid />
        <Container>
          <Animated animation="fadeIn" duration={0.6}>
            <CtaWrapper>
              <CtaEyebrow>
                <MessageSquare size={13} /> Get In Touch
              </CtaEyebrow>
              <CtaHeading>
                Power the Next Generation of Electric Mobility
              </CtaHeading>
              <CtaSubtext>
                Discover how intelligent lithium battery systems are
                transforming modern electric vehicles.
              </CtaSubtext>
              <CtaButton href="/contact-us">
                <MessageSquare size={16} /> Contact Our Energy Experts
              </CtaButton>
            </CtaWrapper>
          </Animated>
        </Container>
      </CtaSection>
    </PageWrapper>
  );
};

export default EVLithiumBatteries;

/* ─── Keyframes ──────────────────────────────── */
const floatAnim = keyframes`
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-14px); }
`;

const pulseGlow = keyframes`
  0%, 100% { opacity: 0.35; transform: scale(1); }
  50%       { opacity: 0.6;  transform: scale(1.06); }
`;

const fillBar = keyframes`
  from { width: 0; }
  to   { width: var(--target); }
`;

/* ─── Base ───────────────────────────────────── */
const PageWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  background: var(--color-bg);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 768px) {
    padding: 0 18px;
  }
`;

/* ─── Shared ─────────────────────────────────── */
const SectionEyebrow = styled.p`
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: var(--color-primary);
  margin: 0 0 0.45rem;
  ${({ centered }) => centered && "text-align: center;"}
  ${({ light }) => light && "color: rgba(255,255,255,0.5);"}
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 900;
  color: var(--color-text);
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0 0 0.75rem;
  ${({ centered }) => centered && "text-align: center;"}
`;

const SectionDescription = styled.p`
  font-size: 1rem;
  color: var(--color-text-muted);
  line-height: 1.65;
  margin: 0 0 2rem;
  ${({ centered }) =>
    centered && "text-align: center; margin-left: auto; margin-right: auto;"}
  ${({ maxW }) => maxW && "max-width: 640px;"}
`;

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-primary);
  background: rgba(0, 200, 81, 0.1);
  border: 1px solid rgba(0, 200, 81, 0.22);
  padding: 0.32rem 0.85rem;
  border-radius: 999px;
  width: fit-content;
  margin-bottom: 1rem;
`;

/* ─── Hero ───────────────────────────────────── */
const HeroSection = styled.section`
  position: relative;
  overflow: hidden;
  background: linear-gradient(140deg, #080e1a 0%, #0b1e12 55%, #080e1a 100%);
  padding: 130px 0 100px;

  @media (max-width: 768px) {
    padding: 110px 0 72px;
  }
`;

const HeroBgGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0, 200, 81, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 200, 81, 0.04) 1px, transparent 1px);
  background-size: 44px 44px;
  pointer-events: none;
`;

const HeroGlow = styled.div`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      ellipse at 70% 45%,
      rgba(0, 200, 81, 0.1) 0%,
      transparent 55%
    ),
    radial-gradient(
      ellipse at 12% 70%,
      rgba(33, 150, 243, 0.07) 0%,
      transparent 45%
    );
  pointer-events: none;
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 44px;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;

  @media (max-width: 900px) {
    order: 2;
    align-items: center;
    text-align: center;
  }
`;

const HeroHeading = styled.h1`
  font-size: clamp(2.75rem, 6vw, 4.25rem);
  font-weight: 900;
  color: #fff;
  line-height: 1.05;
  letter-spacing: -0.03em;
  margin: 0;
`;

const HeroAccent = styled.span`
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const HeroSubheading = styled.p`
  font-size: 1.05rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
  margin: 0;
  max-width: 480px;
`;

const HeroDescription = styled.p`
  font-size: 0.925rem;
  color: rgba(255, 255, 255, 0.38);
  line-height: 1.7;
  margin: 0;
  max-width: 460px;
`;

const HeroCTARow = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const CTAButtonPrimary = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: var(--color-primary);
  color: #fff;
  padding: 0.875rem 1.875rem;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(0, 200, 81, 0.35);
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(0, 200, 81, 0.45);
    color: #fff;
  }
`;

const CTAButtonGhost = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.875rem 1.875rem;
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  backdrop-filter: blur(6px);
  transition: all 0.25s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    transform: translateY(-2px);
  }
`;

const HeroImageArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    order: 1;
  }
`;

const HeroImageFrame = styled.div`
  position: relative;
  width: 100%;
  max-width: 460px;
  animation: ${floatAnim} 6s ease-in-out infinite;

  img {
    width: 100%;
    height: auto;
    max-height: 420px;
    object-fit: contain;
    position: relative;
    z-index: 2;
    filter: drop-shadow(0 24px 48px rgba(0, 200, 81, 0.18));
  }
`;

const HeroImageGlow = styled.div`
  position: absolute;
  bottom: 8%;
  left: 50%;
  transform: translateX(-50%);
  width: 65%;
  height: 70px;
  background: radial-gradient(
    ellipse,
    rgba(0, 200, 81, 0.22) 0%,
    transparent 70%
  );
  filter: blur(20px);
  animation: ${pulseGlow} 3s ease-in-out infinite;
  z-index: 1;
`;

/* ─── Advantages ─────────────────────────────── */
const AdvantagesSection = styled.section`
  padding: 88px 0;
  background: var(--color-surface);
  border-top: 1px solid var(--color-border-light);
  border-bottom: 1px solid var(--color-border-light);
`;

const AdvantagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin-top: 2.5rem;

  /* Row 2: 2 cards centered */
  & > div:nth-child(4),
  & > div:nth-child(5) {
    /* handled by the second row grid below */
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;

/* Split 5-card grid into two rows in JSX via wrapper trick:
   first 3 in AdvantagesGrid, last 2 in AdvantagesGridTwo */
const AdvantagesGridTwo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  margin-top: 1.25rem;
  max-width: 820px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 900px) {
    max-width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;

const AdvantageCard = styled.div`
  background: var(--color-bg);
  border: 1px solid var(--color-border-light);
  border-radius: 16px;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 28px ${({ $color }) => $color}18;
    border-color: ${({ $color }) => $color}40;
  }
`;

const AdvCardAccent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: ${({ $color }) => $color};
`;

const IconBox = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 11px;
  background: ${({ $color }) => $color}14;
  border: 1px solid ${({ $color }) => $color}28;
  color: ${({ $color }) => $color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.25rem;
`;

const CardTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--color-text);
  margin: 0;
  line-height: 1.3;
`;

const CardDesc = styled.p`
  font-size: 0.875rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin: 0;
`;

/* ─── Technology ─────────────────────────────── */
const TechnologySection = styled.section`
  padding: 88px 0;
  background: var(--color-bg);
`;

const SplitLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const TechVisualArea = styled.div`
  width: 100%;

  @media (max-width: 900px) {
    order: 2;
  }
`;

/* Replaces empty VisualPlaceholder with a proper dark tech panel */
const TechPanel = styled.div`
  position: relative;
  width: 100%;
  min-height: 380px;
  background: #080e1a;
  border: 1px solid rgba(0, 200, 81, 0.14);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.22);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TechPanelGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0, 200, 81, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 200, 81, 0.04) 1px, transparent 1px);
  background-size: 36px 36px;
`;

const TechPanelGlow = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at 50% 50%,
    rgba(0, 200, 81, 0.08) 0%,
    transparent 65%
  );
`;

const TechPanelContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.75rem;
  padding: 2.5rem;
  width: 100%;
`;

const TechPanelBadge = styled.div`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-primary);
  background: rgba(0, 200, 81, 0.1);
  border: 1px solid rgba(0, 200, 81, 0.22);
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
`;

const TechMetricGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  overflow: hidden;
  width: 100%;
`;

const TechMetric = styled.div`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.25rem 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const TechMetricVal = styled.span`
  font-size: 1.4rem;
  font-weight: 900;
  color: var(--color-primary);
  font-family: var(--font-family-mono);
  line-height: 1;
`;

const TechMetricLabel = styled.span`
  font-size: 0.65rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.35);
  text-transform: uppercase;
  letter-spacing: 0.07em;
`;

const TechContentArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 900px) {
    order: 1;
  }
`;

const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 0.5rem;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
`;

const FeatureIcon = styled.div`
  width: 38px;
  height: 38px;
  flex-shrink: 0;
  border-radius: 10px;
  background: ${({ $color }) => $color}12;
  border: 1px solid ${({ $color }) => $color}25;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FeatureTitle = styled.strong`
  display: block;
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.2rem;
`;

const FeatureText = styled.p`
  font-size: 0.875rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin: 0;
`;

/* ─── Performance ────────────────────────────── */
const PerformanceSection = styled.section`
  padding: 88px 0;
  background: var(--color-surface);
  border-top: 1px solid var(--color-border-light);
  border-bottom: 1px solid var(--color-border-light);
`;

const PerformanceLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 56px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const PerformanceContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const PerformancePointsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.25rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  li {
    display: flex;
    align-items: flex-start;
    gap: 0.875rem;
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--color-text);
    line-height: 1.55;

    .check-icon {
      color: var(--color-primary);
      flex-shrink: 0;
      margin-top: 0.1rem;
    }
  }
`;

const PerformanceVisual = styled.div`
  width: 100%;
`;

/* Replaces GraphicPlaceholder with a real visual bar chart */
const PerfPanel = styled.div`
  background: var(--color-bg);
  border: 1px solid var(--color-border-light);
  border-radius: 18px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const PerfRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const PerfRowTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const PerfRowLabel = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const PerfRowVal = styled.span`
  font-size: 1rem;
  font-weight: 800;
  color: ${({ $color }) => $color};
  font-family: var(--font-family-mono);
`;

const PerfBar = styled.div`
  width: 100%;
  height: 7px;
  background: var(--color-surface-secondary);
  border-radius: 999px;
  overflow: hidden;
`;

const PerfFill = styled.div`
  height: 100%;
  width: ${({ $pct }) => $pct}%;
  background: ${({ $color }) => $color};
  border-radius: 999px;
  box-shadow: 0 0 8px ${({ $color }) => $color}55;
`;

/* ─── Sustainability ─────────────────────────── */
const SustainabilitySection = styled.section`
  padding: 88px 0;
  background: var(--color-bg);
`;

const SustainabilityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  max-width: 980px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const SustainCard = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border-light);
  border-top: 3px solid ${({ $color }) => $color};
  border-radius: 14px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: all 0.25s ease;

  &:hover {
    box-shadow: 0 8px 24px ${({ $color }) => $color}14;
    border-color: ${({ $color }) => $color}44;
    border-top-color: ${({ $color }) => $color};
    transform: translateY(-3px);
  }
`;

const SustainDot = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ $color }) => $color}14;
  border: 1.5px solid ${({ $color }) => $color}35;
  flex-shrink: 0;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({ $color }) => $color};
  }
`;

const SustainText = styled.p`
  font-size: 0.9rem;
  color: var(--color-text-muted);
  line-height: 1.65;
  margin: 0;
`;

/* ─── CTA ────────────────────────────────────── */
const CtaSection = styled.section`
  position: relative;
  overflow: hidden;
  padding: 100px 0;
  background: linear-gradient(140deg, #080e1a 0%, #0b1e12 60%, #080e1a 100%);
  text-align: center;
`;

const CtaBg = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at 50% 60%,
    rgba(0, 200, 81, 0.1) 0%,
    transparent 60%
  );
  pointer-events: none;
`;

const CtaGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0, 200, 81, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 200, 81, 0.03) 1px, transparent 1px);
  background-size: 44px 44px;
  pointer-events: none;
`;

const CtaWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 660px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.1rem;
`;

const CtaEyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-primary);
  background: rgba(0, 200, 81, 0.1);
  border: 1px solid rgba(0, 200, 81, 0.22);
  padding: 0.3rem 0.85rem;
  border-radius: 999px;
`;

const CtaHeading = styled.h3`
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 900;
  color: #fff;
  margin: 0;
  line-height: 1.15;
`;

const CtaSubtext = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.48);
  line-height: 1.65;
  margin: 0;
`;

const CtaButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: var(--color-primary);
  color: #fff;
  padding: 0.9rem 2rem;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(0, 200, 81, 0.35);
  transition: all 0.25s ease;
  margin-top: 0.25rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(0, 200, 81, 0.45);
    color: #fff;
  }

  @media (max-width: 600px) {
    width: 100%;
    justify-content: center;
  }
`;
