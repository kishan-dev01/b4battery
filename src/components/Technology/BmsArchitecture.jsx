import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  Battery,
  Cpu,
  Cloud,
  MonitorSmartphone,
  ArrowRight,
  CheckCircle2,
  Activity,
  Wifi,
  Sliders,
  ThermometerSnowflake,
  Archive,
  Database,
  PlugZap,
} from "lucide-react";
import Animated from "../common/Animated";

const BmsArchitecture = () => {
  return (
    <Section id="smart-bms">
      <Container>
        {/* --- SECTION HEADER --- */}
        <HeaderArea>
          <Animated animation="fadeInDown" duration={0.6}>
            <Eyebrow>SMART BMS PLATFORM</Eyebrow>
            <MainHeading>
              The Intelligence Layer Powering Every Battery
            </MainHeading>
            <Subheading>
              Our AI-powered Battery Management System transforms lithium cells
              into predictive, self-optimizing energy systems engineered for
              mobility, industrial, and grid-scale applications.
            </Subheading>
          </Animated>
        </HeaderArea>

        {/* --- ARCHITECTURE OVERVIEW BAND --- */}
        <Animated animation="fadeIn" delay={0.2} duration={0.8}>
          <ArchitectureBand>
            <ArchStep>
              <IconBox>
                <Battery size={24} />
              </IconBox>
              <ArchLabel>Cell Layer</ArchLabel>
            </ArchStep>
            <Connector>
              <ArrowRight size={20} />
            </Connector>
            <ArchStep className="highlight">
              <IconBox>
                <Cpu size={24} />
              </IconBox>
              <ArchLabel>BMS Layer</ArchLabel>
            </ArchStep>
            <Connector>
              <ArrowRight size={20} />
            </Connector>
            <ArchStep>
              <IconBox>
                <Cloud size={24} />
              </IconBox>
              <ArchLabel>Cloud Layer</ArchLabel>
            </ArchStep>
            <Connector>
              <ArrowRight size={20} />
            </Connector>
            <ArchStep>
              <IconBox>
                <MonitorSmartphone size={24} />
              </IconBox>
              <ArchLabel>App Layer</ArchLabel>
            </ArchStep>
          </ArchitectureBand>
        </Animated>

        <PillarsContainer>
          {/* --- PILLAR 1: Predictive AI --- */}
          <Animated animation="fadeInUp" delay={0.1} duration={0.6}>
            <PillarCard>
              <SplitLayout>
                <ContentSide>
                  <PillarHeader>
                    <Activity size={28} className="icon" />
                    <PillarTitle>
                      AI-Powered Predictive Intelligence
                    </PillarTitle>
                  </PillarHeader>
                  <PillarDesc>
                    Embedded microprocessors continuously analyze voltage
                    curves, temperature gradients, charge cycles, and load
                    behavior in real time. Advanced machine learning models
                    identify abnormal cell behavior before failure occurs.
                  </PillarDesc>

                  <ListGrid>
                    <ListItem>
                      <CheckCircle2 size={18} className="check" /> Predictive
                      wear detection
                    </ListItem>
                    <ListItem>
                      <CheckCircle2 size={18} className="check" /> Real-time
                      anomaly detection
                    </ListItem>
                    <ListItem>
                      <CheckCircle2 size={18} className="check" /> Automated
                      "Health Checkup" alerts
                    </ListItem>
                    <ListItem>
                      <CheckCircle2 size={18} className="check" /> Cycle history
                      pattern mapping
                    </ListItem>
                    <ListItem>
                      <CheckCircle2 size={18} className="check" /> Performance
                      optimization under load
                    </ListItem>
                  </ListGrid>

                  <ImpactBox>
                    <strong>Performance Impact:</strong> Extends battery life by
                    up to 25% through intelligent optimization and early
                    intervention.
                  </ImpactBox>
                </ContentSide>

                <VisualSide>
                  <WaveformVisual>
                    <div className="label">Live Telemetry Analysis</div>
                    <WaveContainer>
                      {[...Array(12)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="bar"
                          animate={{
                            height: ["20%", "80%", "30%", "100%", "40%"],
                          }}
                          transition={{
                            duration: 2 + Math.random() * 2,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                            delay: i * 0.1,
                          }}
                        />
                      ))}
                    </WaveContainer>
                    <div className="status">AI Models Active</div>
                  </WaveformVisual>
                </VisualSide>
              </SplitLayout>
            </PillarCard>
          </Animated>

          {/* --- PILLAR 2: Cloud-Connected --- */}
          <Animated animation="fadeInUp" delay={0.2} duration={0.6}>
            <PillarCard>
              <PillarHeader>
                <Wifi size={28} className="icon" />
                <PillarTitle>Real-Time Cloud Synchronization</PillarTitle>
              </PillarHeader>
              <PillarDesc>
                Battery data is securely synced to a centralized cloud platform,
                enabling remote diagnostics, fleet-level visibility, and
                predictive maintenance scheduling.
              </PillarDesc>

              <ListGrid>
                <ListItem>
                  <CheckCircle2 size={18} className="check" /> Secure data
                  transmission
                </ListItem>
                <ListItem>
                  <CheckCircle2 size={18} className="check" /> Remote
                  diagnostics
                </ListItem>
                <ListItem>
                  <CheckCircle2 size={18} className="check" /> OTA firmware
                  updates
                </ListItem>
                <ListItem>
                  <CheckCircle2 size={18} className="check" /> Fleet dashboard
                  integration
                </ListItem>
                <ListItem>
                  <CheckCircle2 size={18} className="check" /> GPRS / IoT
                  connectivity
                </ListItem>
              </ListGrid>

              <IndustrialNote>
                <strong>Industrial Application:</strong> Fleet managers can
                monitor battery health, charging cycles, and geographic location
                across logistics operations in real time.
              </IndustrialNote>

              <ExpansionBlock>
                <div className="block-header">
                  <Cloud size={20} /> Over-The-Air Diagnostics & Updates
                </div>
                <div className="block-content">
                  Firmware updates improve <strong>safety protocols</strong>,{" "}
                  <strong>thermal thresholds</strong>, and{" "}
                  <strong>efficiency algorithms</strong> seamlessly, without
                  requiring physical servicing or operational downtime.
                </div>
              </ExpansionBlock>
            </PillarCard>
          </Animated>

          {/* --- PILLAR 3: Active Cell Balancing --- */}
          <Animated animation="fadeInUp" delay={0.3} duration={0.6}>
            <PillarCard>
              <PillarHeader>
                <Sliders size={28} className="icon" />
                <PillarTitle>Adaptive Active Cell Balancing</PillarTitle>
              </PillarHeader>
              <PillarDesc>
                Unlike passive balancing systems that waste excess energy as
                heat, our Smart BMS redistributes charge across cells to
                maximize usable capacity.
              </PillarDesc>

              <ListGrid>
                <ListItem>
                  <CheckCircle2 size={18} className="check" /> Up to 25%
                  extended lifespan
                </ListItem>
                <ListItem>
                  <CheckCircle2 size={18} className="check" /> Uniform charge
                  distribution
                </ListItem>
                <ListItem>
                  <CheckCircle2 size={18} className="check" /> Reduced internal
                  resistance
                </ListItem>
                <ListItem>
                  <CheckCircle2 size={18} className="check" /> Lower thermal
                  stress
                </ListItem>
                <ListItem>
                  <CheckCircle2 size={18} className="check" /> Improved
                  discharge stability
                </ListItem>
              </ListGrid>

              <CompareNote>
                <strong>The Active Advantage:</strong> Passive balancing systems
                reduce long-term efficiency and accelerate degradation by
                bleeding energy as heat. Active balancing preserves cell
                integrity and maximizes range.
              </CompareNote>
            </PillarCard>
          </Animated>
        </PillarsContainer>

        {/* --- SAFETY & INDUSTRIAL PROTECTION LAYER --- */}
        <Animated animation="fadeIn" delay={0.4} duration={0.8}>
          <SafetySection>
            <SafetyHeader>
              <h3>Intelligent Safety Systems</h3>
              <p>
                Industrial-grade protection engineered into the core
                architecture.
              </p>
            </SafetyHeader>

            <SafetyGrid>
              <SafetyCard>
                <ThermometerSnowflake size={24} className="safe-icon" />
                <h4>Thermal Protection Matrix</h4>
                <p>
                  Multi-sensor safety array prevents overheating during heavy
                  current draws and rapid charging cycles.
                </p>
              </SafetyCard>

              <SafetyCard>
                <Database size={24} className="safe-icon" />
                <h4>Black Box Logging</h4>
                <p>
                  Records temperature spikes, voltage sags, and cycle history to
                  provide forensic data for predictive retirement.
                </p>
              </SafetyCard>

              <SafetyCard>
                <Archive size={24} className="safe-icon" />
                <h4>Auto-Storage Mode</h4>
                <p>
                  If a drone or EV battery remains at 100% beyond 48 hours, the
                  system automatically discharges to a safe storage voltage
                  (60%).
                </p>
              </SafetyCard>

              <SafetyCard>
                <PlugZap size={24} className="safe-icon" />
                <h4>Anti-Spark Connectors</h4>
                <p>
                  Integrated AS150 / XT90-S connectors prevent electrical arc
                  damage and terminal degradation during connection.
                </p>
              </SafetyCard>
            </SafetyGrid>
          </SafetySection>
        </Animated>
      </Container>
    </Section>
  );
};

