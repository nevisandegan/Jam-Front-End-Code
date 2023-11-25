import clsx from "clsx";
import React from "react";



interface PropButton{
    label:string;
    variannt?:"secondary";
    size:"sm" | "lg";
    onClick?:()=>void;
}



const Button:React.FC<PropButton> = ({label,variannt,size,onClick}) => {
  return (
    <button
    onClick={onClick}
      className={clsx(
        "bg-black text-gray-200 rounded-lg text-xl  py-4 px-20",
        variannt === "secondary" &&
          "bg-white text-gray-900 border border-gray-900 font-bold",
        size === "sm" && "py-1 px-12"
      )}
    >
      {label}
    </button>
  );
};

export default Button;
