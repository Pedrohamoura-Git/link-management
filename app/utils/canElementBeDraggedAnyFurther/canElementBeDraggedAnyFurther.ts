import { isElementTouchingEdges } from "../isElementTouchingEdges";

interface DraggedFurtherProps {
  element: HTMLElement;
  lastPosition: number;
  newPosition: number;
  direction: "top" | "bottom" | "left" | "right";
}

export const canElementBeDraggedAnyFurther = ({
  element,
  lastPosition,
  newPosition,
  direction,
}: DraggedFurtherProps): boolean => {
  switch (direction) {
    case "top":
      const { touchingTop } = isElementTouchingEdges(element);
      if (touchingTop && lastPosition < newPosition) return false;
    case "bottom":
      const { touchingBottom } = isElementTouchingEdges(element);
      if (touchingBottom && lastPosition < newPosition) return false;
    case "left":
      const { touchingLeft } = isElementTouchingEdges(element);
      if (touchingLeft && lastPosition > newPosition) return false;
    case "right":
      const { touchingRight } = isElementTouchingEdges(element);
      if (touchingRight && lastPosition > newPosition) return false;
  }

  return true;
};
