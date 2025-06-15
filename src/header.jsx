import React from "react";
import { Search } from "lucide-react";

function Header() {
  return (
    <div className="w-full flex items-center justify-between px-4 py-3 bg-white shadow-sm">
      {/* Logo kiri */}
      <img
        src="/soultalk.png"
        alt="SoulTalk Logo"
        className="w-24 object-contain"
      />

      {/* Kanan: search + avatar */}
      <div className="flex items-center gap-5">
        {/* Icon Search (diperbesar) */}
        <button>
          <Search className="w-6 h-6 text-gray-800" />
        </button>

        {/* Avatar (diperbesar) */}
        <img
          src="/illustration.png"
          alt="Avatar"
          className="w-10 h-10 rounded-full border border-gray-400 object-cover"
        />
      </div>
    </div>
  );
}

export default Header;
