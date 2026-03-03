import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  Activity,
  CloudUpload,
  RefreshCw,
  Sliders,
  ArrowRight,
  Zap,
  Wifi,
  Thermometer,
  Shield,
  BarChart2,
} from "lucide-react";
import Animated from "../common/Animated";

const techFeatures = [
  {
    id: "ai-bms",
    icon: <Cpu size={20} />,
    title: "AI-Powered Battery Management",
    description:
      "Embedded microprocessors analyze real-time voltage, temperature, and load behavior to continuously optimize performance.",
    microLine:
      "Extends battery lifespan by up to 25% through adaptive intelligence.",
  },
  {
    id: "predictive",
    icon: <Activity size={20} />,
    title: "Predictive Health Monitoring",
    description:
      "AI algorithms detect cell wear patterns before failure occurs, alerting users through mobile dashboards.",
    microLine: 'Schedule "health checkups" before performance drops.',
  },
  {
    id: "cloud",
    icon: <CloudUpload size={20} />,
    title: "Real-Time Cloud Sync",
    description:
      "Battery data is securely synced to the cloud, enabling remote diagnostics and fleet-level insights.",
    microLine: "Technicians can assess system health over-the-air.",
  },
  {
    id: "ota",
    icon: <RefreshCw size={20} />,
    title: "Over-The-Air Updates",
    description:
      "Firmware updates and diagnostics are delivered remotely, improving safety and performance without physical servicing.",
    microLine: "Continuous optimization without downtime.",
  },
  {
    id: "balancing",
    icon: <Sliders size={20} />,
    title: "Adaptive Cell Balancing",
    description:
      "Unlike passive systems, our active balancing redistributes charge across cells to maximize usable capacity.",
    microLine: "Up to 25% longer operational life.",
  },
];

/* ── Simulated live metrics for data nodes ── */
const DATA_METRICS = [
  {
    key: "temp",
    icon: <Thermometer size={13} />,
    label: "Core Temp",
    value: "32.4°C",
    style: { top: "18%", left: "8%" },
    delay: 0.1,
    color: "#FF9800",
  },
  {
    key: "health",
    icon: <Shield size={13} />,
    label: "System Health",
    value: "99.8%",
    style: { top: "42%", right: "7%" },
    delay: 0.2,
    color: "#00C851",
    safe: true,
  },
  {
    key: "balance",
    icon: <BarChart2 size={13} />,
    label: "Cell Balance",
    value: "Optimal",
    style: { bottom: "28%", left: "12%" },
    delay: 0.3,
    color: "#2196F3",
  },
  {
    key: "sync",
    icon: <Wifi size={13} />,
    label: "Cloud Sync",
    value: "Active",
    style: { bottom: "12%", right: "14%" },
    delay: 0.4,
    color: "#9C27B0",
    sync: true,
  },
];

