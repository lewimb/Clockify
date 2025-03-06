import { twMerge } from "tailwind-merge";

function Button({ children, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "h-[48px] shadow-lg bg-gradient-to-r from-[#45CDDC] to-[#2EBED9] rounded-xl",
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
