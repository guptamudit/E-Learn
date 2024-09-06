import React from "react";
import SidebarNav from "../_components/SidebarNav";
import Header from "../_components/header";
const homeLayout = ({ children }) => {
  return (
    <div>
      <div className="h-full w-64 flex-col fixed inset-y-0 z-50">
        <SidebarNav />
      </div>
      <Header />
      {children}
    </div>
  );
};

export default homeLayout;
