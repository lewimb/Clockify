import { useState } from "react";
import { useNavigate } from "react-router";
import dropdown from "../assets/dropdown.svg";

function Filter() {
  const [initialState, setInitialState] = useState("Latest Date");
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const listStyle = "p-2 text-black";
  const hoverListStyle =
    "hover:bg-blue-950 hover:rounded-lg hover:text-white duration-300";

  function handleClick(e) {
    const selectedValue = e.target.getAttribute("data-value");
    const param = e.target.getAttribute("data-param");
    setInitialState(selectedValue);
    navigate(`/activity?sortBy=${param}`);
  }
  const sortList = [
    { label: "Latest Date", value: "latestdate" },
    { label: "Oldest Date", value: "oldestdate" },
    { label: "Nearby", value: "nearby" },
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
              {sortList.map((item, idx) => (
                <li
                  key={idx}
                  data-value={item.label}
                  data-param={item.value}
                  onClick={handleClick}
                  className={`${listStyle} ${hoverListStyle} cursor-pointer`}
                >
                  {item.label}
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
