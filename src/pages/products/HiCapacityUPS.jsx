// src/pages/products/HiCapacityUPS.jsx
import React from "react";
import styled from "styled-components";
import {
  ArrowRight,
  Zap,
  Server,
  Building2,
  Home,
  Cpu,
  Activity,
  ShieldAlert,
  Fan,
  Settings,
  CheckCircle2,
  MessageSquare,
  Battery,
  Layers,
} from "lucide-react";
import Animated from "../../components/common/Animated";

const capacityCards = [
  {
    title: "2kVA – 15kVA Capacity Range",
    icon: <Battery size={32} />,
    description:
      "Designed to support both residential and commercial high-load environments.",
  },
  {
    title: "Seamless Power Continuity",
    icon: <Activity size={32} />,
    description: "Maintains consistent energy supply during grid outages.",
  },
  {
    title: "Reliable Power Infrastructure",
    icon: <Server size={32} />,
    description: "Ideal for locations requiring uninterrupted electricity.",
  },
];

const dspFeatures = [
  {
    title: "Digital Signal Processor Control",
    icon: <Cpu size={28} />,
    description:
      "A high-speed DSP constantly monitors power conditions to maintain stable voltage output.",
  },
  {
    title: "Stable Voltage Regulation",
    icon: <Activity size={28} />,
    description:
      "Ensures consistent electricity supply even when operating at full load capacity.",
  },
  {
    title: "Efficient Power Management",
    icon: <Settings size={28} />,
    description: "Optimizes energy usage while maintaining system reliability.",
  },
  {
    title: "Reliable Performance",
    icon: <Layers size={28} />,
    description:
      "Maintains steady operation during demanding electrical loads.",
  },
];

const applications = [
  {
    title: "Luxury Homes",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
    icon: <Home size={20} />,
    description:
      "Reliable backup power for large residences with high electricity demand.",
  },
  {
    title: "Small Businesses",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    icon: <Building2 size={20} />,
    description:
      "Ensures uninterrupted operations for shops, offices, and service facilities.",
  },
  {
    title: "Commercial Infrastructure",
    image:
      "https://images.unsplash.com/photo-1416879598555-220b8f321528?q=80&w=800&auto=format&fit=crop",
    icon: <Server size={20} />,
    description:
      "Suitable for facilities that require reliable backup for heavy equipment.",
  },
];

