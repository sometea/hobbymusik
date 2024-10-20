import Link from "next/link";
import { MenuItem } from "./menuitem";

export function NavBar() {
  return <nav className="flex flex-row items-center">
    <div className="p-2 lg:p-8">
      <Link href="/">
      <picture className="w-96">
        <source srcSet="/logo-dark.png" media="(prefers-color-scheme: dark)" />
        <img src="/logo.png" alt="Hobbymusik" />
      </picture>
      </Link>
    </div>
    <ul className="font-bold text-xl">
      <MenuItem href="/releases">Releases</MenuItem>
      <MenuItem href="https://hobbyhobbymusik.bandcamp.com" target="_blank">Shop</MenuItem>
      <MenuItem href="/contact">Contact</MenuItem>
    </ul>
  </nav>;
}