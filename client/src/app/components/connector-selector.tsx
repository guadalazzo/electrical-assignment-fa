"use client";

import Image from "next/image";
import Connector from "./connector";
import { useSelector } from "react-redux";
import { ConnectorState } from "../redux";
const ConnectorSelector = () => {
  const connectorsList = useSelector(
    (state) => state.connectors.connectorsList
  );
  console.log("connectorsList", connectorsList);
  return (
    <section className="flex flex-col items-center ">
      <div className="flex flex-col items-center space-between bg-yellow-100 rounded border-[3px] border-[#243c5a] w-[296px] h-[288px] place-content-evenly">
        <div className="flex flex-col items-center">
          <Image
            src="/lightning.svg"
            alt="Fastned Logo"
            width={56}
            height={56}
            priority
          />
          <h2 className="text-xl w-[232px] text-center">
            Select your <b>connector type...</b>
          </h2>
        </div>

        <div className="flex space-between gap-[10px]">
          {connectorsList?.map(
            (connector: { name: string; image: string; selected: boolean }) => {
              return (
                <Connector
                  name={connector.name}
                  image={connector.image}
                  selected={connector.selected}
                />
              );
            }
          )}
        </div>
      </div>
      <button className="w-[188px] bg-[#F3F4F6] border-[3px] border-[#D2D5DA] hover:border-[#374151] font-medium py-[13px] px-[20px] rounded-[25px] text-[#9CA3AF] hover:text-[#374151] mt-[40px]">
        Start your session
      </button>
    </section>
  );
};

export default ConnectorSelector;
