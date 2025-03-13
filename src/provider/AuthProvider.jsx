import { useContext, createContext, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
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
      if (res.data) {
        setUser(res.user);
        setToken(res.token);
        Cookies.set("token", res.token, { expires: 7 });
        navigate("/");
      }
      throw new Error(res.message);
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

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
