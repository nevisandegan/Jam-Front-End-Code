"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ElementType, JSXElementConstructor } from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  label: string;
}

const SidebarButton: React.FC<ButtonProps> = ({ href, children, label }) => {
  const pathname = usePathname();
  return (
    <Link href={href}>
      <div
        className={clsx(
          "flex hover:text-fuchsia-400 font-semibold mb-4 text-2xl px-9 py-4 gap-5 items-center ",
          pathname === href && "text-fuchsia-400	 bg-gray-100"
        )}
      >
        {children}
        <span>{label}</span>
      </div>
    </Link>
  );
};

export default SidebarButton;
