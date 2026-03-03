import React from "react";
import styled from "styled-components";
import { CheckCircle2, Cpu, Sprout } from "lucide-react";
import Animated from "../common/Animated";

const AgricultureSolutions = () => {
  return (
    <Section id="agriculture-solutions">
      <Container>
        {/* --- SECTION HEADER --- */}
        <HeaderArea>
          <Animated animation="fadeInDown" duration={0.6}>
            <Eyebrow>AGRICULTURE SOLUTIONS</Eyebrow>
            <MainHeading>
              Reliable Energy for Precision Farming & Rural Deployment
            </MainHeading>
            <Subheading>
              From high-performance UAV systems to independent off-grid solar
              storage, our solutions are engineered for remote, high-demand
              agricultural environments.
            </Subheading>
          </Animated>
        </HeaderArea>

        <BlocksContainer>
          {/* --- BLOCK 1: E-DRONE (Image Left, Content Right) --- */}
          <Animated animation="fadeInUp" delay={0.1} duration={0.6}>
            <SolutionBlock>
              <ImageSide $order={1}>
                <ImageWrapper>
                  <BlockImage
                    src="https://images.unsplash.com/photo-1563985040-02e09ae54fb7?q=80&w=1000&auto=format&fit=crop"
                    alt="Agricultural Drone Spraying Field"
                    loading="lazy"
                  />
                </ImageWrapper>
              </ImageSide>

              <ContentSide $order={2}>
                <BlockTitle>High-Performance UAV Battery Systems</BlockTitle>
                <IntroText>
                  Engineered for agricultural spraying, mapping, and surveying
                  drones, our aviation-grade battery systems deliver high
                  discharge performance and reliable altitude stability.
                </IntroText>

                <ListTitle>Core Capabilities</ListTitle>
                <AdvantagesList>
                  <li>
                    <CheckCircle2 size={18} className="icon" /> Up to 400 Wh/kg
                    (Semi-Solid State)
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="icon" /> 15C–30C
                    continuous discharge (High-C LiFePO4)
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="icon" /> Flight-aware
                    Smart BMS
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="icon" /> IP54 dust &
                    light rain protection
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="icon" /> Low-temperature
                    performance down to -20°C
                  </li>
                </AdvantagesList>

                <SubBlock>
                  <SubBlockHeader>
                    <Cpu size={18} /> Smart Intelligence
                  </SubBlockHeader>
                  <SubBlockContent>
                    Auto-storage mode (safe 60% voltage management) • Black box
                    flight logging • Anti-spark connectors (AS150 / XT90-S)
                  </SubBlockContent>
                </SubBlock>

                <ImpactLine>
                  <strong>Operational Impact:</strong> Maintains consistent lift
                  during heavy payload spraying and long-range mapping missions.
                </ImpactLine>
              </ContentSide>
            </SolutionBlock>
          </Animated>

          {/* --- BLOCK 2: SOLAR OFF-GRID (Image Right, Content Left) --- */}
          <Animated animation="fadeInUp" delay={0.2} duration={0.6}>
            <SolutionBlock>
              {/* Image on right for desktop */}
              <ImageSide $order={2}>
                <ImageWrapper>
                  <BlockImage
                    src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1000&auto=format&fit=crop"
                    alt="Off-grid Solar Farm Rural"
                    loading="lazy"
                  />
                </ImageWrapper>
              </ImageSide>

              <ContentSide $order={1}>
                <BlockTitle>Off-Grid Solar & Storage Solutions</BlockTitle>
                <IntroText>
                  Designed for farms, irrigation systems, and rural
                  installations where grid reliability is limited or
                  unavailable.
                </IntroText>

                <ListTitle>Core Components</ListTitle>
                <AdvantagesList>
                  <li>
                    <CheckCircle2 size={18} className="icon" /> TOPCon & N-Type
                    high-efficiency panels
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="icon" /> Hybrid inverters
                    with rapid MPPT
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="icon" /> LFP lithium
                    storage (10–15 year lifespan)
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="icon" /> 100% Depth of
                    Discharge capability
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="icon" /> AI-based battery
                    forecasting
                  </li>
                </AdvantagesList>

                <SubBlock>
                  <SubBlockHeader>
                    <Sprout size={18} /> Operational Benefits
                  </SubBlockHeader>
                  <SubBlockContent>
                    Reliable irrigation power • Backup during grid outages •
                    Peak-hour energy cost reduction • Energy independence in
                    remote areas
                  </SubBlockContent>
                </SubBlock>
              </ContentSide>
            </SolutionBlock>
          </Animated>
        </BlocksContainer>
      </Container>
    </Section>
  );
};

export default AgricultureSolutions;

// --- STYLED COMPONENTS ---

const Section = styled.section`
  padding: 120px 0;
  background-color: var(
    --color-bg-secondary
  ); /* Alternating background from previous section */
  position: relative;
  border-top: 1px solid var(--color-border-light);

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

// --- Header Styles ---
const HeaderArea = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 80px;

  @media (max-width: 768px) {
    text-align: left;
    margin-bottom: 50px;
  }
`;

const Eyebrow = styled.span`
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--color-primary);
  margin-bottom: 1.25rem;
  display: inline-block;
  background: rgba(0, 200, 81, 0.08);
  padding: 0.4rem 1rem;
  border-radius: 50px;
`;

const MainHeading = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 1.25rem;
  line-height: 1.15;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const Subheading = styled.p`
  font-size: 1.15rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
`;

// --- Layout & Blocks ---
const BlocksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;

  @media (max-width: 768px) {
    gap: 60px;
  }
`;

const SolutionBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const ImageSide = styled.div`
  order: ${(props) => props.$order};
  height: 100%;

  @media (max-width: 768px) {
    order: 1; /* Image always first on mobile */
  }
`;

const ContentSide = styled.div`
  order: ${(props) => props.$order};
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    order: 2; /* Content always second on mobile */
  }
`;

// --- Image Styles ---
const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 450px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
  background: var(--color-surface);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    min-height: 300px;
    border-radius: 16px;
  }
`;

const BlockImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

// --- Content Styles ---
const BlockTitle = styled.h3`
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-text);
  margin: 0 0 1rem 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const IntroText = styled.p`
  font-size: 1.05rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0 0 2rem 0;
`;

const ListTitle = styled.h4`
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--color-text-muted);
  margin: 0 0 1rem 0;
`;

const AdvantagesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  li {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    font-size: 1rem;
    color: var(--color-text);
    font-weight: 500;
    line-height: 1.4;

    .icon {
      color: var(--color-primary);
      flex-shrink: 0;
      margin-top: 0.1rem;
    }
  }
`;

const SubBlock = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border-light);
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  margin-bottom: 2rem;
`;

const SubBlockHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--color-text);
  margin-bottom: 0.5rem;

  svg {
    color: var(--color-text-muted);
  }
`;

const SubBlockContent = styled.div`
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
`;

const ImpactLine = styled.div`
  background: rgba(0, 200, 81, 0.05);
  border-left: 3px solid var(--color-primary);
  padding: 1.25rem;
  border-radius: 0 8px 8px 0;
  font-size: 0.95rem;
  color: var(--color-text);
  line-height: 1.6;

  strong {
    color: var(--color-primary-dark);
  }
`;
