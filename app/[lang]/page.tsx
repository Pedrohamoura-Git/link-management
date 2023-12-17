import { Locale } from "@/i18n.config";
import { getLocale } from "@/lib/locales";

import Image from "next/image";
import { Button, Link } from "@/lib/nextUI";

import headerImage from "@/public/images/home/header.png";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const locale = await getLocale(lang);

  return (
    <main className="flex flex-col items-center justify-center py-8 md:py-10">
      <section className="flex flex-col items-center justify-center gap-4 ">
        <Image
          src={headerImage}
          alt="Image of a smartphone with links to share"
        />

        <h1 className="text-4xl text-center">{locale.home.hero.title}</h1>

        <p className="px-2 text-center">{locale.home.hero.description}</p>

        <Button
          className="text-1xl p-7"
          href={`/${lang}`}
          as={Link}
          color="primary"
          showAnchorIcon
          variant="solid"
        >
          {locale.home.hero.cta.try_now}
        </Button>
      </section>
    </main>
  );
}
