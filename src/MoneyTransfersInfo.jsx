import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

export default function MoneyTransfersInfo() {
  const [infoData, setInfoData] = useState([]);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "moneyTransfersInfo"));
        if (!querySnapshot.empty) {
          const items = querySnapshot.docs.map(doc => doc.data());
          setInfoData(items);
        }
      } catch (error) {
        console.error("Error fetching money transfers info:", error);
      }
    };

    fetchInfo();
  }, []);

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-8">
      <div className="bg-[#f4f4f4] rounded-[32px] p-8 md:p-16 shadow-sm border border-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Ընդհանուր դրույթներ
        </h2>
        
        <div className="space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">
          <p>
            Ձեր բանկային փոխանցումներն իրականացնում ենք՝ ղեկավարվելով «Բանկերի և բանկային գործունեության մասին» ՀՀ օրենքով, ՀՀ Կենտրոնական բանկի իրավական ակտերով, ՀՀ այլ իրավական ակտերով, թղթակից բանկերի հետ կնքված պայմանագրերով և սպասարկման սահմանված պայմաններով:
          </p>
          
          <p>
            Ձեր փոխանցումները կատարում ենք վճարման հանձնարարագրերի հիմնման վրա (կախված գումարի չափից, փոխանցման բնույթից և նպատակից՝ կարող են պահանջվել նաև այլ փաստաթղթեր):
          </p>

          <p>
            Յուրաքանչյուր աշխատանքային օրվա ընթացքում՝ մինչև ժամը 15:30 ներկայացված վճարման հանձնարարագրերը կատարում ենք նույն բանկային օրը, իսկ ժամը 15:30-ից հետո ներկայացված վճարման հանձնարարագրերը՝ հաջորդ բանկային օրը: Մինչև ժամը 16:30 ներկայացված դրամով փոխանցումները (պետական և տեղական բյուջեի վճարներ, կոմունալ կամ սոցիալական այլ վճարներ) կատարման ենք ընդունում նույն բանկային օրը:
          </p>

          <p>
            Դրամով և արտարժույթով բանկային փոխանցումներ իրականացնելիս ձեզանից գանձում ենք <span className="text-[#5c06bc] font-semibold cursor-pointer underline">միջնորդավճարներ</span> ըստ մեր դրույքաչափերի և սակագների: Կոմունալ վճարների սպասարկման դիմաց միջնորդավճար չենք գանձում: Միջնորդավճարները գանձվում են ՀՀ դրամով: Արտարժույթի տոկոսային հարաբերակցությամբ սահմանված միջնորդավճարները գանձվում են ՀՀ դրամով՝ հիմք ընդունելով գանձման օրը տվյալ արտարժույթի համար մեր կողմից սահմանված անկանխիկ վաճառքի փոխարժեքը:
          </p>

          <p>
            Մենք պարտավոր ենք տրամադրել յուրաքանչյուր փոխանցման կատարումը հավաստող փաստաթուղթ, որտեղ նշված կլինեն փոխանցման գումարը, արժույթը, միջնորդավճարի չափը և այլ մանրամասներ:
          </p>
        </div>
      </div>
    </div>
  );
}