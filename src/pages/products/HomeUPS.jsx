// src/pages/products/HomeUPS.jsx
import React from "react";
import styled from "styled-components";
import {
  ArrowRight,
  Wifi,
  Monitor,
  Tv,
  Lightbulb,
  Archive,
  Activity,
  Zap,
  VolumeX,
  ShieldCheck,
  CheckCircle2,
  BatteryCharging,
  Smartphone,
  Clock,
  BatteryPlus,
  MessageSquare,
} from "lucide-react";
import Animated from "../../components/common/Animated";

const appliancesList = [
  { name: "Wi-Fi routers", icon: <Wifi size={24} /> },
  { name: "Computers and laptops", icon: <Monitor size={24} /> },
  { name: "Refrigerators", icon: <Archive size={24} /> },
  { name: "Televisions", icon: <Tv size={24} /> },
  { name: "Home lighting", icon: <Lightbulb size={24} /> },
];

const keyFeatures = [
  {
    title: "Pure Sine Wave Output",
    icon: <Activity size={28} />,
    description:
      "Provides stable and clean electricity suitable for sensitive electronics such as smart TVs, gaming consoles, and computers.",
  },
  {
    title: "Instant Power Switching",
    icon: <Zap size={28} />,
    description:
      "Dedicated UPS mode ensures switchover time below 10 milliseconds, preventing device restarts during outages.",
  },
  {
    title: "Quiet Operation",
    icon: <VolumeX size={28} />,
    description:
      "Designed for residential environments with silent operation and efficient cooling.",
  },
  {
    title: "Reliable Home Backup",
    icon: <ShieldCheck size={28} />,
    description:
      "Provides consistent energy supply for essential household appliances during power interruptions.",
  },
];

const safetyItems = [
  "Short circuits",
  "Overloads",
  "Reverse polarity",
  "Deep battery discharge",
];

const smartMonitoring = [
  {
    title: "IoT Connectivity",
    icon: <Wifi size={24} />,
    description:
      "Built-in Wi-Fi and Bluetooth allow users to monitor battery status and system performance through mobile apps.",
  },
  {
    title: "Real-Time Monitoring",
    icon: <Clock size={24} />,
    description:
      "Users can check battery charge levels, system load, and daily energy usage through connected devices.",
  },
  {
    title: "Future Ready",
    icon: <BatteryPlus size={24} />,
    description:
      "Supports both traditional lead-acid batteries and modern lithium (LFP) battery upgrades.",
  },
];

