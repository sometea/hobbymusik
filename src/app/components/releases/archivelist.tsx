import { ReactNode } from "react";

export function ArchiveList({ children }: { children: ReactNode }) {
  return <div className="flex flex-col items-center flex-wrap">
    {children}
  </div>;
}