"use client";

import { FC } from "react";

import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { SunFilledIcon, MoonFilledIcon } from "@@/components/widgets/icons";
import { cn } from "@/lib/utils";

export interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, setTheme } = useTheme();

  function changeTheme(e: React.ChangeEvent<HTMLInputElement>) {
    e.target.checked ? setTheme("light") : setTheme("dark");
  }

  return (
    <Switch
      isSelected={theme === "light"}
      size="lg"
      className={cn(className)}
      thumbIcon={({ isSelected, className: IconClassName }) =>
        isSelected ? (
          <SunFilledIcon className={IconClassName} />
        ) : (
          <MoonFilledIcon className={IconClassName} />
        )
      }
      onChange={(e) => changeTheme(e)}
    ></Switch>
  );
};
