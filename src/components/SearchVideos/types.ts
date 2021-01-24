import { Dispatch, SetStateAction } from 'react';
import { TVideoData } from 'types';

export type TSearchVideosProps = {
  minutes: number[];
  setAmountDays: Dispatch<SetStateAction<number | undefined>>;
  setMostUsedWords: Dispatch<SetStateAction<string[]>>;
  setVideos: Dispatch<SetStateAction<TVideoData[]>>;
};

export type TGetAmountDays = (
  videosDuration: number[],
  minutes: TSearchVideosProps['minutes'],
) => number;
