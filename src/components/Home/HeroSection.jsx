import { useState, useEffect, useCallback, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { ChevronLeft, ChevronRight, Zap, ArrowRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";

const SLIDES = [
  {
    id: 1,
    image: "/images/product1.jpeg",
    eyebrow: "New Arrival 2025",
    title: "Power Your Journey",
    titleAccent: "Fearlessly",
    description:
      "Reliable, long-lasting batteries engineered to fuel your devices and vehicles. Unmatched energy efficiency, built for the road ahead.",
    cta: "Shop Now",
    ctaSecondary: "Learn More",
    ctaLink: "/products",
    ctaSecondaryLink: "/about-us",
    accent: "#00C851",
    overlay:
      "linear-gradient(100deg, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.65) 55%, rgba(10,22,40,0.25) 100%)",
  },
  {
    id: 2,
    image: "/images/product1.jpeg",
    eyebrow: "Built For EVs",
    title: "Drive Further,",
    titleAccent: "Charge Smarter",
    description:
      "Purpose-built EV battery packs delivering higher range, faster charge cycles, and longer lifespan for every electric journey.",
    cta: "Explore EV Range",
    ctaSecondary: "View Specs",
    accent: "#2196F3",
    overlay:
      "linear-gradient(100deg, rgba(5,15,35,0.92) 0%, rgba(5,15,35,0.65) 55%, rgba(5,15,35,0.25) 100%)",
  },
  {
    id: 3,
    image: "/images/product1.jpeg",
    eyebrow: "Eco Certified",
    title: "Green Energy,",
    titleAccent: "Zero Compromise",
    description:
      "Sustainable battery solutions that reduce your carbon footprint without sacrificing a single watt of performance.",
    cta: "Go Green Today",
    ctaSecondary: "Our Story",
    ctaSecondaryLink: "/about-us",
    accent: "#FFD600",
    overlay:
      "linear-gradient(100deg, rgba(8,20,12,0.92) 0%, rgba(8,20,12,0.65) 55%, rgba(8,20,12,0.25) 100%)",
  },
];

const FEATURES = [
  { icon: "⚡", text: "High Performance" },
  { icon: "🔋", text: "Long Lasting" },
  { icon: "🌱", text: "Eco Friendly" },
];

const AUTO_INTERVAL = 5500;

const HeroSection = () => {
  const { theme } = useTheme();
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [direction, setDirection] = useState("next"); // "next" | "prev"
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);
  const progressRef = useRef(null);
  const navigate = useNavigate();

  const goTo = useCallback(
    (index, dir = "next") => {
      if (index === current) return;
      setDirection(dir);
      setPrev(current);
      setCurrent(index);
    },
    [current],
  );

  const goNext = useCallback(() => {
    goTo((current + 1) % SLIDES.length, "next");
  }, [current, goTo]);

  const goPrev = useCallback(() => {
    goTo((current - 1 + SLIDES.length) % SLIDES.length, "prev");
  }, [current, goTo]);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(goNext, AUTO_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [goNext, paused]);

  const slide = SLIDES[current];

  return (
    <Section
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Slide Backgrounds ── */}
      {SLIDES.map((s, i) => (
        <SlideBg
          key={s.id}
          $image={s.image}
          $overlay={s.overlay}
          $active={i === current}
          $prev={i === prev}
          $direction={direction}
        />
      ))}

      {/* ── Noise texture overlay ── */}
      <NoiseLayer />

      {/* ── Grid lines ── */}
      <GridLayer />

      {/* ── Slide Content ── */}
      <ContentWrapper>
        {SLIDES.map((s, i) => (
          <SlideContent
            key={s.id}
            $active={i === current}
            $direction={direction}
          >
            <Eyebrow $color={s.accent}>
              <Zap size={12} />
              {s.eyebrow}
            </Eyebrow>

            <Title>
              {s.title}
              <br />
              <TitleAccent $color={s.accent}>{s.titleAccent}</TitleAccent>
            </Title>

            <Description>{s.description}</Description>

            <CTARow>
              <PrimaryBtn
                $accent={s.accent}
                onClick={() => navigate(s.ctaLink)}
              >
                {s.cta} <ArrowRight size={15} />
              </PrimaryBtn>
              <SecondaryBtn onClick={() => navigate(s.ctaSecondaryLink)}>
                {s.ctaSecondary}
              </SecondaryBtn>
            </CTARow>

            <FeatureRow>
              {FEATURES.map((f) => (
                <FeaturePill key={f.text} $accent={s.accent}>
                  <span>{f.icon}</span>
                  {f.text}
                </FeaturePill>
              ))}
            </FeatureRow>
          </SlideContent>
        ))}
      </ContentWrapper>

      {/* ── Slide counter ── */}
      <SlideCounter>
        <CountCurrent>{String(current + 1).padStart(2, "0")}</CountCurrent>
        <CountBar>
          <CountFill
            key={current}
            $duration={paused ? 0 : AUTO_INTERVAL}
            $paused={paused}
          />
        </CountBar>
        <CountTotal>{String(SLIDES.length).padStart(2, "0")}</CountTotal>
      </SlideCounter>

      {/* ── Nav arrows ── */}
      <NavBtn $pos="left" onClick={goPrev} aria-label="Previous slide">
        <ChevronLeft size={22} />
      </NavBtn>
      <NavBtn $pos="right" onClick={goNext} aria-label="Next slide">
        <ChevronRight size={22} />
      </NavBtn>

      {/* ── Dots ── */}
      <Dots>
        {SLIDES.map((s, i) => (
          <Dot
            key={s.id}
            $active={i === current}
            $color={SLIDES[i].accent}
            onClick={() => goTo(i, i > current ? "next" : "prev")}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </Dots>

      {/* ── Scroll hint ── */}
      <ScrollHint>
        <ScrollLine />
        <ScrollLabel>Scroll</ScrollLabel>
      </ScrollHint>
    </Section>
  );
};

export default HeroSection;

/* ─── Keyframes ──────────────────────────────── */
const slideInFromRight = keyframes`
  from { transform: translateX(60px); opacity: 0; }
  to   { transform: translateX(0);    opacity: 1; }
`;

const slideInFromLeft = keyframes`
  from { transform: translateX(-60px); opacity: 0; }
  to   { transform: translateX(0);     opacity: 1; }
`;

const bgZoom = keyframes`
  from { transform: scale(1);    }
  to   { transform: scale(1.06); }
`;

const bgZoomOut = keyframes`
  from { transform: scale(1.06); }
  to   { transform: scale(1);    }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to   { opacity: 0; }
`;

const progressAnim = keyframes`
  from { width: 0%; }
  to   { width: 100%; }
`;

const scrollBounce = keyframes`
  0%, 100% { transform: translateY(0); opacity: 0.6; }
  50%       { transform: translateY(6px); opacity: 1; }
`;

const contentIn = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ─── Section ────────────────────────────────── */
const Section = styled.section`
  position: relative;
  width: 100%;
  min-height: 90dvh;
  overflow: hidden;
  background: #0a1628;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    min-height: 100svh;
  }
`;

/* ─── Slide Backgrounds ──────────────────────── */
const SlideBg = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  background-image: ${({ $overlay, $image }) => `${$overlay}, url(${$image})`};
  background-size: cover;
  background-position: center;
  will-change: opacity, transform;

  ${({ $active, $prev, $direction }) => {
    if ($active)
      return css`
        opacity: 1;
        animation: ${bgZoom} 6s ease forwards;
      `;
    if ($prev)
      return css`
        opacity: 0;
        animation:
          ${fadeOut} 0.85s ease forwards,
          ${bgZoomOut} 6s ease forwards;
      `;
    return css`
      opacity: 0;
    `;
  }}
`;

const NoiseLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
  background-size: 160px 160px;
  opacity: 0.4;
  pointer-events: none;
`;

const GridLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
`;

/* ─── Content ────────────────────────────────── */
const ContentWrapper = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;
  display: grid;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const SlideContent = styled.div`
  grid-area: 1 / 1;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  max-width: 620px;
  pointer-events: ${({ $active }) => ($active ? "auto" : "none")};

  ${({ $active, $direction }) => {
    if ($active)
      return css`
        opacity: 1;
        animation:
          ${$direction === "next" ? slideInFromRight : slideInFromLeft} 0.75s
            cubic-bezier(0.22, 1, 0.36, 1) forwards,
          ${contentIn} 0.75s ease forwards;
      `;
    return css`
      opacity: 0;
    `;
  }}

  @media (max-width: 768px) {
    max-width: 100%;
    padding-top: 4rem;
  }
`;

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ $color }) => $color};
  background: ${({ $color }) => $color}18;
  border: 1px solid ${({ $color }) => $color}35;
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  width: fit-content;
`;

const Title = styled.h1`
  font-size: clamp(2.6rem, 5.5vw, 4.25rem);
  font-weight: 900;
  color: #ffffff;
  line-height: 1.08;
  margin: 0;
  letter-spacing: -0.02em;
`;

const TitleAccent = styled.span`
  background: linear-gradient(
    90deg,
    ${({ $color }) => $color},
    ${({ $color }) => $color}aa
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Description = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.62);
  max-width: 500px;
  margin: 0;
`;

const CTARow = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
`;

const PrimaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.875rem 2rem;
  background: ${({ $accent }) => $accent};
  color: #fff;
  font-weight: 700;
  font-size: 0.95rem;
  border-radius: 999px;
  text-decoration: none;
  box-shadow: 0 4px 20px ${({ $accent }) => $accent}55;
  transition: all 0.25s ease;

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
    box-shadow: 0 8px 28px ${({ $accent }) => $accent}77;
    color: #fff;
  }
`;

const SecondaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.875rem 2rem;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.85);
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: 999px;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(6px);
  transition: all 0.25s ease;

  &:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.14);
    color: #fff;
    transform: translateY(-2px);
  }
