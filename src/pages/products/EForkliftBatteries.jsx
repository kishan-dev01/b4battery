// src/pages/products/EForkliftBatteries.jsx
import React from "react";
import styled from "styled-components";
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
} from "lucide-react";
import Animated from "../../components/common/Animated";

const EForkliftBatteries = () => {
  return (
    <PageWrapper>
      {/* 1️⃣ HERO SECTION */}
      <HeroSection>
        <Container>
          <HeroGrid>
            <HeroContent>
              <Animated animation="fadeInDown" duration={0.6}>
                <Eyebrow>Industrial Energy Solutions</Eyebrow>
                <HeroHeading>E-Forklift Lithium Batteries</HeroHeading>
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
                <CTAButton href="/assets/e-forklift-specs.pdf" download>
                  <Download size={20} /> Download Specifications
                </CTAButton>
              </Animated>
            </HeroContent>

            <HeroImageArea>
              <Animated animation="fadeIn" delay={0.2} duration={0.8}>
                <ImageWrapper>
                  <img
                    src="/images/products/e-forklift-battery.png"
                    alt="E-Forklift Lithium Battery"
                    loading="lazy"
                  />
                  <ImageFallback className="fallback-bg">
                    [Lithium forklift battery pack visual]
                  </ImageFallback>
                </ImageWrapper>
              </Animated>
            </HeroImageArea>
          </HeroGrid>
        </Container>
      </HeroSection>

      {/* 2️⃣ LITHIUM VS LEAD-ACID ADVANTAGE */}
      <ComparisonSection>
        <Container>
          <Animated animation="fadeInDown" duration={0.6}>
            <SectionTitle className="centered">
              The Core Advantage: Lithium Iron Phosphate
            </SectionTitle>
          </Animated>

          <ComparisonGrid>
            {/* Charging Comparison */}
            <Animated animation="fadeInUp" delay={0.1} duration={0.5}>
              <CompareCard>
                <CompareHeader>
                  <Zap size={24} className="icon" /> Charging
                </CompareHeader>
                <CompareColumns>
                  <LeadAcidSide>
                    <h5>Traditional Lead-Acid</h5>
                    <p>Requires 8-hour charge and additional cooling period.</p>
                  </LeadAcidSide>
                  <LithiumSide>
                    <h5>E-Forklift Lithium</h5>
                    <p>
                      Opportunity charging allows quick top-ups in short breaks.
                    </p>
                  </LithiumSide>
                </CompareColumns>
              </CompareCard>
            </Animated>

            {/* Maintenance Comparison */}
            <Animated animation="fadeInUp" delay={0.2} duration={0.5}>
              <CompareCard>
                <CompareHeader>
                  <Wrench size={24} className="icon" /> Maintenance
                </CompareHeader>
                <CompareColumns>
                  <LeadAcidSide>
                    <h5>Traditional Lead-Acid</h5>
                    <p>Requires watering and regular maintenance.</p>
                  </LeadAcidSide>
                  <LithiumSide>
                    <h5>E-Forklift Lithium</h5>
                    <p>Completely maintenance-free operation.</p>
                  </LithiumSide>
                </CompareColumns>
              </CompareCard>
            </Animated>

            {/* Lifecycle Comparison */}
            <Animated animation="fadeInUp" delay={0.3} duration={0.5}>
              <CompareCard>
                <CompareHeader>
                  <RefreshCcw size={24} className="icon" /> Lifecycle
                </CompareHeader>
                <CompareColumns>
                  <LeadAcidSide>
                    <h5>Traditional Lead-Acid</h5>
                    <p>Shorter service life requiring frequent replacement.</p>
                  </LeadAcidSide>
                  <LithiumSide>
                    <h5>E-Forklift Lithium</h5>
                    <p>3,500+ cycle lifespan.</p>
                  </LithiumSide>
                </CompareColumns>
              </CompareCard>
            </Animated>
          </ComparisonGrid>
        </Container>
      </ComparisonSection>

      {/* 3️⃣ TECHNICAL SPECIFICATIONS */}
      <SpecSection>
        <Container>
          <Animated animation="fadeInDown" duration={0.6}>
            <SectionTitle>Technical Specifications</SectionTitle>
          </Animated>

          <Animated animation="fadeInUp" delay={0.2} duration={0.6}>
            <SpecTableWrapper>
              <SpecRow>
                <SpecLabel>Voltage Options</SpecLabel>
                <SpecValue>
                  24V — Pallet Jacks
                  <br />
                  48V — Standard Forklifts
                  <br />
                  80V — Heavy Lift Equipment
                </SpecValue>
              </SpecRow>
              <SpecRow>
                <SpecLabel>Capacity Range</SpecLabel>
                <SpecValue>150Ah to 600Ah+</SpecValue>
              </SpecRow>
              <SpecRow>
                <SpecLabel>Charging Speed</SpecLabel>
                <SpecValue>Full charge in 1.5 – 2.5 hours</SpecValue>
              </SpecRow>
              <SpecRow>
                <SpecLabel>Efficiency</SpecLabel>
                <SpecValue>95–98% energy efficiency</SpecValue>
              </SpecRow>
              <SpecRow>
                <SpecLabel>Communication</SpecLabel>
                <SpecValue>
                  CAN / RS485 integration with forklift controllers
                </SpecValue>
              </SpecRow>
            </SpecTableWrapper>
          </Animated>
        </Container>
      </SpecSection>

      {/* 4️⃣ SMART BATTERY INTELLIGENCE */}
      <IntelligenceSection>
        <Container>
          <Animated animation="fadeInDown" duration={0.6}>
            <SectionTitle className="centered">
              Intelligent Battery Management
            </SectionTitle>
          </Animated>

          <IntelligenceGrid>
            <Animated animation="fadeInUp" delay={0.1} duration={0.5}>
              <FeatureCard>
                <CardIcon>
                  <Cpu size={28} />
                </CardIcon>
                <CardTitle>Microprocessor-Based BMS</CardTitle>
                <CardDesc>
                  Continuously balances cells to maintain maximum performance
                  during heavy lifting operations.
                </CardDesc>
              </FeatureCard>
            </Animated>

            <Animated animation="fadeInUp" delay={0.2} duration={0.5}>
              <FeatureCard>
                <CardIcon>
                  <Radio size={28} />
                </CardIcon>
                <CardTitle>IoT & GPRS Connectivity</CardTitle>
                <CardDesc>
                  Fleet managers can remotely monitor battery health, location,
                  and charging cycles through cloud dashboards.
                </CardDesc>
              </FeatureCard>
            </Animated>

            <Animated animation="fadeInUp" delay={0.3} duration={0.5}>
              <FeatureCard>
                <CardIcon>
                  <ThermometerSnowflake size={28} />
                </CardIcon>
                <CardTitle>Thermal Protection</CardTitle>
                <CardDesc>
                  Four-sensor safety array prevents overheating during
                  high-current operation.
                </CardDesc>
              </FeatureCard>
            </Animated>
          </IntelligenceGrid>
        </Container>
      </IntelligenceSection>

      {/* 5️⃣ INDUSTRIAL DURABILITY & SAFETY */}
      <DurabilitySection>
        <Container>
          <SplitLayout>
            <VisualArea>
              <Animated animation="fadeInRight" duration={0.8}>
                <ImagePlaceholder></ImagePlaceholder>
              </Animated>
            </VisualArea>

            <ContentArea>
              <Animated animation="fadeInLeft" duration={0.6}>
                <SectionTitle>Built for Industrial Environments</SectionTitle>
                <DurabilityList>
                  <DurabilityItem>
                    <IconBox>
                      <Activity size={24} />
                    </IconBox>
                    <div>
                      <ItemTitle>Vibration Protection</ItemTitle>
                      <ItemDesc>
                        Industrial-grade internal dampening protects lithium
                        cells from warehouse floor vibrations and dock leveling
                        impacts.
                      </ItemDesc>
                    </div>
                  </DurabilityItem>
                  <DurabilityItem>
                    <IconBox>
                      <ShieldCheck size={24} />
                    </IconBox>
                    <div>
                      <ItemTitle>Robust Construction</ItemTitle>
                      <ItemDesc>
                        Designed to withstand demanding logistics environments.
                      </ItemDesc>
                    </div>
                  </DurabilityItem>
                  <DurabilityItem>
                    <IconBox>
                      <AlertTriangle size={24} />
                    </IconBox>
                    <div>
                      <ItemTitle>Safe Operation</ItemTitle>
                      <ItemDesc>
                        Lithium technology eliminates risks of acid spills
                        associated with traditional batteries.
                      </ItemDesc>
                    </div>
                  </DurabilityItem>
                </DurabilityList>
              </Animated>
            </ContentArea>
          </SplitLayout>
        </Container>
      </DurabilitySection>

      {/* 6️⃣ OPERATIONAL IMPACT */}
      <ImpactSection>
        <Container>
          <Animated animation="fadeInDown" duration={0.6}>
            <SectionTitle className="centered">
              Optimized for High-Uptime Warehouses
            </SectionTitle>
          </Animated>

          <ImpactGrid>
            <Animated animation="fadeInUp" delay={0.1} duration={0.5}>
              <ImpactCard>
                <ImpactIcon>
                  <Clock size={36} />
                </ImpactIcon>
                <ImpactTitle>Multi-Shift Ready</ImpactTitle>
                <ImpactDesc>
                  Single battery supports continuous 24/7 operations with
                  opportunity charging.
                </ImpactDesc>
              </ImpactCard>
            </Animated>

            <Animated animation="fadeInUp" delay={0.2} duration={0.5}>
              <ImpactCard>
                <ImpactIcon>
                  <TrendingDown size={36} />
                </ImpactIcon>
                <ImpactTitle>Lower Operating Cost</ImpactTitle>
                <ImpactDesc>
                  Higher efficiency reduces long-term energy costs.
                </ImpactDesc>
              </ImpactCard>
            </Animated>

            <Animated animation="fadeInUp" delay={0.3} duration={0.5}>
              <ImpactCard>
                <ImpactIcon>
                  <Leaf size={36} />
                </ImpactIcon>
                <ImpactTitle>Green Logistics</ImpactTitle>
                <ImpactDesc>
                  Zero emissions during charging makes them safe for food-grade
                  and pharmaceutical facilities.
                </ImpactDesc>
              </ImpactCard>
            </Animated>
          </ImpactGrid>
        </Container>
      </ImpactSection>

      {/* FINAL CTA SECTION */}
      <CtaSection>
        <Container>
          <Animated animation="slideUp" duration={0.6}>
            <CtaWrapper>
              <CtaHeading>
                Power the Next Generation of Material Handling
              </CtaHeading>
              <CtaDescription>
                Upgrade warehouse operations with intelligent lithium energy
                systems built for modern logistics.
              </CtaDescription>
              <CtaButton href="/contact-us">
                <MessageSquare size={20} /> Contact Our Industrial Solutions
                Team
              </CtaButton>
            </CtaWrapper>
          </Animated>
        </Container>
      </CtaSection>
    </PageWrapper>
  );
};

