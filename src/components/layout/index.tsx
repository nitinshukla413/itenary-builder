import React, { ReactNode } from 'react';
import SideNavBar from "../sideNav";

const Layout = ({ children }: { children: any }) => {
  return (
    <div className="flex w-full h-full">
      <SideNavBar />
      <div className="flex w-[90vw] px-10 py-8">
        {children}
      </div>
    </div>
  );
};

export default Layout;
