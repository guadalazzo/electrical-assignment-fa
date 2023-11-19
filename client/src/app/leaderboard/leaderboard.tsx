"use client";
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { timeRecord } from "../redux/types";

async function getScores() {
  const response = await fetch(`api/leaderboard`);
  return response.json();
}

const Leaderboard = () => {
  const queryClient = useQueryClient();
  const query = useQuery({ queryKey: ["leaderboard"], queryFn: getScores });
  // Mutations
  const mutation = useMutation({
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["leaderboard"] });
    },
  });
  return (
    <>
      <h2 className="text-xl w-[232px] text-center m-4">Leaderboard</h2>
      <table className="table-auto bg-yellow-100  text-center w-4/5 border-[3px] border-[#243c5a] rounded">
        <thead className="border-[3px] border-[#243c5a]">
          <tr>
            <th>Name</th>
            <th>Seconds</th>
          </tr>
        </thead>
        <tbody>
          {query?.data?.scores.map((score: timeRecord) => (
            <tr className="border-2 border-[#243c5a]">
              <td>{score.name} </td>
              <td>{score.seconds} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Leaderboard;
