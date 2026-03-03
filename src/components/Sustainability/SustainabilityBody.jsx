import React from "react";
import styled from "styled-components";
import {
  ShieldCheck,
  Leaf,
  BatteryMedium,
  RefreshCw,
  ArrowRight,
  MessageSquare,
  CheckCircle2,
  Recycle,
  Layers,
} from "lucide-react";
import Animated from "../common/Animated";

const SustainabilityBody = () => {
  return (
    <PageWrapper>
      {/* =========================================
          SECTION 1: SUSTAINABLE SOURCING
      ========================================= */}
      <SourcingSection id="sourcing">
        <Container>
          <SplitGrid>
            {/* Left: Content */}
            <ContentColumn>
              <Animated animation="fadeInDown" duration={0.6}>
                <Eyebrow>SUSTAINABLE SOURCING</Eyebrow>
                <SectionHeading>
                  Responsible Materials. Accountable Supply Chains.
                </SectionHeading>
                <IntroParagraph>
                  We prioritize ethically sourced raw materials and continuously
                  optimize our chemistry portfolio to reduce environmental
                  impact and supply chain dependency.
                </IntroParagraph>
              </Animated>

              <BlocksList>
                <Animated animation="fadeInUp" delay={0.2} duration={0.5}>
                  <StructuredBlock>
                    <BlockHeader>
                      <ShieldCheck size={20} className="icon" /> Ethical Mining
                    </BlockHeader>
                    <BlockDetails>
                      Transparent sourcing practices • Supply chain
                      accountability • Reduced environmental disruption
                    </BlockDetails>
                  </StructuredBlock>
                </Animated>

                <Animated animation="fadeInUp" delay={0.3} duration={0.5}>
                  <StructuredBlock>
                    <BlockHeader>
                      <Leaf size={20} className="icon" /> Cobalt Reduction
                    </BlockHeader>
                    <BlockDetails>
                      Active reduction of cobalt-intensive chemistries •
                      Transition toward safer alternatives • Lower environmental
                      and geopolitical dependency
                    </BlockDetails>
                  </StructuredBlock>
                </Animated>

                <Animated animation="fadeInUp" delay={0.4} duration={0.5}>
                  <StructuredBlock className="no-border">
                    <BlockHeader>
                      <BatteryMedium size={20} className="icon" /> LFP
                      Transition
                    </BlockHeader>
                    <BlockDetails>
                      Shift to Lithium Iron Phosphate (LFP) • Cobalt-free
                      formulation • Higher thermal stability • Long lifecycle
                      performance
                    </BlockDetails>
                  </StructuredBlock>
                </Animated>
              </BlocksList>
            </ContentColumn>

            {/* Right: Abstract Visual */}
            <VisualColumn>
              <Animated animation="fadeIn" delay={0.4} duration={0.8}>
                <AbstractVisual>
                  <div className="glow-orb primary"></div>
                  <div className="glow-orb secondary"></div>
                  <GlassPanel>
                    <Recycle
                      size={48}
                      strokeWidth={1}
                      className="center-icon"
                    />
                    <div className="visual-label">
                      Material Lifecycle Optimization
                    </div>
                  </GlassPanel>
                </AbstractVisual>
              </Animated>
            </VisualColumn>
          </SplitGrid>
        </Container>
      </SourcingSection>

      {/* =========================================
          SECTION 2: CIRCULAR ECONOMY
      ========================================= */}
      <CircularSection id="circular-economy">
        {/* Subtle background graphic */}
        <CircularMotif>
          <div className="ring ring-1"></div>
          <div className="ring ring-2"></div>
        </CircularMotif>

        <Container>
          <HeaderCentered>
            <Animated animation="fadeInDown" duration={0.6}>
              <Eyebrow>CIRCULAR ECONOMY</Eyebrow>
              <SectionHeading>Extending Energy Beyond First Use</SectionHeading>
              <IntroParagraph className="centered">
                Our batteries are engineered for multi-stage lifecycle
                deployment — maximizing material utility and reducing waste.
              </IntroParagraph>
            </Animated>
          </HeaderCentered>

          <ProcessFlow>
            <ProcessLine />

            <Animated animation="fadeInUp" delay={0.2} duration={0.6}>
              <ProcessNode>
                <NodeDot />
                <NodeContent>
                  <NodeTitle>Second Life Program</NodeTitle>
                  <NodeDescription>
                    When EV batteries fall below 70–80% capacity, they are not
                    discarded. They are repurposed into stationary energy
                    systems.
                  </NodeDescription>
                </NodeContent>
              </ProcessNode>
            </Animated>

            <Animated animation="fadeInUp" delay={0.35} duration={0.6}>
              <ProcessNode>
                <NodeDot />
                <NodeContent>
                  <NodeTitle>Drone → Ground Power</NodeTitle>
                  <NodeDescription>
                    Aviation batteries below the 80% threshold are retired from
                    flight use and converted into ground-based power stations or
                    backup lighting.
                  </NodeDescription>
                </NodeContent>
              </ProcessNode>
            </Animated>

            <Animated animation="fadeInUp" delay={0.5} duration={0.6}>
              <ProcessNode>
                <NodeDot />
                <NodeContent>
                  <NodeTitle>EV → Solar Storage</NodeTitle>
                  <NodeDescription>
                    Mobility batteries are seamlessly integrated into
                    residential and rural solar storage ecosystems, ensuring
                    extended lifecycle usage.
                  </NodeDescription>
                </NodeContent>
              </ProcessNode>
            </Animated>
          </ProcessFlow>
        </Container>
      </CircularSection>

      {/* =========================================
          SECTION 3: EPR COMPLIANCE
      ========================================= */}
      <EprSection id="compliance">
        <Container>
          <EprGrid>
            {/* Left: Large Stat Highlight */}
            <Animated animation="fadeInRight" duration={0.6}>
              <StatBlock>
                <Eyebrow>EPR COMPLIANCE</Eyebrow>
                <StatHeading>Closed-Loop Material Recovery</StatHeading>

                <BigStat>
                  95<span>%</span>
                </BigStat>
                <StatLabel>Material Recovery Rate</StatLabel>

                <StatSubtext>
                  Fully compliant with Extended Producer Responsibility (EPR)
                  standards, ensuring accountability at the end of every
                  product's life.
                </StatSubtext>
              </StatBlock>
            </Animated>

            {/* Right: Structured Compliance Details */}
            <ComplianceDetails>
              <Animated animation="fadeInLeft" delay={0.2} duration={0.6}>
                <DetailBox>
                  <DetailHeader>
                    <RefreshCw size={24} className="detail-icon" />
                    <h4>95% Recycling Pipeline</h4>
                  </DetailHeader>
                  <DetailList>
                    <li>
                      <CheckCircle2 size={16} className="check" /> High material
                      recovery rate
                    </li>
                    <li>
                      <CheckCircle2 size={16} className="check" /> Responsible
                      end-of-life processing
                    </li>
                    <li>
                      <CheckCircle2 size={16} className="check" /> Resource
                      re-entry into supply chain
                    </li>
                  </DetailList>
                </DetailBox>
              </Animated>

              <Animated animation="fadeInLeft" delay={0.35} duration={0.6}>
                <DetailBox>
                  <DetailHeader>
                    <Layers size={24} className="detail-icon" />
                    <h4>Zero-Waste Lifecycle</h4>
                  </DetailHeader>
                  <DetailList>
                    <li>
                      <CheckCircle2 size={16} className="check" /> Engineered
                      for recyclability
                    </li>
                    <li>
                      <CheckCircle2 size={16} className="check" /> Modular
                      design supports disassembly
                    </li>
                    <li>
                      <CheckCircle2 size={16} className="check" /> Reduced
                      landfill contribution
                    </li>
                  </DetailList>
                </DetailBox>
              </Animated>
            </ComplianceDetails>
          </EprGrid>
        </Container>
      </EprSection>

      {/* =========================================
          FINAL PAGE CTA
      ========================================= */}
      <CtaSection>
        <Container>
          <Animated animation="slideUp" duration={0.6}>
            <CtaWrapper>
              <CtaHeading>Building the Future of Circular Energy</CtaHeading>
              <CtaSubtext>
                Innovation and responsibility engineered into every battery
                lifecycle.
              </CtaSubtext>
              <ActionGroup>
                <PrimaryButton href="/solutions">
                  Explore Our Solutions <ArrowRight size={20} />
                </PrimaryButton>
                <SecondaryButton href="/contact-us">
                  Contact Sustainability Team <MessageSquare size={20} />
                </SecondaryButton>
              </ActionGroup>
            </CtaWrapper>
          </Animated>
        </Container>
      </CtaSection>
    </PageWrapper>
  );
};

