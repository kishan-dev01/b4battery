// src/pages/products/SolarPanels.jsx
import React from "react";
import styled from "styled-components";
import {
  ArrowRight,
  Sun,
  Cpu,
  Sparkles,
  Maximize,
  Grid3X3,
  LayoutTemplate,
  ThermometerSun,
  Zap,
  Home,
  Building2,
  SunDim,
} from "lucide-react";
import Animated from "../../components/common/Animated";

const techCards = [
  {
    title: "TOPCon Solar Cells",
    icon: <Sun size={28} />,
    description:
      "Tunnel Oxide Passivated Contact technology improves efficiency by reducing electron loss, enabling panel efficiencies of 23–25% with strong resistance to heat degradation.",
  },
  {
    title: "HJT Hybrid Cells",
    icon: <Cpu size={28} />,
    description:
      "Heterojunction technology combines crystalline silicon with thin-film layers to achieve 26%+ efficiency and strong performance in low-light conditions such as fog or cloudy weather.",
  },
  {
    title: "Tandem Cell Innovation",
    icon: <Sparkles size={28} />,
    description:
      "Perovskite-silicon tandem cells capture both blue and red light wavelengths, enabling commercial panel efficiencies of 28–30%.",
  },
];

const efficiencyHighlights = [
  {
    title: "Up to 28–30% Efficiency",
    icon: <Zap size={24} />,
    description:
      "Next-generation tandem cell architecture pushes photovoltaic efficiency beyond traditional limits.",
  },
  {
    title: "Improved Heat Resistance",
    icon: <ThermometerSun size={24} />,
    description:
      "N-type silicon cells maintain high performance even under high temperatures.",
  },
  {
    title: "Higher Daily Output",
    icon: <SunDim size={24} />,
    description:
      "Rapid energy capture throughout changing sunlight conditions.",
  },
  {
    title: "Space Efficient",
    icon: <Maximize size={24} />,
    description: "More energy generation within smaller installation areas.",
  },
];

const environmentCards = [
  {
    title: "Residential Rooftop Solar",
    image:
      "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=800&auto=format&fit=crop",
    icon: <Home size={20} />,
  },
  {
    title: "Commercial Buildings",
    image:
      "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=80&w=800&auto=format&fit=crop",
    icon: <Building2 size={20} />,
  },
  {
    title: "Utility-Scale Solar Farms",
    image:
      "https://images.unsplash.com/photo-1592289139366-07f90fb785a4?q=80&w=800&auto=format&fit=crop",
    icon: <Sun size={20} />,
  },
];

