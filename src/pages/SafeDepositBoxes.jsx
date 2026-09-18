import React from "react";
import SafeDepositBoxesHero from "../SafeDepositBoxesHero";
import Footer from "../Footer";
import Header from "../Header";
import SafeDepositBoxesInfo from "../SafeDepositBoxesInfo";
import AccountSubNav from "../AccountSubNav";

export default function SafeDepositBoxes() {
  return (
    <>
    <Header/>
    <AccountSubNav/>
    <div className="bg-white min-h-screen pb-16">
      <SafeDepositBoxesHero />
      <SafeDepositBoxesInfo/>
    </div>
    <Footer/>
    </>
);
}