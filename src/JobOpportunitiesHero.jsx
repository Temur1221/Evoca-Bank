import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export default function JobOpportunitiesHero() {
  const [heroData, setHeroData] = useState({
    title: 'Աշխատանք Evoca-ում',
    imageUrl: ''
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'jobsHero'));
        if (!querySnapshot.empty) {
          const data = querySnapshot.docs[0].data();
          setHeroData({
            title: data.title || 'Աշխատանք Evoca-ում',
            imageUrl: data.imageUrl || ''
          });
        }
      } catch (error) {
        console.error("Սխալ Hero տվյալները բեռնելիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHero();
  }, []);

  return (
    <section 
      className="w-full py-20 sm:py-28 px-4 sm:px-8 relative overflow-hidden bg-cover bg-center bg-no-repeat flex items-center min-h-[350px]"
      style={{
        backgroundImage: heroData.imageUrl ? `url(${heroData.imageUrl})` : 'none',
        backgroundColor: !heroData.imageUrl ? '#6200EE' : 'transparent'
      }}
    >
      <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="bg-white rounded-r-3xl rounded-bl-3xl p-8 sm:p-12 shadow-2xl max-w-xl">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {loading ? 'Բեռնվում է...' : heroData.title}
          </h1>
        </div>
      </div>
    </section>
  );
}