import React, { useEffect, useState } from 'react';
import { db } from './firebase'; // Ձեր firebase.js ֆայլի հղումը
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';

const NewsSection = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Վերցնում ենք վերջին 3 նորությունները Firestore-ից
        const newsRef = collection(db, 'news');
        // Եթե ունեք timestamp/date դաշտ, կարող եք կարգավորել orderBy('date', 'desc')
        const q = query(newsRef, limit(3)); 
        const querySnapshot = await getDocs(q);

        const newsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setNews(newsData);
      } catch (error) {
        console.error('Նորությունների բեռնման սխալ:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <section className="bg-[#f2f5fd] py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Վերնագիր + «Բոլոր նորությունները» կոճակ */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Վերջին նորությունները
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#e8e3f5] text-[#8a2be2] hover:bg-[#ded5f3] px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-colors duration-300"
          >
            Բոլոր նորությունները <span className="font-bold">&gt;</span>
          </a>
        </div>

        {/* Նորությունների Քարտերի Ցանցը (Grid) */}
        {loading ? (
          <div className="flex justify-center items-center py-20 text-gray-400">
            Բեռնվում է...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {news.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full border border-gray-100"
              >
                {/* Քարտի Վերևի Մասը՝ Նկար + Տեքստեր */}
                <div>
                  {/* Նկարի բլոկ */}
                  <div className="w-full h-52 sm:h-56 overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Բովանդակություն */}
                  <div className="p-6">
                    {/* Կատեգորիա (մանուշակագույն ուղղահայաց գծով) */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-1 h-3.5 bg-[#8a2be2] rounded-full inline-block"></span>
                      <span className="text-xs font-medium text-gray-600">
                        {item.category || 'Բանկային'}
                      </span>
                    </div>

                    {/* Վերնագիր */}
                    <h3 className="text-base font-bold text-gray-900 line-clamp-2 leading-snug hover:text-[#8a2be2] transition-colors cursor-pointer">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Քարտի Ներքևի Մասը՝ Ամսաթիվ */}
                <div className="px-6 pb-6 pt-0">
                  <span className="text-xs text-gray-400 font-medium">
                    {item.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default NewsSection;