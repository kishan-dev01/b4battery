import React, { useState } from "react";
import styled from "styled-components";
import { ArrowRight, Zap, BatteryMedium, Shield, Leaf } from "lucide-react";
import Animated from "../components/common/Animated";

// Extended dummy data for the dedicated products page
const productsData = [
  {
    id: 1,
    name: "Neuron Core EV-X",
    category: "Electric Vehicle",
    image: "/images/energy-storage.jpg",
    description:
      "Our flagship high-performance lithium-ion power pack engineered specifically for modern electric vehicles. Delivers sustained, reliable power with advanced thermal dispersion.",
    highlights: ["72V Voltage", "40Ah Capacity", "Active Cooling"],
    icon: <Zap size={20} />,
    featured: true,
  },
  {
    id: 2,
    name: "EcoStore Home Max",
    category: "Residential Storage",
    image: "/images/energy-storage.jpg",
    description:
      "Reliable home backup power solution integrating seamlessly with residential solar grids for 24/7 energy independence.",
    highlights: ["48V System", "100Ah Capacity", "Solar Ready"],
    icon: <Leaf size={20} />,
  },
  {
    id: 3,
    name: "FleetPro Commercial",
    category: "Commercial Fleet",
    image: "/images/energy-storage.jpg",
    description:
      "Heavy-duty power cells engineered for high-uptime commercial logistics and transport vehicles.",
    highlights: ["96V Voltage", "200Ah Capacity", "Fast Charge"],
    icon: <BatteryMedium size={20} />,
  },
  {
    id: 4,
    name: "Neuron Lite Commute",
    category: "Micro-Mobility",
    image: "/images/energy-storage.jpg",
    description:
      "Lightweight, ultra-compact battery optimized for daily urban commuting on e-bikes and scooters.",
    highlights: ["36V Voltage", "15Ah Capacity", "Ultra-Light"],
    icon: <Zap size={20} />,
  },
  {
    id: 5,
    name: "AgriPower Tract-Cell",
    category: "Agricultural",
    image: "/images/energy-storage.jpg",
    description:
      "Ruggedized, dust-and-water-resistant power solution built to withstand extreme environmental conditions on the farm.",
    highlights: ["IP67 Rated", "150Ah Capacity", "Shockproof"],
    icon: <Shield size={20} />,
  },
  {
    id: 6,
    name: "SolarGrid Base",
    category: "Industrial Storage",
    image: "/images/energy-storage.jpg",
    description:
      "Scalable energy storage blocks designed for large-scale solar farm integrations and grid stabilization.",
    highlights: ["120V Voltage", "300Ah Capacity", "Modular"],
    icon: <Leaf size={20} />,
  },
  {
    id: 7,
    name: "MarineVolt Pro",
    category: "Marine Application",
    image: "/images/energy-storage.jpg",
    description:
      "Corrosion-resistant marine battery pack offering dependable start and deep-cycle performance for boats.",
    highlights: ["Saltwater Safe", "Deep Cycle", "12V/24V Modes"],
    icon: <Shield size={20} />,
  },
  {
    id: 8,
    name: "AeroCell Drone-X",
    category: "Aviation/UAV",
    image: "/images/energy-storage.jpg",
    description:
      "High discharge rate lithium polymer cells designed for extended flight times in commercial drones.",
    highlights: ["High C-Rate", "Lightweight", "Smart BMS"],
    icon: <Zap size={20} />,
  },
];

const categories = [
  "All",
  "Electric Vehicle",
  "Residential Storage",
  "Commercial Fleet",
  "Micro-Mobility",
  "Industrial Storage",
];

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = productsData.filter(
    (product) =>
      activeCategory === "All" || product.category === activeCategory,
  );

  return (
    <PageWrapper>
      <Container>
        {/* Page Header */}
        <Animated animation="fadeInDown" duration={0.8}>
          <Header>
            <PageTitle>Explore Our Products</PageTitle>
            <PageSubtitle>
              Next-generation energy solutions engineered for performance,
              durability, and a sustainable future.
            </PageSubtitle>
          </Header>
        </Animated>

        {/* Category Filters */}
        <Animated animation="fadeIn" delay={0.2} duration={0.6}>
          <FilterScroll>
            <FilterContainer>
              {categories.map((category) => (
                <FilterButton
                  key={category}
                  $active={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </FilterButton>
              ))}
            </FilterContainer>
          </FilterScroll>
        </Animated>

        {/* Asymmetric Product Grid */}
        <ProductGrid>
          {filteredProducts.map((product, index) => (
            <Animated
              key={product.id}
              animation="fadeInUp"
              delay={index * 0.1}
              duration={0.6}
              className={
                product.featured && activeCategory === "All"
                  ? "featured-span"
                  : ""
              }
            >
              <ProductCard
                $isFeatured={product.featured && activeCategory === "All"}
              >
                <ImageArea
                  $isFeatured={product.featured && activeCategory === "All"}
                >
                  <ProductImage src={product.image} alt={product.name} />
                  <CategoryBadge>
                    {product.icon}
                    {product.category}
                  </CategoryBadge>

                  {/* Hover Reveal Glassmorphism Panel */}
                  <HoverSpecs className="hover-specs">
                    {product.highlights.map((highlight, i) => (
                      <SpecTag key={i}>{highlight}</SpecTag>
                    ))}
                  </HoverSpecs>
                </ImageArea>

                <ContentArea>
                  <div>
                    <ProductTitle>{product.name}</ProductTitle>
                    <ProductDescription
                      $isFeatured={product.featured && activeCategory === "All"}
                    >
                      {product.description}
                    </ProductDescription>
                  </div>

                  <ActionArea>
                    <DetailsButton href="/product-details">
                      View Details <ArrowRight size={18} />
                    </DetailsButton>
                  </ActionArea>
                </ContentArea>
              </ProductCard>
            </Animated>
          ))}
        </ProductGrid>
      </Container>
    </PageWrapper>
  );
};

