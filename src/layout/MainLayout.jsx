import { Outlet } from "react-router";
import Navbar from "../section/Navbar";

function App() {
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