const HiCapacityUPS = () => {
  return (
    <PageWrapper>
      {/* 1️⃣ HERO SECTION */}
      <HeroSection>
        <Container>
          <HeroGrid>
            <HeroContent>
              <Animated animation="fadeInDown" duration={0.6}>
                <Eyebrow>Commercial Power Backup</Eyebrow>
                <HeroHeading>Hi-Capacity UPS Systems</HeroHeading>
                <HeroSubheading>
                  Heavy-duty backup power engineered for luxury homes,
                  commercial facilities, and small businesses.
                </HeroSubheading>
                <HeroDescription>
                  Hi-Capacity UPS systems provide powerful and reliable backup
                  energy for high-demand applications. Designed to support heavy
                  electrical loads and industrial equipment, these systems
                  ensure uninterrupted operations during power outages.
                </HeroDescription>
                <CTAButton href="#applications">
                  Explore High-Capacity Backup <ArrowRight size={20} />
                </CTAButton>
              </Animated>
            </HeroContent>

            <HeroImageArea>
              <Animated animation="fadeIn" delay={0.2} duration={0.8}>
                <ImageWrapper>
                  <img
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop"
                    alt="Commercial electrical control room and server power system"
                    loading="lazy"
                  />
                </ImageWrapper>
              </Animated>
            </HeroImageArea>
          </HeroGrid>
        </Container>
      </HeroSection>

      {/* 2️⃣ HIGH-CAPACITY POWER BACKUP */}
      <CapacitySection>
        <Container>
          <Animated animation="fadeInDown" duration={0.6}>
            <SectionTitle className="centered">
              Built for Large Power Demands
            </SectionTitle>
          </Animated>

          <CapacityGrid>
            {capacityCards.map((card, index) => (
              <Animated
                key={index}
                animation="fadeInUp"
                delay={index * 0.15}
                duration={0.5}
              >
                <CapacityCard>
                  <IconBox>{card.icon}</IconBox>
                  <CardTitle>{card.title}</CardTitle>
                  <CardDesc>{card.description}</CardDesc>
                </CapacityCard>
              </Animated>
            ))}
          </CapacityGrid>
        </Container>
      </CapacitySection>

      {/* 3️⃣ HEAVY APPLIANCE SUPPORT */}
      <ApplianceSection>
        <Container>
          <SplitLayout>
            <ApplianceImageArea>
              <Animated animation="fadeInRight" duration={0.8}>
                <ImageWrapper className="rounded">
                  <img
                    src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1000&auto=format&fit=crop"
                    alt="Large industrial electrical equipment"
                    loading="lazy"
                  />
                </ImageWrapper>
              </Animated>
            </ApplianceImageArea>

            <ApplianceContent>
              <Animated animation="fadeInLeft" duration={0.6}>
                <SectionTitle>Designed for Heavy Electrical Loads</SectionTitle>
                <IntroText>
                  Hi-Capacity UPS systems are built to power demanding
                  electrical appliances and heavy equipment that require higher
                  startup energy.
                </IntroText>

                <ApplianceListWrapper>
                  <p className="list-heading">Supported Loads</p>
                  <ApplianceList>
                    <li>
                      <CheckCircle2 size={20} className="check-icon" /> Air
                      conditioners (up to 2 tons)
                    </li>
                    <li>
                      <CheckCircle2 size={20} className="check-icon" />{" "}
                      Submersible pumps
                    </li>
                    <li>
                      <CheckCircle2 size={20} className="check-icon" /> Petrol
                      pumps
                    </li>
                    <li>
                      <CheckCircle2 size={20} className="check-icon" /> Washing
                      machines
                    </li>
                  </ApplianceList>
                </ApplianceListWrapper>
              </Animated>
            </ApplianceContent>
          </SplitLayout>
        </Container>
      </ApplianceSection>

      {/* 4️⃣ INTELLIGENT POWER CONTROL */}
      <DspSection>
        <Container>
          <Animated animation="fadeInDown" duration={0.6}>
            <SectionTitle className="centered">
              DSP-Based Power Intelligence
            </SectionTitle>
          </Animated>

          <DspGrid>
            {dspFeatures.map((feature, index) => (
              <Animated
                key={index}
                animation="fadeInUp"
                delay={index * 0.1}
                duration={0.5}
              >
                <DspCard>
                  <DspHeader>
                    <div className="icon-wrapper">{feature.icon}</div>
                    <CardTitle>{feature.title}</CardTitle>
                  </DspHeader>
                  <CardDesc>{feature.description}</CardDesc>
                </DspCard>
              </Animated>
            ))}
          </DspGrid>
        </Container>
      </DspSection>

      {/* 5️⃣ SAFETY & PROTECTION SYSTEMS */}
      <SafetySection>
        <Container>
          <Animated animation="fadeInDown" duration={0.6}>
            <SectionTitle className="centered">
              Comprehensive Safety Protection
            </SectionTitle>
          </Animated>

          <SafetyListContainer>
            <Animated animation="fadeInUp" delay={0.1} duration={0.5}>
              <SafetyItem>
                <SafetyIcon>
                  <Zap size={32} />
                </SafetyIcon>
                <SafetyContent>
                  <h4>MCB Protection</h4>
                  <p>
                    Built-in circuit breakers safeguard the system against short
                    circuits and overload conditions.
                  </p>
                </SafetyContent>
              </SafetyItem>
            </Animated>

            <Animated animation="fadeInUp" delay={0.2} duration={0.5}>
              <SafetyItem>
                <SafetyIcon>
                  <Fan size={32} />
                </SafetyIcon>
                <SafetyContent>
                  <h4>Thermal Management</h4>
                  <p>
                    Intelligent variable-speed cooling fans regulate internal
                    temperature and extend component lifespan.
                  </p>
                </SafetyContent>
              </SafetyItem>
            </Animated>

            <Animated animation="fadeInUp" delay={0.3} duration={0.5}>
              <SafetyItem>
                <SafetyIcon>
                  <ShieldAlert size={32} />
                </SafetyIcon>
                <SafetyContent>
                  <h4>Appliance Protection</h4>
                  <p>Protection against:</p>
                  <ul className="sub-list">
                    <li>Deep battery discharge</li>
                    <li>Battery overcharging</li>
                    <li>Reverse polarity</li>
                    <li>High-voltage surges</li>
                  </ul>
                </SafetyContent>
              </SafetyItem>
            </Animated>
          </SafetyListContainer>
        </Container>
      </SafetySection>

      {/* 6️⃣ BUSINESS & INFRASTRUCTURE APPLICATIONS */}
      <ApplicationsSection id="applications">
        <Container>
          <Animated animation="fadeInDown" duration={0.6}>
            <SectionTitle className="centered">Applications</SectionTitle>
          </Animated>

          <AppGrid>
            {applications.map((app, index) => (
              <Animated
                key={index}
                animation="fadeInUp"
                delay={index * 0.15}
                duration={0.6}
              >
                <AppCard>
                  <AppImage>
                    <img src={app.image} alt={app.title} loading="lazy" />
                  </AppImage>
                  <AppContent>
                    <AppHeader>
                      <div className="icon">{app.icon}</div>
                      <h4>{app.title}</h4>
                    </AppHeader>
                    <p>{app.description}</p>
                  </AppContent>
                </AppCard>
              </Animated>
            ))}
          </AppGrid>
        </Container>
      </ApplicationsSection>

      {/* FINAL CTA SECTION */}
      <CtaSection>
        <Container>
          <Animated animation="fadeIn" duration={0.6}>
            <CtaWrapper>
              <CtaHeading>Power When It Matters Most</CtaHeading>
              <CtaSubtext>
                Hi-Capacity UPS systems deliver dependable backup energy for
                environments where power reliability is critical.
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

export default HiCapacityUPS;

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
  font-size: 1.05rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// --- 1️⃣ HERO SECTION ---
const HeroSection = styled.section`
  padding: 140px 0 100px;
  background: var(--color-surface-secondary);
  border-bottom: 1px solid var(--color-border-light);
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
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--color-border);

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
  }

  &.rounded img {
    border-radius: 16px;
  }

  @media (max-width: 768px) {
    border-radius: 12px;
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
  border-radius: 4px; /* Sharper corners for industrial feel */
  border: 1px solid rgba(0, 200, 81, 0.2);
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
  border-radius: 4px; /* Sharper corners */
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

// --- 2️⃣ HIGH-CAPACITY POWER BACKUP ---
const CapacitySection = styled.section`
  padding: 100px 0;
  background: var(--color-bg);
`;

const CapacityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const CapacityCard = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 2.5rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    border-color: var(--color-primary-light);
  }
`;

const IconBox = styled.div`
  color: var(--color-primary);
  margin-bottom: 1.5rem;
  background: rgba(0, 200, 81, 0.08);
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--color-text);
  margin: 0 0 0.75rem 0;
`;

const CardDesc = styled.p`
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;
`;

// --- 3️⃣ HEAVY APPLIANCE SUPPORT ---
const ApplianceSection = styled.section`
  padding: 100px 0;
  background: var(--color-surface-secondary);
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

const ApplianceImageArea = styled.div`
  width: 100%;

  @media (max-width: 900px) {
    order: 2;
  }
`;

const ApplianceContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    order: 1;
  }
`;

const ApplianceListWrapper = styled.div`
  margin-top: 1.5rem;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  padding: 1.5rem;
  border-radius: 12px;

  .list-heading {
    font-weight: 700;
    color: var(--color-text);
    margin-bottom: 1rem;
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;

const ApplianceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;

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

// --- 4️⃣ INTELLIGENT POWER CONTROL ---
const DspSection = styled.section`
  padding: 100px 0;
  background: var(--color-bg);
`;

const DspGrid = styled.div`
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

const DspCard = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.04);
  }
