export default async function getScores() {
  const response = await fetch(`api/leaderboard`);
  return response.json();
}
