import React from "react";
import styled, { keyframes } from "styled-components";
import {
  ArrowRight,
  MapPin,
  RefreshCw,
  Zap,
  Timer,
  TrendingDown,
  ShieldCheck,
  Share2,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import Animated from "../../components/common/Animated";

const baasAdvantages = [
  {
    icon: <Timer size={20} />,
    title: "Zero Waiting",
    description: "Battery swapping eliminates long charging downtime.",
    color: "#00C851",
  },
  {
    icon: <TrendingDown size={20} />,
    title: "Lower Upfront Cost",
    description:
      "Customers can purchase the vehicle without the battery, reducing initial vehicle cost by up to 40%.",
    color: "#2196F3",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Always New Batteries",
    description:
      "Subscribers always receive battery packs maintained at optimal health levels.",
    color: "#FF9800",
  },
  {
    icon: <Share2 size={20} />,
    title: "Network Powered",
    description:
      "Swap stations allow convenient energy access across supported locations.",
    color: "#9C27B0",
  },
];

const baasBenefitsList = [
  "Lower initial EV purchase cost",
  "Access to well-maintained batteries",
  "Reduced battery degradation concerns",
  "Faster energy access through swap stations",
];

const STEPS = [
  {
    icon: <MapPin size={24} />,
    step: "01",
    title: "Arrive",
    description:
      "Visit any partner battery swap station when your battery charge is low.",
    color: "#00C851",
  },
  {
    icon: <RefreshCw size={24} />,
    step: "02",
    title: "Swap",
    description: "Exchange your depleted battery pack for a fully charged one.",
    color: "#2196F3",
  },
  {
    icon: <Zap size={24} />,
    step: "03",
    title: "Continue Riding",
    description:
      "Get back on the road instantly without waiting hours for charging.",
    color: "#FF9800",
  },
];

const BatterySwappingBaaS = () => {
  return (
    <PageWrapper>
      {/* ── 1. HERO ── */}
      <HeroSection>
        <HeroBgGrid />
        <HeroGlow />
        <Container>
          <HeroGrid>
            <HeroImageArea>
              <Animated animation="fadeIn" delay={0.2} duration={0.8}>
                <HeroImageFrame>
                  <HeroImageGlow />
                  <img
                    src="/images/products/battery-swapping.png"
                    alt="EV Battery Swapping Station"
                    loading="lazy"
                  />
                  <HeroImageBadge>
                    <Timer size={13} /> Under 3 Min Swap
                  </HeroImageBadge>
                </HeroImageFrame>
              </Animated>
            </HeroImageArea>

            <HeroContent>
              <Animated animation="fadeInDown" duration={0.6}>
                <Eyebrow>Mobility Infrastructure</Eyebrow>
                <HeroHeading>
                  Battery Swapping &<br />
                  <HeroAccent>Battery-as-a-Service</HeroAccent>
                </HeroHeading>
                <HeroSubheading>
                  A smarter approach to electric mobility where batteries are no
                  longer owned — they are accessed as a service.
                </HeroSubheading>
                <HeroDescription>
                  Battery swapping eliminates long charging times by allowing
                  depleted batteries to be exchanged for fully charged ones
                  within minutes. Combined with a subscription-based
                  Battery-as-a-Service model, this system lowers vehicle costs
                  while ensuring users always operate with healthy battery
                  packs.
                </HeroDescription>

                <HeroStats>
                  {[
                    { val: "< 3 min", label: "Swap Time" },
                    { val: "40%", label: "Cost Saving" },
                    { val: "24 / 7", label: "Availability" },
                    { val: "100%", label: "Fresh Battery" },
                  ].map((s) => (
                    <HeroStat key={s.label}>
                      <StatVal>{s.val}</StatVal>
                      <StatLabel>{s.label}</StatLabel>
                    </HeroStat>
                  ))}
                </HeroStats>

                <HeroCTARow>
                  <CTAButtonPrimary href="#how-it-works">
                    Learn How BaaS Works <ArrowRight size={16} />
                  </CTAButtonPrimary>
                  <CTAButtonGhost href="/contact-us">
                    Get a Quote
                  </CTAButtonGhost>
                </HeroCTARow>
              </Animated>
            </HeroContent>
          </HeroGrid>
        </Container>
      </HeroSection>

      {/* ── 2. SWAPPING EXPERIENCE ── */}
      <ExperienceSection>
        <Container>
          <Animated animation="fadeInDown" duration={0.6}>
            <SectionEyebrow centered>How It Works</SectionEyebrow>
            <SectionTitle centered>The Swapping Revolution</SectionTitle>
            <TimeBadge>
              <Timer size={14} /> Under 3 Minutes Swap Time
            </TimeBadge>
          </Animated>

          <ProcessFlow>
            {STEPS.map((step, i) => (
              <React.Fragment key={step.step}>
                <Animated animation="fadeInUp" delay={i * 0.12} duration={0.5}>
                  <ProcessStep $color={step.color}>
                    <StepTopRow>
                      <StepNumber $color={step.color}>{step.step}</StepNumber>
                      <StepIconWrap $color={step.color}>
                        <span style={{ color: step.color }}>{step.icon}</span>
                      </StepIconWrap>
                    </StepTopRow>
                    <StepTitle>{step.title}</StepTitle>
                    <StepDescription>{step.description}</StepDescription>
                    <StepAccent $color={step.color} />
                  </ProcessStep>
                </Animated>
                {i < STEPS.length - 1 && (
                  <FlowArrow>
                    <ArrowRight size={20} />
                  </FlowArrow>
                )}
              </React.Fragment>
            ))}
          </ProcessFlow>
        </Container>
      </ExperienceSection>

      {/* ── 3. KEY ADVANTAGES ── */}
      <AdvantagesSection>
        <Container>
          <Animated animation="fadeInDown" duration={0.6}>
            <SectionEyebrow centered>The Model</SectionEyebrow>
            <SectionTitle centered>Why Battery-as-a-Service?</SectionTitle>
          </Animated>

          <AdvantagesGrid>
            {baasAdvantages.map((adv, index) => (
              <Animated
                key={index}
                animation="fadeInUp"
                delay={index * 0.1}
                duration={0.5}
              >
                <AdvantageCard $color={adv.color}>
                  <AdvCardAccent $color={adv.color} />
                  <CardIconWrap $color={adv.color}>
                    <span style={{ color: adv.color }}>{adv.icon}</span>
                  </CardIconWrap>
                  <CardTitle>{adv.title}</CardTitle>
                  <CardDesc>{adv.description}</CardDesc>
                </AdvantageCard>
              </Animated>
            ))}
          </AdvantagesGrid>
        </Container>
      </AdvantagesSection>

      {/* ── 4. HOW BAAS WORKS ── */}
      <HowItWorksSection id="how-it-works">
        <Container>
          <SplitLayout>
            <VisualArea>
              <Animated animation="fadeInRight" duration={0.8}>
                <BaasPanel>
                  <BaasPanelGrid />
                  <BaasPanelGlow />
                  <BaasPanelContent>
                    <BaasPanelBadge>BaaS Model</BaasPanelBadge>

                    <BaasFlow>
                      {[
                        {
                          icon: <Zap size={16} />,
                          label: "User subscribes",
                          color: "#00C851",
                        },
                        {
                          icon: <RefreshCw size={16} />,
                          label: "Swap at station",
                          color: "#2196F3",
                        },
                        {
                          icon: <ShieldCheck size={16} />,
                          label: "Fresh battery guaranteed",
                          color: "#FF9800",
                        },
                        {
                          icon: <Share2 size={16} />,
                          label: "Network grows",
                          color: "#9C27B0",
                        },
                      ].map((item, i, arr) => (
                        <React.Fragment key={item.label}>
                          <BaasFlowStep $color={item.color}>
                            <BaasFlowIcon $color={item.color}>
                              <span style={{ color: item.color }}>
                                {item.icon}
                              </span>
                            </BaasFlowIcon>
                            <BaasFlowLabel>{item.label}</BaasFlowLabel>
                          </BaasFlowStep>
                          {i < arr.length - 1 && <BaasFlowConnector />}
                        </React.Fragment>
                      ))}
                    </BaasFlow>

                    <BaasPanelStat>
                      <BaasStatVal>40%</BaasStatVal>
                      <BaasStatLabel>
                        Lower initial vehicle cost vs ownership model
                      </BaasStatLabel>
                    </BaasPanelStat>
                  </BaasPanelContent>
                </BaasPanel>
              </Animated>
            </VisualArea>

            <ContentArea>
              <Animated animation="fadeInLeft" duration={0.6}>
                <SectionEyebrow>How It Works</SectionEyebrow>
                <SectionTitle>The Battery-as-a-Service Model</SectionTitle>
                <ModelDescription>
                  Battery-as-a-Service separates battery ownership from the
                  vehicle itself. Instead of purchasing the battery, users
                  subscribe to a battery service plan that provides access to
                  fully charged batteries whenever needed.
                </ModelDescription>
                <ModelDescription>
                  This model reduces upfront vehicle cost while ensuring that
                  drivers always operate with the latest and healthiest battery
                  packs available within the network.
                </ModelDescription>

                <BenefitsList>
                  {baasBenefitsList.map((benefit, index) => (
                    <li key={index}>
                      <CheckCircle2 size={18} className="check-icon" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </BenefitsList>
              </Animated>
            </ContentArea>
          </SplitLayout>
        </Container>
      </HowItWorksSection>

      {/* ── 5. CTA ── */}
      <CtaSection>
        <CtaBg />
        <CtaGrid />
        <Container>
          <Animated animation="slideUp" duration={0.6}>
            <CtaWrapper>
              <CtaEyebrow>
                <MessageSquare size={13} /> Get In Touch
              </CtaEyebrow>
              <CtaHeading>Powering the Future of Electric Mobility</CtaHeading>
              <CtaDescription>
                Battery swapping infrastructure and Battery-as-a-Service models
                are shaping the next generation of electric transportation by
                eliminating range anxiety and reducing charging downtime.
              </CtaDescription>
              <CtaButton href="/technology">
                Explore EV Battery Technology <ArrowRight size={16} />
              </CtaButton>
            </CtaWrapper>
          </Animated>
        </Container>
      </CtaSection>
    </PageWrapper>
  );
};

export default BatterySwappingBaaS;

/* ─── Keyframes ──────────────────────────────── */
const floatAnim = keyframes`
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-14px); }
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;

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
  margin: 0 0 1.25rem;
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
      ellipse at 25% 45%,
      rgba(0, 200, 81, 0.1) 0%,
      transparent 55%
    ),
    radial-gradient(
      ellipse at 80% 70%,
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
  max-width: 460px;
  animation: ${floatAnim} 6s ease-in-out infinite;

  img {
    width: 100%;
    height: auto;
    max-height: 420px;
    object-fit: contain;
    position: relative;
    z-index: 2;
    filter: drop-shadow(0 24px 48px rgba(0, 200, 81, 0.18));
  }
`;

const HeroImageGlow = styled.div`
  position: absolute;
  bottom: 8%;
  left: 50%;
  transform: translateX(-50%);
  width: 65%;
  height: 70px;
  background: radial-gradient(
    ellipse,
    rgba(0, 200, 81, 0.22) 0%,
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
  font-size: clamp(2.4rem, 5.5vw, 3.75rem);
  font-weight: 900;
  color: #fff;
  line-height: 1.08;
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
  font-size: 1rem;
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

/* ─── Swapping Experience ────────────────────── */
const ExperienceSection = styled.section`
  padding: 88px 0;
  background: var(--color-surface);
  border-top: 1px solid var(--color-border-light);
  border-bottom: 1px solid var(--color-border-light);
`;

const TimeBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(0, 200, 81, 0.1);
  color: var(--color-primary);
  font-weight: 700;
  font-size: 0.82rem;
  padding: 0.45rem 1.1rem;
  border-radius: 999px;
  border: 1px solid rgba(0, 200, 81, 0.22);
  margin: 0 auto 3rem;
  display: flex;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
`;

const ProcessFlow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  gap: 0;
  align-items: stretch;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ProcessStep = styled.div`
  background: var(--color-bg);
  border: 1px solid var(--color-border-light);
  border-radius: 18px;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  position: relative;
  overflow: hidden;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 28px ${({ $color }) => $color}18;
    border-color: ${({ $color }) => $color}44;
  }
`;

const StepTopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.25rem;
`;

const StepNumber = styled.span`
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: ${({ $color }) => $color};
  font-family: var(--font-family-mono);
`;

const StepIconWrap = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 11px;
  background: ${({ $color }) => $color}14;
  border: 1px solid ${({ $color }) => $color}28;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StepTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--color-text);
  margin: 0;
`;

const StepDescription = styled.p`
  font-size: 0.875rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin: 0;
  flex-grow: 1;
`;

const StepAccent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: ${({ $color }) => $color};
  opacity: 0.6;
`;

const FlowArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.75rem;
  color: var(--color-border);

  @media (max-width: 768px) {
    display: none;
  }
`;

/* ─── Advantages ─────────────────────────────── */
const AdvantagesSection = styled.section`
  padding: 88px 0;
  background: var(--color-bg);
`;

const AdvantagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  max-width: 860px;
  margin: 0 auto;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const AdvantageCard = styled.div`
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

const AdvCardAccent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: ${({ $color }) => $color};
`;

const CardIconWrap = styled.div`
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

const CardTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--color-text);
  margin: 0;
`;

const CardDesc = styled.p`
  font-size: 0.875rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin: 0;
`;

/* ─── How It Works ───────────────────────────── */
const HowItWorksSection = styled.section`
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

const VisualArea = styled.div`
  width: 100%;

  @media (max-width: 900px) {
    order: 2;
  }
`;

/* Replaces DiagramPlaceholder with a real visual panel */
const BaasPanel = styled.div`
  position: relative;
  width: 100%;
  min-height: 400px;
  background: #080e1a;
  border: 1px solid rgba(0, 200, 81, 0.14);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BaasPanelGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0, 200, 81, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 200, 81, 0.04) 1px, transparent 1px);
  background-size: 36px 36px;
`;

const BaasPanelGlow = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at 50% 50%,
    rgba(0, 200, 81, 0.07) 0%,
    transparent 65%
  );
`;

const BaasPanelContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.75rem;
  padding: 2.5rem;
  width: 100%;
`;

const BaasPanelBadge = styled.div`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-primary);
  background: rgba(0, 200, 81, 0.1);
  border: 1px solid rgba(0, 200, 81, 0.22);
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
`;

const BaasFlow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  gap: 0;
`;

const BaasFlowStep = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid ${({ $color }) => $color}22;
  border-radius: 12px;
  padding: 0.875rem 1.125rem;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.055);
  }
