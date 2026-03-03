import React, { useState } from "react";
import styled from "styled-components";
import {
  Zap,
  Factory,
  Rocket,
  Sun,
  Power,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Animated from "../common/Animated";

// Data Structure aligned with your provided copy
const verticalsData = [
  {
    id: "ev-batteries",
    title: "EV Lithium Batteries",
    tagline: "Smart. Lightweight. Future-Ready.",
    icon: <Zap size={28} />,
    highlights: [
      "70% lighter than lead-acid",
      "800–2,000+ charge cycles",
      "AI-Powered Smart BMS",
    ],
    description:
      "High-energy-density lithium batteries engineered for electric scooters and mobility platforms. Featuring predictive analytics, adaptive cell balancing, and fast 2–4 hour charging.",
    cta: "Explore Mobility Solutions",
    link: "/products/mobility",
  },
  {
    id: "industrial",
    title: "Industrial Energy Systems",
    tagline: "Built for 24/7 Operations",
    icon: <Factory size={28} />,
    highlights: [
      "3,500+ cycle life",
      "Opportunity charging",
      "IoT fleet monitoring",
    ],
    description:
      "Advanced LiFePO4 forklift and industrial batteries designed for warehouses, logistics hubs, and material handling equipment with zero maintenance and multi-shift capability.",
    cta: "Explore Industrial Solutions",
    link: "/products/industrial",
  },
  {
    id: "drone",
    title: "E-Drone Batteries",
    tagline: "Aviation-Grade Intelligence",
    icon: <Rocket size={28} />,
    highlights: [
      "Up to 400 Wh/kg density",
      "Flight-aware Smart BMS",
      "IP54 rugged housing",
    ],
    description:
      "Semi-solid and High-C LiFePO4 chemistries engineered for UAVs, agriculture drones, mapping missions, and heavy-lift industrial applications.",
    cta: "Explore Aviation Solutions",
    link: "/products/aviation",
  },
  {
    id: "solar",
    title: "Solar Energy Ecosystems",
    tagline: "Capture. Store. Optimize.",
    icon: <Sun size={28} />,
    highlights: [
      "TOPCon & Tandem Panels",
      "98%+ Efficient Inverters",
      "LFP Storage Solutions",
    ],
    description:
      "Complete solar solutions including high-efficiency bifacial panels, AI-driven inverters, and next-gen lithium storage built for residential and commercial autonomy.",
    cta: "Explore Solar Systems",
    link: "/products/solar",
  },
  {
    id: "ups",
    title: "Smart UPS & Backup",
    tagline: "Zero Downtime Power",
    icon: <Power size={28} />,
    highlights: [
      "Pure sine wave output",
      "<10ms switchover",
      "300% surge capacity",
    ],
    description:
      "Home and Hi-Capacity UPS systems engineered for seamless backup of sensitive electronics, heavy motors, and mission-critical operations.",
    cta: "Explore Backup Systems",
    link: "/products/backup",
  },
  {
    id: "baas",
    title: "Battery Swapping & BaaS",
    tagline: "Energy in Under 3 Minutes",
    icon: <RefreshCw size={28} />,
    highlights: [
      "Zero wait time",
      "40% lower upfront cost",
      "Subscription-based model",
    ],
    description:
      "Swap depleted batteries instantly at partner stations. Our Battery-as-a-Service model ensures always-new, always-healthy packs without ownership worries.",
    cta: "Discover BaaS",
    link: "/products/baas",
  },
];

const VerticalCard = ({ data, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardInteraction = (e) => {
    // If screen is mobile/tablet, toggle expansion instead of navigating immediately
    // unless they clicked specifically on the CTA button
    if (window.innerWidth <= 1024) {
      if (!e.target.closest(".cta-button")) {
        e.preventDefault();
        setIsExpanded(!isExpanded);
      }
    }
  };

  return (
    <Animated animation="fadeInUp" delay={index * 0.1} duration={0.6}>
      <Card
        onClick={handleCardInteraction}
        $isExpanded={isExpanded}
        href={data.link}
        className="vertical-card"
      >
        <CardTop>
          <IconWrapper className="icon-wrapper">{data.icon}</IconWrapper>
          <Tagline>{data.tagline}</Tagline>
        </CardTop>

        <CardBody>
          <CardTitle>{data.title}</CardTitle>
          <HighlightsList>
            {data.highlights.map((highlight, i) => (
              <HighlightItem key={i}>
                <CheckCircle2 size={16} className="bullet-icon" />
                {highlight}
              </HighlightItem>
            ))}
          </HighlightsList>

          {/* Smooth CSS Grid Expand Mechanism */}
          <ExpandableWrapper className="expandable-wrapper">
            <ExpandableInner>
              <DescriptionText>{data.description}</DescriptionText>
            </ExpandableInner>
          </ExpandableWrapper>
        </CardBody>

        <CardFooter>
          <CTAButton className="cta-button">
            {data.cta} <ArrowRight size={18} />
          </CTAButton>
        </CardFooter>
      </Card>
    </Animated>
  );
};

const ProductVerticalsSection = () => {
  return (
    <Section id="solutions">
      {/* Subtle Animated Background Elements */}
      <BackgroundGrid />
      <GlowOrb top="10%" left="-10%" color="var(--color-primary-light)" />
      <GlowOrb bottom="-10%" right="-5%" color="var(--color-primary)" />

      <Container>
        <HeaderWrapper>
          <Animated animation="fadeInDown" duration={0.8}>
            <Eyebrow>OUR SOLUTIONS</Eyebrow>
            <SectionTitle>
              Powering Every Dimension of Modern Energy
            </SectionTitle>
            <Subtitle>
              From electric mobility to industrial automation and smart solar
              ecosystems, explore our advanced 2026-ready energy solutions.
            </Subtitle>
          </Animated>
        </HeaderWrapper>

        <GridContainer>
          {verticalsData.map((vertical, index) => (
            <VerticalCard key={vertical.id} data={vertical} index={index} />
          ))}
        </GridContainer>
      </Container>
    </Section>
  );
};

export default ProductVerticalsSection;

// --- STYLED COMPONENTS ---

const Section = styled.section`
  position: relative;
  padding: 8rem 0;
  background: linear-gradient(
    180deg,
    var(--color-bg) 0%,
    var(--color-bg-secondary) 100%
  );
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 5rem 0;
  }
`;

// Futuristic Background Effects
const BackgroundGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, var(--color-border-light) 1px, transparent 1px),
    linear-gradient(to bottom, var(--color-border-light) 1px, transparent 1px);
  background-size: 60px 60px;
  opacity: 0.3;
  mask-image: linear-gradient(
    to bottom,
    transparent,
    black 20%,
    black 80%,
    transparent
  );
  z-index: 0;
  pointer-events: none;
`;

const GlowOrb = styled.div`
  position: absolute;
  top: ${(props) => props.top || "auto"};
  bottom: ${(props) => props.bottom || "auto"};
  left: ${(props) => props.left || "auto"};
  right: ${(props) => props.right || "auto"};
  width: 50vw;
  height: 50vw;
  max-width: 600px;
  max-height: 600px;
  background: radial-gradient(
    circle,
    ${(props) => props.color} 0%,
    transparent 60%
  );
  opacity: 0.08;
  border-radius: 50%;
  filter: blur(60px);
  z-index: 0;
  pointer-events: none;
`;

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

// Header Styling
const HeaderWrapper = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 5rem;

  @media (max-width: 768px) {
    text-align: left;
    margin: 0 0 3.5rem;
  }
`;

const Eyebrow = styled.span`
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--color-primary);
  margin-bottom: 1rem;
  padding: 0.4rem 1rem;
  background: rgba(0, 200, 81, 0.1);
  border-radius: 50px;
  border: 1px solid rgba(0, 200, 81, 0.2);
`;

const SectionTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  color: var(--color-text);
  margin-bottom: 1.5rem;
  letter-spacing: -0.5px;

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  color: var(--color-text-secondary);

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

// Staggered Grid Layout
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  padding-bottom: 2.5rem; /* Padding to account for the downward stagger */

  @media (min-width: 1025px) {
    /* Magic Stagger Effect for the middle column */
    & > div:nth-child(3n + 2) {
      transform: translateY(40px);
    }
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding-bottom: 0;
  }
`;

// Card Styling
const Card = styled.a`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    145deg,
    var(--color-surface) 0%,
    var(--color-surface-secondary) 100%
  );
  border-radius: 24px;
  border: 1px solid var(--color-border-light);
  padding: 2.25rem;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  height: 100%;

  /* Glassmorphic backdrop if supported */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  /* Hover & Expand State Logic */
  &:hover {
    border-color: var(--color-primary);
    box-shadow: 0 15px 40px rgba(0, 200, 81, 0.12);
    transform: translateY(-5px);
  }

  ${(props) =>
    props.$isExpanded &&
    `
    border-color: var(--color-primary);
    box-shadow: 0 15px 40px rgba(0, 200, 81, 0.12);
    transform: translateY(-5px);
  `}

  /* Desktop Hover Expansion */
  @media (min-width: 1025px) {
    &:hover .expandable-wrapper {
      grid-template-rows: 1fr;
      margin-top: 1.25rem;
    }

    &:hover .icon-wrapper {
      background: var(--color-primary);
      color: white;
      transform: scale(1.1);
      box-shadow: 0 10px 25px rgba(0, 200, 81, 0.3);
    }

    &:hover .cta-button {
      color: var(--color-primary);
    }

    &:hover .cta-button svg {
      transform: translateX(4px);
    }
  }

  /* Mobile/Tablet Tap Expansion */
  @media (max-width: 1024px) {
    ${(props) =>
      props.$isExpanded &&
      `
      border-color: var(--color-primary);
      
      .expandable-wrapper {
        grid-template-rows: 1fr;
        margin-top: 1rem;
      }
      
      .icon-wrapper {
        background: var(--color-primary);
        color: white;
      }
    `}
  }

  @media (max-width: 768px) {
    padding: 1.75rem 1.5rem;
    border-radius: 20px;
  }
`;

const CardTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`;

const IconWrapper = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  transition: all 0.4s ease;
`;

const Tagline = styled.span`
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--color-primary-dark);
`;

const CardBody = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 1rem;
  line-height: 1.3;
`;

const HighlightsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const HighlightItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  font-weight: 500;

  .bullet-icon {
    color: var(--color-primary);
    flex-shrink: 0;
  }
`;

/* The hidden content mechanism */
const ExpandableWrapper = styled.div`
  display: grid;
  grid-template-rows: 0fr;
  transition:
    grid-template-rows 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    margin 0.4s ease;
  margin-top: 0;
`;

const ExpandableInner = styled.div`
  overflow: hidden;
`;

const DescriptionText = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-text-muted);
  margin: 0;
  padding-top: 0.5rem;
  border-top: 1px dashed var(--color-border);
`;

const CardFooter = styled.div`
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border-light);
`;

const CTAButton = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  font-size: 1rem;
  color: var(--color-text);
  transition: color 0.3s ease;
  width: 100%;

  svg {
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    /* Larger tap target for mobile */
    padding: 0.5rem 0;
  }
`;
