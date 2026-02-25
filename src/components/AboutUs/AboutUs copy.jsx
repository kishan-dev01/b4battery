import styled from "styled-components";
import { Battery, Zap, Shield, Users, Award, Leaf } from "lucide-react";
import Animated from "../common/Animated";

const AboutUs = () => {
  const stats = [
    { number: "10+", label: "Years Experience", icon: <Award size={24} /> },
    { number: "50K+", label: "Batteries Sold", icon: <Battery size={24} /> },
    { number: "500+", label: "Happy Customers", icon: <Users size={24} /> },
    {
      number: "99%",
      label: "Customer Satisfaction",
      icon: <Shield size={24} />,
    },
  ];

  const values = [
    {
      icon: <Zap size={32} />,
      title: "Innovation",
      description:
        "Continuously advancing battery technology to deliver superior performance and reliability.",
    },
    {
      icon: <Leaf size={32} />,
      title: "Sustainability",
      description:
        "Committed to eco-friendly solutions that reduce environmental impact and promote clean energy.",
    },
    {
      icon: <Shield size={32} />,
      title: "Quality Assurance",
      description:
        "Rigorous testing and quality control ensure every battery meets the highest industry standards.",
    },
    // {
    //   icon: <Users size={32} />,
    //   title: "Customer First",
    //   description:
    //     "Putting customer needs at the center of everything we do, from product design to after-sales support.",
    // },
  ];

  return (
    <AboutSection>
      {/* Hero Section */}
      <HeroContainer>
        <Container>
          <HeroContent>
            <Animated animation="fadeIn" duration={0.8}>
              <HeroTitle>About B4Battery</HeroTitle>
              <HeroSubtitle>Powering Innovation, Energizing Lives</HeroSubtitle>
              <HeroDescription>
                Leading the charge in sustainable battery solutions with
                cutting-edge technology and unwavering commitment to excellence.
              </HeroDescription>
            </Animated>
          </HeroContent>
        </Container>
      </HeroContainer>

      {/* Story Section */}
      <StorySection>
        <Container>
          <ContentGrid>
            <Animated animation="slideLeft" duration={0.8}>
              <StoryContent>
                <SectionTitle>Our Story</SectionTitle>
                <StoryText>
                  Founded with a vision to revolutionize the battery industry,
                  B4Battery emerged from a simple belief: reliable energy
                  storage should be accessible to everyone. What started as a
                  small venture has grown into a trusted name in battery
                  solutions, serving thousands of customers across India.
                </StoryText>
                <StoryText>
                  Our journey began when our founders recognized the growing
                  need for efficient, long-lasting batteries in the rapidly
                  expanding electric vehicle and renewable energy sectors.
                  Today, we continue to innovate and expand our product range,
                  always staying true to our core mission of delivering quality
                  and reliability.
                </StoryText>
              </StoryContent>
            </Animated>

            <Animated animation="slideRight" duration={0.8} delay={0.2}>
              <ImageWrapper>
                <img src="/hero.png" alt="B4Battery Story" />
              </ImageWrapper>
            </Animated>
          </ContentGrid>
        </Container>
      </StorySection>

      {/* Stats Section */}
      <StatsSection>
        <Container>
          <Animated animation="fadeIn" duration={0.8}>
            <SectionTitle centered>Our Achievements</SectionTitle>
          </Animated>

          <StatsGrid>
            {stats.map((stat, index) => (
              <Animated
                key={stat.label}
                animation="bounceScale"
                delay={index * 0.1}
              >
                <StatCard>
                  <StatIcon>{stat.icon}</StatIcon>
                  <StatNumber>{stat.number}</StatNumber>
                  <StatLabel>{stat.label}</StatLabel>
                </StatCard>
              </Animated>
            ))}
          </StatsGrid>
        </Container>
      </StatsSection>

      {/* Mission & Vision */}
      <MissionSection>
        <Container>
          <MissionGrid>
            <Animated animation="fadeIn" duration={0.8}>
              <MissionCard>
                <CardIcon>🎯</CardIcon>
                <CardTitle>Our Mission</CardTitle>
                <CardDescription>
                  To provide innovative, reliable, and sustainable battery
                  solutions that power progress and enable a cleaner, more
                  efficient future for businesses and communities worldwide.
                </CardDescription>
              </MissionCard>
            </Animated>

            <Animated animation="fadeIn" duration={0.8} delay={0.2}>
              <MissionCard>
                <CardIcon>🚀</CardIcon>
                <CardTitle>Our Vision</CardTitle>
                <CardDescription>
                  To be the leading battery technology company that transforms
                  how the world stores and uses energy, creating sustainable
                  solutions that benefit both people and the planet.
                </CardDescription>
              </MissionCard>
            </Animated>
          </MissionGrid>
        </Container>
      </MissionSection>

      {/* Values Section */}
      <ValuesSection>
        <Container>
          <Animated animation="fadeIn" duration={0.8}>
            <SectionTitle centered>Our Core Values</SectionTitle>
            <SectionSubtitle>
              The principles that guide everything we do at B4Battery
            </SectionSubtitle>
          </Animated>

          <ValuesGrid>
            {values.map((value, index) => (
              <Animated
                key={value.title}
                animation="fadeInScale"
                delay={index * 0.15}
              >
                <ValueCard>
                  <ValueIcon>{value.icon}</ValueIcon>
                  <ValueTitle>{value.title}</ValueTitle>
                  <ValueDescription>{value.description}</ValueDescription>
                </ValueCard>
              </Animated>
            ))}
          </ValuesGrid>
        </Container>
      </ValuesSection>

      {/* CTA Section */}
      <CtaSection>
        <Container>
          <Animated animation="fadeIn" duration={0.8}>
            <CtaContent>
              <CtaTitle>Ready to Power Your Future?</CtaTitle>
              <CtaDescription>
                Join thousands of satisfied customers who trust B4Battery for
                their energy needs.
              </CtaDescription>
              <CtaButtons>
                <PrimaryButton>Explore Our Products</PrimaryButton>
                <SecondaryButton>Contact Us Today</SecondaryButton>
              </CtaButtons>
            </CtaContent>
          </Animated>
        </Container>
      </CtaSection>
    </AboutSection>
  );
};

