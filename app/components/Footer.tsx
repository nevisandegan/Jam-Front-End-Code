import Image from "next/image";
import React from "react";

const dataFooter = [
  {
    title: "پشتیبانی",
    list: ["تماس با ما", "سوالات متداول", "دبیرخانه"],
  },
  {
    title: "شبکه های اجتماعی",
    list: ["  آپارات"],
  },
];

const Footer = () => {
  return (
    <div className="flex justify-between px-40 py-10  shadow-xl">
      <div className="flex gap-20 ">
        {dataFooter.map((el) => (
          <div className="flex flex-col gap-4" key={el.title}>
            <p className="text-2xl text-gray-300 font-semibold">{el.title}</p>
            {el.list.map((el) => (
              <p className="text-2xl font-semibold" key={el}>
                {el}
              </p>
            ))}
          </div>
        ))}
      </div>
      <div className="  ">
        <Image
          src="/logo.png"
          alt="logoIranian"
          width={300}
          height={300}
          priority={true}
        />
      </div>
    </div>
  );
};

export default Footer;
