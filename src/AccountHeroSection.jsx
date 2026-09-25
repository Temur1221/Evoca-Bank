import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function AccountHeroSection() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'accounts', 'introSection');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setData(docSnap.data());
        }
      } catch (error) {
        console.error("Սխալ տվյալներ ստանալիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center py-4 text-gray-500">Բեռնվում է...</div>;
  }

  return (
    <section className="mb-12 max-w-7xl mx-auto px-4 space-y-6">
      <div className="bg-[#f4f4f4] border-purple-100 rounded-3xl p-6 md:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
              {data?.title ? (
                data.title
              ) : (
                <>
                  Հաշիվների բացում և <br className="hidden md:block" /> սպասարկում
                </>
              )}
            </h1>
            
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
              <p>
                {data?.description1 || "Առաջարկում ենք բացել դրամային և արտարժութային ընթացիկ բանկային հաշիվներ, որոնց սպասարկումն իրականացնում ենք մեր սակագների համաձայն։"}
              </p>
              <p>
                {data?.description2 || "Մեզ մոտ հաշիվներ կարող են բացել Հայաստանի ռեզիդենտ և ոչ ռեզիդենտ ֆիզիկական անձինք:"}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center w-full">
            <img 
              src={data?.imageUrl || "https://www.evoca.am/images-cache/menu/1/16111691720299/780x585.jpg"} 
              alt="Հաշիվների բացում և սպասարկում" 
              className="rounded-2xl object-cover w-full h-[280px] md:h-[350px] shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="bg-white border border-purple-100 rounded-3xl p-6 md:p-8 shadow-sm text-xs md:text-sm text-gray-500 leading-relaxed">
        <p>
          {data?.termsText || (
            <>
              Մեր և ձեր պայմանագրային փոխհարաբերությունները կարգավորվում են <strong>ՀԱՄԱԼԻՐ ԲԱՆԿԱՅԻՆ ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐԻ ՄԱՏՈՒՑՄԱՆ ՊԱՅՄԱՆՆԵՐՈՎ</strong>, որը հրապարակային առաջարկ (օֆերտա) է և ձեր կողմից համարվում է ընդունված այն պահից, երբ առձեռն կամ հեռակառավարման համակարգերի միջոցով մեզ եք ներկայացնում պատշաճ լրացված և վավերացված՝ բանկային ծառայություններից օգտվելու հայտ/դիմում: Համալիր բանկային ծառայությունների մատուցման պայմաններին կարող եք ծանոթանալ{' '}
              <a href="#terms" className="text-purple-700 underline font-medium hover:text-purple-900">
                այստեղ
              </a>:
            </>
          )}
        </p>
      </div>
    </section>
  );
}