import "@testing-library/jest-dom";

import { getObjectValueByKey } from "./getObjectValueByKey";

describe("getObjectValueByKey", () => {
  const users = [
    {
      id: "01",
      name: "marcus",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      id: "01",
      name: "carla",
      bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      id: "01",
      name: "winston",
      bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem?",
    },
    {
      id: "01",
      name: "ana:",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, sit.",
    },
  ];

  users.forEach((user) => {
    it(`should return the id of ${user.name}`, () => {
      expect(getObjectValueByKey({ obj: user, keyName: "id" })).toStrictEqual(
        user.id
      );
    });

    it(`should return the name of ${user.name}`, () => {
      expect(getObjectValueByKey({ obj: user, keyName: "name" })).toStrictEqual(
        user.name
      );
    });

    it(`should return the bio of ${user.bio}`, () => {
      expect(getObjectValueByKey({ obj: user, keyName: "bio" })).toStrictEqual(
        user.bio
      );
    });
  });

  it("should return an empty object if 'obj' is not an object", () => {
    // @ts-ignore
    expect(getObjectValueByKey({ obj: [], keyName: "hidden" })).toStrictEqual(
      {}
    );
  });
});
