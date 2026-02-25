import styled, { keyframes } from "styled-components";
import { MapPin, Phone, Mail, Clock, ArrowRight, Zap } from "lucide-react";
import Animated from "../common/Animated";

const ContactHero = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      {/* ── Hero Banner ── */}
      <HeroBanner>
        <BannerOverlay />
        <BannerGrid />
        <BannerContent>
          <BannerEyebrow>
            <Zap size={14} />
            B4 Battery Support
          </BannerEyebrow>
          <BannerHeading>
            Let's <Highlight>Power</Highlight> Up
            <br />
            Your Journey
          </BannerHeading>
          <BannerSub>
            Questions, partnerships, or just a hello — we're always on.
          </BannerSub>
          <BannerCta href="#contact-form">
            Get in Touch <ArrowRight size={16} />
          </BannerCta>
        </BannerContent>

        {/* Floating decorative orbs */}
        <Orb
          style={{
            top: "15%",
            right: "10%",
            width: 220,
            height: 220,
            opacity: 0.18,
            background: "var(--color-primary)",
          }}
        />
        <Orb
          style={{
            bottom: "10%",
            right: "28%",
            width: 120,
            height: 120,
            opacity: 0.12,
            background: "var(--color-accent)",
          }}
        />
        <Orb
          style={{
            top: "50%",
            left: "3%",
            width: 80,
            height: 80,
            opacity: 0.1,
            background: "var(--color-primary-light)",
          }}
        />
      </HeroBanner>

      {/* ── Main Contact Section ── */}
      <Section id="contact-form">
        <BgAccent />
        <Container>
          {/* Stats strip */}
          <StatsStrip>
            {[
              { value: "24h", label: "Response Time" },
              { value: "10K+", label: "Happy Clients" },
              { value: "99%", label: "Satisfaction Rate" },
              { value: "5★", label: "Support Rating" },
            ].map((s) => (
              <StatItem key={s.label}>
                <StatValue>{s.value}</StatValue>
                <StatLabel>{s.label}</StatLabel>
              </StatItem>
            ))}
          </StatsStrip>

          <ContentWrapper>
            {/* Left column */}
            <Animated animation="slideLeft" duration={0.8}>
              <LeftColumn>
                <SectionTitle>Get in Touch</SectionTitle>
                <Description>
                  Whether you have questions about our products, need technical
                  support, or want to explore partnership opportunities — our
                  team is always here, every step of the way.
                </Description>

                <ContactInfo>
                  <ContactItem>
                    <IconWrapper $color="#00C851" $bg="rgba(0,200,81,0.1)">
                      <Phone size={18} />
                    </IconWrapper>
                    <ContactText>
                      <ContactLabel>Call Us</ContactLabel>
                      <ContactValue>+91 98765 43210</ContactValue>
                    </ContactText>
                  </ContactItem>

                  <ContactItem>
                    <IconWrapper $color="#2196F3" $bg="rgba(33,150,243,0.1)">
                      <Mail size={18} />
                    </IconWrapper>
                    <ContactText>
                      <ContactLabel>Email Us</ContactLabel>
                      <ContactValue>info@b4battery.com</ContactValue>
                    </ContactText>
                  </ContactItem>

                  <ContactItem>
                    <IconWrapper $color="#FF9800" $bg="rgba(255,152,0,0.1)">
                      <MapPin size={18} />
                    </IconWrapper>
                    <ContactText>
                      <ContactLabel>Visit Us</ContactLabel>
                      <ContactValue>Electronic City, Bangalore</ContactValue>
                    </ContactText>
                  </ContactItem>

                  <ContactItem>
                    <IconWrapper $color="#9C27B0" $bg="rgba(156,39,176,0.1)">
                      <Clock size={18} />
                    </IconWrapper>
                    <ContactText>
                      <ContactLabel>Business Hours</ContactLabel>
                      <ContactValue>Mon – Fri: 9 AM – 6 PM</ContactValue>
                    </ContactText>
                  </ContactItem>
                </ContactInfo>

                {/* Map placeholder */}
                <MapCard>
                  <MapPlaceholder>
                    <MapPin size={28} />
                    <span>
                      Electronic City Phase 1,
                      <br />
                      Bangalore – 560100
                    </span>
                  </MapPlaceholder>
                </MapCard>
              </LeftColumn>
            </Animated>

            {/* Right column – form */}
            <Animated animation="slideRight" duration={0.8} delay={0.2}>
              <RightColumn>
                <FormWrapper>
                  <FormHeader>
                    <FormBadge>
                      <Zap size={12} />
                      Quick Response
                    </FormBadge>
                    <FormTitle>Send Us a Message</FormTitle>
                    <FormSub>We'll get back to you within 24 hours.</FormSub>
                  </FormHeader>

                  <Form onSubmit={handleSubmit}>
                    <FullRow>
                      <FloatLabel>
                        <Input
                          type="text"
                          name="fullName"
                          placeholder=" "
                          required
                        />
                        <Label>Full Name</Label>
                      </FloatLabel>
                    </FullRow>

                    <InputRow>
                      <FloatLabel>
                        <Input
                          type="tel"
                          name="phone"
                          placeholder=" "
                          required
                        />
                        <Label>Phone Number</Label>
                      </FloatLabel>
                      <FloatLabel>
                        <Input
                          type="email"
                          name="email"
                          placeholder=" "
                          required
                        />
                        <Label>Email Address</Label>
                      </FloatLabel>
                    </InputRow>

                    <InputRow>
                      <FloatLabel>
                        <Input
                          type="text"
                          name="pincode"
                          placeholder=" "
                          required
                        />
                        <Label>Pin Code</Label>
                      </FloatLabel>
                      <FloatLabel>
                        <Input
                          type="text"
                          name="state"
                          placeholder=" "
                          required
                        />
                        <Label>State</Label>
                      </FloatLabel>
                    </InputRow>

                    <FullRow>
                      <FloatLabel>
                        <Input
                          type="text"
                          name="city"
                          placeholder=" "
                          required
                        />
                        <Label>City</Label>
                      </FloatLabel>
                    </FullRow>

                    <FullRow>
                      <FloatLabel>
                        <TextArea
                          name="address"
                          placeholder=" "
                          rows="3"
                          required
                        />
                        <Label>Full Address</Label>
                      </FloatLabel>
                    </FullRow>

                    <SubmitButton type="submit">
                      Send Message <ArrowRight size={16} />
                    </SubmitButton>
                  </Form>
                </FormWrapper>
              </RightColumn>
            </Animated>
          </ContentWrapper>
        </Container>
      </Section>
    </>
  );
};

