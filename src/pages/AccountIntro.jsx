import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import AccountHeroSection from '../AccountHeroSection';
import AccountBranchNotice from '../AccountBranchNotice';
import AccountDocuments from '../AccountDocuments';
import AccountAccordionSection from '../AccountAccordionSection';
import EvocaBanner from '../EvocaBanner';
import AccountSubNav from '../AccountSubNav';
import FloatingChatWidget from '../FloatingChatWidget'

export default function AccountIntro() {
  return (
    <>
      <Header />
      <AccountSubNav/>
      <AccountHeroSection />
      <AccountBranchNotice />
      <AccountAccordionSection/>
      <AccountDocuments/>
      <EvocaBanner/>
      <FloatingChatWidget/>
      <Footer />
    </>
  );
}