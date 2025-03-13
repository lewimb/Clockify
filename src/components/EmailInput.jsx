import mail from "../assets/Mail.svg";

function EmailInput({ children, ...props }) {
  return (
    <>
      <div className="email-input w-full flex items-center gap-3 ">
        <img src={mail} className="size-6" />
        <div className="flex flex-col py-3 w-full justify-center ">
          <label htmlFor="email" className="size-3.5 pb-2 h-auto text-sm">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border-b-2 w-full text-sm focus:outline-none"
            {...props}
          />
        </div>
        {children}
      </div>
    </>
  );
}

export default EmailInput;
