import Link from "next/link";

export function Footer() {
  return <footer className="text-center mt-16 mb-8 lg:max-w-[58rem] text-sm">
    <span>(C) { new Date().getFullYear() } hobbymusik | </span>
    <Link href="/datenschutz">Datenschutz</Link>
  </footer>;
}