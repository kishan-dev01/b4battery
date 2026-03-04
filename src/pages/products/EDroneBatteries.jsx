// src/pages/products/EDroneBatteries.jsx
import React from "react";
import styled from "styled-components";
import {
  ArrowRight,
  PlaneTakeoff,
  BatteryCharging,
  Zap,
  Database,
  Settings2,
  ShieldCheck,
  ThermometerSnowflake,
  RefreshCcw,
  Crosshair,
  Map,
  Tractor,
  LifeBuoy,
  MessageSquare,
} from "lucide-react";
import Animated from "../../components/common/Animated";

const EDroneBatteries = () => {
  return (
    <PageWrapper>
      {/* 1️⃣ HERO SECTION */}
      <HeroSection>
        <Container>
          <HeroGrid>
            <HeroContent>
              <Animated animation="fadeInDown" duration={0.6}>
                <Eyebrow>Aviation Energy Systems</Eyebrow>
                <HeroHeading>E-Drone Batteries</HeroHeading>
                <HeroSubheading>
                  High-density lithium power systems engineered for
                  next-generation unmanned aerial vehicles.
                </HeroSubheading>
                <HeroDescription>
                  E-Drone Batteries are designed to meet the demanding power
                  requirements of modern UAV applications including mapping,
                  surveying, agriculture spraying, and industrial inspection.
                  Built with advanced chemistries and intelligent battery
                  management, these systems deliver reliable power for
                  high-altitude and high-discharge flight operations.
                </HeroDescription>
                <CTAButton href="#technology">
                  Explore Flight Technology <ArrowRight size={20} />
                </CTAButton>
              </Animated>
            </HeroContent>

            <HeroImageArea>
              <Animated animation="fadeIn" delay={0.2} duration={0.8}>
                <ImageFloatingWrapper>
                  <img
                    src="/images/products/e-drone-battery.png"
                    alt="High-Performance E-Drone Battery"
                    loading="lazy"
                  />
                  <ImageFallback className="fallback-bg">
                    [E-Drone Battery Pack Visual]
                  </ImageFallback>
                </ImageFloatingWrapper>
              </Animated>
            </HeroImageArea>
          </HeroGrid>
        </Container>
      </HeroSection>

      {/* 2️⃣ ADVANCED FLIGHT CHEMISTRIES */}
      <ChemistrySection id="technology">
        <Container>
          <Animated animation="fadeInDown" duration={0.6}>
            <SectionTitle className="centered">
              Advanced Flight Chemistries
            </SectionTitle>
          </Animated>

          <ChemistryGrid>
            <Animated animation="fadeInUp" delay={0.1} duration={0.5}>
              <ChemistryCard>
                <CardIcon>
                  <BatteryCharging size={28} />
                </CardIcon>
                <CardTitle>Semi-Solid State Lithium-Ion</CardTitle>
                <CardDesc>
                  Optimized for long-range drone missions such as mapping and
                  aerial surveying.
                </CardDesc>
                <HighlightBox>
                  Energy density reaches up to <strong>400 Wh/kg</strong>,
                  effectively doubling the flight time compared to standard
                  lithium battery packs.
                </HighlightBox>
              </ChemistryCard>
            </Animated>

            <Animated animation="fadeInUp" delay={0.2} duration={0.5}>
              <ChemistryCard>
                <CardIcon>
                  <Zap size={28} />
                </CardIcon>
                <CardTitle>High-C LiFePO4</CardTitle>
                <CardDesc>
                  Designed for heavy-lift industrial drones used in agriculture
                  spraying and cargo operations.
                </CardDesc>
                <HighlightBox>
                  Provides <strong>15C–30C continuous discharge rates</strong>,
                  ensuring stable altitude even during heavy maneuvering.
                </HighlightBox>
              </ChemistryCard>
            </Animated>
          </ChemistryGrid>
        </Container>
      </ChemistrySection>

      {/* 3️⃣ SMART FLIGHT BATTERY INTELLIGENCE */}
      <IntelligenceSection>
        <Container>
          <Animated animation="fadeInDown" duration={0.6}>
            <SectionTitle className="centered">
              Flight-Aware Smart Battery Management
            </SectionTitle>
          </Animated>

          <IntelligenceGrid>
            <Animated animation="fadeInUp" delay={0.1} duration={0.5}>
              <FeatureCard>
                <FeatureIcon>
                  <Settings2 size={24} />
                </FeatureIcon>
                <FeatureTitle>Auto Storage Mode</FeatureTitle>
                <FeatureDesc>
                  If the battery remains at full charge for more than 48 hours,
                  the system automatically discharges to the ideal storage level
                  of 60% to protect cell health.
                </FeatureDesc>
              </FeatureCard>
            </Animated>

            <Animated animation="fadeInUp" delay={0.2} duration={0.5}>
              <FeatureCard>
                <FeatureIcon>
                  <Database size={24} />
                </FeatureIcon>
                <FeatureTitle>Black Box Logging</FeatureTitle>
                <FeatureDesc>
                  Records key operational data such as temperature, voltage sag,
                  and cycle history to predict battery retirement before flight
                  failure.
                </FeatureDesc>
              </FeatureCard>
            </Animated>

            <Animated animation="fadeInUp" delay={0.3} duration={0.5}>
              <FeatureCard>
                <FeatureIcon>
                  <ShieldCheck size={24} />
                </FeatureIcon>
                <FeatureTitle>Anti-Spark Technology</FeatureTitle>
                <FeatureDesc>
                  Integrated AS150 or XT90-S connectors prevent electrical
                  sparks when connecting high-voltage packs, ensuring safe
                  deployment.
                </FeatureDesc>
              </FeatureCard>
            </Animated>
          </IntelligenceGrid>
        </Container>
      </IntelligenceSection>

      {/* 4️⃣ INDUSTRIAL RESILIENCE */}
      <ResilienceSection>
        <Container>
          <SplitLayout>
            <VisualArea>
              <Animated animation="fadeInRight" duration={0.8}>
                <ImageWrapper>
                  <img
                    src="https://images.unsplash.com/photo-1559827599-52ebde540f26?q=80&w=1000&auto=format&fit=crop"
                    alt="Industrial drone inspection"
                    loading="lazy"
                  />
                </ImageWrapper>
              </Animated>
            </VisualArea>

            <ContentArea>
              <Animated animation="fadeInLeft" duration={0.6}>
                <SectionTitle>
                  Built for Harsh Operating Environments
                </SectionTitle>
                <ResilienceList>
                  <ResilienceItem>
                    <IconBox>
                      <ShieldCheck size={24} />
                    </IconBox>
                    <div>
                      <ItemTitle>IP-Rated Housing</ItemTitle>
                      <ItemDesc>
                        The Eco-Cradle shell protects the battery against dust
                        and light rain with IP54 sealing, making it suitable for
                        agricultural and search-and-rescue missions.
                      </ItemDesc>
                    </div>
                  </ResilienceItem>
                  <ResilienceItem>
                    <IconBox>
                      <ThermometerSnowflake size={24} />
                    </IconBox>
                    <div>
                      <ItemTitle>Low-Temperature Operation</ItemTitle>
                      <ItemDesc>
                        Integrated self-heating elements allow the battery to
                        function in temperatures as low as −20°C, preventing
                        sudden voltage drops during cold-weather flights.
                      </ItemDesc>
                    </div>
                  </ResilienceItem>
                </ResilienceList>
              </Animated>
            </ContentArea>
          </SplitLayout>
        </Container>
      </ResilienceSection>

      {/* 5️⃣ CIRCULAR BATTERY LIFECYCLE */}
      <LifecycleSection>
        <Container>
          <Animated animation="fadeInUp" duration={0.6}>
            <LifecycleBox>
              <SectionTitle className="centered">
                Circular Energy Design
              </SectionTitle>
              <LifecycleIntro>
                Following the E-Cycle sustainability mission, drone batteries
                are designed for extended lifecycle use.
              </LifecycleIntro>

              <InfographicArea></InfographicArea>

              <LifecycleContent>
                <p>
                  When battery capacity drops below 80%, the packs are
                  repurposed into ground-based energy systems such as:
                </p>
                <LifecycleList>
                  <li>Portable power stations</li>
                  <li>Backup lighting systems</li>
                  <li>Small off-grid energy storage</li>
                </LifecycleList>
                <p className="summary">
                  This approach reduces waste while extending battery value
                  beyond aviation use.
                </p>
              </LifecycleContent>
            </LifecycleBox>
          </Animated>
        </Container>
      </LifecycleSection>

      {/* 6️⃣ UAV APPLICATIONS */}
      <ApplicationsSection>
        <Container>
          <Animated animation="fadeInDown" duration={0.6}>
            <SectionTitle className="centered">UAV Applications</SectionTitle>
          </Animated>

          <AppsGrid>
            <Animated animation="fadeInUp" delay={0.1} duration={0.5}>
              <AppCard>
                <AppImageWrapper>
                  <img
                    src="https://images.unsplash.com/photo-1563985040-02e09ae54fb7?q=80&w=600&auto=format&fit=crop"
                    alt="Agriculture Spraying Drone"
                    loading="lazy"
                  />
                  <AppIconOverlay>
                    <Tractor size={20} />
                  </AppIconOverlay>
                </AppImageWrapper>
                <AppContent>
                  <AppTitle>Agriculture Spraying</AppTitle>
                  <AppDesc>
                    Reliable high-discharge power for crop spraying drones.
                  </AppDesc>
                </AppContent>
              </AppCard>
            </Animated>

            <Animated animation="fadeInUp" delay={0.2} duration={0.5}>
              <AppCard>
                <AppImageWrapper>
                  <img
                    src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=600&auto=format&fit=crop"
                    alt="Aerial Mapping Drone"
                    loading="lazy"
                  />
                  <AppIconOverlay>
                    <Map size={20} />
                  </AppIconOverlay>
                </AppImageWrapper>
                <AppContent>
                  <AppTitle>Aerial Mapping</AppTitle>
                  <AppDesc>
                    Long-range flight endurance for surveying missions.
                  </AppDesc>
                </AppContent>
              </AppCard>
            </Animated>

            <Animated animation="fadeInUp" delay={0.3} duration={0.5}>
              <AppCard>
                <AppImageWrapper>
                  <img
                    src="https://images.unsplash.com/photo-1629849048386-8d5a22830f02?q=80&w=600&auto=format&fit=crop"
                    alt="Industrial Infrastructure Inspection"
                    loading="lazy"
                  />
                  <AppIconOverlay>
                    <Crosshair size={20} />
                  </AppIconOverlay>
                </AppImageWrapper>
                <AppContent>
                  <AppTitle>Infrastructure Inspection</AppTitle>
                  <AppDesc>
                    Stable power for inspection of power lines, wind turbines,
                    and pipelines.
                  </AppDesc>
                </AppContent>
              </AppCard>
            </Animated>

            <Animated animation="fadeInUp" delay={0.4} duration={0.5}>
              <AppCard>
                <AppImageWrapper>
                  <img
                    src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=600&auto=format&fit=crop"
                    alt="Search and Rescue Drone"
                    loading="lazy"
                  />
                  <AppIconOverlay>
                    <LifeBuoy size={20} />
                  </AppIconOverlay>
                </AppImageWrapper>
                <AppContent>
                  <AppTitle>Search & Rescue</AppTitle>
                  <AppDesc>
                    Reliable performance in demanding and critical environments.
                  </AppDesc>
                </AppContent>
              </AppCard>
            </Animated>
          </AppsGrid>
        </Container>
      </ApplicationsSection>

      {/* 7️⃣ FINAL CTA SECTION */}
      <CtaSection>
        <Container>
          <Animated animation="slideUp" duration={0.6}>
            <CtaWrapper>
              <CtaHeading>
                Power the Next Generation of UAV Innovation
              </CtaHeading>
              <CtaDescription>
                Advanced lithium battery technology enabling longer flights,
                safer missions, and higher reliability for industrial drone
                operations.
              </CtaDescription>
              <CtaButton href="/contact-us">
                <MessageSquare size={20} /> Contact Our Aviation Solutions Team
              </CtaButton>
            </CtaWrapper>
          </Animated>
        </Container>
      </CtaSection>
    </PageWrapper>
  );
};

