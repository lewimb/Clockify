import unsee from "../assets/Unsee.svg";
import see from "../assets/eye.svg";
import key from "../assets/Key.svg";
import { useState } from "react";

function PasswordInput({ placeholder, name, children, ...props }) {
  const [visible, setVisible] = useState(false);

  function changeVisible() {
    setVisible(!visible);
  }

  return (
    <>
      <div className="password-input py-3 flex w-[400px] gap-3 ">
        <img src={key} alt="" className="size-6" />
        <div className="flex flex-col w-full justify-end">
          <div className="relative">
            <img
              src={visible ? see : unsee}
              onClick={changeVisible}
              className="absolute right-0 top-0 transition duration-300 ease-in-out"
            />
            <input
              type={visible ? "text" : "password"}
              name={name}
              placeholder={placeholder}
              className="border-b-2 w-full py-1 text-sm text-[#A7A6C5] border-[#A7A6C5] focus:outline-none"
              {...props}
            />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}

export default PasswordInput;
