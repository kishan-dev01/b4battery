import styled, { keyframes } from "styled-components";
import {
  Battery,
  Zap,
  Shield,
  Users,
  Award,
  Leaf,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import Animated from "../common/Animated";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  const stats = [
    {
      number: "10+",
      label: "Years Experience",
      icon: <Award size={22} />,
      color: "#FF9800",
      bg: "rgba(255,152,0,0.12)",
    },
    {
      number: "50K+",
      label: "Batteries Sold",
      icon: <Battery size={22} />,
      color: "#00C851",
      bg: "rgba(0,200,81,0.12)",
    },
    {
      number: "500+",
      label: "Happy Customers",
      icon: <Users size={22} />,
      color: "#2196F3",
      bg: "rgba(33,150,243,0.12)",
    },
    {
      number: "99%",
      label: "Customer Satisfaction",
      icon: <Shield size={22} />,
      color: "#9C27B0",
      bg: "rgba(156,39,176,0.12)",
    },
  ];

  const values = [
    {
      icon: <Zap size={28} />,
      title: "Innovation",
      description:
        "Continuously advancing battery technology to deliver superior performance and reliability.",
      color: "#FFD600",
      bg: "rgba(255,214,0,0.1)",
    },
    {
      icon: <Leaf size={28} />,
      title: "Sustainability",
      description:
        "Committed to eco-friendly solutions that reduce environmental impact and promote clean energy.",
      color: "#00C851",
      bg: "rgba(0,200,81,0.1)",
    },
    {
      icon: <Shield size={28} />,
      title: "Quality Assurance",
      description:
        "Rigorous testing and quality control ensure every battery meets the highest industry standards.",
      color: "#2196F3",
      bg: "rgba(33,150,243,0.1)",
    },
  ];

  return (
    <AboutSection>
      {/* ── Hero ── */}
      <HeroContainer>
        <HeroBgGrid />
        <HeroOrb
          style={{
            top: "10%",
            left: "5%",
            width: 300,
            height: 300,
            background: "var(--color-primary)",
            opacity: 0.12,
          }}
        />
        <HeroOrb
          style={{
            bottom: "5%",
            right: "8%",
            width: 220,
            height: 220,
            background: "#2196F3",
            opacity: 0.1,
          }}
        />
        <HeroOrb
          style={{
            top: "50%",
            left: "40%",
            width: 160,
            height: 160,
            background: "#FFD600",
            opacity: 0.07,
          }}
        />

        <Container>
          <HeroContent>
            <Animated animation="fadeIn" duration={0.8}>
              <HeroEyebrow>
                <Zap size={13} /> Our Story
              </HeroEyebrow>
              <HeroTitle>
                About <GreenSpan>B4Battery</GreenSpan>
              </HeroTitle>
              <HeroSubtitle>Powering Innovation, Energizing Lives</HeroSubtitle>
              <HeroDescription>
                Leading the charge in sustainable battery solutions with
                cutting-edge technology and unwavering commitment to excellence.
              </HeroDescription>
              <HeroCta href="#story">
                Discover Our Journey <ArrowRight size={15} />
              </HeroCta>
            </Animated>
          </HeroContent>
        </Container>

        {/* Bottom wave divider */}
        <WaveDivider>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
            <path
              d="M0,60 C360,0 1080,60 1440,20 L1440,60 Z"
              fill="var(--color-bg)"
            />
          </svg>
        </WaveDivider>
      </HeroContainer>

      {/* ── Story ── */}
      <StorySection id="story">
        <Container>
          <ContentGrid>
            <Animated animation="slideLeft" duration={0.8}>
              <StoryContent>
                <SectionLabel>Who We Are</SectionLabel>
                <SectionTitle>Our Story</SectionTitle>
                <StoryText>
                  Founded with a vision to revolutionize the battery industry,
                  B4Battery emerged from a simple belief: reliable energy
                  storage should be accessible to everyone. What started as a
                  small venture has grown into a trusted name in battery
                  solutions, serving thousands of customers across India.
                </StoryText>
                <StoryText>
                  Our journey began when our founders recognized the growing
                  need for efficient, long-lasting batteries in the rapidly
                  expanding electric vehicle and renewable energy sectors.
                  Today, we continue to innovate and expand our product range,
                  always staying true to our core mission.
                </StoryText>
                <StoryPills>
                  {[
                    "Electric Vehicles",
                    "Renewable Energy",
                    "Industrial",
                    "Residential",
                  ].map((t) => (
                    <Pill key={t}>
                      <ChevronRight size={12} /> {t}
                    </Pill>
                  ))}
                </StoryPills>
              </StoryContent>
            </Animated>

            <Animated animation="slideRight" duration={0.8} delay={0.2}>
              <ImageWrapper>
                <img src="/images/product6.jpeg" alt="B4Battery Story" />
                <ImageBadge>
                  <Battery size={18} />
                  <span>Est. 2013</span>
                </ImageBadge>
              </ImageWrapper>
            </Animated>
          </ContentGrid>
        </Container>
      </StorySection>

      {/* ── Stats ── */}
      <StatsSection>
        <Container>
          <Animated animation="fadeIn" duration={0.8}>
            <SectionLabel centered>By The Numbers</SectionLabel>
            <SectionTitle centered>Our Achievements</SectionTitle>
          </Animated>
          <StatsGrid>
            {stats.map((stat, index) => (
              <Animated
                key={stat.label}
                animation="bounceScale"
                delay={index * 0.1}
              >
                <StatCard $color={stat.color} $bg={stat.bg}>
                  <StatIconWrap $color={stat.color} $bg={stat.bg}>
                    {stat.icon}
                  </StatIconWrap>
                  <StatNumber $color={stat.color}>{stat.number}</StatNumber>
                  <StatLabel>{stat.label}</StatLabel>
                </StatCard>
              </Animated>
            ))}
          </StatsGrid>
        </Container>
      </StatsSection>

      {/* ── Mission & Vision ── */}
      <MissionSection>
        <Container>
          <Animated animation="fadeIn" duration={0.8}>
            <SectionLabel centered>What Drives Us</SectionLabel>
            <SectionTitle centered>Mission &amp; Vision</SectionTitle>
          </Animated>
          <MissionGrid>
            <Animated animation="fadeIn" duration={0.8}>
              <MissionCard $accent="#00C851">
                <MissionAccentBar $color="#00C851" />
                {/* <CardIcon>🎯</CardIcon> */}
                <CardTitle>Our Mission</CardTitle>
                <CardDescription>
                  To provide innovative, reliable, and sustainable battery
                  solutions that power progress and enable a cleaner, more
                  efficient future for businesses and communities worldwide.
                </CardDescription>
              </MissionCard>
            </Animated>

            <Animated animation="fadeIn" duration={0.8} delay={0.2}>
              <MissionCard $accent="#2196F3">
                <MissionAccentBar $color="#2196F3" />
                {/* <CardIcon>🚀</CardIcon> */}
                <CardTitle>Our Vision</CardTitle>
                <CardDescription>
                  To be the leading battery technology company that transforms
                  how the world stores and uses energy, creating sustainable
                  solutions that benefit both people and the planet.
                </CardDescription>
              </MissionCard>
            </Animated>
          </MissionGrid>
        </Container>
      </MissionSection>

      {/* ── Values ── */}
      <ValuesSection>
        <ValuesBg />
        <Container>
          <Animated animation="fadeIn" duration={0.8}>
            <SectionLabel centered light>
              Core Principles
            </SectionLabel>
            <SectionTitle centered light>
              Our Core Values
            </SectionTitle>
            <SectionSubtitle>
              The principles that guide everything we do at B4Battery
            </SectionSubtitle>
          </Animated>
          <ValuesGrid>
            {values.map((value, index) => (
              <Animated
                key={value.title}
                animation="fadeInScale"
                delay={index * 0.15}
              >
                <ValueCard>
                  <ValueIconWrap $color={value.color} $bg={value.bg}>
                    <span style={{ color: value.color }}>{value.icon}</span>
                  </ValueIconWrap>
                  <ValueTitle>{value.title}</ValueTitle>
                  <ValueDescription>{value.description}</ValueDescription>
                  <ValueAccent $color={value.color} />
                </ValueCard>
              </Animated>
            ))}
          </ValuesGrid>
        </Container>
      </ValuesSection>

      {/* ── CTA ── */}
      <CtaSection>
        <CtaGlow />
        <Container>
          <Animated animation="fadeIn" duration={0.8}>
            <CtaContent>
              <CtaEyebrow>
                <Zap size={13} /> Join The Movement
              </CtaEyebrow>
              <CtaTitle>Ready to Power Your Future?</CtaTitle>
              <CtaDescription>
                Join thousands of satisfied customers who trust B4Battery for
                their energy needs.
              </CtaDescription>
              <CtaButtons>
                <PrimaryButton onClick={() => navigate("/products")}>
                  Explore Our Products <ArrowRight size={16} />
                </PrimaryButton>
                <SecondaryButton onClick={() => navigate("/contact-us")}>
                  Contact Us Today
                </SecondaryButton>
              </CtaButtons>
            </CtaContent>
          </Animated>
        </Container>
      </CtaSection>
    </AboutSection>
  );
};

