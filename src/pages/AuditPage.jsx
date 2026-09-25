import React from 'react';
import Header from '../Header';   // Ճշգրտեք ըստ ձեր ֆայլերի իրական տեղի
import Footer from '../Footer';   // Ուղղեք երկու 'r'-ից մեկը, եթե Footerr էր գրված
import ReportsSubNav from '../ReportsSubNav';
import ReportsDocuments from '../ReportsDocuments';
import FloatingChatWidget from '../FloatingChatWidget'


export default function AuditPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <ReportsSubNav />
      <ReportsDocuments/>
      <FloatingChatWidget/>
      <Footer />
    </div>
  );
}