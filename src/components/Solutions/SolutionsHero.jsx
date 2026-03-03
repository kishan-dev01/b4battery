import React from "react";
import styled from "styled-components";
import { ArrowRight, MessageSquare } from "lucide-react";
import Animated from "../common/Animated";

const SolutionsHero = () => {
  return (
    <HeroSection id="solutions-hero">
      <HeroBackground />
      <HeroOverlay />

      <Container>
        <ContentWrapper>
          <Animated animation="fadeInDown" duration={0.6}>
            <Eyebrow>INDUSTRY SOLUTIONS</Eyebrow>
            <MainHeadline>
              Powering Critical Industries with Intelligent Energy Systems
            </MainHeadline>
          </Animated>

          <Animated animation="fadeIn" delay={0.2} duration={0.6}>
            <Subheading>
              From logistics and warehousing to agriculture, UAV, residential,
              and commercial infrastructure — our advanced battery and solar
              technologies are engineered for real-world performance.
            </Subheading>
          </Animated>

          <Animated animation="fadeInUp" delay={0.4} duration={0.6}>
            <ActionGroup>
              <PrimaryButton href="#industries-grid">
                Explore Industry Solutions <ArrowRight size={20} />
              </PrimaryButton>
              <SecondaryButton href="/contact-us">
                <MessageSquare size={20} /> Talk to Our Solutions Team
              </SecondaryButton>
            </ActionGroup>
          </Animated>
        </ContentWrapper>
      </Container>
    </HeroSection>
  );
};

export default SolutionsHero;

// --- STYLED COMPONENTS ---

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  padding: 140px 0 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 90px 0 80px;
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  /* High-quality industrial/logistics background image */
  background: url("/images/product6.jpeg") center/cover no-repeat;
  z-index: 0;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  /* 65% dark overlay with a slight gradient for depth and text readability */
  background: linear-gradient(
    to bottom,
    rgba(17, 24, 39, 0.75) 0%,
    rgba(17, 24, 39, 0.6) 100%
  );
  z-index: 1;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 2;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    /* Ensures the text stays centered but fills the mobile screen nicely */
    width: 100%;
  }
`;

const Eyebrow = styled.span`
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--color-primary);
  margin-bottom: 1.25rem;
  background: rgba(0, 200, 81, 0.15);
  backdrop-filter: blur(4px);
  padding: 0.4rem 1rem;
  border-radius: 50px;
  border: 1px solid rgba(0, 200, 81, 0.3);
`;

const MainHeadline = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.15;
  color: #ffffff;
  margin: 0 0 1.5rem 0;
  letter-spacing: -1px;
  max-width: 850px;

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.25rem;
    line-height: 1.2;
    margin-bottom: 1.25rem;
  }
`;

const Subheading = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  max-width: 750px;
  margin: 0 0 2.5rem 0;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.05rem;
    margin-bottom: 2rem;
  }
`;

const ActionGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background: var(--color-primary);
  color: #000000; /* High contrast text for the brand green */
  padding: 1.1rem 2.25rem;
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

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(4px);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 1.1rem 2.25rem;
  border-radius: 50px;
  font-size: 1.05rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: #ffffff;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
