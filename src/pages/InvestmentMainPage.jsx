import React from 'react';
import InvestmentServices from '../InvestmentServices';
import InvestmentDetails from '../InvestmentDetails';
import InvestmentAccordion from '../InvestmentAccordion';
import CapitalNewsSection from '../CapitalNewsSection';

export default function InvestmentMainPage() {
  return (
    <>
      <InvestmentServices />
      <InvestmentDetails />
      <InvestmentAccordion />
      <CapitalNewsSection />
    </>
  );
}