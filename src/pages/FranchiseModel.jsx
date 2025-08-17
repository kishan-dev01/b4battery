import styled from "styled-components";
import { Star, Award, Crown, ArrowRight } from "lucide-react";
import Animated from "../components/common/Animated";

const FranchiseModel = () => {
  const partners = [
    {
      tier: "Silver",
      icon: <Star size={24} />,
      color: "#9CA3AF",
      investmentLevel:
        "Entry-level investment for those looking to start small.",
      franchiseFee: "Contact Us",
      support: [
        "Basic training program",
        "Limited marketing assistance",
        "Standard operational support",
      ],
      additionalBenefits: [],
      popular: false,
    },
    {
      tier: "Gold",
      icon: <Award size={24} />,
      color: "#F59E0B",
      investmentLevel:
        "Moderate investment for a more comprehensive franchise experience.",
      franchiseFee: "Contact Us",
      support: [
        "Comprehensive training program",
        "Enhanced marketing assistance",
        "Ongoing operational support",
      ],
      additionalBenefits: [
        "Regional exclusivity",
        "Access to advanced marketing materials",
      ],
      popular: true,
    },
    {
      tier: "Platinum",
      icon: <Crown size={24} />,
      color: "#6B7280",
      investmentLevel:
        "High-level investment for maximum benefits and exclusivity.",
      franchiseFee: "Contact Us",
      support: [
        "Intensive training program",
        "Customized marketing strategies",
        "Priority operational support",
      ],
      additionalBenefits: [
        "Exclusive territory rights",
        "Premium marketing materials",
        "Priority access to new products/services",
        "Quarterly strategy sessions with leadership",
      ],
      popular: false,
    },
  ];

  return (
    <Section>
      <Container>
        <Animated animation="fadeIn" duration={0.8}>
          <SectionTitle>Become Our Partner</SectionTitle>
          <SectionSubtitle>
            Unlock the potential for a remarkable investment within a 3-year
            timeframe
          </SectionSubtitle>
        </Animated>

        <CardsGrid>
          {partners.map((partner, index) => (
            <Animated
              key={partner.tier}
              animation="fadeInScale"
              delay={index * 0.15}
            >
              <PartnerCard>
                {partner.popular && <PopularBadge>Most Popular</PopularBadge>}

                <CardHeader>
                  <IconWrapper color={partner.color}>
                    {partner.icon}
                  </IconWrapper>
                  <TierTitle>{partner.tier}</TierTitle>
                </CardHeader>

                <CardContent>
                  <InvestmentText>{partner.investmentLevel}</InvestmentText>

                  <FranchiseSection>
                    <FranchiseLabel>Franchise Fee:</FranchiseLabel>
                    <FranchiseFee>[{partner.franchiseFee}]</FranchiseFee>
                  </FranchiseSection>

                  <BenefitsSection>
                    <BenefitsTitle>Support Included:</BenefitsTitle>
                    <BenefitsList>
                      {partner.support.map((item, idx) => (
                        <BenefitItem key={idx}>• {item}</BenefitItem>
                      ))}
                    </BenefitsList>
                  </BenefitsSection>

                  {partner.additionalBenefits.length > 0 && (
                    <BenefitsSection>
                      <BenefitsTitle>Additional Benefits:</BenefitsTitle>
                      <BenefitsList>
                        {partner.additionalBenefits.map((benefit, idx) => (
                          <BenefitItem key={idx}>• {benefit}</BenefitItem>
                        ))}
                      </BenefitsList>
                    </BenefitsSection>
                  )}

                  <ActionButton>
                    Know More
                    <ArrowRight size={16} />
                  </ActionButton>
                </CardContent>
              </PartnerCard>
            </Animated>
          ))}
        </CardsGrid>
      </Container>
    </Section>
  );
};

export default FranchiseModel;

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
      circle at 70% 30%,
      var(--color-primary) 0%,
      transparent 50%
    );
    opacity: 0.03;
  }
`;

const Container = styled.div`
  max-width: 1100px;
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

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: var(--color-text-secondary);
  margin-bottom: 3.5rem;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PartnerCard = styled.div`
  background: var(--color-surface);
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--color-border-light);
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 200, 81, 0.15);
    border-color: var(--color-primary);
  }
`;

const PopularBadge = styled.div`
  position: absolute;
  top: -8px;
  right: 16px;
  background: linear-gradient(
    135deg,
    var(--color-accent) 0%,
    var(--color-accent-dark) 100%
  );
  color: var(--color-text);
  padding: 0.4rem 1rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 2;
  box-shadow: 0 2px 8px rgba(255, 214, 0, 0.3);
`;

const CardHeader = styled.div`
  padding: 1.5rem 1.5rem 1rem;
  text-align: center;
  border-bottom: 1px solid var(--color-border-light);
`;

const IconWrapper = styled.div`
  color: ${(props) => props.color};
  margin-bottom: 0.75rem;
  display: flex;
  justify-content: center;
`;

const TierTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0;
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const InvestmentText = styled.p`
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
`;

const FranchiseSection = styled.div`
  margin-bottom: 1.25rem;
`;

const FranchiseLabel = styled.span`
  font-weight: 600;
  color: var(--color-text);
  font-size: 0.9rem;
`;

const FranchiseFee = styled.span`
  color: var(--color-primary);
  font-weight: 600;
  cursor: pointer;
  margin-left: 0.5rem;

  &:hover {
    color: var(--color-primary-dark);
  }
`;

const BenefitsSection = styled.div`
  margin-bottom: 1.25rem;
`;

const BenefitsTitle = styled.h4`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.5rem;
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const BenefitItem = styled.li`
  color: var(--color-text-secondary);
  font-size: 0.85rem;
  padding: 0.25rem 0;
  line-height: 1.4;
`;

const ActionButton = styled.button`
  width: 100%;
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-primary-dark) 100%
  );
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  margin-top: 0.5rem;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 200, 81, 0.3);
  }

  &:hover svg {
    transform: translateX(2px);
  }
`;