export default AboutUs;

/* ─── Keyframes ─────────────────────────────── */
const pulseOrb = keyframes`
  0%, 100% { transform: scale(1); }
  50%       { transform: scale(1.1); }
`;

const floatBadge = keyframes`
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-6px); }
`;

/* ─── Wrapper ────────────────────────────────── */
const AboutSection = styled.div`
  min-height: 100vh;
  background: var(--color-bg);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

/* ─── Shared typography helpers ─────────────── */
const SectionLabel = styled.p`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ light }) =>
    light ? "rgba(255,255,255,0.55)" : "var(--color-primary)"};
  margin-bottom: 0.4rem;
  ${({ centered }) => centered && "text-align: center;"}
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.9rem, 3.5vw, 2.6rem);
  font-weight: 900;
  color: ${({ light }) => (light ? "#fff" : "var(--color-text)")};
  margin-bottom: 1rem;
  ${({ centered }) => centered && "text-align: center;"}
`;

const SectionSubtitle = styled.p`
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.65);
  text-align: center;
  margin-bottom: 2.5rem;
  max-width: 540px;
  margin-left: auto;
  margin-right: auto;
`;

/* ─── Hero ───────────────────────────────────── */
const HeroContainer = styled.section`
  position: relative;
  overflow: hidden;
  background: linear-gradient(140deg, #0a1628 0%, #0c2a16 55%, #0a1e30 100%);
  padding: 7rem 0 5rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 5.5rem 0 4rem;
  }
