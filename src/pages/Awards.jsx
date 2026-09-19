import React from 'react';
import Header from '../Header';
import AboutSubHeader from '../AboutSubHeader';
import Footer from '../Footer';
import AwardsSection from '../AwardsSection';

export default function Awards() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <AboutSubHeader />
      
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10">
          <AwardsSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}