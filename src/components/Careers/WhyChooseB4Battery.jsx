import styled from "styled-components";
import { Compass, Lightbulb, Heart } from "lucide-react";
import Animated from "../common/Animated";

const WhyChooseB4Battery = () => {
  const reasons = [
    {
      title: "Endless Exploration",
      description:
        "Step into a world where job titles are just the beginning. At B4Battery, you're not confined by your job profile. Embrace the freedom to explore new paths, learn continuously, and challenge the status quo. Your journey with us is limited only by your imagination.",
      icon: <Compass size={32} />,
    },
    {
      title: "Crafting Future's Narrative",
      description:
        "Rewrite the future with us. We're not just about existing in the present; we're about shaping the future. Embrace the opportunity to pioneer innovative solutions, disrupt industries, and leave a lasting impact on the world. Together, let's redefine what's possible.",
      icon: <Lightbulb size={32} />,
    },
    {
      title: "Life Unbounded",
      description:
        "Life extends beyond the confines of a desk. We understand that your well-being matters, which is why we offer flexibility that promotes a healthy work-life balance. Whether it's remote work options, flexible hours, or wellness programs, we prioritize your holistic growth and happiness.",
      icon: <Heart size={32} />,
    },
  ];

  return (
    <Section>
      <Container>
        <Animated animation="fadeIn" duration={0.8}>
          <SectionTitle>Why Choose B4Battery</SectionTitle>
          <SectionSubtitle>
            Discover what makes B4Battery an exceptional place to build your
            career
          </SectionSubtitle>
        </Animated>

        <ReasonsGrid>
          {reasons.map((reason, index) => (
            <Animated
              key={reason.title}
              animation="fadeInScale"
              delay={index * 0.15}
            >
              <ReasonCard>
                <IconWrapper>{reason.icon}</IconWrapper>
                <ReasonTitle>{reason.title}</ReasonTitle>
                <ReasonDescription>{reason.description}</ReasonDescription>
              </ReasonCard>
            </Animated>
          ))}
        </ReasonsGrid>
      </Container>
    </Section>
  );
};

export default WhyChooseB4Battery;

// Styled Components
const Section = styled.section`
  padding: 5rem 2rem;
  background: var(--color-bg-secondary);
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
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }
`;

const ReasonsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ReasonCard = styled.div`
  background: var(--color-surface);
  padding: 2.5rem 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--color-border-light);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 25px rgba(0, 200, 81, 0.15);
    border-color: var(--color-primary);
  }
`;

const IconWrapper = styled.div`
  color: var(--color-primary);
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
`;

const ReasonTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 1rem;
  line-height: 1.3;
`;

const ReasonDescription = styled.p`
  color: var(--color-text-secondary);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
`;
