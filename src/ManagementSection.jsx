import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function ManagementSection() {
  const [boardMembers, setBoardMembers] = useState([]);
  const [executiveBoard, setExecutiveBoard] = useState([]);
  const [internalAudit, setInternalAudit] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchManagementData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'management'));
        let board = [];
        let executive = [];
        let audit = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.category === 'board') {
            board.push({ id: doc.id, ...data });
          } else if (data.category === 'executive') {
            executive.push({ id: doc.id, ...data });
          } else if (data.category === 'audit') {
            audit.push({ id: doc.id, ...data });
          }
        });

        setBoardMembers(board);
        setExecutiveBoard(executive);
        setInternalAudit(audit);
      } catch (error) {
        console.error("Սխալ տվյալները ստանալիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchManagementData();
  }, []);

  const renderCardsGrid = (items) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      {items.map((person) => (
        <div 
          key={person.id}
          className="flex flex-col bg-white rounded-2xl overflow-hidden hover:border-purple-200 transition-all duration-200 p-4 text-center group"
        >
          <div className="w-full h-52 mb-4 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center">
            <img 
              src={person.imageUrl || "https://via.placeholder.com/300"} 
              alt={person.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col flex-grow space-y-2">
            <h3 className="text-xs sm:text-sm font-bold text-gray-900 tracking-tight uppercase">
              {person.name}
            </h3>
            <p className="text-xs text-gray-600 leading-snug">
              {person.position}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  if (loading) {
    return <div className="text-center py-12 text-gray-500 font-medium">Բեռնվում է...</div>;
  }

  return (
    <div className="space-y-10">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 border-b border-gray-100 pb-4">
        Ղեկավարություն
      </h1>

      {/* Բանկի խորհուրդ */}
      <section className="space-y-6">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-wide">
          Բանկի խորհուրդ
        </h2>
        {renderCardsGrid(boardMembers)}
      </section>

      {/* Բանկի վարչություն */}
      <section className="space-y-6 pt-6 border-t border-gray-100">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-wide">
          Բանկի վարչություն
        </h2>
        {renderCardsGrid(executiveBoard)}
      </section>

      {/* Բանկի ներքին աուդիտ */}
      <section className="space-y-6 pt-6 border-t border-gray-100">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-wide">
          Բանկի ներքին աուդիտ
        </h2>
        {renderCardsGrid(internalAudit)}
      </section>
    </div>
  );
}