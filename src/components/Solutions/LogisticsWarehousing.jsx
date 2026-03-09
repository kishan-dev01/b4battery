import React from "react";
import styled from "styled-components";
import { CheckCircle2, Cpu, Wrench, AlertCircle } from "lucide-react";
import Animated from "../common/Animated";

const LogisticsWarehousing = () => {
  return (
    <Section id="logistics-warehousing">
      <Container>
        {/* --- SECTION HEADER --- */}
        <HeaderArea>
          <Animated animation="fadeInDown" duration={0.6}>
            <Eyebrow>LOGISTICS & WAREHOUSING</Eyebrow>
            <MainHeading>
              Energy Systems Designed for High-Uptime Operations
            </MainHeading>
            <Subheading>
              From material handling equipment to facility maintenance systems,
              our lithium-powered solutions eliminate downtime and maximize
              operational efficiency.
            </Subheading>
          </Animated>
        </HeaderArea>

        <BlocksContainer>
          {/* --- BLOCK 1: E-FORKLIFT (Image Left, Content Right) --- */}
          <Animated animation="fadeInUp" delay={0.1} duration={0.6}>
            <SolutionBlock>
              <ImageSide $order={1}>
                <ImageWrapper>
                  <BlockImage
                    src="/images/product9.jpeg"
                    alt="Industrial Warehouse Forklift"
                    loading="lazy"
                  />
                </ImageWrapper>
              </ImageSide>

              <ContentSide $order={2}>
                <BlockTitle>E-Forklift Lithium Systems</BlockTitle>
                <IntroText>
                  Engineered to replace traditional lead-acid traction
                  batteries, our LiFePO4 forklift systems deliver higher
                  efficiency, faster charging, and zero maintenance.
                </IntroText>

                <ListTitle>Key Advantages</ListTitle>
                <AdvantagesList>
                  <li>
                    <CheckCircle2 size={18} className="icon" /> 3,500+ cycle
                    life
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="icon" /> 1.5–2.5 hour
                    full charge
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="icon" /> Opportunity
                    charging during shift breaks
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="icon" /> 95–98% energy
                    efficiency
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="icon" /> Zero watering or
                    acid maintenance
                  </li>
                </AdvantagesList>

                <SubBlock>
                  <SubBlockHeader>
                    <Cpu size={18} /> Smart Capabilities
                  </SubBlockHeader>
                  <SubBlockContent>
                    Microprocessor-based BMS • CAN / RS485 integration • IoT &
                    GPRS fleet monitoring • 4-sensor thermal protection
                  </SubBlockContent>
                </SubBlock>

                <ImpactLine>
                  <strong>Operational Impact:</strong> Multi-shift ready. One
                  battery runs 24/7 with short opportunity charges — eliminating
                  dedicated battery swap rooms.
                </ImpactLine>
              </ContentSide>
            </SolutionBlock>
          </Animated>

          {/* --- BLOCK 2: E-CLEANING MACHINE (Image Right, Content Left) --- */}
          <Animated animation="fadeInUp" delay={0.2} duration={0.6}>
            <SolutionBlock>
              {/* Note: $order={2} puts the image on the right on desktop */}
              <ImageSide $order={2}>
                <ImageWrapper>
                  <BlockImage
                    src="/images/product8.jpeg"
                    alt="Industrial Floor Scrubber Machine"
                    loading="lazy"
                  />
                </ImageWrapper>
              </ImageSide>

              <ContentSide $order={1}>
                <BlockTitle>E-Cleaning Machine Power Systems</BlockTitle>
                <IntroText>
                  Designed for industrial floor scrubbers, sweepers, and
                  automated cleaning systems requiring steady discharge and
                  extended runtime.
                </IntroText>

                <ListTitle>Key Advantages</ListTitle>
                <AdvantagesList>
                  <li>
                    <CheckCircle2 size={18} className="icon" /> Deep-cycle
                    optimized performance
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="icon" /> Extended runtime
                    per charge
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="icon" /> Rapid charging
                    support
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="icon" /> Maintenance-free
                    AGM & Lithium options
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="icon" />{" "}
                    Vibration-resistant casing
                  </li>
                </AdvantagesList>

                <SubBlock>
                  <SubBlockHeader>
                    <Wrench size={18} /> Technical Strength
                  </SubBlockHeader>
                  <SubBlockContent>
                    Optimized discharge curves • Integrated overcharge &
                    deep-discharge protection • Reinforced industrial-grade
                    housing • Universal BCI & DIN compatibility
                  </SubBlockContent>
                </SubBlock>

                <ImpactLine>
                  <strong>Operational Impact:</strong> Consistent voltage
                  delivery ensures cleaning equipment operates at full
                  performance until the task is complete.
                </ImpactLine>
              </ContentSide>
            </SolutionBlock>
          </Animated>
        </BlocksContainer>
      </Container>
    </Section>
  );
};

export default LogisticsWarehousing;

// --- STYLED COMPONENTS ---

const Section = styled.section`
  padding: 120px 0;
  background-color: var(--color-bg);
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
  gap: 80px; /* Space between the two big solution blocks */

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

// Using $order prop to easily flip left/right on desktop, then reset on mobile
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
  background: var(--color-surface-secondary);
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
  background: var(--color-surface-secondary);
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
