import { getObjectValueByKey } from "@@/utils";

export const getTranslationByPathAndKey = (obj: Object, text: string) => {
  return String(getObjectValueByKey(obj, text));
};
