import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function BondsInfoSection() {
  const [infoData, setInfoData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'bondsInfo'));
        if (!querySnapshot.empty) {
          setInfoData(querySnapshot.docs[0].data());
        }
      } catch (error) {
        console.error('Տվյալների բեռնման սխալ:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInfo();
  }, []);

  const introText = infoData?.introText || 'Առաջին անգամ հայաստանյան ֆինանսական համակարգում Evocabank-ը, որպես նորարար և ժամանակակից Բանկ, իրականացրել է իր կողմից թողարկված պարտատոմսերի օնլայն տեղաբաշխում՝ EvocaTOUCH հավելվածի միջոցով:';
  
  const sectionTitle = infoData?.sectionTitle || 'Պարտատոմսերը';
  const sectionSubtitle = infoData?.sectionSubtitle || 'պահանջված և բարձր եկամտաբեր ֆինանսական գործիքներ են: Դրանք ապահով են և ունեն մի շարք առավելություններ՝';

  const bullet1 = infoData?.bullet1 || 'Անվանական պարտատոմսերով ներգրավված դրամական միջոցները համարվում են երաշխավորված բանկային ավանդ և ՀՀ օրենսդրությամբ սահմանված չափերով երաշխավորված են «Ավանդների հատուցումը երաշխավորող հիմնադրամ»-ի կողմից:';
  
  const bullet2 = infoData?.bullet2 || 'ՀՀ Ֆոնդային Բորսայում ցուցակված պարտատոմսերից ստացված եկամուտները ազատվում են եկամտային հարկից և ոչ ռեզիդենտի շահութահարկից՝ ապահովելով ավելի բարձր եկամտաբերություն:';

  return (
    <section className="bg-white py-12 px-4 sm:px-8 lg:px-16 font-sans">
      <div className="max-w-7xl mx-auto space-y-6 text-gray-800">
        
        {/* Ներածական տեքստ */}
        <p className="text-base sm:text-lg leading-relaxed">
          <span className="text-[#6200EE] font-semibold">Evocabank</span>-ը {introText.replace('Evocabank-ը', '')}
        </p>

        {/* Վերնագիր և ստորնագիր */}
        <div className="pt-4">
          <h2 className="text-xl sm:text-2xl font-bold">
            <span className="text-[#6200EE]">{sectionTitle}</span> {sectionSubtitle}
          </h2>
        </div>

        {/* Կետեր */}
        <ul className="space-y-4 pt-2">
          <li className="flex items-start space-x-3">
            <span className="text-[#6200EE] mt-1.5 text-xs">●</span>
            <span className="text-sm sm:text-base leading-relaxed">{bullet1}</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-[#6200EE] mt-1.5 text-xs">●</span>
            <span className="text-sm sm:text-base leading-relaxed">{bullet2}</span>
          </li>
        </ul>

      </div>
    </section>
  );
}