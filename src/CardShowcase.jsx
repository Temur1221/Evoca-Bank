import React, { useState, useEffect, useRef } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

// Swiper slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function CardShowcase() {
  const [cards, setCards] = useState([]);
  const [activeCard, setActiveCard] = useState(null);
  const [loading, setLoading] = useState(true);

  // 3D Շարժման համար state-եր
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "cards"));
        const cardsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setCards(cardsList);
        if (cardsList.length > 0) {
          setActiveCard(cardsList[0]);
        }
      } catch (error) {
        console.error("Սխալ տվյալները ստանալիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  // Մկնիկը քարտի վրայով շարժելու հաշվարկը
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Գտնում ենք մկնիկի դիրքը քարտի կենտրոնի համեմատ
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Անկյունների հաշվարկ (մաքսիմում 20 աստիճան)
    const rotateX = ((y - centerY) / centerY) * -20;
    const rotateY = ((x - centerX) / centerX) * 20;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 }); // Մկնիկը հանելիս քարտը վերադառնում է ուղիղ դիրքի
  };

  if (loading) {
    return <div className="flex justify-center items-center h-64 text-purple-700 font-semibold text-lg">Բեռնվում է...</div>;
  }

  if (!activeCard) {
    return <div className="text-center p-10 text-gray-500">Քարտեր չեն գտնվել:</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-8 flex flex-col lg:flex-row items-center justify-between gap-12 bg-slate-50 rounded-3xl min-h-[450px]">
      
      {/* 1. Ձախ կողմի Slider-ը */}
      <div className="flex flex-col items-center w-full lg:w-1/4 h-[380px] relative">
        <button id="prev-btn" className="z-10 p-1 text-purple-700 hover:scale-125 transition cursor-pointer">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 15l7-7 7 7" />
          </svg>
        </button>

        <Swiper
          direction={'vertical'}
          slidesPerView={3}
          spaceBetween={12}
          modules={[Navigation]}
          navigation={{
            prevEl: '#prev-btn',
            nextEl: '#next-btn',
          }}
          className="w-full h-full my-2"
        >
          {cards.map((card) => {
            const isActive = activeCard.id === card.id;
            return (
              <SwiperSlide key={card.id}>
                <div 
                  onClick={() => {
                    setActiveCard(card);
                    setRotate({ x: 0, y: 0 });
                  }}
                  className={`flex flex-col items-center cursor-pointer transition-all duration-200 ${
                    isActive ? 'opacity-100' : 'opacity-60 hover:opacity-90'
                  }`}
                >
                  <div className={`w-32 h-20 rounded-xl border bg-white shadow-sm overflow-hidden flex items-center justify-center transition-all ${
                    isActive ? 'border-purple-600 ring-2 ring-purple-600 shadow-md' : 'border-gray-200'
                  }`}>
                    <img 
                      src={card.imageUrl} 
                      alt={card.title} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <span className="text-[11px] font-semibold text-gray-700 mt-1 text-center truncate w-32">
                    {card.title}
                  </span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <button id="next-btn" className="z-10 p-1 text-purple-700 hover:scale-125 transition cursor-pointer">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* 2. Մեջտեղի 3D ՇԱՐԺՎՈՂ ՔԱՐՏԸ (3D Perspective) */}
      <div 
        className="flex justify-center w-full lg:w-2/4"
        style={{ perspective: '1000px' }} // 3D խորություն
      >
        <div 
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
            transition: isHovered ? 'transform 0.05s ease-out' : 'transform 0.5s ease-in-out',
          }}
          className="w-80 h-52 sm:w-96 sm:h-60 rounded-2xl shadow-2xl overflow-hidden cursor-pointer relative"
        >
          <img 
            src={activeCard.imageUrl} 
            alt={activeCard.title} 
            className="w-full h-full object-cover pointer-events-none"
          />
        </div>
      </div>

      {/* 3. Ուջ կողմի տեքստը */}
      <div className="w-full lg:w-2/4 flex flex-col gap-4 text-left justify-center">
        <h2 className="text-3xl font-bold text-gray-900 leading-tight">
          {activeCard.title}
        </h2>
        
        {activeCard.description && (
          <p className="text-gray-600 text-sm leading-relaxed">
            {activeCard.description}
          </p>
        )}

        {activeCard.subDescription && (
          <p className="text-gray-600 text-sm leading-relaxed">
            <strong className="text-purple-700 font-semibold">{activeCard.title}</strong>-ը {activeCard.subDescription}
          </p>
        )}

        <button className="mt-2 bg-purple-700 hover:bg-purple-800 active:scale-95 text-white font-medium text-sm py-3 px-8 rounded-full transition-all w-fit shadow-md cursor-pointer">
          Մանրամասն
        </button>
      </div>

    </div>
  );
}