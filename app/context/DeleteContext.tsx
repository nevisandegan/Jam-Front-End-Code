"use client"

import { useState, createContext, ReactNode, useContext } from "react";

type DeleteContextType = {
  deleteUser: boolean;
  setDeleteUser: React.Dispatch<React.SetStateAction<boolean>>
};
const DeleteContext = createContext<DeleteContextType | null>(null);

const DeleteContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [deleteUser, setDeleteUser] = useState(false);
  return (
    <DeleteContext.Provider value={{deleteUser,setDeleteUser}}>
      {children}
    </DeleteContext.Provider>
  );
};

function useDelete() {
  const context = useContext(DeleteContext);
  if (context === undefined) throw new Error("خارج از محدوده است");
  return context;
}

export { DeleteContextProvider, useDelete };
