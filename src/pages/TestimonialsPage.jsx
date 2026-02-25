import styled from "styled-components";
import { Quote, Star } from "lucide-react";
import Animated from "../components/common/Animated";

const TestimonialsPage = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      designation: "Fleet Manager",
      company: "LogiTech Solutions",
      image: "/images/founder1.jpg",
      feedback:
        "B4 Big Battery has revolutionized our fleet operations. Their reliable battery solutions have reduced our downtime by 40% and significantly improved our operational efficiency.",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Sharma",
      designation: "Sustainability Director",
      company: "GreenTech Industries",
      image: "/images/founder2.jpg",
      feedback:
        "The quality and performance of B4 Big Battery products are exceptional. Their commitment to sustainable energy solutions aligns perfectly with our environmental goals.",
      rating: 5,
    },
    {
      id: 3,
      name: "Arjun Patel",
      designation: "Operations Head",
      company: "PowerMax Energy",
      image: "/images/founder3.jpg",
      feedback:
        "Outstanding customer service and technical support. B4 Big Battery not only provides excellent products but also ensures seamless integration and ongoing maintenance.",
      rating: 5,
    },
  ];

  return (
    <Section>
      <Container>
        <Animated animation="fadeIn" duration={0.8}>
          <Header>
            <SectionTitle>What Our Clients Say</SectionTitle>
            <SectionSubtitle>
              Discover how B4 Big Battery has transformed businesses across
              India with reliable, sustainable energy solutions
            </SectionSubtitle>
          </Header>
        </Animated>

        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <Animated
              key={testimonial.id}
              animation="fadeInScale"
              delay={index * 0.2}
            >
              <TestimonialCard>
                <QuoteIcon>
                  <Quote size={24} />
                </QuoteIcon>

                <CardContent>
                  <UserInfo>
                    <UserImage src={testimonial.image} alt={testimonial.name} />
                    <UserDetails>
                      <UserName>{testimonial.name}</UserName>
                      <UserDesignation>
                        {testimonial.designation}
                      </UserDesignation>
                      <CompanyName>{testimonial.company}</CompanyName>
                    </UserDetails>
                  </UserInfo>

                  <Rating>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </Rating>

                  <Feedback>"{testimonial.feedback}"</Feedback>
                </CardContent>
              </TestimonialCard>
            </Animated>
          ))}
        </TestimonialsGrid>

        <Animated animation="slideUp" delay={0.8}>
          <BottomCTA>
            <CTATitle>
              Ready to Experience the B4 Big Battery Difference?
            </CTATitle>
            <CTAButton>Get Started Today</CTAButton>
          </BottomCTA>
        </Animated>
      </Container>
    </Section>
  );
};

export default TestimonialsPage;

// Styled Components
const Section = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  background: linear-gradient(
    135deg,
    var(--color-bg) 0%,
    var(--color-bg-secondary) 100%
  );
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 50% 20%,
      var(--color-primary) 0%,
      transparent 60%
    );
    opacity: 0.04;
  }

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
    min-height: auto;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 1;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 900;
  color: var(--color-primary);
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.75rem;
  }

  @media (max-width: 480px) {
    font-size: 2.25rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.25rem;
  color: var(--color-text-secondary);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TestimonialCard = styled.div`
  background: var(--color-surface);
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--color-border-light);
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 35px rgba(0, 200, 81, 0.15);
    border-color: var(--color-primary);
  }
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: -12px;
  left: 2rem;
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-primary-dark) 100%
  );
  color: white;
  padding: 0.75rem;
  border-radius: 50%;
  box-shadow: 0 4px 15px rgba(0, 200, 81, 0.3);
`;

const CardContent = styled.div`
  margin-top: 1rem;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const UserImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--color-border-light);
`;

const UserDetails = styled.div`
  flex: 1;
`;

const UserName = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.25rem;
`;

const UserDesignation = styled.p`
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  margin-bottom: 0.25rem;
`;

const CompanyName = styled.p`
  font-size: 0.875rem;
  color: var(--color-primary);
  font-weight: 600;
`;

const Rating = styled.div`
  display: flex;
  gap: 0.25rem;
  color: var(--color-accent);
  margin-bottom: 1.5rem;
`;

const Feedback = styled.p`
  font-size: 1.05rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
  font-style: italic;
  position: relative;
`;

const BottomCTA = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  background: var(--color-surface);
  border-radius: 20px;
  border: 1px solid var(--color-border-light);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

const CTATitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const CTAButton = styled.button`
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-primary-dark) 100%
  );
  color: white;
  border: none;
  padding: 1rem 3rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.125rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 200, 81, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 200, 81, 0.4);
  }
`;
