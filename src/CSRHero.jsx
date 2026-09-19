import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function CSRHero() {
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'site_content'));
        if (!querySnapshot.empty) {
          setHeroData(querySnapshot.docs[0].data());
        }
      } catch (error) {
        console.error("Սխալ CSR Hero տվյալները ստանիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  if (loading) {
    return <div className="bg-white rounded-3xl p-12 text-center text-gray-400">Բեռնվում է...</div>;
  }

  return (
    /* Ավելացրել ենք max-w-5xl, mx-auto և px-4 (կամ px-6), որպեսզի ձախից և աջից հեռավորություն լինի */
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-6">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          
          {/* Ձախ կողմի տեքստային հատված */}
          <div className="p-8 sm:p-12 lg:p-16 space-y-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              {heroData?.title || "Կորպորատիվ Սոցիալական Պատասխանատվություն"}
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
              {heroData?.description || "Մենք մեծ կարևորություն ենք տալիս CSR-ին՝ ապահովելով մեր գործունեության դրական ազդեցությունը թե՛ հասարակության, թե՛ շրջակա միջավայրի վրա:"}
            </p>
          </div>

          {/* Աջ կողմի մանուշակագույն հատվածը՝ նկարով */}
          <div className="w-full flex items-center justify-center p-8 relative overflow-hidden">
            {heroData?.imageUrl ? (
              <img 
                src={heroData.imageUrl} 
                alt="CSR Illustration" 
                className="max-h-[280px] w-auto object-contain drop-shadow-xl"
              />
            ) : (
              <div className="text-white opacity-60">Նկար չկա</div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}