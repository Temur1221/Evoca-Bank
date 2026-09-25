import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export default function JobQualities() {
  const [qualities, setQualities] = useState([]);
  const [sectionTitle, setSectionTitle] = useState('Ինչպիսի՞ թիմակից ենք մենք փնտրում ?');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQualities = async () => {
      try {
        // Բեռնում ենք բաժնի վերնագիրը (եթե առկա է առանձին հավաքածուում)
        const headerSnapshot = await getDocs(collection(db, 'jobQualitiesHeader'));
        if (!headerSnapshot.empty) {
          const data = headerSnapshot.docs[0].data();
          if (data.title) setSectionTitle(data.title);
        }

        // Բեռնում ենք թիմակցի որակները/հատկանիշները 
        const querySnapshot = await getDocs(collection(db, 'jobQualities'));
        let list = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        // Դասավորում ենք ըստ կարգի (order) դաշտի, եթե առկա է
        list.sort((a, b) => (a.order || 0) - (b.order || 0));

        if (list.length > 0) {
          setQualities(list);
        }
      } catch (error) {
        console.error("Սխալ թիմակցի որակները բեռնելիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQualities();
  }, []);

  return (
    <section className="w-full py-16 px-4 sm:px-8 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Բաժնի վերնագիր */}
        <div className="mb-12 pb-4 border-b border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            {sectionTitle}
          </h2>
        </div>

        {/* Բովանդակություն / Ցանց (Grid) */}
        {loading ? (
          <p className="text-gray-500 text-center py-8">Բեռնվում է...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
            {qualities.map((item, index) => (
              <div key={item.id || index} className="flex flex-col items-center text-center">
                
                {/* Իկոնա / Նկար */}
                <div className="w-16 h-16 mb-6 flex items-center justify-center">
                  {item.iconUrl ? (
                    <img src={item.iconUrl} alt={item.title} className="w-full h-full object-contain" />
                  ) : (
                    // Լռելյայն նշան կամ պատկերակ, եթե նկար չկա
                    <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                      ✓
                    </div>
                  )}
                </div>

                {/* Որակի վերնագիր/նկարագրություն */}
                <h3 className="text-gray-900 font-semibold text-base sm:text-lg max-w-xs leading-snug">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}