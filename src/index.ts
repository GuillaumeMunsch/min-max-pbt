export type Range = { min: number; max: number };

export const minmax = ({ max, min }: Range): number => {
  return Math.round(Math.random() * (max - min) + min);
};

export const range = (value: number): number[] => {};
