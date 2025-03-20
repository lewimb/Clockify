export const formatTime = (time) => {
  const date = new Date(time);
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
};

export const formatDate = (time) => {
  const date = new Date(time);
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDate();

  return `${year} ${month} ${day}`;
};

export const durationsCalc = (time1, time2) => {
  const date1 = new Date(time1);
  const date2 = new Date(time2);

  const ms1 = date1.getTime();
  const ms2 = date2.getTime();

  const durationMs = ms2 - ms1;

  const hours = String(Math.floor(durationMs / (1000 * 60 * 60))).padStart(
    2,
    "0"
  );
  const minutes = String(
    Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const seconds = String(
    Math.floor((durationMs % (1000 * 60)) / 1000)
  ).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
};
