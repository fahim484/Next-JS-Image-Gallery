import React from "react";
import { SearchIcon } from "./icons";

const Header = () => {
  return (
    <div className="flex justify-between items-center gap-2.5">
      <div className="w-1/3 max-w-xl flex justify-center items-center">
        <input
          type="text"
          placeholder="Search..."
          className="inline-block w-full py-2 pr-10 px-4 text-slate-500 bg-slate-100 border-2 border-slate-400 focus:outline-none rounded"
        />
        <button type="button" className="w-8 text-slate-500 -ml-8">
          <SearchIcon />
        </button>
      </div>

      <button className="px-8 py-4 bg-slate-600 text-white text-base uppercase font-bold rounded hover:bg-slate-500 active:translate-y-1">
        Upload
      </button>
    </div>
  );
};

export default Header;
