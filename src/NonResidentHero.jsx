import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

export default function NonResidentHero() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "nonResidentRemote", "vk6RTfnzPY4NANDComYx"); 
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          console.log("No such document in Firestore!");
        }
      } catch (error) {
        console.error("Error fetching non-resident data from Firestore:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center py-12 text-gray-400">Բեռնվում է տվյալները բազայից...</div>;
  }

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-4">
      {/* Հիմնական հերո բլոկը */}
      <div className="bg-[#f4f4f4] rounded-[32px] overflow-hidden shadow-sm border border-gray-100 grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="p-8 md:p-16">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
            {data?.title || "Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում"}
          </h1>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            {data?.description || "Բանկ այցելելն այլևս պարտադիր չէ..."}
          </p>
        </div>

        <div className="w-full h-full flex justify-end bg-black">
          {data?.heroImage ? (
            <img 
              src={data.heroImage} 
              alt="Non Resident Remote" 
              className="w-full h-full object-cover min-h-[350px]"
            />
          ) : (
            <div className="w-full h-[350px] flex items-center justify-center text-white">
              <span className="text-xl font-bold">Evoca</span>
            </div>
          )}
        </div>
      </div>

      {/* Ներքևի լրացուցիչ տեքստային հատվածը */}
      <div className="mt-8 px-4 md:px-8 space-y-6 text-gray-700">
        <p className="text-sm md:text-base leading-relaxed">
          24/7 անձնական մենեջեր, ֆինանսական ծառայությունների հասանելիություն աշխարհի ցանկացած կետից։ Փաստաթղթերի անվճար առաքում Ձեր գտնվելու վայրը։ բոլոր մանրուքները մտածված են, որ Դուք խնայեք Ձեր ժամանակը չշեղվեք կարևոր գործերից և, իհարկե, օգտվեք prime սպասարկումից։
        </p>

        <p className="font-semibold text-sm md:text-base text-gray-900">
          Ուղարկեք փաստաթղթերը, անցեք տեսազանգով նույնականացում և բացեք Ձեր հաշիվը՝ առանց Բանկ այցելելու։
        </p>

        <p className="text-sm md:text-base text-gray-600">
          Մանրամասները և քայլ առ քայլ ուղեցույցը՝ ներքևում։
        </p>
      </div>
    </div>
  );
}