export default EDroneBatteries;

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
  }
`;

// --- 1️⃣ HERO SECTION ---
const HeroSection = styled.section`
  padding: 140px 0 100px;
  background: radial-gradient(
    circle at right center,
    var(--color-surface-secondary) 0%,
    var(--color-bg) 100%
  );
  border-bottom: 1px solid var(--color-border);
  position: relative;
  overflow: hidden;

  /* Subtle aerospace grid pattern */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(var(--color-border-light) 1px, transparent 1px),
      linear-gradient(90deg, var(--color-border-light) 1px, transparent 1px);
    background-size: 40px 40px;
    opacity: 0.3;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 100px 0 60px;
  }
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 2;

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
  line-height: 1.1;

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
  max-width: 95%;

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
    background: var(--color-primary-dark);
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
    order: 1;
  }
`;

const ImageFloatingWrapper = styled.div`
  position: relative;
  width: 100%;
  animation: float 6s ease-in-out infinite;

  img {
    width: 100%;
    max-width: 500px;
    height: auto;
    object-fit: contain;
    position: relative;
    z-index: 2;
    filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15));
  }

  .fallback-bg {
    display: none;
  }
  img[src*="png"]:not([src]) + .fallback-bg,
  img[src=""] + .fallback-bg {
    display: flex;
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

const ImageFallback = styled.div`
  width: 100%;
  height: 350px;
  background: var(--color-surface);
  border: 1px dashed var(--color-border);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  font-size: 0.9rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

// --- 2️⃣ ADVANCED FLIGHT CHEMISTRIES ---
const ChemistrySection = styled.section`
  padding: 100px 0;
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border-light);
`;

const ChemistryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const ChemistryCard = styled.div`
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.05);
    border-color: var(--color-primary-light);
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const CardIcon = styled.div`
  width: 60px;
  height: 60px;
  background: var(--color-surface-secondary);
  color: var(--color-primary);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--color-text);
  margin: 0 0 1rem 0;
`;

