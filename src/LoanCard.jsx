import React, { useState, useEffect } from 'react';
import { db } from './firebase'; 
import { collection, onSnapshot } from 'firebase/firestore';
import LoanCard from './LoanCard';

export default function LoansPage() {
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Բոլորը' },
    { id: 'gravov', label: 'Գրավով ապահովված սպառողական վարկեր' },
    { id: 'angrav', label: 'Անգրավ սպառողական վարկեր' },
    { id: 'hipotek', label: 'Հիփոթեքային վարկեր' },
    { id: 'avto', label: 'Ավտոմեքենաների ձեռքբերման ֆինանսավորում' },
    { id: 'aparik', label: 'Ապառիկ' },
    { id: 'online', label: 'Օնլայն վարկեր' },
  ];

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'loans'), (snapshot) => {
      const loansData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLoans(loansData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const filteredLoans = activeCategory === 'all' 
    ? loans 
    : loans.filter((loan) => loan.category === activeCategory);

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8 font-sans">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
        <a href="/" className="hover:text-[#6200EE] transition-colors">🏠</a>
        <span>›</span>
        <a href="/anhat" className="hover:text-[#6200EE] transition-colors">Անհատ</a>
        <span>›</span>
        <span className="text-gray-400">Վարկեր</span>
        <span>›</span>
        <span className="text-gray-800 font-medium">Վարկեր</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1c1c1c] mb-8">
        Վարկեր
      </h1>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2.5 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-[#6200EE] text-white shadow-md shadow-purple-200'
                : 'bg-[#f4f3f8] text-gray-700 hover:bg-gray-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="py-20 text-center text-gray-400 font-medium animate-pulse">
          Վարկերի ցանկը բեռնվում է...
        </div>
      ) : filteredLoans.length === 0 ? (
        <div className="py-20 text-center text-gray-400 font-medium bg-gray-50 rounded-3xl border border-dashed border-gray-200">
          Այս բաժնում վարկեր չեն գտնվել:
        </div>
      ) : (
        /* 📜 ՑՈՒՑԱԴՐՈՒՄ ԵՆՔ ԲՈԼՈՐ ՔԱՐՏԵՐԸ COMPONENT-ՈՎ */
        <div className="flex flex-col gap-8">
          {filteredLoans.map((loan) => (
            <LoanCard key={loan.id} loan={loan} />
          ))}
        </div>
      )}
    </div>
  );
}