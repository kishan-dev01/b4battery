import styled from "styled-components";
import { Send } from "lucide-react";
import Animated from "../common/Animated";

const JobApplication = () => {
  const positions = [
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
              <SectionTitle>Apply for Your Dream Job</SectionTitle>
              <Description>
                Ready to embark on an exciting career journey with B4Battery?
                We're looking for passionate individuals who want to make a
                difference in the clean energy sector. Fill out the application
                form and take the first step toward joining our innovative team.
              </Description>

              <HighlightBox>
                <HighlightTitle>Why Apply with Us?</HighlightTitle>
                <HighlightList>
                  <li>Competitive compensation packages</li>
                  <li>Professional growth opportunities</li>
                  <li>Collaborative work environment</li>
                  <li>Make an impact in clean energy</li>
                </HighlightList>
              </HighlightBox>
            </LeftColumn>
          </Animated>

          <Animated animation="slideRight" duration={0.8} delay={0.2}>
            <RightColumn>
              <FormWrapper>
                <FormTitle>Job Application Form</FormTitle>

                <Form onSubmit={handleSubmit}>
                  <InputRow>
                    <Input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      required
                    />
                    <Input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      required
                    />
                  </InputRow>

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
                    <Select name="position" required defaultValue="">
                      <option value="" disabled>
                        Position Applying For
                      </option>
                      {positions.map((position) => (
                        <option key={position} value={position}>
                          {position}
                        </option>
                      ))}
                    </Select>

                    <DateWrapper>
                      <DateLabel>Available Start Date</DateLabel>
                      <Input type="date" name="startDate" required />
                    </DateWrapper>
                  </InputRow>

                  <FullRow>
                    <Input
                      type="url"
                      name="resume"
                      placeholder="Link to Resume (Google Drive, Dropbox, etc.)"
                      required
                    />
                  </FullRow>

                  <SubmitButton type="submit">
                    Submit Application
                    <Send size={18} />
                  </SubmitButton>
                </Form>
              </FormWrapper>
            </RightColumn>
          </Animated>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default JobApplication;

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
      circle at 80% 20%,
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

const SectionTitle = styled.h2`
  font-size: 2.75rem;
  font-weight: 800;
  color: var(--color-primary);
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.25rem;
    text-align: center;
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const HighlightBox = styled.div`
  background: var(--color-surface);
  padding: 2rem;
  border-radius: 16px;
  border-left: 4px solid var(--color-primary);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

const HighlightTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 1rem;
`;

const HighlightList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    color: var(--color-text-secondary);
    padding: 0.5rem 0;
    position: relative;
    padding-left: 1.5rem;

    &::before {
      content: "✓";
      color: var(--color-primary);
      font-weight: bold;
      position: absolute;
      left: 0;
    }
  }
`;

const FormWrapper = styled.div`
  background: var(--color-surface);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--color-border-light);
  width: 100%;
  max-width: 500px;
`;

const FormTitle = styled.h3`
  font-size: 1.5rem;
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
  font-size: 0.9rem;
  color: var(--color-text);
  background: var(--color-bg);
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(0, 200, 81, 0.1);
  }

  &::placeholder {
    color: var(--color-text-muted);
  }
`;

const Select = styled.select`
  padding: 0.8rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  font-size: 0.9rem;
  color: var(--color-text);
  background: var(--color-bg);
  transition: all 0.3s ease;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(0, 200, 81, 0.1);
  }

  option[disabled] {
    color: var(--color-text-muted);
  }
`;

const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const DateLabel = styled.label`
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  font-weight: 500;
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  box-shadow: 0 4px 15px rgba(0, 200, 81, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 200, 81, 0.4);
  }

  &:active {
    transform: translateY(-1px);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(2px);
  }
`;
