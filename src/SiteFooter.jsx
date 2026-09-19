import React from 'react';

export default function SiteFooter() {
  return (
    <footer className="w-full bg-white mt-auto border-t border-gray-200 pt-10 pb-6 text-gray-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col space-y-8">
        
        {/* Верхняя часть футера */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          
          {/* Логотип и копирайт */}
          <div className="flex flex-col space-y-2">
            <img src="https://resource.evoca.am/images/WebPayment/evoca.png" className="w-[120px]" alt="Evocabank" />
            <p className="text-gray-500">Բանկը վերահսկվում է ՀՀ ԿԲ-ի կողմից</p>
            <p className="text-gray-400">Copyright © 1990-2026 Evocabank</p>
          </div>

          {/* Контакты и адрес */}
          <div className="flex flex-col sm:flex-row gap-8 text-sm">
            <div>
              <p className="text-gray-700 font-medium">ք. Երևան, 0010,</p>
              <p className="text-gray-700 font-medium">Հանրապետության 44/2</p>
            </div>
            <div className="flex flex-col space-y-1">
              <a href="mailto:hello@evoca.am" className="text-purple-600 hover:underline">hello@evoca.am</a>
              <a href="tel:+37410605555" className="text-purple-600 hover:underline">+374 10 605555</a>
            </div>
          </div>

          {/* QR-код */}
          <div className="bg-white p-2 border border-gray-200 rounded-xl shadow-sm">
            {/* Замените ссылку на актуальную или оставьте заглушку */}
            <div className="w-20 h-20 bg-purple-600 flex items-center justify-center text-white text-xs font-bold rounded-lg">
              QR
            </div>
          </div>

          {/* Социальные сети и приложения */}
          <div className="flex flex-col items-start lg:items-end space-y-4">
            <div className="flex space-x-3">
              {['facebook', 'instagram', 'youtube', 'linkedin', 'pinterest'].map((soc, idx) => (
                <div key={idx} className="w-8 h-8 bg-gray-400 hover:bg-gray-600 text-white rounded-full flex items-center justify-center cursor-pointer transition-colors text-xs">
                  {soc[0].toUpperCase()}
                </div>
              ))}
            </div>
            <div className="flex space-x-2">
              <div className="bg-black text-white px-3 py-1.5 rounded-lg text-xs cursor-pointer">App Store</div>
              <div className="bg-black text-white px-3 py-1.5 rounded-lg text-xs cursor-pointer">Google Play</div>
            </div>
          </div>

        </div>

        {/* Нижняя часть футера (дисклеймер и мелкие логотипы) */}
        <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-400 leading-relaxed">
          <p className="max-w-3xl">
            Հարգելի այցելու, կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանության, ինչպես նաև ռուսերեն և անգլերեն լեզուներում ոչ ամբողջական նյութ տեսնելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով։ «Էվոկաբանկ» ԲՓԸ-ն պատասխանատվություն չի կրում իր ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության ստուգման և արժանահավատության, այտեղ տեղադրված գովազդների, ինչպես նաև երրորդ անձանց կողմից այդ կայքերում տեղադրված տեղեկատվության օգտագործման հնարավոր հետևանքների համար։
          </p>
          <div className="flex items-center space-x-4 grayscale opacity-70">
            <span>ArCa</span>
          </div>
        </div>

      </div>
    </footer>
  );
}