import React from "react";
import { useState } from "react";
import { formatDate } from "../utils/timeFormatter";

function DateModal({
  changeState,
  selectedDate,
  updateDate,
  selectedTime,
  updateTime,
}) {
  function handleDateChange(e) {
    changeStateDate(e.target.value);
    const date = formatDate(e.target.value);
    updateDate(date);
    console.log(date);
  }

  const [stateDate, changeStateDate] = useState(selectedDate);

  return (
    <div className="modal fixed inset-0 flex items-center justify-center">
      <form className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 text-center">
          Select Date & Time
        </h2>

        {/* Date Input */}
        <div className="mb-4">
          <label
            htmlFor="date"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Select a Date:
          </label>
          <div className="relative">
            <input
              type="date"
              id="date"
              value={stateDate}
              onChange={handleDateChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200"
            />
          </div>
        </div>

        {/* Time Input */}
        <div className="mb-4">
          <label
            htmlFor="time"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Select a Time:
          </label>
          <div className="relative">
            <input
              type="time"
              id="time"
              value={selectedTime}
              onChange={(e) => updateTime(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200"
            />
            <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
              ⏰
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex justify-end gap-2">
          <button
            type="button"
            onClick={changeState}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}

export default DateModal;
