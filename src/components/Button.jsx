import { twMerge } from "tailwind-merge";

function Button({ children, className }) {
  return (
    <button
      className={twMerge(
        "bg-black h-[48px] bg-gradient-to-r from-[#45CDDC] to-[#2EBED9] rounded-xl",
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
