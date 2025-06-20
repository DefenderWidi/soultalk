import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./header";
import { MessageCircle } from "lucide-react";

const bannerImages = [
  "/banner1.png",
  "/banner2.png",
  "/banner3.png",
  "/banner4.png",
  "/banner5.png",
];

const topics = {
  stress: {
    title: "Stress",
    description: "Stres adalah respons tubuh dan pikiran terhadap tekanan atau tuntutan, baik dari luar (seperti pekerjaan, sekolah, konflik) maupun dari dalam diri (seperti kecemasan atau ekspektasi pribadi). Stres bisa berdampak positif (memotivasi) atau negatif (mengganggu kesehatan fisik dan mental), tergantung seberapa lama dan bagaimana kita menghadapinya.",
    image: "/stress.png",
    imgClass: "w-45 bottom-0 -right-4",
  },
  kecemasan: {
    title: "Gangguan Kecemasan",
    description: "Gangguan kecemasan adalah kondisi kesehatan mental ketika seseorang mengalami rasa cemas atau takut yang berlebihan, berlangsung terus-menerus, dan mengganggu aktivitas sehari-hari. Menurut American Psychiatric Association (APA), gangguan kecemasan meliputi berbagai jenis, seperti generalized anxiety disorder (GAD), panic disorder, social anxiety disorder, dan phobias. Gejala umumnya termasuk rasa gelisah, tegang, sulit berkonsentrasi, jantung berdebar, dan gangguan tidur.",
    image: "/kecemasan.png",
   imgClass: "w-40 bottom-6 -right-5",
  },
  depresi: {
    title: "Depresi",
    description: "Depresi adalah gangguan suasana hati yang ditandai dengan perasaan sedih yang mendalam, kehilangan minat atau kesenangan dalam aktivitas sehari-hari, serta gangguan dalam berpikir, tidur, dan energi, yang berlangsung selama minimal dua minggu atau lebih. Menurut World Health Organization (WHO), depresi adalah penyebab utama disabilitas secara global dan dapat memengaruhi siapa saja, termasuk anak-anak dan remaja. Gejala lainnya meliputi rasa putus asa, perubahan nafsu makan, kelelahan, dan pikiran untuk menyakiti diri.",
    image: "/depresi.png",
    imgClass: "w-40 bottom-0 -right-4",
  },
};

function Home() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [selectedTopic, setSelectedTopic] = useState("stress");
  const layananRef = useRef(null);
  const [activeLayanan, setActiveLayanan] = useState(0);
  const navigate = useNavigate();

  const handleScrollLayanan = () => {
  if (!layananRef.current) return;

  const scrollLeft = layananRef.current.scrollLeft;
  const cardWidth = 272; // width: w-64 (256px) + gap-3 (12px)
  const index = Math.round(scrollLeft / cardWidth);
  setActiveLayanan(index);
};

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <Header />

     <div className="flex-1 overflow-y-auto overflow-x-hidden px-4 pb-24 bg-[#b5ced9]">
        {/* Hero Section */}
        <div className="relative w-full h-48 mt-4 mb-6 overflow-hidden rounded-xl shadow">
          <img
            src={bannerImages[currentBanner]}
            alt="Hero Banner"
            className="w-full h-full object-cover transition-all duration-500"
          />
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
  {Object.entries(topics).map(([key, topic]) => {
    const isActive = selectedTopic === key;

    return (
      <div
        key={key}
        onClick={() => setSelectedTopic(key)}
        className={`cursor-pointer relative flex flex-col items-center transition-all duration-300 ${
          isActive ? "scale-105" : "opacity-80 hover:opacity-100"
        }`}
      >
        <div
          className={`w-16 h-16 rounded-full border overflow-hidden z-10 shadow-md ${
            isActive
              ? "bg-yellow-400 border-yellow-500 ring-2 ring-yellow-500"
              : "bg-white border-gray-300"
          }`}
        >
          <img
            src={topic.image}
            alt={topic.title}
            className="w-full h-full object-contain"
          />
        </div>

        <div
          className={`rounded-xl w-full pt-8 -mt-6 flex flex-col items-center justify-center h-20 shadow-md ${
            isActive ? "bg-yellow-500 text-white" : "bg-yellow-300"
          }`}
        >
          <p
            className={`text-[13px] font-bold stroke-text text-center leading-tight ${
              isActive ? "text-white" : "text-black"
            }`}
          >
            {topic.title.includes(" ") ? (
              <>
                {topic.title.split(" ")[0]} <br />
                {topic.title.split(" ").slice(1).join(" ")}
              </>
            ) : (
              topic.title
            )}
          </p>
        </div>
      </div>
    );
  })}
