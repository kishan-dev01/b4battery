import React from "react";
import styled from "styled-components";
import {
  Zap,
  Battery,
  ShieldCheck,
  Settings,
  Download,
  Mail,
  CheckCircle2,
  ThermometerSun,
} from "lucide-react";
import Animated from "../components/common/Animated";

// Placeholder data - later to be replaced by fetched data based on URL slug
const productData = {
  name: "B4 Core EV-X",
  category: "Electric Vehicle Battery",
  description:
    "The B4 Core EV-X is a high-performance lithium-ion power pack engineered specifically for modern electric vehicles. Featuring advanced thermal management and an industry-leading cycle life, it delivers sustained, reliable power across extreme environmental conditions.",
  image: "/images/product1.jpeg",
  price: "Request Quote",
  status: "In Stock",
  quickSpecs: [
    { label: "Voltage", value: "72V", icon: <Zap size={20} /> },
    { label: "Capacity", value: "40Ah", icon: <Battery size={20} /> },
    { label: "Chemistry", value: "LiFePO4", icon: <Settings size={20} /> },
  ],
  features: [
    {
      title: "Smart BMS",
      description:
        "Integrated Battery Management System for real-time monitoring and cell balancing.",
      icon: <ShieldCheck size={28} />,
    },
    {
      title: "Active Cooling",
      description:
        "Proprietary thermal dispersion tech keeps core temperatures optimal during rapid charging.",
      icon: <ThermometerSun size={28} />,
    },
    {
      title: "OEM Certified",
      description:
        "Fully tested and compliant with industry-standard automotive requirements.",
      icon: <CheckCircle2 size={28} />,
    },
  ],
  techSpecs: {
    "Nominal Voltage": "72V",
    "Operating Voltage Range": "60V - 84V",
    "Nominal Capacity": "40Ah (2.88 kWh)",
    "Max Continuous Discharge": "80A",
    "Peak Discharge": "120A (10 sec)",
    "Charge Temperature": "0°C to 45°C",
    "Discharge Temperature": "-20°C to 60°C",
    "Cycle Life": ">3000 Cycles @ 80% DoD",
    Weight: "24.5 kg",
    "Dimensions (L x W x H)": "340 x 220 x 280 mm",
    "IP Rating": "IP67 (Water & Dust Resistant)",
  },
};

const ProductDetailsPage = () => {
  return (
    <PageWrapper>
      {/* --- HERO SECTION --- */}
      <Container>
        <HeroGrid>
          <Animated animation="slideRight" duration={0.8}>
            <ImageContainer>
              <ProductImage src={productData.image} alt={productData.name} />
              <StatusBadge>{productData.status}</StatusBadge>
            </ImageContainer>
          </Animated>

          <Animated animation="fadeIn" delay={0.2} duration={0.8}>
            <ProductInfo>
              <CategoryLabel>{productData.category}</CategoryLabel>
              <ProductTitle>{productData.name}</ProductTitle>
              <ProductDescription>{productData.description}</ProductDescription>

              <QuickSpecsGrid>
                {productData.quickSpecs.map((spec, index) => (
                  <QuickSpecCard key={index}>
                    <IconBox>{spec.icon}</IconBox>
                    <SpecInfo>
                      <SpecLabel>{spec.label}</SpecLabel>
                      <SpecValue>{spec.value}</SpecValue>
                    </SpecInfo>
                  </QuickSpecCard>
                ))}
              </QuickSpecsGrid>

              <ActionButtons>
                <PrimaryButton href="#contact">
                  <Mail size={20} /> Request a Quote
                </PrimaryButton>
                <SecondaryButton href="/assets/spec-sheet.pdf" download>
                  <Download size={20} /> Spec Sheet
                </SecondaryButton>
              </ActionButtons>
            </ProductInfo>
          </Animated>
        </HeroGrid>
      </Container>

      {/* --- FEATURES SECTION --- */}
      <FeaturesSection>
        <Container>
          <Animated animation="fadeInUp" duration={0.6}>
            <SectionHeading>Key Features</SectionHeading>
          </Animated>
          <FeaturesGrid>
            {productData.features.map((feature, index) => (
              <Animated
                key={index}
                animation="fadeInScale"
                delay={index * 0.15}
              >
                <FeatureCard>
                  <FeatureIcon>{feature.icon}</FeatureIcon>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDesc>{feature.description}</FeatureDesc>
                </FeatureCard>
              </Animated>
            ))}
          </FeaturesGrid>
        </Container>
      </FeaturesSection>

      {/* --- TECH SPECS SECTION --- */}
      <Container>
        <SpecsSection>
          <Animated animation="fadeInLeft" duration={0.6}>
            <SectionHeading>Technical Specifications</SectionHeading>
          </Animated>
          <Animated animation="fadeInUp" delay={0.2} duration={0.8}>
            <SpecsTable>
              {Object.entries(productData.techSpecs).map(
                ([key, value], index) => (
                  <SpecRow key={index}>
                    <SpecName>{key}</SpecName>
                    <SpecData>{value}</SpecData>
                  </SpecRow>
                ),
              )}
            </SpecsTable>
          </Animated>
        </SpecsSection>
      </Container>
    </PageWrapper>
  );
};

