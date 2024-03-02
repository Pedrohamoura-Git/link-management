"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { ThemeSwitcher, LocaleSwitcher } from "../widgets";

import { canElementBeDraggedAnyFurther } from "@@/utils";
import { cn } from "@/lib/utils";
import { useDragger } from "@@/utils/custom-hooks";

import * as motion from "@/lib/motion";
// import { fadeIn } from "@/lib/motionAnimations";

import { DraggedFurtherProps } from "@/types";

export const FloatingMenu = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const isClicked = useRef<boolean>(false);
  const wrapperCoords = useRef<{
    xWhenDraggingStarted: number;
    xWhenDraggingStopped: number;
    lastX: number;
  }>({
    xWhenDraggingStarted: 0,
    xWhenDraggingStopped: 0,
    lastX: 0,
  });
  const [toggleArrow, setToggleArrow] = useState(false);

  const arrowClassNames =
    "absolute w-4 h-[0.1rem] bg-foreground inline-block transition-all duration-[0.2s] ease-[ease] left-0";

  useDragger({
    element: wrapperRef.current,
    innerElement: arrowRef.current,
    checkInnerElementLimit: true,
    mouseMoveCallback: () => {
      console.log("mouseMoveCallback: ");
      !toggleArrow && setToggleArrow(true);
    },
    touchMoveCallback: () => {
      console.log("touchMoveCallback: ");
      !toggleArrow && setToggleArrow(true);
    },
    innerElementLimitCallback: () => {
      console.log("innerElementLimitCallback: ");
      toggleArrow && setToggleArrow(false);
    },
  });

  // useEffect(() => {
  //   // Se o usuário não clicar no wrapper ou o body não existir, não faz nada
  //   if (!wrapperRef.current || !arrowRef.current || !window || !document.body)
  //     return;

  //   // Seleciona o wrapper e o body
  //   const wrapper = wrapperRef.current;
  //   const arrow = arrowRef.current;
  //   const body = document.body;

  //   const reachedArrowLimit = ({
  //     element,
  //     lastPosition,
  //     newPosition,
  //     direction,
  //     callback,
  //   }: DraggedFurtherProps) => {
  //     const reachedLimit = !canElementBeDraggedAnyFurther({
  //       element,
  //       lastPosition,
  //       newPosition,
  //       direction,
  //     });
  //     if (reachedLimit && callback) {
  //       callback(reachedLimit);
  //     }
  //     return reachedLimit;
  //   };

  //   type reachedWrapperLimitProps = {
  //     offsetLeft: number;
  //     moveToX: number;
  //   };
  //   const reachedWrapperLimit = ({
  //     offsetLeft,
  //     moveToX,
  //   }: reachedWrapperLimitProps) => {
  //     return offsetLeft > 0 && moveToX > 0;
  //   };

  //   /**
  //    * * Em desktops, se o usuário clicar, define o isClicked como true
  //    * * E armazena as coordenadas de inicio de acordo com a posição atual do click
  //    *  */
  //   const onMouseDown = (e: MouseEvent) => {
  //     isClicked.current = true;
  //     wrapperCoords.current.xWhenDraggingStarted = e.clientX;
  //   };

  //   /**
  //    * * Em desktops, enquanto o usuário mantêm o click, verifica se ele está clicando no wrapper
  //    * * E armazena as coordenadas de finais de acordo com a posição atual do click
  //    *  */

  //   // Todo: (V) => Quando fechado, definir o dragging máximo para o lado esquerdo da flecha
  //   // Todo: (V) => Quando aberto, definir o dragging máximo para o lado esquerdo do botão
  //   const onMouseMove = (e: MouseEvent) => {
  //     if (!isClicked.current) return;
  //     const moveToX =
  //       e.clientX -
  //       wrapperCoords.current.xWhenDraggingStarted +
  //       wrapperCoords.current.xWhenDraggingStopped;

  //     if (
  //       reachedArrowLimit({
  //         element: arrow,
  //         lastPosition: wrapperCoords.current.lastX,
  //         newPosition: moveToX,
  //         direction: "left",
  //         callback: () => setToggleArrow(false),
  //       }) ||
  //       reachedWrapperLimit({
  //         offsetLeft: wrapper.offsetLeft,
  //         moveToX,
  //       })
  //     ) {
  //       return;
  //     }

  //     !toggleArrow && setToggleArrow(true);
  //     wrapperCoords.current.lastX = moveToX;
  //     wrapper.style.left = `${moveToX}px`;
  //   };

  //   /**
  //    * * Em desktops, quando o usuário terminda de clicar, define o isClicked como false
  //    * * E armazena as coordenadas de finais de acordo com a posição atual do click
  //    *  */
  //   const onMouseUp = (e: MouseEvent) => {
  //     isClicked.current = false;
  //     wrapperCoords.current.xWhenDraggingStopped = wrapper.offsetLeft;
  //   };

  //   const onTouchstart = (e: TouchEvent) => {
  //     isClicked.current = true;

  //     wrapperCoords.current.xWhenDraggingStarted = e.touches[0].clientX;
  //   };
  //   const onTouchend = (e: TouchEvent) => {
  //     isClicked.current = false;
  //     wrapperCoords.current.xWhenDraggingStopped = wrapper.offsetLeft;
  //   };
  //   const onTouchMove = (e: TouchEvent) => {
  //     if (!isClicked.current) return;
  //     const touchX = e.touches[0].clientX;
  //     const moveToX =
  //       touchX -
  //       wrapperCoords.current.xWhenDraggingStarted +
  //       wrapperCoords.current.xWhenDraggingStopped;

  //     if (
  //       reachedArrowLimit({
  //         element: arrow,
  //         lastPosition: wrapperCoords.current.lastX,
  //         newPosition: moveToX,
  //         direction: "left",
  //         callback: () => setToggleArrow(false),
  //       }) ||
  //       reachedWrapperLimit({
  //         offsetLeft: wrapper.offsetLeft,
  //         moveToX,
  //       })
  //     ) {
  //       return;
  //     }

  //     !toggleArrow && setToggleArrow(true);
  //     wrapperCoords.current.lastX = moveToX;
  //     wrapper.style.left = `${moveToX}px`;
  //   };

  //   wrapper.addEventListener("mousedown", onMouseDown);
  //   wrapper.addEventListener("mouseup", onMouseUp);
  //   body.addEventListener("mousemove", onMouseMove);
  //   body.addEventListener("mouseleave", onMouseUp);

  //   wrapper.addEventListener("touchstart", onTouchstart);
  //   wrapper.addEventListener("touchend", onTouchend);
  //   body.addEventListener("touchmove", onTouchMove);

  //   const cleanUp = () => {
  //     wrapper.removeEventListener("mousedown", onMouseDown);
  //     wrapper.removeEventListener("mouseup", onMouseUp);
  //     body.removeEventListener("mousemove", onMouseMove);
  //     body.removeEventListener("mouseleave", onMouseUp);

  //     wrapper.addEventListener("touchstart", onTouchstart);
  //     wrapper.addEventListener("touchend", onTouchend);
  //     body.addEventListener("touchmove", onTouchMove);
  //   };

  //   return cleanUp;
  // }, []);

  return (
    <div
      className="fixed left-0 z-10 p-2 border rounded-md hover:cursor-pointer bottom-unit-3xl bg-background-glassy backdrop-blur-md"
      ref={wrapperRef}
      id="floating-menu-wrapper"
    >
      <div className="flex items-center gap-3">
        <Dropdown
          backdrop="blur"
          className="border bg-background border-border"
          closeOnSelect={false}
        >
          <DropdownTrigger>
            <Button variant="bordered" className="bg-background">
              Open Menu
            </Button>
          </DropdownTrigger>

          <DropdownMenu variant="faded" aria-label="Static Actions">
            <DropdownItem key="theme-switcher">
              <ThemeSwitcher />
            </DropdownItem>
            <DropdownItem key="locale-switcher">
              <LocaleSwitcher />
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <div className="relative w-5 h-5 my-0 ml-4" ref={arrowRef}>
          <span
            className={cn(
              `${arrowClassNames} top-1 rotate-45`,
              toggleArrow ? "-rotate-45" : ""
            )}
          ></span>
          <span
            className={cn(
              `${arrowClassNames} bottom-1 -rotate-45`,
              toggleArrow ? "rotate-45" : ""
            )}
          ></span>
        </div>
      </div>
    </div>
  );
};
