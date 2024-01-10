export interface CustomEffect {
  [index: string]: {
    key: string;
    value: string;
  };
  hidden: {
    key: string;
    value: string;
  };
  show: {
    key: string;
    value: string;
  };
}
