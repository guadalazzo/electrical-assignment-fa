"use client";
import { FormEvent, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Connector from "./connector";
import { useSelector } from "react-redux";
import { connectorType, ConnectorState } from "../redux/types";
import { useDispatch } from "react-redux";
import { setSelectedConnector } from "../redux";
import { useRouter } from "next/navigation";
import Button from "./button";
import ErrorLabel from "./error-label";

const ConnectorSelector = () => {
  const [error, setError] = useState(false);
  const connectorsList = useSelector(
    (state: { connectors: ConnectorState }) => state.connectors.connectorsList
  );
  const connectorSelected = connectorsList.find(
    (elem: connectorType) => elem.selected
  );
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (connectorSelected) {
      setError(false);
    }
  }, [connectorSelected]);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setError(false);
      if (!connectorSelected) {
        setError(true);
        return;
      }
      dispatch(setSelectedConnector(connectorSelected));
      router.push("/game");
    },
    [connectorSelected, setError]
  );

  return (
    <form
      className="flex flex-col items-center "
      onSubmit={handleSubmit}
      data-testid="form-selector"
    >
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
      <Button dataTestid="submit">Start your session</Button>
      {error && <ErrorLabel title="Please select an option to continue" />}
    </form>
  );
};

export default ConnectorSelector;
