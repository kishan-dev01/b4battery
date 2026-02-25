import { useState, useEffect, useCallback } from "react";
import styled, { keyframes, css } from "styled-components";
import { X, ChevronDown, CheckCircle, Send, Loader } from "lucide-react";
import { createPortal } from "react-dom";

const PRODUCTS = [
  "EV Lithium Battery Pack",
  "Solar Storage Battery",
  "Industrial UPS Battery",
  "Two-Wheeler Battery",
  "Three-Wheeler Battery",
  "Commercial Vehicle Battery",
  "Other / General Inquiry",
];

const INITIAL_FORM = {
  fullName: "",
  phone: "",
  email: "",
  company: "",
  product: "",
  quantity: "",
  message: "",
};

const RequestModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success"
  const [selectOpen, setSelectOpen] = useState(false);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      // Reset after close animation
      setTimeout(() => {
        setForm(INITIAL_FORM);
        setErrors({});
        setStatus("idle");
        setSelectOpen(false);
      }, 350);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Name is required";
    if (
      !form.phone.trim() ||
      !/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ""))
    )
      e.phone = "Enter a valid 10-digit mobile number";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = "Enter a valid email address";
    if (!form.product) e.product = "Please select a product";
    if (!form.message.trim()) e.message = "Please add a brief message";
    return e;
  };

  const handleChange = (field, value) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field])
      setErrors((e) => {
        const n = { ...e };
        delete n[field];
        return n;
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setStatus("loading");
    // Simulate API call
    await new Promise((r) => setTimeout(r, 2000));
    setStatus("success");
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (typeof document === "undefined") return null;

  return createPortal(
    <Backdrop $open={isOpen} onClick={handleBackdropClick}>
      <Modal
        $open={isOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Request Details"
      >
        {/* Close button */}
        <CloseBtn onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </CloseBtn>

        {/* ── Success State ── */}
        {status === "success" ? (
          <SuccessPane>
            <SuccessRing>
              <CheckCircle size={38} />
            </SuccessRing>
            <SuccessTitle>Request Sent!</SuccessTitle>
            <SuccessText>
              Thank you, <strong>{form.fullName.split(" ")[0]}</strong>. We've
              received your inquiry about <strong>{form.product}</strong> and
              will get back to you within 24 hours.
            </SuccessText>
            <SuccessEmail>{form.email}</SuccessEmail>
            <DoneBtn onClick={onClose}>Done</DoneBtn>
          </SuccessPane>
        ) : (
          <>
            {/* ── Header ── */}
            <ModalHeader>
              <HeaderAccent />
              <HeaderLabel>Product Inquiry</HeaderLabel>
              <ModalTitle>Request More Details</ModalTitle>
              <ModalSub>
                Fill in the form below and our team will reach out within 24
                hours.
              </ModalSub>
            </ModalHeader>

            {/* ── Form ── */}
            <ModalBody>
              <Form onSubmit={handleSubmit} noValidate>
                <Row>
                  <Field>
                    <Label>
                      Full Name <Req>*</Req>
                    </Label>
                    <Input
                      type="text"
                      placeholder="Rahul Sharma"
                      value={form.fullName}
                      onChange={(e) => handleChange("fullName", e.target.value)}
                      $error={!!errors.fullName}
                    />
                    {errors.fullName && <ErrorMsg>{errors.fullName}</ErrorMsg>}
                  </Field>
                  <Field>
                    <Label>
                      Phone <Req>*</Req>
                    </Label>
                    <Input
                      type="tel"
                      placeholder="98765 43210"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      $error={!!errors.phone}
                    />
                    {errors.phone && <ErrorMsg>{errors.phone}</ErrorMsg>}
                  </Field>
                </Row>

                <Row>
                  <Field>
                    <Label>
                      Email Address <Req>*</Req>
                    </Label>
                    <Input
                      type="email"
                      placeholder="rahul@company.com"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      $error={!!errors.email}
                    />
                    {errors.email && <ErrorMsg>{errors.email}</ErrorMsg>}
                  </Field>
                  <Field>
                    <Label>Company / Organisation</Label>
                    <Input
                      type="text"
                      placeholder="Optional"
                      value={form.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                    />
                  </Field>
                </Row>

                <Row>
                  <Field>
                    <Label>
                      Product of Interest <Req>*</Req>
                    </Label>
                    <SelectWrapper $error={!!errors.product}>
                      <SelectTrigger
                        type="button"
                        onClick={() => setSelectOpen((o) => !o)}
                        $hasValue={!!form.product}
                        $error={!!errors.product}
                      >
                        <span>{form.product || "Select a product"}</span>
                        <SelectIcon $open={selectOpen}>
                          <ChevronDown size={16} />
                        </SelectIcon>
                      </SelectTrigger>
                      {selectOpen && (
                        <SelectDropdown>
                          {PRODUCTS.map((p) => (
                            <SelectOption
                              key={p}
                              type="button"
                              $active={form.product === p}
                              onClick={() => {
                                handleChange("product", p);
                                setSelectOpen(false);
                              }}
                            >
                              {p}
                              {form.product === p && <CheckCircle size={14} />}
                            </SelectOption>
                          ))}
                        </SelectDropdown>
                      )}
                    </SelectWrapper>
                    {errors.product && <ErrorMsg>{errors.product}</ErrorMsg>}
                  </Field>
                  <Field>
                    <Label>Estimated Quantity</Label>
                    <Input
                      type="text"
                      placeholder="e.g. 50 units"
                      value={form.quantity}
                      onChange={(e) => handleChange("quantity", e.target.value)}
                    />
                  </Field>
                </Row>

                <Field>
                  <Label>
                    Message / Requirements <Req>*</Req>
                  </Label>
                  <Textarea
                    placeholder="Briefly describe your use case, application, or any specific requirements..."
                    rows={4}
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    $error={!!errors.message}
                  />
                  {errors.message && <ErrorMsg>{errors.message}</ErrorMsg>}
                </Field>

                <SubmitBtn type="submit" disabled={status === "loading"}>
                  {status === "loading" ? (
                    <>
                      <SpinIcon>
                        <Loader size={16} />
                      </SpinIcon>
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Request
                    </>
                  )}
                </SubmitBtn>
              </Form>
            </ModalBody>
          </>
        )}
      </Modal>
    </Backdrop>,
    document.body,
  );
};

export default RequestModal;

/* ─── Keyframes ──────────────────────────────── */
const backdropIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;
const backdropOut = keyframes`
  from { opacity: 1; }
  to   { opacity: 0; }
`;
const modalIn = keyframes`
  from { opacity: 0; transform: translateY(24px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0)     scale(1); }
`;
const modalOut = keyframes`
  from { opacity: 1; transform: translateY(0)     scale(1); }
  to   { opacity: 0; transform: translateY(24px) scale(0.97); }
`;
const spin = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;
const successPop = keyframes`
  0%   { transform: scale(0.5); opacity: 0; }
  70%  { transform: scale(1.1); }
  100% { transform: scale(1);   opacity: 1; }
`;

/* ─── Backdrop ───────────────────────────────── */
const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: var(--z-modal);
  background: var(--color-overlay);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  animation: ${({ $open }) => ($open ? backdropIn : backdropOut)} 0.3s ease
    forwards;
`;

/* ─── Modal Shell ────────────────────────────── */
const Modal = styled.div`
  position: relative;
  width: 100%;
  max-width: 680px;
  max-height: 90vh;
  overflow-y: auto;
  background: var(--color-surface);
  border: 1px solid var(--color-border-light);
  border-radius: 24px;
  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.25);
  animation: ${({ $open }) => ($open ? modalIn : modalOut)} 0.35s
    cubic-bezier(0.22, 1, 0.36, 1) forwards;

  /* Custom scrollbar */
  scrollbar-width: thin;
  scrollbar-color: var(--color-border) transparent;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--color-border);
    border-radius: 99px;
  }