const SmartTechnology = () => {
  const [dataMode, setDataMode] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);
  const [expandedMobile, setExpandedMobile] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFeatureClick = (id) => {
    if (isMobile) setExpandedMobile(expandedMobile === id ? null : id);
  };

  return (
    <Section id="smart-tech">
      <Container>
        {/* ── Header ── */}
        <HeaderArea>
          <Animated animation="fadeInDown" duration={0.6}>
            <Eyebrow>
              <Zap size={12} />
              Intelligent Energy
            </Eyebrow>
            <MainHeading>
              Not Just a Battery.
              <br />
              <HeadingAccent>A Smart Energy Device.</HeadingAccent>
            </MainHeading>
            <Subheading>
              Our AI-powered Battery Management System transforms passive energy
              storage into a predictive, cloud-connected intelligence platform.
            </Subheading>
          </Animated>
        </HeaderArea>

        {/* ── 60/40 Split ── */}
        <FeaturesOnlyLayout>
          {/* Right — Features */}

          {techFeatures.map((feature, index) => {
            const isExpanded = isMobile ? expandedMobile === feature.id : true;
            const isActiveHover = !isMobile && activeFeature === feature.id;

            return (
              <Animated
                key={feature.id}
                animation="fadeInRight"
                delay={index * 0.08}
                duration={0.5}
              >
                <FeatureCard
                  onMouseEnter={() => !isMobile && setActiveFeature(feature.id)}
                  onMouseLeave={() => !isMobile && setActiveFeature(null)}
                  onClick={() => handleFeatureClick(feature.id)}
                  $isActive={isActiveHover}
                >
                  <FeatureHeader>
                    <FeatureIcon $isActive={isActiveHover}>
                      {feature.icon}
                    </FeatureIcon>
                    <FeatureTitle $isActive={isActiveHover}>
                      {feature.title}
                    </FeatureTitle>
                    {isMobile && (
                      <MobileChevron $open={expandedMobile === feature.id}>
                        ›
                      </MobileChevron>
                    )}
                  </FeatureHeader>

                  <ExpandableContent $isExpanded={isExpanded}>
                    <ExpandableInner>
                      <FeatureDescription>
                        {feature.description}
                      </FeatureDescription>
                      <MicroLine>
                        <strong>Impact:</strong> {feature.microLine}
                      </MicroLine>
                    </ExpandableInner>
                  </ExpandableContent>
                </FeatureCard>
              </Animated>
            );
          })}
        </FeaturesOnlyLayout>

        {/* ── CTA Band ── */}
        <Animated animation="slideUp" delay={0.4} duration={0.6}>
          <CTABand>
            <CTALeft>
              <CTAEyebrow>
                <Zap size={12} /> Technology Platform
              </CTAEyebrow>
              <CTAHeadline>
                Explore the Full Technology Architecture
              </CTAHeadline>
              <CTASubtext>
                Discover our lithium chemistries, inverter intelligence, and
                future-ready innovations.
              </CTASubtext>
            </CTALeft>
            <CTAButton href="/technology">
              View Platform <ArrowRight size={17} />
            </CTAButton>
          </CTABand>
        </Animated>
      </Container>
    </Section>
  );
};

export default SmartTechnology;

/* ─── Keyframes ──────────────────────────────── */
const pulseRing = keyframes`
  0%, 100% { transform: translate(-50%, -50%) scale(1);   opacity: var(--base-op); }
  50%       { transform: translate(-50%, -50%) scale(1.12); opacity: calc(var(--base-op) * 0.6); }
`;

const rotateSlow = keyframes`
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to   { transform: translate(-50%, -50%) rotate(360deg); }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.3; }
`;

const scanLine = keyframes`
  0%   { top: 0%; }
  100% { top: 100%; }
`;

/* ─── Section ────────────────────────────────── */
const Section = styled.section`
  padding: 120px 0;
  background: var(--color-bg);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(var(--color-border-light) 1px, transparent 1px),
      linear-gradient(90deg, var(--color-border-light) 1px, transparent 1px);
    background-size: 48px 48px;
    opacity: 0.35;
    z-index: 0;
  }

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 2;
`;

/* ─── Header ─────────────────────────────────── */
const HeaderArea = styled.div`
  text-align: center;
  margin-bottom: 72px;
  max-width: 780px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    text-align: left;
    margin-bottom: 48px;
  }
`;

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-primary);
  background: rgba(0, 200, 81, 0.08);
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  border: 1px solid rgba(0, 200, 81, 0.2);
  margin-bottom: 1rem;
`;

const MainHeading = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  color: var(--color-text);
  margin-bottom: 1.1rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
`;

const HeadingAccent = styled.span`
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subheading = styled.p`
  font-size: 1.05rem;
  color: var(--color-text-muted);
  line-height: 1.65;
  margin: 0;
`;

/* ─── Layout ─────────────────────────────────── */
const FeaturesOnlyLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 72px;

  /* Last card centered if odd count */
  & > *:last-child:nth-child(odd) {
    grid-column: 1 / -1;
    max-width: 50%;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

/* ─── Visual Column ──────────────────────────── */
const VisualColumn = styled.div`
  position: sticky;
  top: 100px;
  height: 620px;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(0, 200, 81, 0.15);
  box-shadow:
    0 0 0 1px rgba(0, 200, 81, 0.05),
    0 24px 60px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);

  @media (max-width: 1024px) {
    position: static;
    height: 420px;
  }

  @media (max-width: 768px) {
    height: 340px;
    border-radius: 16px;
  }
