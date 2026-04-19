import type { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return <div className="flex items-center justify-center m-4">{children}</div>;
}

export { Layout };
