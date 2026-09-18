import { img } from "framer-motion/client";
import React from "react";

export default function MetalHeroSection({ data }) {
  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
          {data?.title || "Առարկայազուրկ մետաղական հաշիվներ"}
        </h1>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          {data?.description || "Առաջարկում ենք բացել առարկայազուրկ մետաղական հաշիվներ, որոնք նախատեսված են անկանխիկ ոսկու հաշվառման համար: Այս ցպահանջ հաշիվները հնարավորություն են ընձեռում խնայողություններ կատարել անկանխիկ ոսկով, ինչպես նաև ավելացնել դրանք՝ միջազգային շուկայում ոսկու գնի բարձրացման շնորհիվ:"}
        </p>
      </div>

      <div className="flex justify-center">
       <img className="rounded-2xl max-h-[300px] w-full object-cover shadow-sm" src="https://www.evoca.am/images-cache/menu/1/17092121924185/780x585.png" alt="" />
      </div>
    </div>
  );
}