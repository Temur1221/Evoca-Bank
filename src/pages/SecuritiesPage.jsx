import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import SecuritiesSubNav from '../SecuritiesSubNav';
import InvestmentServices from '../InvestmentServices';
import InvestmentDetails from '../InvestmentDetails';
import InvestmentAccordion from '../InvestmentAccordion';
import CapitalNewsSection from '../CapitalNewsSection';
import FloatingChatWidget from '../FloatingChatWidget'

export default function SecuritiesPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Header />
        <SecuritiesSubNav />
        <main className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-8 space-y-8">
          <InvestmentServices />
          <InvestmentDetails />
          <InvestmentAccordion />
          <CapitalNewsSection />
        </main>
      </div>
      <FloatingChatWidget/>
      <Footer />
    </div>
  );
}