import React, { useEffect, useState } from 'react';
import { db } from './firebase'; 
import { collection, getDocs } from 'firebase/firestore'; // getDoc-ի փոխարեն օգտագործում ենք getDocs

export default function BondsHeroSection() {
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        // Վերցնում ենք ամբողջ հավաքածուն
        const querySnapshot = await getDocs(collection(db, 'bondsHero'));
        
        if (!querySnapshot.empty) {
          // Վերցնում ենք առաջին իսկ փաստաթղթի տվյալները (քանի որ հերո բաժնի համար մի հատ է պետք)
          const docData = querySnapshot.docs[0].data();
          setHeroData(docData);
        }
      } catch (error) {
        console.error('Սխալ բեռնման ժամանակ:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  const title = heroData?.title || 'Պարտատոմսեր';
  const description = heroData?.description || 'Evocabank-ը հնարավորություն է տալիս ձեռք բերել պարտատոմսեր և ստանալ բարձր եկամուտներ: Մենք ցանկանում ենք դառնալ Ձեր բարեկեցիկ ապագայի մի մասնիկը։';
  const imageUrl = heroData?.imageUrl || ''; 

  return (
    <section className="bg-white py-12 px-4 sm:px-8 lg:px-16 font-sans">
      <div className="max-w-7xl mx-auto bg-[#F3EEFA] rounded-3xl overflow-hidden flex flex-col lg:flex-row items-center justify-between">
        
        {/* Ձախ մաս՝ Տեքստեր */}
        <div className="p-8 sm:p-12 lg:w-1/2 space-y-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {title}
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Աջ մաս՝ Նկար */}
        <div className="lg:w-1/2 w-full h-72 sm:h-96 lg:h-[450px] relative overflow-hidden">
          <img
            src={imageUrl || "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80"} 
            alt="Պարտատոմսեր"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}