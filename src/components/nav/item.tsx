import Link from "next/link";
import { FC } from "react";

// Props Declaration:
type TProps = { label: string; url: string };

export const Item: FC<TProps> = ({ url, label }) => (
  <Link
    href={url}
    className="inline-block font-medium p-2 text-lg text-slate-600 hover:text-white tracking-wide uppercase relative group z-20 transition-all duration-150 after:content-[''] after:absolute after:left-0 after:bottom-1 after:bg-slate-600 after:w-full after:h-px after:hover:h-9 after:-z-20 after:scale-x-0 after:origin-left after:transition-all after:duration-300 hover:after:scale-x-100 active:translate-y-1"
  >
    {label}
  </Link>
);
