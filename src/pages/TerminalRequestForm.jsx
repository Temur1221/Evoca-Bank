import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import BusinessDigitalSubHeader from '../BusinessDigitalSubHeader';
import TerminalApplicationForm from '../TerminalApplicationForm';

export default function TerminalRequestForm() {
  return (
    <>
      <Header />
      <BusinessDigitalSubHeader />
      <TerminalApplicationForm/>
      <Footer />
    </>
  );
}