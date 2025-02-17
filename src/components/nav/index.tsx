import Link from "next/link";
import { Item } from "./item";

export const Navbar = () => (
  <nav className="flex justify-end w-full mb-20 pb-8 border-b-2 border-slate-200 items-end gap-4">
    {/* Logo */}
    <Link
      href="/"
      className="text-5xl px-4 py-2 mr-auto text-slate-600 font-black font-sans uppercase tracking-widest visited:text-slate-600 border-4 border-slate-600 shadow-lg active:translate-y-1 transition-all duration-150 rounded"
    >
      Gallery
    </Link>

    {/* <Link
        href="/about"
        className="inline-block font-medium p-2 text-lg text-slate-600 hover:text-white tracking-wide uppercase relative group z-20 transition-all duration-150 after:content-[''] after:absolute after:left-0 after:bottom-1 after:bg-slate-600 after:w-full after:h-px after:hover:h-9 after:-z-20 after:scale-x-0 after:origin-left after:transition-all after:duration-300 hover:after:scale-x-100 active:translate-y-1"
      >
        Photo
      </Link> */}

    {navItems.map((item, index) => (
      <Item key={index} {...item} />
    ))}
  </nav>
);


const navItems = [
  { label: "Photo", url: "/?category=photo" },
  { label: "Vector", url: "/?category=vector" },
];
