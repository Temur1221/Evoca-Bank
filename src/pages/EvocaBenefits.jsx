import React, { useState, useEffect, useMemo } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import Filter from "../filter";
import EvocaFooter from "../EvocaFooter";

export default function EvocaBenefits() {
  const [benefits, setBenefits] = useState([]);
  const [loading, setLoading] = useState(true);

  const [visibleCount, setVisibleCount] = useState(15);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("all");
  const [selectedCardTypes, setSelectedCardTypes] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedBenefitTypes, setSelectedBenefitTypes] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);

  useEffect(() => {
    const fetchBenefits = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "benefits"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBenefits(data);
      } catch (error) {
        console.error("Սխալ Firebase-ից տվյալներ ստանալիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBenefits();
  }, []);

  const handleCheckboxChange = (list, setList, value) => {
    if (list.includes(value)) {
      setList(list.filter((item) => item !== value));
    } else {
      setList([...list, value]);
    }
  };

  const filteredAndSortedBenefits = useMemo(() => {
    let result = [...benefits];

    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (item) =>
          (item.title && item.title.toLowerCase().includes(term)) ||
          (item.category && item.category.toLowerCase().includes(term))
      );
    }

    if (selectedCardTypes.length > 0) {
      result = result.filter((item) => selectedCardTypes.includes(item.cardType));
    }

    if (selectedLocations.length > 0) {
      result = result.filter((item) => selectedLocations.includes(item.location));
    }

    if (selectedBenefitTypes.length > 0) {
      result = result.filter((item) => selectedBenefitTypes.includes(item.benefitType));
    }

    if (selectedCategories.length > 0) {
      result = result.filter((item) => selectedCategories.includes(item.category));
    }

    if (selectedPlatforms.length > 0) {
      result = result.filter((item) => selectedPlatforms.includes(item.platform));
    }

    if (sortOption === "newest") {
      result.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
    } else if (sortOption === "highToLow") {
      result.sort((a, b) => (b.discountValue || 0) - (a.discountValue || 0));
    } else if (sortOption === "lowToHigh") {
      result.sort((a, b) => (a.discountValue || 0) - (b.discountValue || 0));
    }

    return result;
  }, [
    benefits,
    searchTerm,
    sortOption,
    selectedCardTypes,
    selectedLocations,
    selectedBenefitTypes,
    selectedCategories,
    selectedPlatforms,
  ]);

  const visibleCards = filteredAndSortedBenefits.slice(0, visibleCount);
  
  const firstSixCards = visibleCards.slice(0, 6);
  const remainingVisibleCards = visibleCards.slice(6);

  const bannerComponent = (
    <div className="w-full bg-gradient-to-r from-[#4b1275] via-[#5a189a] to-[#1e0033] rounded-3xl overflow-hidden shadow-lg text-white flex flex-col md:flex-row items-center justify-between p-8 md:p-12 my-8">
      <div className="max-w-md space-y-4 mb-6 md:mb-0 z-10">
        <img src="https://www.evoca.am/img/temp/benefits/card-logo.png" alt="Evoca Benefits" className="h-10 object-contain" />
        <p className="text-sm md:text-base text-gray-200 leading-relaxed">
          Մեկ քարտ, անսահմանափակ բենեֆիթներ։ Պատվիրիր քո Evoca քարտը հիմա:
        </p>
      </div>
      <div className="relative w-full md:w-80 h-44 md:h-52 flex items-center justify-center">
        <img 
          src="https://www.evoca.am/img/temp/benefits/card-white_1.png" 
          alt="Evoca Card Back (Grey)" 
          className="absolute left-2 md:left-4 top-0 h-32 md:h-40 object-contain transform -rotate-6 drop-shadow-2xl opacity-90 z-10" 
        />
        <img 
          src="https://www.evoca.am/img/temp/benefits/card-black_1.png" 
          alt="Evoca Card Front (Purple)" 
          className="absolute right-0 top-6 md:top-8 h-32 md:h-40 object-contain transform rotate-12 drop-shadow-2xl z-20" 
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between font-sans">
      <div className="max-w-[1280px] w-full mx-auto px-4 py-6 flex-grow">
        
        <div className="bg-white shadow-md rounded-full px-6 py-3 flex items-center justify-between mb-10 border border-gray-100">
          <div className="flex items-center gap-1 font-bold text-xl tracking-tight">
              <img src="https://www.evoca.am/img/temp/benefits/logo_2.svg" alt="Evoca" />
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-[#6200EE] hover:bg-[#5000C8] text-white text-sm font-medium px-5 py-2 rounded-full transition-colors shadow-sm">
              Պատվիրել քարտ
            </button>
            <button className="text-gray-700 text-xl hover:text-purple-700 transition-colors">
              <img src="https://www.evoca.am/img/temp/benefits/icon-language.svg" alt="Language" />
            </button>
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-purple-900 mb-6">
            Բացահայտիր Evoca քարտերի բենեֆիթները
          </h1>
          <div className="flex justify-center items-center gap-6 mb-10">
            <img src="https://www.evoca.am/images/landing_card_groups/1/17768428900225.png" alt="Visa" className="h-8 object-contain" />
            <img src="https://www.evoca.am/images/landing_card_groups/1/17768429357504.png" alt="Mastercard" className="h-8 object-contain" />
            <img src="https://www.evoca.am/images/landing_card_groups/1/17768429488894.png" alt="ArCa" className="h-8 object-contain" />
            <img src="https://www.evoca.am/images/landing_card_groups/1/17768429612343.png" alt="UnionPay" className="h-8 object-contain" />
          </div>
        </div>

        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <img src="https://www.evoca.am/img/temp/benefits/icon-search.svg" alt="Search" />
            </span>
            <input 
              type="text" 
              placeholder="Որոնել..." 
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setVisibleCount(15);
              }}
              className="w-full pl-10 pr-4 py-2.5 bg-[#f5f5f5] border border-gray-200 rounded-[50px] focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start mb-12">
          
          <Filter 
            sortOption={sortOption}
            setSortOption={(val) => { setSortOption(val); setVisibleCount(15); }}
            selectedCardTypes={selectedCardTypes}
            setSelectedCardTypes={(val) => { setSelectedCardTypes(val); setVisibleCount(15); }}
            selectedLocations={selectedLocations}
            setSelectedLocations={(val) => { setSelectedLocations(val); setVisibleCount(15); }}
            selectedBenefitTypes={selectedBenefitTypes}
            setSelectedBenefitTypes={(val) => { setSelectedBenefitTypes(val); setVisibleCount(15); }}
            selectedCategories={selectedCategories}
            setSelectedCategories={(val) => { setSelectedCategories(val); setVisibleCount(15); }}
            selectedPlatforms={selectedPlatforms}
            setSelectedPlatforms={(val) => { setSelectedPlatforms(val); setVisibleCount(15); }}
            handleCheckboxChange={handleCheckboxChange}
          />

          <div className="lg:col-span-3">
            {loading ? (
              <p className="text-center py-20 text-gray-500">Բեռնվում է Firebase-ից...</p>
            ) : filteredAndSortedBenefits.length === 0 ? (
              <p className="text-center py-20 text-gray-500">Տվյալներ չեն գտնվել:</p>
            ) : (
              <>
                {firstSixCards.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {firstSixCards.map((item) => (
                      <CardItem key={item.id} item={item} />
                    ))}
                  </div>
                )}

                {bannerComponent}

                {remainingVisibleCards.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
                    {remainingVisibleCards.map((item) => (
                      <CardItem key={item.id} item={item} />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>

        </div>

      </div>

      <EvocaFooter />
    </div>
  );
}

function CardItem({ item }) {
  return (
    <div className="group bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div className="bg-gray-900 w-full h-40 overflow-hidden relative flex items-center justify-center rounded-t-3xl">
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white font-bold text-lg transition-opacity duration-300 group-hover:opacity-0 z-10">
          {item.logoUrl ? (
            <img src={item.logoUrl} alt={item.title} className="max-h-12 object-contain" />
          ) : (
            <span>{item.title}</span>
          )}
        </div>

        {item.imageUrl && (
          <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        )}
      </div>

      <div className="p-4 flex flex-col gap-3">
        <div className="flex items-baseline gap-2">
          {item.discountBadge && (
            <span className="text-[#6200EE] font-bold text-xl">
              {item.discountBadge}
            </span>
          )}
          <span className="font-bold text-gray-900 text-lg">
            {item.title}
          </span>
        </div>

        <div className="flex items-center gap-1 text-sm text-gray-600">
          <span>{item.benefitType || "Զեղչ"}</span>
          <span className="text-gray-400 cursor-pointer" title="Մանրամասն պայմաններ">ⓘ</span>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-1">
          {item.category && (
            <span className="border border-gray-200 text-gray-700 px-3 py-1 rounded-lg text-xs font-medium">
              {item.category}
            </span>
          )}

          <div className="flex items-center gap-3">
            <div className="border border-gray-200 p-1 rounded-md text-gray-600 flex items-center justify-center w-7 h-7">
              <img src="https://www.evoca.am/img/temp/benefits/icon-card-new.svg" alt="" />
            </div>

            <div className="flex items-center gap-2 text-gray-500 text-sm font-semibold">
              <a href="https://facebook.com/your-page" target="_blank" rel="noreferrer" className="hover:text-[#6200EE] transition-colors"><img src="https://www.evoca.am/img/temp/benefits/facebook.svg" alt="" /></a>
              <a href="https://instagram.com/your-page" target="_blank" rel="noreferrer" className="hover:text-[#6200EE] transition-colors"><img src="https://www.evoca.am/img/temp/benefits/instagram.svg" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}