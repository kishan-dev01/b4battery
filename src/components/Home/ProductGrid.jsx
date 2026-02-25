import React from "react";
import styled from "styled-components";
import { ArrowRight, Zap, BatteryMedium } from "lucide-react";
import Animated from "../common/Animated";

// Default placeholder data so the component works out of the box
const defaultProducts = [
  {
    id: 1,
    name: "NE 3W 84100",
    category: "Electric Vehicle",
    image: "/images/product1.jpeg",
    description:
      "High-performance lithium-ion pack designed for maximum range and rapid charging capabilities.",
    voltage: "72V",
    capacity: "40Ah",
    isNew: true,
  },
  {
    id: 2,
    name: "EcoStore Home Max",
    category: "Residential Storage",
    image: "/images/product2.jpeg",
    description:
      "Reliable home backup power solution integrating seamlessly with residential solar grids.",
    voltage: "48V",
    capacity: "100Ah",
    isNew: false,
  },
  {
    id: 3,
    name: "FleetPro Commercial",
    category: "Commercial Fleet",
    image: "/images/product3.jpeg",
    description:
      "Heavy-duty power cells engineered for commercial logistics and transport vehicles.",
    voltage: "96V",
    capacity: "200Ah",
    isNew: false,
  },
  {
    id: 4,
    name: "B4 Lite Commute",
    category: "E-Bikes & Scooters",
    image: "/images/product4.jpeg",
    description:
      "Lightweight, ultra-compact battery for daily urban commuting and micro-mobility.",
    voltage: "36V",
    capacity: "15Ah",
    isNew: false,
  },
  {
    id: 5,
    name: "AgriPower Tract-Cell",
    category: "Agricultural",
    image: "/images/product5.jpeg",
    description:
      "Ruggedized power solution built to withstand extreme environmental conditions.",
    voltage: "48V",
    capacity: "150Ah",
    isNew: true,
  },
  {
    id: 6,
    name: "SolarGrid Base",
    category: "Industrial Storage",
    image: "/images/product6.jpeg",
    description:
      "Scalable energy storage blocks for large-scale solar farm integrations.",
    voltage: "120V",
    capacity: "300Ah",
    isNew: false,
  },
];

const ProductGrid = ({
  title = "Our Energy Solutions",
  subtitle = "Engineered for performance, designed for sustainability. Discover our range of intelligent power systems.",
  products = defaultProducts,
}) => {
  return (
    <Section>
      <Container>
        <HeaderWrapper>
          <Animated animation="fadeInDown" duration={0.8}>
            <SectionTitle>{title}</SectionTitle>
            <Subtitle>{subtitle}</Subtitle>
          </Animated>
        </HeaderWrapper>

        <Grid>
          {products.map((product, index) => (
            <Animated
              key={product.id}
              animation="fadeInUp"
              delay={index * 0.1}
              duration={0.6}
            >
              <ProductCard>
                <ImageWrapper>
                  {/* Fallback background color in case image is missing */}
                  <ProductImage src={product.image} alt={product.name} />
                  {product.isNew && <NewBadge>New Arrival</NewBadge>}
                  <CategoryOverlay>{product.category}</CategoryOverlay>
                </ImageWrapper>

                <CardContent>
                  <ProductTitle>{product.name}</ProductTitle>
                  <ProductDescription>{product.description}</ProductDescription>

                  <SpecsRow>
                    <Spec>
                      <Zap size={16} />
                      <span>{product.voltage}</span>
                    </Spec>
                    <Spec>
                      <BatteryMedium size={16} />
                      <span>{product.capacity}</span>
                    </Spec>
                  </SpecsRow>
                </CardContent>

                <CardFooter>
                  <ViewButton href={`/product-details`}>
                    Explore Details <ArrowRight size={18} />
                  </ViewButton>
                </CardFooter>
              </ProductCard>
            </Animated>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default ProductGrid;

// Styled Components

const Section = styled.section`
  padding: 6rem 2rem;
  background: var(--color-bg);
  position: relative;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeaderWrapper = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.15rem;
  color: var(--color-text-secondary);
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.6;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 2.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ProductCard = styled.div`
  background: var(--color-surface);
  border-radius: 24px;
  border: 1px solid var(--color-border-light);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all var(--transition-medium);
  box-shadow: var(--shadow-sm);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 200, 81, 0.12);
    border-color: var(--color-primary);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
  background: var(--color-surface-secondary);
  overflow: hidden;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  /* Gives a nice fallback background if the image source is broken or loading */
  background: linear-gradient(
    135deg,
    var(--color-surface-secondary) 0%,
    var(--color-border-light) 100%
  );

  ${ProductCard}:hover & {
    transform: scale(1.05);
  }
`;

const NewBadge = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: var(--color-accent);
  color: var(--color-text);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 2;
`;

const CategoryOverlay = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  color: var(--color-primary-dark);
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 2;

  /* Dark mode adjustment for the overlay */
  [data-theme="dark"] & {
    background: rgba(0, 0, 0, 0.7);
    color: var(--color-primary-light);
  }
`;

const CardContent = styled.div`
  padding: 2rem 2rem 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.75rem;
`;

const ProductDescription = styled.p`
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const SpecsRow = styled.div`
  display: flex;
  gap: 1.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--color-border-light);
`;

const Spec = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text);
  font-weight: 600;
  font-size: 0.9rem;

  svg {
    color: var(--color-primary);
  }
`;

const CardFooter = styled.div`
  padding: 0 2rem 2rem;
`;

const ViewButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem;
  background: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all var(--transition-medium);
  cursor: pointer;

  &:hover {
    background: var(--color-primary);
    color: white;
    transform: translateY(-2px);
  }

  svg {
    transition: transform var(--transition-fast);
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;