`;

/* ─── Close ──────────────────────────────────── */
const CloseBtn = styled.button`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  z-index: 2;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid var(--color-border-light);
  background: var(--color-bg);
  color: var(--color-text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: var(--color-error);
    border-color: var(--color-error);
    color: #fff;
    transform: rotate(90deg);
  }
`;

/* ─── Header ─────────────────────────────────── */
const ModalHeader = styled.div`
  padding: 2rem 2rem 1.25rem;
  position: relative;
`;

const HeaderAccent = styled.div`
  width: 48px;
  height: 4px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  border-radius: 999px;
  margin-bottom: 1rem;
`;

const HeaderLabel = styled.p`
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-primary);
  margin: 0 0 0.35rem;
`;

const ModalTitle = styled.h2`
  font-size: 1.65rem;
  font-weight: 900;
  color: var(--color-text);
  margin: 0 0 0.4rem;
  line-height: 1.2;
`;

const ModalSub = styled.p`
  font-size: 0.875rem;
  color: var(--color-text-muted);
  margin: 0;
`;

/* ─── Form Body ──────────────────────────────── */
const ModalBody = styled.div`
  padding: 0.25rem 2rem 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

const Label = styled.label`
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--color-text-secondary);
  letter-spacing: 0.02em;
`;

const Req = styled.span`
  color: var(--color-error);
  margin-left: 2px;
`;

