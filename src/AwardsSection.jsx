    import React, { useState, useEffect } from 'react';
    import { db } from './firebase';
    import { collection, getDocs } from 'firebase/firestore';

    export default function AwardsSection() {
    const [awards, setAwards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAwardsData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'awards'));
            const awardsList = [];

            querySnapshot.forEach((doc) => {
            awardsList.push({ id: doc.id, ...doc.data() });
            });

            setAwards(awardsList);
        } catch (error) {
            console.error("Սխալ մրցանակների տվյալները ստանալիս:", error);
        } finally {
            setLoading(false);
        }
        };

        fetchAwardsData();
    }, []);

    if (loading) {
        return <div className="text-center py-12 text-gray-500 font-medium">Բեռնվում է...</div>;
    }

    return (
        <div className="space-y-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 border-b border-gray-100 pb-4">
            Մրցանակներ
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {awards.map((award) => (
            <div 
                key={award.id}
                className="flex flex-col justify-between bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-purple-200 transition-all duration-200 p-6 group"
            >
                <div className="space-y-3">
                {/* Տարեթիվ */}
                <span className="inline-block text-xs sm:text-sm font-bold text-[#6200EE] bg-purple-50 px-3 py-1 rounded-full">
                    {award.year}
                </span>
                
                {/* Վերնագիր / Նկարագրություն */}
                <h3 className="text-sm sm:text-base font-bold text-gray-900 tracking-tight leading-snug">
                    {award.title}
                </h3>
                </div>

                {/* Ստորին հատված՝ կազմակերպություն և լոգո */}
                <div className="flex items-center justify-between pt-6 mt-4 border-t border-gray-50">
                <span className="text-xs sm:text-sm font-medium text-gray-500">
                    {award.organization}
                </span>
                {award.imageUrl && (
                    <div className="h-8 max-w-[100px] flex items-center justify-center">
                    <img 
                        src={award.imageUrl} 
                        alt={award.organization} 
                        className="max-h-full max-w-full object-contain"
                    />
                    </div>
                )}
                </div>
            </div>
            ))}
        </div>
        </div>
    );
    }