import React from "react";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div className="root-layout overflow-hidden">
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
