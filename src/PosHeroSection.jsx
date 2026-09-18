import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase'; // Ճշգրտիր ճանապարհը ըստ քո ֆայլերի կառուցվածքի

export default function PosHeroSection() {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContent() {
      try {
        // Վերցնում ենք 'pos' հավաքածուի բոլոր փաստաթղթերը
        const querySnapshot = await getDocs(collection(db, "pos"));
        
        if (!querySnapshot.empty) {
          // Վերցնում ենք առաջին փաստաթղթի տվյալները
          const docData = querySnapshot.docs[0].data();
          setContent(docData);
        } else {
          console.log("No documents found in 'pos' collection!");
        }
      } catch (error) {
        console.error("Error fetching POS content from Firebase:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchContent();
  }, []);

  if (loading) {
    return <div className="py-12 text-center text-gray-500">Բեռնվում է...</div>;
  }

  // Լռելյայն արժեքներ, եթե բազայում դեռ տվյալներ չկան
  const title = content?.title || "POS Տերմինալ";
  const description = content?.description || "POS-ը (point of sale) վճարային համակարգ է, որն օգտագործվում է անկանխիկ վճարումներ ընդունելու համար։ Արագ և տեղում վճարումներ կատարելն այսօր կարևոր նախապայման է Ձեր գնորդների համար։";
  const imageUrl = content?.imageUrl || content?.image || "https://images.unsplash.com/photo-1556742049-0a67d55f0c43?auto=format&fit=crop&w=800&q=80";

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* ձախ կողմի տեքստային հատված */}
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            {title}
          </h1>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* աջ կողմի նկարի հատված */}
        <div className="flex-1 w-full flex justify-center">
          <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={imageUrl} 
              alt="POS Տերմինալ" 
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>

      </div>
    </div>
  );
}