export default ProductDetailsPage;

// --- STYLED COMPONENTS ---

const PageWrapper = styled.div`
  padding-top: 6rem; /* Account for potential fixed navbar */
  padding-bottom: 4rem;
  background: var(--color-bg);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

// Hero Area
const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 6rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
  background: linear-gradient(
    135deg,
    var(--color-surface) 0%,
    var(--color-surface-secondary) 100%
  );
  /* border-radius: 24px; */
  border: 1px solid var(--color-border-light);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: var(--shadow-md);
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const StatusBadge = styled.span`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  background: var(--color-primary);
  color: white;
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 15px rgba(0, 200, 81, 0.3);
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const CategoryLabel = styled.span`
  color: var(--color-primary);
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
`;

const ProductTitle = styled.h1`
  font-size: 3.5rem;
  line-height: 1.1;
  color: var(--color-text);
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ProductDescription = styled.p`
  font-size: 1.15rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: 2.5rem;
`;

const QuickSpecsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const QuickSpecCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--color-surface);
  padding: 1.25rem;
  border-radius: 16px;
  border: 1px solid var(--color-border-light);
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: var(--color-surface-secondary);
  color: var(--color-primary);
  border-radius: 12px;
`;

const SpecInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const SpecLabel = styled.span`
  font-size: 0.85rem;
  color: var(--color-text-muted);
  font-weight: 500;
`;

const SpecValue = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-text);
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const PrimaryButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-primary-dark) 100%
  );
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(0, 200, 81, 0.3);
  transition: all var(--transition-medium);
  flex: 1;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 200, 81, 0.4);
    color: white;
  }
`;

const SecondaryButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: transparent;
  color: var(--color-text);
  border: 2px solid var(--color-border);
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all var(--transition-medium);
  flex: 1;

  &:hover {
    background: var(--color-surface);
    border-color: var(--color-primary);
    color: var(--color-primary);
    transform: translateY(-2px);
  }
`;

// Features Area
const FeaturesSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(
    135deg,
    var(--color-bg-secondary) 0%,
    var(--color-bg) 100%
  );
  border-top: 1px solid var(--color-border-light);
  border-bottom: 1px solid var(--color-border-light);
`;

const SectionHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 3rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
`;

const FeatureCard = styled.div`
  background: var(--color-surface);
  padding: 2.5rem 2rem;
  border-radius: 20px;
  border: 1px solid var(--color-border-light);
  text-align: center;
  transition: all var(--transition-medium);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 200, 81, 0.1);
    border-color: var(--color-primary-light);
  }
`;

const FeatureIcon = styled.div`
  width: 64px;
  height: 64px;
  margin: 0 auto 1.5rem;
  background: var(--color-surface-secondary);
  color: var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-medium);

  ${FeatureCard}:hover & {
    background: var(--color-primary);
    color: white;
    transform: scale(1.1);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const FeatureDesc = styled.p`
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;
`;

// Specs Table Area
const SpecsSection = styled.section`
  padding: 6rem 0;
`;

const SpecsTable = styled.div`
  max-width: 900px;
  margin: 0 auto;
  background: var(--color-surface);
  border-radius: 20px;
  border: 1px solid var(--color-border-light);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
`;

const SpecRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1.25rem 2rem;
  border-bottom: 1px solid var(--color-border-light);
  transition: background-color var(--transition-fast);

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: var(--color-surface-secondary);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    padding: 1rem 1.5rem;
  }
`;

const SpecName = styled.div`
  font-weight: 600;
  color: var(--color-text-muted);
`;

const SpecData = styled.div`
  font-weight: 700;
  color: var(--color-text);
`;
