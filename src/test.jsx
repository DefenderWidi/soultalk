import React, { useRef } from "react";
import Header from "./header";

export default function Test() {
  const scrollRef = useRef(null);

  return (
    <div className="min-h-screen bg-[#c9e2ea] pb-24">
      <Header />

      <div className="p-4">
        <h1 className="text-[18px] font-extrabold text-yellow-500 stroke-text mb-1">
          Ambil Tes Kesehatan Mental
        </h1>
        <p className="text-[11px] text-black mb-4 leading-tight">
          Cek kesehatan mentalmu, langkah awal memahami diri.
        </p>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth pb-3"
          >
            {/* Tes Stress */}
            <div className="flex-none w-64 bg-white rounded-2xl border border-black shadow-md p-4">
              <img
                src="/stress.png"
                alt="Tes Stress"
                className="w-full h-36 object-contain mb-2"
              />
              <h2 className="text-lg font-extrabold text-yellow-600 stroke-text mb-1">
                Tes Stress
              </h2>
              <button className="bg-yellow-300 text-black px-4 py-1 text-xs rounded-full font-bold shadow mb-1 flex items-center gap-1">
                Ambil Tes <span className="text-lg">➔</span>
              </button>
              <p className="text-[11px] text-gray-700">
                Cek kesehatan mentalmu, langkah awal memahami diri.
              </p>
            </div>

            {/* Tes Kecemasan */}
            <div className="flex-none w-64 bg-white rounded-2xl border border-black shadow-md p-4">
              <img
                src="/kecemasan.png"
                alt="Tes Kecemasan"
                className="w-full h-36 object-contain mb-2"
              />
              <h2 className="text-lg font-extrabold text-yellow-600 stroke-text mb-1">
                Tes Gangguan Kecemasan
              </h2>
              <button className="bg-yellow-300 text-black px-4 py-1 text-xs rounded-full font-bold shadow mb-1 flex items-center gap-1">
                Ambil Tes <span className="text-lg">➔</span>
              </button>
              <p className="text-[11px] text-gray-700">
                Cek kesehatan mentalmu, langkah awal memahami diri.
              </p>
            </div>

            {/* Tes Depresi */}
            <div className="flex-none w-64 bg-white rounded-2xl border border-black shadow-md p-4">
              <img
                src="/depresi.png"
                alt="Tes Depresi"
                className="w-full h-36 object-contain mb-2"
              />
              <h2 className="text-lg font-extrabold text-yellow-600 stroke-text mb-1">
                Tes Depresi
              </h2>
              <button className="bg-yellow-300 text-black px-4 py-1 text-xs rounded-full font-bold shadow mb-1 flex items-center gap-1">
                Ambil Tes <span className="text-lg">➔</span>
              </button>
              <p className="text-[11px] text-gray-700">
                Cek kesehatan mentalmu, langkah awal memahami diri.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
