"use client";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
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
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      setSelect((state) => !state);
      // check that the connector is on the list and change the selected variable
      dispatch(setConnector({ name, image, selected: select }));
    },
    [setSelect, name, image, select]
  );

  if (selected) {
    return (
      <button
        onClick={handleClick}
        data-testid={`button-${name}-selected`}
        className="flex flex-col items-center place-content-evenly w-84 h-104 bg-yellow-600 rounded font-medium border-2 border-grey-700"
      >
        <p className="text-sm">{name}</p>
        <Image
          src={`/${image}.svg`}
          alt={`${name} connector`}
          width={38}
          height={33}
          priority
        />
        <span className="px-4 bg-grey-700 rounded-[2px] text-white text-sm">
          Selected
        </span>
      </button>
    );
  }

  return (
    <button
      data-testid={`button-${name}`}
      onClick={handleClick}
      className="flex flex-col items-center place-content-evenly w-84 h-80 bg-white rounded font-medium"
    >
      <p className="text-sm">{name}</p>
      <Image
        src={`/${image}.svg`}
        alt={`${name} connector`}
        width={38}
        height={33}
        priority
      />
    </button>
  );
};
export default Connector;
