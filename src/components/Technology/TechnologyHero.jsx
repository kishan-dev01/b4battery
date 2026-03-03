import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Cpu,
  Cloud,
  BatteryCharging,
  Zap,
} from "lucide-react";
import Animated from "../common/Animated";

const microBadges = [
  "AI-Driven",
  "Cloud Connected",
  "2026 Compliant",
  "Lithium Advanced",
];

const TechnologyHero = () => {
  return (
    <HeroSection id="tech-hero">
      <BackgroundGrid />
      <GlowOverlay />

      <Container>
        <SplitLayout>
          {/* --- LEFT: CONTENT AREA (55%) --- */}
          <ContentArea>
            <Animated animation="fadeInDown" duration={0.6}>
              <Eyebrow>ADVANCED ENERGY ARCHITECTURE</Eyebrow>
              <MainHeadline>
                Engineering the Intelligence <br className="desktop-break" />
                Behind Modern Energy
              </MainHeadline>
            </Animated>

            <Animated animation="fadeIn" delay={0.2} duration={0.6}>
              <Subheading>
                From AI-powered Battery Management Systems to cloud-connected
                diagnostics and next-generation lithium chemistries, our
                technology platform transforms energy storage into a predictive,
                self-optimizing ecosystem.
              </Subheading>

              <BadgesContainer>
                {microBadges.map((badge, index) => (
                  <MicroBadge key={index}>
                    <Zap size={14} className="icon" /> {badge}
                  </MicroBadge>
                ))}
              </BadgesContainer>
            </Animated>

            <Animated animation="slideUp" delay={0.4} duration={0.6}>
              <ActionGroup>
                <PrimaryButton href="#tech-stack">
                  Explore Our Technology Stack <ArrowRight size={20} />
                </PrimaryButton>
                <SecondaryButton href="/assets/tech-overview.pdf" download>
                  Download Technical Overview <Download size={20} />
                </SecondaryButton>
              </ActionGroup>
            </Animated>
          </ContentArea>

          {/* --- RIGHT: 3D VISUAL AREA (45%) --- */}
          <VisualArea>
            <Animated animation="fadeIn" delay={0.3} duration={1}>
              <IsometricContainer>
                {/* Layer 3: Cloud / Application */}
                <Layer
                  $index={3}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <LayerHeader>Application Layer</LayerHeader>
                  <IconBox>
                    <Cloud size={32} />
                  </IconBox>
                  <DataLines>
                    <div className="line"></div>
                    <div className="line short"></div>
                  </DataLines>
                </Layer>

                {/* Layer 2: BMS / Intelligence */}
                <Layer
                  $index={2}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <LayerHeader>AI-BMS Layer</LayerHeader>
                  <IconBox className="bms-icon">
                    <Cpu size={32} />
                  </IconBox>
                  <CircuitPattern />
                </Layer>

                {/* Layer 1: Physical Cells */}
                <Layer
                  $index={1}
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <LayerHeader>Cell Architecture Layer</LayerHeader>
                  <CellGrid>
                    {[...Array(6)].map((_, i) => (
                      <div className="cell" key={i}>
                        <BatteryCharging size={20} />
                      </div>
                    ))}
                  </CellGrid>
                </Layer>

                {/* Connecting Energy Beam */}
                <EnergyBeam
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </IsometricContainer>
            </Animated>
          </VisualArea>
        </SplitLayout>
      </Container>
    </HeroSection>
  );
};

export default TechnologyHero;

// --- STYLED COMPONENTS ---

const HeroSection = styled.section`
  /* Custom dark theme specifically for this deep-tech hero */
  --tech-bg: #030712; /* Deep space dark */
  --tech-surface: rgba(17, 24, 39, 0.7);
  --tech-border: rgba(255, 255, 255, 0.1);
  --tech-text: #f9fafb;
  --tech-text-muted: #9ca3af;

  position: relative;
  background-color: var(--tech-bg);
  padding: 50px 0 100px;
  overflow: hidden;
  color: var(--tech-text);

  @media (max-width: 768px) {
    padding: 90px 0 80px;
  }
`;

const BackgroundGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--tech-border) 1px, transparent 1px),
    linear-gradient(90deg, var(--tech-border) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.3;
  mask-image: radial-gradient(ellipse at center, black 0%, transparent 80%);
  z-index: 0;
`;

const GlowOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 800px;
  height: 800px;
  background: radial-gradient(
    circle at center,
    rgba(0, 200, 81, 0.15) 0%,
    transparent 60%
  );
  filter: blur(80px);
  z-index: 0;
  pointer-events: none;

  @media (max-width: 768px) {
    width: 100%;
    height: 400px;
    top: auto;
    bottom: 0;
  }
`;

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const SplitLayout = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr; /* ~55/45 split */
  gap: 4rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }

  @media (max-width: 768px) {
    gap: 3rem;
  }
`;

// --- LEFT COLUMN: CONTENT ---
const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Eyebrow = styled.span`
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
  display: inline-block;
`;

const MainHeadline = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.1;
  color: var(--tech-text);
  margin: 0 0 2.5rem 0; /* 40px spacing logic */
  letter-spacing: -1px;

  .desktop-break {
    display: block;
  }

  @media (max-width: 1024px) {
    font-size: 3.25rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    .desktop-break {
      display: none;
    }
  }
`;

const Subheading = styled.p`
  font-size: 1.15rem;
  line-height: 1.6;
  color: var(--tech-text-muted);
  max-width: 90%;
  margin: 0 0 1.5rem 0;

  @media (max-width: 768px) {
    font-size: 1.05rem;
    max-width: 100%;
  }
`;

const BadgesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2.5rem; /* 40px spacing before CTA */
`;

const MicroBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--tech-text);
  letter-spacing: 0.5px;

  .icon {
    color: var(--color-primary);
  }
`;

const ActionGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  /* border: 2px solid white; */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background: var(--color-primary);
  color: #000000; /* High contrast on brand green */
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 800;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 200, 81, 0.25);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 200, 81, 0.4);
    background: var(--color-primary-light);
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background: transparent;
  color: var(--tech-text);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: white;
  }
`;

// --- RIGHT COLUMN: 3D VISUAL ---
const VisualArea = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    height: 450px;
  }

  @media (max-width: 768px) {
    height: 350px;
    margin-top: 1rem;
  }
`;

const IsometricContainer = styled.div`
  position: relative;
  width: 320px;
  height: 320px;
  /* Magic CSS to create 3D isometric perspective */
  transform-style: preserve-3d;
  transform: rotateX(60deg) rotateZ(-45deg);

  @media (max-width: 768px) {
    /* Flatten slightly on mobile for better fit */
    transform: scale(0.8) rotateX(55deg) rotateZ(-45deg);
  }
`;

const Layer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(17, 24, 39, 0.85);
  border: 1px solid var(--color-primary);
  border-radius: 20px;
  box-shadow:
    inset 0 0 20px rgba(0, 200, 81, 0.1),
    -10px 10px 30px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* Stacking the layers in Z-space */
  transform: translateZ(${(props) => props.$index * 80}px);
  z-index: ${(props) => props.$index};

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    border-radius: 20px;
    background: linear-gradient(
      135deg,
      var(--color-primary) 0%,
      transparent 100%
    );
    opacity: 0.3;
    pointer-events: none;
  }
`;

const LayerHeader = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--color-primary);
  font-weight: 700;
  background: rgba(0, 200, 81, 0.1);
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
`;

const IconBox = styled.div`
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 0 30px rgba(0, 200, 81, 0.2);

  &.bms-icon {
    border-radius: 16px;
    color: var(--color-primary);
    background: rgba(0, 200, 81, 0.1);
    border-color: rgba(0, 200, 81, 0.3);
  }
`;

const DataLines = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;

  .line {
    width: 60px;
    height: 4px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 2px;
  }
  .short {
    width: 40px;
  }
`;

const CircuitPattern = styled.div`
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
    circle at center,
    rgba(0, 200, 81, 0.2) 2px,
    transparent 2px
  );
  background-size: 20px 20px;
  opacity: 0.5;
  pointer-events: none;
`;

const CellGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  width: 70%;
  margin-top: 1rem;

  .cell {
    aspect-ratio: 1;
    background: rgba(0, 200, 81, 0.05);
    border: 1px solid rgba(0, 200, 81, 0.2);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.3);
  }
`;

const EnergyBeam = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40px;
  height: 200px; /* Spans across layers */
  background: linear-gradient(
    to top,
    transparent,
    var(--color-primary),
    transparent
  );
  filter: blur(15px);
  transform: translate(-50%, -50%) rotateX(90deg); /* Stands vertically through the layers */
  pointer-events: none;
`;
