import { CustomEffect } from "@/types/animations";

type GetCustomEffectsProps = {
  customEffects: CustomEffect[] | undefined;
  of: string;
};

export const getCustomEffects = ({
  customEffects,
  of,
}: GetCustomEffectsProps) => {
  if (Array.isArray(customEffects)) {
    return customEffects.reduce(
      (acc, effect) => ({
        ...acc,
        [effect[of].key]: effect[of].value,
      }),
      {}
    );
  }
  return {};
};
