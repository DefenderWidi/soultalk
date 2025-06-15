import React from "react";
import { useNavigate } from "react-router-dom";

function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen overflow-hidden bg-white flex items-center justify-center">
      <div className="w-[390px] h-full bg-[#b5ced9] flex flex-col items-center justify-center text-center px-6">
        
        <img
          src="/soultalk.png"
          alt="Soul Talk"
          className="w-64 mb-6"
        />

        <img
          src="/illustration.png"
          alt="Ilustrasi"
          className="w-60 mb-10"
        />

        <button
          className="bg-yellow-300 hover:bg-yellow-400 text-black font-semibold px-10 py-3 rounded-full shadow-md border border-black"
          onClick={() => navigate("/login")}
        >
          MULAI
        </button>
      </div>
    </div>
  );
}

export default WelcomeScreen;