export default ContactHero;

/* ─────────────────────────────────────────────
   Keyframes
───────────────────────────────────────────── */
const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.18; }
  50% { transform: scale(1.08); opacity: 0.25; }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;

/* ─────────────────────────────────────────────
   Hero Banner
───────────────────────────────────────────── */
const HeroBanner = styled.section`
  position: relative;
  min-height: 420px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(130deg, #0a1628 0%, #0d2137 40%, #0a2e1a 100%);

  @media (max-width: 768px) {
    min-height: 340px;
  }
`;

const BannerOverlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      ellipse at 20% 50%,
      rgba(0, 200, 81, 0.15) 0%,
      transparent 55%
    ),
    radial-gradient(
      ellipse at 80% 20%,
      rgba(33, 150, 243, 0.1) 0%,
      transparent 45%
    );
`;

const BannerGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
`;

const BannerContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const BannerEyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-primary);
  background: rgba(0, 200, 81, 0.1);
  border: 1px solid rgba(0, 200, 81, 0.25);
  padding: 0.35rem 0.85rem;
  border-radius: var(--radius-full);
  width: fit-content;
`;

const BannerHeading = styled.h1`
  font-size: clamp(2.25rem, 5vw, 3.75rem);
  font-weight: 900;
  color: #ffffff;
  line-height: 1.1;
  margin: 0;
`;

const Highlight = styled.span`
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const BannerSub = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  max-width: 480px;
`;

const BannerCta = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  padding: 0.75rem 1.75rem;
  background: var(--color-primary);
  color: #fff;
  font-weight: 700;
  font-size: 0.95rem;
  border-radius: var(--radius-full);
  text-decoration: none;
  transition: all 0.25s ease;
  box-shadow: 0 4px 20px rgba(0, 200, 81, 0.35);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(0, 200, 81, 0.45);
    background: var(--color-primary-light);
    color: #fff;
  }
`;

const Orb = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(55px);
  animation: ${pulse} 6s ease-in-out infinite;
  pointer-events: none;
`;

/* ─────────────────────────────────────────────
   Main Section
───────────────────────────────────────────── */
const Section = styled.section`
  padding: 5rem 2rem 6rem;
  background: var(--color-bg);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3.5rem 1.25rem 4rem;
  }
`;

const BgAccent = styled.div`
  position: absolute;
  top: -120px;
  right: -120px;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(0, 200, 81, 0.05) 0%,
    transparent 70%
  );
  pointer-events: none;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

/* ─────────────────────────────────────────────
   Stats Strip
───────────────────────────────────────────── */
const StatsStrip = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--color-border-light);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-xl);
  overflow: hidden;
  margin-bottom: 4.5rem;

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatItem = styled.div`
  background: var(--color-surface);
  padding: 1.5rem 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  transition: background 0.2s ease;

  &:hover {
    background: var(--color-surface-secondary);
  }
`;

