import React, { useState } from "react";
import styled from "styled-components";
import { ChevronDown } from "lucide-react";
import Animated from "../common/Animated";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What makes B4Battery refurbished batteries different?",
      answer:
        "We utilize an industry-leading, proprietary 4-step process—Evaluate, Underwrite, Refurbish, and Re-deploy. This ensures every single battery meets strict OEM standards for capacity, performance, and thermal safety before it ever reaches you.",
    },
    {
      question: "Do you offer a warranty on your energy solutions?",
      answer:
        "Absolutely. All our re-deployed battery systems come with a comprehensive 12-month performance warranty. We stand by the quality of our ground ops and our extensive lifecycle underwriting process.",
    },
    {
      question: "How do I know which battery is right for my vehicle?",
      answer:
        "Our energy specialists are here to help. You can reach out to our team with your vehicle's make and model, and we will match you with a high-performance, eco-friendly battery perfectly calibrated for your specific power requirements.",
    },
    {
      question: "Is your refurbishing process environmentally friendly?",
      answer:
        "Sustainability is at the core of B4Battery. By extending the lifecycle of existing energy cells, we actively reduce e-waste and the need for new raw material mining, significantly lowering the overall carbon footprint of your energy consumption.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Section>
      <Container>
        <Animated animation="fadeInUp" duration={0.8}>
          <HeaderWrapper>
            <SectionTitle>Frequently Asked Questions</SectionTitle>
            <Subtitle>
              Everything you need to know about our products, processes, and
              commitment to sustainable energy.
            </Subtitle>
          </HeaderWrapper>
        </Animated>

        <FAQContainer>
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <Animated
                key={index}
                animation="fadeIn"
                delay={index * 0.15}
                duration={0.6}
              >
                <AccordionItem $isOpen={isOpen}>
                  <AccordionHeader
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                  >
                    <Question $isOpen={isOpen}>{faq.question}</Question>
                    <IconWrapper $isOpen={isOpen}>
                      <ChevronDown size={24} />
                    </IconWrapper>
                  </AccordionHeader>

                  <AccordionContent $isOpen={isOpen}>
                    <AccordionInner>
                      <Answer>{faq.answer}</Answer>
                    </AccordionInner>
                  </AccordionContent>
                </AccordionItem>
              </Animated>
            );
          })}
        </FAQContainer>
      </Container>
    </Section>
  );
};

export default FAQSection;

// Styled Components

const Section = styled.section`
  padding: 6rem 2rem;
  background: var(--color-bg);
  position: relative;

  /* Subtle background accent matching the ecosystem */
  &::before {
    content: "";
    position: absolute;
    top: -10%;
    left: -10%;
    width: 40%;
    height: 60%;
    background: radial-gradient(
      circle,
      var(--color-primary-light) 0%,
      transparent 70%
    );
    opacity: 0.04;
    z-index: 0;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 800px; /* Kept narrower for optimal reading length */
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const HeaderWrapper = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.75rem;
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.15rem;
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const AccordionItem = styled.div`
  background: var(--color-surface);
  border: 1px solid
    ${(props) =>
      props.$isOpen ? "var(--color-primary)" : "var(--color-border-light)"};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: ${(props) =>
    props.$isOpen ? "0 8px 30px rgba(0, 200, 81, 0.12)" : "var(--shadow-sm)"};
  transition: all var(--transition-medium);

  &:hover {
    border-color: ${(props) =>
      props.$isOpen ? "var(--color-primary)" : "var(--color-primary-light)"};
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  }
`;

const AccordionHeader = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;

  /* Disable default button tap highlights on mobile */
  -webkit-tap-highlight-color: transparent;

  @media (max-width: 768px) {
    padding: 1.25rem 1.5rem;
  }
`;

const Question = styled.h3`
  font-size: 1.125rem;
  font-weight: ${(props) => (props.$isOpen ? "700" : "600")};
  color: ${(props) =>
    props.$isOpen ? "var(--color-primary)" : "var(--color-text)"};
  margin: 0;
  padding-right: 1.5rem;
  transition: color var(--transition-fast);
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
    props.$isOpen ? "var(--color-primary)" : "var(--color-text-muted)"};
  transform: ${(props) => (props.$isOpen ? "rotate(-180deg)" : "rotate(0)")};
  transition:
    transform var(--transition-medium),
    color var(--transition-fast);
  flex-shrink: 0;
`;

/* The CSS Grid trick for smooth height animation without JS measurement */
const AccordionContent = styled.div`
  display: grid;
  grid-template-rows: ${(props) => (props.$isOpen ? "1fr" : "0fr")};
  transition: grid-template-rows var(--transition-medium);
  background: var(--color-surface-secondary);
`;

const AccordionInner = styled.div`
  overflow: hidden;
`;

const Answer = styled.p`
  padding: 0 2rem 1.5rem 2rem;
  margin: 0;
  color: var(--color-text-secondary);
  font-size: 1rem;
  line-height: 1.7;

  @media (max-width: 768px) {
    padding: 0 1.5rem 1.25rem 1.5rem;
    font-size: 0.95rem;
  }
`;
