import React from "react";
import styled, { keyframes } from "styled-components";
import {
  ArrowRight,
  Clock,
  Zap,
  Wrench,
  ShieldAlert,
  Activity,
  RefreshCcw,
  Leaf,
  CheckCircle2,
  Droplets,
  Move,
  Settings,
  Disc,
  Combine,
  Cpu,
  MessageSquare,
} from "lucide-react";
import Animated from "../../components/common/Animated";

const FEATURES = [
  {
    icon: <Clock size={20} />,
    title: "Extended Runtime",
    desc: "Deep-cycle battery design enables longer machine operation on a single charge.",
    color: "#00C851",
  },
  {
    icon: <Zap size={20} />,
    title: "Rapid Charging Technology",
    desc: "Advanced cell design supports faster charging cycles and reduced downtime.",
    color: "#2196F3",
  },
  {
    icon: <Wrench size={20} />,
    title: "Maintenance-Free Operation",
    desc: "AGM and lithium-ion options eliminate watering and acid checks.",
    color: "#FF9800",
  },
  {
    icon: <ShieldAlert size={20} />,
    title: "Rugged Construction",
    desc: "Reinforced battery casing and vibration-resistant components ensure durability.",
    color: "#9C27B0",
  },
];

const TECH_ITEMS = [
  {
    icon: <Activity size={20} />,
    title: "Optimized Discharge Curves",
    desc: "Maintains steady voltage output throughout the entire discharge cycle.",
    color: "#00C851",
  },
  {
    icon: <RefreshCcw size={20} />,
    title: "High Cycle Life",
    desc: "Premium lead-plate and lithium technologies support hundreds of deep discharge cycles.",
    color: "#2196F3",
  },
  {
    icon: <CheckCircle2 size={20} />,
    title: "Advanced Safety Protection",
    desc: "Protection systems prevent overcharging, deep discharge, and thermal issues.",
    color: "#FF9800",
  },
];

const SUS_ITEMS = [
  {
    icon: <Leaf size={26} />,
    text: "Lead-acid battery components are nearly ",
    strong: "100% recyclable",
    after: ".",
    color: "#00C851",
  },
  {
    icon: <Activity size={26} />,
    text: "Lithium batteries deliver a ",
    strong: "lower carbon footprint",
    after: " over an extended lifespan.",
    color: "#2196F3",
  },
  {
    icon: <Zap size={26} />,
    text: "High energy efficiency ",
    strong: "reduces operational energy consumption",
    after: ".",
    color: "#FF9800",
  },
];

const APP_CARDS = [
  {
    icon: <Droplets size={20} />,
    label: "Automatic Floor Scrubbers (Walk-behind)",
    color: "#00C851",
  },
  { icon: <Move size={20} />, label: "Ride-On Scrubbers", color: "#2196F3" },
  {
    icon: <Combine size={20} />,
    label: "Industrial Sweepers",
    color: "#FF9800",
  },
  {
    icon: <Disc size={20} />,
    label: "Burnishers & Polishers",
    color: "#9C27B0",
  },
  {
    icon: <Settings size={20} />,
    label: "Carpet Extractors",
    color: "#E91E63",
  },
  {
    icon: <Cpu size={20} />,
    label: "Automated Robotic Cleaners",
    color: "#00BCD4",
  },
];

