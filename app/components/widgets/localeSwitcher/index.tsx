"use client";

import { i18n } from "@/i18n.config";
import { usePathname, useRouter } from "next/navigation";
import { Select, SelectItem } from "@/lib/nextUI";
import { useCurrentLocale } from "@/app/utils/custom-hooks";

export const LocaleSwitcher = () => {
  const currentLocale = useCurrentLocale();
  const pathName = usePathname();
  const router = useRouter();

  const formattedLocales = i18n.locales.map((locale) => ({
    value: locale,
    label: locale,
  }));

  const changeLocale = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.replace(redirectedPathName(e.target.value));
  };

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;

    return segments.join("/");
  };

  return (
    <Select
      items={formattedLocales}
      selectedKeys={[currentLocale]}
      className="w-20"
      classNames={{
        trigger: "h-10 border border-border bg-background",
        popoverContent: "bg-background",
      }}
      onChange={changeLocale}
    >
      {({ value, label }) => (
        <SelectItem key={value} value={value}>
          {label}
        </SelectItem>
      )}
    </Select>
  );
};
