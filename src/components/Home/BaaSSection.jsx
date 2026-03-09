import React from "react";
import styled from "styled-components";
import { Timer, TrendingDown, ShieldCheck, ArrowRight } from "lucide-react";
import Animated from "../common/Animated";

const baasFeatures = [
  {
    id: 1,
    icon: <Timer size={24} />,
    highlight: "< 3 Minutes",
    title: "Instant Battery Swap",
    description:
      "Replace your depleted battery at partner swap stations in seconds.",
  },
  {
    id: 2,
    icon: <TrendingDown size={24} />,
    highlight: "Up to 40% Lower",
    title: "Reduced Initial Investment",
    description:
      "Buy the scooter. Subscribe to the battery. Lower ownership barrier.",
  },
  {
    id: 3,
    icon: <ShieldCheck size={24} />,
    highlight: "Always High-Health",
    title: "No Degradation Worries",
    description:
      "Access our newest, highest-performance battery packs through subscription.",
  },
];

const BaaSSection = () => {
  return (
    <Section id="baas-teaser">
      <Container>
        <SplitLayout>
          {/* --- Left Column: Content & CTA --- */}
          <ContentColumn>
            <Animated animation="fadeInLeft" duration={0.6}>
              <MainHeadline>Zero Wait Time. Zero Degradation.</MainHeadline>
              <Subheading>
                Swap in seconds. Subscribe smartly. Always power your ride with
                the latest, healthiest battery packs.
              </Subheading>
              <IntroText>
                Our Battery-as-a-Service model eliminates charging delays and
                reduces upfront costs, giving you uninterrupted mobility without
                ownership stress.
              </IntroText>

              <CTAWrapper>
                <CTAButton href="/products/battery-swapping">
                  Learn About BaaS <ArrowRight size={20} />
                </CTAButton>
                <CTASubtext>
                  Explore subscription plans and partner swap stations.
                </CTASubtext>
              </CTAWrapper>
            </Animated>
          </ContentColumn>

          {/* --- Right Column: Feature Rows --- */}
          <FeaturesColumn>
            {baasFeatures.map((feature, index) => (
              <Animated
                key={feature.id}
                animation="fadeInRight"
                delay={index * 0.15}
                duration={0.5}
              >
                <FeatureRow>
                  <IconContainer>{feature.icon}</IconContainer>
                  <FeatureContent>
                    <HighlightStat>{feature.highlight}</HighlightStat>
                    <FeatureTitle>{feature.title}</FeatureTitle>
                    <FeatureDescription>
                      {feature.description}
                    </FeatureDescription>
                  </FeatureContent>
                </FeatureRow>
              </Animated>
            ))}
          </FeaturesColumn>
        </SplitLayout>
      </Container>
    </Section>
  );
};

export default BaaSSection;

// --- STYLED COMPONENTS ---

const Section = styled.section`
  padding: 120px 0;
  background: linear-gradient(
    180deg,
    var(--color-bg-secondary) 0%,
    var(--color-bg) 100%
  );
  border-top: 1px solid var(--color-border-light);
  border-bottom: 1px solid var(--color-border-light);

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const Container = styled.div`
  max-width: 1100px; /* Slightly narrower for a compact, clean read */
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const SplitLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

// --- Left Column Styles ---
const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 992px) {
    text-align: left;
  }
`;

const MainHeadline = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  color: var(--color-text);
  line-height: 1.1;
  margin-bottom: 1rem;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const Subheading = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin-bottom: 1.25rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const IntroText = styled.p`
  font-size: 1.05rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 90%;

  @media (max-width: 992px) {
    max-width: 100%;
    margin-bottom: 2rem;
  }
`;

// --- CTA Styles ---
const CTAWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;

  @media (max-width: 992px) {
    /* Push CTA below the features grid on tablet/mobile by changing the order of the entire container */
    order: 3;
    width: 100%;
    margin-top: 1rem;
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
  transition: all 0.2s ease;
  box-shadow: 0 4px 15px rgba(0, 200, 81, 0.2);

  &:hover {
    background: var(--color-primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 200, 81, 0.3);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CTASubtext = styled.span`
  font-size: 0.85rem;
  color: var(--color-text-muted);
  font-weight: 500;
  padding-left: 1rem;

  @media (max-width: 768px) {
    padding-left: 0;
    text-align: center;
    width: 100%;
  }
`;

// --- Right Column Styles ---
const FeaturesColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 992px) {
    order: 2;
  }
`;

const FeatureRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 1.5rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border-light);
  border-radius: 16px;
  transition: all 0.2s ease;

  /* Subtle hover interaction on desktop */
  @media (min-width: 1025px) {
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
      border-color: var(--color-border);
    }
  }

  @media (max-width: 768px) {
    padding: 1.25rem;
    gap: 1rem;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  background: var(--color-surface-secondary);
  color: var(--color-primary);
  border-radius: 12px;
  flex-shrink: 0;
`;

const FeatureContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const HighlightStat = styled.span`
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--color-primary);
  letter-spacing: -0.3px;
`;

const FeatureTitle = styled.h4`
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0;
`;

const FeatureDescription = styled.p`
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin: 0;
`;
