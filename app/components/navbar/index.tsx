import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@/lib/nextUI";

import NextLink from "next/link";

import {
  LogoStandard,
  SearchInput,
  LocaleSwitcher,
  ThemeSwitcher,
} from "@@/components/widgets";

import { Locale } from "@/i18n.config";
import { getLocale } from "@/lib/locales";
import { Button } from "@nextui-org/button";

export const Navbar = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const locale = await getLocale(lang);

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink
            className="flex items-center justify-start gap-1"
            href={`${lang}`}
          >
            <LogoStandard />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden gap-2 sm:flex">
          <ThemeSwitcher />
          <LocaleSwitcher />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <SearchInput />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="#" size="lg">
            <Button color="primary" className="capitalize">
              {locale.auth.options.singIn}
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent
        className="items-center pl-4 sm:hidden basis-1 sm:outline-1 sm:outline-white"
        justify="end"
      >
        <LocaleSwitcher />
        <ThemeSwitcher />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <SearchInput />

        <div className="flex flex-col items-center justify-center gap-2 mx-4 mt-2">
          <NavbarMenuItem>
            <Link href="#" size="lg" className="mt-10">
              <Button color="primary" className="capitalize">
                {locale.auth.options.singIn}
              </Button>
            </Link>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
