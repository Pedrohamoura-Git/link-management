import { home, flexColCenter } from "@/styles";

import { DragAndDropIcons } from "@@/components/widgets";

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
    <section className={`${home.section.base}`}>
      <div className={`${flexColCenter} gap-6 lg:flex-row lg:justify-between`}>
        <DragAndDropIcons className={`${home.section.image} lg:basis-2/5`} />

        <div className={`${flexColCenter} gap-6 lg:basis-1/2 lg:items-start`}>
          <h2 className={`${home.section.title}`}>
            {locale.how_it_works.title}
          </h2>

          <p className={`${home.section.description}`}>
            {locale.how_it_works.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
