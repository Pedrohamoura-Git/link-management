"use client";

import { i18n } from "@/i18n.config";

import { usePathname, useRouter } from "next/navigation";

import { Select, SelectItem } from "@nextui-org/react";

// Todo: () => Create a file for this custom hook
const useCurrentLang = () => {
  const pathName = usePathname();

  return pathName.split("/")[1];
};

export const LocaleSwitcher = () => {
  const currentLang = useCurrentLang();
  const pathName = usePathname();
  const router = useRouter();

  const formattedLanguages = i18n.locales.map((lang) => ({
    value: lang,
    label: lang,
  }));

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;

    return segments.join("/");
  };

  // Todo: () => Change route using changeLanguage();
  // Todo: () => Reduce select height;
  return (
    <Select
      defaultSelectedKeys={[currentLang]}
      className="w-20"
      classNames={{
        mainWrapper: "h-8",
      }}
    >
      {({ value, label }) => (
        <SelectItem key={value} value={value}>
          {label}
        </SelectItem>
      )}
    </Select>
  );
};
