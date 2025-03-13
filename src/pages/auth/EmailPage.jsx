import { useEmailVerification } from "../../lib/tsQuery/queries";
import { useNavigate } from "react-router";
import { useEffect } from "react";

function VerifyUserEmail() {
  const { isVerified, error } = useEmailVerification(); // Fix destructuring
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      navigate("/register");
    } else if (isVerified) {
      navigate("/");
    }
  }, [error, isVerified, navigate]);

  return (
    <div>
      <h1>
        {error ? "Email verification failed." : "Verifying your email..."}
      </h1>
    </div>
  );
}

export default VerifyUserEmail;
