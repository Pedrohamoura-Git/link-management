import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import {
  Logo,
  TwitterIcon,
  GithubIcon,
  SearchInput,
  LocaleSwitcher,
  ThemeSwitcher,
} from "@@/components/widgets";

import { getTranslationByPathAndKey } from "@@/utils";

import { Locale } from "@/i18n.config";
import { getLocale } from "@/lib/locales";

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
            <Logo />
          </NextLink>
        </NavbarBrand>
        <ul className="justify-start hidden gap-4 ml-2 lg:flex">
          {siteConfig.navItems.map(({ label, href }) => (
            <NavbarItem key={href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={`${lang}/${href}`}
              >
                {getTranslationByPathAndKey(
                  locale.navbar.options.pages.home,
                  label
                )}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden gap-2 sm:flex">
          <Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.github} aria-label="Github">
            <GithubIcon className="text-default-500" />
          </Link>

          <ThemeSwitcher />
          <LocaleSwitcher />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <SearchInput />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="pl-4 sm:hidden basis-1" justify="end">
        <Link isExternal href={siteConfig.links.github} aria-label="Github">
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitcher />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <SearchInput />

        <div className="flex flex-col gap-2 mx-4 mt-2">
          {siteConfig.navMenuItems.map(({ label, href }, index) => (
            <NavbarMenuItem key={`${label}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href={`${lang}/${href}`}
                size="lg"
              >
                {getTranslationByPathAndKey(
                  locale.navbar.options.pages.home,
                  label
                )}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
