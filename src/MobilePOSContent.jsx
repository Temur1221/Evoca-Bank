import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export default function MobilePOSContent() {
  const [content, setContent] = useState({
    title: '',
    description: '',
    imageUrl: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'mobilePosContent'));
        
        if (!querySnapshot.empty) {
          const docData = querySnapshot.docs[0].data();
          setContent(docData);
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
    return (
      <div className="text-center py-12">
        <p className="text-purple-600 font-medium">Բեռնվում է տվյալները Firebase-ից...</p>
      </div>
    );
  }

  return (
    /* Ավելացվել է max-w-7xl, mx-auto (կենտրոնացման համար) և px-4 sm:px-6 lg:px-8 (երկու կողմից հեռավորություն) */
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-purple-100 grid grid-cols-1 lg:grid-cols-2 items-center p-8 lg:p-12 gap-8">
        
        {/* Ձախ մաս՝ Վերնագիր և Նկարագրություն */}
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#5B00EB] tracking-tight">
            {content.title || "Evoca Mobile POS՝ mPOS"}
          </h1>
          
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            {content.description || "Evocabank-ի նոր mobile POS՝ mPOS գործիքի շնորհիվ Ձեր բիզնեսը կարող է ստանալ անկանխիկ վճարումներ՝ ավելի հեշտ ու արագ:"}
          </p>

        </div>

        {/* Աջ մաս՝ Նկարը Firebase-ից */}
        <div className="flex justify-center">
          {content.imageUrl ? (
            <img 
              src={content.imageUrl} 
              alt="Evoca Mobile POS" 
              className="max-h-80 object-contain rounded-xl shadow-md" 
            />
          ) : (
            <div className="relative w-full max-w-md bg-gradient-to-br from-purple-100 to-purple-50 p-6 rounded-2xl shadow-inner flex items-center justify-center">
              <div className="text-center text-purple-600 font-semibold py-12">
                [ Նկարը բացակայում է ]
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}