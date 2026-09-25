import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import Header from '../Header';
import Footer from '../Footer';
import SecuritiesSubNav from '../SecuritiesSubNav';
import HkdHeroSection from '../HkdHeroSection';
import HkdDetailsList from '../HkdDetailsList';
import HkdContent from '../HkdContent';
import FloatingChatWidget from '../FloatingChatWidget'


export default function HkdMainPage() {
  const [heroData, setHeroData] = useState(null);
  const [detailsData, setDetailsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const heroSnapshot = await getDocs(collection(db, 'hkdHero'));
        if (!heroSnapshot.empty) {
          setHeroData(heroSnapshot.docs[0].data());
        }
        const detailsSnapshot = await getDocs(collection(db, 'hkdDetails'));
        const items = detailsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDetailsData(items);

      } catch (error) {
        console.error('Սխալ Firebase-ից տվյալներ բեռնելիս:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center py-20 text-gray-500 font-medium">Բեռնվում է...</div>;
  }

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 flex flex-col justify-between">
      <div>
        <Header />
        <SecuritiesSubNav />
        
        <div className="py-12 px-4 sm:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto space-y-12">
            <HkdHeroSection data={heroData} />
            <HkdDetailsList detailsData={detailsData} />
          </div>
        </div>
      </div>
      <HkdContent/>
      <FloatingChatWidget/>
      <Footer />
    </div>
  );
}