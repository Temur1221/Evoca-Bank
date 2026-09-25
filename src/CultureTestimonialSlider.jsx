import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export default function CultureTestimonialSlider() {
  const [quotes, setQuotes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'teamQuotes'));
        const quotesList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        if (quotesList.length > 0) {
          setQuotes(quotesList);
        } else {
          // Data cadangan yen Firestore isih kosong
          setQuotes([
            {
              id: '1',
              words: ['Թրենդային', 'Պահանջված', 'Ուրախ'],
              name: 'Հարություն Սահակյան',
              position: 'Անվտանգության մասնագետ'
            },
            {
              id: '2',
              words: ['Դինամիկ', 'Պրպտող', 'Զարգացող'],
              name: 'Լիլիթ Գաբրիելյան',
              position: 'Գլխավոր ֆինանսական տնօրեն'
            },
            {
              id: '3',
              words: ['Կրեատիվ', 'Նորարար', 'Մանուշակագույն'],
              name: 'Ալլա Զաքարյան',
              position: 'Վճարային գործիքների մասնագետ'
            }
          ]);
        }
      } catch (error) {
        console.error("Goreshka nalika njupuk data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuotes();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, quotes.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, quotes.length - 2)) % Math.max(1, quotes.length - 2));
  };

  if (loading) {
    return <div className="py-12 text-center text-gray-500">Mucculake data...</div>;
  }

  return (
    <section className="w-full py-16 px-4 bg-white my-6">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
          Հարցրու՛ մեր թիմին. «Ինչպիսի՞ն է Evoca-ն՝ 3 բառով»
        </h2>
      </div>

      <div className="max-w-6xl mx-auto relative flex items-center justify-center">
        {/* Tombol Nglayari Kiri */}
        <button 
          onClick={prevSlide}
          className="absolute -left-4 sm:-left-8 top-1/2 -translate-y-1/2 text-purple-600 hover:text-purple-800 text-2xl font-bold z-10 p-2"
        >
          ←
        </button>

        {/* Kotak-kotak Kutipan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-4">
          {quotes.slice(currentIndex, currentIndex + 3).map((item, index) => (
            <div 
              key={item.id || index} 
              className="bg-[#F8F7FC] rounded-2xl p-8 relative shadow-sm border border-purple-50 flex flex-col justify-between min-h-[220px]"
            >
              {/* Tandha Petik Ungu ing Pojok */}
              <div className="absolute top-4 right-4 text-purple-600 text-2xl font-serif font-bold">
                ❞
              </div>

              {/* Tembung-tembung */}
              <div className="mb-6">
                {Array.isArray(item.words) ? (
                  item.words.map((word, i) => (
                    <h3 key={i} className="text-xl font-bold text-purple-700 leading-snug">
                      {word}
                    </h3>
                  ))
                ) : (
                  <p className="text-xl font-bold text-purple-700 leading-snug whitespace-pre-line">
                    {item.words}
                  </p>
                )}
              </div>

              {/* Jeneng lan Jabatan */}
              <div>
                <p className="font-bold text-gray-900 text-sm">{item.name}</p>
                <p className="text-gray-500 text-xs mt-0.5">{item.position}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol Nglayari Tengen */}
        <button 
          onClick={nextSlide}
          className="absolute -right-4 sm:-right-8 top-1/2 -translate-y-1/2 text-purple-600 hover:text-purple-800 text-2xl font-bold z-10 p-2"
        >
          →
        </button>
      </div>

      {/* Indikator Titik */}
      <div className="flex justify-center items-center space-x-2 mt-8">
        <span className="w-2 h-2 rounded-full bg-purple-600 inline-block"></span>
        <span className="w-2 h-2 rounded-full bg-gray-300 inline-block"></span>
      </div>
    </section>
  );
}