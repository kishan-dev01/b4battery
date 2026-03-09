import React from "react";
import styled, { keyframes } from "styled-components";
import {
  Download,
  Zap,
  Wrench,
  RefreshCcw,
  Cpu,
  Radio,
  ThermometerSnowflake,
  Activity,
  ShieldCheck,
  AlertTriangle,
  Clock,
  TrendingDown,
  Leaf,
  MessageSquare,
  CheckCircle,
  XCircle,
} from "lucide-react";
import Animated from "../../components/common/Animated";

const COMPARISON_ROWS = [
  {
    icon: <Zap size={18} />,
    label: "Charging",
    lead: "Requires 8-hour charge and additional cooling period.",
    lithium: "Opportunity charging allows quick top-ups in short breaks.",
    color: "#00C851",
  },
  {
    icon: <Wrench size={18} />,
    label: "Maintenance",
    lead: "Requires watering and regular maintenance.",
    lithium: "Completely maintenance-free operation.",
    color: "#2196F3",
  },
  {
    icon: <RefreshCcw size={18} />,
    label: "Lifecycle",
    lead: "Shorter service life requiring frequent replacement.",
    lithium: "3,500+ cycle lifespan.",
    color: "#FF9800",
  },
];

const SPECS = [
  {
    label: "Voltage Options",
    value:
      "24V — Pallet Jacks · 48V — Standard Forklifts · 80V — Heavy Lift Equipment",
  },
  { label: "Capacity Range", value: "150Ah to 600Ah+" },
  { label: "Charging Speed", value: "Full charge in 1.5 – 2.5 hours" },
  { label: "Efficiency", value: "95–98% energy efficiency" },
  {
    label: "Communication",
    value: "CAN / RS485 integration with forklift controllers",
  },
];

const BMS_FEATURES = [
  {
    icon: <Cpu size={22} />,
    title: "Microprocessor-Based BMS",
    desc: "Continuously balances cells to maintain maximum performance during heavy lifting operations.",
    color: "#00C851",
  },
  {
    icon: <Radio size={22} />,
    title: "IoT & GPRS Connectivity",
    desc: "Fleet managers can remotely monitor battery health, location, and charging cycles through cloud dashboards.",
    color: "#2196F3",
  },
  {
    icon: <ThermometerSnowflake size={22} />,
    title: "Thermal Protection",
    desc: "Four-sensor safety array prevents overheating during high-current operation.",
    color: "#FF9800",
  },
];

const DURABILITY_ITEMS = [
  {
    icon: <Activity size={20} />,
    title: "Vibration Protection",
    desc: "Industrial-grade internal dampening protects lithium cells from warehouse floor vibrations and dock leveling impacts.",
    color: "#00C851",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Robust Construction",
    desc: "Designed to withstand demanding logistics environments.",
    color: "#2196F3",
  },
  {
    icon: <AlertTriangle size={20} />,
    title: "Safe Operation",
    desc: "Lithium technology eliminates risks of acid spills associated with traditional batteries.",
    color: "#FF9800",
  },
];

const IMPACT_CARDS = [
  {
    icon: <Clock size={28} />,
    title: "Multi-Shift Ready",
    desc: "Single battery supports continuous 24/7 operations with opportunity charging.",
    color: "#00C851",
  },
  {
    icon: <TrendingDown size={28} />,
    title: "Lower Operating Cost",
    desc: "Higher efficiency reduces long-term energy costs.",
    color: "#2196F3",
  },
  {
    icon: <Leaf size={28} />,
    title: "Green Logistics",
    desc: "Zero emissions during charging makes them safe for food-grade and pharmaceutical facilities.",
    color: "#FF9800",
  },
];

