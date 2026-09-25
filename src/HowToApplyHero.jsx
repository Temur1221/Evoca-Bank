import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export default function HowToApplyHero() {
  const [heroData, setHeroData] = useState({
    title: 'Ինչպես ընդունվել աշխատանքի Evocabank-ում',
    imageUrl: ''
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'howToApplyHero'));
        
        if (!querySnapshot.empty) {
          const docData = querySnapshot.docs[0].data();
          setHeroData({
            title: docData.title || 'Ինչպես ընդունվել աշխատանքի Evocabank-ում',
            imageUrl: docData.imageUrl || ''
          });
        }
      } catch (error) {
        console.error("Սխալ տվյալներ ստանիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  return (
    <section 
      className="w-full py-24 sm:py-32 px-4 sm:px-8 relative overflow-hidden bg-cover bg-center bg-no-repeat min-h-[400px] flex items-center"
      style={{
        backgroundImage: heroData.imageUrl ? `url(${heroData.imageUrl})` : 'none',
        backgroundColor: !heroData.imageUrl ? '#fce7f3' : 'transparent'
      }}
    >
      <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 w-full">
        <div className="w-full lg:w-1/2 bg-white rounded-3xl p-8 sm:p-10 shadow-xl mb-8 lg:mb-0">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-snug">
            {loading ? 'Բեռնվում է...' : heroData.title}
          </h1>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center relative">
        </div>

      </div>
    </section>
  );
}