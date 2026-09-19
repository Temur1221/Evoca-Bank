import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import HistorySection from './HistorySection';

export default function AboutGeneral() {
  const [content, setContent] = useState(null);
  const [historySlides, setHistorySlides] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // 1. Բեռնում ենք ընդհանուր տվյալները Firestore-ից (aboutContent)
        const aboutSnapshot = await getDocs(collection(db, 'aboutContent'));
        if (!aboutSnapshot.empty) {
          setContent(aboutSnapshot.docs[0].data());
        }

        // 2. Բեռնում ենք սլայդերը առանձին historySlides հավաքածուից
        const slidesSnapshot = await getDocs(collection(db, 'historySlides'));
        const slidesList = slidesSnapshot.docs.map(doc => doc.data());
        setHistorySlides(slidesList);

      } catch (error) {
        console.error('Սխալ տվյալների բեռնման ժամանակ:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center py-20 font-medium text-gray-600">Բեռնվում է...</div>;
  }

  let paragraphsList = Array.isArray(content?.paragraphs) ? content.paragraphs : [];

  // Այստեղ սահմանում ենք պահուստային (fallback) զանգվածը, եթե բազայից valuesList-ը դատարկ է կամ չկա
  const defaultValuesList = [
    {
      title: "Human-first",
      text: "Առաջին տեղում միշտ մարդիկ են՝ մեր հաճախորդները, էքսպերտների թիմը և հասարակությունը։ Չէ՞ որ աշխարհում ամեն ինչ արվում է մարդկանց կողմից մարդկանց համար։"
    },
    {
      title: "Նորարարություն",
      text: "Նորարարությունը մեր ԴՆԹ-ի մասն է, իսկ փոփոխությունն այսօր միակ հաստատունն է։ Մենք բաց ենք և պատրաստակամ զարգանալու համար։"
    },
    {
      title: "Դրական ազդեցություն",
      text: "Մենք ձգտում ենք ունենալ դրական ազդեցություն և նպաստել աշխարհն ավելի լավը դարձնելուն։"
    }
  ];

  const valuesListToRender = content?.valuesList?.length ? content.valuesList : defaultValuesList;

  return (
    <div className="min-h-screen bg-[#F5F5F7] flex flex-col justify-between">
      <div>
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-10 space-y-16">
          
          <div>
            <h1 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
              {content?.title || 'Ընդհանուր տեղեկատվություն'}
            </h1>
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="space-y-6 text-sm sm:text-base max-w-2xl">
                {paragraphsList.length > 0 ? (
                  paragraphsList.map((p, index) => (
                    <p key={index} className="leading-relaxed text-gray-900 font-normal">
                      {p}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-900 leading-relaxed font-normal">
Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ:

Մենք հատուկ ուշադրություն ենք դարձնում մոբայլ ծառայությունների զարգացմանը:

Մենք աշխատում ենք mobile-first ֆորմատով՝ յուրաքանչյուր նոր ծառայություն նախագծելիս՝ նախևառաջ հաշվի ենք առնելու դրա՝ հավելվածով օգտագործման հարմարավետությունը:

Աշխարհը թվային է դառնում, և մենք պատրաստ ենք դրան:

                  </p>
                )}
              </div>
              <div className="w-full lg:w-[450px] flex-shrink-0">
                <img 
                  src={content?.imageUrl || "https://resource.evoca.am/images/WebPayment/evoca.png"} 
                  alt="Evoca About" 
                  className="w-full h-auto rounded-2xl object-cover shadow-md"
                />
              </div>
            </div>
          </div>

          {/* ՄԱՆՈՒՇԱԿԱԳՈՒՅՆ ԲԼՈԿ (Մեր տեսլականը) */}
          <div className="bg-[#6200EE] text-white rounded-3xl p-8 sm:p-12 shadow-md">
            <h3 className="text-xl sm:text-2xl font-bold mb-6">
              {content?.visionTitle || 'Մեր տեսլականը'}
            </h3>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-0.5 bg-white mt-3 flex-shrink-0"></div>
              <p className="text-sm sm:text-base leading-relaxed opacity-95">
                {content?.visionText}
              </p>
            </div>
          </div>

          {/* 2. ՄԵՐ ԱՌԱՔԵԼՈՒԹՅՈՒՆԸ */}
          <div>
            <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
              {content?.missionTitle || 'Մեր առաքելությունը'}
            </h2>
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-sm">
              <img 
                src={content?.missionImageUrl || "https://www.evoca.am/images-cache/about_pages/1/160992374514/946x430.jpg"} 
                alt="Mission" 
                className="w-full h-[350px] sm:h-[450px] object-cover"
              />
              <div className="max-w-3xl mx-auto -mt-16 sm:-mt-20 relative bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-lg border-t-4 border-[#6200EE] mb-8 mx-4 sm:mx-auto">
                <p className="text-gray-900 text-sm sm:text-base leading-relaxed font-normal">
                  Որպես human-first և խելացի ֆինտեխ ընկերություն` մենք հնարավորություն ենք տալիս մարդկանց երազելու ավելի համարձակ, բիզնեսներին` բացահայտելու նոր հորիզոններ, և հասարակությանը՝ կառուցելու ավելի լավ ապագա։
                </p>
              </div>
            </div>
          </div>

          {/* 3. ԲԱՆԿԻ ՊԱՏՄՈՒԹՅՈՒՆԸ */}
          <HistorySection 
            historyTitle={content?.historyTitle}
            historySlides={historySlides}
          />

          {/* 4. ԱՐԺԵՔՆԵՐ ԵՎ ԱՌԱՋՆԱՅԻՆՈՒԹՅՈՒՆՆԵՐ */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm">
            <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
              {content?.valuesTitle || 'Արժեքներ և առաջնայնություններ'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {valuesListToRender.map((val, idx) => (
                <div key={idx} className="space-y-3">
                  <h4 className="font-bold text-lg text-gray-900">{val.title}</h4>
                  <p className="text-gray-800 text-sm leading-relaxed">{val.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}