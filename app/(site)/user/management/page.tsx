"use client";

import Users from "@/app/components/Users";
import { useDelete } from "@/app/context/DeleteContext";
import Link from "next/link";
import React from "react";

const UserManagement = () => {
  return (
    <div className="relative">
      <div className="flex justify-between ">
        <h2 className="font-bold">مدیریت کارمندان</h2>
        <Link  href="/user/create" >
          <button className="py-2 px-6 text-fuchsia-400 border rounded-xl border-fuchsia-400 text-2xl">
            کارمند جدید
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-12 items-center font-semibold justify-center text-xl mt-10 bg-stone-300 p-1 ">
        <p className="col-span-1 font-semibold pr-1">#</p>
        <p className="col-span-3 font-semibold border-r border-red-800 pr-3">
          نام و نام خانوادگی
        </p>
        <p className="col-span-2 font-semibold border-r border-red-800 pr-3">
          شناسه کاربری
        </p>
        <p className="col-span-4 font-semibold border-r border-red-800 pr-3">
          آدرس{" "}
        </p>
        <p className="col-span-2 font-semibold border-r border-red-800 pr-3">
          اقدامات
        </p>
      </div>

      <Users />
    </div>
  );
};

export default UserManagement;
