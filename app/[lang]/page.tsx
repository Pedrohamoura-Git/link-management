import { Locale } from "@/i18n.config";
import { getLocale } from "@/lib/locales";

import { Hero, HowItWorks } from "./home";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  // Todo: () => apply Inter font in the whole project;

  const locale = await getLocale(lang);
  const heroLocale = { hero: locale.home.hero };
  const howItWoksLocale = { how_it_works: locale.home.how_it_works };

  return (
    <div className="flex flex-col items-center justify-center py-8 md:py-10">
      <Hero lang={lang} heroLocale={heroLocale} />

      <HowItWorks locale={howItWoksLocale} />

    </div>
  );
}
