import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@/helpers/__mocks__/intersectionObserverMock";

import { auth } from "@/config/links";

import Features from "@@/[lang]/home/features";

const featuresProps = {
  lang: "en",
  locale: {
    features: {
      title: "test",
      description: "test",
    },
    auth: {
      options: {
        sign_up_template_link: "test",
      },
    },
  },
};

jest.mock("next/navigation", () => ({
  usePathname() {
    return "/en";
  },
}));

describe("Features", () => {
  beforeEach(() => {
    render(<Features {...featuresProps} />);
  });

  it("Should go to correct route based on href prop", () => {
    const link = screen.getByTestId("sign-up");

    expect(link).toHaveAttribute("href", `/${auth.signUp}`);
  });
});
