"use client";

import React, { useEffect, useRef } from "react";
import {
  Dropdown,
  Link,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { ThemeSwitcher, LocaleSwitcher } from "../widgets";

export const FloatingMenu = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const isClicked = useRef<boolean>(false);
  const wrapperCoords = useRef<{
    startX: number;
    startY: number;
    lastX: number;
    lastY: number;
  }>({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  });

  useEffect(() => {
    // Se o usuário não clicar no wrapper ou o body não existir, não faz nada
    if (!wrapperRef.current || !document.body) return;

    // Seleciona o wrapper e o body
    const wrapper = wrapperRef.current;
    const body = document.body;

    /**
     * * Em desktops, se o usuário clicar, define o isClicked como true
     * * E armazena as coordenadas de inicio de acordo com a posição atual do click
     *  */
    const onMouseDown = (e: MouseEvent) => {
      console.log("onMouseDown");
      isClicked.current = true;
      wrapperCoords.current.startX = e.clientX;
    };

    /**
     * * Em desktops, enquanto o usuário mantêm o click, verifica se ele está clicando no wrapper
     * * E armazena as coordenadas de finais de acordo com a posição atual do click
     *  */
    const onMouseMove = (e: MouseEvent) => {
      console.log("onMouseMove");
      if (!isClicked.current) return;
      const nextX =
        e.clientX - wrapperCoords.current.startX + wrapperCoords.current.lastX;

      wrapper.style.left = `${nextX}px`;
    };

    /**
     * * Em desktops, quando o usuário terminda de clicar, define o isClicked como false
     * * E armazena as coordenadas de finais de acordo com a posição atual do click
     *  */
    const onMouseUp = (e: MouseEvent) => {
      console.log("onMouseUp");
      isClicked.current = false;
      wrapperCoords.current.lastX = wrapper.offsetLeft;
    };

    const onTouchstart = (e: TouchEvent) => {
      isClicked.current = true;

      wrapperCoords.current.startX = e.touches[0].clientX;
    };
    const onTouchend = (e: TouchEvent) => {
      isClicked.current = false;
      wrapperCoords.current.lastX = wrapper.offsetLeft;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isClicked.current) return;
      var touchX = e.touches[0].clientX;
      const nextX =
        touchX - (wrapperCoords.current.startX + wrapperCoords.current.lastX);

      wrapper.style.left = `${nextX}px`;
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
          className="arrow right"
          style={{
            height: "25px",
            width: "25px",
            border: "solid red",
            borderWidth: "0 3px 3px 0",
            display: "inline-block",
            // padding: "3px",
            transform: "rotate(-45deg)",
            // -webkit-transform: rotate(-45deg),
          }}
        ></i>
      </div>
    </div>
  );
};