const HomeUPS = () => {
  return (
    <PageWrapper>
      {/* 1️⃣ HERO SECTION */}
      <HeroSection>
        <Container>
          <HeroGrid>
            <HeroContent>
              <Animated animation="fadeInDown" duration={0.6}>
                <Eyebrow>Residential Power Backup</Eyebrow>
                <HeroHeading>Home UPS Systems</HeroHeading>
                <HeroSubheading>
                  Reliable backup power designed to keep modern homes running
                  during power interruptions.
                </HeroSubheading>
                <HeroDescription>
                  Home UPS systems ensure uninterrupted electricity for
                  essential household devices during power outages. Engineered
                  with pure sine wave technology and intelligent battery
                  charging, these systems provide safe and stable power for
                  sensitive electronics and everyday appliances.
                </HeroDescription>
                <CTAButton href="#living">
                  Explore Home Backup Solutions <ArrowRight size={20} />
                </CTAButton>
              </Animated>
            </HeroContent>

            <HeroImageArea>
              <Animated animation="fadeIn" delay={0.2} duration={0.8}>
                <ImageWrapper>
                  <img
                    src="https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1000&auto=format&fit=crop"
                    alt="Modern home interior lighting and electronics"
                    loading="lazy"
                  />
                </ImageWrapper>
              </Animated>
            </HeroImageArea>
          </HeroGrid>
        </Container>
      </HeroSection>

      {/* 2️⃣ SMART HOME BACKUP POWER */}
      <BackupLivingSection id="living">
        <Container>
          <Animated animation="fadeInDown" duration={0.6}>
            <SectionTitle className="centered">
              Backup Power for Modern Living
            </SectionTitle>
            <IntroText className="centered">
              Modern homes depend on uninterrupted electricity for connectivity,
              entertainment, and daily comfort. Home UPS systems ensure that
              essential devices continue operating even when the grid fails.
            </IntroText>
            <IntroText className="centered subtext">
              These systems provide seamless backup power for:
            </IntroText>
          </Animated>

          <Animated animation="fadeInUp" delay={0.2} duration={0.6}>
            <AppliancesGrid>
              {appliancesList.map((item, index) => (
                <ApplianceCard key={index}>
                  <div className="icon-wrapper">{item.icon}</div>
                  <span>{item.name}</span>
                </ApplianceCard>
              ))}
            </AppliancesGrid>
          </Animated>
        </Container>
      </BackupLivingSection>

      {/* 3️⃣ KEY PRODUCT FEATURES */}
      <FeaturesSection>
        <Container>
          <Animated animation="fadeInDown" duration={0.6}>
            <SectionTitle className="centered">Key Features</SectionTitle>
          </Animated>

          <FeaturesGrid>
            {keyFeatures.map((feature, index) => (
              <Animated
                key={index}
                animation="fadeInUp"
                delay={index * 0.1}
                duration={0.5}
              >
                <FeatureCard>
                  <FeatureIcon>{feature.icon}</FeatureIcon>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDesc>{feature.description}</FeatureDesc>
                </FeatureCard>
              </Animated>
            ))}
          </FeaturesGrid>
        </Container>
      </FeaturesSection>

      {/* 4️⃣ APPLIANCE SAFETY & PERFORMANCE */}
      <SafetySection>
        <Container>
          <SplitLayout>
            <VisualArea>
              <Animated animation="fadeInRight" duration={0.8}>
                <ImageWrapper className="rounded">
                  <img
                    src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1000&auto=format&fit=crop"
                    alt="Modern living room with smart TV setup"
                    loading="lazy"
                  />
                </ImageWrapper>
              </Animated>
            </VisualArea>

            <ContentArea>
              <Animated animation="fadeInLeft" duration={0.6}>
                <SectionTitle>Safe for Modern Appliances</SectionTitle>
                <IntroText>
                  Home UPS systems deliver stable voltage output to protect
                  modern electronics from damage caused by unstable grid power.
                </IntroText>

                <SafetyListWrapper>
                  <p className="list-heading">
                    Protection systems safeguard appliances against:
                  </p>
                  <SafetyList>
                    {safetyItems.map((item, index) => (
                      <li key={index}>
                        <CheckCircle2 size={20} className="check-icon" />
                        {item}
                      </li>
                    ))}
                  </SafetyList>
                </SafetyListWrapper>
              </Animated>
            </ContentArea>
          </SplitLayout>
        </Container>
      </SafetySection>

      {/* 5️⃣ INTELLIGENT BATTERY CHARGING */}
      <ChargingSection>
        <Container>
          <Animated animation="slideUp" duration={0.6}>
            <ChargingBox>
              <ChargingVisual>
                <BatteryCharging size={48} className="charge-icon" />
                <div className="pulse-ring"></div>
              </ChargingVisual>

              <ChargingContent>
                <SectionTitle>Adaptive Battery Charging</SectionTitle>
                <ChargingText>
                  Home UPS systems feature{" "}
                  <strong>Adaptive Battery Charging Control (ABCC)</strong>{" "}
                  technology that intelligently adjusts charging current based
                  on battery condition.
                </ChargingText>
                <ChargingText>
                  This smart charging process improves battery health and
                  extends battery lifespan by up to 30%.
                </ChargingText>
              </ChargingContent>
            </ChargingBox>
          </Animated>
        </Container>
      </ChargingSection>

      {/* 6️⃣ SMART MONITORING & CONNECTIVITY */}
      <MonitoringSection>
        <Container>
          <Animated animation="fadeInDown" duration={0.6}>
            <SectionTitle className="centered">Smart Monitoring</SectionTitle>
          </Animated>

          <MonitoringGrid>
            {smartMonitoring.map((item, index) => (
              <Animated
                key={index}
                animation="fadeInUp"
                delay={index * 0.15}
                duration={0.5}
              >
                <MonitoringCard>
                  <MonitoringIcon>{item.icon}</MonitoringIcon>
                  <MonitoringContent>
                    <MonitoringTitle>{item.title}</MonitoringTitle>
                    <MonitoringDesc>{item.description}</MonitoringDesc>
                  </MonitoringContent>
                </MonitoringCard>
              </Animated>
            ))}
          </MonitoringGrid>
        </Container>
      </MonitoringSection>

      {/* FINAL CTA SECTION */}
      <CtaSection>
        <Container>
          <Animated animation="fadeIn" duration={0.6}>
            <CtaWrapper>
              <CtaHeading>Reliable Backup Power for Everyday Living</CtaHeading>
              <CtaSubtext>
                Ensure uninterrupted power for your home with intelligent UPS
                systems designed for modern lifestyles.
              </CtaSubtext>
              <CTAButton href="/contact-us" className="center">
                Contact Our Power Solutions Team <MessageSquare size={20} />
              </CTAButton>
            </CtaWrapper>
          </Animated>
        </Container>
      </CtaSection>
    </PageWrapper>
  );
};

export default HomeUPS;

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
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 1.5rem;
  line-height: 1.2;
  letter-spacing: -0.5px;

  &.centered {
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 1.85rem;
    margin-bottom: 1.25rem;
  }