const SolarPanels = () => {
  return (
    <PageWrapper>
      {/* 1️⃣ HERO SECTION */}
      <HeroSection>
        <Container>
          <HeroGrid>
            <HeroContent>
              <Animated animation="fadeInDown" duration={0.6}>
                <Eyebrow>Renewable Energy Systems</Eyebrow>
                <HeroHeading>High-Efficiency Solar Panels</HeroHeading>
                <HeroSubheading>
                  Advanced photovoltaic technology engineered to maximize energy
                  generation and long-term reliability.
                </HeroSubheading>
                <HeroDescription>
                  Modern solar systems combine high-efficiency photovoltaic
                  cells with durable panel architecture to produce more energy
                  from limited roof space. With innovations in N-type silicon
                  cells and bifacial panel designs, solar installations now
                  deliver significantly higher output and improved long-term
                  performance.
                </HeroDescription>
                <CTAButton href="#technology">
                  Explore Solar Technology <ArrowRight size={20} />
                </CTAButton>
              </Animated>
            </HeroContent>

            <HeroImageArea>
              <Animated animation="fadeIn" delay={0.2} duration={0.8}>
                <ImageWrapper>
                  <img
                    src="https://images.unsplash.com/photo-1509391366360-1284d7cb0628?q=80&w=1200&auto=format&fit=crop"
                    alt="Solar farm at sunrise"
                    loading="lazy"
                  />
                </ImageWrapper>
              </Animated>
            </HeroImageArea>
          </HeroGrid>
        </Container>
      </HeroSection>

      {/* 2️⃣ NEXT-GENERATION SOLAR TECHNOLOGY */}
      <TechSection id="technology">
        <Container>
          <Animated animation="fadeInDown" duration={0.6}>
            <SectionTitle className="centered">
              Next-Generation Solar Cell Technology
            </SectionTitle>
          </Animated>

          <TechGrid>
            {techCards.map((card, index) => (
              <Animated
                key={index}
                animation="fadeInUp"
                delay={index * 0.15}
                duration={0.5}
              >
                <TechCard>
                  <IconBox>{card.icon}</IconBox>
                  <TechTitle>{card.title}</TechTitle>
                  <TechDesc>{card.description}</TechDesc>
                </TechCard>
              </Animated>
            ))}
          </TechGrid>
        </Container>
      </TechSection>

      {/* 3️⃣ PANEL ARCHITECTURE */}
      <ArchitectureSection>
        <Container>
          <SplitGrid>
            <ArchImageArea>
              <Animated animation="fadeInRight" duration={0.8}>
                <ImageWrapper className="tall">
                  <img
                    src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1000&auto=format&fit=crop"
                    alt="Solar panel texture close up"
                    loading="lazy"
                  />
                </ImageWrapper>
              </Animated>
            </ArchImageArea>

            <ArchContent>
              <Animated animation="fadeInLeft" duration={0.6}>
                <SectionTitle>Advanced Panel Architecture</SectionTitle>
                <ArchList>
                  <ArchItem>
                    <IconBox className="small">
                      <LayoutTemplate size={20} />
                    </IconBox>
                    <div>
                      <ItemTitle>Bifacial Glass-to-Glass Panels</ItemTitle>
                      <ItemDesc>
                        Panels capture sunlight from both sides, using
                        reflections from rooftops or ground surfaces to increase
                        energy generation by 10–20%.
                      </ItemDesc>
                    </div>
                  </ArchItem>

                  <ArchItem>
                    <IconBox className="small">
                      <Grid3X3 size={20} />
                    </IconBox>
                    <div>
                      <ItemTitle>MBB Technology</ItemTitle>
                      <ItemDesc>
                        Multi-Busbar wiring reduces electrical resistance and
                        heat generation, improving efficiency and reliability.
                      </ItemDesc>
                    </div>
                  </ArchItem>

                  <ArchItem>
                    <IconBox className="small">
                      <Maximize size={20} />
                    </IconBox>
                    <div>
                      <ItemTitle>Half-Cut Cells</ItemTitle>
                      <ItemDesc>
                        Dividing cells into smaller segments allows panels to
                        continue generating power even when part of the panel is
                        shaded.
                      </ItemDesc>
                    </div>
                  </ArchItem>
                </ArchList>
              </Animated>
            </ArchContent>
          </SplitGrid>
        </Container>
      </ArchitectureSection>

      {/* 4️⃣ ENERGY EFFICIENCY HIGHLIGHTS */}
      <HighlightsSection>
        <Container>
          <Animated animation="fadeInDown" duration={0.6}>
            <SectionTitle className="centered">
              Designed for Maximum Energy Harvest
            </SectionTitle>
          </Animated>

          <HighlightsGrid>
            {efficiencyHighlights.map((highlight, index) => (
              <Animated
                key={index}
                animation="fadeInUp"
                delay={index * 0.1}
                duration={0.5}
              >
                <HighlightCard>
                  <HighlightIcon>{highlight.icon}</HighlightIcon>
                  <HighlightTitle>{highlight.title}</HighlightTitle>
                  <HighlightDesc>{highlight.description}</HighlightDesc>
                </HighlightCard>
              </Animated>
            ))}
          </HighlightsGrid>
        </Container>
      </HighlightsSection>

      {/* 5️⃣ SOLAR INSTALLATION ENVIRONMENTS */}
      <EnvironmentsSection>
        <Container>
          <Animated animation="fadeInDown" duration={0.6}>
            <SectionTitle className="centered">
              Solar Power for Every Environment
            </SectionTitle>
          </Animated>

          <EnvGrid>
            {environmentCards.map((env, index) => (
              <Animated
                key={index}
                animation="fadeInUp"
                delay={index * 0.15}
                duration={0.6}
              >
                <EnvCard>
                  <EnvImage>
                    <img src={env.image} alt={env.title} loading="lazy" />
                    <EnvOverlay />
                  </EnvImage>
                  <EnvLabel>
                    {env.icon} {env.title}
                  </EnvLabel>
                </EnvCard>
              </Animated>
            ))}
          </EnvGrid>
        </Container>
      </EnvironmentsSection>

      {/* 6️⃣ FUTURE SOLAR INNOVATION */}
      <FutureSection>
        <Container>
          <Animated animation="slideUp" duration={0.6}>
            <FutureBox>
              <SectionTitle className="centered light">
                The Future of Photovoltaic Energy
              </SectionTitle>
              <FutureText>
                Solar panel technology continues to evolve with advancements in
                cell chemistry, energy conversion efficiency, and system
                durability. Innovations such as tandem solar cells and bifacial
                energy capture are redefining the performance limits of
                photovoltaic systems and accelerating the transition toward
                global renewable energy adoption.
              </FutureText>
            </FutureBox>
          </Animated>
        </Container>
      </FutureSection>

      {/* FINAL CTA SECTION */}
      <CtaSection>
        <Container>
          <Animated animation="fadeIn" duration={0.6}>
            <CtaWrapper>
              <CtaHeading>Build Your Solar Energy Future</CtaHeading>
              <CtaSubtext>
                Discover how advanced photovoltaic technology can transform the
                way homes and businesses generate electricity.
              </CtaSubtext>
              <CTAButton href="/solutions" className="center">
                Explore Solar Energy Solutions <ArrowRight size={20} />
              </CTAButton>
            </CtaWrapper>
          </Animated>
        </Container>
      </CtaSection>
    </PageWrapper>
  );
};

export default SolarPanels;

// --- STYLED COMPONENTS ---

const PageWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  background-color: var(--color-bg);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 2rem;
  line-height: 1.2;
  letter-spacing: -0.5px;

  &.centered {
    text-align: center;
  }

  &.light {
    color: #ffffff;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// --- 1️⃣ HERO SECTION ---
const HeroSection = styled.section`
  padding: 120px 0 80px;
  background: linear-gradient(
    135deg,
    rgba(0, 200, 81, 0.05) 0%,
    var(--color-surface-secondary) 100%
  );
  position: relative;

  @media (max-width: 768px) {
    padding: 90px 0 60px;
  }
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    order: 2; /* Text below image on mobile per requirements */
    text-align: center;
    align-items: center;
  }
`;

const HeroImageArea = styled.div`
  width: 100%;

  @media (max-width: 900px) {
    order: 1; /* Image on top */
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
  }

  &.tall {
    height: 500px;
    img {
      height: 100%;
    }
  }

  &:hover img {
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    border-radius: 16px;
    &.tall {
      height: 350px;
    }
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
  background: rgba(0, 200, 81, 0.1);
  padding: 0.4rem 1rem;
  border-radius: 50px;
`;

const HeroHeading = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--color-text);
  margin: 0 0 1rem 0;
  line-height: 1.15;

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const HeroSubheading = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin: 0 0 1.25rem 0;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.05rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin: 0 0 2rem 0;
  max-width: 90%;

  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background: var(--color-primary);
  color: #000;
  padding: 1.1rem 2.5rem;
  border-radius: 50px;
  font-size: 1.05rem;
  font-weight: 800;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 200, 81, 0.2);
  align-self: flex-start;

  &.center {
    align-self: center;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 200, 81, 0.35);
    background: var(--color-primary-dark);
  }

  @media (max-width: 900px) {
    width: 100%;
    align-self: center;
  }
`;

// --- 2️⃣ NEXT-GENERATION SOLAR TECHNOLOGY ---
const TechSection = styled.section`
  padding: 100px 0;
  background: var(--color-surface);
  border-top: 1px solid var(--color-border-light);
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const TechCard = styled.div`
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  transition:
    box-shadow 0.3s ease,
    transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  }
`;

const IconBox = styled.div`
  width: 56px;
  height: 56px;
  background: rgba(0, 200, 81, 0.08);
  color: var(--color-primary);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;

  &.small {
    width: 48px;
    height: 48px;
    margin-bottom: 0;
    border-radius: 10px;
    flex-shrink: 0;
  }
`;

const TechTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--color-text);
  margin: 0 0 1rem 0;
`;

const TechDesc = styled.p`
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;
`;

// --- 3️⃣ PANEL ARCHITECTURE ---
const ArchitectureSection = styled.section`
  padding: 100px 0;
  background: var(--color-surface-secondary);
  border-top: 1px solid var(--color-border-light);
  border-bottom: 1px solid var(--color-border-light);
`;

const SplitGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const ArchImageArea = styled.div`
  width: 100%;
`;

const ArchContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ArchList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ArchItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
`;

const ItemTitle = styled.h4`
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 0.5rem 0;
`;

const ItemDesc = styled.p`
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin: 0;
`;

// --- 4️⃣ ENERGY EFFICIENCY HIGHLIGHTS ---
const HighlightsSection = styled.section`
  padding: 100px 0;
  background: var(--color-bg);
`;

const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const HighlightCard = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border-light);
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: var(--color-border);
  }
`;

const HighlightIcon = styled.div`
  color: var(--color-primary);
  margin-bottom: 1.25rem;
  background: var(--color-surface-secondary);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

const HighlightTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--color-text);
  margin: 0 0 0.75rem 0;
`;

const HighlightDesc = styled.p`
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin: 0;
`;

// --- 5️⃣ SOLAR INSTALLATION ENVIRONMENTS ---
const EnvironmentsSection = styled.section`
  padding: 100px 0;
  background: var(--color-surface);
  border-top: 1px solid var(--color-border-light);
`;

const EnvGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const EnvCard = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  height: 350px;
  group: hover;

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const EnvImage = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  ${EnvCard}:hover & img {
    transform: scale(1.05);
  }
`;

const EnvOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.2) 50%,
    transparent 100%
  );
`;

const EnvLabel = styled.div`
  position: absolute;
  bottom: 24px;
  left: 24px;
  right: 24px;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  z-index: 2;

  svg {
    color: var(--color-primary);
  }
`;

// --- 6️⃣ FUTURE SOLAR INNOVATION ---
const FutureSection = styled.section`
  padding: 120px 0;
  background: url("https://images.unsplash.com/photo-1509391366360-1284d7cb0628?q=80&w=2000&auto=format&fit=crop")
    center/cover no-repeat;
  position: relative;
  background-attachment: fixed;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(17, 24, 39, 0.85); /* Dark readable overlay */
  }
`;

const FutureBox = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const FutureText = styled.p`
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.7;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
`;

// --- FINAL CTA SECTION ---
const CtaSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(
    135deg,
    var(--color-surface) 0%,
    var(--color-bg) 100%
  );
  text-align: center;
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
  line-height: 1.6;
  margin: 0 0 2.5rem 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