const EForkliftBatteries = () => {
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
                <Eyebrow>Industrial Energy Solutions</Eyebrow>
                <HeroHeading>
                  E-Forklift
                  <br />
                  <HeroAccent>Lithium Batteries</HeroAccent>
                </HeroHeading>
                <HeroSubheading>
                  High-performance LiFePO4 battery systems designed for material
                  handling equipment operating in demanding warehouse
                  environments.
                </HeroSubheading>
                <HeroDescription>
                  E-Forklift batteries replace traditional lead-acid traction
                  batteries with advanced lithium technology, delivering higher
                  efficiency, faster charging, and significantly longer
                  lifecycle performance. Designed for warehouses, logistics
                  hubs, and manufacturing facilities, these systems enable
                  continuous multi-shift operations with minimal downtime.
                </HeroDescription>

                <HeroStats>
                  {[
                    { val: "3,500+", label: "Cycles" },
                    { val: "1.5 hrs", label: "Full Charge" },
                    { val: "98%", label: "Efficiency" },
                    { val: "Zero", label: "Maintenance" },
                  ].map((s) => (
                    <HeroStat key={s.label}>
                      <StatVal>{s.val}</StatVal>
                      <StatLabel>{s.label}</StatLabel>
                    </HeroStat>
                  ))}
                </HeroStats>

                <HeroCTARow>
                  <CTAButtonPrimary
                    href="/assets/e-forklift-specs.pdf"
                    download
                  >
                    <Download size={16} /> Download Specifications
                  </CTAButtonPrimary>
                  <CTAButtonGhost href="/contact-us">
                    Contact Sales
                  </CTAButtonGhost>
                </HeroCTARow>
              </Animated>
            </HeroContent>

            <HeroImageArea>
              <Animated animation="fadeIn" delay={0.2} duration={0.8}>
                <HeroImageFrame>
                  <HeroImageGlow />
                  <img
                    src="/images/product9.jpeg"
                    alt="E-Forklift Lithium Battery"
                    loading="lazy"
                  />
                  <HeroImageBadge>
                    <Zap size={13} /> LiFePO4 Technology
                  </HeroImageBadge>
                </HeroImageFrame>
              </Animated>
            </HeroImageArea>
          </HeroGrid>
        </Container>
      </HeroSection>

      {/* ── 2. COMPARISON ── */}
      <ComparisonSection>
        <Container>
          <Animated animation="fadeInDown" duration={0.6}>
            <SectionEyebrow centered>Why Switch</SectionEyebrow>
            <SectionTitle centered>
              The Core Advantage: Lithium Iron Phosphate
            </SectionTitle>
          </Animated>

          <ComparisonTable>
            {/* Header row */}
            <CompareHeaderRow>
              <CompareHeaderCell $empty />
              <CompareHeaderCell $lead>
                <XCircle size={15} /> Traditional Lead-Acid
              </CompareHeaderCell>
              <CompareHeaderCell $lithium>
                <CheckCircle size={15} /> E-Forklift Lithium
              </CompareHeaderCell>
            </CompareHeaderRow>

            {COMPARISON_ROWS.map((row, i) => (
              <Animated
                key={row.label}
                animation="fadeInUp"
                delay={i * 0.1}
                duration={0.5}
              >
                <CompareRow>
                  <CompareRowLabel $color={row.color}>
                    <CompareRowIcon $color={row.color}>
                      <span style={{ color: row.color }}>{row.icon}</span>
                    </CompareRowIcon>
                    {row.label}
                  </CompareRowLabel>
                  <CompareLeadCell>{row.lead}</CompareLeadCell>
                  <CompareLithiumCell $color={row.color}>
                    {row.lithium}
                  </CompareLithiumCell>
                </CompareRow>
              </Animated>
            ))}
          </ComparisonTable>
        </Container>
      </ComparisonSection>

      {/* ── 3. TECHNICAL SPECIFICATIONS ── */}
      <SpecSection>
        <Container>
          <Animated animation="fadeInDown" duration={0.6}>
            <SectionEyebrow>Specifications</SectionEyebrow>
            <SectionTitle>Technical Specifications</SectionTitle>
          </Animated>

          <Animated animation="fadeInUp" delay={0.2} duration={0.6}>
            <SpecTableWrapper>
              {SPECS.map((row, i) => (
                <SpecRow key={row.label} $even={i % 2 === 1}>
                  <SpecLabel>{row.label}</SpecLabel>
                  <SpecValue>{row.value}</SpecValue>
                </SpecRow>
              ))}
            </SpecTableWrapper>
          </Animated>
        </Container>
      </SpecSection>

      {/* ── 4. SMART BATTERY INTELLIGENCE ── */}
      <IntelligenceSection>
        <IntelBg />
        <Container>
          <Animated animation="fadeInDown" duration={0.6}>
            <SectionEyebrow light centered>
              Smart Systems
            </SectionEyebrow>
            <SectionTitle light centered>
              Intelligent Battery Management
            </SectionTitle>
          </Animated>

          <IntelligenceGrid>
            {BMS_FEATURES.map((f, i) => (
              <Animated
                key={f.title}
                animation="fadeInUp"
                delay={i * 0.12}
                duration={0.5}
              >
                <IntelCard>
                  <IntelIconWrap $color={f.color}>
                    <span style={{ color: f.color }}>{f.icon}</span>
                  </IntelIconWrap>
                  <IntelTitle>{f.title}</IntelTitle>
                  <IntelDesc>{f.desc}</IntelDesc>
                  <IntelAccentBar $color={f.color} />
                </IntelCard>
              </Animated>
            ))}
          </IntelligenceGrid>
        </Container>
      </IntelligenceSection>

      {/* ── 5. INDUSTRIAL DURABILITY ── */}
      <DurabilitySection>
        <Container>
          <SplitLayout>
            <VisualArea>
              <Animated animation="fadeInRight" duration={0.8}>
                <DurabilityPanel>
                  <DurabilityPanelGrid />
                  <DurabilityPanelGlow />
                  <DurabilityPanelContent>
                    <DurabilityPanelBadge>
                      Industrial Grade
                    </DurabilityPanelBadge>
                    <DurabilityMetricGrid>
                      {[
                        {
                          val: "IP55",
                          label: "Protection Rating",
                          color: "#00C851",
                        },
                        {
                          val: "−20°C",
                          label: "Operating Temp",
                          color: "#2196F3",
                        },
                        {
                          val: "1T",
                          label: "Crush Resistance",
                          color: "#FF9800",
                        },
                        { val: "IEC", label: "Certified", color: "#9C27B0" },
                      ].map((m) => (
                        <DurabilityMetric key={m.label}>
                          <DurabilityMetricVal $color={m.color}>
                            {m.val}
                          </DurabilityMetricVal>
                          <DurabilityMetricLabel>
                            {m.label}
                          </DurabilityMetricLabel>
                        </DurabilityMetric>
                      ))}
                    </DurabilityMetricGrid>
                  </DurabilityPanelContent>
                </DurabilityPanel>
              </Animated>
            </VisualArea>

            <ContentArea>
              <Animated animation="fadeInLeft" duration={0.6}>
                <SectionEyebrow>Durability</SectionEyebrow>
                <SectionTitle>
                  Built for Industrial
                  <br />
                  Environments
                </SectionTitle>
                <DurabilityList>
                  {DURABILITY_ITEMS.map((item) => (
                    <DurabilityItem key={item.title}>
                      <IconBox $color={item.color}>
                        <span style={{ color: item.color }}>{item.icon}</span>
                      </IconBox>
                      <DurabilityText>
                        <ItemTitle>{item.title}</ItemTitle>
                        <ItemDesc>{item.desc}</ItemDesc>
                      </DurabilityText>
                    </DurabilityItem>
                  ))}
                </DurabilityList>
              </Animated>
            </ContentArea>
          </SplitLayout>
        </Container>
      </DurabilitySection>

      {/* ── 6. OPERATIONAL IMPACT ── */}
      <ImpactSection>
        <Container>
          <Animated animation="fadeInDown" duration={0.6}>
            <SectionEyebrow centered>Operational Benefits</SectionEyebrow>
            <SectionTitle centered>
              Optimized for High-Uptime Warehouses
            </SectionTitle>
          </Animated>

          <ImpactGrid>
            {IMPACT_CARDS.map((card, i) => (
              <Animated
                key={card.title}
                animation="fadeInUp"
                delay={i * 0.12}
                duration={0.5}
              >
                <ImpactCard $color={card.color}>
                  <ImpactCardAccent $color={card.color} />
                  <ImpactIconWrap $color={card.color}>
                    <span style={{ color: card.color }}>{card.icon}</span>
                  </ImpactIconWrap>
                  <ImpactTitle>{card.title}</ImpactTitle>
                  <ImpactDesc>{card.desc}</ImpactDesc>
                </ImpactCard>
              </Animated>
            ))}
          </ImpactGrid>
        </Container>
      </ImpactSection>

      {/* ── CTA ── */}
      <CtaSection>
        <CtaBg />
        <CtaGrid />
        <Container>
          <Animated animation="slideUp" duration={0.6}>
            <CtaWrapper>
              <CtaEyebrow>
                <MessageSquare size={13} /> Get In Touch
              </CtaEyebrow>
              <CtaHeading>
                Power the Next Generation of Material Handling
              </CtaHeading>
              <CtaDescription>
                Upgrade warehouse operations with intelligent lithium energy
                systems built for modern logistics.
              </CtaDescription>
              <CtaButtonRow>
                <CtaButtonPrimary href="/contact-us">
                  <MessageSquare size={16} /> Contact Our Industrial Solutions
                  Team
                </CtaButtonPrimary>
                {/* <CtaButtonOutline href="/assets/e-forklift-specs.pdf" download>
                  <Download size={15} /> Download Specs
                </CtaButtonOutline> */}
              </CtaButtonRow>
            </CtaWrapper>
          </Animated>
        </Container>
      </CtaSection>
    </PageWrapper>
  );
};

