import { Locale } from "@/i18n.config";
import { getLocale } from "@/lib/locales";

import { Hero } from "../components";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const locale = await getLocale(lang);

  // Todo: () => apply Inter font in the whole project;

  return (
    <main className="flex flex-col items-center justify-center py-8 md:py-10">
      {locale && (
        <Hero
          lang={lang}
          title={locale.home.hero.title}
          description={locale.home.hero.description}
          cta={locale.home.hero.cta.try_now}
        />
      )}
    </main>
  );
}
