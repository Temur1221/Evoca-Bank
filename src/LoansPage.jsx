import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { db } from './firebase'; 
import { collection, onSnapshot } from 'firebase/firestore';

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
      <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
        <NavLink to="/" className="hover:text-[#6200EE] transition-colors">🏠</NavLink>
        <span>›</span>
        <NavLink to="/anhat" className="hover:text-[#6200EE] transition-colors">Անհատ</NavLink>
        <span>›</span>
        <span className="text-gray-800 font-medium">Վարկեր</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1c1c1c] mb-8">
        Վարկեր
      </h1>

      <div className="flex flex-wrap bg-[#6200EE] text-white rounded-t-xl overflow-hidden mb-8">
        <NavLink
          to="/anhat/loans"
          className={({ isActive }) =>
            `py-4 px-6 text-sm sm:text-base font-semibold transition-colors ${
              isActive
                ? 'bg-[#4B00B5] text-white border-b-4 border-white'
                : 'hover:bg-[#5200C6] text-purple-200'
            }`
          }
        >
          Վարկեր
        </NavLink>

        <NavLink
          to="/anhat/credit-history"
          className={({ isActive }) =>
            `py-4 px-6 text-sm sm:text-base font-semibold transition-colors ${
              isActive
                ? 'bg-[#4B00B5] text-white border-b-4 border-white'
                : 'hover:bg-[#5200C6] text-purple-200'
            }`
          }
        >
          Վարկային պատմություն և սքոր
        </NavLink>

        <NavLink
          to="/anhat/important-info"
          className={({ isActive }) =>
            `py-4 px-6 text-sm sm:text-base font-semibold transition-colors ${
              isActive
                ? 'bg-[#4B00B5] text-white border-b-4 border-white'
                : 'hover:bg-[#5200C6] text-purple-200'
            }`
          }
        >
          Կարևոր տեղեկատվություն
        </NavLink>
      </div>

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
        <div className="flex flex-col gap-10">
          {filteredLoans.map((loan) => (
            <div
              key={loan.id}
              className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-full lg:w-[340px] h-[220px] bg-[#6200EE] rounded-3xl flex items-center justify-center shrink-0 overflow-hidden">
                {loan.imageUrl ? (
                  <img
                    src={loan.imageUrl}
                    alt={loan.title}
                    className="w-full h-full object-cover rounded-3xl transition-transform duration-300 hover:scale-105"
                  />
                ) : (
                  <div className="text-7xl select-none">🏦</div>
                )}
              </div>

              <div className="flex-1 w-full">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1c1c] mb-3">
                  {loan.title}
                </h2>
                
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 max-w-[750px]">
                  {loan.description}
                </p>

                <div className="flex flex-wrap gap-x-8 gap-y-4 mb-8 max-w-[850px]">
                  {loan.maxAmount && (
                    <div>
                      <span className="text-[11px] text-gray-400 font-medium block mb-1">
                        {loan.amountPrefix || 'մինչև'}
                      </span>
                      <span className="text-xl sm:text-2xl font-black text-[#6200EE]">
                        {loan.maxAmount}
                      </span>
                      <span className="text-xs text-gray-500 block mt-1 font-medium">
                        {loan.amountLabel || 'Գումար'}
                      </span>
                    </div>
                  )}

                  {loan.maxTerm && (
                    <div>
                      <span className="text-[11px] text-gray-400 font-medium block mb-1">
                        {loan.termPrefix || 'մինչև'}
                      </span>
                      <span className="text-xl sm:text-2xl font-black text-[#6200EE]">
                        {loan.maxTerm}
                      </span>
                      <span className="text-xs text-gray-500 block mt-1 font-medium">
                        {loan.termLabel || 'Ժամկետ'}
                      </span>
                    </div>
                  )}

                  {loan.minRate && (
                    <div>
                      <span className="text-[11px] text-gray-400 font-medium block mb-1">
                        {loan.ratePrefix || 'սկսած'}
                      </span>
                      <span className="text-xl sm:text-2xl font-black text-[#6200EE]">
                        {loan.minRate}
                      </span>
                      <span className="text-xs text-gray-500 block mt-1 font-medium">
                        {loan.rateLabel || 'Տոկոսադրույք'}
                      </span>
                    </div>
                  )}
                </div>

                <button className="bg-[#f0e7ff] hover:bg-[#e4d3ff] text-[#6200EE] font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all duration-200 flex items-center gap-2 cursor-pointer group">
                  <span>Մանրամասն</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">›</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}