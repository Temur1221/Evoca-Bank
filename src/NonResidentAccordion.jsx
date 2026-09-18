import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

export default function NonResidentAccordion() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const fetchAccordionData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "nonResidentInfo"));
        
        if (!querySnapshot.empty) {
          const fetchedSections = querySnapshot.docs.map((docSnap) => {
            const data = docSnap.data();
            return {
              id: data.id ? Number(data.id) : 1,
              title: data.title || "",
              content: data.content || ""
            };
          });

          fetchedSections.sort((a, b) => a.id - b.id);
          setSections(fetchedSections);
        }
      } catch (error) {
        console.error("Error fetching accordion data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAccordionData();
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (loading) {
    return <div className="text-center py-6 text-gray-400">Բեռնվում է տվյալները բազայից...</div>;
  }

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-8">
      <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-6 uppercase tracking-wider">
        ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
      </h2>

      <div className="space-y-4">
        {sections.map((section, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={section.id || index}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200 shadow-sm hover:border-gray-300"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-5 text-left font-semibold text-gray-800 focus:outline-none"
              >
                <span className="text-base md:text-lg">{section.title}</span>
                <span className={`transform transition-transform duration-200 text-purple-600 font-bold ${isOpen ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-gray-600 text-sm md:text-base border-t border-gray-100 pt-4 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}