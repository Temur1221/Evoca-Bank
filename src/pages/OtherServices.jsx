import React from 'react'
import Footer from "../Footer";
import Header from "../Header";
import SafeDepositBoxesInfo from "../SafeDepositBoxesInfo";
import SafeDepositBoxesHero from "../SafeDepositBoxesHero";
import EvocaBanner from '../EvocaBanner';
import OtherSubHeader from '../OtherSubHeader';
import FloatingChatWidget from '../FloatingChatWidget'

export default function OtherServices() {
  return (
    <>
      <Header/>
      <OtherSubHeader/>
      <SafeDepositBoxesHero/>
      <SafeDepositBoxesInfo />
      <EvocaBanner/>
      <FloatingChatWidget/>
      <Footer/>
    </>
)
}
