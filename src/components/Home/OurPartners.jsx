import styled, { keyframes } from "styled-components";
import Animated from "../common/Animated";

const OurPartners = () => {
  const partnerLogos = [
    "/logos/partner1.png",
    "/logos/partner2.png",
    "/logos/partner3.png",
    "/logos/partner4.png",
    "/logos/partner5.png",
    "/logos/partner6.png",
    "/logos/partner7.png",
  ];

  return (
    <Section>
      <Container>
        <Animated animation="fadeIn" duration={0.8}>
          <SectionTitle>Our Partners</SectionTitle>
          <Description>
            We collaborate with industry-leading partners to deliver innovative
            battery solutions that power businesses and communities. Together,
            we're building a sustainable energy future.
          </Description>
        </Animated>

        <Animated animation="fadeIn" delay={0.3}>
          <LogoStripWrapper>
            <LogoStrip>
              <LogoStripContent>
                {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                  <LogoContainer key={index}>
                    <PartnerLogo
                      src={logo}
                      alt={`Partner ${(index % partnerLogos.length) + 1}`}
                    />
                  </LogoContainer>
                ))}
              </LogoStripContent>
            </LogoStrip>

            {/* Gradient overlays for smooth edges */}
            <LeftGradient />
            <RightGradient />
          </LogoStripWrapper>
        </Animated>
      </Container>
    </Section>
  );
};

export default OurPartners;

// Continuous scroll animation
const infiniteScroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

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
    background: radial-gradient(
      circle at 50% 50%,
      var(--color-primary) 0%,
      transparent 70%
    );
    opacity: 0.02;
    z-index: 0;
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

const Description = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  text-align: center;
  color: var(--color-text-secondary);
  margin-bottom: 4rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.125rem;
    margin-bottom: 3rem;
  }
`;

const LogoStripWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
  background: var(--color-surface);
  border: 1px solid var(--color-border-light);
  padding: 2rem 0;
  box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const LogoStrip = styled.div`
  width: 100%;
  /* overflow: hidden; */
  position: relative;
`;

const LogoStripContent = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  width: max-content;
  animation: ${infiniteScroll} 25s linear infinite;

  &:hover {
    animation-play-state: paused;
  }

  @media (max-width: 768px) {
    gap: 3rem;
    animation-duration: 20s;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  height: 80px;
  background: var(--color-bg);
  border-radius: 12px;
  padding: 1rem;
  border: 1px solid var(--color-border-light);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    border-color: var(--color-primary);
    box-shadow: 0 4px 15px rgba(0, 200, 81, 0.15);
  }

  @media (max-width: 768px) {
    min-width: 100px;
    height: 60px;
    padding: 0.75rem;
  }
`;

const PartnerLogo = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: grayscale(100%) brightness(0.8);
  opacity: 0.7;
  transition: all 0.3s ease;

  ${LogoContainer}:hover & {
    filter: grayscale(0%) brightness(1);
    opacity: 1;
  }
`;

const LeftGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100%;
  background: linear-gradient(
    to right,
    var(--color-surface) 0%,
    transparent 100%
  );
  pointer-events: none;
  z-index: 2;
`;

const RightGradient = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100%;
  background: linear-gradient(
    to left,
    var(--color-surface) 0%,
    transparent 100%
  );
  pointer-events: none;
  z-index: 2;
`;
