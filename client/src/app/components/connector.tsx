"use client";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setConnector } from "../redux";

import Image from "next/image";

const Connector = ({
  name,
  image,
  selected,
}: {
  name: string;
  image: string;
  selected: boolean;
}) => {
  const [select, setSelect] = useState(false);
  const dispatch = useDispatch();
  const handleClick = useCallback(
    (e) => {
      e.preventDefault();
      setSelect((state) => !state);

      dispatch(setConnector({ name, image, selected: select }));
      // check that the connector is on the list and change the selected variable
    },
    [setSelect]
  );

  if (selected) {
    return (
      <button
        onClick={handleClick}
        className="flex flex-col items-center place-content-evenly w-[84px] h-[104px] bg-yellow-600 rounded font-medium border-2 border-[#1F2937]"
      >
        <p className="text-sm">{name}</p>
        <Image
          src={`/${image}.svg`}
          alt="Fastned Logo"
          width={38}
          height={33}
          priority
        />
        <span className="px-[4px] bg-[#1F2937] rounded-[2px] text-white text-sm">
          Selected
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className="flex flex-col items-center place-content-evenly w-[84px] h-[80px] bg-white rounded font-medium"
    >
      <p className="text-sm">{name}</p>
      <Image
        src={`/${image}.svg`}
        alt="Fastned Logo"
        width={38}
        height={33}
        priority
      />
    </button>
  );
};
export default Connector;
