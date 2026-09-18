import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function EvocasalaryHero() {
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'evocasalaryHero'));
        if (!querySnapshot.empty) {
          setHeroData(querySnapshot.docs[0].data());
        }
      } catch (error) {
        console.error('Սխալ տվյալների բեռնման ժամանակ:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  if (loading) {
    return <div className="p-8 text-center text-gray-500">Բեռնվում է...</div>;
  }

  return (
    <div className="w-full bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-[40px] overflow-hidden shadow-sm">
          
          {/* Ձախ կողմի բաց ֆոնով տեքստային հատված */}
          <div className="bg-[#F8F7FA] p-8 sm:p-16 flex flex-col justify-center rounded-l-[40px]">
            <div className="space-y-6">
              <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 leading-tight whitespace-pre-line font-sans">
                {heroData?.title || 'EVOCA\nԱՇԽԱՏԱՎԱՐՁԱՅԻՆ ՆԱԽԱԳԻԾ'}
              </h1>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed whitespace-pre-line">
                {heroData?.subtitle || 'Քո աշխատավարձը կարող է քեզ տալ շատ ավելին:\nՊարզապես պետք է ընտրել Evocabank-ը:'}
              </p>
            </div>
          </div>

          {/* Աջ կողմի մանուշակագույն ֆոնով նկարով հատված */}
          <div className="bg-[#6200EE] flex items-center justify-center overflow-hidden rounded-r-[40px]">
            <img 
              src={heroData?.imageUrl || "https://www.evoca.am/file_manager/other/salary%20project.png"} 
              alt="Evoca Salary Project" 
              className="w-full h-full object-cover min-h-[320px] sm:min-h-[380px]"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80";
              }}
            />
          </div>

        </div>
      </div>
    </div>
  );
}