import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import ReportsSubNav from '../ReportsSubNav';
import AnnualReportsContent from '../AnnualReportsContent';
import FloatingChatWidget from '../FloatingChatWidget'


export default function AnnualReportsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <ReportsSubNav />
      <AnnualReportsContent />
      <FloatingChatWidget/>
      <Footer />
    </div>
  );
}