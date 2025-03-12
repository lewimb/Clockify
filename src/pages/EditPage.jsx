import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useGetActivityById } from "../lib/tsQuery/queries";
import Location from "../components/Location";
import Button from "../components/Button";

function EditPage() {
  const { id } = useParams();
  const [duration, setDuration] = useState("");
  const [start, setStart] = useState({ time: "-", date: "-" });
  const [end, setEnd] = useState({ time: "-", date: "-" });
  const { data } = useGetActivityById(id);
  const [value, setValue] = useState(data?.description || "");

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleDurations(durationMs) {
    const hours = Math.floor(durationMs / (1000 * 60 * 60))
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60))
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor((durationMs % (1000 * 60)) / 1000)
      .toString()
      .padStart(2, "0");

    setDuration(`${hours} : ${minutes} : ${seconds}`);
  }

  function formatDateTime(date) {
    if (!date) return { time: "-", date: "-" };

    return {
      time: date.toLocaleTimeString("en-US", { hour12: false }),
      date: `${date.getDate()} ${date.toLocaleString("default", {
        month: "short",
      })} ${date.getFullYear() % 100}`,
    };
  }

  useEffect(() => {
    if (!data?.start_time || !data?.end_time) return;

    const startDate = new Date(data.start_time);
    const endDate = new Date(data.end_time);

    setStart(formatDateTime(startDate));
    setEnd(formatDateTime(endDate));

    const durationMs = endDate - startDate;
    handleDurations(durationMs);
  }, [data]);

  return (
    <div className="stopwatch flex flex-col justify-center items-center">
      <span className="display text-7xl font-bold mb-32 select-none pointer-events-none">
        {duration}
      </span>
      <div className="controls flex flex-col items-center gap-7">
        <div className="container flex w-60 justify-between">
          <div className="flex flex-col">
            <span className="text-sm">Start Time</span>
            <span className="time text-[20px]">{start.time}</span>
            <span className="date text-[12px]">{start.date}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm">End Time</span>
            <span className="time text-[20px]">{end.time}</span>
            <span className="date text-[12px]">{end.date}</span>
          </div>
        </div>
        <Location data={data} />
        <textarea
          className="bg-white rounded-xl text-[#25367B] focus:outline-none p-2 resize-none w-[360px] h-[96px]"
          value={value}
          onChange={handleChange}
          name="description"
          id="description"
        />
        <div className="flex gap-4">
          <Button
            onClick={() => console.log("Save Clicked")}
            className="start-button w-[156px] text-white bg-gradient-to-r from-[#45CDDC] to-[#2EBED9]"
          >
            SAVE
          </Button>
          <Button className="start-button w-[156px] text-black bg-white">
            DELETE
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EditPage;
