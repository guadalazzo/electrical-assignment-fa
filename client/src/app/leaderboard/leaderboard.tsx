"use client";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { timeRecord, ConnectorState } from "../redux/types";
import Button from "../components/button";
import { cleanUp } from "../redux";
async function getScores() {
  const response = await fetch(`api/leaderboard`);
  return response.json();
}

const Leaderboard = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["leaderboard"],
    queryFn: getScores,
  });

  const currentUser = useSelector(
    (state: { connectors: ConnectorState }) => state.connectors.currentUser
  );

  const handleClick = () => {
    router.push("/");
    dispatch(cleanUp());
  };

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <h2 className="text-xl w-[232px] text-center m-4">Leaderboard</h2>
      {currentUser && (
        <p>
          Congrats! <strong>{currentUser.name}</strong> you&apos;ve just scored
          <strong> {currentUser.seconds} seconds</strong>
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
          {data?.scores.map((score: timeRecord) => (
            <tr key={score.name} className="border-2 border-[#243c5a]">
              <td>{score.name} </td>
              <td>{score.seconds} </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button onClick={handleClick}>Try again</Button>
    </>
  );
};
export default Leaderboard;
