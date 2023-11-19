import LayoutCustom from "./components/layout-custom";
import ConnectorSelector from "./components/connector-selector";

export default function Home() {
  return (
    <>
      <LayoutCustom>
        <ConnectorSelector />
      </LayoutCustom>
    </>
  );
}
