import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import Header from '../Header';
import Footer from '../Footer';
import SecuritiesSubNav from '../SecuritiesSubNav';
import RepoHeroSection from '../RepoHeroSection';
import RepoDetailsList from '../RepoDetailsList';
import FloatingChatWidget from '../FloatingChatWidget'

export default function RepoMainPage() {
  const [heroData, setHeroData] = useState(null);
  const [detailsData, setDetailsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        // 1. Քաշում ենք Հերո բլոկի տվյալները 'repoHero' հավաքածուից
        const heroSnapshot = await getDocs(collection(db, 'repoHero'));
        if (!heroSnapshot.empty) {
          setHeroData(heroSnapshot.docs[0].data());
        }

        // 2. Քաշում ենք մանրամասները 'repoDetails' հավաքածուից
        const detailsSnapshot = await getDocs(collection(db, 'repoDetails'));
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

    fetchRepoData();
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
            <RepoHeroSection data={heroData} />
            <RepoDetailsList detailsData={detailsData} />
          </div>
        </div>
      </div>
      <FloatingChatWidget/>
      <Footer />
    </div>
  );
}