const StatValue = styled.span`
  font-size: 1.75rem;
  font-weight: 900;
  color: var(--color-primary);
  line-height: 1;
`;

const StatLabel = styled.span`
  font-size: 0.8rem;
  color: var(--color-text-muted);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

/* ─────────────────────────────────────────────
   Content Layout
───────────────────────────────────────────── */
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
`;

const RightColumn = styled.div`
  display: flex;
  justify-content: center;
`;

/* ─────────────────────────────────────────────
   Left Side – Info
───────────────────────────────────────────── */
const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 900;
  color: var(--color-text);
  line-height: 1.15;
  margin: 0;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Description = styled.p`
  font-size: 1.05rem;
  color: var(--color-text-muted);
  line-height: 1.7;
  margin: 0;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: var(--color-surface);
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border-light);
  transition: all 0.25s ease;

  &:hover {
    transform: translateX(4px);
    box-shadow: var(--shadow-md);
    border-color: var(--color-border);
  }
`;

const IconWrapper = styled.div`
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
`;

const ContactText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
`;

const ContactLabel = styled.span`
  font-size: 0.75rem;
  color: var(--color-text-muted);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

const ContactValue = styled.span`
  font-size: 0.95rem;
  color: var(--color-text);
  font-weight: 600;
`;

const MapCard = styled.div`
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 1px solid var(--color-border-light);
`;

const MapPlaceholder = styled.div`
  height: 160px;
  background: linear-gradient(
    135deg,
    var(--color-surface-secondary),
    var(--color-surface)
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: var(--color-text-muted);
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  line-height: 1.5;

  svg {
    color: var(--color-primary);
    animation: ${float} 3s ease-in-out infinite;
  }
`;

/* ─────────────────────────────────────────────
   Right Side – Form
───────────────────────────────────────────── */
const FormWrapper = styled.div`
  background: var(--color-surface);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--color-border-light);
  width: 100%;
  max-width: 520px;
`;

const FormHeader = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-primary);
  background: rgba(0, 200, 81, 0.08);
  border: 1px solid rgba(0, 200, 81, 0.2);
  padding: 0.3rem 0.7rem;
  border-radius: var(--radius-full);
  width: fit-content;
`;

const FormTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--color-text);
  margin: 0;
`;

const FormSub = styled.p`
  font-size: 0.875rem;
  color: var(--color-text-muted);
  margin: 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.125rem;
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

/* Floating label wrapper */
const FloatLabel = styled.div`
  position: relative;
  width: 100%;
`;

const Label = styled.label`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.9rem;
  color: var(--color-text-muted);
  pointer-events: none;
  transition: all 0.2s ease;
  background: transparent;
  padding: 0 0.25rem;

  /* For textarea, align to top */
  textarea ~ & {
    top: 1rem;
    transform: none;
  }
`;

const sharedInputStyles = `
  padding: 0.9rem 1rem;
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius-lg);
  font-size: 0.95rem;
  color: var(--color-text);
  background: var(--color-bg);
  transition: all 0.25s ease;
  width: 100%;
  font-family: var(--font-family-primary);

  &:focus,
  &:not(:placeholder-shown) {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(0, 200, 81, 0.08);

    ~ label {
      top: 0;
      transform: translateY(-50%);
      font-size: 0.72rem;
      font-weight: 600;
      color: var(--color-primary);
      background: var(--color-bg);
    }
  }

  &::placeholder {
    color: transparent;
  }
`;

const Input = styled.input`
  ${sharedInputStyles}
`;

const TextArea = styled.textarea`
  ${sharedInputStyles}
  resize: vertical;
  min-height: 90px;

  &:focus,
  &:not(:placeholder-shown) {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(0, 200, 81, 0.08);

    ~ label {
      top: 0;
      transform: translateY(-50%);
      font-size: 0.72rem;
      font-weight: 600;
      color: var(--color-primary);
      background: var(--color-bg);
    }
  }
`;

const SubmitButton = styled.button`
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
  border: none;
  padding: 1rem 2rem;
  border-radius: var(--radius-full);
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.5rem;
  box-shadow: 0 4px 18px rgba(0, 200, 81, 0.3);
  letter-spacing: 0.02em;

  /* Shimmer effect on hover */
  background-size: 200% auto;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 200, 81, 0.4);
    background-image: linear-gradient(
      135deg,
      var(--color-primary-light) 0%,
      var(--color-primary) 50%,
      var(--color-primary-dark) 100%
    );
  }

  &:active {
    transform: translateY(0);
  }
`;
