import { getCustomEffects } from "./getCustomEffects";

describe("getCustomEffects", () => {
  const customEffects = [
    {
      hidden: {
        key: "filter",
        value: "blur(10px)",
      },
      show: {
        key: "filter",
        value: "blur(0px)",
      },
    },
    {
      hidden: {
        key: "opacity",
        value: "100%",
      },
      show: {
        key: "opacity",
        value: "30%",
      },
    },
    {
      hidden: {
        key: "scale",
        value: "1",
      },
      show: {
        key: "scale",
        value: "1.25",
      },
    },
  ];

  it('should return only the effects for "hidden"', () => {
    expect(getCustomEffects({ customEffects, of: "hidden" })).toStrictEqual({
      filter: "blur(10px)",
      opacity: "100%",
      scale: "1",
    });
  });

  it('should return only the effects for "show"', () => {
    expect(getCustomEffects({ customEffects, of: "show" })).toStrictEqual({
      filter: "blur(0px)",
      opacity: "30%",
      scale: "1.25",
    });
  });

  it("should return an empty object if customEffects is empty", () => {
    expect(getCustomEffects({ customEffects: [], of: "hidden" })).toStrictEqual(
      {}
    );
  });

  it("should return an empty object if customEffects is not an array", () => {
    // @ts-ignore
    expect(getCustomEffects({ customEffects: {}, of: "hidden" })).toStrictEqual(
      {}
    );
  });
});
