"use client";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { pathRow } from "../redux";
import { changePosition } from "../redux";

const Cell = ({ cable, row }: { cable: pathRow; row: string }) => {
  const dispatch = useDispatch();
  const [rotateValue, setRotateValue] = useState("");
  useEffect(() => {
    // rotate the cell
    switch (cable.position) {
      case 1:
        setRotateValue("rotate-90");
        break;
      case 2:
        setRotateValue("rotate-180");
        break;
      case 3:
        setRotateValue("rotate-[270deg]");
        break;
      case 0:
        setRotateValue("rotate-360");
        break;

      default:
        break;
    }
  }, [cable.position]);

  const handleClick = useCallback(() => {
    // increment the position,
    let auxPosValue = cable.position + 1;
    dispatch(
      // it only has 4 positions so I use Module
      changePosition({ row, key: cable.key, newPosition: auxPosValue % 4 })
    );
  }, [cable]);

  return (
    <div
      onClick={handleClick}
      className={`flex justify-center items-center 
      bg-white w-20 h-20 rounded text-center text-[57px] ${rotateValue}`}
    >
      {cable.value}
    </div>
  );
};
export default Cell;
