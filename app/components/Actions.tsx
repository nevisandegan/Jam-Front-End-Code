"use client";

import { LuTrash } from "react-icons/lu";
import { IoEyeOutline } from "react-icons/io5";
import Link from "next/link";
import { useDelete } from "../context/DeleteContext";
import Modal from "./Modal";

interface PropsId {
  id: string;
}

const Actions: React.FC<PropsId> = ({ id }) => {
  const context = useDelete();


  function handleDelete() {
    context?.setDeleteUser(true);
  }

  function handleDeleteModal(){
    console.log("pak shod")
    context?.setDeleteUser(false);

    //axios
  }

  return (
    <>
      <div className="col-span-2 font-semibold flex gap-6   pr-3">
        <Link href={`/user/edit/${id}`}>
          <IoEyeOutline size={20} color="blue" />
        </Link>
        <button onClick={handleDelete}>
          <LuTrash size={18} color="red" />
        </button>
      </div>
      {context?.deleteUser && (
        <Modal
          labelButton="حذف"
          title="حذف کاربر"
          subTitle="   آیا از حذف کاربر انتخابی اطمینان دارید ؟"
          onClick={handleDeleteModal}
        />
      )}
    </>
  );
};

export default Actions;
