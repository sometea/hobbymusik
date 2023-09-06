import Link from "next/link";
import { ReactNode } from "react";

export function MenuItem({ href, children }: { href: string, children: ReactNode }) {
  return <li className="lg:inline-block p-8">
    <Link className="hover:underline hover:decoration-4 hover:underline-offset-8 hover:decoration-orange-400" href={href}>{children}</Link>
  </li>;
}