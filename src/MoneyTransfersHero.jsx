import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

export default function MoneyTransfersHero() {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "moneyTransfersHero"));
        if (!querySnapshot.empty) {
          // Վերցնում ենք առաջին փաստաթղթի տվյալները
          setHeroData(querySnapshot.docs[0].data());
        }
      } catch (error) {
        console.error("Error fetching money transfers hero data:", error);
      }
    };

    fetchHero();
  }, []);

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-4">
      <div className="bg-[#f4f4f4] rounded-[32px] overflow-hidden shadow-sm border border-gray-100 grid grid-cols-1 lg:grid-cols-2 items-stretch">
        <div className="p-8 md:p-16 flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
            {heroData?.title || "Դրամական փոխանցումներ"}
          </h1>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            {heroData?.description || "Իրականացնում ենք դրամական փոխանցումներ Հայաստանի տարածքում և դեպի արտերկիր՝ դրամով և արտարժույթով։ Փոխանցումներն իրականացվում են միջազգային բանկային ստանդարտներին համապատասխանող համակարգերով։"}
          </p>
        </div>
        <div className="w-full bg-[#5c1c84] flex items-center justify-center min-h-[300px] lg:min-h-full">
          {heroData?.heroImage ? (
            <img 
              src={heroData.heroImage} 
              alt="Money Transfers" 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-white p-8 font-bold tracking-wider text-xl">
              Evoca Money Transfers
            </div>
          )}
        </div>
      </div>
    </div>
  );
}