`;

const BaasFlowIcon = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 9px;
  background: ${({ $color }) => $color}18;
  border: 1px solid ${({ $color }) => $color}28;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const BaasFlowLabel = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
`;

const BaasFlowConnector = styled.div`
  width: 1px;
  height: 20px;
  background: rgba(255, 255, 255, 0.08);
  margin-left: 28px;
`;

const BaasPanelStat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  background: rgba(0, 200, 81, 0.06);
  border: 1px solid rgba(0, 200, 81, 0.18);
  border-radius: 12px;
  padding: 1rem 1.5rem;
  width: 100%;
  text-align: center;
`;

const BaasStatVal = styled.span`
  font-size: 2rem;
  font-weight: 900;
  color: var(--color-primary);
  font-family: var(--font-family-mono);
  line-height: 1;
`;

const BaasStatLabel = styled.span`
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.45);
  line-height: 1.4;
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 900px) {
    order: 1;
  }
`;

const ModelDescription = styled.p`
  font-size: 0.975rem;
  color: var(--color-text-muted);
  line-height: 1.7;
  margin: 0 0 0.75rem;
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;

  li {
    display: flex;
    align-items: flex-start;
    gap: 0.875rem;
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--color-text);
    line-height: 1.4;

    .check-icon {
      color: var(--color-primary);
      flex-shrink: 0;
      margin-top: 0.1rem;
    }
  }
`;

/* ─── CTA ────────────────────────────────────── */
const CtaSection = styled.section`
  position: relative;
  overflow: hidden;
  padding: 100px 0;
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
  max-width: 660px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.1rem;
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
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 900;
  color: #fff;
  margin: 0;
  line-height: 1.15;
`;

const CtaDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.48);
  line-height: 1.65;
  margin: 0;
  max-width: 540px;
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
  transition: all 0.25s ease;
  margin-top: 0.25rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(0, 200, 81, 0.45);
    color: #fff;
  }

  @media (max-width: 600px) {
    width: 100%;
    justify-content: center;
  }
`;
