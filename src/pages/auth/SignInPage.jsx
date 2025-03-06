import logo from "../../assets/Logo.svg";
import mail from "../../assets/Mail.svg";
import unsee from "../../assets/Unsee.svg";
import key from "../../assets/Key.svg";
import Button from "../../components/Button";
import { Link } from "react-router";
import { useState } from "react";

function SignInPage() {
  const [visible, setVisible] = useState(false);

  function changeVisible() {
    setVisible(!visible);
  }

  return (
    <>
      <div className="flex flex-col m-5 items-center justify-center">
        <img src={logo} className="pb-20" alt="Logo Clockyfiy" />
        <form className="py-6">
          <div className="w-[400px] flex flex-col gap-3 items-center ">
            <div className="email-input w-full flex items-center gap-3 ">
              <img src={mail} className="size-6" />
              <div className="flex flex-col my-2 w-full justify-center ">
                <label htmlFor="email" className="size-3.5 z-10 text-sm">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="border-b-2 w-full py-1 text-sm bofocus:outline-none "
                />
              </div>
            </div>
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
                    placeholder="Input Your Password"
                    className="border-b-2 w-full py-1 text-sm text-[#A7A6C5] border-[#A7A6C5] focus:outline-none"
                  />
                </div>

                <a href="#" className="inline">
                  <u className="text-[#A7A6C5] text-sm block pt-1 text-end">
                    Forgot Password
                  </u>
                </a>
              </div>
            </div>
            <Button className="my-5 w-[328px]">Sign in</Button>
            <Link to="/register">
              <u>Create new account?</u>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignInPage;
