// src/components/modals/RequestModal.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "lucide-react";

const RequestModal = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate an API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Reset form after a few seconds and close
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          product: "",
          message: "",
        });
        onClose();
      }, 3000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <ModalContent
            initial={{ y: 30, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={onClose} aria-label="Close modal">
              <X size={22} />
            </CloseButton>

            {isSuccess ? (
              <SuccessState
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle size={56} color="var(--color-primary)" />
                <SuccessTitle>Request Received!</SuccessTitle>
                <SuccessMessage>
                  Thank you, {formData.name}. Our team will be in touch shortly.
                </SuccessMessage>
              </SuccessState>
            ) : (
              <>
                <ModalHeader>
                  <ModalTitle>Request Details</ModalTitle>
                  <ModalSubtitle>
                    Fill out the form below and an energy specialist will reach
                    out.
                  </ModalSubtitle>
                </ModalHeader>

                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="product">Product of Interest *</Label>
                    <Select
                      id="product"
                      name="product"
                      required
                      value={formData.product}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Select a product...
                      </option>
                      <option value="Neuron Core EV-X">Neuron Core EV-X</option>
                      <option value="EcoStore Home Max">
                        EcoStore Home Max
                      </option>
                      <option value="FleetPro Commercial">
                        FleetPro Commercial
                      </option>
                      <option value="SolarGrid Base">SolarGrid Base</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </Select>
                  </FormGroup>

                  <FormGroup className="full-width">
                    <Label htmlFor="message">Your Query / Requirements</Label>
                    <TextArea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share any specific requirements..."
                    ></TextArea>
                  </FormGroup>

                  <SubmitButton
                    type="submit"
                    disabled={isSubmitting}
                    className="full-width"
                  >
                    {isSubmitting ? "Submitting..." : "Send Request"}
                  </SubmitButton>
                </Form>
              </>
            )}
          </ModalContent>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default RequestModal;

// Styled Components
const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  z-index: var(--z-modal, 1000);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const ModalContent = styled(motion.div)`
  background: var(--color-surface);
  width: 100%;
  max-width: 800px; /* Increased width to make it rectangular */
  border-radius: 20px;
  padding: 2rem; /* Reduced padding */
  position: relative;
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.2);
  border: 1px solid var(--color-border-light);
  max-height: 95vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--color-border);
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    max-width: 500px;
    padding: 1.5rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  background: transparent;
  border: none;
  color: var(--color-text-muted);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  border-radius: 50%;
  transition: all var(--transition-fast);

  &:hover {
    background: var(--color-bg-secondary);
    color: var(--color-text);
  }
`;

const ModalHeader = styled.div`
  margin-bottom: 1.5rem; /* Reduced margin */
  padding-right: 2rem;
`;

const ModalTitle = styled.h2`
  font-size: 1.75rem; /* Slightly smaller */
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 0.25rem;
`;

const ModalSubtitle = styled.p`
  color: var(--color-text-secondary);
  margin: 0;
  font-size: 0.95rem;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr; /* 2-column horizontal layout */
  gap: 1rem 1.5rem; /* Tighter vertical gap, wider horizontal gap */
  align-items: start;

  /* On mobile, stack everything into 1 column */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem; /* Tighter spacing between label and input */

  /* Utility class to make elements span both columns */
  &.full-width {
    grid-column: 1 / -1;
  }
`;

const Label = styled.label`
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-text-secondary);
`;

/* Shared compact styles for inputs to keep things tight */
const inputStyles = `
  width: 100%;
  padding: 0.65rem 1rem; /* Tighter vertical padding */
  border: 1px solid var(--color-border);
  border-radius: 10px;
  background: var(--color-bg);
  color: var(--color-text);
  font-family: inherit;
  font-size: 0.95rem;
  transition: all var(--transition-fast);

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(0, 200, 81, 0.1);
  }
`;

const Input = styled.input`
  ${inputStyles}
`;

const Select = styled.select`
  ${inputStyles}
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem top 50%;
  background-size: 0.65rem auto;
`;

const TextArea = styled.textarea`
  ${inputStyles}
  resize: vertical;
  min-height: 80px; /* Reduced minimum height */
`;

const SubmitButton = styled.button`
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-primary-dark) 100%
  );
  color: white;
  padding: 0.85rem; /* Tighter button padding */
  border-radius: 10px;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all var(--transition-medium);
  box-shadow: 0 4px 15px rgba(0, 200, 81, 0.2);

  &.full-width {
    grid-column: 1 / -1;
    margin-top: 0.5rem;
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 200, 81, 0.3);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const SuccessState = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem 0;
  min-height: 250px; /* Compact success state */
`;

const SuccessTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-text);
  margin: 1rem 0 0.5rem;
`;

const SuccessMessage = styled.p`
  color: var(--color-text-secondary);
  line-height: 1.5;
  max-width: 400px;
  margin: 0;
  font-size: 0.95rem;
`;
