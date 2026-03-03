import React from "react";
import styled from "styled-components";
import {
  Activity,
  Award,
  ShieldAlert,
  ArrowLeftRight,
  CheckCircle2,
  Settings2,
  ArrowRight,
} from "lucide-react";
import Animated from "../common/Animated";

const inverterData = [
  {
    id: "rmppt",
    icon: <Activity size={28} strokeWidth={1.5} />,
    title: "Rapid Maximum Power Point Tracking",
    description:
      "Advanced rMPPT technology dynamically tracks solar irradiance changes in milliseconds, ensuring optimal energy extraction even during fast-moving cloud conditions.",
    highlightLabel: "Performance Impact",
    highlight:
      "Up to 30% higher daily energy yield compared to legacy tracking systems.",
  },
  {
    id: "bee-compliance",
    icon: <Award size={28} strokeWidth={1.5} />,
    title: "Certified Efficiency Standards",
    description:
      "Compliant with mandatory 2026 Minimum Efficiency Standards, ensuring reduced conversion losses and optimized DC-to-AC performance.",
    highlightLabel: "Performance Impact",
    highlight: "98%+ inverter efficiency with BEE-certified architecture.",
  },
  {
    id: "afci",
    icon: <ShieldAlert size={28} strokeWidth={1.5} />,
    title: "Integrated Arc Fault Protection",
    description:
      "AI-based Arc Fault Circuit Interrupter (AFCI) continuously monitors electrical patterns to detect dangerous arc signatures and shut down the system within milliseconds.",
    highlightLabel: "Safety Benefit",
    highlight:
      "Prevents rooftop fire risks and meets modern 2026 safety regulations.",
  },
  {
    id: "hybrid",
    icon: <ArrowLeftRight size={28} strokeWidth={1.5} />,
    title: "Energy Autonomy Architecture",
    description:
      "Hybrid inverters enable two-way energy flow — drawing from the grid during off-peak hours and discharging stored energy during peak demand.",
    highlightLabel: "Capability Highlights",
    highlightList: [
      "Native CAN / RS485 lithium integration",
      "Zero transfer time switching",
      "Peak-hour energy arbitrage support",
    ],
  },
];

const microFeatures = [
  "Dynamic export control",
  "Grid-forming capability",
  "Pure sine wave output (THD < 3%)",
  "IP66 industrial protection",
];

const InverterIntelligence = () => {
  return (
    <Section id="inverter-intelligence">
      <Container>
        {/* --- SECTION HEADER --- */}
        <HeaderArea>
          <Animated animation="fadeInDown" duration={0.6}>
            <Eyebrow>SMART INVERTER PLATFORM</Eyebrow>
            <MainHeading>
              The Intelligent Gateway Between Solar, Storage & Grid
            </MainHeading>
            <Subheading>
              Modern inverters are no longer passive converters. They act as
              energy coordinators — optimizing generation, ensuring safety, and
              enabling true energy autonomy.
            </Subheading>
            <IntroText>
              Built for 2026 standards, our inverter systems integrate advanced
              power electronics, AI-driven safety protocols, and hybrid grid
              interaction for maximum efficiency and reliability.
            </IntroText>
          </Animated>
        </HeaderArea>

        {/* --- 2x2 CORE INTELLIGENCE GRID --- */}
        <GridContainer>
          {inverterData.map((item, index) => (
            <Animated
              key={item.id}
              animation="fadeInUp"
              delay={index * 0.15}
              duration={0.6}
            >
              <InverterCard>
                <CardHeader>
                  <IconWrapper>{item.icon}</IconWrapper>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardDescription>{item.description}</CardDescription>

                <HighlightBox>
                  <HighlightLabel>{item.highlightLabel}</HighlightLabel>
                  {item.highlightList ? (
                    <HighlightList>
                      {item.highlightList.map((listItem, i) => (
                        <li key={i}>
                          <CheckCircle2 size={16} className="check" />{" "}
                          {listItem}
                        </li>
                      ))}
                    </HighlightList>
                  ) : (
                    <HighlightText>{item.highlight}</HighlightText>
                  )}
                </HighlightBox>
              </InverterCard>
            </Animated>
          ))}
        </GridContainer>

        {/* --- MICRO STRIP --- */}
        <Animated animation="fadeIn" delay={0.4} duration={0.6}>
          <MicroStrip>
            <MicroStripTitle>
              <Settings2 size={20} className="icon" /> Grid-Interactive
              Intelligence
            </MicroStripTitle>
            <MicroStripItems>
              {microFeatures.map((feature, index) => (
                <div key={index} className="feature-item">
                  <span className="dot"></span> {feature}
                </div>
              ))}
            </MicroStripItems>
          </MicroStrip>
        </Animated>

        {/* --- CLOSING STATEMENT & CTA --- */}
        <Animated animation="slideUp" delay={0.5} duration={0.6}>
          <ClosingArea>
            <ClosingStatement>
              “From intelligent cell chemistry to grid-interactive inverter
              systems, our technology platform is engineered for the energy
              demands of 2026 and beyond.”
            </ClosingStatement>
            <CTAButton href="/solutions">
              Explore Our Energy Solutions <ArrowRight size={20} />
            </CTAButton>
          </ClosingArea>
        </Animated>
      </Container>
    </Section>
  );
};

