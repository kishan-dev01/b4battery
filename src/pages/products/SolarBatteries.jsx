// src/pages/products/SolarBatteries.jsx
import React from "react";
import styled from "styled-components";
import {
  ArrowRight,
  Sun,
  Battery,
  Home,
  ShieldCheck,
  ThermometerSnowflake,
  Zap,
  RefreshCcw,
  BatteryFull,
  Activity,
  CloudLightning,
  Network,
  Smartphone,
  Moon,
  AlertTriangle,
} from "lucide-react";
import Animated from "../../components/common/Animated";

const techCards = [
  {
    title: "LFP (Lithium Iron Phosphate)",
    icon: <ShieldCheck size={28} />,
    description:
      "The modern industry standard for solar storage. LFP batteries are cobalt-free, fire-safe, and designed for 6,000+ charge cycles, providing 10–15 years of lifespan.",
  },
  {
    title: "Sodium-Ion Batteries",
    icon: <ThermometerSnowflake size={28} />,
    description:
      "An emerging cost-effective technology that performs well in cold climates and offers approximately 20% lower cost compared to lithium alternatives.",
  },
  {
    title: "Solid-State Batteries",
    icon: <Zap size={28} />,
    description:
      "A premium energy storage option offering higher energy density and extremely fast charging capabilities.",
  },
];

const performanceMetrics = [
  {
    stat: "90%+",
    title: "Round Trip Efficiency",
    icon: <RefreshCcw size={24} />,
    description:
      "Modern solar batteries deliver 90% or higher efficiency, ensuring minimal energy loss between charging and usage.",
  },
  {
    stat: "100%",
    title: "Depth of Discharge",
    icon: <BatteryFull size={24} />,
    description:
      "Modern batteries support 100% DoD, allowing full capacity usage without reducing battery lifespan.",
  },
  {
    stat: "Peak",
    title: "Power Delivery",
    icon: <Activity size={24} />,
    description:
      "Solar batteries provide both continuous power output for daily usage and peak power bursts to start high-demand appliances.",
  },
];

