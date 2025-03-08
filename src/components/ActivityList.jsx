import clock from "../assets/clock.svg";
import navigation from "../assets/grey_navigation.svg";

function ActivityList() {
  return (
    <>
      <section className="w-full mt-5">
        <h3 className="text-yellow-400 w-full py-1 px-3 font-bold bg-[#434B8C]">
          12 Mar 2020
        </h3>
        {/* activity container */}
        <div className="w-full font-bold flex px-3 ">
          <div className="p-1 w-full">
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
        </div>
      </section>
    </>
  );
}

export default ActivityList;
