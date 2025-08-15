import styled from "styled-components";
import Animated from "../common/Animated";
import { useTheme } from "../../context/ThemeContext";

const HeroSection = () => {
  const { theme } = useTheme();

  return (
    <Section>
      <Content>
        <Animated animation="slideLeft" duration={0.8}>
          <Title>
            Power Your Journey <br /> with <Highlight>B4Battery</Highlight>
          </Title>
        </Animated>

        <Animated animation="fadeIn" delay={0.3} duration={1}>
          <Description>
            Reliable, long-lasting batteries tailored to fuel your devices and
            vehicles. Experience unmatched energy efficiency and durability with
            B4Battery.
          </Description>
        </Animated>

        <Animated animation="slideUp" delay={0.6}>
          <CTAContainer>
            <CTAButton primary>Shop Now</CTAButton>
            <CTAButton secondary>Learn More</CTAButton>
          </CTAContainer>
        </Animated>

        <Animated animation="fadeIn" delay={0.9}>
          <Features>
            <Feature>
              <FeatureIcon>⚡</FeatureIcon>
              <FeatureText>High Performance</FeatureText>
            </Feature>
            <Feature>
              <FeatureIcon>🔋</FeatureIcon>
              <FeatureText>Long Lasting</FeatureText>
            </Feature>
            <Feature>
              <FeatureIcon>🌱</FeatureIcon>
              <FeatureText>Eco Friendly</FeatureText>
            </Feature>
          </Features>
        </Animated>
      </Content>

      <Animated animation="slideRight" duration={0.8} delay={0.2}>
        <ImageWrapper>
          {/* Replace with your actual image */}
          <img src="/hero.png" alt="B4Battery Products" />
        </ImageWrapper>
      </Animated>
    </Section>
  );
};

export default HeroSection;

// Styled Components

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6rem 3rem;
  background: linear-gradient(
    135deg,
    var(--color-bg) 0%,
    var(--color-bg-secondary) 100%
  );
  min-height: 80vh;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 200%;
    background: radial-gradient(
      circle,
      var(--color-primary-light) 0%,
      transparent 70%
    );
    opacity: 0.03;
    z-index: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 4rem 1rem;
    min-height: auto;
    text-align: center;
  }
`;

const Content = styled.div`
  flex: 1;
  max-width: 600px;
  z-index: 1;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 3rem;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: var(--color-text);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Highlight = styled.span`
  color: var(--color-primary);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(
      90deg,
      var(--color-primary) 0%,
      var(--color-accent) 100%
    );
    border-radius: 2px;
  }
`;

const Description = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin-bottom: 2.5rem;
  max-width: 500px;
`;

const CTAContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CTAButton = styled.button`
  font-weight: 600;
  font-size: 1rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  ${(props) =>
    props.primary
      ? `
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
    color: white;
    box-shadow: 0 4px 15px rgba(0, 200, 81, 0.3);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 200, 81, 0.4);
    }
  `
      : `
    background: transparent;
    color: var(--color-text);
    border: 2px solid var(--color-primary);
    
    &:hover {
      background: var(--color-primary);
      color: white;
      transform: translateY(-2px);
    }
  `}

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

  &:hover::before {
    left: 100%;
  }
`;

const Features = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 480px) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: var(--color-surface);
  border-radius: 25px;
  border: 1px solid var(--color-border-light);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
    border-color: var(--color-primary);
  }
`;

const FeatureIcon = styled.span`
  font-size: 1.2rem;
`;

const FeatureText = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-text-secondary);
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  z-index: 1;

  img {
    width: 100%;
    height: auto;
    max-height: 500px;
    object-fit: contain;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
