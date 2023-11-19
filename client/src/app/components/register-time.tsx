"use client";
import Button from "./button";
import { FormEvent } from "react";
import { useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { timeRecord, ConnectorState } from "../redux/types";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const currentTime = useSelector(
    (state: { connectors: ConnectorState }) => state.connectors.currentTime
  );
  const mutation = useMutation({
    mutationFn: (newTimeRecord: timeRecord) => {
      return createNewTime(newTimeRecord);
    },
  });
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = e.target.nickname.value;
    mutation.mutate({ name: value, seconds: currentTime });
    router.push("/leaderboard");
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
    </form>
  );
};
export default RegisterTime;