export default BmsArchitecture;

// --- STYLED COMPONENTS ---

const Section = styled.section`
  padding: 130px 0;
  background-color: var(--color-bg);
  position: relative;

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const Container = styled.div`
  max-width: 1000px; /* Constrained width for optimal reading line-length */
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const HeaderArea = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Eyebrow = styled.span`
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--color-primary);
  margin-bottom: 1rem;
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
    text-align: left;
  }
`;

const Subheading = styled.p`
  font-size: 1.15rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0 auto;
  max-width: 800px;

  @media (max-width: 768px) {
    font-size: 1.05rem;
    text-align: left;
  }
`;

// --- Architecture Band ---
const ArchitectureBand = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-surface);
  border: 1px solid var(--color-border-light);
  border-radius: 16px;
  padding: 1.5rem 3rem;
  margin-bottom: 60px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
  }
`;

const ArchStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  &.highlight {
    color: var(--color-primary);
    .icon-box {
      background: rgba(0, 200, 81, 0.1);
      border-color: rgba(0, 200, 81, 0.2);
      color: var(--color-primary);
    }
  }
`;

const IconBox = styled.div`
  width: 56px;
  height: 56px;
  background: var(--color-surface-secondary);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  transition: all 0.3s ease;
`;

const ArchLabel = styled.span`
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: inherit;
`;

