import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

export default function HeroSlider() {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const slidesQuery = query(collection(db, 'slider'), orderBy('order', 'asc'));
        const querySnapshot = await getDocs(slidesQuery);
        
        const slidesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setSlides(slidesData);
      } catch (error) {
        console.error("Firebase fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSlides();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  if (loading) {
    return (
      <div className="w-full px-4 sm:px-8 py-10 flex justify-center items-center min-h-[400px]">
        <div className="text-[#5200FF] font-bold text-lg animate-pulse font-sans">
          Բեռնվում է...
        </div>
      </div>
    );
  }

  if (slides.length === 0) return null;

  const currentSlide = slides[currentIndex];
  
  // Կարդում ենք ֆոնի գույնը (թե՛ bgColor, թե՛ bgcolor)
  const slideBg = currentSlide.bgColor || currentSlide.bgcolor || '#5200FF';
  const bg = slideBg.toLowerCase();
  const isLightBg = bg === '#e5e5e5' || bg === '#e2dcff' || bg === '#ffffff';

  return (
    <div className="w-full px-4 sm:px-8 py-4 font-sans">
      {/* Container */}
      <div 
        style={{ backgroundColor: slideBg }}
        className="relative w-full rounded-[32px] sm:rounded-[40px] px-6 sm:px-12 md:px-16 py-8 sm:py-12 min-h-[420px] flex flex-col justify-between overflow-hidden transition-colors duration-500 shadow-xl"
      >
        
        {/* Content Section */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-10 relative z-10 my-auto">
          
          {/* Ձախ մաս՝ Տեքստեր և Կոճակ */}
          <div className="w-full md:w-1/2 flex flex-col items-start text-left space-y-4">
            
            {/* Title - font-sans և tracking-tight */}
            <h1 
              style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
              className={`text-2xl sm:text-3xl lg:text-[34px] font-black leading-snug tracking-tight transition-colors duration-300 ${
                isLightBg ? 'text-[#2C2C2C]' : 'text-white'
              }`}
            >
              {currentSlide.title}
            </h1>
            
            {/* Description */}
            <p 
              style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
              className={`text-xs sm:text-sm font-medium transition-colors duration-300 max-w-md leading-relaxed ${
                isLightBg ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              {currentSlide.description}
            </p>

            {/* Button */}
            <div className="pt-2">
              <button 
                style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                className={`font-extrabold text-xs sm:text-sm px-6 py-3 rounded-full transition duration-200 shadow-sm cursor-pointer ${
                  isLightBg 
                    ? 'bg-[#5200FF] text-white hover:bg-[#4300D6]' 
                    : 'bg-white text-[#5200FF] hover:bg-white/90'
                }`}
              >
                {currentSlide.buttonText || 'Իմանալ ավելին'}
              </button>
            </div>
          </div>

          {/* Աջ մաս՝ Նկարը */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center">
            <div className="relative w-56 sm:w-72 md:w-[340px] lg:w-[380px]">
              <img
                src={currentSlide.image}
                onError={(e) => {
                  e.target.src = '/evoca-card.png';
                }}
                alt={currentSlide.title}
                className="w-full h-auto object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Ներքևի Controls (Dots + Arrows) */}
        <div className="flex items-center justify-between mt-6 relative z-10 px-2">
          
          {/* Prev Arrow */}
          <button
            onClick={handlePrev}
            className={`transition cursor-pointer p-1 ${
              isLightBg ? 'text-gray-700 hover:text-black' : 'text-white/80 hover:text-white'
            }`}
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>

          {/* Dynamic Dots */}
          <div className="flex items-center space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === index
                    ? `w-5 h-2 ${isLightBg ? 'bg-[#5200FF]' : 'bg-white'}`
                    : `w-2 h-2 ${isLightBg ? 'bg-gray-400 hover:bg-gray-600' : 'bg-white/40 hover:bg-white/70'}`
                }`}
              />
            ))}
          </div>

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            className={`transition cursor-pointer p-1 ${
              isLightBg ? 'text-gray-700 hover:text-black' : 'text-white/80 hover:text-white'
            }`}
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

        </div>

      </div>
    </div>
  );
}