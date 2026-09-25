import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import BusinessTradeSubHeader from '../BusinessTradeSubHeader';
import CapitalNewsSection from '../CapitalNewsSection';
import BusinessTradeGuarantee from '../BusinessTradeGuarantee';
import BusinessTradeAccordion from '../BusinessTradeAccordion';
import FloatingChatWidget from '../FloatingChatWidget'

export default function BusinessTrade() {
  const [activeTab] = useState('biznes');

  return (
    <>
        <Header/>
        <BusinessTradeSubHeader/>
        <BusinessTradeGuarantee/>
        <BusinessTradeAccordion/>
        <CapitalNewsSection/>
        <FloatingChatWidget/>
        <Footer/>
    </>
  );
}