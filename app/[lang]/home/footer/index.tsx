import { Link } from "@/lib/nextUI";

import { GithubIcon, LogoGray } from "@@/components/widgets/icons";
import { socialMedia } from "@/config/links";

type footerProps = {
  locale: {
    footer: {
      all_rights_reserved: string;
    };
  };
};

export const Footer = ({ locale }: footerProps) => {
  return (
    <footer className="w-full mt-16">
      <div className="flex items-center justify-between mb-7">
        <LogoGray />

        <div className="flex items-center justify-center gap-3 ">
          <p>[instagram]</p>

          <Link
            isExternal
            href={socialMedia.project.github}
            aria-label="Github"
          >
            <GithubIcon className="text-default-500" />
          </Link>
        </div>
      </div>

      <hr />

      <p className="text-center mt-7">{locale.footer.all_rights_reserved}</p>
    </footer>
  );
};
export default Footer;
