import React from "react";
import styled from "styled-components";
import {
  CheckCircle2,
  ShieldCheck,
  Snowflake,
  Box,
  Zap,
  Target,
} from "lucide-react";
import Animated from "../common/Animated";

const chemistryData = [
  {
    id: "lfp",
    title: "LFP – Lithium Iron Phosphate",
    label: "2026 Gold Standard",
    badge: "Most Widely Deployed",
    icon: <ShieldCheck size={28} />,
    description:
      "Lithium Iron Phosphate (LFP) is the industry-preferred chemistry due to its thermal stability, long cycle life, and cobalt-free structure. It forms the foundation of our mobility, industrial, and solar storage solutions.",
    highlights: [
      "6,000+ charge cycles",
      "10–15 year lifespan",
      "Fire-safe chemistry",
      "High thermal stability",
      "100% Depth of Discharge capability",
      "Cobalt-free formulation",
    ],
    applications: "EV mobility, Forklift batteries, Solar storage, UPS systems",
  },
  {
    id: "sodium",
    title: "Sodium-Ion",
    label: "Cost-Optimized Innovation",
    badge: "Emerging Alternative",
    icon: <Snowflake size={28} />,
    description:
      "Sodium-Ion technology introduces a cost-effective and temperature-resilient alternative to lithium. While slightly bulkier, it delivers excellent cold-climate performance at a lower material cost.",
    highlights: [
      "~20% lower cost than lithium",
      "Strong low-temperature performance",
      "No lithium dependency",
      "Safer raw material sourcing",
      "Improved supply chain stability",
    ],
    applications:
      "Cold climate installations, Rural solar storage, Cost-sensitive commercial deployments",
  },
  {
    id: "solid-state",
    title: "Solid-State Batteries",
    label: "Premium Future Technology",
    badge: "Next-Generation",
    icon: <Box size={28} />,
    description:
      "Solid-State batteries replace liquid electrolytes with solid conductive materials, enabling higher energy density and faster charging in a more compact footprint.",
    highlights: [
      "Highest energy density",
      "Ultra-fast charging capability",
      "Compact space-saving design",
      "Enhanced structural integrity",
      "Premium performance tier",
    ],
    applications:
      "High-end EV platforms, Aerospace & UAV, Space-constrained installations",
  },
];

const comparisonTable = [
  {
    metric: "Energy Density",
    lfp: "High (160 Wh/kg)",
    sodium: "Moderate (120 Wh/kg)",
    solid: "Very High (400+ Wh/kg)",
  },
  {
    metric: "Cycle Life",
    lfp: "6,000+ Cycles",
    sodium: "3,000+ Cycles",
    solid: "10,000+ Cycles",
  },
  {
    metric: "Cost Profile",
    lfp: "Optimized Baseline",
    sodium: "~20% Lower than LFP",
    solid: "Premium Tier",
  },
  {
    metric: "Safety Level",
    lfp: "Exceptional (No thermal runaway)",
    sodium: "Very High",
    solid: "Absolute Maximum",
  },
  {
    metric: "Temperature Performance",
    lfp: "Standard (-20°C to 60°C)",
    sodium: "Excellent in Extreme Cold",
    solid: "Wide Operational Range",
  },
];