const ECleaningMachineBatteries = () => {
  return (
    <PageWrapper>
      {/* ── 1. HERO ── */}
      <HeroSection>
        <HeroBgGrid />
        <HeroGlow />
        <Container>
          <HeroGrid>
            <HeroContent>
              <Animated animation="fadeInDown" duration={0.6}>
                <Eyebrow>Industrial Facility Power</Eyebrow>
                <HeroHeading>
                  E-Cleaning Machine
                  <br />
                  <HeroAccent>Batteries</HeroAccent>
                </HeroHeading>
                <HeroSubheading>
                  Reliable deep-cycle energy solutions engineered for modern
                  industrial cleaning equipment.
                </HeroSubheading>
                <HeroDescription>
                  Our E-Cleaning Machine Batteries provide stable and
                  long-lasting energy for commercial floor scrubbers, sweepers,
                  and automated cleaning systems. Designed for demanding
                  environments, these batteries ensure uninterrupted performance
                  from the start of the shift to the end of the job.
                </HeroDescription>

                <HeroStats>
                  {[
                    { val: "Deep Cycle", label: "Design" },
                    { val: "Zero", label: "Maintenance" },
                    { val: "AGM / Li", label: "Options" },
                    { val: "24 / 7", label: "Ready" },
                  ].map((s) => (
                    <HeroStat key={s.label}>
                      <StatVal>{s.val}</StatVal>
                      <StatLabel>{s.label}</StatLabel>
                    </HeroStat>
                  ))}
                </HeroStats>

                <HeroCTARow>
                  <CTAButtonPrimary href="#applications">
                    Explore Applications <ArrowRight size={16} />
                  </CTAButtonPrimary>
                  <CTAButtonGhost href="/contact-us">
                    Contact Sales
                  </CTAButtonGhost>
                </HeroCTARow>
              </Animated>
            </HeroContent>

            <HeroImageArea>
              <Animated animation="fadeIn" delay={0.2} duration={0.8}>
                <HeroImageFrame>
                  <HeroImageOverlay />
                  <img
                    src="/images/product8.jpeg"
                    alt="Industrial floor scrubber machine"
                    loading="lazy"
                  />
                  <HeroImageBadge>
                    <Zap size={13} /> Deep-Cycle Certified
                  </HeroImageBadge>
                </HeroImageFrame>
              </Animated>
            </HeroImageArea>
          </HeroGrid>
        </Container>
      </HeroSection>

      {/* ── 2. WHAT THESE BATTERIES POWER ── */}
      <PowerSection>
        <Container>
          <Animated animation="fadeInDown" duration={0.6}>
            <SectionEyebrow centered>Equipment</SectionEyebrow>
            <SectionTitle centered>
              Powering Modern Facility Cleaning
            </SectionTitle>
          </Animated>

          <PowerGrid>
            {[
              {
                img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800&auto=format&fit=crop",
                alt: "Industrial Floor Scrubbers",
                title: "Industrial Floor Scrubbers",
                desc: "Reliable energy for deep cleaning large commercial spaces.",
                color: "#00C851",
                delay: 0.1,
              },
              {
                img: "https://images.unsplash.com/photo-1504904116278-faa29f477207?q=80&w=800&auto=format&fit=crop",
                alt: "Warehouse Sweepers",
                title: "Warehouse Sweepers",
                desc: "Consistent power output for large-area dust and debris removal.",
                color: "#2196F3",
                delay: 0.2,
              },
              {
                img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
                alt: "Automated Cleaning Systems",
                title: "Automated Cleaning Systems",
                desc: "Stable energy supply for robotic and automated cleaning equipment.",
                color: "#FF9800",
                delay: 0.3,
              },
            ].map((card) => (
              <Animated
                key={card.title}
                animation="fadeInUp"
                delay={card.delay}
                duration={0.5}
              >
                <PowerCard>
                  <PowerImageWrap>
                    <img src={card.img} alt={card.alt} loading="lazy" />
                    <PowerImageOverlay $color={card.color} />
                    <PowerIconBadge $color={card.color} />
                  </PowerImageWrap>
                  <PowerContent $color={card.color}>
                    <h4>{card.title}</h4>
                    <p>{card.desc}</p>
                  </PowerContent>
                  <PowerAccentBar $color={card.color} />
                </PowerCard>
              </Animated>
            ))}
          </PowerGrid>
        </Container>
      </PowerSection>

      {/* ── 3. CORE FEATURES ── */}
      <FeaturesSection>
        <Container>
          <Animated animation="fadeInDown" duration={0.6}>
            <SectionEyebrow>Features</SectionEyebrow>
            <SectionTitle>Key Product Features</SectionTitle>
          </Animated>

          <FeaturesGrid>
            {FEATURES.map((f, i) => (
              <Animated
                key={f.title}
                animation="fadeInUp"
                delay={i * 0.1}
                duration={0.5}
              >
                <FeatureCard $color={f.color}>
                  <FeatureCardAccent $color={f.color} />
                  <FeatureIcon $color={f.color}>
                    <span style={{ color: f.color }}>{f.icon}</span>
                  </FeatureIcon>
                  <FeatureTitle>{f.title}</FeatureTitle>
                  <FeatureDesc>{f.desc}</FeatureDesc>
                </FeatureCard>
              </Animated>
            ))}
          </FeaturesGrid>
        </Container>
      </FeaturesSection>

      {/* ── 4. TECHNICAL ADVANTAGES ── */}
      <TechSection>
        <Container>
          <SplitLayout>
            <TechContent>
              <Animated animation="fadeInLeft" duration={0.6}>
                <SectionEyebrow>Engineering</SectionEyebrow>
                <SectionTitle>
                  Engineered for Consistent Performance
                </SectionTitle>
                <TechList>
                  {TECH_ITEMS.map((item) => (
                    <TechItem key={item.title}>
                      <IconBox $color={item.color}>
                        <span style={{ color: item.color }}>{item.icon}</span>
                      </IconBox>
                      <TechText>
                        <ItemTitle>{item.title}</ItemTitle>
                        <ItemDesc>{item.desc}</ItemDesc>
                      </TechText>
                    </TechItem>
                  ))}
                </TechList>
              </Animated>
            </TechContent>

            <TechImageArea>
              <Animated animation="fadeInRight" duration={0.8}>
                <TechImageWrap>
                  <img
                    src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1000&auto=format&fit=crop"
                    alt="Industrial battery pack cells"
                    loading="lazy"
                  />
                  <TechImageOverlay />
                  <TechImageBadge>
                    <Activity size={13} /> Performance Verified
                  </TechImageBadge>
                </TechImageWrap>
              </Animated>
            </TechImageArea>
          </SplitLayout>
        </Container>
      </TechSection>

      {/* ── 5. DURABILITY ── */}
      <DurabilitySection>
        <DurabilityOverlay />
        <DurabilityGrid />
        <Container>
          <Animated animation="slideUp" duration={0.6}>
            <DurabilityInner>
              <DurabilityEyebrow>Reliability</DurabilityEyebrow>
              <DurabilityHeading>
                Built for Demanding
                <br />
                Cleaning Environments
              </DurabilityHeading>
              <DurabilityText>
                Cleaning equipment experiences constant vibration, movement, and
                long operating hours. These batteries are engineered with
                reinforced internal connectors and durable casings to withstand
                daily commercial usage.
              </DurabilityText>
              <DurabilityStats>
                {[
                  { val: "IP-Rated", label: "Housing" },
                  { val: "Anti-Vibe", label: "Cell Dampening" },
                  { val: "Reinforced", label: "Connectors" },
                ].map((s) => (
                  <DurabilityStatItem key={s.label}>
                    <DurabilityStatVal>{s.val}</DurabilityStatVal>
                    <DurabilityStatLabel>{s.label}</DurabilityStatLabel>
                  </DurabilityStatItem>
                ))}
              </DurabilityStats>
            </DurabilityInner>
          </Animated>
        </Container>
      </DurabilitySection>

      {/* ── 6. SUSTAINABILITY ── */}
      <SustainabilitySection>
        <Container>
          <Animated animation="fadeInDown" duration={0.6}>
            <SectionEyebrow centered>Environment</SectionEyebrow>
            <SectionTitle centered>
              Efficient & Environmentally Responsible
            </SectionTitle>
          </Animated>

          <SusGrid>
            {SUS_ITEMS.map((item, i) => (
              <Animated
                key={i}
                animation="fadeInUp"
                delay={i * 0.1}
                duration={0.5}
              >
                <SusCard $color={item.color}>
                  <SusIconWrap $color={item.color}>
                    <span style={{ color: item.color }}>{item.icon}</span>
                  </SusIconWrap>
                  <SusText>
                    {item.text}
                    <strong>{item.strong}</strong>
                    {item.after}
                  </SusText>
                </SusCard>
              </Animated>
            ))}
          </SusGrid>
        </Container>
      </SustainabilitySection>

      {/* ── 7. APPLICATIONS + CTA ── */}
      <AppSection id="applications">
        <Container>
          <Animated animation="fadeInDown" duration={0.6}>
            <SectionEyebrow centered>Use Cases</SectionEyebrow>
            <SectionTitle centered>Recommended Applications</SectionTitle>
          </Animated>

          <AppGrid>
            {APP_CARDS.map((app, i) => (
              <Animated
                key={app.label}
                animation="fadeInUp"
                delay={i * 0.07}
                duration={0.4}
              >
                <AppCard $color={app.color}>
                  <AppIconWrap $color={app.color}>
                    <span style={{ color: app.color }}>{app.icon}</span>
                  </AppIconWrap>
                  <span>{app.label}</span>
                </AppCard>
              </Animated>
            ))}
          </AppGrid>

          {/* CTA inline at bottom of last section */}
          <Animated animation="fadeIn" delay={0.4} duration={0.6}>
            <CtaBand>
              <CtaLeft>
                <CtaEyebrow>
                  <MessageSquare size={13} /> Get In Touch
                </CtaEyebrow>
                <CtaHeading>Ready to Power Your Cleaning Fleet?</CtaHeading>
                <CtaSub>
                  Speak with our industrial solutions team for the right battery
                  specification.
                </CtaSub>
              </CtaLeft>
              <CtaButton href="/contact-us">
                Contact Our Team <ArrowRight size={16} />
              </CtaButton>
            </CtaBand>
          </Animated>
        </Container>
      </AppSection>
    </PageWrapper>
  );
};

