import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Location from "./Location";

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [isStop, setIsStop] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);
  const [timeStamps, setTimeStamps] = useState({
    startTime: "",
    endTime: "",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    } else {
      clearInterval(intervalIdRef.current);
    }

    return () => clearInterval(intervalIdRef.current);
  }, [isRunning]);

  function getCurrentTimeStamp() {
    const date = new Date();

    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    return {
      date: `${date.getDate()} ${date.toLocaleString("default", {
        month: "short",
      })} ${date.getFullYear() % 100}`,
      time: `${hours}:${minutes}:${seconds}`,
    };
  }

  function start() {
    setIsRunning(true);
    setIsStop(false);
    startTimeRef.current = Date.now() - elapsedTime;

    const { time, date } = getCurrentTimeStamp();

    setTimeStamps((prev) => ({
      ...prev,
      startTime: time,
      startDate: date,
    }));
  }

  function stop() {
    setIsRunning(false);
    setIsStop(true);
    const { time, date } = getCurrentTimeStamp();
    setTimeStamps((prev) => ({
      ...prev,
      endTime: time,
      endDate: date,
    }));
  }

  function restart() {
    setElapsedTime(0);
    setIsRunning(false);
    setIsStop(false);
    setTimeStamps(() => ({
      startTime: "",
      startDate: "",
      endTime: "",
      endDate: "",
    }));
  }

  function formatTime() {
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const seconds = Math.floor((elapsedTime / 1000) % 60);

    return `${hours.toString().padStart(2, "0")} : ${minutes
      .toString()
      .padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;
  }

  return (
    <div className="stopwatch flex flex-col justify-center items-center">
      <span className="display text-7xl font-bold mb-32 select-none pointer-events-none">
        {formatTime()}
      </span>
      <div className="controls flex flex-col items-center gap-7">
        <div className="container flex w-60 justify-between">
          <div className="flex flex-col">
            <span className="text-sm">Start Time</span>
            <span className="time text-[20px]">
              {timeStamps.startTime || "-"}
            </span>
            <span className="date text-[12px]">
              {timeStamps.startDate || "-"}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm">End Time</span>
            <span className="time text-[20px]">
              {timeStamps.endTime || "-"}
            </span>
            <span className="date text-[12px]">
              {timeStamps.endDate || "-"}
            </span>
          </div>
        </div>
        <Location />
        <textarea
          className="bg-white rounded-xl text-[#25367B] focus:outline-none p-2 resize-none w-[360px] h-[96px]"
          name="description"
          id="description"
        />
        <div className="flex gap-4">
          {!isStop && !isRunning && (
            <Button onClick={start} className="start-button w-[156px]">
              START
            </Button>
          )}
          {isRunning && (
            <>
              <Button onClick={stop} className="start-button w-[156px]">
                STOP
              </Button>

              <Button
                onClick={restart}
                className="start-button w-[156px] text-black bg-white"
              >
                RESET
              </Button>
            </>
          )}
          {isStop && (
            <>
              <Button
                onClick={() => console.log("Save Clicked")}
                className="start-button w-[156px] text-black bg-white"
              >
                SAVE
              </Button>
              <Button className="start-button w-[156px] text-black bg-white">
                DELETE
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;
