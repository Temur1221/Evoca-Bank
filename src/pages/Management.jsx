import React from 'react'
import Header from '../Header';
import AboutSubHeader from '../AboutSubHeader';
import Footer from '../Footer';
import ManagementSection from '../ManagementSection';
import FloatingChatWidget from '../FloatingChatWidget'

export default function Management() {
  return (
    <>
      <Header />
      <AboutSubHeader />
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10">
          <ManagementSection />
        </div>
      </main>
      <FloatingChatWidget/>
      <Footer/>
    </>
  )
}
