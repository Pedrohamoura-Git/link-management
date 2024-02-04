import {
  type as defaultType,
  delay as defaultDelay,
  duration as defaultDuration,
} from "@/config/animations";
import { getCustomEffects } from "@@/utils";

import { CustomEffect } from "@/types/animations";

interface defaultProps {
  type?: string;
  delay?: number;
  duration?: number;
}

interface slideProps extends defaultProps {
  direction: string;
  customEffects?: CustomEffect[];
}

export const slideIn = ({
  direction,
  type = defaultType,
  delay = defaultDelay,
  duration = defaultDuration,
  customEffects,
}: slideProps) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
    ...getCustomEffects({ customEffects, of: "hidden" }),
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
    ...getCustomEffects({ customEffects, of: "show" }),
  },
});

interface fadeProps extends defaultProps {
  direction: string;
  customEffects?: CustomEffect[];
}

export const fadeIn = ({
  direction,
  type = defaultType,
  delay = defaultDelay,
  duration = defaultDuration,
  customEffects,
}: fadeProps) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
    ...getCustomEffects({ customEffects, of: "hidden" }),
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
    ...getCustomEffects({ customEffects, of: "show" }),
  },
});

interface scaleProps extends defaultProps {
  initialSize?: number;
  finalSize?: number;
  customEffects?: CustomEffect[];
}

export const scale = ({
  type = defaultType,
  delay = defaultDelay,
  duration = defaultDuration,
  initialSize = 0,
  finalSize = 1,
  customEffects,
}: scaleProps) => ({
  hidden: {
    scale: initialSize,
    opacity: 0,
    ...getCustomEffects({ customEffects, of: "hidden" }),
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
    ...getCustomEffects({ customEffects, of: "show" }),
  },
});
