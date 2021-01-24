export type TMappedRepeatedWordsAccumulator = Record<string, number>;

export type TOrderDesc = (
  current: [string, number],
  next: [string, number],
) => number;
