import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import LeasingAccordion from "../LeasingAccordion";
import BusinesSubNav from "../BusinesSubNav";

export default function BusinessLeasing() {
  // Եթե 12-րդ տողում օգտագործում ես leasingItems, այն պետք է այստեղ հայտարարված լինի.
  const leasingItems = [
    // քո տվյալները...
  ];

  return (
    <>
      <Header />
      <BusinesSubNav/>
      <main className="max-w-4xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Բիզնես Լիզինգ</h1>
        <LeasingAccordion />
      </main>
      <Footer />
    </>
  );
}