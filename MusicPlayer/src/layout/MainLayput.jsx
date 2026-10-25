import React from "react";
import { Outlet } from "react-router";

const MainLayput = () => {
  return (
    <div className=" flex min-h-screen w-full bg-[#100f12] ">
      <Outlet />
    </div>
  );
};

export default MainLayput;