const Connector = styled.div`
  color: var(--color-border);

  @media (max-width: 768px) {
    transform: rotate(90deg);
  }
`;

// --- Pillars Container ---
const PillarsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    gap: 32px;
  }
`;

const PillarCard = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border-light);
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const SplitLayout = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContentSide = styled.div`
  display: flex;
  flex-direction: column;
`;

const VisualSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const PillarHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;

  .icon {
    color: var(--color-primary);
  }
`;

const PillarTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-text);
  margin: 0;
`;

const PillarDesc = styled.p`
  font-size: 1.05rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
`;

const ListGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  padding: 0;
  margin: 0 0 1.5rem 0;
  list-style: none;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: var(--color-text);
  font-weight: 500;

  .check {
    color: var(--color-primary);
    flex-shrink: 0;
    margin-top: 0.1rem;
  }
`;

const ImpactBox = styled.div`
  background: rgba(0, 200, 81, 0.05);
  border-left: 3px solid var(--color-primary);
  padding: 1rem 1.25rem;
  border-radius: 0 8px 8px 0;
  font-size: 0.95rem;
  color: var(--color-text);
  line-height: 1.5;

  strong {
    color: var(--color-primary-dark);
  }
`;

// --- CSS Waveform Visual ---
const WaveformVisual = styled.div`
  width: 100%;
  max-width: 300px;
  background: var(--color-surface-secondary);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.02);

  .label {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    color: var(--color-text-muted);
  }

  .status {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--color-primary);
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
      content: "";
      width: 8px;
      height: 8px;
      background: var(--color-primary);
      border-radius: 50%;
      box-shadow: 0 0 8px var(--color-primary);
    }
  }
`;

const WaveContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 80px;
  gap: 4px;

  .bar {
    width: 12px;
    background: linear-gradient(
      to top,
      rgba(0, 200, 81, 0.2),
      var(--color-primary)
    );
    border-radius: 4px;
    opacity: 0.8;
  }
`;

// --- Specific Sub-Blocks ---
const IndustrialNote = styled.div`
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border-light);
  margin-top: 0.5rem;
  line-height: 1.5;

  strong {
    color: var(--color-text);
  }
`;

const ExpansionBlock = styled.div`
  margin-top: 1.5rem;
  background: var(--color-surface-secondary);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  overflow: hidden;

  .block-header {
    background: rgba(0, 0, 0, 0.02);
    padding: 1rem 1.25rem;
    font-weight: 700;
    font-size: 1rem;
    color: var(--color-text);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-bottom: 1px solid var(--color-border-light);
  }

  .block-content {
    padding: 1.25rem;
    font-size: 0.95rem;
    color: var(--color-text-secondary);
    line-height: 1.6;

    strong {
      color: var(--color-text);
    }
  }
`;

const CompareNote = styled.div`
  margin-top: 1.5rem;
  background: var(--color-surface-secondary);
  border-left: 3px solid var(--color-text-muted);
  padding: 1.25rem;
  border-radius: 0 12px 12px 0;
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.6;

  strong {
    color: var(--color-text);
  }
`;

// --- Safety Layer ---
const SafetySection = styled.div`
  background: var(--color-surface-secondary);
  border: 1px solid var(--color-border-light);
  border-radius: 24px;
  padding: 3rem;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const SafetyHeader = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;

  h3 {
    font-size: 1.75rem;
    font-weight: 800;
    color: var(--color-text);
    margin: 0 0 0.5rem 0;
  }

  p {
    font-size: 1.05rem;
    color: var(--color-text-secondary);
    margin: 0;
  }

  @media (max-width: 768px) {
    text-align: left;
  }
`;

const SafetyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const SafetyCard = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 1.5rem;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.04);
  }

  .safe-icon {
    color: var(--color-text-muted);
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--color-text);
    margin: 0 0 0.5rem 0;
  }

  p {
    font-size: 0.9rem;
    color: var(--color-text-secondary);
    line-height: 1.5;
    margin: 0;
  }
`;
