const removeVideosLongerThanWeekMinute = (
  videosDuration: number[],
  weekMinutes: number[],
) => {
  const longestWeekMinute = Math.max(...weekMinutes);

  return videosDuration.filter(
    (videoDuration) => videoDuration <= longestWeekMinute,
  );
};

export default removeVideosLongerThanWeekMinute;