export default SustainabilityBody;

// --- GLOBAL STYLED COMPONENTS ---

const PageWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Eyebrow = styled.span`
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--color-primary);
  margin-bottom: 1rem;
  display: inline-block;
`;

const SectionHeading = styled.h2`
  font-size: 2.75rem;
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 1.25rem;
  line-height: 1.15;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const IntroParagraph = styled.p`
  font-size: 1.15rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0 0 2rem 0;
  max-width: 700px;

  &.centered {
    margin: 0 auto 3rem auto;
  }

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
`;

// --- SECTION 1: SOURCING ---

const SourcingSection = styled.section`
  padding: 140px 0;
  background-color: var(--color-bg);
  border-bottom: 1px solid var(--color-border-light);

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const SplitGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const BlocksList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const StructuredBlock = styled.div`
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--color-border-light);

  &.no-border {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const BlockHeader = styled.h4`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 0.75rem 0;

  .icon {
    color: var(--color-primary);
  }
`;

const BlockDetails = styled.p`
  font-size: 0.95rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin: 0;
  padding-left: 2.25rem; /* Aligns with text, skipping the icon */

  @media (max-width: 768px) {
    padding-left: 0;
    margin-top: 0.5rem;
  }
`;

const VisualColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 400px;
`;

const AbstractVisual = styled.div`
  position: relative;
  width: 100%;
  max-width: 450px;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  .glow-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(60px);
    opacity: 0.15;
    z-index: 0;
  }

  .primary {
    width: 300px;
    height: 300px;
    background: var(--color-primary);
    top: 10%;
    right: 10%;
  }

  .secondary {
    width: 250px;
    height: 250px;
    background: var(--color-text-muted);
    bottom: 10%;
    left: 10%;
  }
`;

