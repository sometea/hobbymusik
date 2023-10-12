import Link from "next/link";

export function Footer() {
  return <footer className="text-center p-2 font-mono text-sm">
    <span>(C) 2023 hobbymusik | </span>
    <Link href="/datenschutz">Datenschutz</Link>
  </footer>;
}