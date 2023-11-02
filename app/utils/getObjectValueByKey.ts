export const getObjectValueByKey = (
  obj: Object,
  keyName: string
): string | Function => {
  type objTyped = keyof typeof obj;
  const key = keyName as objTyped;

  return obj[key];
};