export default ECleaningMachineBatteries;

/* ─── Keyframes ──────────────────────────────── */
const floatAnim = keyframes`
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-12px); }
`;

const pulseGlow = keyframes`
  0%, 100% { opacity: 0.35; transform: scale(1); }
  50%       { opacity: 0.6;  transform: scale(1.06); }
`;

/* ─── Base ───────────────────────────────────── */
const PageWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  background: var(--color-bg);
`;

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 18px;
  }
`;

/* ─── Shared ─────────────────────────────────── */
const SectionEyebrow = styled.p`
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: var(--color-primary);
  margin: 0 0 0.45rem;
  ${({ centered }) => centered && "text-align: center;"}
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 900;
  color: var(--color-text);
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0 0 2rem;
  ${({ centered }) => centered && "text-align: center;"}
`;

/* ─── Hero ───────────────────────────────────── */
const HeroSection = styled.section`
  position: relative;
  overflow: hidden;
  background: linear-gradient(140deg, #080e1a 0%, #0b1e12 55%, #080e1a 100%);
  padding: 130px 0 100px;

  @media (max-width: 768px) {
    padding: 110px 0 72px;
  }
`;

const HeroBgGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0, 200, 81, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 200, 81, 0.04) 1px, transparent 1px);
  background-size: 44px 44px;
  pointer-events: none;
