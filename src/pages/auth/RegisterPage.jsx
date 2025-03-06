import logo from "../../assets/Logo.svg";
import EmailInput from "../../components/EmailInput";
import PasswordInput from "../../components/PasswordInput";
import Button from "../../components/Button";

function RegisterPage() {
  return (
    <div>
      <div className="flex flex-col m-5 items-center justify-center">
        <img src={logo} className="pb-20" alt="Logo Clockyfiy" />
        <form className="py-6">
          <div className="w-[400px] flex flex-col gap-3 items-center ">
            <EmailInput />
            <PasswordInput placeholder={"Input Your Password"} />
            <PasswordInput placeholder={"Confirm Your Password"} />
            <Button className="my-5 w-[328px]">CREATE YOUR ACCOUNT</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
