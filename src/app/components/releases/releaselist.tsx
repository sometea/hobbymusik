import { ReactNode } from "react";

export function ReleaseList({ children }: { children: ReactNode }) {
  return <div className="flex flex-row items-center flex-wrap">
    {children}
  </div>;
}