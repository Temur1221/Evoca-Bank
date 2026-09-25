import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export default function InternshipDetails() {
  const [universities, setUniversities] = useState([]);
  const [phases, setPhases] = useState([]);
  const [openPhase, setOpenPhase] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1. Բեռնում ենք համալսարանների տվյալները Firestore-ի 'internshipUniversities' հավաքածուից
        const uniSnapshot = await getDocs(collection(db, 'internshipUniversities'));
        const uniList = uniSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUniversities(uniList);

        // 2. Բեռնում ենք պրակտիկայի փուլերը Firestore-ի 'internshipPhases' հավաքածուից
        const phaseSnapshot = await getDocs(collection(db, 'internshipPhases'));
        const phaseList = phaseSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        // Դասավորում ենք ըստ հերթականության (order կամ stepNumber դաշտերով)
        phaseList.sort((a, b) => (a.order || a.stepNumber || 0) - (b.order || b.stepNumber || 0));
        setPhases(phaseList);

      } catch (error) {
        console.error("Սխալ տվյալներ բեռնելիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Փուլերի բացման/փակման ֆունկցիա
  const togglePhase = (id) => {
    setOpenPhase(openPhase === id ? null : id);
  };

  return (
    <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      
      {/* 1. Համալսարանների բաժին */}
      <div className="text-center mb-16">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-10">
          Համալսարանական պրակտիկայի շրջանակներում մենք համագործակցում ենք հետևյալ Bուհերի հետ՝
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
          {universities.map((uni) => (
            <div key={uni.id} className="flex flex-col items-center">
              {uni.logoUrl && (
                <img src={uni.logoUrl} alt={uni.name} className="h-12 object-contain mb-2" />
              )}
              <span className="text-sm text-gray-700 text-center">{uni.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Ուսումնական պրակտիկայի փուլեր բաժին */}
      <div className="text-center">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-12">
          Ուսումնական պրակտիկայի փուլեր
        </h3>

        <div className="max-w-3xl mx-auto flex flex-col items-center">
          {phases.map((phase, index) => (
            <React.Fragment key={phase.id}>
              {/* Փուլի քարտ */}
              <div className="w-full bg-white rounded-2xl shadow-md border border-purple-100 overflow-hidden transition-all">
                <button 
                  onClick={() => togglePhase(phase.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-center space-x-4">
                    <span className="w-8 h-8 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-sm">
                      {phase.stepNumber || index + 1}
                    </span>
                    <span className="font-semibold text-gray-900 text-base">
                      {phase.title}
                    </span>
                  </div>
                  <svg 
                    className={`w-5 h-5 text-purple-700 transform transition-transform ${openPhase === phase.id ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Եթե փուլը բացված է, ցույց տալ նկարագրությունը */}
                {openPhase === phase.id && (
                  <div className="px-6 pb-5 text-gray-600 text-sm border-t border-gray-100 pt-3 text-left">
                    {phase.description}
                  </div>
                )}
              </div>

              {/* Կետավոր գիծ փուլերի միջև (եթե վերջինը չէ) */}
              {index < phases.length - 1 && (
                <div className="h-8 border-l-2 border-dotted border-purple-300 my-1"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

    </section>
  );
}