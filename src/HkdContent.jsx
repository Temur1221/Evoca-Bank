import React from "react";

export default function HkdContent() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <div className="space-y-4 text-sm sm:text-base leading-relaxed bg-[#F8F5FB] p-6 sm:p-8 rounded-2xl border border-[#EBE1F5]">
        <p>
          ՀՀ Կենտրոնական Դեպոզիտարիան հաճախորդների սպասարկումը իրականացնում է բացառապես Հաշվի Օպերատորների միջնորդությամբ:
        </p>
        <p>
          Հաշվի Օպերատորը ՀՀ Կենտրոնական Դեպոզիտարիայի հետ կնքած պայմանագրի հիման վրա միջնորդավորում է ՀՀ Կենտրոնական Դեպոզիտարիայի կողմից մատուցվող ծառայությունները:
        </p>
        <p>
          Evocabank-ը, որպես ՀՀ Կենտրոնական Դեպոզիտարիայի Հաշվի Օպերատոր և կարգավորվող շուկայի հաշվարկային համակարգի անդամ (ԿՇՀՀԱ), մատուցում է ռեեստրավարման և պահառության ծառայություններ՝ ապահովելով դրանց մատուցումը ինչպես Բանկի Գլխամասային գրասենյակում, այնպես էլ՝ մասնաճյուղերում։
        </p>
      </div>

      <div className="space-y-3 pt-2">
        <a 
          href="#tariffs" 
          className="bg-white border border-[#EBE1F5] rounded-2xl p-5 font-semibold text-[#6200EE] hover:bg-[#F8F5FB] transition-colors shadow-sm flex items-center justify-between no-underline"
        >
          <span>Հայաստանի կենտրոնական դեպոզիտարիայի կողմից մատուցվող ծառայությունների միջնորդավորման գործունեության սակագներ</span>
          <span className="text-xl">›</span>
        </a>

        <a 
          href="#rules" 
          className="bg-white border border-[#EBE1F5] rounded-2xl p-5 font-semibold text-[#6200EE] hover:bg-[#F8F5FB] transition-colors shadow-sm flex items-center justify-between no-underline"
        >
          <span>Հայաստանի կենտրոնական դեպոզիտարիայի կողմից մատուցվող ծառայությունների միջնորդավորման գործունեության կանոններ</span>
          <span className="text-xl">›</span>
        </a>
      </div>
    </div>
  );
}