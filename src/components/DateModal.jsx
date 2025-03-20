import React from "react";

function DateModal({ changeState, selectedTime, updatedTime }) {
  function handleChange(e) {
    updatedTime(e.target.value);
  }

  return (
    <div className="modal fixed inset-0  flex items-center justify-center">
      <form className="bg-white rounded-lg shadow-lg p-6 w-80">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Select Time
        </h2>

        <div className="relative w-full">
          <label
            htmlFor="time"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Time:
          </label>
          <div className="relative">
            <input
              type="time"
              id="time"
              value={selectedTime}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2"
              required
            />
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={changeState}
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}

export default DateModal;
