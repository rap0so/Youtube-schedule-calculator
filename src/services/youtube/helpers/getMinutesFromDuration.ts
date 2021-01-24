const getMinutesFromDuration = (duration: string) => {
  const [matchedHours] = duration.match(/\d+H/g) ?? [];
  const [matchedMinutes] = duration.match(/\d+M/g) ?? [];

  const hours = matchedHours?.replace(/\D/, '') ?? 0;
  const minutes = matchedMinutes?.replace(/\D/, '') ?? 0;
  const hoursToMinutes = Number.parseInt(hours, 0) * 60;

  return hoursToMinutes + Number.parseInt(minutes, 0);
};

export default getMinutesFromDuration;
