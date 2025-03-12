import clock from "../assets/clock.svg";
import navigation from "../assets/grey_navigation.svg";

function ActivityList() {
  function handleMouseIn() {
    document.querySelector(".activity").classList.add("slide-in");
  }
  function handleMouseOut() {
    document.querySelector(".activity").classList.remove("slide-in");
  }

  return (
    <>
      <section className="w-full mt-5 overflow-hidden">
        <h3 className="text-yellow-400 w-full py-1 px-3 font-bold bg-[#434B8C]">
          12 Mar 2020
        </h3>
        {/* activity container */}
        <div className="w-full font-bold items-center">
          <div
            onMouseEnter={handleMouseIn}
            onMouseLeave={handleMouseOut}
            className="activity flex w-full duration-200 h-[60px] items-center"
          >
            <div className="w-full px-3 shrink-0">
              <div className="flex justify-between w-full">
                <span>00 : 30 : 22</span>
                <span>Treadmill</span>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <img src={clock} alt="clock" className="size-3" />
                  <span className="text-sm whitespace-nowrap text-[#A7A6C5]">
                    12:00:00 - 12:30:22
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={navigation} alt="navigation" className="size-3" />
                  <span className="text-sm whitespace-nowrap text-[#A7A6C5]">
                    12.915555.77.21146
                  </span>
                </div>
              </div>
            </div>
            <div
              id="delete-button"
              className="bg-[#D66060] h-full px-2 shrink-0 flex py-1 items-center"
            >
              <button>Delete</button>
            </div>
          </div>
        </div>
      </section>

      <style>#delete-button{}</style>
    </>
  );
}

export default ActivityList;
