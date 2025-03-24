import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import {
  useGetActivityById,
  useDeleteActivity,
  useUpdateActivity,
} from "../lib/tsQuery/queries";
import Location from "../components/Location";
import Button from "../components/Button";
import {
  formatDate,
  parseCustomDateTime,
  formatTime,
  durationsCalc,
  dateToMs,
  timeToMilliseconds,
} from "../utils/timeFormatter";
import DateModal from "../components/DateModal";

function EditPage() {
  const { id } = useParams();
  const { mutate: updateActivity } = useUpdateActivity();
  const navigate = useNavigate();
  const { data, isLoading } = useGetActivityById(id);
  const { mutate: deleteActivity } = useDeleteActivity(id);
  const [modal, setModal] = useState(false);
  const [value, setValue] = useState("");
  const [duration, setDuration] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedTimeType, setSelectedTimeType] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  useEffect(() => {
    if (!isLoading) {
      setValue(data.description);
      const start_time = formatTime(data.start_time);
      const end_time = formatTime(data.end_time);
      const start_date = formatDate(data.start_time);
      const end_date = formatDate(data.end_time);
      console.log(start_date);

      setDuration(data.duration);
      setStartDate(start_date);
      setEndDate(end_date);
      setStartTime(start_time);
      setEndTime(end_time);
    }
  }, [isLoading, data]);

  useEffect(() => {
    const startMs = timeToMilliseconds(startTime);
    const endMs = timeToMilliseconds(endTime);
    const dateMs1 = dateToMs(startDate);
    const dateMs2 = dateToMs(endDate);
    if (startMs <= endMs) {
      console.log(duration);
      setDuration(durationsCalc(startMs, endMs, dateMs1, dateMs2));
    }
  }, [startTime, endTime, startDate, endDate, duration]);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSave() {
    const start = parseCustomDateTime(startDate, startTime);
    const end = parseCustomDateTime(endDate, endTime);
    const values = {
      uuid: data.uuid,
      start_time: start,
      end_time: end,
      description: value,
    };

    updateActivity(values, {
      onSuccess: () => navigate("/activity"),
    });
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
        {duration}
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
            <span className="date text-[12px]">{startDate}</span>
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
            <span className="date text-[12px]">{endDate}</span>
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
          {timeToMilliseconds(startTime) + dateToMs(startDate) <
          timeToMilliseconds(endTime) + dateToMs(endDate) ? (
            <Button
              onClick={handleSave}
              className="start-button w-[156px] text-white bg-gradient-to-r from-[#45CDDC] to-[#2EBED9]"
            >
              SAVE
            </Button>
          ) : (
            <span className="flex items-center text-red-400 text-md">
              Data not available
            </span>
          )}
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
          selectedDate={selectedTimeType === "start" ? startDate : endDate}
          updateDate={selectedTimeType === "start" ? setStartDate : setEndDate}
          selectedTime={selectedTimeType === "start" ? startTime : endTime}
          updateTime={selectedTimeType === "start" ? setStartTime : setEndTime}
        />
      )}
    </div>
  );
}

export default EditPage;
