import React, { useState } from "react";
import Header from "./header";

const questions = [
  { id: 1, section: "A. Gejala Fisik", question: "Saya merasa tegang di leher, pundak, atau punggung." },
  { id: 2, section: "A. Gejala Fisik", question: "Saya mengalami sakit kepala tanpa sebab yang jelas." },
  { id: 3, section: "A. Gejala Fisik", question: "Saya merasa kelelahan terus-menerus meskipun sudah cukup tidur." },
  { id: 4, section: "A. Gejala Fisik", question: "Jantung saya berdetak lebih cepat dari biasanya tanpa aktivitas fisik." },
  { id: 5, section: "B. Gejala Emosional", question: "Saya merasa gelisah atau cemas tanpa alasan jelas." },
  { id: 6, section: "B. Gejala Emosional", question: "Saya merasa mudah marah atau frustrasi." },
  { id: 7, section: "B. Gejala Emosional", question: "Saya merasa sedih atau tidak bersemangat." },
  { id: 8, section: "B. Gejala Emosional", question: "Saya merasa kewalahan oleh tanggung jawab sehari-hari." },
  { id: 9, section: "C. Gejala Perilaku", question: "Saya menarik diri dari orang lain atau kegiatan yang biasanya saya nikmati." },
  { id: 10, section: "C. Gejala Perilaku", question: "Saya mengalami perubahan pola makan (lebih banyak/mengurangi makan)." },
  { id: 11, section: "C. Gejala Perilaku", question: "Saya mengalami kesulitan tidur (insomnia/mengantuk berlebihan)." },
  { id: 12, section: "C. Gejala Perilaku", question: "Saya menggunakan rokok, alkohol, atau obat-obatan lebih banyak dari biasanya." },
  { id: 13, section: "C. Gejala Kognitif", question: "Saya kesulitan berkonsentrasi atau fokus." },
  { id: 14, section: "C. Gejala Kognitif", question: "Saya sering lupa hal-hal kecil yang biasanya mudah saya ingat." },
  { id: 15, section: "C. Gejala Kognitif", question: "Saya merasa tidak mampu menyelesaikan tugas sehari-hari." }
];

