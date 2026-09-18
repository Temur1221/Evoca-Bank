import React from "react";

export default function MetalDescription({ data }) {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
        {data?.title || "Առարկայազուրկ մետաղական հաշիվներ"}
      </h2>
      <p className="text-gray-600 leading-relaxed text-base md:text-lg">
        {data?.description || 
          "Առաջարկում ենք բացել առարկայազուրկ մետաղական հաշիվներ, որոնք նախատեսված են անկանխիկ ոսկու հաշվառման համար։ Այս ցպահանջ հաշիվները հնարավորություն են ընձեռում խնայողություններ կատարել անկանխիկ ոսկով, ինչպես նաև ավելացնել դրանք միջազգային շուկայում ոսկու գնի բարձրացման շնորհիվ:"}
      </p>
    </div>
  );
}