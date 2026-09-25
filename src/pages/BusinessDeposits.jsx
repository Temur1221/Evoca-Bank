import React from 'react'
import Header from '../Header'
import EvocaBanner from '../EvocaBanner'
import Footer from '../Footer'
import BusinessAccountIntroSection from '../BusinessAccountIntroSection'
import BusinessDepositsDetailsSection from '../BusinessDepositsDetailsSection'
import BusinessDepositsAccordion from '../BusinessDepositsAccordion'
import BusinessSubHeader from '../BusinessSubHeader'
import FloatingChatWidget from '../FloatingChatWidget'

export default function BusinessDeposits() {
  return (
    <>
    <Header/>
    <BusinessSubHeader/>
    <BusinessAccountIntroSection />
    <BusinessDepositsDetailsSection/>
    <BusinessDepositsAccordion/>
    <EvocaBanner/>
    <FloatingChatWidget/>
    <Footer/>
    </>
)
}