export default function TestStress() {
  const [currentIndex, setCurrentIndex] = useState(-1); // -1 = cover, 0 = petunjuk
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    if (currentIndex < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleAnswer = (index) => {
    const qId = questions[currentIndex - 1].id; // karena index 0 adalah petunjuk
    setAnswers({ ...answers, [qId]: index });
  };

  const calculateScore = () => {
    return Object.values(answers).reduce((sum, val) => sum + val, 0);
  };

  const getStressLevel = () => {
    const score = calculateScore();
    if (score <= 15) return { label: "Tidak Ada Gejala", color: "green" };
    if (score <= 30) return { label: "Stres Ringan", color: "yellow" };
    if (score <= 45) return { label: "Stres Sedang", color: "orange" };
    return { label: "Stres Berat", color: "red" };
  };

  return (
    <div className="min-h-screen bg-[#fcd6d6] pb-24">
      <Header />
      <div className="px-4 pt-4">
        {showResult ? (
          // === HASIL ===
          <div className="bg-white rounded-2xl px-4 py-6 shadow-md border border-black text-center">
            <p className="text-yellow-700 font-bold mb-2 uppercase tracking-wide text-[13px]">HASIL</p>
            <div className="relative w-full max-w-xs mx-auto mb-4">
              <div className="flex h-4 overflow-hidden rounded-full">
                <div className="flex-1 bg-green-400" />
                <div className="flex-1 bg-yellow-300" />
                <div className="flex-1 bg-orange-400" />
                <div className="flex-1 bg-red-500" />
              </div>
              <div
                className="absolute -top-5 text-xs font-bold bg-black text-white rounded px-1"
                style={{
                  left: `${(calculateScore() / (questions.length * 4)) * 100}%`,
                  transform: "translateX(-50%)",
                }}
              >
                {calculateScore()}
              </div>
              <div
                className="absolute -top-2 w-2 h-2 bg-black rotate-45"
                style={{
                  left: `${(calculateScore() / (questions.length * 4)) * 100}%`,
                  transform: "translateX(-50%) rotate(45deg)",
                }}
              ></div>
            </div>
            <p className="italic text-black mb-2 text-sm">
              Skor kamu menandakan {getStressLevel().label.toLowerCase()}
            </p>
            <p className="text-[13px] text-black leading-snug mb-6 px-4">
              {getStressLevel().label === "Tidak Ada Gejala" &&
                "Tidak ada gejala signifikan. Tetap jaga keseimbangan hidup dan aktivitas relaksasi."}
              {getStressLevel().label === "Stres Ringan" &&
                "Tidak ada gejala signifikan. Tetap jaga keseimbangan hidup dan aktivitas relaksasi."}
              {getStressLevel().label === "Stres Sedang" &&
                "Perlu perhatian. Coba luangkan waktu untuk dirimu dan pertimbangkan bicara dengan teman atau profesional."}
              {getStressLevel().label === "Stres Berat" &&
                "Kondisimu butuh bantuan. Hubungi profesional atau layanan konseling untuk bantuan segera."}
            </p>
            <div className="flex justify-center">
              <button className="bg-[#f8a8a8] text-black text-[18px] font-bold px-8 py-2 rounded-full shadow-md active:scale-95 transition-all">
                Carikan Ahli <span className="text-lg ml-1">➔</span>
              </button>
            </div>
          </div>
        ) : currentIndex === -1 ? (
          // === COVER ===
          <div className="bg-white rounded-2xl px-4 py-6 shadow-md border border-black">
            <img src="/stress.png" alt="Tes Stress" className="w-[170px] mx-auto object-contain mb-4" />
            <h1 className="text-center text-[22px] font-extrabold stroke-text text-gray-900 leading-snug mb-2">
              Uji Tingkat <br /> Stress Kamu!
            </h1>
            <p className="text-[13px] text-center text-black mb-6 leading-tight">
              Yuk, isi pelan-pelan, nggak ada <br /> jawaban benar atau salah kok
            </p>
            <div className="flex justify-center">
              <button
                onClick={handleNext}
                className="bg-[#f8a8a8] text-black text-[18px] font-bold px-10 py-2 rounded-full shadow-md active:scale-95 transition-all"
              >
                MULAI <span className="text-lg ml-1">➔</span>
              </button>
            </div>
          </div>
        ) : currentIndex === 0 ? (
          // === PETUNJUK ===
          <div className="bg-white rounded-2xl px-4 py-6 shadow-md border border-black text-center">
            <p className="text-[14px] font-bold text-yellow-700 mb-4">Self-Assessment Tingkat Stres</p>
            <p className="text-[13px] italic text-left mb-3">
              <b>Petunjuk:</b> <br />
              Jawablah pertanyaan-pertanyaan berikut berdasarkan pengalamanmu selama 2 minggu terakhir.
            </p>
            <p className="text-[13px] text-left mb-4">
              Gunakan skala berikut: <br />
              0 = Tidak Pernah <br />
              1 = Jarang <br />
              2 = Kadang-kadang <br />
              3 = Sering <br />
              4 = Sangat Sering
            </p>
            <p className="text-[12px] text-center mb-6">Yuk, isi pelan-pelan, nggak ada jawaban benar atau salah kok</p>
            <div className="flex justify-center">
              <button
                onClick={handleNext}
                className="bg-[#f8a8a8] text-black text-[18px] font-bold px-10 py-2 rounded-full shadow-md active:scale-95 transition-all"
              >
                NEXT <span className="text-lg ml-1">➔</span>
              </button>
            </div>
          </div>
        ) : (
          // === SOAL ===
          <div className="bg-white rounded-2xl px-4 py-6 shadow-md border border-black">
            <p className="text-center font-bold text-yellow-600 stroke-text mb-4">
              {questions[currentIndex - 1].section}
            </p>
            <p className="text-black text-center text-base mb-4">
              {questions[currentIndex - 1].question}
            </p>
            <div className="flex flex-col gap-2 items-start pl-6 mb-6">
              {[0, 1, 2, 3, 4].map((val) => (
                <label key={val} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={`q${questions[currentIndex - 1].id}`}
                    value={val}
                    checked={answers[questions[currentIndex - 1].id] === val}
                    onChange={() => handleAnswer(val)}
                    className="w-4 h-4"
                  />
                  {val}
                </label>
              ))}
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleNext}
                className="bg-[#f8a8a8] text-black text-[18px] font-bold px-10 py-2 rounded-full shadow-md active:scale-95 transition-all"
              >
                NEXT <span className="text-lg ml-1">➔</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
