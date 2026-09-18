import React, { useState, useEffect } from "react";
import OtherSubHeader from "./OtherSubHeader"; // <--- Ուղղված է (մեկ կետով)
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

export default function BusinessTransferSection() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const querySnapshot = await getDocs(collection(db, "services"));
        if (!querySnapshot.empty) {
          setData(querySnapshot.docs[0].data());
        }
      } catch (error) {
        console.error("Սխալ տվյալների բեռնման ժամանակ:", error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return (
      <div>
        <OtherSubHeader />
        <div className="py-12 text-center text-gray-500">Բեռնվում է...</div>
      </div>
    );
  }

  return (
    <div>
      <OtherSubHeader />

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Ձախ մաս՝ վերնագիր և տեքստեր */}
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6 leading-tight">
            {data?.title || "Դրամական փոխանցումներ"}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            {data?.description1 || 
              "Իրականացնում ենք Հայաստանի ռեզիդենտ և ոչ ռեզիդենտ իրավաբանական անձանց և անհատ ձեռնարկատերերի դրամական փոխանցումներ Հայաստանի տարածքում և դեպի արտերկիր՝ դրամով և արտարժույթով:"}
          </p>
          <p className="text-gray-600 leading-relaxed">
            {data?.description2 || 
              "Փոխանցումներն իրականացվում են միջազգային բանկային ստանդարտներին համապատասխանող համակարգերով:"}
          </p>
        </div>

        {/* Աջ մաս՝ նկարը */}
        <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-100 h-80 flex items-center justify-center">
          {data?.imageUrl ? (
            <img 
              src={data.imageUrl} 
              alt="Money Transfers Hall" 
              className="w-full h-full object-cover" 
            />
          ) : (
            <div className="text-gray-400 font-medium">Նկարը բացակայում է</div>
          )}
        </div>
      </div>
    </div>
  );
}