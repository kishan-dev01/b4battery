import styled from "styled-components";
import { Battery, Cpu, Plug, ArrowRight, Star, Zap } from "lucide-react";
import Animated from "../components/common/Animated";

const ProductsSection = () => {
  const products = [
    {
      title: "3 Wheeler - Battery Leasing",
      subtitle: "Flexible Leasing Solutions",
      description:
        "Cost-effective battery leasing for electric three-wheelers with maintenance support and flexible payment options.",
      icon: <Battery size={48} />,
      image: "/images/3-wheeler.png",
      features: ["24/7 Support", "Flexible Terms", "Maintenance Included"],
      price: "Starting ₹2,999/month",
      badge: "Most Popular",
    },
    {
      title: "Energy Storage System",
      subtitle: "Lithium Smart Inverter",
      description:
        "Advanced lithium-ion energy storage with smart inverter technology for residential and commercial applications.",
      icon: <Cpu size={48} />,
      image: "/images/energy-storage.jpg",
      features: ["Smart Technology", "High Efficiency", "Long Lifespan"],
      price: "Starting ₹45,000",
      badge: "Premium",
    },
    {
      title: "Home Inverter Battery",
      subtitle: "Leading Performance",
      description:
        "High-performance inverter batteries ensuring uninterrupted power backup for homes with superior durability.",
      icon: <Plug size={48} />,
      image: "/images/home-inverter.png",
      features: ["Quick Charging", "Deep Cycle", "5 Year Warranty"],
      price: "Starting ₹8,500",
      badge: "Best Value",
    },
  ];

  return (
    <Section>
      <Container>
        <Animated animation="fadeIn" duration={0.8}>
          <SectionTitle>Our Product Range</SectionTitle>
          <SectionSubtitle>
            Innovative battery solutions engineered for reliability, efficiency,
            and sustainability
          </SectionSubtitle>
        </Animated>

        <ProductsGrid>
          {products.map((product, index) => (
            <Animated
              key={product.title}
              animation="fadeInScale"
              delay={index * 0.2}
            >
              <ProductCard>
                {product.badge && (
                  <Badge type={product.badge}>
                    <Star size={16} />
                    {product.badge}
                  </Badge>
                )}

                <ImageContainer>
                  <ProductImage src={product.image} alt={product.title} />
                  <ImageOverlay>
                    <IconWrapper>{product.icon}</IconWrapper>
                  </ImageOverlay>
                </ImageContainer>

                <ProductContent>
                  <ProductHeader>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductSubtitle>{product.subtitle}</ProductSubtitle>
                  </ProductHeader>

                  <ProductDescription>{product.description}</ProductDescription>

                  <FeaturesList>
                    {product.features.map((feature, idx) => (
                      <FeatureItem key={idx}>
                        <Zap size={16} />
                        {feature}
                      </FeatureItem>
                    ))}
                  </FeaturesList>

                  <ProductFooter>
                    <Price>{product.price}</Price>
                    <LearnMoreButton>
                      Learn More
                      <ArrowRight size={16} />
                    </LearnMoreButton>
                  </ProductFooter>
                </ProductContent>
              </ProductCard>
            </Animated>
          ))}
        </ProductsGrid>

        <Animated animation="slideUp" delay={0.8}>
          <ViewMoreContainer>
            <ViewMoreButton>
              View All Products
              <ArrowRight size={20} />
            </ViewMoreButton>
            <ViewMoreText>
              Explore our complete range of battery solutions and energy storage
              systems
            </ViewMoreText>
          </ViewMoreContainer>
        </Animated>
      </Container>
    </Section>
  );
};

export default ProductsSection;

// Styled Components
const Section = styled.section`
  padding: 3rem 2rem;
  background: linear-gradient(
    135deg,
    var(--color-bg) 0%,
    var(--color-bg-secondary) 100%
  );
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 80% 20%,
      var(--color-primary) 0%,
      transparent 50%
    );
    opacity: 0.03;
  }

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  color: var(--color-primary);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.25rem;
  text-align: center;
  color: var(--color-text-secondary);
  margin-bottom: 4rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.125rem;
    margin-bottom: 3rem;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const ProductCard = styled.div`
  background: var(--color-surface);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--color-border-light);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 30px rgba(0, 200, 81, 0.15);
    border-color: var(--color-primary);
  }
`;

const Badge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${(props) =>
    props.type === "Most Popular"
      ? "linear-gradient(135deg, var(--color-accent), var(--color-accent-dark))"
      : props.type === "Premium"
      ? "linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))"
      : "linear-gradient(135deg, var(--color-success), var(--color-success))"};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  z-index: 2;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const ImageContainer = styled.div`
  position: relative;
  height: 250px;
  overflow: hidden;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
  object-fit: contain;
  transition: transform 0.3s ease;

  ${ProductCard}:hover & {
    transform: scale(1.05);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-primary-dark)
  );
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;

  ${ProductCard}:hover & {
    opacity: 0.9;
  }
`;

const IconWrapper = styled.div`
  color: white;
  transform: scale(1.5);
`;

const ProductContent = styled.div`
  padding: 2rem;
`;

const ProductHeader = styled.div`
  margin-bottom: 1rem;
`;

const ProductTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.25rem;
  line-height: 1.3;
`;

const ProductSubtitle = styled.div`
  font-size: 1rem;
  color: var(--color-primary);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  font-size: 0.9rem;
  color: var(--color-text-secondary);

  svg {
    color: var(--color-primary);
    flex-shrink: 0;
  }
`;

const ProductFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border-light);
`;

const Price = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-primary);
`;

const LearnMoreButton = styled.button`
  background: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: var(--color-primary);
    color: white;
    transform: translateX(3px);
  }
`;

const ViewMoreContainer = styled.div`
  text-align: center;
`;

const ViewMoreButton = styled.button`
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-primary-dark) 100%
  );
  color: white;
  font-weight: 600;
  font-size: 1.25rem;
  padding: 1rem 3rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 200, 81, 0.3);
  margin-bottom: 1rem;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 200, 81, 0.4);
  }

  &:hover svg {
    transform: translateX(5px);
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;

const ViewMoreText = styled.p`
  color: var(--color-text-secondary);
  font-size: 1rem;
  max-width: 500px;
  margin: 0 auto;
`;
