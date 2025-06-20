import React from "react";
import { Helmet } from "react-helmet";
import {
  HelpCircle,
  Languages,
  CreditCard,
  CalendarDays,
  User2,
} from "lucide-react";
import Header from "./header";

export default function Settings() {
  return (
    <div className="w-full h-screen flex flex-col bg-white">
      <Helmet>
        <title>Pengaturan - SoulTalk</title>
      </Helmet>

      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-white">
        <Header />
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-4 pb-24">
        <h1 className="text-[22px] font-extrabold stroke-text text-yellow-400 mt-4 mb-2">
          Pengaturan
        </h1>

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
