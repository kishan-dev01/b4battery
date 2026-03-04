// src/pages/products/ECleaningMachineBatteries.jsx
import React from "react";
import styled from "styled-components";
import {
  ArrowRight,
  Clock,
  Zap,
  Wrench,
  ShieldAlert,
  Activity,
  RefreshCcw,
  Leaf,
  CheckCircle2,
  Droplets,
  Move,
  Settings,
  Disc,
  Combine,
  Cpu,
} from "lucide-react";
import Animated from "../../components/common/Animated";

const ECleaningMachineBatteries = () => {
  return (
    <PageWrapper>
      {/* 1️⃣ HERO SECTION */}
      <HeroSection>
        <Container>
          <HeroGrid>
            <HeroContent>
              <Animated animation="fadeInDown" duration={0.6}>
                <Eyebrow>Industrial Facility Power</Eyebrow>
                <HeroHeading>E-Cleaning Machine Batteries</HeroHeading>
                <HeroSubheading>
                  Reliable deep-cycle energy solutions engineered for modern
                  industrial cleaning equipment.
                </HeroSubheading>
                <HeroDescription>
                  Our E-Cleaning Machine Batteries provide stable and
                  long-lasting energy for commercial floor scrubbers, sweepers,
                  and automated cleaning systems. Designed for demanding
                  environments, these batteries ensure uninterrupted performance
                  from the start of the shift to the end of the job.
                </HeroDescription>
                <CTAButton href="#applications">
                  Explore Applications <ArrowRight size={20} />
                </CTAButton>
              </Animated>
            </HeroContent>

            <HeroImageArea>
              <Animated animation="fadeIn" delay={0.2} duration={0.8}>
                <ImageWrapper>
                  <img
                    src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop"
                    alt="Industrial floor scrubber machine"
                    loading="lazy"
                  />
                </ImageWrapper>
              </Animated>
            </HeroImageArea>
          </HeroGrid>
        </Container>
      </HeroSection>

      {/* 2️⃣ WHAT THESE BATTERIES POWER */}
      <PowerSection>
        <Container>
          <Animated animation="fadeInDown" duration={0.6}>
            <SectionTitle className="centered">
              Powering Modern Facility Cleaning
            </SectionTitle>
          </Animated>

          <PowerGrid>
            <Animated animation="fadeInUp" delay={0.1} duration={0.5}>
              <PowerCard>
                <PowerImage>
                  <img
                    src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800&auto=format&fit=crop"
                    alt="Industrial Floor Scrubbers"
                    loading="lazy"
                  />
                </PowerImage>
                <PowerContent>
                  <h4>Industrial Floor Scrubbers</h4>
                  <p>
                    Reliable energy for deep cleaning large commercial spaces.
                  </p>
                </PowerContent>
              </PowerCard>
            </Animated>

            <Animated animation="fadeInUp" delay={0.2} duration={0.5}>
              <PowerCard>
                <PowerImage>
                  <img
                    src="https://images.unsplash.com/photo-1504904116278-faa29f477207?q=80&w=800&auto=format&fit=crop"
                    alt="Warehouse Sweepers"
                    loading="lazy"
                  />
                </PowerImage>
                <PowerContent>
                  <h4>Warehouse Sweepers</h4>
                  <p>
                    Consistent power output for large-area dust and debris
                    removal.
                  </p>
                </PowerContent>
              </PowerCard>
            </Animated>

            <Animated animation="fadeInUp" delay={0.3} duration={0.5}>
              <PowerCard>
                <PowerImage>
                  <img
                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop"
                    alt="Automated Cleaning Systems"
                    loading="lazy"
                  />
                </PowerImage>
                <PowerContent>
                  <h4>Automated Cleaning Systems</h4>
                  <p>
                    Stable energy supply for robotic and automated cleaning
                    equipment.
                  </p>
                </PowerContent>
              </PowerCard>
            </Animated>
          </PowerGrid>
        </Container>
      </PowerSection>

      {/* 3️⃣ CORE PRODUCT FEATURES */}
      <FeaturesSection>
        <Container>
          <Animated animation="fadeInDown" duration={0.6}>
            <SectionTitle>Key Product Features</SectionTitle>
          </Animated>

          <FeaturesGrid>
            <Animated animation="fadeInUp" delay={0.1} duration={0.5}>
              <FeatureCard>
                <FeatureIcon>
                  <Clock size={24} />
                </FeatureIcon>
                <FeatureTitle>Extended Runtime</FeatureTitle>
                <FeatureDesc>
                  Deep-cycle battery design enables longer machine operation on
                  a single charge.
                </FeatureDesc>
              </FeatureCard>
            </Animated>

            <Animated animation="fadeInUp" delay={0.2} duration={0.5}>
              <FeatureCard>
                <FeatureIcon>
                  <Zap size={24} />
                </FeatureIcon>
                <FeatureTitle>Rapid Charging Technology</FeatureTitle>
                <FeatureDesc>
                  Advanced cell design supports faster charging cycles and
                  reduced downtime.
                </FeatureDesc>
              </FeatureCard>
            </Animated>

            <Animated animation="fadeInUp" delay={0.3} duration={0.5}>
              <FeatureCard>
                <FeatureIcon>
                  <Wrench size={24} />
                </FeatureIcon>
                <FeatureTitle>Maintenance-Free Operation</FeatureTitle>
                <FeatureDesc>
                  AGM and lithium-ion options eliminate watering and acid
                  checks.
                </FeatureDesc>
              </FeatureCard>
            </Animated>

            <Animated animation="fadeInUp" delay={0.4} duration={0.5}>
              <FeatureCard>
                <FeatureIcon>
                  <ShieldAlert size={24} />
                </FeatureIcon>
                <FeatureTitle>Rugged Construction</FeatureTitle>
                <FeatureDesc>
                  Reinforced battery casing and vibration-resistant components
                  ensure durability.
                </FeatureDesc>
              </FeatureCard>
            </Animated>
          </FeaturesGrid>
        </Container>
      </FeaturesSection>

      {/* 4️⃣ TECHNICAL ADVANTAGES */}
      <TechSection>
        <Container>
          <SplitLayout>
            <TechContent>
              <Animated animation="fadeInLeft" duration={0.6}>
                <SectionTitle>
                  Engineered for Consistent Performance
                </SectionTitle>
                <TechList>
                  <TechItem>
                    <IconBox>
                      <Activity size={20} />
                    </IconBox>
                    <div>
                      <ItemTitle>Optimized Discharge Curves</ItemTitle>
                      <ItemDesc>
                        Maintains steady voltage output throughout the entire
                        discharge cycle.
                      </ItemDesc>
                    </div>
                  </TechItem>
                  <TechItem>
                    <IconBox>
                      <RefreshCcw size={20} />
                    </IconBox>
                    <div>
                      <ItemTitle>High Cycle Life</ItemTitle>
                      <ItemDesc>
                        Premium lead-plate and lithium technologies support
                        hundreds of deep discharge cycles.
                      </ItemDesc>
                    </div>
                  </TechItem>
                  <TechItem>
                    <IconBox>
                      <CheckCircle2 size={20} />
                    </IconBox>
                    <div>
                      <ItemTitle>Advanced Safety Protection</ItemTitle>
                      <ItemDesc>
                        Protection systems prevent overcharging, deep discharge,
                        and thermal issues.
                      </ItemDesc>
                    </div>
                  </TechItem>
                </TechList>
              </Animated>
            </TechContent>

            <TechImageArea>
              <Animated animation="fadeInRight" duration={0.8}>
                <ImageWrapper className="rounded">
                  <img
                    src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1000&auto=format&fit=crop"
                    alt="Industrial battery pack cells"
                    loading="lazy"
                  />
                </ImageWrapper>
              </Animated>
            </TechImageArea>
          </SplitLayout>
        </Container>
      </TechSection>

      {/* 5️⃣ DURABILITY & RELIABILITY */}
      <DurabilitySection>
        <DurabilityOverlay />
        <Container>
          <Animated animation="slideUp" duration={0.6}>
            <DurabilityContent>
              <SectionTitle className="light centered">
                Built for Demanding Cleaning Environments
              </SectionTitle>
              <DurabilityText>
                Cleaning equipment experiences constant vibration, movement, and
                long operating hours. These batteries are engineered with
                reinforced internal connectors and durable casings to withstand
                daily commercial usage.
              </DurabilityText>
            </DurabilityContent>
          </Animated>
        </Container>
      </DurabilitySection>

      {/* 6️⃣ SUSTAINABILITY COMMITMENT */}
      <SustainabilitySection>
        <Container>
          <Animated animation="fadeInDown" duration={0.6}>
            <SectionTitle className="centered">
              Efficient & Environmentally Responsible
            </SectionTitle>
          </Animated>

          <SusGrid>
            <Animated animation="fadeInUp" delay={0.1} duration={0.5}>
              <SusItem>
                <Leaf size={32} className="sus-icon" />
                <p>
                  Lead-acid battery components are nearly{" "}
                  <strong>100% recyclable</strong>.
                </p>
              </SusItem>
            </Animated>

            <Animated animation="fadeInUp" delay={0.2} duration={0.5}>
              <SusItem>
                <Activity size={32} className="sus-icon" />
                <p>
                  Lithium batteries deliver a{" "}
                  <strong>lower carbon footprint</strong> over an extended
                  lifespan.
                </p>
              </SusItem>
            </Animated>

            <Animated animation="fadeInUp" delay={0.3} duration={0.5}>
              <SusItem>
                <Zap size={32} className="sus-icon" />
                <p>
                  High energy efficiency{" "}
                  <strong>reduces operational energy consumption</strong>.
                </p>
              </SusItem>
            </Animated>
          </SusGrid>
        </Container>
      </SustainabilitySection>

      {/* 7️⃣ APPLICATION GUIDE */}
      <AppSection id="applications">
        <Container>
          <Animated animation="fadeInDown" duration={0.6}>
            <SectionTitle className="centered">
              Recommended Applications
            </SectionTitle>
          </Animated>

          <AppGrid>
            <Animated animation="fadeInUp" delay={0.1} duration={0.4}>
              <AppCard>
                <Droplets size={24} className="app-icon" />
                <span>Automatic Floor Scrubbers (Walk-behind)</span>
              </AppCard>
            </Animated>
            <Animated animation="fadeInUp" delay={0.15} duration={0.4}>
              <AppCard>
                <Move size={24} className="app-icon" />
                <span>Ride-On Scrubbers</span>
              </AppCard>
            </Animated>
            <Animated animation="fadeInUp" delay={0.2} duration={0.4}>
              <AppCard>
                <Combine size={24} className="app-icon" />
                <span>Industrial Sweepers</span>
              </AppCard>
            </Animated>
            <Animated animation="fadeInUp" delay={0.25} duration={0.4}>
              <AppCard>
                <Disc size={24} className="app-icon" />
                <span>Burnishers & Polishers</span>
              </AppCard>
            </Animated>
            <Animated animation="fadeInUp" delay={0.3} duration={0.4}>
              <AppCard>
                <Settings size={24} className="app-icon" />
                <span>Carpet Extractors</span>
              </AppCard>
            </Animated>
            <Animated animation="fadeInUp" delay={0.35} duration={0.4}>
              <AppCard>
                <Cpu size={24} className="app-icon" />
                <span>Automated Robotic Cleaners</span>
              </AppCard>
            </Animated>
          </AppGrid>
        </Container>
      </AppSection>
    </PageWrapper>
  );
};

