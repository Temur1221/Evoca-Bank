import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

export default function SafeDepositBoxesHero() {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "safeDepositBoxesHero"));
        if (!querySnapshot.empty) {
          setHeroData(querySnapshot.docs[0].data());
        }
      } catch (error) {
        console.error("Error fetching hero data:", error);
      }
    };

    fetchHero();
  }, []);

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-4">
      <div className="bg-[#f4f4f4] rounded-[32px] overflow-hidden shadow-sm border border-gray-100 grid grid-cols-1 lg:grid-cols-2 items-stretch">
        <div className="p-8 md:p-16 flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
            {heroData?.title || "Անհատական պահատուփեր"}
          </h1>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            {heroData?.description || "Հայաստանի ռեզիդենտ և ոչ ռեզիդենտ ֆիզիկական անձանց առաջարկում ենք արժեքավոր իրերը պահպանելու հուսալի և անվտանգ միջոց` չհրկիզվող անհատական պահատուփեր։"}
          </p>
        </div>
        <div className="w-full bg-[#5c1c84] flex items-center justify-center min-h-[300px] lg:min-h-full">
          {heroData?.heroImage ? (
            <img 
              src={heroData.heroImage} 
              alt="Safe Deposit Boxes" 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-white p-8 font-bold tracking-wider text-xl">
              Evoca Safe Boxes
            </div>
          )}
        </div>
      </div>
    </div>
  );
}