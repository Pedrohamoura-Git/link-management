import { Link } from "@/lib/nextUI";

import { GithubIcon, LogoGray } from "@@/components/widgets/icons";
import { siteConfig } from "@/config/site";

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

          <Link isExternal href={siteConfig.links.github} aria-label="Github">
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
