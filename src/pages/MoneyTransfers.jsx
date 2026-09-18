import React from "react";
import MoneyTransfersSubNav from "../MoneyTransfersSubNav";
import MoneyTransfersHero from "../MoneyTransfersHero";
import Header from "../Header";
import Footer from "../Footer";
import MoneyTransfersInfo from "../MoneyTransfersInfo";
import EvocaBanner from "../EvocaBanner";
import MoneyTransfersBanner from "../MoneyTransfersBanner";
import MoneyTransfersAccordion from "../MoneyTransfersAccordion";
import MoneyTransfersDocuments from "../MoneyTransfersDocuments";

export default function MoneyTransfers() {
  return (
    <>
    <Header/>
    <MoneyTransfersSubNav />
    <MoneyTransfersHero />
    <MoneyTransfersInfo/>
    <MoneyTransfersBanner/>
    <MoneyTransfersAccordion/>
    <MoneyTransfersDocuments/>
    <EvocaBanner/>
    <Footer/>
    </>
  );
}