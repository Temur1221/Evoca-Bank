import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export default function InvestmentDetails() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const querySnapshot = await getDocs(collection(db, 'investmentDetails'));
        if (!querySnapshot.empty) {
          setData(querySnapshot.docs[0].data());
        }
      } catch (error) {
        console.error("Error fetching investment details from Firestore:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div className="w-full py-10 text-center text-gray-500">Բեռնվում է...</div>;
  }

  if (!data) {
    return <div className="w-full py-10 text-center text-gray-500">Տվյալներ չեն գտնվել բազայում</div>;
  }

  return (
    <div className="w-full bg-white py-10 px-4 sm:px-8 lg:px-16 text-gray-800">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Ներածական տեքստ */}
        <p className="text-sm sm:text-base leading-relaxed text-gray-700 font-medium">
          {data.introText}
        </p>

        {/* Ինչպես դառնալ հաճախորդ */}
        <div className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-[#6200EE]">
            {data.howToBecomeTitle}
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-gray-700">
            {data.howToBecomeDesc1}{' '}
            <a href="#" className="text-[#6200EE] underline font-medium">այստեղ</a>:
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-gray-700">
            {data.howToBecomeDesc2}
          </p>
        </div>

        {/* Հասցե և Հետադարձ կապ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
          <div>
            <h3 className="text-sm sm:text-base font-bold text-[#6200EE] mb-1">
              {data.addressTitle}
            </h3>
            <p className="text-sm text-gray-700 font-medium">{data.addressText}</p>
          </div>

          <div>
            <h3 className="text-sm sm:text-base font-bold text-[#6200EE] mb-1">
              {data.contactTitle}
            </h3>
            <div className="space-y-1">
              {Array.isArray(data.phones) ? (
                data.phones.map((phone, index) => (
                  <p key={index} className="text-sm text-gray-700 font-medium">
                    Հեռ.` <a href={`tel:${phone.replace(/\s+/g, '')}`} className="hover:text-[#6200EE]">{phone}</a>
                  </p>
                ))
              ) : (
                <p className="text-sm text-gray-700 font-medium">
                  Հեռ.` {data.phones}
                </p>
              )}
            </div>
            <p className="text-sm text-gray-700 font-medium mt-1">
              Էլ. հասցե՝ <a href={`mailto:${data.email}`} className="text-[#6200EE] underline">{data.email}</a>
            </p>
          </div>
        </div>

        {/* Ուշադրություն բլոկ */}
        <div className="mt-8 p-4 sm:p-6 bg-gray-50 rounded-2xl border-l-4 border-[#6200EE]">
          <p className="text-xs sm:text-sm leading-relaxed text-gray-700">
            <span className="font-bold text-gray-900">{data.warningTitle}</span> {data.warningText}
          </p>
        </div>

      </div>
    </div>
  );
}