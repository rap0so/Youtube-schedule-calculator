import { Dispatch, SetStateAction } from 'react';

export type TSearchVideosProps = {
  setAmountDays: Dispatch<SetStateAction<number | undefined>>;
  setMostUsedWords: Dispatch<SetStateAction<string[] | undefined>>;
  minutes: number[];
};

export type TGetAmountDays = (
  videosDuration: number[],
  minutes: TSearchVideosProps['minutes'],
) => number;
