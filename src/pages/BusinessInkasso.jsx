import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import BusinessTradeSubHeader from '../BusinessTradeSubHeader';
import CapitalNewsSection from '../CapitalNewsSection';
import InkassoContent from '../InkassoContent';
import FloatingChatWidget from '../FloatingChatWidget'

export default function BusinessInkasso() {
  return (
    <>
        <Header />
        <BusinessTradeSubHeader />
        <InkassoContent />
        <CapitalNewsSection />
        <FloatingChatWidget/>
        <Footer />
    </>
  );
}