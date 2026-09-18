import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function BusinessDepositsDetailsSection() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const querySnapshot = await getDocs(collection(db, 'depositsDetails'));
        if (!querySnapshot.empty) {
          setData(querySnapshot.docs[0].data());
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
    return <div className="py-4 text-center text-gray-400 text-sm">Բեռնվում է...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
      
      {/* Առաջին պարբերություն */}
      <p>
        {data?.text1 || (
          <>
            Հաշիվների սպասարկումն իրականացնում ենք մեր{' '}
            <span className="text-[#6200EE] underline font-medium cursor-pointer">
              Ընթացիկ հաշիվների սպասարկման սակագներին համաձայն
            </span>
            : Հաշիվներ բացելու համար կարող եք դիմել մեր Գլխամասային գրասենյակ և կամայական մասնաճյուղ:
          </>
        )}
      </p>

      {/* Երկրորդ պարբերություն (Ուշադրություն բլոկ) */}
      <p>
        {data?.text2 || (
          <>
            <span className="font-bold text-gray-900">Ուշադրություն.</span>{' '}
            <span className="text-[#6200EE] underline font-medium cursor-pointer">
              Առարկայազուրկ մետաղական հաշիվների
            </span>
            , Ավանդային և Քարտային հաշիվների սպասարկման պայմաններին կարող եք ծանոթանալ Առարկայազուրկ մետաղական հաշիվներ, Վճարային քարտեր ենթաբաժիններում և իրավաբանական անձանց բանկային ծառայությունների Ավանդներ բաժնում:
          </>
        )}
      </p>

    </div>
  );
}