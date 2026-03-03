import React from "react";
import styled from "styled-components";
import {
  Truck,
  Sprout,
  Plane,
  Warehouse,
  Home,
  Building,
  ArrowRight,
} from "lucide-react";
import Animated from "../common/Animated";

const industriesData = [
  {
    id: "logistics",
    title: "Logistics",
    description:
      "High-cycle forklift batteries and fleet energy monitoring for uninterrupted material movement.",
    icon: <Truck size={32} strokeWidth={1.5} />,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8ed7c1590f?q=80&w=800&auto=format&fit=crop",
    link: "/solutions/logistics",
  },
  {
    id: "agriculture",
    title: "Agriculture",
    description:
      "Drone power systems and off-grid solar storage for precision farming and rural electrification.",
    icon: <Sprout size={32} strokeWidth={1.5} />,
    image:
      "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=800&auto=format&fit=crop",
    link: "/solutions/agriculture",
  },
  {
    id: "uav-defense",
    title: "UAV & Defense",
    description:
      "High-density aviation batteries engineered for mission-critical reliability and performance.",
    icon: <Plane size={32} strokeWidth={1.5} />,
    image:
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=800&auto=format&fit=crop",
    link: "/solutions/uav",
  },
  {
    id: "warehousing",
    title: "Warehousing",
    description:
      "Smart LiFePO4 batteries for multi-shift industrial operations and automated facilities.",
    icon: <Warehouse size={32} strokeWidth={1.5} />,
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop",
    link: "/solutions/warehousing",
  },
  {
    id: "residential",
    title: "Residential",
    description:
      "Solar panels, lithium storage, and smart UPS systems for energy independence.",
    icon: <Home size={32} strokeWidth={1.5} />,
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop",
    link: "/solutions/residential",
  },
  {
    id: "commercial",
    title: "Commercial",
    description:
      "Hybrid inverters and high-capacity UPS systems for business continuity and grid stability.",
    icon: <Building size={32} strokeWidth={1.5} />,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    link: "/solutions/commercial",
  },
];

const IndustriesSection = () => {
  return (
    <Section id="industries">
      <Container>
        {/* --- Header Area --- */}
        <HeaderArea>
          <Animated animation="fadeInDown" duration={0.6}>
            <Eyebrow>INDUSTRY SOLUTIONS</Eyebrow>
            <MainHeading>
              Powering Industries Across the Energy Spectrum
            </MainHeading>
            <Subheading>
              From intelligent mobility to critical infrastructure, our advanced
              battery and energy systems serve diverse sectors with precision
              and reliability.
            </Subheading>
          </Animated>
        </HeaderArea>

        {/* --- 3x2 Image Grid --- */}
        <GridContainer>
          {industriesData.map((industry, index) => (
            <Animated
              key={industry.id}
              animation="fadeInUp"
              delay={index * 0.1}
              duration={0.6}
            >
              <IndustryCard href={industry.link}>
                <CardImage
                  src={industry.image}
                  alt={`${industry.title} Industry`}
                  loading="lazy"
                />
                <CardOverlay />
                <CardContent>
                  <IconWrapper>{industry.icon}</IconWrapper>
                  <IndustryTitle>{industry.title}</IndustryTitle>
                  <IndustryDescription>
                    {industry.description}
                  </IndustryDescription>
                </CardContent>
              </IndustryCard>
            </Animated>
          ))}
        </GridContainer>

        {/* --- Centered CTA Block --- */}
        <Animated animation="slideUp" delay={0.3} duration={0.6}>
          <CTAArea>
            <CTAHeadline>
              Discover Industry-Specific Energy Solutions
            </CTAHeadline>
            <CTASubtext>
              Customized energy architecture for every sector.
            </CTASubtext>
            <CTAButton href="/solutions">
              Explore All Industries <ArrowRight size={20} />
            </CTAButton>
          </CTAArea>
        </Animated>
      </Container>
    </Section>
  );
};

export default IndustriesSection;

// --- STYLED COMPONENTS ---

const Section = styled.section`
  padding: 140px 0;
  background-color: var(--color-bg);
  position: relative;

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
  margin: 0 auto 60px;

  @media (max-width: 768px) {
    text-align: left;
    margin-bottom: 40px;
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

// --- Grid & Card Styles ---
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-bottom: 60px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-bottom: 48px;
  }
`;

const IndustryCard = styled.a`
  position: relative;
  display: block;
  height: 340px;
  border-radius: 20px;
  overflow: hidden;
  text-decoration: none;
  background: var(--color-surface-secondary);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

  /* Mobile depth via shadow since hover isn't ideal */
  @media (max-width: 768px) {
    height: 280px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  }
`;

const CardImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  /* Subtle desktop zoom effect */
  @media (min-width: 1025px) {
    ${IndustryCard}:hover & {
      transform: scale(1.05);
    }
  }
`;

const CardOverlay = styled.div`
  position: absolute;
  inset: 0;
  /* Dark gradient heavily weighted at the bottom for text readability */
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 0.1) 100%
  );
  transition: background 0.4s ease;

  @media (min-width: 1025px) {
    ${IndustryCard}:hover & {
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.9) 0%,
        rgba(0, 0, 0, 0.5) 50%,
        rgba(0, 0, 0, 0.2) 100%
      );
    }
  }
`;

const CardContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const IconWrapper = styled.div`
  color: var(--color-primary);
  margin-bottom: 1rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const IndustryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0.5rem 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.35rem;
  }
`;

const IndustryDescription = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.5;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

// --- CTA Area Styles ---
const CTAArea = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CTAHeadline = styled.h3`
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const CTASubtext = styled.p`
  font-size: 1rem;
  color: var(--color-text-muted);
  margin: 0 0 2rem 0;
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: var(--color-primary);
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-size: 1.05rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 200, 81, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 200, 81, 0.35);
    background: var(--color-primary-dark);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
