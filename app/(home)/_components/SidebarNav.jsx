"use client";

import { LayoutDashboard, Newspaper, Search, SquarePlus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const SidebarNav = () => {
  const menuList = [
    {
      id: 1,
      name: "Browse",
      icon: Search,
      path: "/browse",
    },
    {
      id: 2,
      name: "DashBoard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: SquarePlus,
      path: "/upgrade",
    },
    {
      id: 4,
      name: "NewsLetter",
      icon: Newspaper,
      path: "/newletter",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="h-full bg-white border-r flex flex-col overflow-y-auto shadow-md">
      <div className="p-5 border-b">
        <Image src="logoipsum-300.svg" alt="logo" width={60} height={70} />
      </div>
      <div className="flex flex-col">
        {menuList.map((item, index) => (
          <div
            key={item.id}
            className={`flex gap-2 items-center p-4 px-6 text-gray-700 hover:bg-gray-100 cursor-pointer ${
              activeIndex == index ? "bg-purple-50 text-purple-800" : null
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <item.icon />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarNav;
