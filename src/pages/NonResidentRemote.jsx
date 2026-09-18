import React from "react";
import Header from "../Header";
import AccountSubNav from "../AccountSubNav";
import EvocaBanner from "../EvocaBanner";
import Footer from "../Footer";
import NonResidentHero from "../NonResidentHero";
import NonResidentAccordion from "../NonResidentAccordion";
import NonResidentDocuments from "../NonResidentDocuments";

export default function NonResidentRemote() {
  return (
    <>
      <Header />
      <AccountSubNav />
      <NonResidentHero/>
      <NonResidentAccordion/>
      <NonResidentDocuments/>
      <EvocaBanner />
      <Footer />
    </>
  );
}