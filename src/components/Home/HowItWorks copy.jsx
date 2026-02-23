import styled from "styled-components";
import { CheckSquare, Wrench, RefreshCcw, Repeat } from "lucide-react";
import Animated from "../common/Animated";

const HowItWorks = () => {
  const steps = [
    {
      title: "Evaluate",
      icon: <CheckSquare size={48} />,
      description: "OEM Standards",
      detail:
        "Comprehensive battery assessment using industry-standard protocols",
    },
    {
      title: "Underwrite",
      icon: <Wrench size={48} />,
      description: "Battery Life",
      detail: "Detailed analysis of remaining capacity and performance metrics",
    },
    {
      title: "Refurbish",
      icon: <RefreshCcw size={48} />,
      description: "Ground Ops",
      detail: "Professional restoration and quality enhancement processes",
    },
    {
      title: "Re-deploy",
      icon: <Repeat size={48} />,
      description: "Ground Ops",
      detail: "Strategic redistribution to maximize battery lifecycle value",
    },
  ];

  return (
    <Section>
      <Container>
        <Animated animation="fadeIn" duration={0.8}>
          <SectionTitle>How B4Battery Works</SectionTitle>
          <Subtitle>
            Our proven 4-step process ensures maximum battery performance and
            lifecycle
          </Subtitle>
        </Animated>

        <StepsContainer>
          {steps.map((step, index) => (
            <Animated
              key={step.title}
              animation="fadeInScale"
              delay={index * 0.15}
            >
              <StepCard>
                <IconCircle>{step.icon}</IconCircle>

                <StepNumber>{index + 1}</StepNumber>

                <StepTitle>{step.title}</StepTitle>

                <CategoryBadge>{step.description}</CategoryBadge>

                <StepDetail>{step.detail}</StepDetail>

                {index < steps.length - 1 && <ConnectorLine />}
              </StepCard>
            </Animated>
          ))}
        </StepsContainer>
      </Container>
    </Section>
  );
};

export default HowItWorks;

// Styled Components
const Section = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(
    135deg,
    var(--color-bg-secondary) 0%,
    var(--color-bg) 100%
  );
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="2" fill="currentColor" opacity="0.1"/></svg>')
      repeat;
    background-size: 50px 50px;
    opacity: 0.3;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  color: var(--color-primary);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  text-align: center;
  color: var(--color-text-secondary);
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.125rem;
    margin-bottom: 3rem;
  }
`;

const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  position: relative;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const StepCard = styled.div`
  background: var(--color-surface);
  padding: 2.5rem 2rem;
  border-radius: 20px;
  text-align: center;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--color-border-light);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 30px rgba(0, 200, 81, 0.15);
    border-color: var(--color-primary);
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const IconCircle = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-primary-dark) 100%
  );
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  position: relative;
  box-shadow: 0 4px 15px rgba(0, 200, 81, 0.3);

  svg {
    color: white;
  }

  &::after {
    content: "";
    position: absolute;
    inset: -4px;
    border: 2px solid var(--color-primary);
    border-radius: 50%;
    opacity: 0;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.5;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.3;
    }
    100% {
      transform: scale(1.2);
      opacity: 0;
    }
  }
`;

const StepNumber = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 32px;
  height: 32px;
  background: var(--color-accent);
  color: var(--color-text);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  box-shadow: 0 2px 8px rgba(255, 214, 0, 0.4);
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.75rem;
`;

const CategoryBadge = styled.span`
  background: var(--color-primary);
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 1rem;
`;

const StepDetail = styled.p`
  color: var(--color-text-secondary);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
`;

const ConnectorLine = styled.div`
  position: absolute;
  top: 50%;
  right: -1.5rem;
  width: 3rem;
  height: 2px;
  background: linear-gradient(90deg, var(--color-primary), transparent);
  transform: translateY(-50%);

  @media (max-width: 768px) {
    display: none;
  }
`;
