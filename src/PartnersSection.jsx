import React, { useEffect, useState, useRef } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

// Swiper React components & modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const PartnersSection = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);

  // Custom Navigation buttons-ի reference-ները
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'partners'));
        const partnersData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPartners(partnersData);
      } catch (error) {
        console.error("Տվյալների բեռնման սխալ:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between gap-12 font-sans overflow-visible">
      
      {/* Ձախ տեքստային մաս */}
      <div className="w-full lg:w-1/3 z-10">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-5">
          Գործընկերներ
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-8">
          Դարձե՛ք Evocabank-ի Գործընկեր և եկե՛ք միասին գնանք դեպի գունեղ նոր իրականություն։
          Դառնալով Evoca ընտանիքի անդամ՝ Դուք մուտք կգործեք ժամանակակից և յուրահատուկ աշխարհ։
          Մենք մշտապես բաց ենք հետաքրքիր առաջարկների ու համագործակցությունների համար։
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-[#f3ebf9] text-[#8a2be2] hover:bg-[#e5d3f7] px-6 py-3 rounded-full font-semibold text-sm transition-colors duration-300"
        >
          Բոլոր գործընկերները <span className="font-bold">&gt;</span>
        </a>
      </div>

      {/* Աջ մաս՝ Swiper Slider + Պտտվող Շրջանակ + Ձեռք */}
      <div className="relative w-full lg:w-2/3 flex items-center justify-end min-h-[300px]">

        {/* 1. ՀԵՏԵՎԻ ՊՏՏՎՈՂ ԴԵՂԻՆ ԿԵՏԻԿԱՎՈՐ ՇՐՋԱՆԱԿԸ (Animate Spin) */}
        <div className="absolute -left-12 top-1/2 -translate-y-1/2 z-0 pointer-events-none">
          <svg
            className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 text-yellow-400 animate-[spin_25s_linear_infinite]"
            viewBox="0 0 200 200"
            fill="none"
          >
            <circle
              cx="100"
              cy="100"
              r="90"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeDasharray="2 8"
              strokeLinecap="round"
            />
            <circle
              cx="100"
              cy="100"
              r="80"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeDasharray="2 8"
              strokeLinecap="round"
            />
            <circle
              cx="100"
              cy="100"
              r="70"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeDasharray="2 8"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* 2. ՍՊԻՏԱԿ ՔԱՐՏԸ (rounded-l-full) */}
        <div className="relative z-10 bg-[#f8f6fb] rounded-l-full h-48 md:h-52 pr-4 md:pr-8 pl-32 md:pl-44 w-full flex items-center justify-between shadow-sm border-l border-t border-b border-gray-100/60">
          
          {/* Ձախ կոճակ (<) */}
          <button
            ref={prevRef}
            className="text-[#8a2be2] font-bold text-2xl p-2 hover:opacity-75 transition-opacity z-30 cursor-pointer select-none shrink-0"
          >
            &lt;
          </button>

          {/* Swiper Slider */}
          <div className="w-full mx-2 overflow-hidden">
            {loading ? (
              <p className="text-sm text-gray-400 text-center">Բեռնվում է...</p>
            ) : (
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={2}
                breakpoints={{
                  640: { slidesPerView: 3 },
                  1024: { slidesPerView: 4 },
                }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={partners.length > 4}
                onInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
                className="w-full"
              >
                {partners.map((partner, index) => (
                  <SwiperSlide key={partner.id || index}>
                    <div className="flex items-center justify-center px-4 border-r border-gray-200/80 h-16">
                      <img
                        src={partner.logoUrl}
                        alt={partner.name || 'Partner Logo'}
                        className="max-h-12 max-w-[120px] w-full object-contain opacity-85 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>

          {/* Աջ կոճակ (>) */}
          <button
            ref={nextRef}
            className="text-[#8a2be2] font-bold text-2xl p-2 hover:opacity-75 transition-opacity z-30 cursor-pointer select-none shrink-0"
          >
            &gt;
          </button>

        </div>

        {/* 3. ՁԵՌՔԻ ՆԿԱՐԸ */}
        {/* [clip-path:inset(-120px_0px_0px_0px)] — վերևից բաց է թողնում 120px, իսկ ներքևից կտրում է ճշգրիտ քարտի եզրով */}
        <div className="absolute left-0 bottom-0 z-20 pointer-events-none flex items-end">
          <img
            src="https://www.evoca.am/img/hand.png"
            alt="Hand Gesture"
            className="h-[280px] sm:h-[310px] md:h-[340px] object-contain drop-shadow-md max-w-none [clip-path:inset(-120px_0px_0px_0px)]"
          />
        </div>

      </div>
    </section>
  );
};

export default PartnersSection;