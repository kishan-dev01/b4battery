import React from "react";
import styled, { keyframes } from "styled-components";
import {
  ArrowRight,
  BatteryCharging,
  Zap,
  Database,
  Settings2,
  ShieldCheck,
  ThermometerSnowflake,
  Crosshair,
  Map,
  Tractor,
  LifeBuoy,
  MessageSquare,
  Recycle,
  Wind,
  Radio,
} from "lucide-react";
import Animated from "../../components/common/Animated";

const EDroneBatteries = () => {
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
                <Eyebrow>
                  <Wind size={13} /> Aviation Energy Systems
                </Eyebrow>
                <HeroHeading>
                  E-Drone
                  <br />
                  <HeroAccent>Batteries</HeroAccent>
                </HeroHeading>
                <HeroSubheading>
                  High-density lithium power systems engineered for
                  next-generation unmanned aerial vehicles.
                </HeroSubheading>
                <HeroDescription>
                  Designed for UAV applications including mapping, surveying,
                  agriculture spraying, and industrial inspection — built with
                  advanced chemistries and intelligent BMS for reliable
                  high-altitude, high-discharge flight operations.
                </HeroDescription>

                <HeroStats>
                  {[
                    { val: "400 Wh/kg", label: "Energy Density" },
                    { val: "30C", label: "Max Discharge" },
                    { val: "IP54", label: "Protection" },
                    { val: "−20°C", label: "Min. Temp" },
                  ].map((s) => (
                    <HeroStat key={s.label}>
                      <StatVal>{s.val}</StatVal>
                      <StatLabel>{s.label}</StatLabel>
                    </HeroStat>
                  ))}
                </HeroStats>

                <HeroCTARow>
                  <CTAButtonPrimary href="#technology">
                    Explore Technology <ArrowRight size={16} />
                  </CTAButtonPrimary>
                  <CTAButtonGhost href="/contact-us">
                    Get a Quote
                  </CTAButtonGhost>
                </HeroCTARow>
              </Animated>
            </HeroContent>

            <HeroImageArea>
              <Animated animation="fadeIn" delay={0.2} duration={0.8}>
                <HeroImageFrame>
                  <HeroImageGlow />
                  <img
                    src="/images/product7.jpeg"
                    alt="High-Performance E-Drone Battery"
                    loading="lazy"
                  />
                  <HeroImageBadge>
                    <BatteryCharging size={14} />
                    Smart BMS Enabled
                  </HeroImageBadge>
                </HeroImageFrame>
              </Animated>
            </HeroImageArea>
          </HeroGrid>
        </Container>
      </HeroSection>

      {/* ── 2. CHEMISTRY ── */}
      <ChemistrySection id="technology">
        <Container>
          <Animated animation="fadeInDown" duration={0.6}>
            <SectionEyebrow>Chemistry Platform</SectionEyebrow>
            <SectionTitle centered>Advanced Flight Chemistries</SectionTitle>
            <SectionSub centered>
              Two purpose-built chemistries optimised for different UAV mission
              profiles.
            </SectionSub>
          </Animated>

          <ChemistryGrid>
            <Animated animation="fadeInUp" delay={0.1} duration={0.5}>
              <ChemistryCard $accent="#00C851">
                <ChemAccentBar $color="#00C851" />
                <ChemHeader>
                  <ChemIconWrap $color="#00C851">
                    <BatteryCharging size={24} />
                  </ChemIconWrap>
                  <ChemBadge $color="#00C851">Long Range</ChemBadge>
                </ChemHeader>
                <CardTitle>Semi-Solid State Lithium-Ion</CardTitle>
                <CardDesc>
                  Optimized for long-range drone missions such as mapping and
                  aerial surveying.
                </CardDesc>
                <HighlightBox $color="#00C851">
                  <HighlightIcon $color="#00C851">
                    <Zap size={14} />
                  </HighlightIcon>
                  <span>
                    Energy density up to <strong>400 Wh/kg</strong> — doubling
                    flight time vs standard lithium packs.
                  </span>
                </HighlightBox>
              </ChemistryCard>
            </Animated>

            <Animated animation="fadeInUp" delay={0.2} duration={0.5}>
              <ChemistryCard $accent="#FF9800">
                <ChemAccentBar $color="#FF9800" />
                <ChemHeader>
                  <ChemIconWrap $color="#FF9800">
                    <Zap size={24} />
                  </ChemIconWrap>
                  <ChemBadge $color="#FF9800">Heavy Lift</ChemBadge>
                </ChemHeader>
                <CardTitle>High-C LiFePO4</CardTitle>
                <CardDesc>
                  Designed for heavy-lift industrial drones used in agriculture
                  spraying and cargo operations.
                </CardDesc>
                <HighlightBox $color="#FF9800">
                  <HighlightIcon $color="#FF9800">
                    <Zap size={14} />
                  </HighlightIcon>
                  <span>
                    <strong>15C–30C continuous discharge</strong> — stable
                    altitude even during heavy maneuvering.
                  </span>
                </HighlightBox>
              </ChemistryCard>
            </Animated>
          </ChemistryGrid>
        </Container>
      </ChemistrySection>

      {/* ── 3. INTELLIGENCE ── */}
      <IntelligenceSection>
        <IntelBg />
        <Container>
          <Animated animation="fadeInDown" duration={0.6}>
            <SectionEyebrow light>Smart Systems</SectionEyebrow>
            <SectionTitle centered light>
              Flight-Aware Battery Intelligence
            </SectionTitle>
            <SectionSub centered light>
              Every pack ships with an embedded BMS that thinks, learns, and
              protects.
            </SectionSub>
          </Animated>

          <IntelligenceGrid>
            {[
              {
                icon: <Settings2 size={22} />,
                color: "#00C851",
                title: "Auto Storage Mode",
                desc: "If the battery remains at full charge for more than 48 hours, the system automatically discharges to the ideal storage level of 60% to protect cell health.",
              },
              {
                icon: <Database size={22} />,
                color: "#2196F3",
                title: "Black Box Logging",
                desc: "Records key operational data such as temperature, voltage sag, and cycle history to predict battery retirement before flight failure.",
              },
              {
                icon: <ShieldCheck size={22} />,
                color: "#FF9800",
                title: "Anti-Spark Technology",
                desc: "Integrated AS150 or XT90-S connectors prevent electrical sparks when connecting high-voltage packs, ensuring safe deployment.",
              },
            ].map((f, i) => (
              <Animated
                key={f.title}
                animation="fadeInUp"
                delay={i * 0.12}
                duration={0.5}
              >
                <IntelCard>
                  <IntelIconWrap $color={f.color}>
                    <span style={{ color: f.color }}>{f.icon}</span>
                  </IntelIconWrap>
                  <IntelTitle>{f.title}</IntelTitle>
                  <IntelDesc>{f.desc}</IntelDesc>
                  <IntelAccent $color={f.color} />
                </IntelCard>
              </Animated>
            ))}
          </IntelligenceGrid>
        </Container>
      </IntelligenceSection>

      {/* ── 4. RESILIENCE ── */}
      <ResilienceSection>
        <Container>
          <SplitLayout>
            <VisualArea>
              <Animated animation="fadeInRight" duration={0.8}>
                <ResilienceImageWrap>
                  <img
                    src="https://images.unsplash.com/photo-1559827599-52ebde540f26?q=80&w=1000&auto=format&fit=crop"
                    alt="Industrial drone inspection"
                    loading="lazy"
                  />
                  <ResilienceImageOverlay />
                  <ResilienceBadge>
                    <Radio size={13} />
                    Industrial Grade
                  </ResilienceBadge>
                </ResilienceImageWrap>
              </Animated>
            </VisualArea>

            <ContentArea>
              <Animated animation="fadeInLeft" duration={0.6}>
                <SectionEyebrow>Durability</SectionEyebrow>
                <SectionTitle>
                  Built for Harsh
                  <br />
                  Operating Environments
                </SectionTitle>
                <ResilienceList>
                  <ResilienceItem>
                    <IconBox $color="#00C851">
                      <ShieldCheck size={20} />
                    </IconBox>
                    <ResilienceText>
                      <ItemTitle>IP54-Rated Eco-Cradle Shell</ItemTitle>
                      <ItemDesc>
                        Protects against dust and light rain, making it suitable
                        for agricultural and search-and-rescue missions.
                      </ItemDesc>
                    </ResilienceText>
                  </ResilienceItem>
                  <ResilienceItem>
                    <IconBox $color="#2196F3">
                      <ThermometerSnowflake size={20} />
                    </IconBox>
                    <ResilienceText>
                      <ItemTitle>Low-Temperature Operation</ItemTitle>
                      <ItemDesc>
                        Integrated self-heating elements allow operation down to
                        −20°C, preventing sudden voltage drops during
                        cold-weather flights.
                      </ItemDesc>
                    </ResilienceText>
                  </ResilienceItem>
                </ResilienceList>
              </Animated>
            </ContentArea>
          </SplitLayout>
        </Container>
      </ResilienceSection>

      {/* ── 5. LIFECYCLE ── */}
      <LifecycleSection>
        <Container>
          <Animated animation="fadeInUp" duration={0.6}>
            <SectionEyebrow centered>Sustainability</SectionEyebrow>
            <SectionTitle centered>Circular Energy Design</SectionTitle>
            <SectionSub centered>
              Following the E-Cycle sustainability mission, drone batteries are
              designed for extended lifecycle use.
            </SectionSub>

            <LifecycleFlow>
              {[
                {
                  icon: <BatteryCharging size={22} />,
                  label: "Primary Use",
                  sub: "UAV Flight Operations",
                  color: "#00C851",
                },
                {
                  icon: <ArrowRight size={18} />,
                  label: "",
                  sub: "",
                  color: "transparent",
                  arrow: true,
                },
                {
                  icon: <Recycle size={22} />,
                  label: "Capacity < 80%",
                  sub: "Retirement Triggered",
                  color: "#FF9800",
                },
                {
                  icon: <ArrowRight size={18} />,
                  label: "",
                  sub: "",
                  color: "transparent",
                  arrow: true,
                },
                {
                  icon: <Zap size={22} />,
                  label: "Second Life",
                  sub: "Ground Energy Systems",
                  color: "#2196F3",
                },
              ].map((step, i) =>
                step.arrow ? (
                  <LifecycleArrow key={i}>
                    <ArrowRight size={18} />
                  </LifecycleArrow>
                ) : (
                  <LifecycleStep key={i}>
                    <LifecycleIconWrap $color={step.color}>
                      <span style={{ color: step.color }}>{step.icon}</span>
                    </LifecycleIconWrap>
                    <LifecycleStepLabel>{step.label}</LifecycleStepLabel>
                    <LifecycleStepSub>{step.sub}</LifecycleStepSub>
                  </LifecycleStep>
                ),
              )}
            </LifecycleFlow>

            <LifecycleCards>
              {[
                "Portable power stations",
                "Backup lighting systems",
                "Small off-grid energy storage",
              ].map((item) => (
                <LifecycleCard key={item}>
                  <Zap size={14} />
                  {item}
                </LifecycleCard>
              ))}
            </LifecycleCards>

            <LifecycleSummary>
              This approach reduces waste while extending battery value beyond
              aviation use.
            </LifecycleSummary>
          </Animated>
        </Container>
      </LifecycleSection>

      {/* ── 6. UAV APPLICATIONS ── */}
      <ApplicationsSection>
        <Container>
          <Animated animation="fadeInDown" duration={0.6}>
            <SectionEyebrow centered>Use Cases</SectionEyebrow>
            <SectionTitle centered>UAV Applications</SectionTitle>
          </Animated>

          <AppsGrid>
            {[
              {
                img: "https://images.unsplash.com/photo-1563985040-02e09ae54fb7?q=80&w=600&auto=format&fit=crop",
                icon: <Tractor size={18} />,
                title: "Agriculture Spraying",
                desc: "Reliable high-discharge power for crop spraying drones.",
                color: "#00C851",
                delay: 0.1,
              },
              {
                img: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=600&auto=format&fit=crop",
                icon: <Map size={18} />,
                title: "Aerial Mapping",
                desc: "Long-range flight endurance for surveying missions.",
                color: "#2196F3",
                delay: 0.2,
              },
              {
                img: "https://images.unsplash.com/photo-1629849048386-8d5a22830f02?q=80&w=600&auto=format&fit=crop",
                icon: <Crosshair size={18} />,
                title: "Infrastructure Inspection",
                desc: "Stable power for power lines, wind turbines, and pipelines.",
                color: "#FF9800",
                delay: 0.3,
              },
              {
                img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=600&auto=format&fit=crop",
                icon: <LifeBuoy size={18} />,
                title: "Search & Rescue",
                desc: "Reliable performance in demanding and critical environments.",
                color: "#9C27B0",
                delay: 0.4,
              },
            ].map((app) => (
              <Animated
                key={app.title}
                animation="fadeInUp"
                delay={app.delay}
                duration={0.5}
              >
                <AppCard>
                  <AppImageWrapper>
                    <img src={app.img} alt={app.title} loading="lazy" />
                    <AppImageOverlay $color={app.color} />
                    <AppIconOverlay $color={app.color}>
                      <span style={{ color: "#fff" }}>{app.icon}</span>
                    </AppIconOverlay>
                  </AppImageWrapper>
                  <AppContent>
                    <AppTitle>{app.title}</AppTitle>
                    <AppDesc>{app.desc}</AppDesc>
                  </AppContent>
                  <AppAccentBar $color={app.color} />
                </AppCard>
              </Animated>
            ))}
          </AppsGrid>
        </Container>
      </ApplicationsSection>

      {/* ── 7. CTA ── */}
      <CtaSection>
        <CtaBg />
        <CtaGrid />
        <Container>
          <Animated animation="slideUp" duration={0.6}>
            <CtaWrapper>
              <CtaEyebrow>
                <MessageSquare size={13} /> Get In Touch
              </CtaEyebrow>
              <CtaHeading>
                Power the Next Generation
                <br />
                of UAV Innovation
              </CtaHeading>
              <CtaDescription>
                Advanced lithium battery technology enabling longer flights,
                safer missions, and higher reliability for industrial drone
                operations.
              </CtaDescription>
              <CtaButtonRow>
                <CtaButtonPrimary href="/contact-us">
                  <MessageSquare size={16} /> Contact Aviation Solutions Team
                </CtaButtonPrimary>
                <CtaButtonOutline href="/products">
                  View All Products
                </CtaButtonOutline>
              </CtaButtonRow>
            </CtaWrapper>
          </Animated>
        </Container>
      </CtaSection>
    </PageWrapper>
  );
};

