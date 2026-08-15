import React, { useState, useEffect } from 'react';
import { db } from './firebase'; // Քո firebase.js ֆայլը
import { collection, onSnapshot } from 'firebase/firestore';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Swiper-ի CSS ֆայլերը
import 'swiper/css';
import 'swiper/css/pagination';

export default function ReviewsSwiper() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Firebase Firestore-ից "reviews" collection-ի ստացումը
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'reviews'), (snapshot) => {
      const reviewsList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReviews(reviewsList);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="w-full bg-[#f6f5fa] py-16 text-center text-gray-400">
        Բեռնվում է...
      </div>
    );
  }

  if (reviews.length === 0) {
    return null; // Եթե տվյալներ չկան, ոչինչ չի ցուցադրվում
  }

  return (
    <div className="w-full bg-[#f6f5fa] py-16 px-4 relative overflow-hidden select-none">
      {/* Ձախ կողմի էլեմենտներ */}
      <div className="hidden md:block absolute left-[8%] top-[20%] text-5xl opacity-80 pointer-events-none">
        <img src="https://www.evoca.am/img/reviews/hand2.png" alt="" />
      </div>
      <div className="hidden md:block absolute left-[18%] bottom-[25%] text-purple-500 font-bold text-xl pointer-events-none transform -rotate-12">
        ⌇⌇⌇
      </div>

      {/* Աջ կողմի էլեմենտներ */}
      <div className="hidden md:block absolute right-[8%] top-[20%] text-5xl opacity-80 pointer-events-none">
        <img src="https://www.evoca.am/img/reviews/hand1.png" alt="" />
      </div>
      <div className="hidden md:block absolute right-[18%] bottom-[25%] text-pink-500 font-bold text-xl pointer-events-none transform rotate-12">
        ⌇⌇⌇
      </div>

      {/* Main Swiper Container */}
      <div className="max-w-[850px] mx-auto text-center relative z-10">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={reviews.length > 1} // Loop-ը միանում է, եթե 1-ից ավելի կարծիք կա
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: '.custom-swiper-pagination',
          }}
          className="pb-10"
        >
          {reviews.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="flex flex-col items-center justify-center">
                {/* Աստղիկները (ըստ Firebase-ի rating-ի) */}
                <div className="flex gap-1.5 mb-6 text-yellow-400 text-2xl">
                  {Array.from({ length: slide.rating || 5 }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                {/* Կարծիքի տեքստը */}
                <div className="flex items-start justify-center gap-2 max-w-[700px] mb-6">
                  <span className="text-[#8b3dff] text-3xl font-black leading-none select-none">
                    “
                  </span>
                  <p className="text-[#2b2b2b] text-base md:text-lg font-medium leading-relaxed">
                    {slide.text && slide.text.includes("Evocabank") ? (
                      <>
                        {slide.text.split("Evocabank")[0]}
                        <span className="text-[#8b3dff] font-bold">Evocabank</span>
                        {slide.text.split("Evocabank")[1]}
                      </>
                    ) : (
                      slide.text
                    )}
                  </p>
                  <span className="text-[#8b3dff] text-3xl font-black leading-none select-none self-end">
                    ”
                  </span>
                </div>

                {/* Հեղինակի անունը */}
                <h4 className="text-[#2b2b2b] font-bold text-base mb-1">
                  {slide.author}
                </h4>

                {/* Հեղինակի պաշտոնը/դերը */}
                <p className="text-gray-400 text-sm font-normal">
                  {slide.role}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Swiper Pagination Dot-երը */}
        <div className="custom-swiper-pagination flex justify-center items-center gap-2 mt-4" />
      </div>

      {/* Ուղղված Pagination Style Customization (առանց jsx global-ի) */}
      <style>{`
        .custom-swiper-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background-color: #d1d5db;
          opacity: 1;
          transition: all 0.3s ease;
          margin: 0 3px !important;
          border-radius: 50%;
        }
        .custom-swiper-pagination .swiper-pagination-bullet-active {
          background-color: #8b3dff !important;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
}