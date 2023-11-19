"use client";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { timeRecord, ConnectorState } from "../redux/types";
import { useRouter } from "next/navigation";
import { setNameAndTime } from "../redux";
import Button from "./button";
import ErrorLabel from "./error-label";

async function createNewTime({ name, seconds }: timeRecord) {
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

const RegisterTime = () => {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const currentTime = useSelector(
    (state: { connectors: ConnectorState }) => state.connectors.currentTime
  );
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (newTimeRecord: timeRecord) => {
      return createNewTime(newTimeRecord);
    },
    onSuccess: () => {
      router.push("/leaderboard");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["leaderboard"] });
    },
  });
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    if (e.currentTarget.nickname.value) {
      const value = e.currentTarget.nickname.value;
      mutation.mutate({ name: value, seconds: currentTime });
      dispatch(setNameAndTime({ name: value, seconds: currentTime }));
    } else {
      setError(true);
      return;
    }
  };
  return (
    <form onSubmit={handleSubmit} className="mt-5 flex flex-col items-center">
      <label>
        <input
          className="p-1 rounded"
          name="nickname"
          type="text"
          placeholder="Nickname"
        />
      </label>
      <Button type="submit">Register your time</Button>
      {error && <ErrorLabel title="Please select an option to continue" />}
    </form>
  );
};
export default RegisterTime;
