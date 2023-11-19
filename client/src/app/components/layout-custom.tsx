import Header from "./header";

import { ReduxProvider } from "../redux/redux-provider";
import QueryProviders from "../query";
export default function LayoutCustom({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <Header />
        <QueryProviders>
          <ReduxProvider>{children}</ReduxProvider>
        </QueryProviders>
      </main>
    </>
  );
}
