import React from 'react'
import Header from '../Header';
import Footer from '../Footer';
import BusinessSecuritiesInvestment from '../BusinessSecuritiesInvestment';
import InvestmentAccordion from '../InvestmentAccordion';
import BusinessSecuritiesSubHeader from '../BusinessSecuritiesSubHeader';

export default function BusinessSecurities() {
  return (
    <>
    <Header />
    <BusinessSecuritiesSubHeader/>
    <BusinessSecuritiesInvestment/>
    <InvestmentAccordion />
    <Footer />
    </>
)
}
