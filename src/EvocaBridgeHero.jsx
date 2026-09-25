import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export default function EvocaBridgeHero() {
  const [heroData, setHeroData] = useState({
    title: 'EvocaBRIDGE',
    description: 'EvocaBRIDGE: Bridging Ideas, Shaping The Future',
    imageUrl: ''
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'evocaBridgeHero'));
        if (!querySnapshot.empty) {
          const data = querySnapshot.docs[0].data();
          setHeroData({
            title: data.title || 'EvocaBRIDGE',
            description: data.description || 'EvocaBRIDGE: Bridging Ideas, Shaping The Future',
            imageUrl: data.imageUrl || ''
          });
        }
      } catch (error) {
        console.error("Սխալ EvocaBridge Hero տվյալները բեռնելիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHero();
  }, []);

  return (
    <section className="py-12 lg:py-16 overflow-hidden w-full">
      {/* Բլոկը վերցնում է էկրանի ամբողջ լայնությունը */}
      <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[480px] bg-[#E8C4D3] overflow-hidden flex items-center">
        
        {/* Նկարը ձգվում է ամբողջ էկրանի վրա */}
        {heroData.imageUrl && (
          <img 
            src={heroData.imageUrl} 
            alt="EvocaBRIDGE" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* Տեքստով սպիտակ քարտը ձախ մասում */}
        <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-8 z-20">
          <div className="w-[90%] sm:w-[480px] lg:w-[540px] bg-white rounded-3xl p-6 sm:p-10 shadow-2xl">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
              {loading ? 'Բեռնվում է...' : heroData.title}
            </h1>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              {heroData.description}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}