import Link from "next/link";

export function Footer() {
  return <footer className="text-center p-2 text-sm">
    <span>(C) { new Date().getFullYear() } hobbymusik | </span>
    <Link href="/datenschutz">Datenschutz</Link>
  </footer>;
}