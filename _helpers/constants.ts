export const getTheTime = (minutes: number = 0): number => {
  var d = new Date();
  var t = d.getTime();
  const ms = minutes * 60000;
  return t + ms;
};

export const UniqId = (): string => {
  return getTheTime(Math.random()).toString(36);
};

