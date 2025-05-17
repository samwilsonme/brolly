export function getTimePeriod(unixTimestamp) {
  const hours = new Date(unixTimestamp * 1000).getHours();
  if (hours >= 5 && hours < 12) return "morning";
  if (hours >= 12 && hours < 17) return "afternoon";
  if (hours >= 17 && hours < 21) return "evening";
  return "night";
}