`;

const HeroBgGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  background-size: 44px 44px;
`;

const HeroOrb = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  animation: ${pulseOrb} 7s ease-in-out infinite;
  pointer-events: none;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const HeroEyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-primary);
  background: rgba(0, 200, 81, 0.1);
  border: 1px solid rgba(0, 200, 81, 0.25);
  padding: 0.3rem 0.85rem;
  border-radius: 999px;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4.25rem);
  font-weight: 900;
  color: #fff;
  line-height: 1.1;
  margin: 0;
`;

const GreenSpan = styled.span`
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
  margin: 0;
`;

const HeroDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.5);
  max-width: 520px;
  line-height: 1.65;
  margin: 0;
`;

const HeroCta = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.75rem 1.75rem;
  background: var(--color-primary);
  color: #fff;
  font-weight: 700;
  font-size: 0.95rem;
  border-radius: 999px;
  text-decoration: none;
  margin-top: 0.5rem;
  box-shadow: 0 4px 20px rgba(0, 200, 81, 0.35);
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(0, 200, 81, 0.45);
    color: #fff;
  }
`;

const WaveDivider = styled.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;

  svg {
    display: block;
    width: 100%;
    height: 52px;
  }
`;

/* ─── Story ──────────────────────────────────── */
const StorySection = styled.section`
  padding: 5rem 0;
  background: var(--color-bg);
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const StoryContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const StoryText = styled.p`
  font-size: 1rem;
  color: var(--color-text-muted);
  line-height: 1.75;
  margin-bottom: 0.75rem;
`;

const StoryPills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 0.5rem;
`;

const Pill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--color-primary);
  background: rgba(0, 200, 81, 0.08);
  border: 1px solid rgba(0, 200, 81, 0.2);
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
`;

const ImageWrapper = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 380px;
    object-fit: cover;
    /* border-radius: 20px; */
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
    display: block;
  }
`;

