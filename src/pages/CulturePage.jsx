import React, { useState } from 'react';
import Header from '../Header';
import EvocaLifeSubNav from '../EvocaLifeSubNav';
import Footer from '../Footer';
import FloatingChatWidget from '../FloatingChatWidget';
import CultureHero from '../CultureHero';
import WhyWorkSection from '../WhyWorkSection';
import CultureVideoSlider from '../CultureVideoSlider';
import CultureTestimonialSlider from '../CultureTestimonialSlider';
import JoinTeamForm from '../JoinTeamForm';

export default function CulturePage() {

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <EvocaLifeSubNav />
      <CultureHero/>
      <WhyWorkSection/>
      <CultureVideoSlider/>
      <CultureTestimonialSlider/>
      <FloatingChatWidget />
      <JoinTeamForm/>
      <Footer />
    </div>
  );
}