`;

const HeroGlow = styled.div`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      ellipse at 70% 40%,
      rgba(0, 200, 81, 0.1) 0%,
      transparent 55%
    ),
    radial-gradient(
      ellipse at 15% 70%,
      rgba(33, 150, 243, 0.07) 0%,
      transparent 45%
    );
  pointer-events: none;
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 44px;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;

  @media (max-width: 900px) {
    order: 2;
    align-items: center;
    text-align: center;
  }
`;

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-primary);
  background: rgba(0, 200, 81, 0.1);
  border: 1px solid rgba(0, 200, 81, 0.22);
  padding: 0.32rem 0.85rem;
  border-radius: 999px;
  width: fit-content;
`;

const HeroHeading = styled.h1`
  font-size: clamp(2.5rem, 5.5vw, 3.75rem);
  font-weight: 900;
  color: #fff;
  line-height: 1.05;
  letter-spacing: -0.03em;
  margin: 0;
`;

const HeroAccent = styled.span`
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const HeroSubheading = styled.p`
  font-size: 1.05rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
  margin: 0;
  max-width: 480px;
`;

const HeroDescription = styled.p`
  font-size: 0.925rem;
  color: rgba(255, 255, 255, 0.38);
  line-height: 1.7;
  margin: 0;
  max-width: 460px;
`;

const HeroStats = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 12px;
  overflow: hidden;
  max-width: 480px;

  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

const HeroStat = styled.div`
  background: rgba(255, 255, 255, 0.02);
  padding: 0.875rem 0.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const StatVal = styled.span`
  font-size: 0.95rem;
  font-weight: 900;
  color: var(--color-primary);
  font-family: var(--font-family-mono);
  line-height: 1;
`;

