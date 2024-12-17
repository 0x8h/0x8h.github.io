//Unused but using soon?
import React, { FC, MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
}: {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}) => {
  return (
    <button
      className={`relative inline-flex items-center justify-center whitespace-nowrap transition duration-200 ease-out outline-none focus:outline-none disabled:pointer-events-none bg-zinc-800 text-white shadow-lg hover:bg-[#34343a] h-11 gap-1 rounded-xl px-[18px] text-sm font-medium leading-5 tracking-[-.007em] [box-shadow:0_16px_8px_rgba(31,_31,_31,_0.01),_0_12px_6px_rgba(31,_31,_31,_0.04),_0_4px_4px_rgba(31,_31,_31,_0.07),_0_1.5px_3px_rgba(31,_31,_31,_0.08),_0_0_0_1px_#0f0f0f,_inset_0_1px_2px_hsla(0,_0%,_100%,_0.12)] ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;