const SolarBatteries = () => {
  return (
    <PageWrapper>
      {/* 1️⃣ HERO SECTION */}
      <HeroSection>
        <Container>
          <HeroGrid>
            <HeroContent>
              <Animated animation="fadeInDown" duration={0.6}>
                <Eyebrow>Energy Storage Systems</Eyebrow>
                <HeroHeading>Solar Batteries</HeroHeading>
                <HeroSubheading>
                  Intelligent energy storage designed to power homes and
                  businesses with reliable solar energy.
                </HeroSubheading>
                <HeroDescription>
                  Solar batteries store excess solar energy generated during the
                  day and make it available when energy demand increases or
                  sunlight is unavailable. Modern battery systems provide
                  efficient energy storage, improved reliability, and greater
                  energy independence.
                </HeroDescription>
                <CTAButton href="#ecosystem">
                  Explore Energy Storage <ArrowRight size={20} />
                </CTAButton>
              </Animated>
            </HeroContent>

            <HeroImageArea>
              <Animated animation="fadeIn" delay={0.2} duration={0.8}>
                <ImageWrapper>
                  <img
                    src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=1000&auto=format&fit=crop"
                    alt="Home solar battery storage system"
                    loading="lazy"
                  />
                </ImageWrapper>
              </Animated>
            </HeroImageArea>
          </HeroGrid>
        </Container>
      </HeroSection>

      {/* 2️⃣ ENERGY STORAGE ECOSYSTEM */}
      <EcosystemSection id="ecosystem">
        <Container>
          <Animated animation="fadeInDown" duration={0.6}>
            <SectionTitle className="centered">
              The Heart of a Solar Energy System
            </SectionTitle>
            <IntroText className="centered">
              Solar batteries function as the central storage component in a
              renewable energy system. They capture excess energy produced
              during the day and release it when electricity demand increases or
              during power outages.
              <br />
              <br />
              By storing solar energy, these systems reduce dependence on the
              electrical grid and help optimize energy usage throughout the day.
            </IntroText>
          </Animated>

          <Animated animation="fadeInUp" delay={0.2} duration={0.6}>
            <FlowDiagram>
              <FlowNode>
                <div className="node-icon">
                  <Sun size={32} />
                </div>
                <div className="node-label">Solar Panels</div>
              </FlowNode>

              <FlowConnector>
                <ArrowRight size={24} />
              </FlowConnector>

              <FlowNode className="highlight">
                <div className="node-icon">
                  <Battery size={32} />
                </div>
                <div className="node-label">Solar Battery</div>
              </FlowNode>

              <FlowConnector>
                <ArrowRight size={24} />
              </FlowConnector>

              <FlowNode>
                <div className="node-icon">
                  <Home size={32} />
                </div>
                <div className="node-label">Home Power</div>
              </FlowNode>
            </FlowDiagram>
          </Animated>
        </Container>
      </EcosystemSection>

      {/* 3️⃣ CORE BATTERY TECHNOLOGIES */}
      <TechSection>
        <Container>
          <Animated animation="fadeInDown" duration={0.6}>
            <SectionTitle>Core Battery Technologies</SectionTitle>
          </Animated>

          <TechGrid>
            {techCards.map((card, index) => (
              <Animated
                key={index}
                animation="fadeInUp"
                delay={index * 0.15}
                duration={0.5}
              >
                <TechCard>
                  <IconBox>{card.icon}</IconBox>
                  <TechTitle>{card.title}</TechTitle>
                  <TechDesc>{card.description}</TechDesc>
                </TechCard>
              </Animated>
            ))}
          </TechGrid>
        </Container>
      </TechSection>

      {/* 4️⃣ PERFORMANCE METRICS */}
      <MetricsSection>
        <Container>
          <Animated animation="fadeInDown" duration={0.6}>
            <SectionTitle className="centered">
              Key Performance Metrics
            </SectionTitle>
          </Animated>

          <MetricsGrid>
            {performanceMetrics.map((metric, index) => (
              <Animated
                key={index}
                animation="fadeInUp"
                delay={index * 0.15}
                duration={0.6}
              >
                <MetricCard>
                  <MetricHeader>
                    <MetricIcon>{metric.icon}</MetricIcon>
                    <MetricStat>{metric.stat}</MetricStat>
                  </MetricHeader>
                  <MetricTitle>{metric.title}</MetricTitle>
                  <MetricDesc>{metric.description}</MetricDesc>
                </MetricCard>
              </Animated>
            ))}
          </MetricsGrid>
        </Container>
      </MetricsSection>

      {/* 5️⃣ SMART ENERGY INTELLIGENCE */}
      <IntelligenceSection>
        <Container>
          <SplitLayout>
            <VisualArea>
              <Animated animation="fadeInRight" duration={0.8}>
                <ImageWrapper className="tall">
                  <img
                    src="https://images.unsplash.com/photo-1558384855-32bc8bc2385b?q=80&w=1000&auto=format&fit=crop"
                    alt="Smart home energy monitoring app"
                    loading="lazy"
                  />
                </ImageWrapper>
              </Animated>
            </VisualArea>

            <ContentArea>
              <Animated animation="fadeInLeft" duration={0.6}>
                <SectionTitle>Smart Energy Management</SectionTitle>
                <FeaturesList>
                  <FeatureItem>
                    <FeatureIcon>
                      <CloudLightning size={24} />
                    </FeatureIcon>
                    <div>
                      <FeatureTitle>AI Forecasting</FeatureTitle>
                      <FeatureDesc>
                        Battery software can monitor weather forecasts and
                        prepare energy storage ahead of storms or outages.
                      </FeatureDesc>
                    </div>
                  </FeatureItem>
                  <FeatureItem>
                    <FeatureIcon>
                      <Network size={24} />
                    </FeatureIcon>
                    <div>
                      <FeatureTitle>
                        Virtual Power Plant Integration
                      </FeatureTitle>
                      <FeatureDesc>
                        Some systems allow stored electricity to be sold back to
                        the grid during peak demand periods.
                      </FeatureDesc>
                    </div>
                  </FeatureItem>
                  <FeatureItem>
                    <FeatureIcon>
                      <Smartphone size={24} />
                    </FeatureIcon>
                    <div>
                      <FeatureTitle>Mobile App Control</FeatureTitle>
                      <FeatureDesc>
                        Users can track energy generation and battery storage
                        levels while reserving power for emergency backup.
                      </FeatureDesc>
                    </div>
                  </FeatureItem>
                </FeaturesList>
              </Animated>
            </ContentArea>
          </SplitLayout>
        </Container>
      </IntelligenceSection>

      {/* 6️⃣ DAILY ENERGY USAGE CYCLE */}
      <CycleSection>
        <Container>
          <Animated animation="fadeInDown" duration={0.6}>
            <SectionTitle className="centered">
              Daily Solar Energy Cycle
            </SectionTitle>
          </Animated>

          <Timeline>
            <TimelineStep>
              <Animated animation="fadeInUp" delay={0.1} duration={0.5}>
                <TimelineContent>
                  <TimelineIcon>
                    <Sun size={28} />
                  </TimelineIcon>
                  <TimelineTitle>Daytime Charging</TimelineTitle>
                  <TimelineDesc>
                    Solar panels generate electricity and charge the battery.
                  </TimelineDesc>
                </TimelineContent>
              </Animated>
            </TimelineStep>

            <TimelineStep>
              <Animated animation="fadeInUp" delay={0.25} duration={0.5}>
                <TimelineContent>
                  <TimelineIcon>
                    <Moon size={28} />
                  </TimelineIcon>
                  <TimelineTitle>Evening Usage</TimelineTitle>
                  <TimelineDesc>
                    Stored solar energy powers the home during peak demand
                    hours.
                  </TimelineDesc>
                </TimelineContent>
              </Animated>
            </TimelineStep>

            <TimelineStep>
              <Animated animation="fadeInUp" delay={0.4} duration={0.5}>
                <TimelineContent>
                  <TimelineIcon className="alert">
                    <AlertTriangle size={28} />
                  </TimelineIcon>
                  <TimelineTitle>Emergency Backup</TimelineTitle>
                  <TimelineDesc>
                    The battery supplies power reliably during grid outages.
                  </TimelineDesc>
                </TimelineContent>
              </Animated>
            </TimelineStep>
          </Timeline>
        </Container>
      </CycleSection>

      {/* FINAL CTA SECTION */}
      <CtaSection>
        <Container>
          <Animated animation="fadeIn" duration={0.6}>
            <CtaWrapper>
              <CtaHeading>Take Control of Your Energy</CtaHeading>
              <CtaSubtext>
                Advanced solar battery systems enable homes and businesses to
                store clean energy and achieve greater independence from the
                electrical grid.
              </CtaSubtext>
              <CTAButton href="/contact-us" className="center">
                Explore Solar Solutions <ArrowRight size={20} />
              </CTAButton>
            </CtaWrapper>
          </Animated>
        </Container>
      </CtaSection>
    </PageWrapper>
  );
};

