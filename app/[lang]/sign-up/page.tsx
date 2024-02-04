import { RegisterForm } from "@@/components";
import { LogoWithCompanyOwner } from "@@/components/widgets";

export default function signUp() {
  return (
    <div className="relative -translate-x-1/2 translate-y-[10%] left-1/2 flex flex-col items-center justify-center">
      <header className="mb-10">
        <LogoWithCompanyOwner width={175} height={50} />
        <h1 className="mt-5">Crie sua conta Linka.ai gratuitamente</h1>
      </header>

      <RegisterForm />
    </div>
  );
}
