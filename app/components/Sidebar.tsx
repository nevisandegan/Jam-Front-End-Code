

import Link from "next/link";
import { IoPersonOutline } from "react-icons/io5";
import SidebarButton from "./SidebarButton";
import { CgNotes } from "react-icons/cg";
import { BsChatText } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";

const buttonSidebar = [
  {
    label: "حساب کاربری",
    icon: IoPersonOutline,
    href: "/me",
  },
  {
    label: " مدیریت کارمندان",
    icon: CgNotes,
    href: "/user/management",
  },
  {
    label: " درباره ما",
    icon: BsChatText,
    href: "/about",
  },
];
 const Sidebar =  () => {
    
   return (
     <div className="bg-white h-[75%]  w-1/5 rounded-xl py-10">
       <div className="flex flex-col h-full">
         <div className="flex-1">
           {buttonSidebar.map((el) => {
             return (
               <SidebarButton href={el.href} label={el.label} key={el.icon}>
                 <el.icon />
               </SidebarButton>
             );
           })}
         </div>
         <div className="  px-9 hover:text-fuchsia-400">
           <div className="flex pt-8 font-semibold  items-center border-t justify-center gap-5">
             <IoIosLogOut size={24}/>
             <button className=" w-full text-right text-2xl">خروج از حساب کاربری</button>
           </div>
         </div>
       </div>
     </div>
   );
 };

export default Sidebar;
