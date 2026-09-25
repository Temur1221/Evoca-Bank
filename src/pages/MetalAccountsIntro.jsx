import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import MetalHeroSection from "../MetalHeroSection";
import MetalConditions from "../MetalConditions";
import Footer from "../Footer";
import Header from "../Header";
import AccountSubNav from "../AccountSubNav";
import EvocaBanner from "../EvocaBanner";
import MetalDocuments from "../MetalDocuments";
import FloatingChatWidget from '../FloatingChatWidget'

export default function MetalAccountsIntro() {
  const [metalData, setMetalData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMetalData = async () => {
      try {
        const docRef = doc(db, "metalAccounts", "QG4ij8vkfWpTkOyS5e9R");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setMetalData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMetalData();
  }, []);

  if (loading) {
    return <div className="text-center py-12 text-gray-500">Բեռնվում է...</div>;
  }

  return (
    <>
      <Header />
      <AccountSubNav />
      <div className="max-w-[1280px] mx-auto px-4 md:px-12 py-8 space-y-8">
        <MetalHeroSection data={metalData} />
        <MetalConditions />
        <MetalDocuments />
      </div>
      <EvocaBanner />
      <FloatingChatWidget/>
      <Footer />
    </>
  );
}