export default ECleaningMachineBatteries;

// --- GLOBAL & SHARED STYLED COMPONENTS ---

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
  margin-bottom: 2rem;
  line-height: 1.2;
  letter-spacing: -0.5px;

  &.centered {
    text-align: center;
  }

  &.light {
    color: #ffffff;
  }

  @media (max-width: 768px) {
    font-size: 1.85rem;
    margin-bottom: 1.5rem;
  }
`;

// --- 1️⃣ HERO SECTION ---
const HeroSection = styled.section`
  padding: 120px 0 80px;
  background: var(--color-surface-secondary);
  position: relative;

  @media (max-width: 768px) {
    padding: 90px 0 60px;
  }
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
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
  letter-spacing: 1.5px;
  color: var(--color-primary);
  margin-bottom: 1rem;
  display: inline-block;
  background: rgba(0, 200, 81, 0.1);
  padding: 0.4rem 1rem;
  border-radius: 50px;
`;

const HeroHeading = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: var(--color-text);
  margin: 0 0 1rem 0;
  line-height: 1.15;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const HeroSubheading = styled.h3`
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin: 0 0 1.25rem 0;
`;

const HeroDescription = styled.p`
  font-size: 1rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin: 0 0 2rem 0;
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
  padding: 1rem 2.25rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 800;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 200, 81, 0.2);
  align-self: flex-start;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 200, 81, 0.3);
    background: var(--color-primary-light);
  }

  @media (max-width: 900px) {
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
  width: 100%;
  position: relative;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  }

  &.rounded img {
    border-radius: 20px;
  }
