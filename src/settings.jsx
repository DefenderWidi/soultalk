import React from "react";
import { Helmet } from "react-helmet"; // gunakan ini jika mau ganti title tab
import {
  HelpCircle,
  Languages,
  CreditCard,
  CalendarDays,
  User2,
} from "lucide-react";

export default function Settings() {
  return (
    <div className="w-full min-h-screen bg-white pb-24">
      <Helmet>
        <title>Pengaturan - SoulTalk</title>
      </Helmet>

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300">
        <img src="/soultalk-logo.png" alt="Logo SoulTalk" className="h-8" />
        <div className="flex items-center gap-3">
          <button className="text-sm">CARI</button>
          <img
            src="/profile-icon.png"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Title */}
      <div className="px-4 mt-4 mb-2">
        <h1 className="text-[22px] font-extrabold stroke-text text-yellow-400">
          Pengaturan
        </h1>
      </div>

      {/* List Items */}
      <div className="divide-y divide-black/20 border-y border-black/20 text-sm font-semibold">
        <Item icon={<HelpCircle size={20} />} text="Pusat Bantuan" />
        <Item icon={<Languages size={20} />} text="Bahasa Aplikasi" />
        <Item icon={<CreditCard size={20} />} text="Metode Pembayaran" />
        <Item icon={<CalendarDays size={20} />} text="Atur Langganan" />
        <Item icon={<User2 size={20} />} text="Pengaturan Akun" />
      </div>

      {/* Logout Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-green-400 text-black font-bold px-8 py-2 rounded-full shadow-md active:scale-95 transition-all">
          LOG OUT
        </button>
      </div>
    </div>
  );
}

function Item({ icon, text }) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer">
      <div className="text-black">{icon}</div>
      <p className="text-black">{text}</p>
    </div>
  );
}
