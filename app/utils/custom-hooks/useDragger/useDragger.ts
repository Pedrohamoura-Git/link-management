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
  if (reachedLimit && callback) {
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
  mouseMoveCallback: (value: any) => void;
  touchMoveCallback: (value: any) => void;
};
    /**
     * * Em desktops, se o usuário clicar, define o isClicked como true
     * * E armazena as coordenadas de inicio de acordo com a posição atual do click
     *  */
    const onMouseDown = (e: MouseEvent) => {
      setIsClicked(true);
      elementCoords.current.xWhenDraggingStarted = e.clientX;
    };
    /**
     * * Em desktops, enquanto o usuário mantêm o click, verifica se ele está clicando no element
     * * E armazena as coordenadas de finais de acordo com a posição atual do click
     *  */
    // Todo: (V) => Quando fechado, definir o dragging máximo para o lado esquerdo da flecha
    // Todo: (V) => Quando aberto, definir o dragging máximo para o lado esquerdo do botão
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
          })) ||
        reachedElementLimit({
          offsetLeft: element.offsetLeft,
          moveToX,
        })
      ) {
        return;
      }
      setToggleArrow(true);
      elementCoords.current.lastX = moveToX;
      element.style.left = `${moveToX}px`;
    };
    /**
     * * Em desktops, quando o usuário terminda de clicar, define o isClicked como false
     * * E armazena as coordenadas de finais de acordo com a posição atual do click
     *  */
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
          })) ||
        reachedElementLimit({
          offsetLeft: element.offsetLeft,
          moveToX,
        })
      ) {
        return;
      }
      !toggleArrow && setToggleArrow(true);
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
  }, []);
};
