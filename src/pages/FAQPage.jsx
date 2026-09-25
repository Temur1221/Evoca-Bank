import React, { useEffect, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import EvocaLifeSubNav from '../EvocaLifeSubNav';
import JoinTeamForm from '../JoinTeamForm';
import FloatingChatWidget from '../FloatingChatWidget';
import FAQHero from '../FAQHero';
import FAQList from '../FAQList';

export default function FAQPage() {
  
  return (
      <>
    <Header />
      <EvocaLifeSubNav />
      <FAQHero/>
      <FAQList/>
      <JoinTeamForm />
      <FloatingChatWidget />
      <Footer />
      </>
  );
}