</div>
        </div>

        {/* Detail Konten Topik */}
        <div className="relative mb-10">
          <div className="bg-white rounded-[30px] shadow-lg px-5 py-3 pr-32">
            <h3 className="text-xl font-extrabold mb-1 stroke-text">
              {topics[selectedTopic].title}
            </h3>
            <p className="text-[10px] text-black leading-relaxed mb-4">
              {topics[selectedTopic].description}
            </p>
           <button
  onClick={() => navigate("/test")}
  className="bg-yellow-300 text-black px-6 py-1.5 rounded-full font-extrabold text-[11px] shadow-lg stroke-text"
>
  AMBIL TINDAKAN
</button>
          </div>
          <img
  src={topics[selectedTopic].image}
  alt={`${topics[selectedTopic].title} Illustration`}
  className={`absolute object-contain z-10 ${topics[selectedTopic].imgClass}`}
/>
        </div>

{/* Layanan Lainnya */}
<div className="mb-6">
<h3 className="font-extrabold text-lg mb-2 text-yellow-400 stroke-text">
  Layanan Lainnya
</h3>
  <div className="relative">
    <div
      ref={layananRef}
      onScroll={handleScrollLayanan}
      className="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth pb-3"
    >
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="flex-none w-64 h-36 bg-white rounded-2xl shadow-md overflow-hidden relative"
        >
          <img
            src={`/layanan${i}.png`}
            alt={`Layanan ${i}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>

{/* Dot Pagination */}
<div className="flex justify-center mt-2 gap-1">
  {[0, 1, 2].map((i) => (
    <div
      key={i}
      className={`w-2.5 h-2.5 rounded-full transition-all ${
        activeLayanan === i ? "bg-yellow-400" : "bg-gray-300"
      }`}
    />
  ))}
</div>
  </div>
</div>


      {/* Edukasi */}
<div className="flex items-center justify-center gap-2 mb-4">
  <MessageCircle size={20} className="text-black" />
  <p className="text-lg font-extrabold stroke-text">Pahami perbedaan antar Ahli</p>
</div>

  {/* Kartu Psikiater */}
      <div
        onClick={() => navigate("/psikiater")}
        className="bg-white rounded-2xl px-4 py-3 mb-4 shadow-md flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-100 transition"
      >
        <div className="flex items-center gap-4">
          <img src="/psikiater.png" alt="Psikiater" className="w-20 h-20 object-contain" />
          <div>
            <h4 className="text-lg font-bold stroke-text text-yellow-400">Pilih Psikiater</h4>
            <p className="text-sm text-black font-medium">Konsultasi intensif dan resep obat</p>
          </div>
        </div>
        <div className="text-black text-2xl font-bold">{`>`}</div>
      </div>

      {/* Kartu Psikolog */}
      <div
        onClick={() => navigate("/psikolog")}
        className="bg-white rounded-2xl px-4 py-3 mb-10 shadow-md flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-100 transition"
      >
        <div className="flex items-center gap-4">
          <img src="/psikolog.png" alt="Psikolog" className="w-20 h-20 object-contain" />
          <div>
            <h4 className="text-lg font-bold stroke-text text-yellow-400">Pilih Psikolog</h4>
            <p className="text-sm text-black font-medium">Konsultasi psikologi dan konseling</p>
          </div>
        </div>
        <div className="text-black text-2xl font-bold">{`>`}</div>
      </div>

{/* Komunikasi Pilihanmu */}
<div className="mt-6 mb-10">
  <h3 className="text-xl font-bold stroke-text text-yellow-400 text-center mb-1">
    Komunikasi dengan cara pilihanmu!
  </h3>
  <p className="text-sm text-black text-center mb-3">Konsultasi senyamanmu ajaaa!</p>

  <div className="overflow-x-auto no-scrollbar scroll-smooth">
    <div className="flex gap-4 w-max">
      {[
        {
          title: "Kounseling Via Chat",
          img: "/viachat.png",
          link: "#",
        },
        {
          title: "Kounseling Via Panggilan",
          img: "/viapanggilan.png",
          link: "#",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="w-64 flex-none bg-white rounded-2xl border border-black shadow-md p-4 flex flex-col justify-between"
        >
          <img src={item.img} alt={item.title} className="w-full h-40 object-contain mb-4" />
          <div className="flex-1">
            <h4 className="text-[18px] font-bold stroke-text text-yellow-400 mb-2">{item.title}</h4>
            <a
              href={item.link}
              className="inline-block bg-yellow-300 px-4 py-1 text-sm font-bold rounded-full text-black shadow hover:bg-yellow-400"
            >
              Selengkapnya <span className="ml-1 font-black">➤</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
      </div>
    </div>
  );
}

export default Home;