`;

// --- 2️⃣ WHAT THESE BATTERIES POWER ---
const PowerSection = styled.section`
  padding: 80px 0;
  background: var(--color-bg);
  border-top: 1px solid var(--color-border-light);
`;

const PowerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PowerCard = styled.div`
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

const PowerImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PowerContent = styled.div`
  padding: 1.5rem;

  h4 {
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--color-text);
    margin: 0 0 0.5rem 0;
  }

  p {
    font-size: 0.95rem;
    color: var(--color-text-secondary);
    line-height: 1.5;
    margin: 0;
  }
`;

// --- 3️⃣ CORE PRODUCT FEATURES ---
const FeaturesSection = styled.section`
  padding: 80px 0;
  background: var(--color-surface-secondary);
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.03);
  }
`;

const FeatureIcon = styled.div`
  color: var(--color-primary);
  background: rgba(0, 200, 81, 0.08);
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 1.25rem;
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

// --- 4️⃣ TECHNICAL ADVANTAGES ---
const TechSection = styled.section`
  padding: 100px 0;
  background: var(--color-bg);
`;

const SplitLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const TechContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const TechList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const TechItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
`;

const IconBox = styled.div`
  color: var(--color-primary);
  background: var(--color-surface-secondary);
  padding: 0.75rem;
  border-radius: 10px;
  flex-shrink: 0;
`;

const ItemTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 0.25rem 0;
`;

const ItemDesc = styled.p`
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin: 0;
`;

const TechImageArea = styled.div`
  width: 100%;
`;

// --- 5️⃣ DURABILITY & RELIABILITY ---
const DurabilitySection = styled.section`
  padding: 120px 0;
  position: relative;
  background: url("https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1600&auto=format&fit=crop")
    center/cover no-repeat;
  background-attachment: fixed;
`;

const DurabilityOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(17, 24, 39, 0.85); /* Dark overlay */
  z-index: 1;
`;

const DurabilityContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const DurabilityText = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// --- 6️⃣ SUSTAINABILITY COMMITMENT ---
const SustainabilitySection = styled.section`
  padding: 80px 0;
  background: var(--color-surface);
`;

const SusGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SusItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 1.5rem;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 16px;

  .sus-icon {
    color: var(--color-primary);
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.95rem;
    color: var(--color-text-secondary);
    line-height: 1.5;
    margin: 0;
  }

  strong {
    color: var(--color-text);
  }
`;

// --- 7️⃣ APPLICATION GUIDE ---
const AppSection = styled.section`
  padding: 80px 0 120px;
  background: var(--color-bg);
  border-top: 1px solid var(--color-border-light);
`;

const AppGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const AppCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  background: var(--color-surface-secondary);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--color-text);

  .app-icon {
    color: var(--color-primary);
    flex-shrink: 0;
  }
`;
