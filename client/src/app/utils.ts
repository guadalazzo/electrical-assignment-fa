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
export function getValidPath() {
  const validPath = {
    row1: [
      {
        key: "(0,0)",
        value: "-",
        position: getRandomInt(4),
        validPositions: [0, 2],
      },
      {
        key: "(0,1)",
        value: "-",
        position: getRandomInt(4),
        validPositions: [0, 2],
      },
      {
        key: "(0,2)",
        value: "┐",
        position: getRandomInt(4),
        validPositions: [0],
      },
    ],
    row2: [
      {
        key: "(1,0)",
        value: "┌",
        position: getRandomInt(4),
        validPositions: [0],
      },
      {
        key: "(1,1)",
        value: "-",
        position: getRandomInt(4),
        validPositions: [0, 2],
      },
      {
        key: "(1,2)",
        value: "┘",
        position: getRandomInt(4),
        validPositions: [0],
      },
    ],
    row3: [
      {
        key: "(2,0)",
        value: "└",
        position: getRandomInt(4),
        validPositions: [0],
      },
      {
        key: "(2,1)",
        value: "-",
        position: getRandomInt(4),
        validPositions: [0, 2],
      },
      {
        key: "(2,2)",
        value: "-",
        position: getRandomInt(4),
        validPositions: [0, 2],
      },
    ],
  };
  return validPath;
}
