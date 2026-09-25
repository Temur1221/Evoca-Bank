import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import AboutSubHeader from '../AboutSubHeader'
import CSRHero from '../CSRHero'
import CapitalNewsSection from '../CapitalNewsSection'
import CSRDescription from '../CSRDescription'
import FloatingChatWidget from '../FloatingChatWidget'

export default function CSR() {
  return (
    <>
        <Header/>
        <AboutSubHeader/>
        <CSRHero/>
        <CSRDescription/>
        <CapitalNewsSection/>
        <FloatingChatWidget/>
        <Footer/>
    </>
)
}
