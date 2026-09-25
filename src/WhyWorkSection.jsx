import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export default function WhyWorkSection() {
  const [sectionData, setSectionData] = useState({
    title: 'Ինչու՞ աշխատել Evoca-ում',
    description: 'Բացահայտիր, թե ինչն է Evoca-ն դարձնում այդքան յուրահատուկ։ Աշխատակիցներն ուրախ են, մոտիվացված, իսկ առավելությունների մեծ փաթեթն օգնում է հոգ տանել իրենց և ընտանիքների մասին։',
    imageUrl: ''
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Կարող եք ստեղծել առանձին հավաքածու կամ փաստաթուղթ Firestore-ում
        const querySnapshot = await getDocs(collection(db, 'whyWorkCollection'));
        if (!querySnapshot.empty) {
          setSectionData(querySnapshot.docs[0].data());
        }
      } catch (error) {
        console.error("Սխալ տվյալներ ստանալիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="py-12 text-center text-gray-500">Բեռնվում է...</div>;
  }

  return (
    <section className="w-full py-12 px-4 sm:px-8 bg-white my-6">
      <div className="max-w-5xl mx-auto">
        {/* Վերնագիր և տեքստ */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">
            {sectionData.title}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-4xl">
            {sectionData.description}
          </p>
        </div>

        {/* Նկարի հատվածը ներքևում */}
        {sectionData.imageUrl && (
          <div className="w-full overflow-hidden shadow-md">
            <img 
              src={sectionData.imageUrl} 
              alt="Why work at Evoca" 
              className="w-full h-auto object-cover max-h-[500px]"
            />
          </div>
        )}
      </div>
    </section>
  );
}