import {
  type as defaultType,
  delay as defaultDelay,
  duration as defaultDuration,
} from "@/config/animations";

type genericProps = {
  direction: string;
  type?: string;
  delay?: number;
  duration?: number;
};

export const slideIn = ({
  direction,
  type = defaultType,
  delay = defaultDelay,
  duration = defaultDuration,
}: genericProps) => ({
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

// export const staggerContainer = (staggerChildren, delayChildren) => ({
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren,
//       delayChildren,
//     },
//   },
// });
