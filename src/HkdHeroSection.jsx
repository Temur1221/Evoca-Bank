import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function HkdHeroSection() {
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'hkdHero'));
        if (!querySnapshot.empty) {
          setHeroData(querySnapshot.docs[0].data());
        }
      } catch (error) {
        console.error('Սխալ Հերո տվյալները բեռնելիս:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  if (loading) {
    return <div className="text-center py-8 text-gray-400">Բեռնվում է...</div>;
  }

  return (
    <div className="bg-[#F8F5FB] border border-[#EBE1F5] rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
      <div className="space-y-6 max-w-xl">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
          {heroData?.title}
        </h1>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          {heroData?.description}
        </p>
      </div>

      <div className="w-full lg:w-auto flex justify-center">
        <div className="w-72 h-72 sm:w-80 sm:h-80 bg-[#EFE6F7] rounded-3xl flex items-center justify-center overflow-hidden">
          {heroData?.imageUrl ? (
            <img 
              src={heroData.imageUrl} 
              alt="ՀԿԴ ծառայություններ" 
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-400 font-medium">Նկար չկա</span>
          )}
        </div>
      </div>
    </div>
  );
}