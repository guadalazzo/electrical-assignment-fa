"use client";
import Cell from "../components/cell";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const GameContainter = () => {
  const selectedConnector = useSelector(
    (state) => state.connectors.selectedConnector
  );
  const router = useRouter();

  const firstRow = [
    { value: "-", position: 0 },
    { value: "-", position: 0 },
    { value: "┐", position: 0 },
  ];
  const secondRow = [
    { value: "┌", position: 0 },
    { value: "-", position: 0 },
    { value: "┘", position: 0 },
  ];
  const thirdRow = [
    { value: "└", position: 0 },
    { value: "-", position: 0 },
    { value: "-", position: 0 },
  ];
  if (!selectedConnector) {
    router.push("/");
    return null;
  }
  return (
    <>
      <div className="grid grid-cols-5 gap-4">
        <div className="flex justify-center items-center">
          <Image
            src={`/${selectedConnector?.image}.svg`}
            alt="Fastned Logo"
            width={38}
            height={33}
            priority
          />
        </div>
        {firstRow.map((cable) => {
          return <Cell>{cable.value}</Cell>;
        })}
        <div></div>
      </div>

      <div className="grid grid-cols-5 gap-4 mt-4">
        <div></div>
        {secondRow.map((cable) => {
          return <Cell>{cable.value}</Cell>;
        })}
        <div></div>
      </div>
      <div className="grid grid-cols-5 gap-4 mt-4">
        <div></div>
        {thirdRow.map((cable) => {
          return <Cell>{cable.value}</Cell>;
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
