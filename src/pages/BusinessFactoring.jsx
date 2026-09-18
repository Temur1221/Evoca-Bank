import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import CapitalNewsSection from '../CapitalNewsSection'
import FactoringContent from '../FactoringContent'
import FactoringDocuments from '../FactoringDocuments'
import BusinessTradeSubHeader from '../BusinessTradeSubHeader'

export default function BusinessFactoring() {
  return (
    <>
    <Header/>
    <BusinessTradeSubHeader/>
    <FactoringContent/>
    <FactoringDocuments/>
    <CapitalNewsSection/>
    <Footer/>
    </>
  )
}
