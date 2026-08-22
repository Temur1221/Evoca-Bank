import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import LoansPage from '../LoansPage';
import CreditHistoryPage from '../CreditHistoryPage';
import ImportantInfoPage from '../ImportantInfoPage';

export default function Anhat() {
  return (
    <>
      <Header />
    
      <Routes>
        <Route index element={<Navigate to="loans" replace />} />        
        <Route path="loans" element={<LoansPage />} />
        <Route path="credit-history" element={<CreditHistoryPage />} />
        <Route path="important-info" element={<ImportantInfoPage />} />
      </Routes>

      <Footer />
    </>
  );
}