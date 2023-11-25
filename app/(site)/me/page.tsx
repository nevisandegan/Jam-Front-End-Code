import React from "react";

const Me = () => {
  return (
    <>
      <h2 className="font-bold"> حساب کاربری</h2>
      <div className="flex flex-col py-8 px-12 border  rounded-3xl gap-5 mt-3">
        <div className="flex flex-col">
          <label htmlFor="username" className="text-xl font-bold">
            شناسه کاربری
          </label>
          <input
            type="text"
            disabled
            id="username"
            className="border rounded-lg w-full text-xl p-3 mt-4"
          />
        </div>
        <div>
          <label htmlFor="fullname" className="text-xl font-bold">
            نام و نام خانوادگی{" "}
          </label>
          <input
            type="text"
            disabled
            id="fullname"
            className="border rounded-lg w-full text-xl p-3 mt-4"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-xl font-bold">
            ایمیل
          </label>
          <input
            type="email"
            disabled
            id="email"
            className="border rounded-lg w-full text-xl p-3 mt-4"
          />
        </div>
        <div>
          <label htmlFor="address" className="text-xl font-bold">
            آدرس
          </label>
          <input
            type="text"
            disabled
            id="address"
            className="border rounded-lg w-full text-xl p-3 mt-4"
          />
        </div>
      </div>
    </>
  );
};

export default Me;
