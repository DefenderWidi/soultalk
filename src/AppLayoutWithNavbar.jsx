import React from "react";
import Navbar from "./navbar";

function AppLayout({ children }) {
  return (
    <div className="w-full h-screen bg-white flex items-center justify-center overflow-hidden">
      <div className="w-[390px] h-full bg-[#b5ced9] flex flex-col overflow-hidden">
        
        {/* Konten scrollable */}
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>

        {/* Navbar tetap di bawah dalam frame */}
        <Navbar />
      </div>
    </div>
  );
}

export default AppLayout;
