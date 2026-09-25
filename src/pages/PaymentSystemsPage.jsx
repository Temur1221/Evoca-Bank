import React from "react";
import MoneyTransfersSubNav from "../MoneyTransfersSubNav";
import MoneyTransfersSystems from "../MoneyTransfersSystems"; // Այս տողը պարտադիր պետք է լինի
import Footer from '../Footer';
import Header from "../Header";
import FloatingChatWidget from '../FloatingChatWidget'

export default function PaymentSystemsPage() {
  return (
      <>
      <Header/>
      <MoneyTransfersSubNav />
      <MoneyTransfersSystems />
      <FloatingChatWidget/>
      <Footer/>
  </>
  );
}