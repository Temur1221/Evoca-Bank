import React, { useState, useEffect } from 'react';
import { db } from './firebase'; 
import { collection, getDocs } from 'firebase/firestore';

export default function ShareholderCard() {
  const [shareholder, setShareholder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShareholder = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'shareholders'));
        
        if (!querySnapshot.empty) {
          const docData = querySnapshot.docs[0].data();
          setShareholder(docData);
        } else {
          console.log('Տվյալներ չեն գտնվել Firestore-ում։');
        }
      } catch (error) {
        console.error('Սխալ տվյալներ ստանալիս:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchShareholder();
  }, []);

  if (loading) {
    return <div className="text-center py-12 text-gray-500">Բեռնվում է...</div>;
  }

  if (!shareholder) return null;

  return (
    /* items-center-ի միջոցով ամբողջ բլոկը (նկարն ու տեքստը միասին) ուղղահայաց կենտրոնանում է */
    <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
      
      {/* Բաժնետիրոջ նկարը */}
      <div className="w-full md:w-[320px] flex-shrink-0">
        <img 
          src={shareholder.imageUrl} 
          alt={shareholder.name} 
          className="w-full h-auto object-cover rounded-lg shadow-sm"
        />
      </div>

      {/* Տեքստային հատված */}
      <div className="w-full flex-grow space-y-4">
        
        {/* Անունը */}
        <h2 className="text-xl md:text-2xl font-bold text-[#6200EE]">
          {shareholder.name}
        </h2>

        {/* Նկարագրություն */}
        {shareholder.descriptions && (
          <p className="text-gray-800 text-sm md:text-base leading-relaxed whitespace-pre-line">
            {shareholder.descriptions}
          </p>
        )}

        {/* Նշում */}
        {shareholder.note && (
          <div className="pt-2 text-xs md:text-sm text-gray-700 leading-normal">
            {shareholder.note}
          </div>
        )}

      </div>

    </div>
  );
}