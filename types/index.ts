import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface DraggedFurtherProps {
  element: HTMLElement;
  lastPosition: number;
  newPosition: number;
  direction: "top" | "bottom" | "left" | "right";
}
