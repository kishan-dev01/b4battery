import styled from "styled-components";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Animated from "../common/Animated";

const ContactHero = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Section>
      <Container>
        <ContentWrapper>
          <Animated animation="slideLeft" duration={0.8}>
            <LeftColumn>
              <SectionTitle>Get in Touch</SectionTitle>
              <Description>
                We'd love to hear from you. Whether you have questions about our
                products, need technical support, or want to explore partnership
                opportunities, our team is here to help you every step of the
                way.
              </Description>

              <ContactInfo>
                <ContactItem>
                  <IconWrapper>
                    <Phone size={20} />
                  </IconWrapper>
                  <ContactText>
                    <ContactLabel>Call Us</ContactLabel>
                    <ContactValue>+91 98765 43210</ContactValue>
                  </ContactText>
                </ContactItem>

                <ContactItem>
                  <IconWrapper>
                    <Mail size={20} />
                  </IconWrapper>
                  <ContactText>
                    <ContactLabel>Email Us</ContactLabel>
                    <ContactValue>info@b4battery.com</ContactValue>
                  </ContactText>
                </ContactItem>

                <ContactItem>
                  <IconWrapper>
                    <MapPin size={20} />
                  </IconWrapper>
                  <ContactText>
                    <ContactLabel>Visit Us</ContactLabel>
                    <ContactValue>Electronic City, Bangalore</ContactValue>
                  </ContactText>
                </ContactItem>

                <ContactItem>
                  <IconWrapper>
                    <Clock size={20} />
                  </IconWrapper>
                  <ContactText>
                    <ContactLabel>Business Hours</ContactLabel>
                    <ContactValue>Mon - Fri: 9 AM - 6 PM</ContactValue>
                  </ContactText>
                </ContactItem>
              </ContactInfo>
            </LeftColumn>
          </Animated>

          <Animated animation="slideRight" duration={0.8} delay={0.2}>
            <RightColumn>
              <FormWrapper>
                <FormTitle>Send Us a Message</FormTitle>

                <Form onSubmit={handleSubmit}>
                  <FullRow>
                    <Input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      required
                    />
                  </FullRow>

                  <InputRow>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      required
                    />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                    />
                  </InputRow>

                  <InputRow>
                    <Input
                      type="text"
                      name="pincode"
                      placeholder="Pin Code"
                      required
                    />
                    <Input
                      type="text"
                      name="state"
                      placeholder="State"
                      required
                    />
                  </InputRow>

                  <FullRow>
                    <Input
                      type="text"
                      name="city"
                      placeholder="City"
                      required
                    />
                  </FullRow>

                  <FullRow>
                    <TextArea
                      name="address"
                      placeholder="Full Address"
                      rows="3"
                      required
                    />
                  </FullRow>

                  <SubmitButton type="submit">Send Message</SubmitButton>
                </Form>
              </FormWrapper>
            </RightColumn>
          </Animated>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default ContactHero;

// Styled Components
const Section = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(
    135deg,
    var(--color-bg) 0%,
    var(--color-bg-secondary) 100%
  );
  position: relative;
  min-height: 80vh;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 30% 70%,
      var(--color-primary) 0%,
      transparent 50%
    );
    opacity: 0.03;
  }

  @media (max-width: 768px) {
    padding: 4rem 1.5rem 3rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 2rem;
`;

const RightColumn = styled.div`
  display: flex;
  justify-content: center;
`;

const SectionTitle = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  color: var(--color-primary);
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    text-align: center;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: var(--color-surface);
  border-radius: 12px;
  border: 1px solid var(--color-border-light);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 200, 81, 0.1);
    border-color: var(--color-primary);
  }
`;

const IconWrapper = styled.div`
  color: var(--color-primary);
  padding: 0.75rem;
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-primary-dark) 100%
  );
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: white;
  }
`;

const ContactText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const ContactLabel = styled.span`
  font-size: 0.875rem;
  color: var(--color-text-muted);
  font-weight: 500;
`;

const ContactValue = styled.span`
  font-size: 1rem;
  color: var(--color-text);
  font-weight: 600;
`;

const FormWrapper = styled.div`
  background: var(--color-surface);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--color-border-light);
  width: 100%;
  max-width: 500px;
`;

const FormTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-text);
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const InputRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FullRow = styled.div`
  display: flex;
  width: 100%;
`;

const Input = styled.input`
  padding: 0.875rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  font-size: 1rem;
  color: var(--color-text);
  background: var(--color-bg);
  transition: all 0.3s ease;
  width: 100%;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(0, 200, 81, 0.1);
  }

  &::placeholder {
    color: var(--color-text-muted);
  }
`;

const TextArea = styled.textarea`
  padding: 0.875rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  font-size: 1rem;
  color: var(--color-text);
  background: var(--color-bg);
  transition: all 0.3s ease;
  width: 100%;
  resize: vertical;
  min-height: 80px;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(0, 200, 81, 0.1);
  }

  &::placeholder {
    color: var(--color-text-muted);
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-primary-dark) 100%
  );
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.125rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  box-shadow: 0 4px 15px rgba(0, 200, 81, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 200, 81, 0.4);
  }

  &:active {
    transform: translateY(-1px);
  }
`;
