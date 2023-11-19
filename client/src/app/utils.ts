export function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
export function getTimeString(givenSec: number) {
  let dateObj = new Date(givenSec * 1000);
  const hours = dateObj.getUTCHours();
  const minutes = dateObj.getUTCMinutes();
  const seconds = dateObj.getSeconds();

  const timeString =
    hours.toString().padStart(2, "0") +
    ":" +
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0");
  return timeString;
}