const CardDesc = styled.p`
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
  flex-grow: 1;
`;

const HighlightBox = styled.div`
  background: rgba(0, 200, 81, 0.05);
  border-left: 3px solid var(--color-primary);
  padding: 1.25rem;
  border-radius: 0 8px 8px 0;
  font-size: 0.95rem;
  color: var(--color-text);
  line-height: 1.5;

  strong {
    color: var(--color-primary-dark);
    font-weight: 700;
  }
`;

// --- 3️⃣ SMART FLIGHT BATTERY INTELLIGENCE ---
const IntelligenceSection = styled.section`
  padding: 120px 0;
  background-color: var(--color-bg);
`;

const IntelligenceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const FeatureCard = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border-light);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);

  &:hover {
    border-color: var(--color-border);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.04);
  }
`;

const FeatureIcon = styled.div`
  color: var(--color-text);
  margin-bottom: 1.25rem;
  background: var(--color-surface-secondary);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
`;

const FeatureTitle = styled.h4`
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 0.75rem 0;
`;

const FeatureDesc = styled.p`
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;
`;

// --- 4️⃣ INDUSTRIAL RESILIENCE ---
const ResilienceSection = styled.section`
  padding: 100px 0;
  background-color: var(--color-surface-secondary);
  border-top: 1px solid var(--color-border-light);
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
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const ResilienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1.5rem;
`;

const ResilienceItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
`;

