import { section } from "@/styles";

import Image from "next/image";
import { Button, Link } from "@/lib/nextUI";

import headerImage from "@/public/images/home/header.png";

type heroProps = {
  lang: string;
  heroLocale: {
    hero: {
      title: string;
      description: string;
      cta: { try_now: string };
    };
  };
};

export const Hero = ({ lang, heroLocale }: heroProps) => {
  return (
    <section className={`${section}`}>
      <div className="flex flex-col items-center justify-center gap-6 md:flex-row-reverse md:justify-around">
        <Image
          className="md:basis-96"
          src={headerImage}
          alt="Image of a smartphone with links to share"
        />

        <div className="flex flex-col items-center justify-center gap-6 md:basis-1/3 md:items-start">
          <h1 className="text-4xl text-center md:text-left">
            {heroLocale.hero.title}
          </h1>

          <p className="px-2 text-center md:text-xl md:text-left">
            {heroLocale.hero.description}
          </p>

          <Button
            className="text-1xl p-7"
            href={`/${lang}`}
            as={Link}
            color="primary"
            showAnchorIcon
            variant="solid"
          >
            {heroLocale.hero.cta.try_now}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
