import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(Cookies.get("token") || "");
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = Cookies.get("token");
    if (storedToken) setToken(storedToken);
  }, []);

  const loginAction = async (value) => {
    try {
      const response = await fetch(
        "https://f20d-103-19-109-29.ngrok-free.app/api/v1/user/login",
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
