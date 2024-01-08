"use client";

import { flexColCenter, home } from "@/styles";
import { useCurrentLocale } from "@/app/utils/custom-hooks";
import { auth } from "@/config/links";
import * as motion from "@/lib/motion";
import { fadeIn } from "@/lib/motionAnimations";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { GridTemplateIcons } from "@@/components/widgets";

import qrCode from "@/public/images/home/qr-code.png";

type featuresProps = {
  locale: {
    features: {
      title: string;
      description: string;
    };
    auth: {
      options: {
        sign_up_template_link: string;
      };
    };
  };
};

interface TextSequence {
  [index: string]: (string | number)[];
  en: (string | number)[];
  pt: (string | number)[];
}

const textSequence: TextSequence = {
  en: [
    "yourname",
    1000,
    "clara",
    1000, // wait 1s before replacing "clara" with "winston"
    "winston",
    1000,
    "ana",
    1000,
  ],
  pt: ["seunome", 1000, "pedro", 1000, "juliana", 1000, "karina", 1000],
};

export const Features = ({ locale }: featuresProps) => {
  const currentLang = useCurrentLocale();

  return (
    <>
      <section className={`${home.section.base}`}>
        <div
          className={`${flexColCenter} gap-6 lg:flex-row-reverse lg:justify-between`}
        >
          <motion.div
            variants={fadeIn({
              direction: "up",
            })}
            whileInView="show"
            initial="hidden"
          >
            <GridTemplateIcons
              className={`${home.section.image} lg:basis-2/5 w-full`}
            />
          </motion.div>

          <motion.div
            variants={fadeIn({
              direction: "up",
            })}
            initial="hidden"
            whileInView="show"
            className={`${flexColCenter} gap-6 lg:items-start lg:basis-2/5`}
          >
            <h2 className={`${home.section.title}`}>{locale.features.title}</h2>

            <p className={`${home.section.description}`}>
              {locale.features.description}
            </p>

            <p className={`${home.section.description}`}>
              <span>lika.ai/</span>

              <TypeAnimation
                sequence={textSequence[currentLang]}
                wrapper="span"
                speed={15}
                className="text-green-600"
                repeat={Infinity}
              />
            </p>
          </motion.div>
        </div>
      </section>

      <section className={`${home.section.base}`}>
        <div
          className={`${flexColCenter} gap-10 lg:flex-row lg:justify-between`}
        >
          <motion.div
            variants={fadeIn({
              direction: "up",
            })}
            initial="hidden"
            whileInView="show"
          >
            <Image
              className={`${home.section.image} lg:basis-1/3`}
              src={qrCode}
              style={{ backgroundColor: `white` }}
              alt="A QR Code that can be used to access the sign in page"
            />
          </motion.div>

          <motion.div
            variants={fadeIn({
              direction: "up",
            })}
            whileInView="show"
            initial="hidden"
            className={`${flexColCenter} gap-6 lg:items-start lg:basis-1/2`}
          >
            <h2 className={`${home.section.title}`}>{locale.features.title}</h2>

            <p className={`${home.section.description}`}>
              <span>{locale.features.description}</span>

              <Link
                className="ml-1 text-center text-primary"
                href={`/${auth.signUp}`}
              >
                {locale.auth.options.sign_up_template_link}
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Features;
