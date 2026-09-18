import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export default function VPosHeroSection() {
  const [content, setContent] = useState({
    title: "V-POS Տերմինալ",
    description: "V-POS-ը (virtual point of sale) վիրտուալ վճարային համակարգն է...",
    imageUrl: "" 
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContent() {
      try {
        // Վերցնում ենք 'hero' հավաքածուի բոլոր փաստաթղթերը
        const querySnapshot = await getDocs(collection(db, "hero"));
        if (!querySnapshot.empty) {
          // Վերցնում ենք առաջին փաստաթղթի տվյալները (որտեղ քո երկար ID-ն է)
          setContent(querySnapshot.docs[0].data());
        }
      } catch (error) {
        console.error("Error fetching V-POS content from Firebase:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchContent();
  }, []);

  if (loading) {
    return <div className="py-12 text-center text-gray-500">Բեռնվում է...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-12">
        
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            {content.title}
          </h1>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            {content.description}
          </p>
        </div>

        <div className="flex-1 w-full flex justify-center">
          <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={content.imageUrl || "https://images.unsplash.com/photo-1556742049-0a67d55f0c43?auto=format&fit=crop&w=800&q=80"} 
              alt="V-POS Տերմինալ" 
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>

      </div>
    </div>
  );
}