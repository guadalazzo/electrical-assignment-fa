"use client";
import Cell from "../components/cell";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { pathRow, ConnectorState } from "../redux/types";
import { useEffect, useState } from "react";
const GameContainter = () => {
  const [isValidFlow, setIsValidFlow] = useState(false);
  const selectedConnector = useSelector(
    (state: { connectors: ConnectorState }) =>
      state.connectors.selectedConnector
  );
  const validPath = useSelector(
    (state: { connectors: ConnectorState }) => state.connectors.validPath
  );
  const router = useRouter();

  if (!selectedConnector) {
    router.push("/");
    return null;
  }

  useEffect(() => {
    // check rows valid positions
    if (
      validPath["row1"].every((elem: pathRow) =>
        elem.validPositions.includes(elem.position)
      ) &&
      validPath["row2"].every((elem: pathRow) =>
        elem.validPositions.includes(elem.position)
      ) &&
      validPath["row3"].every((elem: pathRow) =>
        elem.validPositions.includes(elem.position)
      )
    ) {
      setIsValidFlow(true);
    } else {
      setIsValidFlow(false);
    }
  }, [validPath]);

  return (
    <>
      {isValidFlow && <div>ready</div>}
      <div className="grid grid-cols-5 gap-1">
        <div className="flex justify-center items-center">
          <Image
            src={`/${selectedConnector?.image}.svg`}
            alt="Fastned Logo"
            width={38}
            height={33}
            priority
          />
        </div>
        {validPath["row1"].map((cable: pathRow) => {
          return <Cell row={"row1"} key={cable.key} cable={cable} />;
        })}
        <div></div>
      </div>

      <div className="grid grid-cols-5 gap-1 mt-1">
        <div></div>
        {validPath["row2"].map((cable: pathRow) => {
          return <Cell row={"row2"} key={cable.key} cable={cable} />;
        })}
        <div></div>
      </div>
      <div className="grid grid-cols-5 gap-1 mt-1">
        <div></div>
        {validPath["row3"].map((cable: pathRow) => {
          return <Cell row={"row3"} key={cable.key} cable={cable} />;
        })}
        <div className="flex justify-center items-center">
          <Image
            src={`/electric-car.svg`}
            alt="Fastned Logo"
            width={38}
            height={33}
            priority
          />
        </div>
      </div>
    </>
  );
};
export default GameContainter;
