import { Outlet, Navigate } from "react-router";
import Navbar from "../section/Navbar";
import useAuth from "../hooks/useAuth";

function App() {
  const { token } = useAuth();

  if (!token) return <Navigate to={"/login"} />;

  return (
    <>
      <Navbar />
      <div className="flex flex-col w-screen min-h-screen items-center">
        <Outlet />
      </div>
    </>
  );
}

export default App;
