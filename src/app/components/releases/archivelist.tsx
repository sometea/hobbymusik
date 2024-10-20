import { ReactNode } from "react";

export function ArchiveList({ children }: { children: ReactNode }) {
  return <div className="flex flex-col items-center flex-wrap px-4 lg:px-0">
    {children}
  </div>;
}