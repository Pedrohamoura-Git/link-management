import { home, flexColCenter } from "@/styles";
import * as motion from "@/lib/motion";
import { fadeIn, scale } from "@/lib/motionAnimations";

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
    <section className={`${home.section.base}`}>
      <div
        className={`${flexColCenter} lg:flex-row-reverse lg:justify-between gap-6`}
      >
        <motion.div
          variants={fadeIn({
            direction: "up",
          })}
          initial="hidden"
          whileInView="show"
        >
          <Image
            className={`${home.section.image} lg:basis-1/2`}
            src={headerImage}
            alt="Image of a smartphone with links to share"
          />
        </motion.div>

        <motion.div
          className={`${flexColCenter} gap-6 lg:basis-2/5 lg:items-start`}
          variants={fadeIn({
            direction: "up",
            delay: 0.6,
          })}
          initial="hidden"
          whileInView="show"
        >
          <h1 className={`${home.section.title} lg:text-5xl`}>
            {heroLocale.hero.title}
          </h1>

          <p className={`${home.section.description}`}>
            {heroLocale.hero.description}
          </p>

          <motion.div
            className={`${flexColCenter} gap-6 lg:basis-2/5 lg:items-start`}
            variants={scale({
              delay: 1.2,
              initialSize: 0.5,
              finalSize: 1,
              customEffects: [
                {
                  hidden: {
                    key: "filter",
                    value: "blur(10px)",
                  },
                  show: {
                    key: "filter",
                    value: "blur(0px)",
                  },
                },
              ],
            })}
            initial="hidden"
            whileInView="show"
          >
            <Button
              className="text-1xl p-7 lg:font-bold"
              href={`/${lang}`}
              as={Link}
              color="primary"
              showAnchorIcon
              variant="solid"
            >
              {heroLocale.hero.cta.try_now}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
