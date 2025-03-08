import logo from "../assets/Logo.svg";
import { Link } from "react-router";

function Navbar() {
  const linkStyle = "text-[18px]";

  return (
    <div className="w-full flex px-[136px] py-[46px] items-center justify-between">
      <img src={logo} alt="Logo Clockify" />
      <div className="flex justify-between w-[180px] h-[48px]">
        <Link to={"/"} className={linkStyle}>
          Timer
        </Link>
        <Link to={"/activity"} className={linkStyle}>
          Activity
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