const inputBase = css`
  padding: 0.75rem 1rem;
  border: 1.5px solid
    ${({ $error }) => ($error ? "var(--color-error)" : "var(--color-border)")};
  border-radius: var(--radius-lg);
  font-size: 0.9rem;
  color: var(--color-text);
  background: var(--color-bg);
  font-family: var(--font-family-primary);
  transition: all 0.2s ease;
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${({ $error }) =>
      $error ? "var(--color-error)" : "var(--color-primary)"};
    box-shadow: 0 0 0 3px
      ${({ $error }) =>
        $error ? "rgba(244,67,54,0.1)" : "rgba(0,200,81,0.08)"};
  }

  &::placeholder {
    color: var(--color-text-muted);
    font-size: 0.875rem;
  }
`;

const Input = styled.input`
  ${inputBase}
`;
const Textarea = styled.textarea`
  ${inputBase}
  resize: vertical;
  min-height: 100px;
  line-height: 1.6;
`;

const ErrorMsg = styled.span`
  font-size: 0.72rem;
  color: var(--color-error);
  font-weight: 500;
`;

/* ─── Custom Select ──────────────────────────── */
const SelectWrapper = styled.div`
  position: relative;
`;

const SelectTrigger = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.5px solid
    ${({ $error }) => ($error ? "var(--color-error)" : "var(--color-border)")};
  border-radius: var(--radius-lg);
  background: var(--color-bg);
  color: ${({ $hasValue }) =>
    $hasValue ? "var(--color-text)" : "var(--color-text-muted)"};
  font-size: ${({ $hasValue }) => ($hasValue ? "0.9rem" : "0.875rem")};
  font-family: var(--font-family-primary);
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(0, 200, 81, 0.08);
  }
`;

const SelectIcon = styled.span`
  color: var(--color-text-muted);
  transition: transform 0.2s ease;
  transform: ${({ $open }) => ($open ? "rotate(180deg)" : "rotate(0)")};
  display: flex;
`;

const SelectDropdown = styled.div`
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  z-index: 10;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  animation: ${modalIn} 0.2s ease forwards;
`;

const SelectOption = styled.button`
  width: 100%;
  padding: 0.65rem 1rem;
  background: ${({ $active }) =>
    $active ? "rgba(0,200,81,0.07)" : "transparent"};
  color: ${({ $active }) =>
    $active ? "var(--color-primary)" : "var(--color-text)"};
  font-size: 0.875rem;
  font-family: var(--font-family-primary);
  font-weight: ${({ $active }) => ($active ? "600" : "400")};
  text-align: left;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background 0.15s ease;

  &:hover {
    background: var(--color-surface-secondary);
  }
`;

/* ─── Submit Button ──────────────────────────── */
const SubmitBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.95rem;
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-primary-dark)
  );
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all 0.25s ease;
  margin-top: 0.25rem;
  box-shadow: 0 4px 16px rgba(0, 200, 81, 0.3);
  letter-spacing: 0.02em;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 200, 81, 0.4);
  }

  &:disabled {
    opacity: 0.75;
    cursor: not-allowed;
  }
`;

const SpinIcon = styled.span`
  display: flex;
  animation: ${spin} 0.8s linear infinite;
`;

/* ─── Success State ──────────────────────────── */
const SuccessPane = styled.div`
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
`;

const SuccessRing = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(0, 200, 81, 0.1);
  border: 2px solid rgba(0, 200, 81, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  animation: ${successPop} 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
`;

const SuccessTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 900;
  color: var(--color-text);
  margin: 0;
`;

const SuccessText = styled.p`
  font-size: 0.975rem;
  color: var(--color-text-muted);
  line-height: 1.65;
  max-width: 400px;
  margin: 0;

  strong {
    color: var(--color-text);
  }
`;

const SuccessEmail = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-primary);
  background: rgba(0, 200, 81, 0.08);
  border: 1px solid rgba(0, 200, 81, 0.2);
  padding: 0.35rem 1rem;
  border-radius: 999px;
`;

const DoneBtn = styled.button`
  margin-top: 0.5rem;
  padding: 0.8rem 2.5rem;
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-primary-dark)
  );
  color: #fff;
  font-weight: 700;
  font-size: 0.95rem;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(0, 200, 81, 0.3);
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 200, 81, 0.4);
  }
`;