export default EForkliftBatteries;

/* ─── Keyframes ──────────────────────────────── */
const floatAnim = keyframes`
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-14px); }
`;

const pulseGlow = keyframes`
  0%, 100% { opacity: 0.35; transform: scale(1); }
  50%       { opacity: 0.6;  transform: scale(1.06); }
`;

/* ─── Base ───────────────────────────────────── */
const PageWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  background: var(--color-bg);
`;

const Container = styled.div`
  max-width: 1300px;
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
  color: ${({ light }) =>
    light ? "rgba(255,255,255,0.5)" : "var(--color-primary)"};
  margin: 0 0 0.45rem;
  ${({ centered }) => centered && "text-align: center;"}
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 900;
  color: ${({ light }) => (light ? "#fff" : "var(--color-text)")};
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0 0 1.5rem;
  ${({ centered }) => centered && "text-align: center;"}
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
      ellipse at 70% 40%,
      rgba(0, 200, 81, 0.1) 0%,
      transparent 55%
    ),
    radial-gradient(
      ellipse at 15% 70%,
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
`;

const HeroHeading = styled.h1`
  font-size: clamp(2.6rem, 5.5vw, 4rem);
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

const HeroStats = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 12px;
  overflow: hidden;
  max-width: 480px;

  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

const HeroStat = styled.div`
  background: rgba(255, 255, 255, 0.02);
  padding: 0.875rem 0.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const StatVal = styled.span`
  font-size: 1rem;
  font-weight: 900;
  color: var(--color-primary);
  font-family: var(--font-family-mono);
  line-height: 1;
`;

const StatLabel = styled.span`
  font-size: 0.6rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.35);
  text-transform: uppercase;
  letter-spacing: 0.06em;
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
  max-width: 500px;
  animation: ${floatAnim} 6s ease-in-out infinite;

  img {
    width: 100%;
    height: auto;
    max-height: 500px;
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

const HeroImageBadge = styled.div`
  position: absolute;
  bottom: 1.25rem;
  right: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: var(--color-primary);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  box-shadow: 0 4px 16px rgba(0, 200, 81, 0.4);
`;

/* ─── Comparison ─────────────────────────────── */
const ComparisonSection = styled.section`
  padding: 88px 0;
  background: var(--color-surface);
  border-top: 1px solid var(--color-border-light);
  border-bottom: 1px solid var(--color-border-light);
`;

const ComparisonTable = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-border-light);
  border-radius: 18px;
  overflow: hidden;
