import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

export default function MetalConditions() {
  const [conditions, setConditions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConditions = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "metalConditions"));
        const conditionsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setConditions(conditionsList);
      } catch (error) {
        console.error("Error fetching conditions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchConditions();
  }, []);

  if (loading) {
    return <div className="text-gray-500 py-4">Բեռնվում են պայմանները...</div>;
  }

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
        Հիմնական պայմաններ
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-600">
        {conditions.length > 0 ? (
          conditions.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))
        ) : (
          <li>Տվյալներ առայժմ չկան</li>
        )}
      </ul>
    </div>
  );
}