export default InverterIntelligence;

// --- STYLED COMPONENTS ---

const Section = styled.section`
  padding: 120px 0;
  background-color: var(
    --color-bg-secondary
  ); /* Alternating background for visual separation */
  position: relative;
  border-top: 1px solid var(--color-border-light);

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

// --- Header Area ---
const HeaderArea = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 50px;

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
  font-size: 2.75rem;
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 1.25rem;
  line-height: 1.2;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const Subheading = styled.p`
  font-size: 1.15rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
`;

const IntroText = styled.p`
  font-size: 1.05rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin: 0;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border-light);
`;

// --- Grid & Card Styles ---
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-bottom: 32px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const InverterCard = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.3s ease;

  @media (min-width: 1025px) {
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.04);
      border-color: var(--color-primary-light);
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 1.25rem;
`;

const IconWrapper = styled.div`
  width: 56px;
  height: 56px;
  background: var(--color-surface-secondary);
  color: var(--color-primary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-border-light);
  flex-shrink: 0;
`;

const CardTitle = styled.h3`
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--color-text);
  margin: 0;
  line-height: 1.3;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0 0 2rem 0;
`;

// Highlight Box pushes to the bottom to maintain equal card heights
const HighlightBox = styled.div`
  margin-top: auto;
  background: rgba(0, 200, 81, 0.04);
  border-left: 3px solid var(--color-primary);
  padding: 1.25rem;
  border-radius: 0 8px 8px 0;
`;

const HighlightLabel = styled.div`
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--color-text-muted);
  margin-bottom: 0.5rem;
`;

const HighlightText = styled.p`
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0;
  line-height: 1.5;
`;

const HighlightList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  li {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--color-text);
    line-height: 1.4;

    .check {
      color: var(--color-primary);
      flex-shrink: 0;
      margin-top: 0.1rem;
    }
  }
`;

// --- Micro Strip ---
const MicroStrip = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 1.5rem 2.5rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 60px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem;
    gap: 1.5rem;
  }
`;

const MicroStripTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  font-size: 1.05rem;
  color: var(--color-text);
  white-space: nowrap;

  .icon {
    color: var(--color-primary);
  }
`;

const MicroStripItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  row-gap: 1rem;
  flex-grow: 1;

  .feature-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    color: var(--color-text-secondary);
    font-weight: 500;

    .dot {
      width: 5px;
      height: 5px;
      background-color: var(--color-text-muted);
      border-radius: 50%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

// --- Closing Area ---
const ClosingArea = styled.div`
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  padding-top: 20px;
`;

const ClosingStatement = styled.p`
  font-size: 1.35rem;
  font-weight: 600;
  color: var(--color-text);
  line-height: 1.6;
  margin: 0 0 2rem 0;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 1.15rem;
  }
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
