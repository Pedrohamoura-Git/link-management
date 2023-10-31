export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Link Management",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "home",
      href: "/",
    },
    {
      label: "docs",
      href: "/docs",
    },
    {
      label: "pricing",
      href: "/pricing",
    },
    {
      label: "blog",
      href: "/blog",
    },
    {
      label: "about",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "profile",
      href: "/profile",
    },
    {
      label: "dashboard",
      href: "/dashboard",
    },
    {
      label: "projects",
      href: "/projects",
    },
    {
      label: "team",
      href: "/team",
    },
    {
      label: "calendar",
      href: "/calendar",
    },
    {
      label: "settings",
      href: "/settings",
    },
    {
      label: "help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