export default EDroneBatteries;

/* ─── Keyframes ──────────────────────────────── */
const floatAnim = keyframes`
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-14px); }
`;

const pulseGlow = keyframes`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50%       { opacity: 0.65; transform: scale(1.06); }
`;

const scanDown = keyframes`
  0%   { top: -4px; opacity: 0.6; }
  100% { top: 100%; opacity: 0; }
`;

/* ─── Base ───────────────────────────────────── */
const PageWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  background: var(--color-bg);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 768px) {
    padding: 0 18px;
  }
`;

/* ─── Shared typography ──────────────────────── */
const SectionEyebrow = styled.p`
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: ${({ light }) =>
    light ? "rgba(255,255,255,0.5)" : "var(--color-primary)"};
  margin: 0 0 0.5rem;
  ${({ centered }) => centered && "text-align: center;"}
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 900;
  color: ${({ light }) => (light ? "#fff" : "var(--color-text)")};
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0 0 0.75rem;
  ${({ centered }) => centered && "text-align: center;"}
`;

const SectionSub = styled.p`
  font-size: 1rem;
  color: ${({ light }) =>
    light ? "rgba(255,255,255,0.55)" : "var(--color-text-muted)"};
  line-height: 1.65;
  max-width: 600px;
  margin: 0 0 3rem;
  ${({ centered }) =>
    centered && "margin-left: auto; margin-right: auto; text-align: center;"}
