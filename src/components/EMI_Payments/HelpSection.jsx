import styled from "styled-components";
import { Phone, MessageCircle, Clock } from "lucide-react";
import Animated from "../common/Animated";

const HelpSection = () => {
  return (
    <Section>
      <Container>
        <Animated animation="fadeIn" duration={0.8}>
          <SectionTitle>Need Assistance?</SectionTitle>
          <SectionDescription>
            Having trouble with our services or products? Our dedicated support
            team is here to help you every step of the way. Reach out to us
            anytime and we'll ensure your concerns are addressed promptly.
          </SectionDescription>
        </Animated>

        <ContactContainer>
          <Animated animation="slideUp" delay={0.3}>
            <ContactCard>
              <IconWrapper>
                <Phone size={28} />
              </IconWrapper>
              <ContactInfo>
                <ContactLabel>Call Us Now</ContactLabel>
                <ContactNumber href="tel:+919876543210">
                  +91 98765 43210
                </ContactNumber>
              </ContactInfo>
            </ContactCard>
          </Animated>

          <Animated animation="slideUp" delay={0.4}>
            <SupportInfo>
              <SupportItem>
                <Clock size={20} />
                <span>Available 24/7</span>
              </SupportItem>
              <SupportItem>
                <MessageCircle size={20} />
                <span>Quick Response Guaranteed</span>
              </SupportItem>
            </SupportInfo>
          </Animated>
        </ContactContainer>
      </Container>
    </Section>
  );
};

export default HelpSection;

// Styled Components
const Section = styled.section`
  padding: 4rem 2rem;
  background: var(--color-bg);
  position: relative;

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
      transparent 50%
    );
    opacity: 0.03;
  }

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  font-size: 2.75rem;
  font-weight: 800;
  color: var(--color-primary);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const SectionDescription = styled.p`
  font-size: 1.2rem;
  color: var(--color-text-secondary);
  margin-bottom: 3rem;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const ContactCard = styled.div`
  display: flex;
  align-items: center;
  background: var(--color-surface);
  padding: 2rem 3rem;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 2px solid var(--color-primary);
  gap: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(0, 200, 81, 0.2);
  }

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 2rem;
    text-align: center;
    gap: 1rem;
  }
`;

const IconWrapper = styled.div`
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-primary-dark) 100%
  );
  color: white;
  padding: 1rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 200, 81, 0.3);
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ContactLabel = styled.span`
  font-size: 1rem;
  color: var(--color-text-secondary);
  font-weight: 500;
`;

const ContactNumber = styled.a`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-primary);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-primary-dark);
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const SupportInfo = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const SupportItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text-secondary);
  font-size: 1rem;
  font-weight: 500;

  svg {
    color: var(--color-primary);
  }
`;
