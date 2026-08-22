import React from "react";

export default function EvocaFooter() {
  return (
    <footer className="w-full bg-white mt-16 pt-10 border-t border-gray-200 text-gray-700 font-sans">
      {/* Վերին հատվածը՝ սահմանափակված կենտրոնում */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
        
        {/* Ձախ կողմ՝ Լոգո, «Կոնտակտային տվյալներ» և հեռախոս/էլ. փոստ */}
        <div className="space-y-3">
          <div className="flex items-center gap-1 font-bold text-xl tracking-tight text-gray-900">
            <img src="https://www.evoca.am/img/temp/benefits/logo_2.svg" alt="Evoca Benefits" className="h-6" />
          </div>
          
          <div className="space-y-1">
            <h4 className="font-bold text-gray-900 text-sm">Կոնտակտային տվյալներ</h4>
            <div className="flex flex-wrap items-center gap-6 text-sm pt-1">
              <a href="tel:+37410605555" className="flex items-center gap-2 hover:text-[#6200EE] transition-colors">
                <span className="text-[#6200EE]">📞</span> +374 10 605555
              </a>
              <a href="#contact" className="flex items-center gap-2 hover:text-[#6200EE] transition-colors">
                <span className="text-[#6200EE]">✉️</span> Կապ մեզ հետ
              </a>
            </div>
          </div>
        </div>

        {/* Աջ կողմ՝ Վերնագիրը վերևում, կոճակները՝ տակը */}
        <div className="flex flex-col items-start md:items-end gap-2">
          <span className="text-xs font-semibold text-purple-900">
            Ներբեռնել EvocaTouch հավելվածը
          </span>
          <div className="flex items-center gap-3">
            <a href="https://apps.apple.com" target="_blank" rel="noreferrer">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                alt="App Store" 
                className="h-9 object-contain" 
              />
            </a>
            <a href="https://play.google.com" target="_blank" rel="noreferrer">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Google Play" 
                className="h-9 object-contain" 
              />
            </a>
          </div>
        </div>

      </div>

      {/* Մանուշակագույն վերջնամասը՝ 100% լայնությամբ (էկրանից էկրան) */}
      <div className="w-full bg-[#6200EE] text-white py-4 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>© 2026 EVOCABANK. ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ</p>
      </div>
    </footer>
  );
} 