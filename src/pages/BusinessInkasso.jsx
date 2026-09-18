import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import BusinessTradeSubHeader from '../BusinessTradeSubHeader';
import CapitalNewsSection from '../CapitalNewsSection';
import InkassoContent from '../InkassoContent';

export default function BusinessInkasso() {
  return (
    <>
        <Header />
        <BusinessTradeSubHeader />
        <InkassoContent />
        <CapitalNewsSection />
        <Footer />
    </>
  );
}