`;

const FeatureRow = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 0.25rem;
`;

const FeaturePill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  backdrop-filter: blur(4px);
  transition: all 0.2s ease;

  &:hover {
    background: ${({ $accent }) => $accent}22;
    border-color: ${({ $accent }) => $accent}44;
    color: #fff;
  }
`;

/* ─── Slide Counter ──────────────────────────── */
const SlideCounter = styled.div`
  position: absolute;
  bottom: 2.5rem;
  right: 3rem;
  z-index: 4;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const CountCurrent = styled.span`
  font-size: 2rem;
  font-weight: 900;
  color: #fff;
  line-height: 1;
`;

const CountBar = styled.div`
  width: 72px;
  height: 2px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 999px;
  overflow: hidden;
`;

const CountFill = styled.div`
  height: 100%;
  background: var(--color-primary);
  border-radius: 999px;
  animation: ${progressAnim} ${({ $duration }) => $duration}ms linear forwards;
  animation-play-state: ${({ $paused }) => ($paused ? "paused" : "running")};
`;

const CountTotal = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  line-height: 1;
`;

/* ─── Nav Arrows ─────────────────────────────── */
const NavBtn = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $pos }) => ($pos === "left" ? "left: 1.5rem;" : "right: 1.5rem;")}
  z-index: 4;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  backdrop-filter: blur(8px);
  transition: all 0.25s ease;

  &:hover {
    background: var(--color-primary);
    border-color: var(--color-primary);
    transform: translateY(-50%) scale(1.08);
    box-shadow: 0 4px 20px rgba(0, 200, 81, 0.4);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

/* ─── Dots ───────────────────────────────────── */
const Dots = styled.div`
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const Dot = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 999px;
  transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  background: ${({ $active, $color }) =>
    $active ? $color : "rgba(255,255,255,0.3)"};
  width: ${({ $active }) => ($active ? "28px" : "8px")};
  height: 8px;
  box-shadow: ${({ $active, $color }) =>
    $active ? `0 0 10px ${$color}88` : "none"};
`;

/* ─── Scroll Hint ────────────────────────────── */
const ScrollHint = styled.div`
  position: absolute;
  bottom: 2.5rem;
  left: 3rem;
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ScrollLine = styled.div`
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.5));
  animation: ${scrollBounce} 2s ease-in-out infinite;
`;

const ScrollLabel = styled.span`
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
`;
