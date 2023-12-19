"use client";

import { motion } from "framer-motion";
import { slideIn } from "@/lib/motionAnimations";

import Image from "next/image";
import { Button, Link } from "@/lib/nextUI";

import headerImage from "@/public/images/home/header.png";

type heroProps = {
  lang: string;
  title: string;
  description: string;
  cta: string;
};

export const Hero = ({ lang, title, description, cta }: heroProps) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      variants={slideIn({
        direction: "left",
        duration: 0.5,
      })}
    >
      <Image
        src={headerImage}
        alt="Image of a smartphone with links to share"
      />

      <motion.div className="flex flex-col items-center justify-center gap-6 mt-6">
        <h1 className="text-4xl text-center">{title}</h1>

        <p className="px-2 text-center">{description}</p>

        <Button
          className="text-1xl p-7"
          href={`/${lang}`}
          as={Link}
          color="primary"
          showAnchorIcon
          variant="solid"
        >
          {cta}
        </Button>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
