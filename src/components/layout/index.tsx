import React, { ReactNode } from 'react';
import SideNavBar from "../sideNav";

const Layout = ({ children }: { children: any }) => {
  return (
    <div className=" flex w-full h-full bg-[#F7F7F9] items-center justify-center ">
     
      <div className="flex w-[90vw] max-md:w-full max-md:px-2 px-10 py-20">
        {children}
      </div>
    </div>
  );
};

export default Layout;
