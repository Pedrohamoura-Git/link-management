import { section } from "@/styles";

import Image from "next/image";

import dragAndDropImage from "@/public/images/home/drag-and-drop.svg";

type howItWorksProps = {
  locale: {
    how_it_works: {
      title: string;
      description: string;
    };
  };
};

export const HowItWorks = ({ locale }: howItWorksProps) => {
  return (
    <section className={`${section}`}>
      <div className="flex flex-col items-center justify-center gap-6">
        <Image
          src={dragAndDropImage}
          alt="Image of a smartphone with links to share"
        />

          <h2 className="text-4xl text-center lg:text-left">
            {locale.how_it_works.title}
          </h2>

          <p className={`${home.section.description}`}>
            {locale.how_it_works.description}
          </p>
      </div>
    </section>
  );
};

export default HowItWorks;
