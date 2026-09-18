import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase'; // Ճշգրտիր ուղին ըստ քո ֆայլերի դասավորության

export default function ClassicDeposit() {
  const [depositData, setDepositData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDepositData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "depositProducts"));
        if (!querySnapshot.empty) {
          const docData = querySnapshot.docs[0].data();
          setDepositData(docData);
        }
      } catch (error) {
        console.error("Error fetching deposit data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDepositData();
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="bg-white border border-purple-100 rounded-3xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Ձախ մաս՝ Վերնագիր և տեքստ */}
        <div className="max-w-xl space-y-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            {depositData?.title || "Դասական ավանդ"}
          </h1>
          
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            {depositData?.description || 
              "Դասական ավանդը կայուն բարձր եկամտաբերությամբ կավելացնի ձեր խնայողությունները: Դասական ժամկետային ավանդն ընդունում ենք ֆիզիկական և իրավաբանական անձանցից: Ավանդ ներդնելիս ձեզ տրամադրում ենք անվճար միջազգային քարտ:"}
          </p>
        </div>

        {/* Աջ մաս՝ Նկար Firebase-ից կամ Ֆոլբեք */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full h-64 md:h-80 bg-purple-100/50 rounded-2xl overflow-hidden flex items-center justify-center shadow-inner">
            {depositData?.imageUrl ? (
              <img 
                src={depositData.imageUrl} 
                alt="Դասական ավանդ" 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-center p-6">
                <span className="text-5xl font-bold text-[#6200EE]">💱</span>
                <p className="text-sm text-gray-600 mt-2 font-medium">Ավանդային պրոդուկտներ</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}