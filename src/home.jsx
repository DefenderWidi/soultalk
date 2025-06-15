import React, { useState, useEffect } from "react";
import Header from "./header";

const bannerImages = [
  "/banner1.png",
  "/banner2.png",
  "/banner3.png",
  "/banner4.png",
  "/banner5.png",
];

function Home() {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <Header />

      <div className="flex-1 overflow-y-auto px-4 pb-24 bg-[#b5ced9]">
      {/* Hero Section: Carousel + Overlay + Frame */}
<div className="relative w-full h-48 mt-4 mb-6 overflow-hidden rounded-xl shadow">
  {/* Carousel Image */}
  <img
    src={bannerImages[currentBanner]}
    alt="Hero Banner"
    className="w-full h-full object-cover transition-all duration-500"
  />

  {/* SoulTalk overlay text */}
  <img
    src="/soultalk-text-banner.png"
    alt="SoulTalk Text"
    className="absolute top-1/2 left-1/2 w-3/4 -translate-x-1/2 -translate-y-1/2 z-20"
  />
</div>

        {/* Topik Konseling */}
        <div className="mb-6">
            <img
                src="/headerjelajahi.png"
                alt="Jelajahi - Topik Konseling Umum"
                className="w-full h-auto mb-4"
            />

          <div className="grid grid-cols-3 gap-3">
  {/* Stress */}
  <div className="relative flex flex-col items-center">
    <div className="w-16 h-16 rounded-full bg-white border border-gray-300 overflow-hidden z-10">
      <img src="/stress.png" alt="Stress" className="w-full h-full object-contain" />
    </div>
    <div className="bg-yellow-300 rounded-xl w-full pt-8 -mt-6 flex flex-col items-center justify-center h-20 shadow-md">
      <p className="text-sm font-bold stroke-text">Stress</p>
    </div>
  </div>

  {/* Gangguan Kecemasan */}
  <div className="relative flex flex-col items-center">
    <div className="w-16 h-16 rounded-full bg-white border border-gray-300 overflow-hidden z-10">
      <img src="/kecemasan.png" alt="Kecemasan" className="w-full h-full object-contain" />
    </div>
    <div className="bg-yellow-300 rounded-xl w-full pt-8 -mt-6 flex flex-col items-center justify-center h-20 shadow-md">
      <p className="text-[11px] font-bold stroke-text leading-tight text-center">
        Gangguan<br />Kecemasan
      </p>
    </div>
  </div>

  {/* Depresi */}
  <div className="relative flex flex-col items-center">
    <div className="w-16 h-16 rounded-full bg-white border border-gray-300 overflow-hidden z-10">
      <img src="/depresi.png" alt="Depresi" className="w-full h-full object-contain" />
    </div>
    <div className="bg-yellow-300 rounded-xl w-full pt-8 -mt-6 flex flex-col items-center justify-center h-20 shadow-md">
      <p className="text-sm font-bold stroke-text">Depresi</p>
    </div>
  </div>
</div>
        </div>

       <div className="relative bg-white rounded-[24px] shadow-lg px-5 py-4 mb-6 overflow-hidden flex items-start">
  {/* Konten Kiri */}
  <div className="flex-1 z-10 pr-3">
    <h3 className="text-xl font-extrabold stroke-text mb-2">Stress</h3>
    <p className="text-[11px] text-gray-800 leading-relaxed">
      Stres adalah respons tubuh dan pikiran terhadap tekanan atau tuntutan, baik dari luar (seperti pekerjaan, sekolah, konflik) maupun dari dalam diri (seperti kecemasan atau ekspektasi pribadi). Stres bisa berdampak positif (memotivasi) atau negatif (mengganggu kesehatan fisik dan mental), tergantung seberapa lama dan bagaimana kita menghadapinya.
    </p>

    <button className="bg-yellow-300 hover:bg-yellow-400 px-6 py-2 rounded-full shadow-md mt-4 text-sm font-extrabold stroke-text">
      AMBIL TINDAKAN
    </button>
  </div>

  {/* Ilustrasi */}
  <img
    src="/stress.png"
    alt="Stress"
    className="absolute -bottom-2 -right-2 w-32 sm:w-36 object-contain"
    style={{ zIndex: 5 }}
  />
</div>

        {/* Layanan Lainnya */}
        <div className="mb-4">
          <h3 className="font-bold text-sm mb-2 text-gray-800">Layanan Lainnya</h3>
          <div className="bg-white h-24 rounded-xl shadow-inner mb-4" />
        </div>

        {/* Edukasi */}
        <p className="text-xs font-semibold text-center text-yellow-700 mb-2 flex items-center justify-center gap-1">
          🗨️ Pahami perbedaan antar Ahli
        </p>

        {/* Kartu Psikiater */}
        <div className="bg-white rounded-xl px-4 py-3 mb-3 shadow">
          <h4 className="text-sm font-bold mb-1">Pilih Psikiater</h4>
          <p className="text-xs text-gray-600">Konsultasi intensif dan resep obat</p>
        </div>

        {/* Kartu Psikolog */}
        <div className="bg-white rounded-xl px-4 py-3 mb-10 shadow">
          <h4 className="text-sm font-bold mb-1">Pilih Psikolog</h4>
          <p className="text-xs text-gray-600">Pendampingan & terapi non-obat</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
