import styled from "styled-components";
import { Users, Zap, ArrowRight } from "lucide-react";
import Animated from "../common/Animated";

const CareersHero = () => {
  return (
    <Section>
      <Container>
        <Animated animation="fadeIn" duration={0.8}>
          <SectionTitle>Careers at B4Battery</SectionTitle>
          <SectionSubtitle>
            Join a team that is powering the future of clean energy innovation
          </SectionSubtitle>
          <Description>
            Explore exciting opportunities to contribute, grow, and make a
            difference in the energy sector. We are looking for passionate,
            creative, and driven individuals ready to shape tomorrow's
            sustainable solutions.
          </Description>
        </Animated>

        <Animated animation="slideUp" delay={0.3}>
          <ActionButtons>
            <PrimaryButton>
              View Open Positions
              <ArrowRight size={18} />
            </PrimaryButton>
            <SecondaryButton>Contact HR</SecondaryButton>
          </ActionButtons>
        </Animated>

        <Animated animation="fadeIn" delay={0.5}>
          <StatsContainer>
            <StatItem>
              <Users size={24} />
              <StatNumber>50+</StatNumber>
              <StatLabel>Team Members</StatLabel>
            </StatItem>
            <StatItem>
              <Zap size={24} />
              <StatNumber>5+</StatNumber>
              <StatLabel>Years Innovation</StatLabel>
            </StatItem>
            <StatItem>
              <Users size={24} />
              <StatNumber>15+</StatNumber>
              <StatLabel>Open Positions</StatLabel>
            </StatItem>
          </StatsContainer>
        </Animated>
      </Container>
    </Section>
  );
};

export default CareersHero;

// Styled Components
const Section = styled.section`
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-primary-dark) 100%
  );
  padding: 8rem 2rem 6rem;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 30% 70%,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 50%
    );
    z-index: 0;
  }

  @media (max-width: 768px) {
    padding: 6rem 1.5rem 4rem;
  }
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

const SectionSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  opacity: 0.9;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 4rem;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled.button`
  background: white;
  color: var(--color-primary);
  font-weight: 700;
  font-size: 1.125rem;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 255, 255, 0.3);
  }

  &:hover svg {
    transform: translateX(3px);
  }

  @media (max-width: 480px) {
    width: 280px;
    justify-content: center;
  }
`;

const SecondaryButton = styled.button`
  background: transparent;
  color: white;
  font-weight: 600;
  font-size: 1.125rem;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  border: 2px solid rgba(255, 255, 255, 0.8);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: white;
    color: var(--color-primary);
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    width: 280px;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  svg {
    opacity: 0.8;
  }
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 800;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  opacity: 0.8;
  font-weight: 500;
`;