const BatteryChemistries = () => {
  return (
    <Section id="chemistries">
      <Container>
        {/* --- HEADER --- */}
        <HeaderArea>
          <Animated animation="fadeInDown" duration={0.6}>
            <Eyebrow>BATTERY CHEMISTRY PLATFORM</Eyebrow>
            <MainHeading>
              Advanced Cell Technologies for Every Energy Application
            </MainHeading>
            <Subheading>
              From industry-standard Lithium Iron Phosphate to next-generation
              Sodium-Ion and Solid-State innovations, our chemistry portfolio is
              engineered for safety, longevity, and performance scalability.
            </Subheading>
            <IntroParagraph>
              In 2026, battery innovation is driven by material science. Our
              technology platform is built around three core chemistries, each
              optimized for specific operational environments, cost targets, and
              performance requirements.
            </IntroParagraph>
          </Animated>
        </HeaderArea>

        {/* --- CHEMISTRY BLOCKS --- */}
        <ChemistryGrid>
          {chemistryData.map((chem, index) => (
            <Animated
              key={chem.id}
              animation="fadeInUp"
              delay={index * 0.15}
              duration={0.6}
            >
              <ChemistryCard>
                <CardTop>
                  <IconWrapper>{chem.icon}</IconWrapper>
                  <PositioningBadge>{chem.badge}</PositioningBadge>
                </CardTop>

                <ChemistryTitle>{chem.title}</ChemistryTitle>
                <PositioningLabel>{chem.label}</PositioningLabel>

                <ChemistryDesc>{chem.description}</ChemistryDesc>

                <Divider />

                <ListHeader>Technical Highlights</ListHeader>
                <HighlightsList>
                  {chem.highlights.map((item, i) => (
                    <li key={i}>
                      <CheckCircle2 size={16} className="check" /> {item}
                    </li>
                  ))}
                </HighlightsList>

                <ApplicationsBox>
                  <strong>Ideal For:</strong> {chem.applications}
                </ApplicationsBox>
              </ChemistryCard>
            </Animated>
          ))}
        </ChemistryGrid>

        {/* --- COMPARISON TABLE --- */}
        <Animated animation="fadeIn" delay={0.3} duration={0.8}>
          <TableWrapper>
            <TableTitle>Technical Cross-Comparison</TableTitle>

            {/* Desktop Table View */}
            <DesktopTable>
              <thead>
                <tr>
                  <th>Performance Metric</th>
                  <th>LFP (Lithium Iron Phosphate)</th>
                  <th>Sodium-Ion</th>
                  <th>Solid-State</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row, index) => (
                  <tr key={index}>
                    <td className="metric">{row.metric}</td>
                    <td>{row.lfp}</td>
                    <td>{row.sodium}</td>
                    <td>{row.solid}</td>
                  </tr>
                ))}
              </tbody>
            </DesktopTable>

            {/* Mobile Stacked View */}
            <MobileTable>
              {["LFP", "Sodium-Ion", "Solid-State"].map((type, i) => (
                <MobileTableCard key={i}>
                  <MobileTableCardHeader>{type}</MobileTableCardHeader>
                  {comparisonTable.map((row, index) => (
                    <MobileRow key={index}>
                      <span className="mobile-metric">{row.metric}</span>
                      <span className="mobile-value">
                        {type === "LFP"
                          ? row.lfp
                          : type === "Sodium-Ion"
                            ? row.sodium
                            : row.solid}
                      </span>
                    </MobileRow>
                  ))}
                </MobileTableCard>
              ))}
            </MobileTable>
          </TableWrapper>
        </Animated>

        {/* --- APPLICATION MAPPING --- */}
        <Animated animation="slideUp" delay={0.4} duration={0.6}>
          <MappingBlock>
            <MappingTitle>
              <Target size={24} className="icon" /> Choosing the Right Chemistry
            </MappingTitle>
            <MappingGrid>
              <MappingItem>
                <div className="use-case">For longevity & absolute safety</div>
                <div className="arrow">→</div>
                <div className="solution">LFP Architecture</div>
              </MappingItem>
              <MappingItem>
                <div className="use-case">
                  For cost-sensitive + cold climates
                </div>
                <div className="arrow">→</div>
                <div className="solution">Sodium-Ion</div>
              </MappingItem>
              <MappingItem>
                <div className="use-case">
                  For maximum density & premium mobility
                </div>
                <div className="arrow">→</div>
                <div className="solution">Solid-State</div>
              </MappingItem>
            </MappingGrid>
          </MappingBlock>
        </Animated>
      </Container>
    </Section>
  );
};

