import logo from "../../assets/Logo.svg";
import mail from "../../assets/Mail.svg";
import unsee from "../../assets/Unsee.svg";
import key from "../../assets/Key.svg";
import Button from "../../components/Button";

function SignInPage() {
  return (
    <>
      <div className="flex flex-col m-5 items-center justify-center">
        <img src={logo} className="pb-20" alt="Logo Clockyfiy" />
        <form className="py-6">
          <div className="w-[400px] flex flex-col gap-3 items-center ">
            <div className="email-input w-full flex items-center gap-3 ">
              <img src={mail} className="size-6" />
              <div className="flex flex-col my-2 w-full justify-center ">
                <label htmlFor="email" className="text-white size-3.5 text-sm">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="border-b-2 w-full py-2 text-sm text-white border-white focus:outline-none "
                />
              </div>
            </div>
            <div className="password-input py-2 flex w-[400px] items-center gap-3 ">
              <img src={key} alt="" className="size-6" />
              <div className="flex flex-col w-full justify-center relative">
                <label htmlFor="password" className="text-[#A7A6C5] text-sm">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Input Your Password"
                  className="border-b-2 w-full text-[#A7A6C5] border-[#A7A6C5] focus:outline-none"
                />
                <button>
                  <img src={unsee} className="absolute right-0 top-4" />
                </button>
              </div>
            </div>
            <Button className="my-5 text-white w-[328px] ">Sign in</Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignInPage;
