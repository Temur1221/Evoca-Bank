import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import BusinessDigitalSubHeader from '../BusinessDigitalSubHeader';
import CapitalNewsSection from '../CapitalNewsSection';
import TerminalTariffsContent from '../TerminalTariffsContent';

export default function BusinessTariffs() {
  return (
    <>
      <Header />
      <BusinessDigitalSubHeader />
      <TerminalTariffsContent/>
      <CapitalNewsSection />
      <Footer />
    </>
  );
}