const IconBox = styled.div`
  color: var(--color-primary);
  background: rgba(0, 200, 81, 0.08);
  padding: 0.75rem;
  border-radius: 12px;
  flex-shrink: 0;
`;

const ItemTitle = styled.h4`
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 0.5rem 0;
`;

const ItemDesc = styled.p`
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin: 0;
`;

// --- 5️⃣ CIRCULAR BATTERY LIFECYCLE ---
const LifecycleSection = styled.section`
  padding: 120px 0;
  background-color: var(--color-bg);
`;

const LifecycleBox = styled.div`
  max-width: 900px;
  margin: 0 auto;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 24px;
  padding: 4rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);
  text-align: center;

  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem;
  }
`;

const LifecycleIntro = styled.p`
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0 auto 2rem;
  max-width: 700px;
`;

const InfographicArea = styled.div`
  width: 100%;
  min-height: 250px;
  background: var(--color-surface-secondary);
  border: 1px dashed var(--color-border);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  font-size: 0.9rem;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    min-height: 200px;
  }
`;

const LifecycleContent = styled.div`
  p {
    font-size: 1.05rem;
    color: var(--color-text);
    margin-bottom: 1rem;
    font-weight: 500;
  }

  .summary {
    color: var(--color-text-muted);
    font-style: italic;
    font-weight: 400;
    margin-top: 1.5rem;
  }
`;

const LifecycleList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  display: inline-block;
  text-align: left;

  li {
    position: relative;
    padding-left: 1.5rem;
    font-size: 1rem;
    color: var(--color-text-secondary);

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0.5rem;
      width: 6px;
      height: 6px;
      background-color: var(--color-primary);
      border-radius: 50%;
    }
  }
`;

// --- 6️⃣ UAV APPLICATIONS ---
const ApplicationsSection = styled.section`
  padding: 100px 0 120px;
  background-color: var(--color-surface-secondary);
  border-top: 1px solid var(--color-border-light);
`;

const AppsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const AppCard = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: var(--color-border-light);
  }
`;

const AppImageWrapper = styled.div`
  width: 100%;
  height: 180px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AppIconOverlay = styled.div`
  position: absolute;
  bottom: -16px;
  right: 20px;
  width: 32px;
  height: 32px;
  background: var(--color-primary);
  color: #000;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const AppContent = styled.div`
  padding: 1.5rem 1.25rem;

  @media (max-width: 600px) {
    padding: 1.5rem;
  }
`;

const AppTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--color-text);
  margin: 0 0 0.5rem 0;
`;

const AppDesc = styled.p`
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin: 0;
`;

// --- 7️⃣ FINAL CTA SECTION ---
const CtaSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(
    135deg,
    var(--color-surface) 0%,
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

const CtaDescription = styled.p`
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
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

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 200, 81, 0.35);
    background: var(--color-primary-dark);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
