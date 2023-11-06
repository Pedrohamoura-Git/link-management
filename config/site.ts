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
      auth: [
        {
          label: "login",
          href: "/login",
        },
        {
          label: "logout",
          href: "/logout",
        },
      ],
    },
  ],

  landingPage: [
    {
      sideGuides: [
        {
          label: "How it works",
          href: "/how-it-works",
        },
        {
          label: "benefits",
          href: "/benefits",
        },
        {
          label: "yours only",
          href: "/yours only",
        },
      ],
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
