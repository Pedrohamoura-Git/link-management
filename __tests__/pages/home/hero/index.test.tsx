import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import "@/helpers/__mocks__/intersectionObserverMock";

import Hero from "@@/[lang]/home/hero";

const heroProps = {
  lang: "en",
  heroLocale: {
    hero: {
      title: "test",
      description: "test",
      cta: {
        try_now: "test",
      },
    },
  },
};

describe("Hero", () => {
  beforeEach(() => {
    render(<Hero {...heroProps} />);
  });

  it("Should go to correct route based on href prop", () => {
    const btn = screen.getByTestId("try-now-button");

    expect(btn).toHaveAttribute("href", "/en");
  });
});

describe("ChildComponent component", () => {});
