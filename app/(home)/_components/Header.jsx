"use client";

import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import { UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const { user } = useUser();
  useEffect(() => {}, [user]);
  return (
    <div className="ml-64 p-6 border-b flex items-center justify-between">
      <SearchBar />
      {!user ? (
        <button onClick={() => router.push("./sign-in")}>Login</button>
      ) : (
        <UserButton />
      )}
    </div>
  );
};

export default Header;
