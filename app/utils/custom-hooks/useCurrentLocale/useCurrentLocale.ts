import { usePathname } from "next/navigation";

export function useCurrentLocale() {
  const pathName = usePathname();

  return pathName.split("/")[1];
}
