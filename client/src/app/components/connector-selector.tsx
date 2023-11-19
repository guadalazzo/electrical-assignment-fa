"use client";
import { FormEvent } from "react";
import Image from "next/image";
import Connector from "./connector";
import { useSelector } from "react-redux";
import { connectorType, ConnectorState } from "../redux/types";
import { useDispatch } from "react-redux";
import { setSelectedConnector } from "../redux";
import { useRouter } from "next/navigation";
import Button from "./button";
const ConnectorSelector = () => {
  const connectorsList = useSelector(
    (state: { connectors: ConnectorState }) => state.connectors.connectorsList
  );

  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const connectorSelected = connectorsList.find(
      (elem: connectorType) => elem.selected
    );
    dispatch(setSelectedConnector(connectorSelected));
    router.push("/game");
  };
  return (
    <form className="flex flex-col items-center " onSubmit={handleSubmit}>
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
          {connectorsList?.map((connector: connectorType) => {
            return (
              <Connector
                key={connector.name}
                name={connector.name}
                image={connector.image}
                selected={connector.selected}
              />
            );
          })}
        </div>
      </div>
      <Button>Start your session</Button>
    </form>
  );
};

export default ConnectorSelector;
