import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function BusinessDepositsIntroSection() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Վերցնում ենք տվյալները 'depositsHero' հավաքածուից
        const querySnapshot = await getDocs(collection(db, 'depositsHero'));
        if (!querySnapshot.empty) {
          // Վերցնում ենք առաջին փաստաթղթի տվյալները
          setData(querySnapshot.docs[0].data());
        } else {
          console.log('Տվյալներ չեն գտնվել depositsHero հավաքածուում!');
        }
      } catch (error) {
        console.error('Սխալ տվյալներ ստանալիս:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto py-12 px-4 text-center text-gray-400">
        Բեռնվում է...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white border border-purple-100 rounded-3xl shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-center">
        
        {/* Ձախ կողմի տեքստային հատված */}
        <div className="p-8 sm:p-12 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            {data?.title || "Բիզնես ավանդներ"}
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            {data?.description || "Տեղաբաշխեք ձեր ընկերության ազատ միջոցները շահավետ պայմաններով:"}
          </p>
        </div>

        {/* Աջ կողմի նկարի հատված (կարդացվում է Firebase-ի heroImage դաշտից) */}
        <div className="h-full min-h-[300px] bg-gray-100">
          <img 
            src={data?.heroImage || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"} 
            alt="Business Deposits" 
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  );
}