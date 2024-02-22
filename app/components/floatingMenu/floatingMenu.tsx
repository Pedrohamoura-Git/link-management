"use client";

import React, { useEffect, useRef } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { ThemeSwitcher, LocaleSwitcher } from "../widgets";

import { canElementBeDraggedAnyFurther } from "@@/utils";

export const FloatingMenu = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const arrowCenterRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    // Se o usuário não clicar no wrapper ou o body não existir, não faz nada
    if (
      !wrapperRef.current ||
      !arrowRef.current ||
      !arrowCenterRef.current ||
      !window ||
      !document.body
    )
      return;

    // Seleciona o wrapper e o body
    const wrapper = wrapperRef.current;
    const arrow = arrowRef.current;
    const arrowCenter = arrowCenterRef.current;
    const body = document.body;

    /**
     * * Em desktops, se o usuário clicar, define o isClicked como true
     * * E armazena as coordenadas de inicio de acordo com a posição atual do click
     *  */
    const onMouseDown = (e: MouseEvent) => {
      console.log("onMouseDown");
      isClicked.current = true;
      wrapperCoords.current.xWhenDraggingStarted = e.clientX;
    };

    /**
     * * Em desktops, enquanto o usuário mantêm o click, verifica se ele está clicando no wrapper
     * * E armazena as coordenadas de finais de acordo com a posição atual do click
     *  */
    const onMouseMove = (e: MouseEvent) => {
      if (!isClicked.current) return;
      const moveToX =
        e.clientX -
        wrapperCoords.current.xWhenDraggingStarted +
        wrapperCoords.current.xWhenDraggingStopped;

      if (
        !canElementBeDraggedAnyFurther({
          element: arrowCenter,
          lastPosition: wrapperCoords.current.lastX,
          newPosition: moveToX,
          direction: "left",
        })
      )
        return;

      wrapperCoords.current.lastX = moveToX;
      wrapper.style.left = `${moveToX}px`;
    };

    /**
     * * Em desktops, quando o usuário terminda de clicar, define o isClicked como false
     * * E armazena as coordenadas de finais de acordo com a posição atual do click
     *  */
    const onMouseUp = (e: MouseEvent) => {
      console.log("onMouseUp");
      isClicked.current = false;
      wrapperCoords.current.xWhenDraggingStopped = wrapper.offsetLeft;
    };

    const onTouchstart = (e: TouchEvent) => {
      isClicked.current = true;

      wrapperCoords.current.xWhenDraggingStarted = e.touches[0].clientX;
    };
    const onTouchend = (e: TouchEvent) => {
      isClicked.current = false;
      wrapperCoords.current.xWhenDraggingStopped = wrapper.offsetLeft;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isClicked.current) return;
      const touchX = e.touches[0].clientX;
      const moveToX =
        touchX -
        wrapperCoords.current.xWhenDraggingStarted +
        wrapperCoords.current.xWhenDraggingStopped;

      if (
        !canElementBeDraggedAnyFurther({
          element: arrowCenter,
          lastPosition: wrapperCoords.current.lastX,
          newPosition: moveToX,
          direction: "left",
        })
      )
        return;

      wrapperCoords.current.lastX = moveToX;
      wrapper.style.left = `${moveToX}px`;
    };

    wrapper.addEventListener("mousedown", onMouseDown);
    wrapper.addEventListener("mouseup", onMouseUp);
    body.addEventListener("mousemove", onMouseMove);
    body.addEventListener("mouseleave", onMouseUp);

    wrapper.addEventListener("touchstart", onTouchstart);
    wrapper.addEventListener("touchend", onTouchend);
    body.addEventListener("touchmove", onTouchMove);

    const cleanUp = () => {
      wrapper.removeEventListener("mousedown", onMouseDown);
      wrapper.removeEventListener("mouseup", onMouseUp);
      body.removeEventListener("mousemove", onMouseMove);
      body.removeEventListener("mouseleave", onMouseUp);

      wrapper.addEventListener("touchstart", onTouchstart);
      wrapper.addEventListener("touchend", onTouchend);
      body.addEventListener("touchmove", onTouchMove);
    };

    return cleanUp;
  }, []);

  return (
    <div
      className="fixed left-0 z-10 hover:cursor-pointer bottom-unit-5xl"
      ref={wrapperRef}
    >
      <div className="flex items-center">
        <Dropdown
          backdrop="blur"
          className="border bg-background border-border"
          closeOnSelect={false}
        >
          <DropdownTrigger>
            <Button variant="bordered">Open Menu</Button>
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

        <i
          ref={arrowRef}
          className="flex items-center justify-center"
          style={{
            height: "25px",
            width: "25px",
            border: "solid red",
            borderWidth: "0 3px 3px 0",
            // display: "inline-block",
            // padding: "3px",
            transform: "rotate(-45deg)",
            // -webkit-transform: rotate(-45deg),
          }}
        >
          <div
            ref={arrowCenterRef}
            className="w-1 h-1 border border-green-300"
          ></div>
        </i>
      </div>
    </div>
  );
};
