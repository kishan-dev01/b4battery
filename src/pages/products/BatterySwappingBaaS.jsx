// src/pages/products/BatterySwappingBaaS.jsx
import React from "react";
import styled from "styled-components";
import {
  ArrowRight,
  MapPin,
  RefreshCw,
  Zap,
  Timer,
  TrendingDown,
  ShieldCheck,
  Share2,
  CheckCircle2,
} from "lucide-react";
import Animated from "../../components/common/Animated";

const baasAdvantages = [
  {
    icon: <Timer size={24} />,
    title: "Zero Waiting",
    description: "Battery swapping eliminates long charging downtime.",
  },
  {
    icon: <TrendingDown size={24} />,
    title: "Lower Upfront Cost",
    description:
      "Customers can purchase the vehicle without the battery, reducing initial vehicle cost by up to 40%.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Always New Batteries",
    description:
      "Subscribers always receive battery packs maintained at optimal health levels.",
  },
  {
    icon: <Share2 size={24} />,
    title: "Network Powered",
    description:
      "Swap stations allow convenient energy access across supported locations.",
  },
];

const baasBenefitsList = [
  "Lower initial EV purchase cost",
  "Access to well-maintained batteries",
  "Reduced battery degradation concerns",
  "Faster energy access through swap stations",
];