const StatLabel = styled.span`
  font-size: 0.6rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.35);
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

const HeroCTARow = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const CTAButtonPrimary = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: var(--color-primary);
  color: #fff;
  padding: 0.875rem 1.875rem;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(0, 200, 81, 0.35);
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(0, 200, 81, 0.45);
    color: #fff;
  }
`;

const CTAButtonGhost = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.875rem 1.875rem;
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  backdrop-filter: blur(6px);
  transition: all 0.25s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    transform: translateY(-2px);
  }
`;

const HeroImageArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    order: 1;
  }
`;

const HeroImageFrame = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 24px 56px rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(0, 200, 81, 0.15);
  animation: ${floatAnim} 6s ease-in-out infinite;

  img {
    width: 100%;
    height: 420px;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 900px) {
    max-height: 320px;
    img {
      height: 320px;
    }
  }
`;

const HeroImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(8, 14, 26, 0.55) 0%,
    transparent 50%
  );
  z-index: 1;
`;

const HeroImageBadge = styled.div`
  position: absolute;
  bottom: 1.25rem;
  right: 1.25rem;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: var(--color-primary);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  box-shadow: 0 4px 16px rgba(0, 200, 81, 0.4);
`;

/* ─── Power Section ──────────────────────────── */
const PowerSection = styled.section`
  padding: 88px 0;
  background: var(--color-surface);
  border-top: 1px solid var(--color-border-light);
  border-bottom: 1px solid var(--color-border-light);
`;

const PowerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const PowerCard = styled.div`
  background: var(--color-bg);
  border: 1px solid var(--color-border-light);
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
  }
`;

const PowerImageWrap = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  ${PowerCard}:hover & img {
    transform: scale(1.05);
  }
`;

const PowerImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 40%,
    ${({ $color }) => $color}22 100%
  );
`;

const PowerIconBadge = styled.div`
  position: absolute;
  bottom: -12px;
  right: 16px;
  width: 24px;
  height: 24px;
  background: ${({ $color }) => $color};
  border-radius: 6px;
  box-shadow: 0 3px 10px ${({ $color }) => $color}55;
`;

const PowerContent = styled.div`
  padding: 1.5rem 1.25rem 1.25rem;

  h4 {
    font-size: 1.05rem;
    font-weight: 800;
    color: var(--color-text);
    margin: 0 0 0.4rem;
  }

  p {
    font-size: 0.875rem;
    color: var(--color-text-muted);
    line-height: 1.6;
    margin: 0;
  }
`;

const PowerAccentBar = styled.div`
  height: 3px;
  background: ${({ $color }) => $color};
  opacity: 0.6;
`;

/* ─── Features ───────────────────────────────── */
const FeaturesSection = styled.section`
  padding: 88px 0;
  background: var(--color-bg);
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border-light);
  border-radius: 16px;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  position: relative;
  overflow: hidden;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 28px ${({ $color }) => $color}18;
    border-color: ${({ $color }) => $color}44;
  }
`;

const FeatureCardAccent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: ${({ $color }) => $color};
`;

const FeatureIcon = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 11px;
  background: ${({ $color }) => $color}14;
  border: 1px solid ${({ $color }) => $color}28;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.25rem;
`;

const FeatureTitle = styled.h4`
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--color-text);
  margin: 0;
`;

const FeatureDesc = styled.p`
  font-size: 0.875rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin: 0;
`;

/* ─── Tech ───────────────────────────────────── */
const TechSection = styled.section`
  padding: 88px 0;
  background: var(--color-surface);
  border-top: 1px solid var(--color-border-light);
  border-bottom: 1px solid var(--color-border-light);
`;

const SplitLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const TechContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TechList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 0.5rem;
`;

const TechItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const IconBox = styled.div`
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  border-radius: 11px;
  background: ${({ $color }) => $color}12;
  border: 1px solid ${({ $color }) => $color}25;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TechText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const ItemTitle = styled.h4`
  font-size: 1rem;
  font-weight: 800;
  color: var(--color-text);
  margin: 0;
`;

const ItemDesc = styled.p`
  font-size: 0.875rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin: 0;
`;

const TechImageArea = styled.div`
  width: 100%;
`;

const TechImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 420px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);
  border: 1px solid var(--color-border-light);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const TechImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(8, 14, 26, 0.5) 0%, transparent 55%);