`;

const VisualPanel = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #080e1a;
  overflow: hidden;
`;

const PanelBg = styled.div`
  position: absolute;
  inset: 0;
  background: url("/images/tech/bms-circuit-bg.jpg") center/cover no-repeat;
  opacity: 0.2;
`;

const PanelGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0, 200, 81, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 200, 81, 0.04) 1px, transparent 1px);
  background-size: 36px 36px;
`;

const PanelGlow = styled.div`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      ellipse at 30% 40%,
      rgba(0, 200, 81, 0.09) 0%,
      transparent 55%
    ),
    radial-gradient(
      ellipse at 75% 70%,
      rgba(33, 150, 243, 0.07) 0%,
      transparent 45%
    );
`;

const CircuitLines = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
`;

/* Center chip */
const CenterChip = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`;

const ChipRing = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 50%;
  border: 1px solid rgba(0, 200, 81, ${({ $opacity }) => $opacity});
  --base-op: ${({ $opacity }) => $opacity};
  animation: ${pulseRing} ${({ $delay }) => 3 + $delay}s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay}s;
`;

const ChipCore = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(
    135deg,
    rgba(0, 200, 81, 0.2),
    rgba(0, 200, 81, 0.05)
  );
  border: 1px solid rgba(0, 200, 81, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  backdrop-filter: blur(4px);
  box-shadow:
    0 0 20px rgba(0, 200, 81, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
`;

/* Top bar */
const PanelTopBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 1.25rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  background: linear-gradient(
    to bottom,
    rgba(8, 14, 26, 0.9) 0%,
    transparent 100%
  );
`;

const PanelBadge = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  letter-spacing: 0.03em;
  backdrop-filter: blur(4px);
`;

/* Status bar */
const PanelStatusBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  z-index: 10;
  background: linear-gradient(
    to top,
    rgba(8, 14, 26, 0.95) 0%,
    transparent 100%
  );
`;

const StatusDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  flex-shrink: 0;
  ${({ $pulse }) =>
    $pulse &&
    css`
      animation: ${blink} 2s ease-in-out infinite;
    `}
`;

const StatusText = styled.span`
  font-size: 0.72rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.55);
  letter-spacing: 0.04em;
`;

const StatusDivider = styled.span`
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.12);
  margin: 0 0.25rem;
`;

/* Toggle */
const DataToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  padding: 0.4rem 0.85rem 0.4rem 0.65rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

const ToggleLabel = styled.span`
  color: ${({ $active }) =>
    $active ? "var(--color-primary)" : "rgba(255,255,255,0.55)"};
  font-size: 0.75rem;
  font-weight: 600;
  transition: color 0.3s ease;
  letter-spacing: 0.03em;
`;

const ToggleSwitch = styled.div`
  width: 36px;
  height: 20px;
  background: ${({ $active }) =>
    $active ? "var(--color-primary)" : "rgba(255,255,255,0.2)"};
  border-radius: 999px;
  display: flex;
  align-items: center;
  padding: 2px;
  cursor: pointer;
  justify-content: ${({ $active }) => ($active ? "flex-end" : "flex-start")};
  transition: background 0.3s ease;
  flex-shrink: 0;
`;

const ToggleKnob = styled(motion.div)`
  width: 16px;
  height: 16px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
`;

/* Data Nodes */
const DataNode = styled(motion.div)`
  position: absolute;
  z-index: 8;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: rgba(8, 14, 26, 0.82);
  backdrop-filter: blur(10px);
  border: 1px solid ${({ $color }) => $color}40;
  padding: 0.6rem 0.875rem;
  border-radius: 12px;
  box-shadow:
    0 8px 24px rgba(0, 0, 0, 0.35),
    0 0 0 1px ${({ $color }) => $color}15,
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
`;

const NodeIcon = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 7px;
  background: ${({ $color }) => $color}18;
  border: 1px solid ${({ $color }) => $color}30;
  color: ${({ $color }) => $color};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const NodeBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;

const NodeLabel = styled.span`
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.45);
  text-transform: uppercase;
  letter-spacing: 0.07em;
  font-weight: 600;
  line-height: 1;
