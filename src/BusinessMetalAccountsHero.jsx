import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function BusinessMetalAccountsHero() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const querySnapshot = await getDocs(collection(db, 'businessMetalAccountsHero'));
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

  // Լռելյայն տվյալներ, եթե բազայում դեռ տվյալներ չկան կամ բեռնվում են
  const defaultData = {
    title: "Առարկայազուրկ մետաղական հաշիվներ",
    description: "Առաջարկում ենք բացել առարկայազուրկ մետաղական հաշիվներ, որոնք նախատեսված են անկանխիկ ոսկու հաշվառման համար: Այս ցպահանջ հաշիվները հնարավորություն են ընձեռում խնայողություններ կատարել անկանխիկ ոսկով, ինչպես նաև ավելացնել դրանք՝ միջազգային շուկայում ոսկու գնի բարձրացման շնորհիվ:",
    imageUrl: "" // Այստեղ կարող ես ավելացնել լռելյայն նկարի import կամ URL
  };

  const content = data || defaultData;

  if (loading) {
    return <div className="py-12 text-center text-gray-400 text-sm">Բեռնվում է...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-r from-purple-50/60 to-white border border-purple-100 rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* Ձախ կողմի տեքստային հատված */}
        <div className="max-w-xl space-y-6">
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight">
            {content.title}
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            {content.description}
          </p>
        </div>

        {/* աջ կողմի նկարի հատված */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-lg bg-pink-50/50 p-4 border border-purple-100 w-full max-w-md">
            {/* Եթե նկար ունես բազայից կամ նախընտրում ես տեղադրել ստատիկ */}
            <div className="h-64 sm:h-72 bg-purple-100 rounded-xl flex items-center justify-center text-purple-400 font-medium overflow-hidden">
              {content.imageUrl ? (
                <img src={content.imageUrl} alt="Metal Accounts" className="w-full h-full object-cover" />
              ) : (
                <span className="text-sm text-gray-400">[Ոսկու ձուլակտորի նկար]</span>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}