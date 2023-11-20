"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Cell from "../components/cell";
import Timer from "../components/timer";
import CellImage from "../components/cell-image";
import RegisterTime from "../components/register-time";
import { validFlow } from "../redux";
import { pathRow, ConnectorState } from "../redux/types";

const GameContainter = () => {
  const dispatch = useDispatch();
  const [isValidFlow, setIsValidFlow] = useState(false);
  const selectedConnector = useSelector(
    (state: { connectors: ConnectorState }) =>
      state.connectors.selectedConnector
  );
  const validPath = useSelector(
    (state: { connectors: ConnectorState }) => state.connectors.validPath
  );
  const router = useRouter();

  useEffect(() => {
    if (!selectedConnector) {
      router.push("/");
    }
  }, [selectedConnector]);

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
      dispatch(validFlow(true));
    } else {
      dispatch(validFlow(false));
      setIsValidFlow(false);
    }
  }, [validPath]);

  return (
    <>
      <Timer />

      <div className="grid grid-cols-5 gap-1">
        {selectedConnector && (
          <CellImage
            image={selectedConnector.image}
            name={selectedConnector.name}
          />
        )}
        {validPath["row1"].map((cable: pathRow) => {
          return <Cell row={"row1"} key={cable.key} cable={cable} />;
        })}
      </div>

      <div className="grid grid-cols-5 gap-1 mt-1">
        <span></span>
        {validPath["row2"].map((cable: pathRow) => {
          return <Cell row={"row2"} key={cable.key} cable={cable} />;
        })}
      </div>

      <div className="grid grid-cols-5 gap-1 mt-1">
        <span></span>
        {validPath["row3"].map((cable: pathRow) => {
          return <Cell row={"row3"} key={cable.key} cable={cable} />;
        })}
        <CellImage image="electric-car" name="Electric car" />
      </div>
      {isValidFlow && <RegisterTime />}
    </>
  );
};
export default GameContainter;
