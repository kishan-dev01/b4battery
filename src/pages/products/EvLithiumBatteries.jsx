import React from "react";
import styled from "styled-components";
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
    icon: <Zap size={24} />,
    title: "Lightweight & Compact",
    description:
      "Up to 70% lighter than traditional lead-acid batteries, improving vehicle handling and overall efficiency.",
  },
  {
    icon: <Clock size={24} />,
    title: "Fast Charging",
    description:
      "Recharge in just 2–4 hours compared to the 8–10 hours required for conventional batteries.",
  },
  {
    icon: <BatteryMedium size={24} />,
    title: "Longer Lifespan",
    description:
      "Provides 800 to 2,000+ charge cycles, delivering reliable performance for 3–5 years or more.",
  },
  {
    icon: <Wrench size={24} />,
    title: "Maintenance-Free",
    description:
      "No water refilling or electrolyte monitoring required, simplifying long-term ownership.",
  },
  {
    icon: <Maximize size={24} />,
    title: "High Energy Density",
    description:
      "Delivers more power within a compact footprint, enabling sleek electric vehicle designs.",
  },
];

const bmsFeatures = [
  {
    icon: <Cpu size={20} />,
    title: "Predictive Analytics",
    description:
      "AI algorithms analyze cell health and predict wear before failure occurs, enabling proactive battery health checks.",
  },
  {
    icon: <Cloud size={20} />,
    title: "Cloud Monitoring",
    description:
      "Real-time data synchronization allows remote monitoring and diagnostics through cloud-connected systems.",
  },
  {
    icon: <RefreshCw size={20} />,
    title: "OTA Diagnostics",
    description:
      "If the battery experiences abnormal behavior, technicians can diagnose issues remotely using over-the-air diagnostics.",
  },
  {
    icon: <Sliders size={20} />,
    title: "Adaptive Cell Balancing",
    description:
      "Active cell balancing technology ensures all battery cells operate at peak efficiency, extending battery lifespan by up to 25%.",
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
      {/* 1️⃣ HERO SECTION */}
      <HeroSection>
        <Container>
          <HeroGrid>
            <HeroContent>
              <Animated animation="fadeInDown" duration={0.6}>
                <Eyebrow>Mobility Energy Solution</Eyebrow>
                <HeroHeading>EV Lithium Batteries</HeroHeading>
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
                <CTAButton href="/technology">
                  Explore Technology <ArrowRight size={20} />
                </CTAButton>
              </Animated>
            </HeroContent>

            <HeroImageArea>
              <Animated animation="fadeIn" delay={0.2} duration={0.8}>
                <ImageFloatingWrapper>
                  <img
                    src="/images/products/ev-lithium-battery.png"
                    alt="EV Lithium Battery"
                    loading="lazy"
                  />
                </ImageFloatingWrapper>
              </Animated>
            </HeroImageArea>
          </HeroGrid>
        </Container>
      </HeroSection>

      {/* 2️⃣ KEY ADVANTAGES SECTION */}
      <AdvantagesSection>
        <Container>
          <Animated animation="fadeInDown" duration={0.6}>
            <SectionTitle className="centered">
              Why Choose Lithium-Ion?
            </SectionTitle>
          </Animated>
          <AdvantagesGrid>
            {advantagesData.map((adv, index) => (
              <Animated
                key={index}
                animation="fadeInUp"
                delay={index * 0.1}
                duration={0.5}
              >
                <AdvantageCard>
                  <IconBox>{adv.icon}</IconBox>
                  <CardTitle>{adv.title}</CardTitle>
                  <CardDesc>{adv.description}</CardDesc>
                </AdvantageCard>
              </Animated>
            ))}
          </AdvantagesGrid>
        </Container>
      </AdvantagesSection>

      {/* 3️⃣ SMART BATTERY TECHNOLOGY */}
      <TechnologySection>
        <Container>
          <SplitLayout>
            <TechVisualArea>
              <Animated animation="fadeInRight" duration={0.8}>
                <VisualPlaceholder></VisualPlaceholder>
              </Animated>
            </TechVisualArea>

            <TechContentArea>
              <Animated animation="fadeInLeft" duration={0.6}>
                <Eyebrow>Smart Battery Intelligence</Eyebrow>
                <SectionTitle>
                  AI-Powered Battery Management System
                </SectionTitle>
                <SectionDescription>
                  Our 2026-edition lithium batteries are not just energy storage
                  systems—they function as intelligent devices powered by
                  advanced battery management software.
                </SectionDescription>

                <FeaturesList>
                  {bmsFeatures.map((feature, index) => (
                    <FeatureItem key={index}>
                      <FeatureIcon>{feature.icon}</FeatureIcon>
                      <FeatureText>
                        <strong>{feature.title}:</strong> {feature.description}
                      </FeatureText>
                    </FeatureItem>
                  ))}
                </FeaturesList>
              </Animated>
            </TechContentArea>
          </SplitLayout>
        </Container>
      </TechnologySection>

      {/* 4️⃣ PERFORMANCE & LIFECYCLE */}
      <PerformanceSection>
        <Container>
          <PerformanceLayout>
            <PerformanceContent>
              <Animated animation="fadeInUp" duration={0.6}>
                <SectionTitle>
                  Engineered for Long-Term Performance
                </SectionTitle>
                <PerformancePointsList>
                  {performancePoints.map((point, index) => (
                    <li key={index}>
                      <CheckCircle2 size={20} className="check-icon" />
                      <span>{point}</span>
                    </li>
                  ))}
                </PerformancePointsList>
              </Animated>
            </PerformanceContent>

            <PerformanceVisual>
              <Animated animation="fadeIn" delay={0.2} duration={0.8}>
                <GraphicPlaceholder></GraphicPlaceholder>
              </Animated>
            </PerformanceVisual>
          </PerformanceLayout>
        </Container>
      </PerformanceSection>

      {/* 5️⃣ SUSTAINABILITY COMMITMENT */}
      <SustainabilitySection>
        <Container>
          <Animated animation="slideUp" duration={0.6}>
            <SustainabilityBox>
              <SectionTitle className="centered">
                Sustainable Energy from Cell to Lifecycle
              </SectionTitle>
              <SectionDescription className="centered max-w">
                Our EV lithium batteries are designed with environmental
                responsibility in mind.
              </SectionDescription>

              <SustainabilityList>
                <li>
                  Transition toward Lithium Iron Phosphate (LFP) chemistry to
                  reduce cobalt reliance
                </li>
                <li>
                  Second-life battery programs repurpose used EV batteries for
                  solar storage applications
                </li>
                <li>
                  Compliance with Extended Producer Responsibility (EPR)
                  regulations ensures that up to 95% of battery materials are
                  recovered and recycled
                </li>
              </SustainabilityList>
            </SustainabilityBox>
          </Animated>
        </Container>
      </SustainabilitySection>

      {/* FINAL CTA SECTION */}
      <CtaSection>
        <Container>
          <Animated animation="fadeIn" duration={0.6}>
            <CtaWrapper>
              <CtaHeading>
                Power the Next Generation of Electric Mobility
              </CtaHeading>
              <CtaSubtext>
                Discover how intelligent lithium battery systems are
                transforming modern electric vehicles.
              </CtaSubtext>
              <CtaButton href="/contact-us">
                <MessageSquare size={20} /> Contact Our Energy Experts
              </CtaButton>
            </CtaWrapper>
          </Animated>
        </Container>
      </CtaSection>
    </PageWrapper>
  );
};

