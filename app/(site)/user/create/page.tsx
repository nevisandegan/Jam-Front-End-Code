"use client";

import Button from "@/app/components/Button";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { RiArrowDropDownLine } from "react-icons/ri";

type FormData = {
  username: number;
  password: string;
  fullname: string;
  email: string;
  address: string;
};
type Data = {
  username: number;
  password: string;
  fullname: string;
  email: string;
  sex?: "man" | "woman" | null;
  address: string;
};

type Sex = "man" | "woman" | null;

const Create = () => {
  const [sex, setSex] = useState<Sex>(null);
  const [dropDown, setDropDown] = useState(false);
  const [errorDrop, setErrorDrop] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const refDiv = useRef<HTMLDivElement>(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>();

  function onSubmit(data: Data) {
    if (!sex) {
      setErrorDrop(true);
      return;
    }
    data = { ...data, sex };
    console.log(data);

    //axios send data
  }

  function onError() {
    if (!sex) {
      setErrorDrop(true);
      return;
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutSide, true);

    return () =>
      document.removeEventListener("click", handleClickOutSide, true);
  }, []);

  const handleClickOutSide = (e: any) => {
    if (
      !ref.current?.contains(e.target) &&
      !refDiv.current?.contains(e.target)
    ) {
      setDropDown(false);
    }
  };

  return (
    <div>
      <h2 className="font-bold">ایجاد حساب کاربری</h2>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="grid grid-cols-2 gap-x-20 gap-y-4 mt-8 w-[97%]">
          <div>
            <label htmlFor="username" className="text-xl font-bold">
              شناسه کاربری *
            </label>
            <input
              id="username"
              type="text"
              className={clsx(
                "border rounded-lg w-full text-xl p-3 mt-4",
                errors.username?.message && " border-red-400 outline-red-400"
              )}
              {...register("username", {
                required: "شناسه کاربری الزامی است.",
              })}
            />
            <p className="text-xl mt-2 text-red-500 font-semibold">
              {errors && errors?.username?.message}
            </p>
          </div>
          <div>
            <label htmlFor="password" className="text-xl  font-bold ">
              گذرواژه*
            </label>

            <input
              id="password"
              type="password"
              className={clsx(
                "border rounded-lg w-full text-xl p-3 mt-4",
                errors.password?.message && " border-red-400 outline-red-400"
              )}
              {...register("password", {
                required: " گذرواژه الزامی است.",
              })}
            />
            <p className="text-xl mt-2 text-red-500 font-semibold">
              {errors && errors?.password?.message}
            </p>
          </div>
          <div>
            <label htmlFor="fullname" className="text-xl font-bold">
              {" "}
              نام و نام خانوادگی *
            </label>
            <input
              id="fullname"
              type="text"
              className={clsx(
                "border rounded-lg w-full text-xl p-3 mt-4",
                errors.fullname?.message && " border-red-400 outline-red-400"
              )}
              {...register("fullname", {
                required: " نام و نام خانوادگی  الزامی است.",
              })}
            />
            <p className="text-xl mt-2 text-red-500 font-semibold">
              {errors && errors?.fullname?.message}
            </p>
          </div>
          <div>
            <label htmlFor="email" className="text-xl  font-bold ">
              ایمیل*
            </label>
            <input
              id="email"
              type="text"
              className={clsx(
                "border rounded-lg w-full text-xl p-3 mt-4",
                errors.email?.message && " border-red-400 outline-red-400"
              )}
              {...register("email", {
                required: " ایمیل الزامی است.",
              })}
            />
            <p className="text-xl mt-2 text-red-500 font-semibold">
              {errors && errors?.email?.message}
            </p>
          </div>
          <div>
            <label htmlFor="address" className="text-xl  font-bold ">
              آدرس
            </label>
            <input
              id="address"
              type="text"
              className={clsx("border rounded-lg w-full text-xl p-3 mt-4")}
              {...register("address")}
            />
          </div>
          <div>
            <label htmlFor="sex" className="text-xl font-bold">
              {" "}
              جنسیت *
            </label>
            <div className="flex flex-col relative">
              <div
                className={clsx(
                  "flex  items-center justify-between border rounded-lg w-full py-[3px] text-xl px-3  mt-4",
                  errorDrop && " border-red-400 outline-red-400"
                )}
                role="button"
                ref={refDiv}
                onClick={() => setDropDown((prev) => !prev)}
              >
                <p className="text-gray-900 ">
                  {sex === "man" && "مرد"}
                  {sex === "woman" && "زن"}
                  {sex === null && ""}
                </p>
                <RiArrowDropDownLine size={28} />
              </div>
              {dropDown && (
                <div
                  ref={ref}
                  className="absolute  flex flex-col w-full top-20  text-xl justify-center items-start border p-3 rounded-lg"
                >
                  <button
                    type="reset"
                    className={clsx(
                      "hover:text-fuchsia-400 p-5 rounded-lg w-full text-right",
                      sex === "man" && "text-fuchsia-400	 bg-gray-100"
                    )}
                    onClick={() => {
                      setSex("man");
                      setDropDown(false);
                      setErrorDrop(false);
                    }}
                  >
                    مرد
                  </button>
                  <button
                    type="reset"
                    className={clsx(
                      "hover:text-fuchsia-400 p-5 rounded-lg w-full text-right",
                      sex === "woman" && "text-fuchsia-400	 bg-gray-100"
                    )}
                    onClick={() => {
                      setSex("woman");
                      setDropDown(false);
                      setErrorDrop(false);
                    }}
                  >
                    زن
                  </button>
                </div>
              )}
              {errorDrop && !dropDown && (
                <p className="text-xl mt-1 absolute top-20 text-red-500 font-semibold">
                  تعیین جنسیت الزامی است.
                </p>
              )}
            </div>
          </div>
          <div className="mt-14">
            <Button size="lg" label="ثبت کاربر" />
          </div>
        </div>
      </form>
    </div>
  );
};
export default Create;
