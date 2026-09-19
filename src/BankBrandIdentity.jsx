import React, { useState } from 'react';

export default function BankBrandIdentity() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-10 space-y-16">
      
      {/* 1. Բանկի լոգոտիպը */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Բանկի լոգոտիպը
        </h2>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-4xl">
          Բանկի լոգոն կազմված է evolution-ի և volution բառի արմատից և նմանեցված է evoca` զարմացնել բառին: Բանկի երկրորդ տառը՝ V-ն, պատկերված է կտրված անկյուններով հավասարակշռված եռանկյան տեսքով և նմանեցված է դեպի աջ և վեր ուղղված սլաքի տեսքով՝ խորհրդանշելով Բանկի ձգտումը դեպի առաջընթաց:
        </p>
        <div className="flex justify-center py-6">
          <img 
            src="https://www.evoca.am/file_manager/icons/logo.png" 
            alt="Evocabank Logo" 
            className="h-12 sm:h-16 object-contain"
          />
        </div>
      </div>

      {/* 2. Բանկի բրենդբուքը */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Բանկի բրենդբուքը
        </h2>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-4xl">
          Բրենդբուքում կգտնեք Բանկի լոգոի կիրառման կանոնները, բրենդային գույները, տառատեսակները և բրենդի այլ կարևոր տարրեր: Սա պարզապես ուղեցույց չէ, այլ ուղղելման արդյունք՝ ուժեղ և ճանաչելի բրենդ կառուցելու համար։
        </p>
        <div className="relative rounded-2xl overflow-hidden shadow-md group cursor-pointer">
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition group-hover:bg-black/50">
            <img src="https://www.evoca.am/file_manager/other/52.png" alt="" />
          </div>
          <div className="h-40 sm:h-52 bg-gradient-to-r from-purple-900 via-purple-600 to-black w-full flex items-center justify-center">
            <span className="text-white text-3xl font-bold tracking-widest opacity-80">BRANDBOOK</span>
          </div>
        </div>
      </div>

      {/* 3. Բանկի կորպորատիվ գույները */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Բանկի կորպորատիվ գույները
        </h2>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-4xl">
          Բանկի կորպորատիվ գույներն են՝ սպիտակը, մոխրագույնը և մանուշակագույնը։
        </p>

        <div className="space-y-4 pt-2">
          <div className="flex items-center space-x-4 p-4 rounded-2xl border border-gray-100 bg-[#F5F5F7]">
            <div className="w-5 h-5 rounded-full bg-white border border-gray-300 flex-shrink-0"></div>
            <p className="text-gray-800 text-sm sm:text-base font-medium">
              <span className="font-bold text-gray-900">Սպիտակը</span> խորհրդանշում է մաքրություն:
            </p>
          </div>

          <div className="flex items-center space-x-4 p-4 rounded-2xl border border-gray-100 bg-[#F5F5F7]">
            <div className="w-5 h-5 rounded-full bg-gray-500 flex-shrink-0"></div>
            <p className="text-gray-800 text-sm sm:text-base font-medium">
              <span className="font-bold text-gray-900">Մոխրագույնը</span> խորհրդանշում է նորագույն տեխնոլոգիաների կիրառում:
            </p>
          </div>

          <div className="flex items-center space-x-4 p-4 rounded-2xl border border-gray-100 bg-[#F5F5F7]">
            <div className="w-5 h-5 rounded-full bg-[#6200EE] flex-shrink-0"></div>
            <p className="text-gray-800 text-sm sm:text-base font-medium">
              <span className="font-bold text-gray-900">Մանուշակագույնը</span> երիտասարդության, ստեղծարարության և նորարարության դրսևորում է:
            </p>
          </div>
        </div>
      </div>

      {/* 4. Տեսանյութ (YouTube Video with Play/Stop toggle) */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm space-y-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-900">Տեսանյութ</h3>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`px-5 py-2 rounded-xl text-sm font-semibold transition shadow-sm ${
              isPlaying 
                ? 'bg-red-500 text-white hover:bg-red-600' 
                : 'bg-[#6200EE] text-white hover:bg-[#5000cb]'
            }`}
          >
            {isPlaying ? 'Անջատել տեսանյութը' : 'Միացնել տեսանյութը'}
          </button>
        </div>

        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-md bg-gray-100">
          {isPlaying ? (
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/QTuqGz3USRE?autoplay=1" 
              title="Evocabank Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          ) : (
            <div 
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer bg-black/10 hover:bg-black/20 transition group"
            >
              <div className="w-16 h-16 bg-[#6200EE] text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                <svg className="w-8 h-8 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <span className="mt-3 font-semibold text-gray-800 text-sm">Սեղմեք՝ միացնելու համար</span>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}