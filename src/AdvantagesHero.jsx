import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

export default function AdvantagesHero() {
  const [heroData, setHeroData] = useState({
    title: 'Առավելություններ',
    description: 'Միացի՛ր թիմին, որի ամենամեծ ակտիվը ներգրավված և երջանիկ աշխատակիցներն են:',
    imageUrl:'https://www.evoca.am/images-cache/menu/1/16194612394395/1920x634.jpg'
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const docRef = doc(db, 'advantagesPage', 'heroSection');
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setHeroData(docSnap.data());
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
    <section className="w-full bg-[#fde047] py-16 px-4 sm:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        
        {/* Սպիտակ քարտը տեքստով */}
        <div className="w-full lg:w-1/2 bg-white rounded-3xl p-8 sm:p-10 shadow-xl z-10 mb-8 lg:mb-0">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            {loading ? 'Բեռնվում է...' : heroData.title}
          </h1>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            {heroData.description}
          </p>
        </div>

        {/* Աջ մասի նկարազարդման հատված */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <div className="relative w-full max-w-md h-64 flex items-center justify-center">
            <div className="absolute w-40 h-40 bg-purple-400/30 rounded-full blur-2xl"></div>
          </div>
        </div>

      </div>
    </section>
  );
}