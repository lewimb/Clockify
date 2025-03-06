import unsee from "../assets/Unsee.svg";
import key from "../assets/Key.svg";
import { useState } from "react";

function PasswordInput({ placeholder, children }) {
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
              src={unsee}
              onClick={changeVisible}
              className="absolute right-0 "
            />
            <input
              type={visible ? "password" : "text"}
              id="password"
              placeholder={placeholder}
              className="border-b-2 w-full py-1 text-sm text-[#A7A6C5] border-[#A7A6C5] focus:outline-none"
            />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}

export default PasswordInput;
