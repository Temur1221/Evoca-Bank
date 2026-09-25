import React from 'react';
import Header from '../Header';
import AboutSubHeader from '../AboutSubHeader';
import Footer from '../Footer';
import ShareholderCard from '../ShareholderCard';
import NecessaryInfoSection from '../NecessaryInfoSection';
import DocumentsSection from '../DocumentsSection';
import FloatingChatWidget from '../FloatingChatWidget'

export default function Shareholders() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <AboutSubHeader />
        <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className=" rounded-2xl p-6 sm:p-10 space-y-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 border-b border-gray-100 pb-4">
            Բաժնետերեր
          </h1>
            <div className="flex justify-center items-center py-4">
            <ShareholderCard />
          </div>
        </div>
      <NecessaryInfoSection/>
      <DocumentsSection/>
      </main>
      <FloatingChatWidget/>
      <Footer />
    </div>
  );
}