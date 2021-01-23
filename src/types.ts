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