export default ProductsPage;

// --- STYLED COMPONENTS ---

const PageWrapper = styled.div`
  padding: 8rem 0 6rem; /* Extra top padding for standard navbar clearance */
  background: var(--color-bg);
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const PageTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PageSubtitle = styled.p`
  font-size: 1.2rem;
  color: var(--color-text-secondary);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

// Filter Tabs
const FilterScroll = styled.div`
  width: 100%;
  overflow-x: auto;
  padding-bottom: 1rem;
  margin-bottom: 3rem;

  /* Hide scrollbar but keep functionality */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  min-width: max-content;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const FilterButton = styled.button`
  background: ${(props) =>
    props.$active ? "var(--color-primary)" : "var(--color-surface)"};
  color: ${(props) =>
    props.$active ? "white" : "var(--color-text-secondary)"};
  border: 1px solid
    ${(props) =>
      props.$active ? "var(--color-primary)" : "var(--color-border-light)"};
  padding: 0.6rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all var(--transition-medium);
  box-shadow: ${(props) =>
    props.$active ? "0 4px 15px rgba(0, 200, 81, 0.2)" : "none"};

  &:hover {
    border-color: var(--color-primary);
    color: ${(props) => (props.$active ? "white" : "var(--color-primary)")};
  }
`;

// Asymmetric Grid
const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  /* The magic that makes the featured card span across the grid */
  .featured-span {
    grid-column: 1 / -1;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;

    .featured-span {
      grid-column: auto;
    }
  }
`;

const ProductCard = styled.div`
  background: var(--color-surface);
  border-radius: 24px;
  border: 1px solid var(--color-border-light);
  overflow: hidden;
  display: flex;
  flex-direction: ${(props) => (props.$isFeatured ? "row" : "column")};
  height: 100%;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-medium);
  position: relative;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 40px rgba(0, 200, 81, 0.12);
    border-color: var(--color-primary-light);
  }

  /* Force featured card back to column layout on mobile */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageArea = styled.div`
  position: relative;
  width: ${(props) => (props.$isFeatured ? "55%" : "100%")};
  height: ${(props) => (props.$isFeatured ? "100%" : "260px")};
  min-height: 260px;
  background: linear-gradient(
    135deg,
    var(--color-surface-secondary) 0%,
    var(--color-border-light) 100%
  );
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    height: 260px;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  ${ProductCard}:hover & {
    transform: scale(1.08);
  }
`;

const CategoryBadge = styled.div`
  position: absolute;
  top: 1.25rem;
  left: 1.25rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  color: var(--color-primary-dark);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  z-index: 2;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);

  [data-theme="dark"] & {
    background: rgba(0, 0, 0, 0.7);
    color: var(--color-primary-light);
  }
`;

// Glassmorphism hover effect
const HoverSpecs = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2rem 1.25rem 1.25rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 100%);
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  transform: translateY(100%);
  opacity: 0;
  transition: all 0.4s ease;
  z-index: 2;

  ${ProductCard}:hover & {
    transform: translateY(0);
    opacity: 1;
  }
`;

const SpecTag = styled.span`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  border-radius: 8px;
`;

const ContentArea = styled.div`
  width: ${(props) => (props.$isFeatured ? "45%" : "100%")};
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;

  @media (max-width: 768px) {
    width: 100%;
    padding: 2rem 1.5rem;
  }
`;

const ProductTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 1rem;
`;

const ProductDescription = styled.p`
  font-size: ${(props) => (props.$isFeatured ? "1.1rem" : "1rem")};
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ActionArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const DetailsButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--color-surface);
  color: var(--color-text);
  border: 2px solid var(--color-border);
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  transition: all var(--transition-medium);

  &:hover {
    background: var(--color-primary);
    border-color: var(--color-primary);
    color: white;
    transform: translateX(4px);
  }

  svg {
    transition: transform var(--transition-fast);
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;