export default SolarBatteries;

// --- STYLED COMPONENTS ---

const PageWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  background-color: var(--color-bg);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 2rem;
  line-height: 1.2;
  letter-spacing: -0.5px;

  &.centered {
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const IntroText = styled.p`
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  max-width: 800px;

  &.centered {
    margin: 0 auto 3rem auto;
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 1.05rem;
    text-align: left;
  }
`;

// --- 1️⃣ HERO SECTION ---
const HeroSection = styled.section`
  padding: 120px 0 80px;
  background: linear-gradient(
    135deg,
    var(--color-bg) 0%,
    var(--color-surface-secondary) 100%
  );
  border-bottom: 1px solid var(--color-border-light);

  @media (max-width: 768px) {
    padding: 100px 0 60px;
  }
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    order: 2;
    text-align: center;
    align-items: center;
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
  background: rgba(0, 200, 81, 0.1);
  padding: 0.4rem 1rem;
  border-radius: 50px;
`;

const HeroHeading = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--color-text);
  margin: 0 0 1rem 0;
  line-height: 1.15;

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const HeroSubheading = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin: 0 0 1.5rem 0;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.05rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin: 0 0 2.5rem 0;
  max-width: 90%;

  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background: var(--color-primary);
  color: #000;
  padding: 1.1rem 2.5rem;
  border-radius: 50px;
  font-size: 1.05rem;
  font-weight: 800;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 200, 81, 0.2);
  align-self: flex-start;

  &.center {
    align-self: center;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 200, 81, 0.35);
    background: var(--color-primary-dark);
  }

  @media (max-width: 900px) {
    width: 100%;
    align-self: center;
  }
`;

const HeroImageArea = styled.div`
  width: 100%;

  @media (max-width: 900px) {
    order: 1;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
  }

  &.tall {
    height: 500px;
    img {
      height: 100%;
    }
  }

  @media (max-width: 768px) {
    border-radius: 16px;
    &.tall {
      height: 350px;
    }
  }
`;

// --- 2️⃣ ENERGY STORAGE ECOSYSTEM ---
const EcosystemSection = styled.section`
  padding: 100px 0;
  background: var(--color-surface);
`;

const FlowDiagram = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem 0;
    gap: 1rem;
  }
`;

