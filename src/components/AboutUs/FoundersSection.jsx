import styled from "styled-components";
import { Linkedin, Twitter, Mail } from "lucide-react";
import Animated from "../common/Animated";

const FoundersSection = () => {
  const founders = [
    {
      name: "Rajesh Kumar",
      designation: "Co-Founder & CEO",
      image: "/images/founder1.jpg",
      bio: "With 15+ years in energy solutions, Rajesh leads B4Battery's strategic vision and market expansion.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "rajesh@b4battery.com",
      },
    },
    {
      name: "Sneha Patel",
      designation: "Co-Founder & CTO",
      image: "/images/founder2.jpg",
      bio: "Technology innovator with expertise in battery systems and sustainable energy solutions.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sneha@b4battery.com",
      },
    },
    {
      name: "Vikram Singh",
      designation: "Chief Operating Officer",
      image: "/images/founder3.jpg",
      bio: "Operations specialist ensuring quality and efficiency across all B4Battery processes.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "vikram@b4battery.com",
      },
    },
  ];

  return (
    <Section>
      <Container>
        <Animated animation="fadeIn" duration={0.8}>
          <SectionTitle>Meet Our Leadership</SectionTitle>
          <Subtitle>
            Visionary leaders driving innovation in battery technology and
            sustainable energy solutions
          </Subtitle>
        </Animated>

        <FoundersGrid>
          {founders.map((founder, index) => (
            <Animated
              key={founder.name}
              animation="fadeInScale"
              delay={index * 0.2}
            >
              <FounderCard>
                <ImageWrapper>
                  <FounderImage src={founder.image} alt={founder.name} />
                  <ImageOverlay>
                    <SocialLinks>
                      <SocialIcon
                        href={founder.social.linkedin}
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={20} />
                      </SocialIcon>
                      <SocialIcon
                        href={founder.social.twitter}
                        aria-label="Twitter"
                      >
                        <Twitter size={20} />
                      </SocialIcon>
                      <SocialIcon
                        href={founder.social.email}
                        aria-label="Email"
                      >
                        <Mail size={20} />
                      </SocialIcon>
                    </SocialLinks>
                  </ImageOverlay>
                </ImageWrapper>

                <FounderInfo>
                  <FounderName>{founder.name}</FounderName>
                  <FounderDesignation>{founder.designation}</FounderDesignation>
                  <FounderBio>{founder.bio}</FounderBio>
                </FounderInfo>
              </FounderCard>
            </Animated>
          ))}
        </FoundersGrid>
      </Container>
    </Section>
  );
};

export default FoundersSection;

// Styled Components
const Section = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(
    135deg,
    var(--color-bg-secondary) 0%,
    var(--color-bg) 100%
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
      circle at 70% 30%,
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

const Subtitle = styled.p`
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

const FoundersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const FounderCard = styled.div`
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

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
`;

const FounderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${FounderCard}:hover & {
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

  ${FounderCard}:hover & {
    opacity: 0.9;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  color: white;
  transition: all 0.3s ease;
  transform: translateY(20px);

  ${FounderCard}:hover & {
    transform: translateY(0);
  }

  &:hover {
    background: white;
    color: var(--color-primary);
    border-color: white;
    transform: scale(1.1);
  }

  &:nth-child(2) {
    transition-delay: 0.1s;
  }

  &:nth-child(3) {
    transition-delay: 0.2s;
  }
`;

const FounderInfo = styled.div`
  padding: 2.5rem 2rem;
  text-align: center;
`;

const FounderName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.5rem;
`;

const FounderDesignation = styled.div`
  font-size: 1rem;
  color: var(--color-primary);
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const FounderBio = styled.p`
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;
`;
