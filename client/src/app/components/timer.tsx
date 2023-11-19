"use client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTimeString } from "../utils";
import { ConnectorState } from "../redux/types";
import { registerTime } from "../redux";
const Timer = () => {
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(0);

  const validFlow = useSelector(
    (state: { connectors: ConnectorState }) => state.connectors.validFlow
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    if (validFlow) {
      dispatch(registerTime(timer));
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [validFlow]);

  useEffect(() => {
    if (!validFlow) {
      return;
    }
  }, [validFlow, timer]);
  return (
    <div className="bg-white rounded border-grey-700 border-2 p-1 text-base m-2">
      {getTimeString(timer)}
    </div>
  );
};
export default Timer;
