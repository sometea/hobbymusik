import Link from "next/link";

export function Footer() {
  return <footer className="text-center lg:text-left lg:ml-[20rem] mt-16 text-sm">
    <span>(C) { new Date().getFullYear() } hobbymusik | </span>
    <Link href="/datenschutz">Datenschutz</Link>
  </footer>;
}