`;

/* ─── Hero ───────────────────────────────────── */
const HeroSection = styled.section`
  position: relative;
  overflow: hidden;
  background: linear-gradient(140deg, #080e1a 0%, #0b1e12 55%, #080e1a 100%);
  padding: 140px 0 110px;

  @media (max-width: 768px) {
    padding: 110px 0 70px;
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
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

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
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  width: fit-content;
`;

const HeroHeading = styled.h1`
  font-size: clamp(2.75rem, 6vw, 4.5rem);
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

const HeroSubheading = styled.h3`
  font-size: 1.1rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.55;
  margin: 0;
  max-width: 480px;
`;

const HeroDescription = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.42);
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
  font-size: 1.05rem;
  font-weight: 900;
  color: var(--color-primary);
  font-family: var(--font-family-mono);
  line-height: 1;
`;

const StatLabel = styled.span`
  font-size: 0.62rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.35);
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

const HeroCTARow = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
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
  max-width: 480px;
  animation: ${floatAnim} 6s ease-in-out infinite;

  img {
    width: 100%;
    height: auto;
    max-height: 440px;
    object-fit: contain;
    position: relative;
    z-index: 2;
    filter: drop-shadow(0 24px 48px rgba(0, 200, 81, 0.2));
  }
`;

const HeroImageGlow = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  height: 80px;
  background: radial-gradient(
    ellipse,
    rgba(0, 200, 81, 0.25) 0%,
    transparent 70%
  );
  filter: blur(20px);
  animation: ${pulseGlow} 3s ease-in-out infinite;
  z-index: 1;
`;

