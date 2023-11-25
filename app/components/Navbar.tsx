import React from "react";
import { IoPersonOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="flex justify-between py-7 border-b-2 px-40">
      <div>
        <span className="font-extrabold text-2xl">ایرانیان پرداز جم</span>
      </div>
      <div className="flex items-center justify-center gap-4">
        <p className="font-extrabold text-2xl">پرهام ساقریچی ها </p>
        <div className="-mt-2">
          <IoPersonOutline size={24} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
