import React from 'react';
import { Link } from 'react-router-dom';

export default function MainNav({ activeTab }) {
  const renderLinks = () => {
    if (activeTab === 'anhat') {
      return (
        <>
          <Link to="/loans" className="text-gray-800 hover:text-[#6200EE]">Վարկեր</Link>
          <Link to="/cards" className="text-gray-800 hover:text-[#6200EE]">Քարտեր</Link>
          <Link to="/deposits" className="text-gray-800 hover:text-[#6200EE]">Ավանդներ</Link>
          <Link to="/accounts" className="text-gray-800 hover:text-[#6200EE]">Հաշիվներ</Link>
          <Link to="/transfers" className="text-gray-800 hover:text-[#6200EE]">Փոխանցումներ</Link>
          <Link to="/securities" className="text-gray-800 hover:text-[#6200EE]">Արժեթղթեր</Link>
          <Link to="/salary" className="text-gray-800 hover:text-[#6200EE]">EvocaSALARY</Link>
          <Link to="/touch" className="text-gray-800 hover:text-[#6200EE]">EvocaTOUCH</Link>
        </>
      );
    } else if (activeTab === 'biznes') {
      return (
        <>
          <Link to="/biznes/loans" className="text-gray-800 hover:text-[#6200EE]">Վարկեր</Link>
          <Link to="/biznes/leasing" className="text-gray-800 hover:text-[#6200EE]">Լիզինգ</Link>
          <Link to="/biznes/accounts" className="text-gray-800 hover:text-[#6200EE]">Հաշիվներ</Link>
          <Link to="/biznes/deposits" className="text-gray-800 hover:text-[#6200EE]">Ավանդներ</Link>
          <Link to="/biznes/securities" className="text-gray-800 hover:text-[#6200EE]">Արժեթղթերի շուկա</Link>
          <Link to="/biznes/trade" className="text-gray-800 hover:text-[#6200EE]">Առևտրի ֆինանսավորում</Link>
          <Link to="/biznes/trade/digital/v-pos" className="text-gray-800 hover:text-[#6200EE]">Դիջիթալ</Link>
          <Link to="/other-services" className="text-gray-800 hover:text-[#6200EE]">Այլ</Link>
        </>
      );
    } else if (activeTab === 'mer-masin') {
      return (
        <>
          <Link to="/mer-masin/about" className="text-gray-800 hover:text-[#6200EE]">Evoca-ի մասին</Link>
          <Link to="/mer-masin/tariffs" className="text-gray-800 hover:text-[#6200EE]">Սակագներ</Link>
          <Link to="/mer-masin/reports" className="text-gray-800 hover:text-[#6200EE]">Հաշվետվություններ</Link>
          <Link to="/mer-masin/announcements" className="text-gray-800 hover:text-[#6200EE]">Հայտարարություններ</Link>
        </>
      );
    }
  };

  return (
    <div className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100">
      {/* Լոգո */}
      <Link to="/" className="text-2xl font-black text-gray-800">
        evoca
      </Link>

      {/* Դինամիկ փոխվող հղումներ */}
      <div className="flex items-center space-x-6 font-semibold text-sm">
        {renderLinks()}
      </div>

      {/* Աջ կողմի կոճակ */}
      <button className="bg-[#6200EE] text-white font-bold px-6 py-2.5 rounded-full">
        EvocaONLINE
      </button>
    </div>
  );
}