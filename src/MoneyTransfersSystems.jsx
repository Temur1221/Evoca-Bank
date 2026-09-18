import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

export default function MoneyTransfersSystems() {
  const [systems, setSystems] = useState([]);
  const [loading, setLoading] = useState(true);

  const defaultSystems = [
    {
      logoUrl: "", // Այստեղ տեղադրեք լոգոյի նկարի հղումը
      description: "MoneyTun-ը գործում է 2007 թվականից: Կազմակերպության նպատակն է Ամերիկայի և Հայաստանի միջև ապահով ու պաշտպանված գործարքների ապահովումը՝ հիմնված տասնամյակների փորձի վրա:",
      phone: "+374 10 27 72 85",
      hours: "երկուշաբթի-ուրբաթ 10:00-17:30 \nշաբաթ 10:00-14:00 \nկիրակի 10:00-13:00"
    },
    {
      logoUrl: "",
      description: "Գործում է 182 երկրի ավելի քան 509,000 սպասարկման կետերում։ Փոխանցումները կատարվում են դոլարով և եվրով։ Միջնորդավճարը գանձվում է ըստ RIA համակարգի սահմանված սակագների։",
      phone: "+374 94 23 59 00",
      hours: "Աշխատանքային ժամերը՝ երկուշաբթի-ուրբաթ 09:00-18:00"
    },
    {
      logoUrl: "",
      description: "UBPay-ը արագ դրամական փոխանցումների համակարգ է նախատեսված ֆիզիկական անձանց միջև ոչ առևտրային դրամական փոխանցումների իրականացման համար:",
      phone: "+374 43 00 49 35"
    },
    {
      logoUrl: "",
      description: "Գործում է 90 երկրի ավելի քան 57,000 կետերում (Ռուսաստան, ԱՊՀ այլ երկրներ, Մեծ Բրիտանիա, Չինաստան, եվրոպական երկրներ և այլն): Փոխանցումները կատարվում են ռուբլով, դոլարով և եվրով:",
      phone: "+995 32 2 49 25 25"
    },
    {
      logoUrl: "",
      description: "«ՍՏԱԿ» դրամական փոխանցումների հայաստանյան միասնական համակարգի գործունեության նպատակն է ռեզիդենտ և ոչ ռեզիդենտ հաճախորդների համար պատշաճ որակի դրամական փոխանցումների իրականացման կազմակերպումը:",
      phone: ""
    },
    {
      logoUrl: "",
      description: "Գործում է 170 երկրի ավելի քան 125,000 կետերում։ Արտերկրից Հայաստան փոխանցվում է դոլար և եվրո, իսկ Հայաստանից արտերկիր՝ միայն դոլար։",
      phone: "1-800-926-9400"
    }
  ];

  useEffect(() => {
    const fetchSystems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "moneyTransfersSystems"));
        if (!querySnapshot.empty) {
          const items = querySnapshot.docs.map(doc => doc.data());
          setSystems(items);
        } else {
          setSystems(defaultSystems);
        }
      } catch (error) {
        console.error("Error fetching systems:", error);
        setSystems(defaultSystems);
      } finally {
        setLoading(false);
      }
    };

    fetchSystems();
  }, []);

  if (loading) {
    return <div className="w-full py-10 text-center text-gray-500">Բեռնվում է...</div>;
  }

  return (
    <div className="w-full py-10 px-4 md:px-20 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {systems.map((item, index) => (
          <div 
            key={index} 
            className="w-full bg-white border border-purple-200 rounded-none p-6 flex flex-col justify-between shadow-sm hover:border-purple-400 transition-all duration-200"
          >
            <div>
              {/* Հատված լոգոյի համար */}
              <div className="h-14 mb-4 pb-3 border-b border-purple-100 flex items-center justify-center">
                {item.logoUrl ? (
                  <img src={item.logoUrl} alt="System Logo" className="max-h-full object-contain" />
                ) : (
                  <span className="text-gray-400 text-xs uppercase tracking-wider">Լոգո չկա</span>
                )}
              </div>

              <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
                {item.description}
              </p>
            </div>

            {item.phone && (
              <div className="mt-auto pt-4 border-t border-purple-50 text-center">
                <p className="text-xs font-bold text-purple-900 uppercase tracking-wider mb-1">
                  Հաճախորդների սպասարկման հեռախոսահամար՝
                </p>
                <a href={`tel:${item.phone}`} className="text-purple-700 font-bold text-sm md:text-base hover:underline">
                  {item.phone}
                </a>
                {item.hours && (
                  <p className="text-xs text-gray-500 mt-2 whitespace-pre-line">
                    {item.hours}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}