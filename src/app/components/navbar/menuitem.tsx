'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export function MenuItem({ href, children }: { href: string, children: ReactNode }) {
  const pathName = usePathname();
  const activeCss = pathName === href ? 'text-orange-400' : '';
  return <li className="lg:inline-block p-4">
      <Link className={`hover:underline hover:decoration-4 hover:underline-offset-8 hover:decoration-orange-400 active:text-orange-400 ${activeCss}`} href={href}>{children}</Link>
  </li>;
}