import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function HistorySwiper({ historySlides, activeYearIndex, onSlideChange }) {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(activeYearIndex);
    }
  }, [activeYearIndex]);

  // Եթե տվյալները դեռ բեռնվում են Firestore-ից, ստեղծում ենք դատարկ զանգված
  const slides = historySlides || [];

  return (
    <Swiper
      ref={swiperRef}
      modules={[Pagination, Navigation]}
      spaceBetween={30}
      slidesPerView={1}
      onSlideChange={(swiper) => onSlideChange(swiper.activeIndex)}
      className="pb-6"
    >
      {slides.map((slide, idx) => (
        <SwiperSlide key={idx}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 py-4">
            
            {/* Տեքստը (բեռնվում է Firestore-ի slide.text-ից) */}
            <div className="w-full lg:max-w-xl text-gray-700 text-sm sm:text-base leading-relaxed bg-[#F8F7FC] p-8 rounded-r-3xl rounded-tl-3xl border-l-4 border-[#6200EE] shadow-sm">
              <p>{slide.text}</p>
            </div>

            {/* Նկարը (բեռնվում է Firestore-ի slide.image-ից) */}
            <div className="w-full lg:w-[480px] flex-shrink-0">
              <img 
                src={slide.image} 
                alt="History slide" 
                className="w-full h-auto rounded-2xl shadow-md object-cover"
              />
            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}