import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import EvocaBanner from '../EvocaBanner'
import BusinessTransferSection from '../BusinessTransferSection'
import GeneralTerms from '../GeneralTerms'
import FloatingChatWidget from '../FloatingChatWidget'

export default function BusinessMoneyTransfers() {
  return (
    <>
        <Header/>
        <BusinessTransferSection/>
        <GeneralTerms/>
        <EvocaBanner/>
        <FloatingChatWidget/>
        <Footer/>
    </>
)
}
