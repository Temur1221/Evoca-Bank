import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import EvocasalaryHero from '../EvocasalaryHero'
import CapitalNewsSection from '../CapitalNewsSection'
import SalaryDetails from '../SalaryDetails'
import SalaryFAQ from '../SalaryFAQ'
import FloatingChatWidget from '../FloatingChatWidget'

export default function EvocasalaryMain() {
  return (
    <>
    <Header/>
    <EvocasalaryHero/>
    <SalaryDetails/>
    <CapitalNewsSection />
    <SalaryFAQ/>
    <FloatingChatWidget/>
    <Footer/>
    </>
)
}
