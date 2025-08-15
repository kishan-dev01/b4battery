import styled from "styled-components";
import Animated from "../common/Animated";

const GetToKnowUs = () => {
  return (
    <Section>
      <Container>
        <Animated animation="fadeIn" duration={0.8}>
          <SectionTitle>Get to Know Us</SectionTitle>
          <Description>
            At B4Battery, we're passionate about powering a sustainable future
            through innovative battery solutions. With years of expertise in
            energy storage technology, we deliver reliable, high-performance
            batteries that keep your world moving. From three-wheelers to home
            inverters, we're committed to providing clean energy solutions that
            make a difference.
          </Description>

          <Animated animation="slideUp" delay={0.3}>
            <LearnMoreButton>Learn More About Us</LearnMoreButton>
          </Animated>
        </Animated>
      </Container>
    </Section>
  );
};

export default GetToKnowUs;

// Styled Components
const Section = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(
    135deg,
    var(--color-bg) 0%,
    var(--color-bg-secondary) 100%
  );
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
      var(--color-primary) 0%,
      transparent 50%
    );
    opacity: 0.03;
    z-index: 0;
  }

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 2rem;
  color: var(--color-primary);

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.25rem;
  line-height: 1.7;
  color: var(--color-text-secondary);
  margin-bottom: 3rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.125rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const LearnMoreButton = styled.button`
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-primary-dark) 100%
  );
  color: white;
  font-weight: 600;
  font-size: 1.125rem;
  padding: 1rem 3rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 200, 81, 0.3);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 200, 81, 0.4);
  }

  &:hover::before {
    left: 100%;
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0.875rem 2.5rem;
  }
`;
