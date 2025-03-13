import { createContext, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(Cookies.get("token") || "");
  const navigate = useNavigate();

  const loginAction = async (value) => {
    try {
      const response = await fetch(
        "https://light-master-eagle.ngrok-free.app/api/v1/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(value),
        }
      );
      const res = await response.json();
      console.log(res.token);
      if (res.status === "success") {
        setUser(res.user);
        setToken(res.token);
        console.log("lewi");
        Cookies.set("token", res.token, { expires: 7 });
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }

    console.log(Cookies.get("token"));
  };
  const logOut = () => {
    setUser(null);
    setToken("");
    Cookies.remove("token");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
