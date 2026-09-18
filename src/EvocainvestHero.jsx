import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function EvocainvestHero() {
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'evocainvestHero'));
        if (!querySnapshot.empty) {
          setHeroData(querySnapshot.docs[0].data());
        }
      } catch (error) {
        console.error('Error fetching hero data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHero();
  }, []);

  if (loading) {
    return <div className="py-12 text-center text-white font-medium">Բեռնվում է...</div>;
  }

  return (
    <div className="py-12 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="bg-white rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-xl">
        
        {/* Ձախ մաս՝ Վերնագիր և նկարագրություն */}
        <div className="flex-1 space-y-6 text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
            {heroData?.title || "Ներդրումային ծառայություններ"}
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
            {heroData?.description || "Evocabank-ն առաջարկում է ներդրումային ծառայություններ..."}
          </p>
        </div>

        {/* Աջ մաս՝ Նկար */}
        <div className="flex-1 flex justify-center">
          <img 
            src={heroData?.imageUrl || "https://placehold.co/600x400/purple/white?text=EvocaINVEST"} 
            alt="EvocaINVEST" 
            className="max-w-full h-auto rounded-2xl object-cover"
          />
        </div>

      </div>
    </div>
  );
}