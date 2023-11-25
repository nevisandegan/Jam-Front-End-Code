'use client'


import React from "react";

import Actions from "./Actions";



const data = [
  {
    id: "۱",
    fullname: "حسین نویسندگان",
    username: "091929290390",
    address: "تهران تهرانپارس میدان پروین  ",
  },
];

const Users = () => {



   
  return (
    <>
      {data.map((el) => (
          <div key={el.id}  className="grid grid-cols-12 items-center font-semibold justify-center text-xl  bg-stone-100 p-1 ">
            <p className="col-span-1 pr-1">{el.id}</p>
            <p className="col-span-3 pr-3">{el.fullname}</p>
            <p className="col-span-2 pr-3">{el.username} </p>
            <p className="col-span-4  overflow-ellipsis truncate w-40  pr-3">
              {el.address}{" "}
            </p>
           <Actions id={el.id}/>
          </div>
        
      ))}
    </>
  );
};

export default Users;
