import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import ClassicDeposit from '../ClassicDeposit'
import DepositTermsSection from '../DepositTermsSection'
import DepositRatesAndTermsSection from '../DepositRatesAndTermsSection'
import FatcaNoticeSection from '../FatcaNoticeSection'
import EvocaBanner from '../EvocaBanner';

export default function BusinessAccounts() {
  return (
    <>
      <Header/>
      <ClassicDeposit/>
      <DepositTermsSection />
      <DepositRatesAndTermsSection/>
      <FatcaNoticeSection/>
      <EvocaBanner/>
      <Footer/>
    </>

  )
}
