"use client";

import { i18n } from "@/i18n.config";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { Select, SelectItem } from "@nextui-org/react";

// Todo: () => Create a file for this custom hook
const useCurrentLang = () => {
  const pathName = usePathname();

  return pathName.split("/")[1];
};

const changeLanguage = (lang: any) => {
  console.log("lang: ", lang);

  // router.push(redirectedPathName(lang));
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
    <>
      <Select
        defaultSelectedKeys={[currentLang]}
        className="w-16"
        onSelectionChange={(e) => changeLanguage(e)}
      >
        {formattedLanguages.map((lang) => (
          <SelectItem key={lang.value} value={lang.value}>
            {lang.label}
          </SelectItem>
        ))}
      </Select>
    </>
  );
};
