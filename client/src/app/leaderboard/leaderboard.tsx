"use client";
import { useEffect } from "react";
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { timeRecord, ConnectorState } from "../redux/types";
import { useRouter } from "next/navigation";

async function getScores() {
  const response = await fetch(`api/leaderboard`);
  return response.json();
}

const Leaderboard = () => {
  const queryClient = useQueryClient();
  const query = useQuery({ queryKey: ["leaderboard"], queryFn: getScores });
  const currentUser = useSelector(
    (state: { connectors: ConnectorState }) => state.connectors.currentUser
  );
  const mutation = useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["leaderboard"] });
    },
  });

  return (
    <>
      <h2 className="text-xl w-[232px] text-center m-4">Leaderboard</h2>
      {currentUser && (
        <p>
          Congrats! <strong>{currentUser.name}</strong> you've just scored{" "}
          <strong>{currentUser.seconds} seconds</strong>
        </p>
      )}
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