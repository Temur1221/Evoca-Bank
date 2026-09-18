import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import SecuritiesSubNav from '../SecuritiesSubNav';
import BondsHeroSection from '../BondsHeroSection'; // Վերցնում ենք src-ից
import BondsInfoSection from '../BondsInfoSection';
import BondsAccordionSection from '../BondsAccordionSection';

export default function BondsSection() {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col justify-between">
      <Header/>
      <SecuritiesSubNav/>
      <div>
        <BondsHeroSection />
        <BondsInfoSection/>
        <BondsAccordionSection/>
      </div>
      <Footer />
    </div>
  );
}                                