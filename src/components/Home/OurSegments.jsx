import styled from "styled-components";
import Animated from "../common/Animated";

const OurSegments = () => {
  const segments = [
    {
      title: "3 Wheeler",
      image: "/images/3-wheeler.png",
      description:
        "Reliable battery solutions for commercial three-wheelers and auto-rickshaws",
    },
    {
      title: "Energy Storage System",
      image: "/images/energy-storage.jpg",
      description:
        "Advanced energy storage solutions for residential and commercial applications",
    },
    {
      title: "Home Inverter",
      image: "/images/home-inverter.png",
      description:
        "Dependable inverter batteries for uninterrupted home power backup",
    },
  ];

  return (
    <Section>
      <Container>
        <Animated animation="fadeIn" duration={0.8}>
          <SectionTitle>Our Segments</SectionTitle>
          <Subtitle>
            Powering diverse applications with specialized battery solutions
          </Subtitle>
        </Animated>

        <CardsContainer>
          {segments.map((segment, index) => (
            <Animated
              key={segment.title}
              animation="fadeInScale"
              delay={index * 0.2}
            >
              <SegmentCard>
                <ImageWrapper>
                  <img src={segment.image} alt={segment.title} />
                  <ImageOverlay>
                    <OverlayText>View Products</OverlayText>
                  </ImageOverlay>
                </ImageWrapper>

                <CardContent>
                  <CardTitle>{segment.title}</CardTitle>
                  <CardDescription>{segment.description}</CardDescription>

                  <LearnMoreButton>Learn More</LearnMoreButton>
                </CardContent>
              </SegmentCard>
            </Animated>
          ))}
        </CardsContainer>
      </Container>
    </Section>
  );
};

export default OurSegments;

// Styled Components
const Section = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(
    135deg,
    var(--color-bg) 0%,
    var(--color-bg-secondary) 100%
  );
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
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

const Subtitle = styled.p`
  font-size: 1.25rem;
  text-align: center;
  color: var(--color-text-secondary);
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.125rem;
    margin-bottom: 3rem;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const SegmentCard = styled.div`
  background: var(--color-surface);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--color-border-light);
  transition: all 0.3s ease;
  cursor: pointer;
  /* border: 2px solid black; */
  height: 32rem;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 30px rgba(0, 200, 81, 0.15);
    border-color: var(--color-primary);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.3s ease;
  }

  &:hover img {
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

  ${SegmentCard}:hover & {
    opacity: 0.9;
  }
`;

const OverlayText = styled.span`
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
  transform: translateY(20px);
  transition: transform 0.3s ease;

  ${SegmentCard}:hover & {
    transform: translateY(0);
  }
`;

const CardContent = styled.div`
  padding: 2rem;
  text-align: center;
`;

const CardTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 1rem;
  line-height: 1.3;
`;

const CardDescription = styled.p`
  color: var(--color-text-secondary);
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const LearnMoreButton = styled.button`
  background: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  font-weight: 600;
  font-size: 1rem;
  padding: 0.75rem 2rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: var(--color-primary);
    transition: left 0.3s ease;
    z-index: -1;
  }

  &:hover {
    color: white;
    transform: translateY(-2px);
  }

  &:hover::before {
    left: 0;
  }
`;
