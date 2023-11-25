"use client";

import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { clsx } from "clsx";

type FormData={
    userName:number;
    password:string;
}


const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>();

  function onSubmit(data:FormData){
    //axios
    console.log(data);
    
  }

  return (
    <div className="flex gap-56">
      <div className="w-[1100px]">
        <Image
          src="/loginimage.jpg"
          alt="login"
          width={2000}
          height={2000}
          className=" w-full h-screen"
        />
      </div>
      <div className="w-full flex flex-col    justify-center bg-white">
        <div className="w-[400px] -mt-24">
          <h1 className="font-semibold text-5xl mb-20 ">
            شرکت ایرانیان پرداز جم
          </h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col mb-11">
              <label className="text-3xl font-semibold">شناسه کاربری*</label>
              <input
                id="userName"
                type="text"
                className={clsx(
                  "border-2 rounded-lg mt-2 text-2xl p-3 py-3 font-semibold",
                  errors.userName?.message && "outline-red-400 border-red-400"
                )}
                {...register("userName", {
                  required: "شناسه کاربری الزامی است.",
                })}
              />
              <p className="text-xl mt-2 text-red-500 font-semibold">
                {errors && errors?.userName?.message}
              </p>
            </div>
            <div className="flex flex-col mb-14">
              <label className="text-3xl font-semibold"> رمز عبور*</label>
              <input
                id="password"
                type="password"
                className={clsx(
                  "border-2 rounded-lg mt-2 text-2xl p-3 py-3",
                  errors.password?.message && " border-red-400 outline-red-400"
                )}
                {...register("password", {
                  required: "رمز عبور الزامی است.",
                })}
              />
              <p className="text-xl mt-2 text-red-500 font-semibold">
                {errors && errors?.password?.message}
              </p>
            </div>

            <button className="bg-black text-gray-200 rounded-lg text-xl  py-4 px-20">
              ورود
            </button>
            <p className="text-xl font-bold mt-4">
              ورود شما به سامانه به منزله قبول{" "}
              <span className="text-fuchsia-400">قوانین و مقررات </span> سامانه
              است.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
