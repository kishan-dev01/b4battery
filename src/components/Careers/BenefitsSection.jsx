import styled from "styled-components";
import { UserCheck, Heart, Gift, Users, Lightbulb, Award } from "lucide-react";
import Animated from "../common/Animated";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Mentorship Matchup",
      icon: <UserCheck size={32} />,
    },
    {
      title: "Wellness Hub",
      icon: <Heart size={32} />,
    },
    {
      title: "Reward Recognition",
      icon: <Gift size={32} />,
    },
    {
      title: "Community Connect",
      icon: <Users size={32} />,
    },
    {
      title: "Team Think Tanks",
      icon: <Lightbulb size={32} />,
    },
    {
      title: "Certification",
      icon: <Award size={32} />,
    },
  ];

  return (
    <Section>
      <Container>
        <Animated animation="fadeIn" duration={0.8}>
          <SectionTitle>Employee Benefits</SectionTitle>
          <SectionSubtitle>
            Comprehensive benefits designed to support your growth and
            well-being
          </SectionSubtitle>
        </Animated>

        <BenefitsGrid>
          {benefits.map((benefit, index) => (
            <Animated
              key={benefit.title}
              animation="fadeInScale"
              delay={index * 0.1}
            >
              <BenefitCard>
                <IconWrapper>{benefit.icon}</IconWrapper>
                <BenefitTitle>{benefit.title}</BenefitTitle>
              </BenefitCard>
            </Animated>
          ))}
        </BenefitsGrid>
      </Container>
    </Section>
  );
};

export default BenefitsSection;

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
      circle at 70% 30%,
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
  max-width: 1000px;
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
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const BenefitCard = styled.div`
  background: var(--color-surface);
  padding: 2rem 1.5rem;
  border-radius: 16px;
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
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
`;

const BenefitTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0;
  line-height: 1.3;
`;
