import React, { useState } from "react";

export default function Filter({
  sortOption,
  setSortOption,
  selectedCardTypes = [],
  setSelectedCardTypes,
  selectedLocations = [],
  setSelectedLocations,
  selectedBenefitTypes = [],
  setSelectedBenefitTypes,
  selectedCategories = [],
  setSelectedCategories,
  selectedPlatforms = [],
  setSelectedPlatforms,
  handleCheckboxChange,
}) {
  const [openSections, setOpenSections] = useState({
    sort: true,
    cardType: true,
    location: true,
    benefit: true,
    category: true,
    platform: true,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="hidden lg:block lg:col-span-1 space-y-4 text-sm text-gray-800">
      <div className="font-bold text-base mb-2">Ֆիլտրեր</div>

      <div className="border border-gray-200 rounded-xl p-4 space-y-3">
        <div 
          onClick={() => toggleSection("sort")}
          className="flex justify-between items-center font-semibold text-gray-900 cursor-pointer select-none"
        >
          <span>Դասավորել</span>
          <span className="text-xs transition-transform duration-200">
            {openSections.sort ? "˄" : "˅"}
          </span>
        </div>
        {openSections.sort && (
          <div className="space-y-2 text-gray-700 text-xs pt-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                name="sort" 
                checked={sortOption === "all"} 
                onChange={() => setSortOption("all")} 
              /> 
              Բոլորը
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                name="sort" 
                checked={sortOption === "newest"} 
                onChange={() => setSortOption("newest")} 
              /> 
              Նոր առաջարկներ
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                name="sort" 
                checked={sortOption === "highToLow"} 
                onChange={() => setSortOption("highToLow")} 
              /> 
              Բարձրից ցածր
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                name="sort" 
                checked={sortOption === "lowToHigh"} 
                onChange={() => setSortOption("lowToHigh")} 
              /> 
              Ցածրից բարձր
            </label>
          </div>
        )}
      </div>

      <div className="border border-gray-200 rounded-xl p-4 space-y-3">
        <div 
          onClick={() => toggleSection("cardType")}
          className="flex justify-between items-center font-semibold text-gray-900 cursor-pointer select-none"
        >
          <span>Քարտատեսակ</span>
          <span className="text-xs">
            {openSections.cardType ? "˄" : "˅"}
          </span>
        </div>
        {openSections.cardType && (
          <div className="space-y-2 text-gray-700 text-xs max-h-48 overflow-y-auto pr-1 pt-1">
            {[
              { name: "Visa Infinite", count: 115 },
              { name: "Evoca Visa Platinum", count: 109 },
              { name: "Evoca Travel Card", count: 104 },
              { name: "Wise Visa Infinite", count: 6 },
              { name: "Visa Vision", count: 109 },
              { name: "Mastercard Gold", count: 107 },
              { name: "Visa Gold", count: 107 },
              { name: "Mastercard Standard", count: 109 },
              { name: "Visa Classic", count: 109 },
              { name: "Mastercard World Digital", count: 109 },
              { name: "Visa Digital", count: 109 }
            ].map((item, idx) => (
              <label key={idx} className="flex items-center justify-between cursor-pointer">
                <span className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    checked={selectedCardTypes?.includes(item.name)}
                    onChange={() => handleCheckboxChange(selectedCardTypes, setSelectedCardTypes, item.name)}
                  /> 
                  {item.name}
                </span>
                <span className="text-gray-400 text-[10px] bg-gray-100 px-1.5 py-0.5 rounded">{item.count}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="border border-gray-200 rounded-xl p-4 space-y-3">
        <div 
          onClick={() => toggleSection("location")}
          className="flex justify-between items-center font-semibold text-gray-900 cursor-pointer select-none"
        >
          <span>Վայր</span>
          <span className="text-xs">
            {openSections.location ? "˄" : "˅"}
          </span>
        </div>
        {openSections.location && (
          <div className="space-y-2 text-gray-700 text-xs pt-1">
            <label className="flex items-center justify-between cursor-pointer">
              <span className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  checked={selectedLocations?.includes("Հայաստան")}
                  onChange={() => handleCheckboxChange(selectedLocations, setSelectedLocations, "Հայաստան")}
                /> 
                Հայաստան
              </span>
              <span className="text-gray-400 text-[10px] bg-gray-100 px-1.5 py-0.5 rounded">115</span>
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <span className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  checked={selectedLocations?.includes("Արտերկիր")}
                  onChange={() => handleCheckboxChange(selectedLocations, setSelectedLocations, "Արտերկիր")}
                /> 
                Արտերկիր
              </span>
              <span className="text-gray-400 text-[10px] bg-gray-100 px-1.5 py-0.5 rounded">1</span>
            </label>
          </div>
        )}
      </div>

      <div className="border border-gray-200 rounded-xl p-4 space-y-3">
        <div 
          onClick={() => toggleSection("benefit")}
          className="flex justify-between items-center font-semibold text-gray-900 cursor-pointer select-none"
        >
          <span>Բենեֆիթ</span>
          <span className="text-xs">
            {openSections.benefit ? "˄" : "˅"}
          </span>
        </div>
        {openSections.benefit && (
          <div className="space-y-2 text-gray-700 text-xs pt-1">
            <label className="flex items-center justify-between cursor-pointer">
              <span className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  checked={selectedBenefitTypes?.includes("Cashback")}
                  onChange={() => handleCheckboxChange(selectedBenefitTypes, setSelectedBenefitTypes, "Cashback")}
                /> 
                Cashback
              </span>
              <span className="text-gray-400 text-[10px] bg-gray-100 px-1.5 py-0.5 rounded">12</span>
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <span className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  checked={selectedBenefitTypes?.includes("Զեղչ")}
                  onChange={() => handleCheckboxChange(selectedBenefitTypes, setSelectedBenefitTypes, "Զեղչ")}
                /> 
                Զեղչ
              </span>
              <span className="text-gray-400 text-[10px] bg-gray-100 px-1.5 py-0.5 rounded">107</span>
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <span className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  checked={selectedBenefitTypes?.includes("Նվեր-քարտ")}
                  onChange={() => handleCheckboxChange(selectedBenefitTypes, setSelectedBenefitTypes, "Նվեր-քարտ")}
                /> 
                Նվեր-քարտ
              </span>
              <span className="text-gray-400 text-[10px] bg-gray-100 px-1.5 py-0.5 rounded">3</span>
            </label>
          </div>
        )}
      </div>

      <div className="border border-gray-200 rounded-xl p-4 space-y-3">
        <div 
          onClick={() => toggleSection("category")}
          className="flex justify-between items-center font-semibold text-gray-900 cursor-pointer select-none"
        >
          <span>Ոլորտ</span>
          <span className="text-xs">
            {openSections.category ? "˄" : "˅"}
          </span>
        </div>
        {openSections.category && (
          <div className="space-y-2 text-gray-700 text-xs max-h-52 overflow-y-auto pr-1 pt-1">
            {[
              { name: "Սուրճարաններ", count: 28 },
              { name: "Նվերներ", count: 6 },
              { name: "Ինտերիեր", count: 11 },
              { name: "Կենսակերպ", count: 8 },
              { name: "Տեխնիկա", count: 1 },
              { name: "Նորաձևություն", count: 30 },
              { name: "Առողջություն", count: 5 },
              { name: "Գեղեցկություն", count: 8 },
              { name: "Սպորտ", count: 9 },
              { name: "Աքեսուարներ", count: 14 },
              { name: "Հանգիստ", count: 6 }
            ].map((item, idx) => (
              <label key={idx} className="flex items-center justify-between cursor-pointer">
                <span className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    checked={selectedCategories?.includes(item.name)}
                    onChange={() => handleCheckboxChange(selectedCategories, setSelectedCategories, item.name)}
                  /> 
                  {item.name}
                </span>
                <span className="text-gray-400 text-[10px] bg-gray-100 px-1.5 py-0.5 rounded">{item.count}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="border border-gray-200 rounded-xl p-4 space-y-3">
        <div 
          onClick={() => toggleSection("platform")}
          className="flex justify-between items-center font-semibold text-gray-900 cursor-pointer select-none"
        >
          <span>Հարթակ</span>
          <span className="text-xs">
            {openSections.platform ? "˄" : "˅"}
          </span>
        </div>
        {openSections.platform && (
          <div className="space-y-2 text-gray-700 text-xs pt-1">
            <label className="flex items-center justify-between cursor-pointer">
              <span className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  checked={selectedPlatforms?.includes("Օնլայն")}
                  onChange={() => handleCheckboxChange(selectedPlatforms, setSelectedPlatforms, "Օնլայն")}
                /> 
                Օնլայն
              </span>
              <span className="text-gray-400 text-[10px] bg-gray-100 px-1.5 py-0.5 rounded">13</span>
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <span className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  checked={selectedPlatforms?.includes("Օֆլայն")}
                  onChange={() => handleCheckboxChange(selectedPlatforms, setSelectedPlatforms, "Օֆլայն")}
                /> 
                Օֆլայն
              </span>
              <span className="text-gray-400 text-[10px] bg-gray-100 px-1.5 py-0.5 rounded">108</span>
            </label>
          </div>
        )}
      </div>

    </div>
  );
}