`;

const CompareHeaderRow = styled.div`
  display: grid;
  grid-template-columns: 160px 1fr 1fr;
  background: var(--color-bg);
  border-bottom: 1px solid var(--color-border-light);

  @media (max-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const CompareHeaderCell = styled.div`
  padding: 0.875rem 1.25rem;
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  ${({ $empty }) =>
    $empty &&
    `
    @media (max-width: 640px) { display: none; }
  `}

  ${({ $lead }) =>
    $lead &&
    `
    color: #F44336;
    background: rgba(244,67,54,0.05);
    border-left: 1px solid var(--color-border-light);
    svg { color: #F44336; }
  `}

  ${({ $lithium }) =>
    $lithium &&
    `
    color: var(--color-primary);
    background: rgba(0,200,81,0.05);
    border-left: 1px solid var(--color-border-light);
    svg { color: var(--color-primary); }
  `}
`;

const CompareRow = styled.div`
  display: grid;
  grid-template-columns: 160px 1fr 1fr;
  border-bottom: 1px solid var(--color-border-light);

  &:last-child {
    border-bottom: none;
  }

  &:nth-child(even) {
    background: rgba(255, 255, 255, 0.01);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const CompareRowLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 1.25rem;
  font-size: 0.85rem;
  font-weight: 700;
  color: ${({ $color }) => $color};
  border-right: 1px solid var(--color-border-light);

  @media (max-width: 640px) {
    display: none;
  }
`;

const CompareRowIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: ${({ $color }) => $color}14;
  border: 1px solid ${({ $color }) => $color}25;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const CompareLeadCell = styled.div`
  padding: 1.25rem;
  font-size: 0.875rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  border-right: 1px solid var(--color-border-light);
  background: rgba(244, 67, 54, 0.02);
`;

const CompareLithiumCell = styled.div`
  padding: 1.25rem;
  font-size: 0.875rem;
  color: var(--color-text);
  font-weight: 500;
  line-height: 1.6;
  background: rgba(0, 200, 81, 0.03);
  border-left: 2px solid ${({ $color }) => $color}55;
`;

/* ─── Specifications ─────────────────────────── */
const SpecSection = styled.section`
  padding: 88px 0;
  background: var(--color-bg);
`;

const SpecTableWrapper = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border-light);
  border-radius: 16px;
  overflow: hidden;
  max-width: 960px;
  margin: 0 auto;
`;

const SpecRow = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr;
  border-bottom: 1px solid var(--color-border-light);
  background: ${({ $even }) =>
    $even ? "rgba(255,255,255,0.015)" : "transparent"};

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const SpecLabel = styled.div`
  padding: 1.25rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-text);
  border-right: 1px solid var(--color-border-light);
  display: flex;
  align-items: center;

  @media (max-width: 640px) {
    padding: 1rem 1.25rem 0.25rem;
    border-right: none;
    color: var(--color-text-muted);
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.07em;
  }
