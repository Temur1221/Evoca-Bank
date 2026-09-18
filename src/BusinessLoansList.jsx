import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export default function BusinessLoansList() {
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "businessLoans"));
        const loansData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setLoans(loansData);
      } catch (error) {
        console.error("Սխալ տվյալներ ստանալիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLoans();
  }, []);

  if (loading) {
    return <div className="p-8 text-center text-gray-500">Բեռնվում է...</div>;
  }

  return (
    <div className="space-y-6">
      {loans.map((loan) => (
        <div key={loan.id} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
          
          {/* Վերին հատված՝ Նկար, Վերնագիր, Նկարագրություն */}
          <div className="flex flex-col md:flex-row items-start gap-8">
            {loan.imageUrl && (
              <img 
                src={loan.imageUrl} 
                alt={loan.title} 
                className="w-full md:w-72 h-48 object-contain rounded-2xl bg-gray-50 p-4" 
              />
            )}
            <div className="flex-1">
              <h2 className="text-2xl font-black text-gray-900 mb-3">{loan.title}</h2>
              <p className="text-sm text-gray-600 mb-8 max-w-2xl leading-relaxed">{loan.description}</p>
              
              {/* Միջին հատված՝ Պայմաններ (Ժամկետ, Գումար, Տոկոսադրույք) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
                {loan.duration && (
                  <div>
                    <span className="text-xs text-gray-400 block mb-1">Մինչև</span>
                    <span className="text-2xl font-black text-[#6200EE] block mb-1">{loan.duration}</span>
                    <span className="text-xs text-gray-500">ժամկետ</span>
                  </div>
                )}
                {loan.amount && (
                  <div>
                    <span className="text-xs text-gray-400 block mb-1">Մինչև</span>
                    <span className="text-2xl font-black text-[#6200EE] block mb-1">{loan.amount}</span>
                    <span className="text-xs text-gray-500">Սահմանաչափ կամ համարժեք արտարժույթ</span>
                  </div>
                )}
                {loan.rate && (
                  <div>
                    <span className="text-xs text-gray-400 block mb-1 opacity-0">պահպանելու համար</span>
                    <span className="text-2xl font-black text-[#6200EE] block mb-1">{loan.rate}</span>
                    <span className="text-xs text-gray-500">Տարեկան տոկոսադրույք</span>
                  </div>
                )}
              </div>

              {/* Ստորին հատված՝ «Մանրամասն» կոճակ */}
              <div>
                <button className="bg-purple-100/60 text-[#6200EE] hover:bg-purple-200/60 font-bold px-6 py-3 rounded-full text-sm inline-flex items-center gap-2 transition-colors">
                  Մանրամասն <span className="text-lg">›</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      ))}
    </div>
  );
}