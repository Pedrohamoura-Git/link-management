type props = {
  obj: Object;
  keyName: string;
};

export const getObjectValueByKey = ({
  obj,
  keyName,
}: props): string | Function | Object => {
  if (typeof obj === "object" && !Array.isArray(obj) && obj !== null) {
    type objTyped = keyof typeof obj;
    const key = keyName as objTyped;

    return obj[key];
  }
  return {};
};