export default EForkliftBatteries;

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
  background: var(--color-surface-secondary);
  border-bottom: 1px solid var(--color-border);
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
  font-size: 3.25rem;
  font-weight: 800;
  color: var(--color-text);
  margin: 0 0 1.25rem 0;
  line-height: 1.1;

  @media (max-width: 1024px) {
    font-size: 2.75rem;
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

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;

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

// --- 2️⃣ LITHIUM VS LEAD-ACID ADVANTAGE ---
const ComparisonSection = styled.section`
  padding: 100px 0;
  background-color: var(--color-bg);
`;

const ComparisonGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 900px;
  margin: 0 auto;
`;

const CompareCard = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const CompareHeader = styled.div`
  background: var(--color-surface-secondary);
  padding: 1rem 1.5rem;
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--color-text);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-bottom: 1px solid var(--color-border-light);

  .icon {
    color: var(--color-primary);
  }
`;

const CompareColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const SideBase = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h5 {
    font-size: 0.9rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin: 0;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const LeadAcidSide = styled(SideBase)`
  background: rgba(255, 255, 255, 0.02);
  border-right: 1px solid var(--color-border-light);

  h5 {
    color: var(--color-text-muted);
  }
  p {
    color: var(--color-text-secondary);
  }

  @media (max-width: 600px) {
    border-right: none;
    border-bottom: 1px solid var(--color-border-light);
  }
