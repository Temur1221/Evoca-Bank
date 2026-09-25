import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export default function CultureVideoSlider() {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [activeVideo, setActiveVideo] = useState(null); // Состояние для модального окна

  useEffect(() => {
    const fetchSliderData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'cultureVideos'));
        const videosList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        if (videosList.length > 0) setSlides(videosList);
      } catch (error) {
        console.error("Սխալ:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSliderData();
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const getYouTubeEmbedUrl = (url, autoplay = 0) => {
    if (!url) return '';
    if (url.includes('embed/')) return `${url.split('?')[0]}?autoplay=${autoplay}`;
    
    let videoId = '';
    if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0];
    } else if (url.includes('watch?v=')) {
      videoId = url.split('watch?v=')[1]?.split('&')[0];
    }
    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=${autoplay}` : url;
  };

  if (loading) return <div className="py-20 text-center text-white">Բեռնվում է...</div>;

  return (
    <div className="w-full bg-[#7a1cac] py-16 px-4 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex items-center justify-center relative min-h-[350px]">
        {slides.length > 0 && (
          <div 
            onClick={() => setActiveVideo(slides[currentIndex]?.videoUrl)}
            className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-4 text-gray-900 z-25 mx-auto cursor-pointer group"
          >
            <div className="relative rounded-xl overflow-hidden bg-black aspect-video flex items-center justify-center shadow-inner">
              {/* Показываем превью или iframe без возможности клика внутри, клик открывает модалку */}
              <iframe 
                src={getYouTubeEmbedUrl(slides[currentIndex]?.videoUrl, 0)} 
                title={slides[currentIndex]?.title}
                className="w-full h-full pointer-events-none opacity-80 group-hover:opacity-100 transition"
              />
              {/* Кастомная кнопка Play по центру */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition">
                <div className="w-16 h-16 bg-[#00C8B3] rounded-full flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition">
                  ▶
                </div>
              </div>
            </div>
            <h3 className="text-base sm:text-lg font-bold mt-4 text-gray-800">
              {slides[currentIndex]?.title}
            </h3>
          </div>
        )}

        <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/60 text-white p-3 rounded-full z-30 transition cursor-pointer">❮</button>
        <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/60 text-white p-3 rounded-full z-30 transition cursor-pointer">❯</button>
      </div>

      {/* МОДАЛЬНОЕ ОКНО ДЛЯ ВИДЕО (Включается и выключается полностью) */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden aspect-video shadow-2xl">
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-50 bg-white/20 hover:bg-white/40 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl transition"
            >
              ✕
            </button>
            <iframe 
              src={getYouTubeEmbedUrl(activeVideo, 1)} 
              title="Active Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}