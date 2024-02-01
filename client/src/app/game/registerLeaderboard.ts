import { timeRecord } from "../redux/types";

export default async function createNewTime({ name, seconds }: timeRecord) {
  const data = JSON.stringify({ name, seconds });
  const response = await fetch(`api/leaderboard`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: data,
  });
  return response.json();
}
