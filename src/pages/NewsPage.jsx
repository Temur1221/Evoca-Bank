import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import NewsHeroSection from '../NewsHeroSection';
import ImportantNewsSection from '../ImportantNewsSection';
import FloatingChatWidget from '../FloatingChatWidget'

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 py-8">
        <NewsHeroSection/> 
        <ImportantNewsSection/>       
      </main>
      <FloatingChatWidget/>
      <Footer />
    </div>
  );
}