const HeroImageBadge = styled.div`
  position: absolute;
  bottom: 1.25rem;
  right: 0;
  z-index: 3;
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

/* ─── Chemistry ──────────────────────────────── */
const ChemistrySection = styled.section`
  padding: 100px 0;
  background: var(--color-surface);
  border-top: 1px solid var(--color-border-light);
  border-bottom: 1px solid var(--color-border-light);
`;

const ChemistryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.75rem;
  max-width: 960px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ChemistryCard = styled.div`
  background: var(--color-bg);
  border: 1px solid var(--color-border-light);
  border-radius: 20px;
  padding: 2.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  overflow: hidden;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px ${({ $accent }) => $accent}18;
    border-color: ${({ $accent }) => $accent}44;
  }
`;

const ChemAccentBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: ${({ $color }) => $color};
`;

const ChemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ChemIconWrap = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: ${({ $color }) => $color}14;
  border: 1px solid ${({ $color }) => $color}28;
  color: ${({ $color }) => $color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChemBadge = styled.span`
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ $color }) => $color};
  background: ${({ $color }) => $color}12;
  border: 1px solid ${({ $color }) => $color}25;
  padding: 0.25rem 0.7rem;
  border-radius: 999px;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--color-text);
  margin: 0;
  line-height: 1.3;
`;

const CardDesc = styled.p`
  font-size: 0.95rem;
  color: var(--color-text-muted);
  line-height: 1.65;
  margin: 0;
  flex-grow: 1;
`;

const HighlightBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  background: ${({ $color }) => $color}08;
  border: 1px solid ${({ $color }) => $color}20;
  border-left: 3px solid ${({ $color }) => $color};
  padding: 0.875rem 1rem;
  border-radius: 0 10px 10px 0;
  font-size: 0.88rem;
  color: var(--color-text);
  line-height: 1.55;

  strong {
    color: ${({ $color }) => $color};
    font-weight: 700;
  }
`;

const HighlightIcon = styled.div`
  color: ${({ $color }) => $color};
  flex-shrink: 0;
  margin-top: 1px;
`;

/* ─── Intelligence ───────────────────────────── */
const IntelligenceSection = styled.section`
  padding: 100px 0;
  position: relative;
  overflow: hidden;
  background: linear-gradient(140deg, #080e1a 0%, #0c1e12 100%);
`;

const IntelBg = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0, 200, 81, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 200, 81, 0.03) 1px, transparent 1px);
  background-size: 44px 44px;
  pointer-events: none;
`;

const IntelligenceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const IntelCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  padding: 2rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  position: relative;
  overflow: hidden;
  transition: all 0.25s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.055);
    border-color: rgba(255, 255, 255, 0.14);
    transform: translateY(-4px);
  }