export default EVLithiumBatteries;

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

const Eyebrow = styled.span`
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--color-primary);
  margin-bottom: 1rem;
  display: inline-block;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 1.25rem;
  line-height: 1.2;
  letter-spacing: -0.5px;

  &.centered {
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionDescription = styled.p`
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 2rem;

  &.centered {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  &.max-w {
    max-width: 700px;
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
  position: relative;

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
    order: 2; /* Text below image on mobile */
    text-align: center;
    align-items: center;
  }
`;

const HeroHeading = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--color-text);
  margin: 0 0 1rem 0;
  line-height: 1.1;

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubheading = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin: 0 0 1.5rem 0;

  @media (max-width: 768px) {
    font-size: 1.15rem;
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

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 200, 81, 0.35);
    background: var(--color-primary-light);
  }

  @media (max-width: 900px) {
    align-self: center;
    width: 100%;
  }
`;

const HeroImageArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    order: 1; /* Image above text on mobile */
  }
`;

const ImageFloatingWrapper = styled.div`
  animation: float 6s ease-in-out infinite;

  img {
    width: 100%;
    max-width: 500px;
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.1));
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-15px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

// --- 2️⃣ KEY ADVANTAGES SECTION ---
const AdvantagesSection = styled.section`
  padding: 100px 0;
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-border-light);
  border-bottom: 1px solid var(--color-border-light);
`;

const AdvantagesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 50px;
  justify-content: center;

  /* Mobile: 2 columns */
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  /* Very small screens: 1 column */
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const AdvantageCard = styled.div`
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 2rem;
  flex: 1 1 calc(33.333% - 24px); /* Flex basis for 3 columns top, 2 bottom typically */
  min-width: 250px;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 768px) {
    max-width: 100%;
    min-width: 0; /* allows grid to control sizing */
    padding: 1.5rem;
  }
`;

const IconBox = styled.div`
  width: 50px;
  height: 50px;
  background: var(--color-surface-secondary);
  color: var(--color-primary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 0.75rem 0;
  line-height: 1.3;
`;

const CardDesc = styled.p`
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin: 0;
`;

// --- 3️⃣ SMART BATTERY TECHNOLOGY ---
const TechnologySection = styled.section`
  padding: 120px 0;
  background-color: var(--color-bg);
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

const TechVisualArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    order: 2;
  }
`;

const VisualPlaceholder = styled.div`
  width: 100%;
  min-height: 400px;
  background: var(--color-surface-secondary);
  border-radius: 20px;
  border: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  font-size: 0.9rem;
  text-align: center;
  padding: 2rem;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.02);

  @media (max-width: 768px) {
    min-height: 250px;
  }
`;

const TechContentArea = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    order: 1;
  }
`;

const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const FeatureIcon = styled.div`
  color: var(--color-primary);
  background: rgba(0, 200, 81, 0.08);
  padding: 0.6rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const FeatureText = styled.p`
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;

  strong {
    color: var(--color-text);
    display: block;
    margin-bottom: 0.25rem;
  }
`;

// --- 4️⃣ PERFORMANCE & LIFECYCLE ---
const PerformanceSection = styled.section`
  padding: 100px 0;
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-border-light);
  border-bottom: 1px solid var(--color-border-light);
`;

const PerformanceLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const PerformanceContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const PerformancePointsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  li {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    font-size: 1.05rem;
    font-weight: 500;
    color: var(--color-text);
    line-height: 1.5;

    .check-icon {
      color: var(--color-primary);
      flex-shrink: 0;
      margin-top: 0.15rem;
    }
  }
`;

const PerformanceVisual = styled.div`
  width: 100%;
`;

const GraphicPlaceholder = styled.div`
  width: 100%;
  min-height: 350px;
  background: var(--color-bg);
  border: 1px dashed var(--color-border);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  font-size: 0.9rem;
  text-align: center;
  padding: 2rem;

  @media (max-width: 768px) {
    min-height: 250px;
  }
`;

// --- 5️⃣ SUSTAINABILITY COMMITMENT ---
const SustainabilitySection = styled.section`
  padding: 120px 0;
  background-color: var(--color-bg);
`;

const SustainabilityBox = styled.div`
  max-width: 900px;
  margin: 0 auto;
  background: var(--color-surface-secondary);
  border: 1px solid var(--color-border);
  border-radius: 24px;
  padding: 4rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.02);

  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem;
  }
`;

const SustainabilityList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 700px;

  li {
    position: relative;
    padding-left: 1.5rem;
    font-size: 1rem;
    color: var(--color-text-secondary);
    line-height: 1.6;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0.6rem;
      width: 8px;
      height: 8px;
      background-color: var(--color-primary);
      border-radius: 50%;
    }
  }
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
  margin: 0 0 2.5rem 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CtaButton = styled.a`
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
  width: auto;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 200, 81, 0.35);
    background: var(--color-primary-dark);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
