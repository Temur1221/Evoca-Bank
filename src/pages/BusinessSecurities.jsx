import React from 'react'
import Header from '../Header';
import Footer from '../Footer';
import BusinessSecuritiesInvestment from '../BusinessSecuritiesInvestment';
import InvestmentAccordion from '../InvestmentAccordion';
import BusinessSecuritiesSubHeader from '../BusinessSecuritiesSubHeader';
import FloatingChatWidget from '../FloatingChatWidget'

export default function BusinessSecurities() {
  return (
    <>
    <Header />
    <BusinessSecuritiesSubHeader/>
    <BusinessSecuritiesInvestment/>
    <InvestmentAccordion />
    <FloatingChatWidget/>
    <Footer />
    </>
)
}