`;

const IntelIconWrap = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: ${({ $color }) => $color}18;
  border: 1px solid ${({ $color }) => $color}28;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IntelTitle = styled.h4`
  font-size: 1.05rem;
  font-weight: 800;
  color: #fff;
  margin: 0;
`;

const IntelDesc = styled.p`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.48);
  line-height: 1.65;
  margin: 0;
  flex-grow: 1;
`;

const IntelAccent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: ${({ $color }) => $color};
  opacity: 0.55;
`;

/* ─── Resilience ─────────────────────────────── */
const ResilienceSection = styled.section`
  padding: 100px 0;
  background: var(--color-bg);
  border-top: 1px solid var(--color-border-light);
  border-bottom: 1px solid var(--color-border-light);
`;

const SplitLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const VisualArea = styled.div`
  width: 100%;
`;

const ResilienceImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 420px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.14);
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

const ResilienceImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(8, 14, 26, 0.6) 0%, transparent 50%);
`;

const ResilienceBadge = styled.div`
  position: absolute;
  bottom: 1.25rem;
  left: 1.25rem;
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

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ResilienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  margin-top: 1.75rem;
`;

const ResilienceItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.125rem;
`;

const IconBox = styled.div`
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 12px;
  background: ${({ $color }) => $color}12;
  border: 1px solid ${({ $color }) => $color}25;
  color: ${({ $color }) => $color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ResilienceText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

const ItemTitle = styled.h4`
  font-size: 1rem;
  font-weight: 800;
  color: var(--color-text);
  margin: 0;
