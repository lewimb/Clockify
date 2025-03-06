import logo from "../assets/Logo.svg";
import { Link } from "react-router";

function Navbar() {
  return (
    <div className="w-full fixed flex px-[136px] py-[46px] items-center justify-between">
      <img src={logo} alt="Logo Clockify" />
      <div className="flex justify-between w-[180px] h-[48px]">
        <Link>Timer</Link>
        <Link>Activity</Link>
      </div>
    </div>
  );
}

export default Navbar;
