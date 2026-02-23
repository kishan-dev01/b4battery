// src/components/common/Animated.jsx
import { motion } from "framer-motion";
import { animations } from "../../config/animations";

const Animated = ({
  children,
  animation = "fadeIn", // default animation
  delay = 0,
  duration,
  className = "",
  viewport = { once: true }, // default viewport option
  as = "div", // allows different HTML elements
}) => {
  // Get animation configuration
  const selectedAnimation =
    typeof animation === "string" ? animations[animation] : animation;

  // DEV WARNING: Helpful alert if you misspell an animation name
  if (!selectedAnimation && process.env.NODE_ENV === "development") {
    console.warn(
      `Animation "${animation}" not found in animations config. Falling back to default fade.`,
    );
  }

  // Fallback to a basic fade if the requested animation is missing
  const safeAnimation = selectedAnimation || {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 0.5 },
  };

  // Merge custom duration and delay with animation config safely
  const transition = {
    ...(safeAnimation.transition || {}),
    ...(duration && { duration }),
    delay: delay,
  };

  const MotionComponent = motion[as];

  return (
    <MotionComponent
      initial={safeAnimation.initial}
      whileInView={safeAnimation.whileInView}
      viewport={viewport}
      transition={transition}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};

export default Animated;
