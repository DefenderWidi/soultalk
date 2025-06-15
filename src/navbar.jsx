import React from "react";
import {
  ArrowLeftCircle,
  MessageCircle,
  User,
  Home,
  Settings,
} from "lucide-react";

function Navbar() {
  return (
    <div className="bg-white border-t border-gray-300 px-4 py-2 flex justify-between text-xs font-semibold text-gray-700">
      <div className="flex flex-col items-center gap-1">
        <ArrowLeftCircle className="w-5 h-5 text-purple-700" />
        <span>Kembali</span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <MessageCircle className="w-5 h-5 text-purple-700" />
        <span>Soulmate</span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <User className="w-5 h-5 text-purple-700" />
        <span>Profil</span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <Home className="w-5 h-5 text-orange-500" />
        <span>Beranda</span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <Settings className="w-5 h-5 text-gray-600" />
        <span>Pengaturan</span>
      </div>
    </div>
  );
}

export default Navbar;
