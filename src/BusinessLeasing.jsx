import React from 'react';
import LeasingContent from './LeasingContent'; // կամ LeasingAccordion՝ կախված նրանից, թե ինչ անունով ես ստեղծել ֆայլը

export default function BusinessLeasing() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Բիզնես Լիզինգ</h1>
      <LeasingContent />
    </div>
  );
}