`;

const IntroText = styled.p`
  font-size: 1.05rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;

  &.centered {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    max-width: 800px;
  }

  &.subtext {
    font-weight: 600;
    color: var(--color-text);
    margin-bottom: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: left;

    &.centered {
      text-align: left;
    }
  }
`;

// --- 1️⃣ HERO SECTION ---
const HeroSection = styled.section`
  padding: 120px 0 80px;
  background: linear-gradient(
    135deg,
    var(--color-surface-secondary) 0%,
    var(--color-bg) 100%
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
    order: 2; /* Content below image on mobile */
    text-align: center;
    align-items: center;
  }
`;

const HeroImageArea = styled.div`
  width: 100%;

  @media (max-width: 900px) {
    order: 1; /* Image on top */
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
    transition: transform 0.6s ease;
  }

  &.rounded img {
    border-radius: 20px;
  }

  &:hover img {
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    border-radius: 16px;
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
    font-size: 2.5rem;
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

// --- 2️⃣ SMART HOME BACKUP POWER ---
const BackupLivingSection = styled.section`
  padding: 100px 0;
  background: var(--color-bg);
`;

const AppliancesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const ApplianceCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  padding: 1rem 1.5rem;
  border-radius: 50px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
  transition:
    transform 0.3s ease,
    border-color 0.3s ease;

  .icon-wrapper {
    color: var(--color-primary);
    display: flex;
    align-items: center;
  }

  span {
    font-weight: 600;
    font-size: 1rem;
    color: var(--color-text);
  }

  &:hover {
    transform: translateY(-3px);
    border-color: var(--color-primary-light);
  }

  @media (max-width: 768px) {
    border-radius: 16px;
    padding: 1.25rem 1.5rem;
  }
`;

// --- 3️⃣ KEY PRODUCT FEATURES ---
const FeaturesSection = styled.section`
  padding: 100px 0;
  background: var(--color-surface-secondary);
  border-top: 1px solid var(--color-border-light);
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const FeatureCard = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  transition:
    box-shadow 0.3s ease,
    transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  }
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(0, 200, 81, 0.08);
  color: var(--color-primary);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--color-text);
  margin: 0 0 0.75rem 0;
`;

const FeatureDesc = styled.p`
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;
`;

// --- 4️⃣ APPLIANCE SAFETY & PERFORMANCE ---
const SafetySection = styled.section`
  padding: 100px 0;
  background: var(--color-bg);
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

const SafetyListWrapper = styled.div`
  margin-top: 1.5rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  padding: 1.5rem;
  border-radius: 16px;

  .list-heading {
    font-weight: 700;
    color: var(--color-text);
    margin-bottom: 1rem;
    font-size: 1.05rem;
  }
`;

const SafetyList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.95rem;
    color: var(--color-text-secondary);
    font-weight: 500;

    .check-icon {
      color: var(--color-primary);
      flex-shrink: 0;
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

// --- 5️⃣ INTELLIGENT BATTERY CHARGING ---
const ChargingSection = styled.section`
  padding: 80px 0;
  background: var(--color-bg);
`;

const ChargingBox = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  background: var(--color-surface-secondary);
  border: 1px solid var(--color-border);
  border-radius: 24px;
  padding: 3rem 4rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 2.5rem 1.5rem;
    gap: 2rem;
  }
`;

const ChargingVisual = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  background: var(--color-surface);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  flex-shrink: 0;
  z-index: 2;

  .charge-icon {
    color: var(--color-primary);
  }

  .pulse-ring {
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border: 2px solid var(--color-primary);
    border-radius: 50%;
    animation: pulse 2s infinite ease-out;
    opacity: 0.5;
    z-index: -1;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.9);
      opacity: 0.5;
    }
    100% {
      transform: scale(1.3);
      opacity: 0;
    }
  }
`;

const ChargingContent = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 1rem;
    font-size: 2rem;

    @media (max-width: 768px) {
      font-size: 1.75rem;
      text-align: center;
    }
  }
`;

const ChargingText = styled.p`
  font-size: 1.05rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0 0 1rem 0;

  &:last-child {
    margin-bottom: 0;
  }

  strong {
    color: var(--color-text);
  }
`;

// --- 6️⃣ SMART MONITORING & CONNECTIVITY ---
const MonitoringSection = styled.section`
  padding: 100px 0;
  background: var(--color-surface);
  border-top: 1px solid var(--color-border-light);
`;

const MonitoringGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
`;

const MonitoringCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
  }
`;

const MonitoringIcon = styled.div`
  background: rgba(0, 200, 81, 0.08);
  color: var(--color-primary);
  padding: 1rem;
  border-radius: 12px;
  flex-shrink: 0;
`;

const MonitoringContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const MonitoringTitle = styled.h4`
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 0.5rem 0;
`;

const MonitoringDesc = styled.p`
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
