import React from "react";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="ml-64 p-6 border-b flex items-center justify-between">
      <SearchBar />
      <button>Login</button>
    </div>
  );
};

export default Header;