const FlowNode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;

  .node-icon {
    width: 80px;
    height: 80px;
    background: var(--color-bg);
    border: 2px solid var(--color-border);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text-muted);
    margin-bottom: 1rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
    transition: all 0.3s ease;
  }

  .node-label {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--color-text);
  }

  &.highlight .node-icon {
    border-color: var(--color-primary);
    background: rgba(0, 200, 81, 0.05);
    color: var(--color-primary);
    transform: scale(1.1);
    box-shadow: 0 8px 25px rgba(0, 200, 81, 0.15);
  }

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
    max-width: 300px;

    .node-icon {
      margin-bottom: 0;
    }
  }
`;

const FlowConnector = styled.div`
  color: var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    transform: rotate(90deg);
    margin: 0.5rem 0;
  }
`;

// --- 3️⃣ CORE BATTERY TECHNOLOGIES ---
const TechSection = styled.section`
  padding: 100px 0;
  background: var(--color-bg);
  border-top: 1px solid var(--color-border-light);
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const TechCard = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
    border-color: var(--color-border-light);
  }
`;

const IconBox = styled.div`
  width: 56px;
  height: 56px;
  background: rgba(0, 200, 81, 0.08);
  color: var(--color-primary);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const TechTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--color-text);
  margin: 0 0 1rem 0;
`;

const TechDesc = styled.p`
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;
`;

// --- 4️⃣ PERFORMANCE METRICS ---
const MetricsSection = styled.section`
  padding: 100px 0;
  background: var(--color-surface-secondary);
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const MetricCard = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
`;

const MetricHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--color-border-light);
`;

const MetricIcon = styled.div`
  color: var(--color-primary);
  background: rgba(0, 200, 81, 0.1);
  padding: 1rem;
  border-radius: 50%;
`;

const MetricStat = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--color-text);
  font-family: var(--font-family-secondary);
`;

const MetricTitle = styled.h4`
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 0.75rem 0;
`;

const MetricDesc = styled.p`
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;
`;

// --- 5️⃣ SMART ENERGY INTELLIGENCE ---
const IntelligenceSection = styled.section`
  padding: 100px 0;
  background: var(--color-bg);
  border-bottom: 1px solid var(--color-border-light);
`;

const SplitLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
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

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    order: 1;
  }
`;

const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1rem;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
`;

const FeatureIcon = styled.div`
  color: var(--color-primary);
  background: rgba(0, 200, 81, 0.08);
  padding: 0.75rem;
  border-radius: 12px;
  flex-shrink: 0;
`;

const FeatureTitle = styled.h4`
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 0.5rem 0;
`;

const FeatureDesc = styled.p`
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin: 0;
`;

// --- 6️⃣ DAILY ENERGY USAGE CYCLE ---
const CycleSection = styled.section`
  padding: 100px 0;
  background: var(--color-surface);
`;

const Timeline = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 40px;
  position: relative;

  /* Desktop connecting line */
  &::before {
    content: "";
    position: absolute;
    top: 40px;
    left: 15%;
    right: 15%;
    height: 2px;
    background: var(--color-border);
    z-index: 0;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;

    /* Mobile connecting line */
    &::before {
      top: 0;
      bottom: 0;
      left: 40px;
      right: auto;
      width: 2px;
      height: 100%;
    }
  }
`;

const TimelineStep = styled.div`
  position: relative;
  z-index: 1;
`;

const TimelineContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: var(--color-surface);
  padding: 0 1rem; /* Masks the line behind it */

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    text-align: left;
    padding: 0;
  }
`;

const TimelineIcon = styled.div`
  width: 80px;
  height: 80px;
  background: var(--color-surface-secondary);
  border: 2px solid var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text);
  margin-bottom: 1.5rem;
  box-shadow: 0 0 0 10px var(--color-surface); /* Clears the line perfectly */

  &.alert {
    border-color: #f59e0b;
    color: #f59e0b;
  }

  @media (max-width: 768px) {
    margin-bottom: 0;
    margin-right: 1.5rem;
    flex-shrink: 0;
  }
`;

const TimelineTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 0.75rem 0;

  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
`;

const TimelineDesc = styled.p`
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin: 0;
`;

// --- FINAL CTA SECTION ---
const CtaSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(
    135deg,
    var(--color-surface-secondary) 0%,
    var(--color-bg) 100%
  );
  border-top: 1px solid var(--color-border);
  text-align: center;
`;

const CtaWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CtaHeading = styled.h3`
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const CtaSubtext = styled.p`
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0 0 2.5rem 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
