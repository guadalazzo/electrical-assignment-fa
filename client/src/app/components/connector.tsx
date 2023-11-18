"use client";
import Image from "next/image";
import { useCallback, useState } from "react";

const Connector = ({ name, image }: { name: string; image: string }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = useCallback(
    (e) => {
      e.preventDefault();
      setSelected((state) => !state);
    },
    [setSelected]
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
