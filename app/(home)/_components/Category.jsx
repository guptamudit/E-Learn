"use client";

import React, { useState } from "react";

const Category = () => {
  const options = [
    {
      id: 1,
      name: "All",
      value: "all",
    },
    {
      id: 2,
      name: "React Js",
      value: "reactjs",
    },
    {
      id: 3,
      name: "Next Js",
      value: "nextjs",
    },
    {
      id: 4,
      name: "Tailwind CSS",
      value: "tailwindcss",
    },
    {
      id: 5,
      name: "FireBase",
      value: "firebase",
    },
    {
      id: 6,
      name: "Data Science",
      value: "datascience",
    },
    {
      id: 7,
      name: "Core Subjects",
      value: "coresubjects",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex gap-5">
      {options.map((item, index) => (
        <button
          onClick={() => setActiveIndex(index)}
          key={index}
          className={`border p-2 px-4 text-[15px] rounded-lg hover:border-purple-400  font-semibold hover:bg-gray-50  ${
            activeIndex == index
              ? "border-purple-500 bg-purple-50 text-purple-800"
              : ""
          }`}
        >
          <h2>{item.name}</h2>
        </button>
      ))}
    </div>
  );
};

export default Category;
