import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";
import { useDelete } from "../context/DeleteContext";

interface ModalProps {
  labelButton: string;
  title: string;
  subTitle: string;
  onClick: () => void;
}

const Modal: React.FC<ModalProps> = ({
  labelButton,
  title,
  subTitle,
  onClick,
}) => {
  const deleteUser = useDelete();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutSide, true);

    return () =>
      document.removeEventListener("click", handleClickOutSide, true);
  }, []);

  const handleClickOutSide = (e: any) => {
    if (!ref.current?.contains(e.target)) {
      deleteUser?.setDeleteUser(false);
    }
  };
  return createPortal(
    <div>
      <div className="absolute w-full top-0 bottom-0 ">
        <div className="relative h-full">
          <div className="absolute top-[33%] right-[40%]">
            <div
              ref={ref}
              className="w-[400px] py-10   gap-14 text-center h-[170px] bg-white rounded-lg shadow-lg flex  flex-col items-center
            "
            >
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-bold">{title} </h3>
                <p className="text-xl text-gray-400">{subTitle}</p>
              </div>
              <div className="flex gap-4">
                <Button
                  label="انصراف"
                  variannt="secondary"
                  size="sm"
                  onClick={() => deleteUser?.setDeleteUser(false)}
                />
                <Button label={labelButton} size="sm" onClick={onClick} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,

    document.body
  );
};

export default Modal;
