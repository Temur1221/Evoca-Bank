import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import ReportsSubNav from '../ReportsSubNav';
import SemiannualContent from '../SemiannualContent';
import FloatingChatWidget from '../FloatingChatWidget'

export default function SemiannualPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <ReportsSubNav />
      <SemiannualContent />
      <FloatingChatWidget/>
      <Footer />
    </div>
  );
}