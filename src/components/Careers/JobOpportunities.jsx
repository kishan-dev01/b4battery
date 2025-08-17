import styled from "styled-components";
import Animated from "../common/Animated";

const JobOpportunities = () => {
  const jobs = [
    "HR",
    "Business Development",
    "Marketing and Communication",
    "Management",
    "Tech",
    "Design",
    "Finance",
    "Supply Chain",
    "Business Analyst",
  ];

  return (
    <Section>
      <Container>
        <Animated animation="fadeIn" duration={0.8}>
          <SectionTitle>Find Your Next Job</SectionTitle>
          <SectionSubtitle>
            Explore exciting opportunities and join our growing team
          </SectionSubtitle>
        </Animated>

        <JobsGrid>
          {jobs.map((job, index) => (
            <Animated key={job} animation="fadeInScale" delay={index * 0.08}>
              <JobCard>
                <JobTitle>{job}</JobTitle>
              </JobCard>
            </Animated>
          ))}
        </JobsGrid>
      </Container>
    </Section>
  );
};

export default JobOpportunities;

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
      circle at 50% 50%,
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

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: var(--color-text-secondary);
  margin-bottom: 3.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }
`;

const JobsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const JobCard = styled.div`
  background: var(--color-surface);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--color-border-light);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 200, 81, 0.15);
    border-color: var(--color-primary);
  }
`;

const JobTitle = styled.div`
  padding: 2rem 1.5rem;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text);
  line-height: 1.3;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
    font-size: 1rem;
  }
`;