`;

const LithiumSide = styled(SideBase)`
  background: rgba(0, 200, 81, 0.03);

  h5 {
    color: var(--color-primary);
  }
  p {
    color: var(--color-text);
    font-weight: 500;
  }
`;

// --- 3️⃣ TECHNICAL SPECIFICATIONS ---
const SpecSection = styled.section`
  padding: 100px 0;
  background-color: var(--color-surface-secondary);
  border-top: 1px solid var(--color-border-light);
  border-bottom: 1px solid var(--color-border-light);
`;

const SpecTableWrapper = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  overflow: hidden;
  max-width: 1000px;
  margin: 0 auto;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
`;

const SpecRow = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  border-bottom: 1px solid var(--color-border-light);

  &:last-child {
    border-bottom: none;
  }

  &:nth-child(even) {
    background: rgba(255, 255, 255, 0.015);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SpecLabel = styled.div`
  padding: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  border-right: 1px solid var(--color-border-light);
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1.25rem 1.5rem 0.5rem;
    border-right: none;
    color: var(--color-text-muted);
    font-size: 0.85rem;
    text-transform: uppercase;
  }
`;

const SpecValue = styled.div`
  padding: 1.5rem;
  font-size: 1.05rem;
  color: var(--color-text-secondary);
  line-height: 1.6;

  @media (max-width: 768px) {
    padding: 0 1.5rem 1.25rem;
    font-weight: 500;
    color: var(--color-text);
  }
`;

// --- 4️⃣ SMART BATTERY INTELLIGENCE ---
const IntelligenceSection = styled.section`
  padding: 120px 0;
  background-color: var(--color-bg);
`;

const IntelligenceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 40px;

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
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.04);
    border-color: var(--color-border-light);
  }
`;

const CardIcon = styled.div`
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
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--color-text);
  margin: 0 0 0.75rem 0;
`;

const CardDesc = styled.p`
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;
`;

// --- 5️⃣ INDUSTRIAL DURABILITY & SAFETY ---
const DurabilitySection = styled.section`
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

  @media (max-width: 900px) {
    order: 2;
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  min-height: 400px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  font-size: 0.95rem;
  text-align: center;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    min-height: 250px;
  }
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    order: 1;
  }
`;

const DurabilityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1rem;
`;

const DurabilityItem = styled.div`
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

// --- 6️⃣ OPERATIONAL IMPACT ---
const ImpactSection = styled.section`
  padding: 120px 0;
  background-color: var(--color-bg);
`;

const ImpactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const ImpactCard = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: var(--color-border-light);
  }
`;

const ImpactIcon = styled.div`
  color: var(--color-primary);
  margin-bottom: 1.5rem;
`;

const ImpactTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--color-text);
  margin: 0 0 0.75rem 0;
`;

const ImpactDesc = styled.p`
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
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
