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
  return (
    <div
      className="fixed left-0 z-10 hover:cursor-pointer bottom-unit-5xl"
      ref={wrapperRef}
    >
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
