import React, { useState } from 'react';
import TopNav from './TopNav';
import MainNav from './MainNav';

export default function Header() {
  // Սահմանում ենք, թե որ բաժինն է սկզբում ակտիվ (օրինակ՝ 'anhat')
  const [activeTab, setActiveTab] = useState('anhat');

  return (
    <header className="w-full shadow-md bg-white">
      {/* Փոխանցում ենք activeTab-ը և setActiveTab-ը TopNav-ին */}
      <TopNav activeTab={activeTab} onSelectTab={setActiveTab} />

      {/* Փոխանցում ենք activeTab-ը MainNav-ին, որպեսզի իմանա ինչ տեքստեր ցույց տա */}
      <MainNav activeTab={activeTab} />
    </header>
  );
}