`;

const NodeValue = styled.span`
  font-size: 0.95rem;
  font-weight: 700;
  color: ${({ $color }) => $color};
  font-family: var(--font-family-mono);
  line-height: 1;
`;

/* ─── Features Column ────────────────────────── */
const FeaturesColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
`;

const FeatureCard = styled.div`
  background: var(--color-surface);
  border: 1px solid
    ${({ $isActive }) =>
      $isActive ? "var(--color-primary)" : "var(--color-border-light)"};
  border-radius: 14px;
  padding: 1.25rem 1.375rem;
  transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: default;
  @media (min-width: 1025px) {
    cursor: default;
    transform: ${({ $isActive }) => ($isActive ? "translateX(-6px)" : "none")};
    box-shadow: ${({ $isActive }) =>
      $isActive
        ? "0 8px 28px rgba(0, 200, 81, 0.1), -3px 0 0 var(--color-primary)"
        : "none"};
  }

  @media (max-width: 1024px) {
    cursor: pointer;
  }
`;

const FeatureHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
`;

const FeatureIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: ${({ $isActive }) =>
    $isActive ? "var(--color-primary)" : "rgba(0,200,81,0.08)"};
  color: ${({ $isActive }) => ($isActive ? "white" : "var(--color-primary)")};
  border: 1px solid
    ${({ $isActive }) =>
      $isActive ? "var(--color-primary)" : "rgba(0,200,81,0.15)"};
  transition: all 0.28s ease;
`;

const FeatureTitle = styled.h3`
  font-size: 0.975rem;
  font-weight: 700;
  color: ${({ $isActive }) =>
    $isActive ? "var(--color-primary)" : "var(--color-text)"};
  margin: 0;
  flex: 1;
  line-height: 1.35;
  transition: color 0.28s ease;
`;

const MobileChevron = styled.span`
  font-size: 1.25rem;
  color: var(--color-text-muted);
  transition: transform 0.25s ease;
  transform: ${({ $open }) => ($open ? "rotate(90deg)" : "rotate(0deg)")};
  line-height: 1;
  flex-shrink: 0;
`;

const ExpandableContent = styled.div`
  display: grid;
  grid-template-rows: ${({ $isExpanded }) => ($isExpanded ? "1fr" : "0fr")};
  transition: grid-template-rows 0.3s ease;
`;

const ExpandableInner = styled.div`
  overflow: hidden;
  padding-top: ${({ $isExpanded }) => ($isExpanded ? "0.875rem" : "0")};
`;

const FeatureDescription = styled.p`
  color: var(--color-text-muted);
  font-size: 0.875rem;
  line-height: 1.65;
  margin: 0 0 0.75rem 0;
`;

const MicroLine = styled.div`
  background: rgba(0, 200, 81, 0.05);
  border: 1px solid rgba(0, 200, 81, 0.12);
  padding: 0.5rem 0.875rem;
  border-radius: 8px;
  font-size: 0.8rem;
  color: var(--color-text-muted);
  border-left: 3px solid var(--color-primary);

  strong {
    color: var(--color-primary);
    font-weight: 700;
  }
`;

/* ─── CTA Band ───────────────────────────────── */
const CTABand = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  background: linear-gradient(135deg, #080e1a 0%, #0c1e10 100%);
  border: 1px solid rgba(0, 200, 81, 0.15);
  border-radius: 20px;
  padding: 2.25rem 2.75rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 200, 81, 0.4),
      transparent
    );
  }

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    padding: 2rem 1.75rem;
  }
`;

const CTALeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const CTAEyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-primary);
`;

const CTAHeadline = styled.h3`
  font-size: clamp(1.25rem, 2.5vw, 1.6rem);
  font-weight: 800;
  color: #ffffff;
  margin: 0;
  line-height: 1.2;
`;

const CTASubtext = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.55;
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--color-primary);
  color: #fff;
  padding: 0.9rem 1.875rem;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
  flex-shrink: 0;
  transition: all 0.25s ease;
  box-shadow: 0 4px 16px rgba(0, 200, 81, 0.35);
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 200, 81, 0.45);
    color: #fff;
  }

  @media (max-width: 900px) {
    width: 100%;
    justify-content: center;
  }
`;
