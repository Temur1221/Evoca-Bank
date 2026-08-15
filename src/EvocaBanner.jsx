import React from 'react';

export default function EvocaBanner() {
  return (
    <div className="relative w-full bg-[#5b08b3] text-white p-6 md:p-12 rounded-[35px] overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 font-sans shadow-2xl select-none">
      
      {/* Ֆոնային դեկորատիվ էլեմենտներ */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6f0fd2] to-[#480491] opacity-90 pointer-events-none" />
      <div className="absolute top-6 right-8 w-8 h-8 border-t-4 border-r-4 border-purple-300 opacity-40 rotate-12 pointer-events-none" />
      <div className="absolute bottom-6 right-16 text-pink-400 opacity-60 font-bold text-2xl pointer-events-none">&#120800;</div>
      <div className="absolute bottom-4 left-6 grid grid-cols-4 gap-1.5 opacity-25 pointer-events-none">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
        ))}
      </div>

      {/* 1. ՁԱԽ ԿՈՂՄ — ՆՈՒԹԲՈՒՔ ԵՎ ՀԵՌԱԽՈՍ (ԻՐԱՐ ԿՈՂՔԻ) */}
      <div className="relative flex items-end justify-center gap-4 w-full lg:w-1/2 min-h-[300px] z-10">
        
        {/* Նոութբուք */}
        <div className="relative w-[70%] max-w-[380px] aspect-[16/10] bg-[#1a1a1a] rounded-t-2xl p-2 border-[3px] border-[#2d2d2d] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          
          {/* Վեբ տեսախցիկ */}
          <div className="absolute top-1 left-1/2 -translate-x-1/2 flex items-center gap-1 z-30">
            <div className="w-1.5 h-1.5 bg-black border border-gray-700 rounded-full"></div>
            <div className="w-1 h-1 bg-green-500/80 rounded-full"></div>
          </div>

          {/* Նոութբուքի էկրան (YouTube Video) */}
      <div className="w-full h-full bg-black rounded-lg overflow-hidden relative shadow-inner">
        <iframe
            className="w-full h-full border-0 pointer-events-auto"
            src="https://www.youtube-nocookie.com/embed/KwAgMHEx8ys?autoplay=0&rel=0"
            itle="EvocaTOUCH | New EvocaTOUCH app"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
        </iframe>
      </div>

          {/* Նոութբուքի տակդիր */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[110%] h-3 bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-xl shadow-2xl border-t border-gray-400">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gray-500/50 rounded-b"></div>
          </div>
        </div>

        {/* Հեռախոս (Նոութբուքի աջ կողքին առանձին դրված) */}
        <div className="relative w-[22%] max-w-[110px] aspect-[9/19] bg-black border-[3px] border-gray-800 rounded-[22px] shadow-[0_15px_30px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col items-center justify-between p-1.5 shrink-0">
          {/* Dynamic Island */}
          <div className="w-7 h-1.5 bg-black rounded-full border border-gray-900 mt-0.5"></div>
          
          {/* Հեռախոսի էկրան */}
          <img src="https://www.evoca.am/images-cache/banners/1/16153622710205/140x300.jpg"/>

          {/* Home Bar */}
          <div className="w-6 h-0.5 bg-white/40 rounded-full mb-0.5"></div>
        </div>

      </div>

      {/* 2. ԱՋ ԿՈՂՄ — Տեքստ, Կոճակներ, QR */}
      <div className="w-full lg:w-1/2 flex flex-col items-start space-y-5 z-10 pt-4 lg:pt-0">
        
        <h1 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-wide leading-tight">
          Օնլայն և մոբայլ բանկինգ
        </h1>

        <p className="text-xs sm:text-sm text-purple-100/90 max-w-lg leading-relaxed font-normal">
          Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ:
        </p>

        <button className="mt-2 bg-white text-[#5b08b3] font-bold text-sm sm:text-base px-7 py-2.5 rounded-full hover:bg-purple-50 active:scale-95 transition-all shadow-lg hover:shadow-xl">
          Դառնալ հաճախորդ
        </button>

        {/* QR Code + Store Buttons */}
        <div className="flex items-center gap-4 pt-2">
          
          <div className="bg-white p-1.5 rounded-xl w-20 h-20 shadow-md flex items-center justify-center shrink-0">
            <img 
              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://evoca.am" 
              alt="Evocabank QR Code" 
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex flex-col space-y-1.5">
            <span className="text-[11px] font-medium text-purple-200">
              Ներբեռնել հավելվածները՝
            </span>

            <div className="flex flex-wrap gap-2">
              <a 
                href="https://apple.com" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 bg-black/60 hover:bg-black/80 border border-white/20 px-3 py-1.5 rounded-lg transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 170 170">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.33.13-9.13-1.9-14.4-6.08-3.81-3.04-7.84-7.86-12.08-14.46-7.18-11.23-12.8-23.75-16.85-37.56-4.05-13.82-6.08-26.83-6.08-39.05 0-15.66 3.81-28.79 11.43-39.39 7.62-10.6 17.3-15.98 29.05-16.14 4.88 0 10.22 1.22 16.03 3.66 5.8 2.44 9.87 3.74 12.21 3.89 2.12 0 6.33-1.38 12.63-4.12 6.3-2.75 11.83-4.02 16.59-3.82 12.82.53 23.01 5.2 30.58 14.02-11.23 6.81-16.69 16.32-16.38 28.53.31 9.8 4.12 17.92 11.43 24.35 7.31 6.43 15.82 10.01 25.53 10.74-2.58 7.84-6.02 15.82-10.32 23.94zM119.22 31.08c0-7.39 2.72-14.41 8.16-21.06 5.44-6.65 12.24-10.45 20.4-11.4-1.12 7.76-4.05 14.88-8.8 21.36-4.75 6.48-11.25 10.45-19.5 11.9-0.17-.28-.26-.55-.26-.8z"/>
                </svg>
                <div className="text-left leading-none">
                  <div className="text-[9px] uppercase tracking-wider text-gray-300">Download on</div>
                  <div className="text-[12px] font-semibold">App Store</div>
                </div>
              </a>

              <a 
                href="https://play.google.com" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 bg-black/60 hover:bg-black/80 border border-white/20 px-3 py-1.5 rounded-lg transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                </svg>
                <div className="text-left leading-none">
                  <div className="text-[9px] uppercase tracking-wider text-gray-300">Get it on</div>
                  <div className="text-[12px] font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}