export default BatteryChemistries;

// --- STYLED COMPONENTS ---

const Section = styled.section`
  padding: 130px 0;
  background-color: var(--color-bg-secondary);
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

const HeaderArea = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 40px;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

const Eyebrow = styled.span`
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--color-text-muted);
  margin-bottom: 1rem;
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
  margin: 0 0 1.5rem 0;
`;

const IntroParagraph = styled.p`
  font-size: 1rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border-light);
  margin: 0;
`;

// --- Chemistry Blocks ---
const ChemistryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 80px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
    margin-bottom: 60px;
  }
`;

const ChemistryCard = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  @media (min-width: 1025px) {
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.04);
      border-color: var(--color-border-light);
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`;

const IconWrapper = styled.div`
  color: var(--color-text);
  background: var(--color-bg);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid var(--color-border-light);
`;

const PositioningBadge = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: var(--color-bg-secondary);
  color: var(--color-text-muted);
  padding: 0.4rem 0.8rem;
  border-radius: 50px;
  border: 1px solid var(--color-border-light);
`;

const ChemistryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-text);
  margin: 0 0 0.25rem 0;
`;

const PositioningLabel = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 1.25rem;
`;

const ChemistryDesc = styled.p`
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid var(--color-border-light);
  margin: 0 0 1.5rem 0;
`;

const ListHeader = styled.h4`
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--color-text-muted);
  margin: 0 0 1rem 0;
`;

const HighlightsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex-grow: 1;

  li {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    font-size: 0.9rem;
    color: var(--color-text);
    line-height: 1.4;

    .check {
      color: var(--color-text-muted);
      flex-shrink: 0;
      margin-top: 0.1rem;
    }
  }
`;

const ApplicationsBox = styled.div`
  background: var(--color-bg);
  border: 1px solid var(--color-border-light);
  padding: 1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  line-height: 1.5;

  strong {
    color: var(--color-text);
    display: block;
    margin-bottom: 0.25rem;
  }
`;

// --- Table Area ---
const TableWrapper = styled.div`
  margin-bottom: 60px;
`;

const TableTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 1.5rem;
  text-align: center;
`;

const DesktopTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: var(--color-surface);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);

  th,
  td {
    padding: 1.25rem 1.5rem;
    text-align: left;
    border-bottom: 1px solid var(--color-border-light);
  }

  th {
    background: var(--color-bg);
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--color-text-muted);
    font-weight: 700;
  }

  td {
    font-size: 0.95rem;
    color: var(--color-text-secondary);

    &.metric {
      font-weight: 600;
      color: var(--color-text);
    }
  }

  tr:last-child td {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileTable = styled.div`
  display: none;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileTableCard = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  overflow: hidden;
`;

const MobileTableCardHeader = styled.div`
  background: var(--color-bg);
  padding: 1rem 1.25rem;
  font-weight: 700;
  color: var(--color-text);
  border-bottom: 1px solid var(--color-border-light);
`;

const MobileRow = styled.div`
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--color-border-light);
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  &:last-child {
    border-bottom: none;
  }

  .mobile-metric {
    font-size: 0.8rem;
    text-transform: uppercase;
    color: var(--color-text-muted);
    font-weight: 600;
  }

  .mobile-value {
    font-size: 0.95rem;
    color: var(--color-text-secondary);
  }
`;

// --- Application Mapping ---
const MappingBlock = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 2.5rem 3rem;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const MappingTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  .icon {
    color: var(--color-primary);
  }
`;

const MappingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const MappingItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .use-case {
    font-size: 0.95rem;
    color: var(--color-text-secondary);
    line-height: 1.4;
    flex: 1;
  }

  .arrow {
    color: var(--color-border);
    font-weight: bold;
  }

  .solution {
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-text);
    flex: 1;
  }

  @media (max-width: 900px) {
    background: var(--color-bg);
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid var(--color-border-light);
  }
`;
