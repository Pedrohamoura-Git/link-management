import { useCurrentLocale } from "./useCurrentLocale";

jest.mock("next/navigation", () => ({
  usePathname() {
    return "/en/{slug}/use-pathname/navigation-test/";
  },
}));

describe("useCurrentLocale", () => {
  it(`should return only the locale (en)`, () => {
    expect(useCurrentLocale()).toStrictEqual("en");
  });
});
