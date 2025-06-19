import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ArrowLeftCircle,
  MessageCircle,
  User,
  Home,
  Settings,
} from "lucide-react";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="bg-white border-t border-gray-300 px-4 py-2 flex justify-between text-xs font-semibold text-gray-700">
      {/* Kembali */}
      <button onClick={() => navigate(-1)} className="flex flex-col items-center gap-1">
        <ArrowLeftCircle className="w-5 h-5 text-purple-700" />
        <span>Kembali</span>
      </button>

      {/* Soulmate */}
      <button onClick={() => navigate("/soulmate")} className="flex flex-col items-center gap-1">
        <MessageCircle className="w-5 h-5 text-purple-700" />
        <span>Soulmate</span>
      </button>

      {/* Profil */}
      <button onClick={() => navigate("/profil")} className="flex flex-col items-center gap-1">
        <User className="w-5 h-5 text-purple-700" />
        <span>Profil</span>
      </button>

      {/* Beranda */}
      <button onClick={() => navigate("/home")} className="flex flex-col items-center gap-1">
        <Home
          className={`w-5 h-5 ${isActive("/home") ? "text-orange-500" : "text-gray-600"}`}
        />
        <span className={isActive("/home") ? "text-orange-500" : "text-gray-600"}>
          Beranda
        </span>
      </button>

      {/* Pengaturan */}
      <button onClick={() => navigate("/settings")} className="flex flex-col items-center gap-1">
        <Settings
          className={`w-5 h-5 ${isActive("/settings") ? "text-yellow-600" : "text-gray-600"}`}
        />
        <span className={isActive("/settings") ? "text-yellow-600" : "text-gray-600"}>
          Pengaturan
        </span>
      </button>
    </div>
  );
}

export default Navbar;
