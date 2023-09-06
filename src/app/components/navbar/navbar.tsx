import Link from "next/link";
import { MenuItem } from "./menuitem";

export function NavBar() {
  return <nav className="flex flex-row items-center">
    <div className="p-2 lg:p-8"><Link href="#"><img src="logo.png" alt="Hobbymusik" className="max-w-xs" /></Link></div>
    <ul className="font-bold text-xl">
      <MenuItem href="#">Releases</MenuItem>
      <MenuItem href="#">Artists</MenuItem>
      <MenuItem href="#">Shop</MenuItem>
      <MenuItem href="#">About</MenuItem>
      <MenuItem href="#">Contact</MenuItem>
    </ul>
  </nav>;
}