const ImageBadge = styled.div`
  position: absolute;
  bottom: 1.25rem;
  left: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--color-primary);
  color: #fff;
  font-size: 0.85rem;
  font-weight: 700;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  box-shadow: 0 4px 16px rgba(0, 200, 81, 0.4);
  animation: ${floatBadge} 3s ease-in-out infinite;
`;

/* ─── Stats ──────────────────────────────────── */
const StatsSection = styled.section`
  padding: 4.5rem 0;
  background: var(--color-surface);
  border-top: 1px solid var(--color-border-light);
  border-bottom: 1px solid var(--color-border-light);
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 2.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  text-align: center;
  padding: 2rem 1.25rem;
  background: var(--color-bg);
  border-radius: 16px;
  border: 1px solid var(--color-border-light);
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px ${({ $color }) => $color}22;
    border-color: ${({ $color }) => $color}55;
  }
`;

const StatIconWrap = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
`;

const StatNumber = styled.div`
  font-size: 2.4rem;
  font-weight: 900;
  color: ${({ $color }) => $color};
  line-height: 1;
  margin-bottom: 0.4rem;
`;

const StatLabel = styled.div`
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

/* ─── Mission ────────────────────────────────── */
const MissionSection = styled.section`
  padding: 5rem 0;
  background: var(--color-bg);
`;

const MissionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2.5rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const MissionCard = styled.div`
  position: relative;
  background: var(--color-surface);
  padding: 2.5rem 2.25rem;
  border-radius: 20px;
  border: 1px solid var(--color-border-light);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.25s ease;

  &:hover {
    box-shadow: var(--shadow-md);
  }
`;

const MissionAccentBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: ${({ $color }) => $color};
`;

const CardIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  line-height: 1;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 0.75rem;
`;

const CardDescription = styled.p`
  font-size: 0.975rem;
  color: var(--color-text-muted);
  line-height: 1.7;
  margin: 0;
`;

/* ─── Values ─────────────────────────────────── */
const ValuesSection = styled.section`
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
  background: linear-gradient(140deg, #0a1628 0%, #0c2a16 60%, #0a1e30 100%);
`;

const ValuesBg = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 44px 44px;
  pointer-events: none;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2.25rem 1.75rem;
  border-radius: 20px;
  text-align: center;
  overflow: hidden;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.07);
    border-color: rgba(255, 255, 255, 0.18);
  }
`;

const ValueIconWrap = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 16px;
  margin: 0 auto 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $bg }) => $bg};
  border: 1px solid ${({ $color }) => $color}33;
`;

const ValueTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 0.65rem;
`;

const ValueDescription = styled.p`
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.65;
  font-size: 0.93rem;
  margin: 0;
`;

const ValueAccent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: ${({ $color }) => $color};
  opacity: 0.7;
`;

/* ─── CTA ────────────────────────────────────── */
const CtaSection = styled.section`
  padding: 5.5rem 0;
  background: var(--color-surface);
  text-align: center;
  position: relative;
  overflow: hidden;
  border-top: 1px solid var(--color-border-light);
`;

const CtaGlow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(0, 200, 81, 0.06) 0%,
    transparent 70%
  );
  pointer-events: none;
`;

const CtaContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 680px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const CtaEyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-primary);
  background: rgba(0, 200, 81, 0.08);
  border: 1px solid rgba(0, 200, 81, 0.2);
  padding: 0.3rem 0.85rem;
  border-radius: 999px;
`;

const CtaTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 900;
  color: var(--color-text);
  margin: 0;
  line-height: 1.15;
`;

const CtaDescription = styled.p`
  font-size: 1.05rem;
  color: var(--color-text-muted);
  margin: 0;
  line-height: 1.6;
`;

const CtaButtons = styled.div`
  display: flex;
  gap: 1.25rem;
  justify-content: center;
  margin-top: 0.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-primary-dark) 100%
  );
  color: white;
  font-weight: 700;
  font-size: 1rem;
  padding: 0.875rem 2.25rem;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 4px 16px rgba(0, 200, 81, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 200, 81, 0.4);
  }
`;

const SecondaryButton = styled.button`
  background: transparent;
  color: var(--color-text);
  border: 1.5px solid var(--color-border);
  font-weight: 600;
  font-size: 1rem;
  padding: 0.875rem 2.25rem;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: var(--color-surface-secondary);
    border-color: var(--color-primary);
    color: var(--color-primary);
    transform: translateY(-2px);
  }
`;
