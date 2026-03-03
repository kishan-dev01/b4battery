import React from "react";
import styled from "styled-components";
import { CheckCircle2, ArrowRight, MessageSquare } from "lucide-react";
import Animated from "../common/Animated";

const commercialModules = [
  {
    id: "hkva-ups",
    title: "Hi-Capacity (HKVA) UPS Systems",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",
    intro:
      "Designed for luxury homes, commercial facilities, and small-to-medium enterprises requiring heavy-load support.",
    features: [
      "2kVA to 15kVA capacity range",
      "300% startup surge handling",
      "DSP-based intelligent voltage control",
      "Pure sine wave output",
      "Zero transfer time switching",
    ],
    impact:
      "Ensures uninterrupted operation for air conditioners, pumps, IT infrastructure, and critical business systems.",
  },
  {
    id: "industrial-solar",
    title: "Industrial-Grade Solar Installations",
    image:
      "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=80&w=1000&auto=format&fit=crop",
    intro:
      "Engineered for factories, warehouses, and commercial buildings seeking long-term energy savings and grid stability.",
    features: [
      "TOPCon & N-type high-efficiency panels",
      "Hybrid inverters with rapid MPPT",
      "LFP lithium storage integration",
      "BEE 2026 compliant inverters",
      "Bi-directional energy flow",
    ],
    impact:
      "Reduce peak tariff costs and increase long-term operational savings.",
  },
  {
    id: "fleet-batteries",
    title: "Lithium Fleet Energy Systems",
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1000&auto=format&fit=crop",
    intro:
      "High-cycle LiFePO4 batteries engineered for material handling equipment operating across multi-shift logistics environments.",
    features: [
      "3,500+ cycle life",
      "Opportunity charging",
      "IoT fleet monitoring",
      "95–98% energy efficiency",
      "Zero maintenance",
    ],
    impact: "Eliminate battery swapping rooms and maximize warehouse uptime.",
  },
];

const CommercialInfrastructure = () => {
  return (
    <Section id="commercial-infrastructure">
      <Container>
        {/* --- SECTION HEADER --- */}
        <HeaderArea>
          <Animated animation="fadeInDown" duration={0.6}>
            <Eyebrow>COMMERCIAL & INFRASTRUCTURE</Eyebrow>
            <MainHeading>
              Powering Businesses with Scalable Energy Architecture
            </MainHeading>
            <Subheading>
              From high-capacity UPS systems to industrial solar installations
              and warehouse fleet batteries, our commercial solutions ensure
              uninterrupted operations.
            </Subheading>
          </Animated>
        </HeaderArea>

        {/* --- 3-COLUMN ENTERPRISE MODULES --- */}
        <GridContainer>
          {commercialModules.map((module, index) => (
            <Animated
              key={module.id}
              animation="fadeInUp"
              delay={index * 0.15}
              duration={0.6}
            >
              <EnterpriseCard>
                <CardImageWrapper>
                  <img src={module.image} alt={module.title} loading="lazy" />
                  <ImageOverlay />
                </CardImageWrapper>

                <CardContent>
                  <CardTitle>{module.title}</CardTitle>
                  <CardIntro>{module.intro}</CardIntro>

                  <FeaturesList>
                    {module.features.map((feature, i) => (
                      <li key={i}>
                        <CheckCircle2 size={16} className="check-icon" />
                        {feature}
                      </li>
                    ))}
                  </FeaturesList>

                  <ImpactBox>
                    <strong>Business Impact:</strong> {module.impact}
                  </ImpactBox>
                </CardContent>
              </EnterpriseCard>
            </Animated>
          ))}
        </GridContainer>
      </Container>

      {/* --- FINAL PAGE CTA --- */}
      <CTABand>
        <Container>
          <Animated animation="slideUp" delay={0.3} duration={0.6}>
            <CTAWrapper>
              <CTAHeadline>Build Your Custom Energy Solution</CTAHeadline>
              <CTASubtext>
                Enterprise-ready energy architecture tailored to your industry.
              </CTASubtext>
              <CTAButton href="/contact-us">
                Speak to Our Solutions Team <MessageSquare size={20} />
              </CTAButton>
            </CTAWrapper>
          </Animated>
        </Container>
      </CTABand>
    </Section>
  );
};

export default CommercialInfrastructure;

// --- STYLED COMPONENTS ---

const Section = styled.section`
  padding-top: 120px;
  background-color: var(--color-bg);
  position: relative;

  @media (max-width: 768px) {
    padding-top: 80px;
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

// --- Header Styles ---
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
  background: rgba(0, 200, 81, 0.08);
  padding: 0.4rem 1rem;
  border-radius: 50px;
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

// --- Grid & Card Styles ---
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-bottom: 100px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
    margin-bottom: 80px;
  }
`;

const EnterpriseCard = styled.div`
  /* Darker/structural background for enterprise feel */
  background: var(--color-surface-secondary);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;

  @media (min-width: 1025px) {
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
      border-color: var(--color-border-light);
    }

    &:hover img {
      transform: scale(1.05);
    }
  }
`;

const CardImageWrapper = styled.div`
  width: 100%;
  height: 240px;
  position: relative;
  overflow: hidden;
  background: var(--color-surface);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  /* Subtle overlay to make it look industrial and premium */
  background: linear-gradient(
    to top,
    rgba(17, 24, 39, 0.4) 0%,
    transparent 100%
  );
`;

const CardContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--color-text);
  margin: 0 0 0.75rem 0;
  line-height: 1.3;
`;

const CardIntro = styled.p`
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex-grow: 1;

  li {
    display: flex;
    align-items: flex-start;
    gap: 0.6rem;
    font-size: 0.95rem;
    color: var(--color-text);
    font-weight: 500;
    line-height: 1.4;

    .check-icon {
      color: var(--color-primary);
      flex-shrink: 0;
      margin-top: 0.1rem;
    }
  }
`;

const ImpactBox = styled.div`
  background: var(--color-surface);
  border-left: 3px solid var(--color-primary);
  padding: 1rem 1.25rem;
  border-radius: 0 8px 8px 0;
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin-top: auto;
  border-top: 1px solid var(--color-border-light);
  border-right: 1px solid var(--color-border-light);
  border-bottom: 1px solid var(--color-border-light);

  strong {
    color: var(--color-text);
    display: block;
    margin-bottom: 0.25rem;
  }
`;

// --- Final Page CTA Band ---
const CTABand = styled.div`
  background: linear-gradient(
    135deg,
    var(--color-surface-secondary) 0%,
    var(--color-bg) 100%
  );
  border-top: 1px solid var(--color-border);
  padding: 80px 0;
  text-align: center;

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const CTAWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 700px;
  margin: 0 auto;
`;

const CTAHeadline = styled.h3`
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 0.75rem;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const CTASubtext = styled.p`
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  margin: 0 0 2rem 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: var(--color-primary);
  color: #000000;
  padding: 1.1rem 2.5rem;
  border-radius: 50px;
  font-size: 1.05rem;
  font-weight: 800;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 200, 81, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 200, 81, 0.4);
    background: var(--color-primary-light);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