`;

const SpecValue = styled.div`
  padding: 1.25rem 1.5rem;
  font-size: 0.95rem;
  color: var(--color-text-muted);
  line-height: 1.65;

  @media (max-width: 640px) {
    padding: 0 1.25rem 1rem;
    color: var(--color-text);
    font-weight: 500;
  }
`;

/* ─── Intelligence ───────────────────────────── */
const IntelligenceSection = styled.section`
  padding: 88px 0;
  position: relative;
  overflow: hidden;
  background: linear-gradient(140deg, #080e1a 0%, #0c1e12 100%);
`;

const IntelBg = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0, 200, 81, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 200, 81, 0.03) 1px, transparent 1px);
  background-size: 44px 44px;
  pointer-events: none;
`;

const IntelligenceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const IntelCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  padding: 2rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  position: relative;
  overflow: hidden;
  transition: all 0.25s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.055);
    border-color: rgba(255, 255, 255, 0.14);
    transform: translateY(-4px);
  }
`;

const IntelIconWrap = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: ${({ $color }) => $color}18;
  border: 1px solid ${({ $color }) => $color}28;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IntelTitle = styled.h4`
  font-size: 1.05rem;
  font-weight: 800;
  color: #fff;
  margin: 0;
`;

const IntelDesc = styled.p`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.48);
  line-height: 1.65;
  margin: 0;
  flex-grow: 1;
