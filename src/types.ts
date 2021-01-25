import { TYoutubeApi } from 'providers/youtubeApi/types';
import { FormEvent } from 'react';

export type TWeekDays =
  | 'sunday'
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday';

export type TBlurInputEvent = {
  event: FormEvent<HTMLInputElement>;
};

export type TVideoData = {
  id: {
    kind: string;
    videoId: string;
  };
  description: string;
  duration: number;
  title: string;
  thumbnail: string;
};

export type TYoutubeApiMockedFunction = jest.MockedFunction<TYoutubeApi>;
