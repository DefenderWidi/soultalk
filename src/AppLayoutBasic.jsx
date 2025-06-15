import React from "react";

function AppLayoutBasic({ children }) {
  return (
    <div className="w-full h-screen bg-white flex items-center justify-center overflow-hidden">
      <div className="w-[390px] h-full bg-[#b5ced9] overflow-hidden">
        {children}
      </div>
    </div>
  );
}

export default AppLayoutBasic;