const GlassPanel = styled.div`
  position: relative;
  z-index: 1;
  width: 280px;
  height: 280px;
  background: rgba(255, 255, 255, 0.03); /* Adjust for dark/light mode */
  border: 1px solid var(--color-border);
  border-radius: 50%;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);

  .center-icon {
    color: var(--color-primary);
    margin-bottom: 1rem;
    opacity: 0.8;
  }

  .visual-label {
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--color-text-secondary);
    text-align: center;
    max-width: 150px;
  }
`;

// --- SECTION 2: CIRCULAR ECONOMY ---

const CircularSection = styled.section`
  padding: 140px 0;
  background-color: var(--color-surface-secondary);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const CircularMotif = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  opacity: 0.03;

  .ring {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 2px solid var(--color-text);
  }

  .ring-1 {
    width: 600px;
    height: 600px;
  }
  .ring-2 {
    width: 1000px;
    height: 1000px;
  }
`;

const HeaderCentered = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

const ProcessFlow = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 48px;
    margin-top: 3rem;
  }
`;

const ProcessLine = styled.div`
  position: absolute;
  top: 24px; /* Aligns with the dots */
  left: 10%;
  right: 10%;
  height: 1px;
  background: var(--color-border);
  z-index: 0;

  @media (max-width: 900px) {
    top: 0;
    bottom: 0;
    left: 24px;
    width: 1px;
    height: 100%;
    right: auto;
  }
`;

const ProcessNode = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: var(--color-surface-secondary); /* Matches bg to mask line */
  padding: 0 1rem;

  @media (max-width: 900px) {
    flex-direction: row;
    align-items: flex-start;
    text-align: left;
    padding: 0;
  }
`;

const NodeDot = styled.div`
  width: 16px;
  height: 16px;
  background: var(--color-surface-secondary);
  border: 2px solid var(--color-primary);
  border-radius: 50%;
  margin-bottom: 1.5rem;
  margin-top: 16px; /* Alignment adjustment */
  box-shadow: 0 0 0 8px var(--color-surface-secondary); /* Masks the line behind it */

  @media (max-width: 900px) {
    margin-bottom: 0;
    margin-top: 6px;
    margin-right: 1.5rem;
    flex-shrink: 0;
  }
`;

const NodeContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const NodeTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 0.75rem 0;
`;

const NodeDescription = styled.p`
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;
`;

// --- SECTION 3: EPR COMPLIANCE ---

const EprSection = styled.section`
  padding: 140px 0;
  background-color: var(--color-bg);
  border-top: 1px solid var(--color-border-light);

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const EprGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

const StatBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 2rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const BigStat = styled.div`
  font-size: 7rem;
  font-weight: 800;
  color: var(--color-primary);
  line-height: 1;
  letter-spacing: -2px;
  margin-bottom: 0.5rem;
  font-family: var(
    --font-family-secondary
  ); /* Usually a sans or number-friendly font */

  span {
    font-size: 4rem;
    vertical-align: super;
  }

  @media (max-width: 768px) {
    font-size: 5rem;
    span {
      font-size: 3rem;
    }
  }
`;

const StatLabel = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 1rem;
`;

const StatSubtext = styled.p`
  font-size: 1.05rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;
  max-width: 400px;
`;

const ComplianceDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const DetailBox = styled.div`
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 2rem;
  background: var(--color-surface);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.03);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const DetailHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;

  .detail-icon {
    color: var(--color-text-muted);
  }

  h4 {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-text);
    margin: 0;
  }
`;

const DetailList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  li {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    font-size: 0.95rem;
    color: var(--color-text-secondary);
    line-height: 1.5;

    .check {
      color: var(--color-primary);
      flex-shrink: 0;
      margin-top: 0.15rem;
    }
  }
`;

// --- SECTION 4: FINAL PAGE CTA ---

const CtaSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(
    135deg,
    var(--color-surface-secondary) 0%,
    var(--color-bg) 100%
  );
  border-top: 1px solid var(--color-border);
  text-align: center;

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const CtaWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CtaHeading = styled.h3`
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const CtaSubtext = styled.p`
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  margin: 0 0 2.5rem 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ActionGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: var(--color-primary);
  color: #000000;
  padding: 1.1rem 2.5rem;
  border-radius: 50px;
  font-size: 1.05rem;
  font-weight: 800;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 200, 81, 0.2);
  width: auto;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 200, 81, 0.35);
    background: var(--color-primary-dark);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: transparent;
  color: var(--color-text);
  border: 1px solid var(--color-border);
  padding: 1.1rem 2.5rem;
  border-radius: 50px;
  font-size: 1.05rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  width: auto;

  &:hover {
    background: var(--color-surface-secondary);
    border-color: var(--color-text-muted);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
