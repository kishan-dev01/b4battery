import styled from "styled-components";
import Animated from "../common/Animated";

const EmiPaymentSection = () => {
  const emiPlans = [
    { amount: "₹2,500", image: "/images/payment.png" },
    { amount: "₹3,500", image: "/images/payment.png" },
    { amount: "₹5,000", image: "/images/payment.png" },
    { amount: "₹7,500", image: "/images/payment.png" },
  ];

  return (
    <Section>
      <Container>
        <Animated animation="fadeIn" duration={0.8}>
          <SectionTitle>EMI PAYMENT</SectionTitle>
          <SectionDescription>
            Simply select the EMI option, choose your preferred payment plan
            corresponding to your subscription, and proceed with your purchase
            hassle-free.
          </SectionDescription>
        </Animated>

        <PlansGrid>
          {emiPlans.map((plan, index) => (
            <Animated key={index} animation="fadeInScale" delay={index * 0.1}>
              <PlanCard>
                <ImageContainer>
                  <PlanImage src={plan.image} alt={`EMI Plan ${plan.amount}`} />
                </ImageContainer>

                <PlanContent>
                  <Amount>{plan.amount}</Amount>
                  <PayButton>Pay Now</PayButton>
                </PlanContent>
              </PlanCard>
            </Animated>
          ))}
        </PlansGrid>
      </Container>
    </Section>
  );
};

export default EmiPaymentSection;

// Styled Components
const Section = styled.section`
  padding: 5rem 2rem;
  background: var(--color-bg-secondary);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 20% 80%,
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
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  font-size: 2.75rem;
  font-weight: 800;
  text-align: center;
  color: var(--color-primary);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const SectionDescription = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: var(--color-text-secondary);
  margin-bottom: 3.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }
`;

const PlansGrid = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); */
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PlanCard = styled.div`
  display: flex;
  background: var(--color-surface);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--color-border-light);
  transition: all 0.3s ease;
  height: 120px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 200, 81, 0.15);
    border-color: var(--color-primary);
  }

  @media (max-width: 480px) {
    flex-direction: column;
    height: auto;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 120px;
  overflow: hidden;

  @media (max-width: 480px) {
    max-width: 100%;
    height: 150px;
  }
`;

const PlanImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${PlanCard}:hover & {
    transform: scale(1.05);
  }
`;

const PlanContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.5rem;
  text-align: center;

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const Amount = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 0.75rem;
  margin: 0 0 0.75rem 0;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const PayButton = styled.button`
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-primary-dark) 100%
  );
  color: white;
  border: none;
  padding: 0.6rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 200, 81, 0.2);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 200, 81, 0.3);
  }

  @media (max-width: 480px) {
    padding: 0.75rem 2rem;
    font-size: 1rem;
  }
`;
