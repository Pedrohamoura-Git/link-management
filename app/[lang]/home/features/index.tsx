"use client";

import { section } from "@/styles";
import { useCurrentLocale } from "@/app/utils/custom-hooks";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

import socialMediaIcons from "@/public/images/home/social-icons.svg";
import qrCode from "@/public/images/home/qr-code.png";

type featuresProps = {
  locale: {
    features: {
      title: string;
      description: string;
    };
    auth: {
      options: {
        sign_up: string;
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
    <section>
      <div
        className={`${section} flex flex-col items-center justify-center gap-6`}
      >
        <Image
          src={socialMediaIcons}
          alt="Multiple icons of different social medias"
        />

        <h2 className="text-4xl text-center">{locale.features.title}</h2>

        <p className="px-2 text-center">{locale.features.description}</p>

        <p className="px-2 text-center">
          <span>lika.ai/</span>

          <TypeAnimation
            sequence={textSequence[currentLang]}
            wrapper="span"
            speed={15}
            style={{
              fontSize: "1rem",
              display: "inline-block",
            }}
            className="text-primary"
            repeat={Infinity}
          />
        </p>
      </div>

      <div
        className={`${section} flex flex-col items-center justify-center gap-6`}
      >
        <Image
          src={qrCode}
          alt="A QR Code that can be used to access the sign in page"
        />

        <h2 className="text-4xl text-center">{locale.features.title}</h2>

        <p className="px-2 text-center">{locale.features.description}</p>

        <Link
          className="px-2 text-center text-primary"
          href={`/${currentLang}`}
        >
          {locale.auth.options.sign_up}
        </Link>
      </div>
    </section>
  );
};

export default Features;
