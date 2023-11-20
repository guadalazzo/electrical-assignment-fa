"use client";
import Image from "next/image";

const CellImage = ({ image, name }: { image: string; name: string }) => {
  return (
    <div className="flex justify-center items-center" data-testid={image}>
      <Image
        src={`/${image}.svg`}
        alt={`${name}`}
        width={38}
        height={33}
        priority
      />
    </div>
  );
};
export default CellImage;
