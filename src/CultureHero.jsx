import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export default function CultureHero() {
  const [heroData, setHeroData] = useState({
    title: 'Մշակույթ',
    text1: 'Evoca-ում աշխատելը հաճելի է...',
    text2: 'Այստեղ տաղանդները անընդհատ զարգանում են...',
    imageUrl: 'https://www.evoca.am/images-cache/menu/1/16195117975601/1920x634.jpg'
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCultureData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'cultureCollection'));
        if (!querySnapshot.empty) {
          const docData = querySnapshot.docs[0].data();
          setHeroData(docData);
        }
      } catch (error) {
        console.error("Սխալ տվյալներ ստանալիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCultureData();
  }, []);

  if (loading) {
    return <div className="py-12 text-center text-white">Բեռնվում է...</div>;
  }

  return (
    <div className="relative w-full bg-gradient-to-r from-pink-300 via-purple-300 to-blue-200 py-16 px-4 sm:px-8 overflow-hidden min-h-[350px] flex items-center">
      {heroData.imageUrl && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 z-0"
          style={{ backgroundImage: `url(${heroData.imageUrl})` }}
        />
      )}

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 sm:p-10 max-w-2xl border border-gray-100 flex-1">
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4 tracking-tight">
            {heroData.title}
          </h1>
          <p className="text-gray-700 text-base sm:text-lg mb-3 leading-relaxed">
            {heroData.text1}
          </p>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            {heroData.text2}
          </p>
        </div>
        {heroData.imageUrl && (
          <div className="flex-shrink-0">
            
          </div>
        )}

      </div>
    </div>
  );
}