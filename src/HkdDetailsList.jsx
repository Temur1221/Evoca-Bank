import React from "react";

export default function HkdDetailsList({ detailsData }) {
  // Եթե տվյալները դեռ չեն եկել կամ զանգված չեն, թող ոչինչ չնկարի կամ բեռնման վիճակ ցույց տա
  if (!Array.isArray(detailsData)) {
    return null;
  }

  return (
    <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed pt-2">
      {detailsData.map((item) => (
        <div key={item.id} className="space-y-4">
          {item.text && <p className="leading-relaxed">{item.text}</p>}

          {item.links && (
            <div className="space-y-3 pt-3">
              {Object.values(item.links).map((link, idx) => (
                <div
                  key={idx}
                  className="bg-[#F8F5FB] border border-[#EBE1F5] rounded-2xl p-5 font-semibold text-[#6200EE] hover:bg-[#EFE6F7]/65 transition-colors cursor-pointer shadow-sm flex items-center justify-between"
                >
                  <span>{link.title}</span>
                  <span className="text-xl">›</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}