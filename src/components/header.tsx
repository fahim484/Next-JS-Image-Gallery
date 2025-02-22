"use client";
import { useEffect, useState } from "react";
import { SearchIcon } from "./icons";
import { useRouter } from "next/navigation";

const Header = () => {
  const [searchData, setSearchData] = useState("");
  const router = useRouter();

  useEffect(() => {
    // if (searchData) {
    //   router.push(`/?search=${searchData}`);
    // }
    router.push(searchData ? `/?search=${searchData}` : "/");
  }, [searchData, router]);

  const open = () => router.push("/?popup=true");

  return (
    <div className="flex justify-between items-center gap-2.5">
      <div className="w-1/3 max-w-xl flex justify-center items-center">
        <input
          type="text"
          placeholder="Search..."
          className="inline-block w-full py-2 pr-10 px-4 text-slate-500 bg-slate-100 border-2 border-slate-400 focus:outline-none rounded"
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
        />
        <button type="button" className="w-8 text-slate-500 -ml-8">
          <SearchIcon />
        </button>
      </div>

      <button className="px-8 py-4 bg-slate-600 text-white text-base uppercase font-bold rounded hover:bg-slate-500 active:translate-y-1" onClick={open}>
        Upload
      </button>
    </div>
  );
};

export default Header;
