import React, { useState, useEffect } from 'react';
import { db } from './firebase'; 
import { collection, getDocs, query, where } from 'firebase/firestore';
import Header from './Header';
import Footer from './Footer';

// Ենթամենյուի բաղադրիչ (SubNavigation)՝ հարմարեցված գույներով
const SubNavigation = () => {
  const menuItems = [
    { title: 'Քարտեր', link: '/cards' },
    { title: 'Քարտերի տրամադրում և սպասարկում', link: '/terms' },
    { title: 'Սոցիալական ապահովության վճարային քարտեր', link: '/social-cards' },
    { title: 'Evoca Benefits', link: '/benefits' },
  ];

  return (
    <nav className="bg-[#4C1D95] flex flex-wrap justify-center items-center py-4 px-4 gap-8 text-white text-sm font-medium">
      {menuItems.map((item, index) => {
        const isActive = item.title === 'Քարտեր';
        return (
          <a 
            key={index} 
            href={item.link} 
            className={`px-5 py-2.5 transition-all rounded-lg ${
              isActive 
                ? 'bg-[#3B0764] shadow-inner font-semibold' 
                : 'hover:bg-white/10'
            }`}
          >
            {item.title}
          </a>
        );
      })}
    </nav>
  );
};

export default function CardsList() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('Բոլորը');

  const filters = [
    { label: 'Բոլորը', type: 'all', value: 'Բոլորը' },
    { label: 'Պրեմիում', type: 'category', value: 'Պրեմիում' },
    { label: 'Նվեր քարտեր', type: 'category', value: 'Նվեր քարտեր' },
    { label: 'Թվային քարտեր', type: 'category', value: 'Թվային քարտեր' },
    { 
      label: 'ArCa', 
      type: 'paymentSystem', 
      value: 'arca', 
      img: 'https://www.evoca.am/images-cache/menu/1/17485004055849/50x24.png' 
    },
    { 
      label: 'Visa', 
      type: 'paymentSystem', 
      value: 'visa', 
      img: 'https://www.evoca.am/images-cache/menu/1/16137249251612/50x24.png' 
    },
    { 
      label: 'Mastercard', 
      type: 'paymentSystem', 
      value: 'mastercard', 
      img: 'https://www.evoca.am/images-cache/menu/1/16137249504065/50x24.png' 
    },
    { 
      label: 'Unionpay', 
      type: 'paymentSystem', 
      value: 'unionpay', 
      img: 'https://www.evoca.am/images-cache/menu/1/17288945044615/50x24.png' 
    },
  ];

  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true);
      try {
        const cardsRef = collection(db, 'bankCards');
        let q = cardsRef;

        const currentFilter = filters.find(f => f.value === activeFilter);

        if (currentFilter && currentFilter.type !== 'all') {
          if (currentFilter.type === 'category') {
            q = query(cardsRef, where('category', '==', currentFilter.value));
          } else if (currentFilter.type === 'paymentSystem') {
            q = query(cardsRef, where('paymentSystem', '==', currentFilter.value));
          }
        }

        const querySnapshot = await getDocs(q);
        const fetchedCards = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));

        setCards(fetchedCards);
      } catch (error) {
        console.error('Սխալ տվյալները ստանալիս:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, [activeFilter]);

  return (
    <>
      <Header />
      
      {/* Ենթամենյու */}
      <SubNavigation />

      <div className="max-w-[1280px] mx-auto px-4 py-10 font-sans bg-white">
        
        {/* Վերնագիր */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Քարտեր</h1>

        {/* Ֆիլտրման կոճակներ */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {filters.map((fil) => {
            const isActive = activeFilter === fil.value;
            return (
              <button
                key={fil.value}
                onClick={() => setActiveFilter(fil.value)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer flex items-center justify-center ${
                  isActive
                    ? 'bg-[#7C3AED] text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {fil.img ? (
                  <img 
                    src={fil.img} 
                    alt={fil.label} 
                    className="h-5 object-contain" 
                  />
                ) : (
                  fil.label
                )}
              </button>
            );
          })}
        </div>

        {/* Բեռնման կամ դատարկ վիճակ */}
        {loading ? (
          <div className="text-center py-20 text-gray-400">Բեռնվում է...</div>
        ) : cards.length === 0 ? (
          <div className="text-center py-20 text-gray-400">Տվյալներ չեն գտնվել</div>
        ) : (
          <div className="space-y-12">
            {cards.map((card) => (
              <div
                key={card.id}
                className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 pb-12 border-b border-gray-100 last:border-b-0"
              >
                {/* 1. Նկարը */}
                <div className="w-full lg:w-[300px] flex-shrink-0 flex justify-center">
                  {card.image && (
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full max-w-[280px] h-auto object-contain rounded-2xl drop-shadow-md"
                    />
                  )}
                </div>

                {/* 2. Վերնագիր, նկարագրություն, հատկանիշներ և կոճակ */}
                <div className="flex-1 space-y-4 text-center lg:text-left w-full">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {card.title}
                  </h2>
                  
                  {card.description && (
                    <p className="text-sm text-gray-600 leading-relaxed max-w-[700px]">
                      {card.description}
                    </p>
                  )}

                  {/* Հատկանիշներ (Value + Desc) */}
                  {(card.feature1Value || card.feature2Value || card.feature3Value || card.feature4Value) && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-2">
                      
                      {card.feature1Value && (
                        <div className="space-y-1">
                          <p className="text-xl sm:text-2xl font-bold text-[#7C3AED]">
                            {card.feature1Value}
                          </p>
                          {card.feature1Desc && (
                            <p className="text-xs text-gray-600 leading-tight">
                              {card.feature1Desc}
                            </p>
                          )}
                        </div>
                      )}

                      {card.feature2Value && (
                        <div className="space-y-1">
                          <p className="text-xl sm:text-2xl font-bold text-[#7C3AED]">
                            {card.feature2Value}
                          </p>
                          {card.feature2Desc && (
                            <p className="text-xs text-gray-600 leading-tight">
                              {card.feature2Desc}
                            </p>
                          )}
                        </div>
                      )}

                      {card.feature3Value && (
                        <div className="space-y-1">
                          <p className="text-xl sm:text-2xl font-bold text-[#7C3AED]">
                            {card.feature3Value}
                          </p>
                          {card.feature3Desc && (
                            <p className="text-xs text-gray-600 leading-tight">
                              {card.feature3Desc}
                            </p>
                          )}
                        </div>
                      )}

                      {card.feature4Value && (
                        <div className="space-y-1">
                          <p className="text-xl sm:text-2xl font-bold text-[#7C3AED]">
                            {card.feature4Value}
                          </p>
                          {card.feature4Desc && (
                            <p className="text-xs text-gray-600 leading-tight">
                              {card.feature4Desc}
                            </p>
                          )}
                        </div>
                      )}

                    </div>
                  )}

                  {/* Կոճակ */}
                  <div className="pt-3">
                    <button
                      onClick={() => alert(`Անցում ${card.title} էջ`)}
                      className="bg-[#F3E8FF] text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white font-semibold px-8 py-3 rounded-full transition-all text-sm inline-flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Մանրամասն</span>
                      <span className="text-xs">→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}