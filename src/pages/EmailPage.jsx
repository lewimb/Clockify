import React from "react";
import { useNavigate, useLocation } from "react-router";
import { useVerifyEmail } from "../lib/tsQuery/queries";

function SuccessPage() {
  const { mutate: verifyEmail } = useVerifyEmail();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const emailToken = queryParams.get("emailToken");

  function handleClick() {
    verifyEmail(emailToken, {
      onSuccess: navigate("/login"),
    });
  }

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-green-600">Success!</h1>
        <p className="mt-2 text-gray-700">
          Your action was completed successfully.
        </p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleClick}
        >
          Go to Login
        </button>
      </div>
    </div>
  );
}

export default SuccessPage;