export default AboutUs;

// Styled Components
const AboutSection = styled.div`
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const HeroContainer = styled.section`
  background: linear-gradient(
    135deg,
    var(--color-bg) 0%,
    var(--color-bg-secondary) 100%
  );
  padding: 8rem 0 4rem;
  text-align: center;
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
      circle at 50% 50%,
      var(--color-primary) 0%,
      transparent 70%
    );
    opacity: 0.05;
  }

  @media (max-width: 768px) {
    padding: 6rem 0 3rem;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  color: var(--color-text);
  margin-bottom: 1rem;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  color: var(--color-primary);
  margin-bottom: 2rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.25rem;
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

const StorySection = styled.section`
  padding: 6rem 0;
  background: var(--color-surface);
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const StoryContent = styled.div``;

const SectionTitle = styled.h2`
  font-size: 2.75rem;
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 2rem;
  ${(props) => props.centered && "text-align: center;"}

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.25rem;
  color: var(--color-text-secondary);
  text-align: center;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const StoryText = styled.p`
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

const ImageWrapper = styled.div`
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const StatsSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-primary-dark) 100%
  );
  color: white;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const StatCard = styled.div`
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const StatIcon = styled.div`
  margin-bottom: 1rem;
  color: var(--color-accent);
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  opacity: 0.9;
`;

const MissionSection = styled.section`
  padding: 6rem 0;
  background: var(--color-bg);
`;

const MissionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const MissionCard = styled.div`
  background: var(--color-surface);
  padding: 3rem;
  border-radius: 24px;
  text-align: center;
  border: 1px solid var(--color-border-light);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;

const CardIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
`;

const ValuesSection = styled.section`
  padding: 6rem 0;
  background: var(--color-bg-secondary);
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
`;

const ValueCard = styled.div`
  background: var(--color-surface);
  padding: 2.5rem 2rem;
  border-radius: 20px;
  text-align: center;
  border: 1px solid var(--color-border-light);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 200, 81, 0.15);
    border-color: var(--color-primary);
  }
`;

const ValueIcon = styled.div`
  color: var(--color-primary);
  margin-bottom: 1.5rem;
`;

const ValueTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 1rem;
`;

const ValueDescription = styled.p`
  color: var(--color-text-secondary);
  line-height: 1.6;
`;

const CtaSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(
    135deg,
    var(--color-bg) 0%,
    var(--color-surface) 100%
  );
  text-align: center;
`;

const CtaContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const CtaTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const CtaDescription = styled.p`
  font-size: 1.25rem;
  color: var(--color-text-secondary);
  margin-bottom: 3rem;
`;

const CtaButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled.button`
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-primary-dark) 100%
  );
  color: white;
  font-weight: 600;
  font-size: 1.125rem;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 200, 81, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 200, 81, 0.4);
  }
`;

const SecondaryButton = styled.button`
  background: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  font-weight: 600;
  font-size: 1.125rem;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--color-primary);
    color: white;
    transform: translateY(-3px);
  }
`;