const BatterySwappingBaaS = () => {
  return (
    <PageWrapper>
      {/* 1️⃣ HERO SECTION */}
      <HeroSection>
        <Container>
          <HeroGrid>
            <HeroImageArea>
              <Animated animation="fadeIn" delay={0.2} duration={0.8}>
                <ImageFloatingWrapper>
                  <img
                    src="/images/products/battery-swapping.png"
                    alt="EV Battery Swapping Station"
                    loading="lazy"
                  />
                  {/* Fallback placeholder style if image is missing */}
                  <ImageFallback className="fallback-bg">
                    [Clean futuristic station design visual]
                  </ImageFallback>
                </ImageFloatingWrapper>
              </Animated>
            </HeroImageArea>

            <HeroContent>
              <Animated animation="fadeInDown" duration={0.6}>
                <Eyebrow>Mobility Infrastructure</Eyebrow>
                <HeroHeading>
                  Battery Swapping &<br />
                  Battery-as-a-Service (BaaS)
                </HeroHeading>
                <HeroSubheading>
                  A smarter approach to electric mobility where batteries are no
                  longer owned — they are accessed as a service.
                </HeroSubheading>
                <HeroDescription>
                  Battery swapping eliminates long charging times by allowing
                  depleted batteries to be exchanged for fully charged ones
                  within minutes. Combined with a subscription-based
                  Battery-as-a-Service model, this system lowers vehicle costs
                  while ensuring users always operate with healthy battery
                  packs.
                </HeroDescription>
                <CTAButton href="#how-it-works">
                  Learn How BaaS Works <ArrowRight size={20} />
                </CTAButton>
              </Animated>
            </HeroContent>
          </HeroGrid>
        </Container>
      </HeroSection>

      {/* 2️⃣ THE SWAPPING EXPERIENCE */}
      <ExperienceSection>
        <Container>
          <Animated animation="fadeInDown" duration={0.6}>
            <SectionHeader>
              <SectionTitle>The Swapping Revolution</SectionTitle>
              <HighlightBadge>
                <Timer size={16} /> Under 3 Minutes Swap Time
              </HighlightBadge>
            </SectionHeader>
          </Animated>

          <ProcessFlow>
            <Animated
              animation="fadeInUp"
              delay={0.1}
              duration={0.5}
              className="step-wrapper"
            >
              <ProcessStep>
                <StepIcon>
                  <MapPin size={28} />
                </StepIcon>
                <StepTitle>Step 1 — Arrive</StepTitle>
                <StepDescription>
                  Visit any partner battery swap station when your battery
                  charge is low.
                </StepDescription>
              </ProcessStep>
            </Animated>
            <FlowArrow>
              <ArrowRight size={24} />
            </FlowArrow>
            <FlowLine /> {/* Mobile connecting line */}
            <Animated
              animation="fadeInUp"
              delay={0.2}
              duration={0.5}
              className="step-wrapper"
            >
              <ProcessStep>
                <StepIcon>
                  <RefreshCw size={28} />
                </StepIcon>
                <StepTitle>Step 2 — Swap</StepTitle>
                <StepDescription>
                  Exchange your depleted battery pack for a fully charged one.
                </StepDescription>
              </ProcessStep>
            </Animated>
            <FlowArrow>
              <ArrowRight size={24} />
            </FlowArrow>
            <FlowLine /> {/* Mobile connecting line */}
            <Animated
              animation="fadeInUp"
              delay={0.3}
              duration={0.5}
              className="step-wrapper"
            >
              <ProcessStep>
                <StepIcon>
                  <Zap size={28} />
                </StepIcon>
                <StepTitle>Step 3 — Continue Riding</StepTitle>
                <StepDescription>
                  Get back on the road instantly without waiting hours for
                  charging.
                </StepDescription>
              </ProcessStep>
            </Animated>
          </ProcessFlow>
        </Container>
      </ExperienceSection>

      {/* 3️⃣ KEY ADVANTAGES OF BAAS */}
      <AdvantagesSection>
        <Container>
          <Animated animation="fadeInDown" duration={0.6}>
            <SectionTitle className="centered">
              Why Battery-as-a-Service?
            </SectionTitle>
          </Animated>

          <AdvantagesGrid>
            {baasAdvantages.map((adv, index) => (
              <Animated
                key={index}
                animation="fadeInUp"
                delay={index * 0.1}
                duration={0.5}
              >
                <AdvantageCard>
                  <CardIcon>{adv.icon}</CardIcon>
                  <CardTitle>{adv.title}</CardTitle>
                  <CardDesc>{adv.description}</CardDesc>
                </AdvantageCard>
              </Animated>
            ))}
          </AdvantagesGrid>
        </Container>
      </AdvantagesSection>

      {/* 4️⃣ HOW BAAS WORKS */}
      <HowItWorksSection id="how-it-works">
        <Container>
          <SplitLayout>
            <VisualArea>
              <Animated animation="fadeInRight" duration={0.8}>
                <DiagramPlaceholder>
                  [BaaS Model Diagram / Illustration]
                </DiagramPlaceholder>
              </Animated>
            </VisualArea>

            <ContentArea>
              <Animated animation="fadeInLeft" duration={0.6}>
                <SectionTitle>The Battery-as-a-Service Model</SectionTitle>
                <ModelDescription>
                  Battery-as-a-Service separates battery ownership from the
                  vehicle itself. Instead of purchasing the battery, users
                  subscribe to a battery service plan that provides access to
                  fully charged batteries whenever needed.
                </ModelDescription>
                <ModelDescription>
                  This model reduces upfront vehicle cost while ensuring that
                  drivers always operate with the latest and healthiest battery
                  packs available within the network.
                </ModelDescription>

                <BenefitsList>
                  {baasBenefitsList.map((benefit, index) => (
                    <li key={index}>
                      <CheckCircle2 size={20} className="check-icon" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </BenefitsList>
              </Animated>
            </ContentArea>
          </SplitLayout>
        </Container>
      </HowItWorksSection>

      {/* 5️⃣ FUTURE-READY MOBILITY (CTA) */}
      <CtaSection>
        <Container>
          <Animated animation="slideUp" duration={0.6}>
            <CtaWrapper>
              <CtaHeading>Powering the Future of Electric Mobility</CtaHeading>
              <CtaDescription>
                Battery swapping infrastructure and Battery-as-a-Service models
                are shaping the next generation of electric transportation by
                eliminating range anxiety and reducing charging downtime.
              </CtaDescription>
              <CTAButton href="/technology" className="center">
                Explore EV Battery Technology <ArrowRight size={20} />
              </CTAButton>
            </CtaWrapper>
          </Animated>
        </Container>
      </CtaSection>
    </PageWrapper>
  );
};

export default BatterySwappingBaaS;

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
  background: rgba(0, 200, 81, 0.08);
  padding: 0.4rem 1rem;
  border-radius: 50px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 1.5rem;
  line-height: 1.2;
  letter-spacing: -0.5px;

  &.centered {
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
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
    background: var(--color-primary-light);
  }

  @media (max-width: 768px) {
    width: 100%;
    align-self: center;
  }
`;

// --- 1️⃣ HERO SECTION ---
const HeroSection = styled.section`
  padding: 140px 0 100px;
  /* Slight futuristic gradient */
  background: radial-gradient(
    circle at top right,
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
    order: 2; /* Text below image on mobile */
    text-align: center;
    align-items: center;
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
    filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.1));
  }

  .fallback-bg {
    display: none; /* Hide placeholder if image loads */
  }

  /* Fallback styling for when image is missing during dev */
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
`;

const HeroHeading = styled.h1`
  font-size: 3.25rem;
  font-weight: 800;
  color: var(--color-text);
  margin: 0 0 1rem 0;
  line-height: 1.15;

  @media (max-width: 1024px) {
    font-size: 2.75rem;
  }

  @media (max-width: 768px) {
    font-size: 2.25rem;
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

// --- 2️⃣ THE SWAPPING EXPERIENCE ---
const ExperienceSection = styled.section`
  padding: 100px 0;
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-border-light);
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const HighlightBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--color-primary);
  color: #000;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  box-shadow: 0 4px 15px rgba(0, 200, 81, 0.2);
`;

const ProcessFlow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;

  .step-wrapper {
    flex: 1;
    z-index: 2;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0; /* Handled by FlowLine */
  }
`;

const ProcessStep = styled.div`
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    border-color: var(--color-primary-light);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const StepIcon = styled.div`
  width: 60px;
  height: 60px;
  background: var(--color-surface-secondary);
  color: var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
`;

const StepTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--color-text);
  margin: 0 0 0.75rem 0;
`;

const StepDescription = styled.p`
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin: 0;
`;

const FlowArrow = styled.div`
  color: var(--color-border);
  margin: 0 1rem;

  @media (max-width: 768px) {
    display: none; /* Hide arrows on mobile */
  }
`;

const FlowLine = styled.div`
  display: none;
  width: 2px;
  height: 40px;
  background: var(--color-border-light);
  margin: 0 auto;

  @media (max-width: 768px) {
    display: block; /* Show vertical connecting line on mobile */
  }
`;

// --- 3️⃣ KEY ADVANTAGES OF BAAS ---
const AdvantagesSection = styled.section`
  padding: 120px 0;
  background-color: var(--color-bg);
`;

const AdvantagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const AdvantageCard = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border-light);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: all 0.3s ease;
  height: 100%;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.04);
    border-color: var(--color-border);
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const CardIcon = styled.div`
  color: var(--color-primary);
  margin-bottom: 1.25rem;
  background: rgba(0, 200, 81, 0.08);
  padding: 0.75rem;
  border-radius: 10px;
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

// --- 4️⃣ HOW BAAS WORKS ---
const HowItWorksSection = styled.section`
  padding: 100px 0;
  background-color: var(--color-surface-secondary);
  border-top: 1px solid var(--color-border-light);
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
    order: 2; /* Move image below text on mobile */
  }
`;

const DiagramPlaceholder = styled.div`
  width: 100%;
  min-height: 400px;
  background: var(--color-bg);
  border: 1px dashed var(--color-border);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  font-size: 0.95rem;
  text-align: center;
  padding: 2rem;

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

const ModelDescription = styled.p`
  font-size: 1.05rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  li {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-text);
    line-height: 1.4;

    .check-icon {
      color: var(--color-primary);
      flex-shrink: 0;
    }
  }
`;

// --- 5️⃣ FUTURE-READY MOBILITY (CTA) ---
const CtaSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(
    135deg,
    var(--color-bg) 0%,
    var(--color-surface) 100%
  );
  border-top: 1px solid var(--color-border-light);
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
  margin-bottom: 1.25rem;

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