`;

const IntelAccentBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: ${({ $color }) => $color};
  opacity: 0.55;
`;

/* ─── Durability ─────────────────────────────── */
const DurabilitySection = styled.section`
  padding: 88px 0;
  background: var(--color-surface);
  border-top: 1px solid var(--color-border-light);
  border-bottom: 1px solid var(--color-border-light);
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

const VisualArea = styled.div`
  width: 100%;

  @media (max-width: 900px) {
    order: 2;
  }
`;

const DurabilityPanel = styled.div`
  position: relative;
  width: 100%;
  min-height: 380px;
  background: #080e1a;
  border: 1px solid rgba(0, 200, 81, 0.14);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DurabilityPanelGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0, 200, 81, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 200, 81, 0.04) 1px, transparent 1px);
  background-size: 36px 36px;
`;

const DurabilityPanelGlow = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at 50% 50%,
    rgba(0, 200, 81, 0.07) 0%,
    transparent 65%
  );
`;

const DurabilityPanelContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2.5rem;
  width: 100%;
`;

const DurabilityPanelBadge = styled.div`
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

const DurabilityMetricGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  overflow: hidden;
  width: 100%;
`;

const DurabilityMetric = styled.div`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.25rem 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const DurabilityMetricVal = styled.span`
  font-size: 1.4rem;
  font-weight: 900;
  color: ${({ $color }) => $color};
  font-family: var(--font-family-mono);
  line-height: 1;
`;

const DurabilityMetricLabel = styled.span`
  font-size: 0.65rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.35);
  text-transform: uppercase;
  letter-spacing: 0.07em;
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 900px) {
    order: 1;
  }
`;

const DurabilityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 0.5rem;
`;

const DurabilityItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const IconBox = styled.div`
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  border-radius: 11px;
  background: ${({ $color }) => $color}12;
  border: 1px solid ${({ $color }) => $color}25;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DurabilityText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const ItemTitle = styled.h4`
  font-size: 1rem;
  font-weight: 800;
  color: var(--color-text);
  margin: 0;
`;

const ItemDesc = styled.p`
  font-size: 0.875rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin: 0;
`;

/* ─── Impact ─────────────────────────────────── */
const ImpactSection = styled.section`
  padding: 88px 0;
  background: var(--color-bg);
`;

const ImpactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const ImpactCard = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border-light);
  border-radius: 16px;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  position: relative;
  overflow: hidden;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 28px ${({ $color }) => $color}18;
    border-color: ${({ $color }) => $color}44;
  }
`;

const ImpactCardAccent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: ${({ $color }) => $color};
`;

const ImpactIconWrap = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: ${({ $color }) => $color}14;
  border: 1px solid ${({ $color }) => $color}28;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.25rem;
`;

const ImpactTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--color-text);
  margin: 0;
`;

const ImpactDesc = styled.p`
  font-size: 0.875rem;
  color: var(--color-text-muted);
  line-height: 1.6;
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

const CtaDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.48);
  line-height: 1.65;
  margin: 0;
`;

const CtaButtonRow = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0.25rem;
`;

const CtaButtonPrimary = styled.a`
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

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(0, 200, 81, 0.45);
    color: #fff;
  }
`;

const CtaButtonOutline = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.9rem 2rem;
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.09);
    color: #fff;
    transform: translateY(-2px);
  }
`;
