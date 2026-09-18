import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export default function InvestmentServices() {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const querySnapshot = await getDocs(collection(db, 'sections'));
        if (!querySnapshot.empty) {
          setContent(querySnapshot.docs[0].data());
        }
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div className="w-full py-10 text-center text-gray-500">Բեռնվում է...</div>;
  }

  if (!content) {
    return <div className="w-full py-10 text-center text-gray-500">Տվյալներ չեն գտնվել բազայում</div>;
  }

  return (
    <div className="w-full bg-[#f8f6fb] py-8 px-4 sm:px-8 lg:px-16 flex justify-center items-center">
      <div className="max-w-6xl w-full bg-[#f4effc] rounded-3xl overflow-hidden flex flex-col lg:flex-row items-stretch shadow-sm">
        
        {/* Ձախ մաս (Տեքստային բլոկ) */}
        <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
            {content.title}
          </h1>
          <p className="text-gray-700 text-xs sm:text-sm lg:text-base leading-relaxed font-medium">
            {content.description}
          </p>
        </div>

        {/* Աջ մաս (Նկարը Firebase-ից) */}
        <div className="w-full lg:w-1/2 bg-[#E1D2FD] flex items-center justify-center p-8 lg:p-12 relative min-h-[300px]">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute w-32 h-32 bg-[#6200EE] rounded-full blur-2xl opacity-10"></div>
            
            {content.imageUrl ? (
              <img 
                src={content.imageUrl} 
                alt={content.title} 
                className="max-h-64 w-full object-contain rounded-2xl z-10" 
              />
            ) : (
              <div className="bg-white/40 backdrop-blur-md rounded-2xl p-4 shadow-inner border border-white/50 w-full max-w-sm h-64 flex items-center justify-center text-gray-500 font-semibold text-sm">
                [Նկարի հղումը բացակայում է]
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}