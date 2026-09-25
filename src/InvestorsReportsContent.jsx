import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from './firebase';

export default function InvestorsReportsContent() {
  const [groupedData, setGroupedData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchInvestorPresentations() {
      try {
        setLoading(true);
        const q = query(collection(db, "investorPresentations"), orderBy("year", "desc"));
        const querySnapshot = await getDocs(q);
        
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push({ id: doc.id, ...doc.data() });
        });
        
        // Տվյալների խմբավորում ըստ տարիների (years)
        const grouped = items.reduce((acc, item) => {
          const year = item.year || 'Other';
          if (!acc[year]) {
            acc[year] = [];
          }
          acc[year].push(item);
          return acc;
        }, {});

        setGroupedData(grouped);
      } catch (error) {
        console.error("Error fetching investor presentations: ", error);
      } finally {
        setLoading(false);
      }
    }

    fetchInvestorPresentations();
  }, []);

  // Տարիների դասավորումը նվազման կարգով (օրինակ՝ 2026, 2025, 2024...)
  const sortedYears = Object.keys(groupedData).sort((a, b) => b - a);

  return (
    <main className="flex-grow max-w-7xl mx-auto w-full px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Ներդրողների համար</h1>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <p className="text-gray-500 text-lg">Բեռնվում է...</p>
        </div>
      ) : sortedYears.length === 0 ? (
        <p className="text-gray-500">Տվյալներ չեն գտնվել:</p>
      ) : (
        sortedYears.map((year) => (
          <div key={year} className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{year}</h2>
            
            <div className="bg-gray-50/70 p-6 rounded-2xl border border-gray-100 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
              {groupedData[year].map((item) => (
                <a
                  key={item.id}
                  href={item.pdfUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col bg-white p-3 rounded-xl transition-all duration-200"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden mb-3">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-sm font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))
      )}
    </main>
  );
}