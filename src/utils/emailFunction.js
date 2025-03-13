import { useState, useEffect } from "react";
import { useLocation } from "react-router";

export default function useVerifyEmail() {
  const location = useLocation();
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handle = async () => {
      try {
        const params = new URLSearchParams(location.search);
        const emailToken = params.get("emailToken");
        const response = await fetch(
          "http://localhost:3000/api/v1/user/verifyemail",
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ emailToken: emailToken }),
          }
        );
        if (response.data.status === "Success") {
          setIsVerified(true);
        }

        console.log(response);
      } catch (err) {
        setError(err);
      }
    };
    handle();
  }, [location.search]);

  return { isVerified, error };
}
