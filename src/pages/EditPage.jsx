import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { useGetActivityById, useDeleteActivity } from "../lib/tsQuery/queries";
import Location from "../components/Location";
import Button from "../components/Button";
import { formatDate, formatTime, durationsCalc } from "../utils/timeFormatter";
import DateModal from "../components/DateModal";

function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useGetActivityById(id);
  const { mutate: deleteActivity } = useDeleteActivity(id);
  const [modal, setModal] = useState(false);
  const [value, setValue] = useState("");
  const [selectedTimeType, setSelectedTimeType] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  useEffect(() => {
    if (!isLoading) {
      setValue(data.description);
      const start = formatTime(data.start_time);
      const end = formatTime(data.end_time);
      setStartTime(start);
      setEndTime(end);
    }
  }, [isLoading, data]);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleDelete(id) {
    deleteActivity(id, {
      onSuccess: () => navigate("/"),
    });
  }

  function handleModal() {
    setModal(!modal);
  }

  if (isLoading) return <div>isLoading</div>;

  return (
    <div className="stopwatch flex flex-col justify-center items-center relative">
      <span className="display text-7xl font-bold mb-30 select-none pointer-events-none">
        {durationsCalc(data.start_time, data.end_time)}
      </span>
      <div className="controls flex flex-col items-center gap-7">
        <div className="container flex gap-1 max-w-70 justify-between">
          <div
            onClick={() => {
              handleModal();
              setSelectedTimeType("start");
            }}
            className="flex flex-col transition-all duration-300 hover:bg-white/10 p-3"
          >
            <span className="text-sm">Start Time</span>
            <span className="time text-[20px]">{startTime}</span>
            <span className="date text-[12px]">
              {formatDate(data.start_time)}
            </span>
          </div>
          <div
            onClick={() => {
              handleModal();
              setSelectedTimeType("end");
            }}
            className="flex flex-col transition-all duration-300 hover:bg-white/10 p-3"
          >
            <span className="text-sm">End Time</span>
            <span className="time text-[20px]">{endTime}</span>
            <span className="date text-[12px]">
              {formatDate(data.end_time)}
            </span>
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
          <Button
            onClick={() => handleDelete(data.uuid)}
            className="start-button w-[156px] text-black bg-white"
          >
            DELETE
          </Button>
        </div>
      </div>
      {modal && (
        <DateModal
          changeState={handleModal}
          selectedTime={selectedTimeType === "start" ? startTime : endTime}
          updateTime={selectedTimeType === "start" ? setStartTime : setEndTime}
        />
      )}
    </div>
  );
}

export default EditPage;
