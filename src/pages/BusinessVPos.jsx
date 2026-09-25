import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import EvocaBanner from '../EvocaBanner';
import BusinessDigitalSubHeader from '../BusinessDigitalSubHeader';
import VPosHeroSection from '../VPosHeroSection';
import VPosDetailsContent from '../VPosDetailsContent';
import FloatingChatWidget from '../FloatingChatWidget'

export default function BusinessVPos() {
  return (
    <>
        <Header/>
        <BusinessDigitalSubHeader/>
        <VPosHeroSection/>
        <VPosDetailsContent/>
        <EvocaBanner/>
        <FloatingChatWidget/>
        <Footer/>
    </>
)
}
