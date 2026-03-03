import React from "react";
import styled from "styled-components";
import {
  Sun,
  BatteryCharging,
  Power,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Animated from "../common/Animated";

const ecosystemData = [
  {
    id: "solar-panels",
    icon: <Sun size={28} strokeWidth={1.5} />,
    title: "High-Efficiency Solar Panels",
    features: [
      "TOPCon & N-Type architectures",
      "Up to 28%+ efficiency (Tandem ready)",
      "Bifacial glass-to-glass design",
      "MBB & Half-Cut reliability",
    ],
    benefit: "Maximize rooftop generation in limited space.",
  },
  {
    id: "solar-battery",
    icon: <BatteryCharging size={28} strokeWidth={1.5} />,
    title: "Advanced Lithium Storage",
    features: [
      "LFP chemistry (6,000+ cycles)",
      "10–15 year lifespan",
      "100% Depth of Discharge",
      "90%+ round-trip efficiency",
      "AI weather forecasting optimization",
    ],
    benefit: "Store solar energy by day. Use it during peak tariff hours.",
  },
  {
    id: "home-ups",
    icon: <Power size={28} strokeWidth={1.5} />,
    title: "Seamless Backup Power",
    features: [
      "Pure sine wave output",
      "<10ms switchover for IT loads",
      "ABCC intelligent charging",
      "High surge capacity for appliances",
    ],
    benefit:
      "Zero interruption for Wi-Fi, laptops, TVs, and essential appliances.",
  },
];

const ResidentialSolutions = () => {
  return (
    <Section id="residential-ecosystem">
      <Container>
        {/* --- SECTION HEADER --- */}
        <HeaderArea>
          <Animated animation="fadeInDown" duration={0.6}>
            <Eyebrow>RESIDENTIAL SOLUTIONS</Eyebrow>
            <MainHeading>
              Complete Energy Ecosystems for Modern Homes
            </MainHeading>
            <Subheading>
              From high-efficiency solar panels to intelligent lithium storage
              and seamless backup systems — power your home with reliability and
              independence.
            </Subheading>
          </Animated>
        </HeaderArea>

        {/* --- CENTRAL HOME VISUAL --- */}
        <Animated animation="fadeIn" delay={0.2} duration={0.8}>
          <VisualWrapper>
            <ImageGlow />
            <HomeImageContainer>
              <img
                src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1200&auto=format&fit=crop"
                alt="Modern Smart Home with Solar Panels"
                loading="lazy"
              />
              <ImageOverlay />
            </HomeImageContainer>
          </VisualWrapper>
        </Animated>

        {/* --- 3-COLUMN ECOSYSTEM MODULES --- */}
        <EcosystemGrid>
          {ecosystemData.map((module, index) => (
            <Animated
              key={module.id}
              animation="fadeInUp"
              delay={0.3 + index * 0.15}
              duration={0.6}
            >
              <EcosystemCard>
                <CardIconWrapper>{module.icon}</CardIconWrapper>
                <CardTitle>{module.title}</CardTitle>

                <FeaturesList>
                  {module.features.map((feature, i) => (
                    <li key={i}>
                      <CheckCircle2 size={16} className="check-icon" />
                      {feature}
                    </li>
                  ))}
                </FeaturesList>

                <BenefitLine>{module.benefit}</BenefitLine>
              </EcosystemCard>
            </Animated>
          ))}
        </EcosystemGrid>

        {/* --- OPTIONAL CTA AREA --- */}
        <Animated animation="slideUp" delay={0.6} duration={0.6}>
          <CTAArea>
            <CTAHeadline>Start Your Energy Independence Journey</CTAHeadline>
            <CTAButton href="/solutions/residential">
              Explore Residential Solutions <ArrowRight size={20} />
            </CTAButton>
          </CTAArea>
        </Animated>
      </Container>
    </Section>
  );
};

export default ResidentialSolutions;

// --- STYLED COMPONENTS ---

const Section = styled.section`
  padding: 120px 0;
  /* Lighter, softer background to contrast with industrial sections */
  background: linear-gradient(
    180deg,
    var(--color-surface-secondary) 0%,
    var(--color-bg) 100%
  );
  position: relative;

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

// --- Header ---
const HeaderArea = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 60px;

  @media (max-width: 768px) {
    text-align: left;
    margin-bottom: 40px;
  }
`;

const Eyebrow = styled.span`
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--color-primary);
  margin-bottom: 1.25rem;
  display: inline-block;
  background: rgba(0, 200, 81, 0.05);
  padding: 0.4rem 1rem;
  border-radius: 50px;
  border: 1px solid rgba(0, 200, 81, 0.15);
`;

const MainHeading = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 1.25rem;
  line-height: 1.15;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const Subheading = styled.p`
  font-size: 1.15rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
`;

// --- Central Visual ---
const VisualWrapper = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  z-index: 1;
`;

const ImageGlow = styled.div`
  position: absolute;
  inset: -20px;
  background: radial-gradient(
    circle at center,
    rgba(0, 200, 81, 0.15) 0%,
    transparent 70%
  );
  filter: blur(40px);
  z-index: -1;
  border-radius: 30px;
`;

const HomeImageContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--color-border-light);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 60%; /* Focus on the house */
  }

  @media (max-width: 768px) {
    height: 250px;
    border-radius: 16px;
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  /* Soft warm overlay to give it an evening/premium feel */
  background: linear-gradient(
    to top,
    rgba(17, 24, 39, 0.4) 0%,
    transparent 100%
  );
`;

// --- Ecosystem Modules ---
const EcosystemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  position: relative;
  z-index: 2;
  margin-top: -80px; /* Overlaps the central image to create connection */

  /* Subtle connecting line behind the cards on desktop */
  &::before {
    content: "";
    position: absolute;
    top: 50px; /* Aligns with icons */
    left: 10%;
    right: 10%;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      var(--color-primary),
      transparent
    );
    opacity: 0.3;
    z-index: -1;
  }

  @media (max-width: 1024px) {
    margin-top: -40px;
    gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: 32px; /* Remove overlap on mobile for clean stacking */
    gap: 24px;

    &::before {
      display: none;
    }
  }
`;

const EcosystemCard = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border-light);
  border-radius: 20px;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  height: 100%;

  @media (min-width: 1025px) {
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 40px rgba(0, 200, 81, 0.08);
      border-color: var(--color-primary-light);
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const CardIconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: var(--color-surface-secondary);
  color: var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  border: 1px solid var(--color-border-light);
  box-shadow: 0 4px 10px rgba(0, 200, 81, 0.1);
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--color-text);
  margin: 0 0 1.5rem 0;
  text-align: center;
  line-height: 1.3;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  flex-grow: 1;

  li {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    font-size: 0.95rem;
    color: var(--color-text-secondary);
    line-height: 1.4;

    .check-icon {
      color: var(--color-primary);
      flex-shrink: 0;
      margin-top: 0.1rem;
      opacity: 0.8;
    }
  }
`;

const BenefitLine = styled.div`
  background: rgba(0, 200, 81, 0.04);
  color: var(--color-text);
  font-weight: 600;
  font-size: 0.9rem;
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
  line-height: 1.5;
  border: 1px solid rgba(0, 200, 81, 0.1);
`;

// --- CTA Area ---
const CTAArea = styled.div`
  text-align: center;
  margin-top: 80px;

  @media (max-width: 768px) {
    margin-top: 60px;
  }
`;

const CTAHeadline = styled.h3`
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: var(--color-primary);
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.05rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 200, 81, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 200, 81, 0.35);
    background: var(--color-primary-dark);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
