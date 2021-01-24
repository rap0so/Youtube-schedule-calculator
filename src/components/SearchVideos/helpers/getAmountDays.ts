import { TGetAmountDays } from '../types';

export const getAmountDays: TGetAmountDays = (videosDuration, minutes) => {
  let amountDays = 0;
  let minuteIndex = 0;
  let videoIndex = 0;
  let argMinutes = [...minutes];

  const lastVideoIndex = videosDuration.length - 1;
  const lastWeekIndex = argMinutes.length - 1;
  const initialWeek = minutes;

  while (videoIndex <= lastVideoIndex) {
    const currentVideoDuration = videosDuration[videoIndex];
    const currentWeekMinuteDuration = argMinutes[minuteIndex];

    if (currentVideoDuration >= currentWeekMinuteDuration) {
      minuteIndex += 1;

      if (currentVideoDuration === currentWeekMinuteDuration) {
        videoIndex += 1;
      }

      const continueOnNextWeek = minuteIndex > lastWeekIndex;
      if (continueOnNextWeek) {
        minuteIndex = 0;
        argMinutes = initialWeek;
      }

      amountDays += 1;
      continue;
    }

    argMinutes[minuteIndex] = currentWeekMinuteDuration - currentVideoDuration;
    videoIndex += 1;
  }

  return amountDays;
};
