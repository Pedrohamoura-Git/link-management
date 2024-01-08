import {
  type as defaultType,
  delay as defaultDelay,
  duration as defaultDuration,
} from "@/config/animations";

interface defaultProps {
  type?: string;
  delay?: number;
  duration?: number;
}

interface slideProps extends defaultProps {
  direction: string;
}

export const slideIn = ({
  direction,
  type = defaultType,
  delay = defaultDelay,
  duration = defaultDuration,
}: slideProps) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

interface fadeProps extends defaultProps {
  direction: string;
}

export const fadeIn = ({
  direction,
  type = defaultType,
  delay = defaultDelay,
  duration = defaultDuration,
}: fadeProps) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

interface scaleProps extends defaultProps {
  initialSize?: number;
  finalSize?: number;
}

export const scale = ({
  type = defaultType,
  delay = defaultDelay,
  duration = defaultDuration,
  initialSize = 0,
  finalSize = 1,
}: scaleProps) => ({
  hidden: {
    scale: initialSize,
    opacity: 0,
  },
  show: {
    scale: finalSize,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});
