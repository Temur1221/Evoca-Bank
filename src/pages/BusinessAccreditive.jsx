import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import BusinessTradeSubHeader from '../BusinessTradeSubHeader';
import CapitalNewsSection from '../CapitalNewsSection';
import AccreditiveContent from '../AccreditiveContent';
import FloatingChatWidget from '../FloatingChatWidget'

export default function BusinessAccreditive() {
  return (
    <>
        <Header />
        <BusinessTradeSubHeader />
        <AccreditiveContent />
        <CapitalNewsSection />
        <FloatingChatWidget/>
        <Footer />
    </>
  );
}