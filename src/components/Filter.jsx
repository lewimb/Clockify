import { useState } from "react";
import dropdown from "../assets/dropdown.svg";

function Filter() {
  const [initialState, setInitialState] = useState("Latest Date");
  const [isActive, setIsActive] = useState(false);

  const listStyle = "p-2 text-black";
  const hoverListStyle =
    "hover:bg-blue-950 hover:rounded-lg hover:text-white duration-300";

  const sortList = [
    "Latest Date",
    "Oldest Date",
    "Longest Distance",
    "Shortest Distance",
  ];

  return (
    <>
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className="h-10 bg-[#434B8C] px-5 rounded-xl flex items-center gap-15 justify-center relative"
      >
        <p className="whitespace-nowrap">{initialState}</p>
        <img src={dropdown} alt="dropdown" />
        {isActive && (
          <div className="absolute top-[40px] w-full bg-white p-3 shadow-lg rounded-xl">
            <ul>
              {sortList.map((list, idx) => (
                <li
                  key={idx}
                  onClick={() => setInitialState({ list })}
                  className={`${listStyle} ${hoverListStyle}`}
                >
                  {list}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Filter;
