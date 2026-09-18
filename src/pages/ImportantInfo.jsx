import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import SubHeader from "../SubHeader";
import ImportantAccordion from "../ImportantAccordion";
import ImportantGeneralRules from "../ImportantGeneralRules";
import ImportantDocuments from "../ImportantDocuments";

export default function ImportantInfo() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
        <Header />
      <SubHeader />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8">
          Կարևոր տեղեկատվություն
        </h1>
        <ImportantGeneralRules />
        <ImportantAccordion />
        <ImportantDocuments />
      </div>
      <Footer />
    </div>
  );
}