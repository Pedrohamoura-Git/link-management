import { useEffect, useState, useRef } from "react";
import { canElementBeDraggedAnyFurther } from "@@/utils";
import { DraggedFurtherProps } from "@/types";

const reachedInnerElementLimit = ({
  element,
  lastPosition,
  newPosition,
  direction,
  callback,
}: DraggedFurtherProps) => {
  const reachedLimit = !canElementBeDraggedAnyFurther({
    element,
    lastPosition,
    newPosition,
    direction,
  });
  console.log(
    // `reachedLimit[${reachedLimit}] && !!callback[${!!callback}]: `,
    reachedLimit && !!callback
  );
  if (reachedLimit && !!callback) {
    callback(reachedLimit);
  }
  return reachedLimit;
};
type reachedElementLimitProps = {
  offsetLeft: number;
  moveToX: number;
};
const reachedElementLimit = ({
  offsetLeft,
  moveToX,
}: reachedElementLimitProps) => {
  return offsetLeft > 0 && moveToX > 0;
};

type useDraggerProps = {
  element: HTMLDivElement | null;
  innerElement: HTMLDivElement | null;
  checkInnerElementLimit: boolean;
  mouseMoveCallback?: (value?: number) => void;
  touchMoveCallback?: (value?: number) => void;
  innerElementLimitCallback?: (value?: boolean) => void;
};

export const useDragger = ({
  element,
  innerElement,
  checkInnerElementLimit,
  mouseMoveCallback,
  touchMoveCallback,
  innerElementLimitCallback,
}: useDraggerProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const elementCoords = useRef<{
    xWhenDraggingStarted: number;
    xWhenDraggingStopped: number;
    lastX: number;
  }>({
    xWhenDraggingStarted: 0,
    xWhenDraggingStopped: 0,
    lastX: 0,
  });

  useEffect(() => {
    console.log("!!element: ", !!element);
    // if (element === null) throw new Error("Element must be provided");
    if (element === null || !window || !document.body) return;

    const body = document.body;

    const onMouseDown = (e: MouseEvent) => {
      setIsClicked(true);
      elementCoords.current.xWhenDraggingStarted = e.clientX;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isClicked) return;
      const moveToX =
        e.clientX -
        elementCoords.current.xWhenDraggingStarted +
        elementCoords.current.xWhenDraggingStopped;
      if (
        (checkInnerElementLimit &&
          innerElement &&
          reachedInnerElementLimit({
            element: innerElement,
            lastPosition: elementCoords.current.lastX,
            newPosition: moveToX,
            direction: "left",
            callback: () => innerElementLimitCallback,
          })) ||
        reachedElementLimit({
          offsetLeft: element.offsetLeft,
          moveToX,
        })
      ) {
        return;
      }

      mouseMoveCallback && mouseMoveCallback(moveToX);
      elementCoords.current.lastX = moveToX;
      element.style.left = `${moveToX}px`;
    };

    const onMouseUp = (e: MouseEvent) => {
      setIsClicked(false);
      elementCoords.current.xWhenDraggingStopped = element.offsetLeft;
    };
    const onTouchstart = (e: TouchEvent) => {
      setIsClicked(true);
      elementCoords.current.xWhenDraggingStarted = e.touches[0].clientX;
    };
    const onTouchend = (e: TouchEvent) => {
      setIsClicked(false);
      elementCoords.current.xWhenDraggingStopped = element.offsetLeft;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isClicked) return;
      const touchX = e.touches[0].clientX;
      const moveToX =
        touchX -
        elementCoords.current.xWhenDraggingStarted +
        elementCoords.current.xWhenDraggingStopped;
      if (
        (checkInnerElementLimit &&
          innerElement &&
          reachedInnerElementLimit({
            element: innerElement,
            lastPosition: elementCoords.current.lastX,
            newPosition: moveToX,
            direction: "left",
            callback: (e) => {
              console.log("e: ", e);
              // Find a way to activate this function so the setToggle in the parent component
              // can also be called
              // Replicate this code on onMouseMove
              () => innerElementLimitCallback;
            },
          })) ||
        reachedElementLimit({
          offsetLeft: element.offsetLeft,
          moveToX,
        })
      ) {
        return;
      }

      touchMoveCallback && touchMoveCallback(moveToX);
      elementCoords.current.lastX = moveToX;
      element.style.left = `${moveToX}px`;
    };

    element.addEventListener("mousedown", onMouseDown);
    element.addEventListener("mouseup", onMouseUp);
    body.addEventListener("mousemove", onMouseMove);
    body.addEventListener("mouseleave", onMouseUp);
    element.addEventListener("touchstart", onTouchstart);
    element.addEventListener("touchend", onTouchend);
    body.addEventListener("touchmove", onTouchMove);

    const cleanUp = () => {
      element.removeEventListener("mousedown", onMouseDown);
      element.removeEventListener("mouseup", onMouseUp);
      body.removeEventListener("mousemove", onMouseMove);
      body.removeEventListener("mouseleave", onMouseUp);
      element.addEventListener("touchstart", onTouchstart);
      element.addEventListener("touchend", onTouchend);
      body.addEventListener("touchmove", onTouchMove);
    };
    return cleanUp;
  }, [
    isClicked,
    element,
    innerElement,
    checkInnerElementLimit,
    mouseMoveCallback,
    touchMoveCallback,
    innerElementLimitCallback,
  ]);
};