`;

const ItemDesc = styled.p`
  font-size: 0.9rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin: 0;
`;

/* ─── Lifecycle ──────────────────────────────── */
const LifecycleSection = styled.section`
  padding: 100px 0;
  background: var(--color-surface);
`;

const LifecycleFlow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const LifecycleStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background: var(--color-bg);
  border: 1px solid var(--color-border-light);
  border-radius: 16px;
  padding: 1.5rem 1.75rem;
  min-width: 160px;
`;

const LifecycleIconWrap = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${({ $color }) => $color}14;
  border: 1px solid ${({ $color }) => $color}28;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LifecycleStepLabel = styled.span`
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text-muted);
`;

const LifecycleStepSub = styled.span`
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--color-text);
  text-align: center;
  line-height: 1.3;
`;

const LifecycleArrow = styled.div`
  color: var(--color-border);
  flex-shrink: 0;
`;

const LifecycleCards = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1.75rem;
`;

const LifecycleCard = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-text);
  background: var(--color-bg);
  border: 1px solid var(--color-border-light);
  padding: 0.5rem 1rem;
  border-radius: 999px;

  svg {
    color: var(--color-primary);
  }
`;

const LifecycleSummary = styled.p`
  text-align: center;
  font-size: 0.9rem;
  color: var(--color-text-muted);
  font-style: italic;
  margin: 0 auto;
  max-width: 480px;
`;

/* ─── Applications ───────────────────────────── */
const ApplicationsSection = styled.section`
  padding: 100px 0;
  background: var(--color-bg);
  border-top: 1px solid var(--color-border-light);
`;

const AppsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 2.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const AppCard = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border-light);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.25s ease;
  position: relative;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
  }
`;

const AppImageWrapper = styled.div`
  width: 100%;
  height: 180px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  ${AppCard}:hover & img {
    transform: scale(1.05);
  }
`;

const AppImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 30%,
    ${({ $color }) => $color}22 100%
  );
`;

const AppIconOverlay = styled.div`
  position: absolute;
  bottom: -14px;
  right: 18px;
  width: 32px;
  height: 32px;
  background: ${({ $color }) => $color};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px ${({ $color }) => $color}55;
  z-index: 1;
`;

const AppContent = styled.div`
  padding: 1.5rem 1.25rem 1.25rem;
`;

const AppTitle = styled.h4`
  font-size: 1rem;
  font-weight: 800;
  color: var(--color-text);
  margin: 0 0 0.4rem;
`;

const AppDesc = styled.p`
  font-size: 0.85rem;
  color: var(--color-text-muted);
  line-height: 1.55;
  margin: 0;
`;

const AppAccentBar = styled.div`
  height: 3px;
  background: ${({ $color }) => $color};
  opacity: 0.6;
`;

/* ─── CTA ────────────────────────────────────── */
const CtaSection = styled.section`
  position: relative;
  overflow: hidden;
  padding: 110px 0;
  background: linear-gradient(140deg, #080e1a 0%, #0b1e12 60%, #080e1a 100%);
  text-align: center;
`;

const CtaBg = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at 50% 60%,
    rgba(0, 200, 81, 0.1) 0%,
    transparent 60%
  );
  pointer-events: none;
`;

const CtaGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0, 200, 81, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 200, 81, 0.03) 1px, transparent 1px);
  background-size: 44px 44px;
  pointer-events: none;
`;

const CtaWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`;

const CtaEyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-primary);
  background: rgba(0, 200, 81, 0.1);
  border: 1px solid rgba(0, 200, 81, 0.22);
  padding: 0.3rem 0.85rem;
  border-radius: 999px;
`;

const CtaHeading = styled.h3`
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 900;
  color: #fff;
  margin: 0;
  line-height: 1.15;
`;

const CtaDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.65;
  margin: 0;
  max-width: 540px;
`;

const CtaButtonRow = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0.5rem;
`;

const CtaButtonPrimary = styled.a`
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
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(0, 200, 81, 0.45);
    color: #fff;
  }
`;

const CtaButtonOutline = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.9rem 2rem;
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.09);
    color: #fff;
    transform: translateY(-2px);
  }
`;
