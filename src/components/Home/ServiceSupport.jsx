import React from "react";
import styled from "styled-components";
import { Bluetooth, Wrench, Headset, Download } from "lucide-react";
import Animated from "../common/Animated";

const ServiceSupport = () => {
  const supportFeatures = [
    {
      title: "B4 Remote Assistance",
      icon: <Bluetooth size={32} />,
      description:
        "Our Bluetooth-enabled batteries allow for remote diagnostics and repair — anywhere in India, within minutes. Fast. Efficient. Hassle-free.",
    },
    {
      title: "Hardware Failure Support",
      icon: <Wrench size={32} />,
      description:
        "With 100+ trained service engineers across the country, our on-ground support ensures your product is up and running in no time. Simply register your complaint, and we’ll take it from there.",
    },
    {
      title: "Toll-Free Support",
      icon: <Headset size={32} />,
      description:
        "Call us, register your complaint, and receive a unique token number to track your request. Reliable help is just a phone call away.",
      highlight: "1800-102-2139",
      link: "tel:18001022139",
    },
  ];

  return (
    <Section>
      <Container>
        <HeaderWrapper>
          <Animated animation="fadeInDown" duration={0.8}>
            <SectionTitle>Service Support</SectionTitle>
            <Subtitle>
              Comprehensive, nationwide assistance to keep your energy systems
              running seamlessly.
            </Subtitle>
          </Animated>
        </HeaderWrapper>

        <CardsGrid>
          {supportFeatures.map((feature, index) => (
            <Animated
              key={feature.title}
              animation="fadeInScale"
              delay={index * 0.15}
            >
              <SupportCard>
                <IconWrapper>{feature.icon}</IconWrapper>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>
                  {feature.description}
                  {feature.highlight && (
                    <HighlightLink href={feature.link}>
                      {feature.highlight}
                    </HighlightLink>
                  )}
                </CardDescription>
              </SupportCard>
            </Animated>
          ))}
        </CardsGrid>

        <Animated animation="slideUp" delay={0.5} duration={0.6}>
          <CTAWrapper>
            <DownloadButton href="/assets/NEPL-Service-Policy.pdf" download>
              <Download size={20} />
              Download B4 Big Battery Service Policy
            </DownloadButton>
          </CTAWrapper>
        </Animated>
      </Container>
    </Section>
  );
};

export default ServiceSupport;

// Styled Components

const Section = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(
    135deg,
    var(--color-bg-secondary) 0%,
    var(--color-bg) 100%
  );
  position: relative;
  overflow: hidden;

  /* Subtle top border for visual separation from previous sections */
  border-top: 1px solid var(--color-border-light);

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const HeaderWrapper = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.15rem;
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const SupportCard = styled.div`
  background: var(--color-surface);
  padding: 2.5rem 2rem;
  border-radius: 24px;
  border: 1px solid var(--color-border-light);
  box-shadow: var(--shadow-sm);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all var(--transition-medium);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 200, 81, 0.1);
    border-color: var(--color-primary-light);
  }
`;

const IconWrapper = styled.div`
  width: 72px;
  height: 72px;
  background: var(--color-surface-secondary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
  transition: all var(--transition-medium);

  ${SupportCard}:hover & {
    background: var(--color-primary);
    color: white;
    transform: scale(1.1);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  color: var(--color-text-secondary);
  line-height: 1.6;
  font-size: 1rem;
  margin: 0;
  flex-grow: 1;
`;

const HighlightLink = styled.a`
  display: block;
  margin-top: 1rem;
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--color-primary);
  text-decoration: none;
  transition: color var(--transition-fast);

  &:hover {
    color: var(--color-primary-dark);
  }
`;

const CTAWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-primary-dark) 100%
  );
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.125rem;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(0, 200, 81, 0.3);
  transition: all var(--transition-medium);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 200, 81, 0.4);
    color: white;
  }

  /* Disable mobile tap highlight */
  -webkit-tap-highlight-color: transparent;
`;
