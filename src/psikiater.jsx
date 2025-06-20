import React from "react";
import { Briefcase, ThumbsUp } from "lucide-react";

const dummyDoctors = [
  { name: "Dr. XXXXXXXXX M. Biomed, Sp. KJ", price: 70000, exp: "10 tahun", rating: "97%" },
  { name: "Dr. XXXXXXXXX M. Biomed, Sp. KJ", price: 70000, exp: "20 tahun", rating: "97%" },
  { name: "Dr. XXXXXXXXX M. Ked, Sp. KJ", price: 40000, exp: "9 tahun", rating: "97%" },
  { name: "Dr. XXXXXXXXX Sp. KJ", price: 70000, exp: "10 tahun", rating: "97%" },
  { name: "Dr. XXXXXXXXX Sp. KJ", price: 40000, exp: "8 tahun", rating: "97%" }
];

export default function Psikiater() {
  return (
    <div className="min-h-screen bg-[#b2dff3]">
      <div className="px-4 pt-4 pb-2">
        <h2 className="text-3xl font-bold stroke-text text-yellow-400 mb-4">Psikiater</h2>

        {/* Filter */}
        <div className="flex gap-2 flex-wrap mb-4 text-sm items-center">
          <span className="font-medium text-black">Filter berdasarkan</span>
          <select className="bg-white border px-2 py-1 rounded text-sm">
            <option>Keahlian</option>
          </select>
          <select className="bg-white border px-2 py-1 rounded text-sm">
            <option>Pengalaman</option>
          </select>
          <select className="bg-white border px-2 py-1 rounded text-sm">
            <option>Jenis Kelamin</option>
          </select>
          <select className="bg-white border px-2 py-1 rounded text-sm">
            <option>Harga</option>
          </select>
          <button className="text-xs text-sky-900 ml-auto underline">Hapus filter</button>
        </div>
      </div>

      {/* List Dokter */}
      <div className="flex flex-col">
        {dummyDoctors.map((d, i) => (
          <div
            key={i}
            className="bg-white px-4 py-4 border-b border-gray-300 flex items-start justify-between"
          >
            <div className="flex gap-4 items-start">
              <div className="w-20 h-20 bg-gray-300 rounded-md shrink-0" />
              <div>
                <p className="font-bold text-black leading-tight">{d.name}</p>
                <p className="text-sm text-gray-700 mb-2">Sp. Jiwa</p>
                <div className="flex gap-2 text-xs text-black font-medium">
                  <span className="flex items-center gap-1 bg-gray-200 px-2 py-0.5 rounded-md">
                    <Briefcase className="w-4 h-4" /> {d.exp}
                  </span>
                  <span className="flex items-center gap-1 bg-gray-200 px-2 py-0.5 rounded-md">
                    <ThumbsUp className="w-4 h-4" /> {d.rating}
                  </span>
                </div>
              </div>
            </div>

            <div className="text-right space-y-2 pl-4">
              <p className="text-[#f78181] font-bold text-sm">Rp{d.price.toLocaleString()}</p>
              <button className="bg-[#f8a8a8] text-black text-xs font-medium px-3 py-1 rounded-[10px] shadow-md active:scale-95 transition-all">
                Jadwalkan Nanti
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
