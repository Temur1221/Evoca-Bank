import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

export default function MoneyTransfersBanner() {
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "moneyTransfersBanner"));
        if (!querySnapshot.empty) {
          setBannerData(querySnapshot.docs[0].data());
        }
      } catch (error) {
        console.error("Error fetching banner data:", error);
      }
    };

    fetchBanner();
  }, []);

  return (
    <div className="w-full py-0">
      {/* Մեծացրել ենք բաների բարձրությունը min-h-[550px] md:min-h-[650px] */}
      <div className="relative w-full rounded-none overflow-hidden min-h-[550px] md:min-h-[650px] flex items-center justify-center text-center p-8 md:p-16 shadow-sm">
        {bannerData?.bgImage ? (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bannerData.bgImage})` }}
          />
        ) : (
          <div className="absolute inset-0 bg-[#3b1456]" />
        )}

        <div className="absolute inset-0 bg-black/40 backdrop-brightness-75" />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-white text-2xl md:text-4xl font-semibold leading-relaxed tracking-wide">
            {bannerData?.text || "Կարող եք գումարներ փոխանցել ինչպես ձեր հաշվից, այնպես էլ առանց հաշվի բացման:"}
          </h2>
        </div>
      </div>
    </div>
  );
}