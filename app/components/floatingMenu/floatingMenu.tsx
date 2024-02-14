"use client";

import React from "react";
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
  return (
    <div className="fixed left-0 z-10 bottom-unit-5xl">
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
    </div>
  );
};
