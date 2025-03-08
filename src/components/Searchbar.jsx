import React from "react";
import Search from "../assets/Search.svg";

function Searchbar() {
  return (
    <div className="relative flex w-full">
      <input
        type="text"
        className="rounded-xl px-3 text-[#25367B] w-full bg-white h-10 focus:outline-none shadow-xl"
        placeholder="Search Activity"
      />
      <img
        src={Search}
        className="size-10 absolute top-0 right-0"
        alt="magnifying glass"
      />
    </div>
  );
}

export default Searchbar;
