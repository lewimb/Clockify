import clock from "../assets/clock.svg";
import { useEffect, useState } from "react";
import navigation from "../assets/grey_navigation.svg";
import { Link, useLocation } from "react-router";
import {
  formatDate,
  formatTime,
  durationsCalc,
  dateToMs,
} from "../utils/timeFormatter";
import { useGetActivities, useDeleteActivity } from "../lib/tsQuery/queries";

function ActivityList() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sortBy = queryParams.get("sortBy");
  const description = queryParams.get("description");
  const [coords, setCoords] = useState({ lat: null, lng: null });

  useEffect(() => {
    if (sortBy === "nearby") {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  }, [sortBy]);

  const { data, isLoading, error } = useGetActivities({
    sortBy,
    description,
    lat: coords.lat,
    lng: coords.lng,
  });
  const { mutate: deleteActivity } = useDeleteActivity();

  function handleMouseIn(uuid) {
    document.querySelector(`.activity${uuid}`).classList.add("slide-in");
  }
  function handleMouseOut(uuid) {
    document.querySelector(`.activity${uuid}`).classList.remove("slide-in");
  }

  console.log(data);

  if (isLoading) return <p>Loading activities...</p>;
  if (data == undefined) return <p>No Data found</p>;
  if (error) return <></>;

  return (
    <>
      <section className="w-full mt-5 overflow-hidden">
        {Object.entries(data).map(([date, activities]) => (
          <div key={date}>
            <h3 className="text-yellow-400 text-sm w-full py-1 px-3 font-bold bg-[#434B8C]">
              {formatDate(date)}
            </h3>
            {/* activity container */}
            {activities.map((activity) => (
              <div
                key={activity.uuid}
                className="w-full font-bold items-center"
              >
                <Link
                  to={`/activity/${activity.uuid}`}
                  onMouseEnter={() => handleMouseIn(activity.uuid)}
                  onMouseLeave={() => handleMouseOut(activity.uuid)}
                  className={`activity${activity.uuid} flex w-full duration-200 h-[60px] items-center`}
                >
                  <div className="w-full px-3 shrink-0">
                    <div className="flex justify-between w-full">
                      <span>
                        {durationsCalc(
                          activity.start_time,
                          activity.end_time,
                          dateToMs(activity.start_time),
                          dateToMs(activity.end_time)
                        )}
                      </span>
                      <span>{activity.description}</span>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex gap-2 items-center">
                        <img src={clock} alt="clock" className="size-3" />
                        <span className="text-sm whitespace-nowrap text-[#A7A6C5]">
                          {formatTime(activity.start_time)} -{" "}
                          {formatTime(activity.end_time)}
                        </span>
                      </div>
                      <div className="flex gap-2 items-center">
                        <img
                          src={navigation}
                          alt="navigation"
                          className="size-3"
                        />
                        <span className="text-sm whitespace-nowrap text-[#A7A6C5]">
                          {activity.location_lat}.{activity.location_lng}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    id="delete-button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      deleteActivity(activity.uuid);
                    }}
                    className="bg-[#D66060] h-full px-2 shrink-0 flex py-1 items-center"
                  >
                    <button>Delete</button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </section>

      <style>#delete-button{}</style>
    </>
  );
}

export default ActivityList;
