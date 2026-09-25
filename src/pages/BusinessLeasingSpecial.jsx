import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import BusinesSubNav from '../BusinesSubNav';
import SpecialOfferSection from '../SpecialOfferSection'; // Ներմուծում ենք նոր ֆայլը
import FloatingChatWidget from '../FloatingChatWidget'

export default function BusinessLeasingSpecial() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <BusinesSubNav />

      <main className="flex-grow w-full">
        <SpecialOfferSection />
      </main>
      <FloatingChatWidget/>
      <Footer />
    </div>
  );
}