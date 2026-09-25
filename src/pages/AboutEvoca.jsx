import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import AboutSubHeader from '../AboutSubHeader'
import AboutGeneral from '../AboutGeneral'
import CorporateSocialResponsibility from '../CorporateSocialResponsibility'
import BankBrandIdentity from '../BankBrandIdentity'
import FloatingChatWidget from '../FloatingChatWidget'

export default function AboutEvoca() {
  return (
    <>
        <Header/>
        <AboutSubHeader/>
        <AboutGeneral/>
        <CorporateSocialResponsibility/>
        <BankBrandIdentity/>
        <FloatingChatWidget/>
        <Footer/>
    </>
  )
}
