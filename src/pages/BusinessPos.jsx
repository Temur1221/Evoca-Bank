import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import BusinessDigitalSubHeader from '../BusinessDigitalSubHeader';
import EvocaBanner from '../EvocaBanner';
import PosHeroSection from '../PosHeroSection';
import PosDetailsContent from '../PosDetailsContent';

export default function BusinessPos() {
  return (
    <>
      <Header />
      <BusinessDigitalSubHeader />
      <PosHeroSection/>
      <PosDetailsContent/>
      <EvocaBanner/>
      <Footer />
    </>
  );
}