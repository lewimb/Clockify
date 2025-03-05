import { Outlet } from "react-router";

function App() {
  return (
    <>
      <div className="bg-[#25367b] flex w-screen h-screen justify-center items-center">
        <Outlet />
      </div>
    </>
  );
}

export default App;
