import { Outlet } from "react-router";

function App() {
  return (
    <>
      <div className="flex w-screen h-screen justify-center items-center">
        <Outlet />
      </div>
    </>
  );
}

export default App;
