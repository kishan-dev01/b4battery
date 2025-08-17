import styled from "styled-components";
import { BarChart3, Users, Target } from "lucide-react";
import Animated from "./common/Animated";

const ServicesSection = () => {
  const services = [
    {
      title: "Economic Empowerment",
      description:
        "Unlock local economic potential with our Village Level Entrepreneur (VLE) network. Generate 100+ job opportunities in each city, fostering community growth.",
      icon: <BarChart3 size={32} />,
    },
    {
      title: "Community Impact",
      description:
        "Our mission revolves around promoting entrepreneurship to uplift communities, fostering innovation, and driving economic growth. Encouraging self-reliance and sustainable economic practices.",
      icon: <Users size={32} />,
    },
    {
      title: "Inclusive Growth",
      description:
        "Our VLE network is open to individuals from diverse backgrounds and skill sets. Inclusivity is at the core of our mission, ensuring equal opportunities for all.",
      icon: <Target size={32} />,
    },
  ];

  return (
    <Section>
      <Container>
        <Animated animation="fadeIn" duration={0.8}>
          <SectionTitle>Our Services</SectionTitle>
          <SectionSubtitle>
            Empowering communities through entrepreneurship and sustainable
            economic growth
          </SectionSubtitle>
        </Animated>

        <ServicesGrid>
          {services.map((service, index) => (
            <Animated
              key={service.title}
              animation="fadeInScale"
              delay={index * 0.15}
            >
              <ServiceCard>
                <IconWrapper>{service.icon}</IconWrapper>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceCard>
            </Animated>
          ))}
        </ServicesGrid>
      </Container>
    </Section>
  );
};

export default ServicesSection;

// Styled Components
const Section = styled.section`
  padding: 5rem 2rem;
  background: var(--color-bg);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 30% 70%,
      var(--color-primary) 0%,
      transparent 50%
    );
    opacity: 0.03;
  }

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  font-size: 2.75rem;
  font-weight: 800;
  text-align: center;
  color: var(--color-primary);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: var(--color-text-secondary);
  margin-bottom: 3.5rem;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background: var(--color-surface);
  border-radius: 16px;
  padding: 2rem 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--color-border-light);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 200, 81, 0.15);
    border-color: var(--color-primary);
  }
`;

const IconWrapper = styled.div`
  color: var(--color-primary);
  margin-bottom: 1.25rem;
  display: flex;
  justify-content: center;
`;

const ServiceTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 1rem;
  line-height: 1.3;
`;

const ServiceDescription = styled.p`
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;
`;