`;

const TechImageBadge = styled.div`
  position: absolute;
  bottom: 1.25rem;
  left: 1.25rem;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(8, 14, 26, 0.85);
  color: var(--color-primary);
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  border: 1px solid rgba(0, 200, 81, 0.25);
  backdrop-filter: blur(6px);
`;

/* ─── Durability ─────────────────────────────── */
const DurabilitySection = styled.section`
  padding: 100px 0;
  position: relative;
  background: url("https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1600&auto=format&fit=crop")
    center / cover no-repeat;
  background-attachment: fixed;
  text-align: center;
`;

const DurabilityOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(8, 14, 26, 0.88);
  z-index: 1;
`;

const DurabilityGrid = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background-image:
    linear-gradient(rgba(0, 200, 81, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 200, 81, 0.03) 1px, transparent 1px);
  background-size: 44px 44px;
`;

const DurabilityInner = styled.div`
  position: relative;
  z-index: 2;
  max-width: 740px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`;

const DurabilityEyebrow = styled.span`
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.45);
`;

const DurabilityHeading = styled.h2`
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 900;
  color: #fff;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0;
`;

const DurabilityText = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.7;
  margin: 0;
`;

const DurabilityStats = styled.div`
  display: flex;
  gap: 1px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 12px;
  overflow: hidden;
  margin-top: 0.5rem;
`;

const DurabilityStatItem = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.02);
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const DurabilityStatVal = styled.span`
  font-size: 0.95rem;
  font-weight: 900;
  color: var(--color-primary);
  font-family: var(--font-family-mono);
  line-height: 1;
`;

const DurabilityStatLabel = styled.span`
  font-size: 0.62rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.35);
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

/* ─── Sustainability ─────────────────────────── */
const SustainabilitySection = styled.section`
  padding: 88px 0;
  background: var(--color-bg);
`;

const SusGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const SusCard = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border-light);
  border-top: 3px solid ${({ $color }) => $color};
  border-radius: 14px;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px ${({ $color }) => $color}14;
    border-top-color: ${({ $color }) => $color};
    border-color: ${({ $color }) => $color}40;
  }
`;

const SusIconWrap = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: ${({ $color }) => $color}14;
  border: 1.5px solid ${({ $color }) => $color}30;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SusText = styled.p`
  font-size: 0.9rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin: 0;

  strong {
    color: var(--color-text);
    font-weight: 700;
  }
`;

/* ─── Applications ───────────────────────────── */
const AppSection = styled.section`
  padding: 88px 0 100px;
  background: var(--color-surface);
  border-top: 1px solid var(--color-border-light);
`;

const AppGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  max-width: 960px;
  margin: 0 auto 4rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const AppCard = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  padding: 1.1rem 1.25rem;
  background: var(--color-bg);
  border: 1px solid var(--color-border-light);
  border-left: 3px solid ${({ $color }) => $color};
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--color-text);
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ $color }) => $color}88;
    box-shadow: 0 4px 16px ${({ $color }) => $color}14;
    transform: translateX(3px);
  }
`;

const AppIconWrap = styled.div`
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  border-radius: 8px;
  background: ${({ $color }) => $color}14;
  border: 1px solid ${({ $color }) => $color}25;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* ─── Inline CTA Band ────────────────────────── */
const CtaBand = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  background: linear-gradient(140deg, #080e1a 0%, #0b1e12 100%);
  border: 1px solid rgba(0, 200, 81, 0.14);
  border-radius: 20px;
  padding: 2.25rem 2.75rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(0, 200, 81, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 200, 81, 0.03) 1px, transparent 1px);
    background-size: 36px 36px;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 2rem 1.5rem;
    gap: 1.5rem;
  }
`;

const CtaLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  position: relative;
  z-index: 1;
`;

const CtaEyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-primary);
`;

const CtaHeading = styled.h3`
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  font-weight: 900;
  color: #fff;
  margin: 0;
  line-height: 1.2;
`;

const CtaSub = styled.p`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.45);
  margin: 0;
`;

const CtaButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: var(--color-primary);
  color: #fff;
  padding: 0.9rem 2rem;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(0, 200, 81, 0.35);
  flex-shrink: 0;
  white-space: nowrap;
  position: relative;
  z-index: 1;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(0, 200, 81, 0.45);
    color: #fff;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;