`;

const DspHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  .icon-wrapper {
    color: var(--color-primary);
    background: rgba(0, 200, 81, 0.08);
    padding: 0.75rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h3 {
    font-size: 1.15rem;
    margin: 0;
  }
`;

// --- 5️⃣ SAFETY & PROTECTION SYSTEMS ---
const SafetySection = styled.section`
  padding: 100px 0;
  background: var(--color-surface-secondary);
  border-top: 1px solid var(--color-border-light);
`;

const SafetyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 800px;
  margin: 0 auto;
`;

const SafetyItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
  }
`;

const SafetyIcon = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border-light);
  color: var(--color-primary);
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  flex-shrink: 0;
`;

const SafetyContent = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-text);
    margin: 0 0 0.5rem 0;
  }

  p {
    font-size: 0.95rem;
    color: var(--color-text-secondary);
    line-height: 1.6;
    margin: 0;
  }

  .sub-list {
    margin: 1rem 0 0 0;
    padding-left: 1.25rem;
    color: var(--color-text-secondary);
    font-size: 0.95rem;
    line-height: 1.6;

    li {
      margin-bottom: 0.25rem;
    }
  }
`;

// --- 6️⃣ BUSINESS & INFRASTRUCTURE APPLICATIONS ---
const ApplicationsSection = styled.section`
  padding: 100px 0;
  background: var(--color-bg);
  border-top: 1px solid var(--color-border-light);
`;

const AppGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const AppCard = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: var(--color-border-light);
  }
`;

const AppImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AppContent = styled.div`
  padding: 1.5rem;

  p {
    font-size: 0.95rem;
    color: var(--color-text-secondary);
    line-height: 1.5;
    margin: 0;
  }
`;

const AppHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;

  .icon {
    color: var(--color-primary);
    display: flex;
    align-items: center;
  }

  h4 {
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--color-text);
    margin: 0;
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
  line-height: 1.6;
  margin: 0 0 2.5rem 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
