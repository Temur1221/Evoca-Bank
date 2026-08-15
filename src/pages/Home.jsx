import React from 'react';
import Header from '../Header';
import HeroSlider from '../HeroSlider';
import BiometricSection from '../BiometricSection';
import Footer from '../Footer';
import EvocaSection from '../EvocaSection';
import CardShowcase from '../CardShowcase';
import BankCalculator from '../BankCalculator';
import EvocaBanner from '../EvocaBanner';
import PartnersSection from '../PartnersSection';
import NewsSection from '../NewsSection';
import ExchangeRates from '../ExchangeRates';
import ReviewsSwiper from '../ReviewsSwiper';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSlider />
      <BiometricSection />
      <EvocaSection/>
      <CardShowcase/>
      <BankCalculator/>
      <EvocaBanner/>
      <PartnersSection/>
      <NewsSection/>
      <ExchangeRates/>
      <ReviewsSwiper/>
      <Footer />
    </>
  );
}