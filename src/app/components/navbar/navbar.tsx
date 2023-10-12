import Link from "next/link";
import { MenuItem } from "./menuitem";

export function NavBar() {
  return <nav className="flex flex-row items-center">
    <div className="p-2 lg:p-8"><Link href="/"><img src="/logo.png" alt="Hobbymusik" className="w-96" /></Link></div>
    <ul className="font-bold text-xl">
      <MenuItem href="/releases">Releases</MenuItem>
      <MenuItem href="#">Shop</MenuItem>
      <MenuItem href="/about">About</MenuItem>
      <MenuItem href="/contact">Contact</MenuItem>
    </ul>
  </nav>;
}