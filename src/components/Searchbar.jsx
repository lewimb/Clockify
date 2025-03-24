import React, { useState } from "react";
import { useNavigate } from "react-router";
import Search from "../assets/Search.svg";

function Searchbar() {
  const navigate = useNavigate();
  const [desc, setdesc] = useState("");

  function handleChange(e) {
    setdesc(e.target.value);
  }

  return (
    <div className="relative flex w-full">
      <input
        type="text"
        onChange={handleChange}
        className="rounded-xl px-3 text-[#25367B] w-full bg-white h-10 focus:outline-none shadow-xl"
        placeholder="Search Activity"
      />
      <img
        src={Search}
        onClick={() => navigate(`/activity?description=${desc}`)}
        className="size-10 absolute top-0 right-0"
        alt="magnifying glass"
      />
    </div>
  );
}

export default Searchbar;
