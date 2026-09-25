import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import ReportsSubNav from '../ReportsSubNav';
import FinancialReportsDocuments from '../FinancialReportsDocuments';
import FloatingChatWidget from '../FloatingChatWidget'

export default function FinancialReportsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <ReportsSubNav />
      <FinancialReportsDocuments/>
      <FloatingChatWidget/>
      <Footer />
    </div>
  );
}