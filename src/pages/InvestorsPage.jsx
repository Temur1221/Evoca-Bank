import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import ReportsSubNav from '../ReportsSubNav';
import FloatingChatWidget from '../FloatingChatWidget'

export default function InvestorsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <ReportsSubNav />
      <FloatingChatWidget/>
      <Footer />
    </div>
  );
}