import React, { useState } from 'react';
import Header from './header'; // Panggil header global

const moods = {
  happy: {
    emoji: '😄',
    color: '#f9e000',
    label: 'Bahagia',
    advice: 'Hari ini cerah! Pertahankan semangat positifmu ya!'
  },
  neutral: {
    emoji: '😐',
    color: '#d6c8ff',
    label: 'Netral',
    advice: 'Jalani hari dengan tenang, jangan terlalu keras pada dirimu.'
  },
  stress: {
    emoji: '😣',
    color: '#fbb7b7',
    label: 'Stres',
    advice: 'Napasss... Istirahat dulu. Kamu butuh ruang untuk tenang.'
  },
  tertekan: {
    emoji: '😭',
    color: '#d9b0ff',
    label: 'Tertekan',
    advice: 'Berat ya. Cerita ke seseorang bisa bantu banget lho.'
  }
};

const moodKeys = Object.keys(moods);

export default function Profile() {
  const [selectedMood, setSelectedMood] = useState('neutral');
  const { emoji, color, label, advice } = moods[selectedMood];

  const handleMoodClick = (moodKey) => {
    setSelectedMood(moodKey);
  };

  return (
    <div className="min-h-screen bg-[#fffaf4] pb-24">
      <Header />

      <div className="px-4 pt-4">
        <div className="flex flex-col items-center justify-center gap-2 mb-4">
          <h1 className="text-2xl font-bold stroke-text text-yellow-500">Refleksi Harian</h1>
          <span className="text-sm text-gray-700">Gimana mood kamu hari ini?</span>
        </div>

        {/* Lingkaran Mood */}
        <div className="relative mx-auto my-6 w-56 h-56">
          <div
            className="absolute inset-0 rounded-full border-[14px]"
            style={{ borderColor: color }}
          ></div>
          <div className="absolute inset-8 rounded-full bg-white flex flex-col items-center justify-center text-center">
            <div className="text-4xl">{emoji}</div>
            <p className="text-sm text-black font-bold mt-2">{label}</p>
          </div>
        </div>

        {/* Pilihan Mood */}
        <div className="flex justify-center gap-4 mb-4">
          {moodKeys.map((key) => (
            <button
              key={key}
              onClick={() => handleMoodClick(key)}
              className={`text-2xl transition-transform active:scale-110 ${
                key === selectedMood ? 'scale-110' : ''
              }`}
            >
              {moods[key].emoji}
            </button>
          ))}
        </div>

        {/* Saran dan Catatan */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-md p-4">
            <h2 className="font-bold mb-1 text-gray-800">Saran Buat Kamu</h2>
            <p className="text-sm text-gray-700">{advice}</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4">
            <h2 className="font-bold mb-1 text-gray-800">Memopad</h2>
            <textarea
              rows={4}
              placeholder="Catatan hari ini..."
              className="w-full border border-gray-300 rounded-md p-2 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-yellow-400"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
