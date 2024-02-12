import { Locale } from "@/i18n.config";
import { getLocale } from "@/lib/locales";

import { RegisterForm } from "@@/components";
import { LogoWithCompanyOwner } from "@@/components/widgets";

export default async function signUp({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const locale = await getLocale(lang);
  const registerFormLocale = {
    common: locale.common,
    signUp: {
      placeholders: locale.signUp.form.placeholders,
      notification: {
        description: locale.signUp.notification.description,
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <header className="mb-10">
        <LogoWithCompanyOwner width={175} height={50} />
        <h1 className="mt-5">{locale.signUp.title}</h1>
      </header>

      <RegisterForm locale={registerFormLocale} />
    </div>
  );
}
