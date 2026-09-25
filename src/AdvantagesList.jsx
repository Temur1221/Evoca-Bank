import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export default function AdvantagesList() {
  const [advantages, setAdvantages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdvantages = async () => {
      try {
        // Վերցնում ենք բոլոր քարտերը 'advantagesItems' հավաքածուից
        const querySnapshot = await getDocs(collection(db, 'advantagesItems'));
        const itemsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setAdvantages(itemsList);
      } catch (error) {
        console.error("Սխալ տվյալներ ստանիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAdvantages();
  }, []);

  return (
    <section className="py-16 px-4 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Վերնագիրը */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-12 border-b pb-4">
          Մեր առավելությունները
        </h2>

        {/* Բեռնման վիճակ */}
        {loading && <p className="text-center text-gray-500 py-8">Բեռնվում է...</p>}

        {/* Քարտերի ցանցը (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {advantages.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl hover:shadow-lg transition duration-300"
            >
              {/* Նկար կամ Պատկերակ (Icon) */}
              {item.imageUrl && (
                <div className="w-16 h-16 mb-6 flex items-center justify-center">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="max-h-full max-w-full object-contain" 
                  />
                </div>
              )}

              {/* Վերնագիր */}
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-snug">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}