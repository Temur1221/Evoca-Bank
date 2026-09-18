import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Anhat from "./pages/Anhat";
import Qarter from "./pages/Qarter";
import CardsList from "./CardsList";
import CardTerms from "./CardTerms";
import PensionCards from "./pages/PensionCards";
import EvocaBenefits from "./SalaryDetails";
import Deposits from "./pages/Deposits";
import Partners from "./pages/Partners";
import ImportantInfo from "./pages/ImportantInfo";
import AccountIntro from "./pages/AccountIntro";
import MetalAccountsIntro from "./pages/MetalAccountsIntro";
import NonResidentRemote from "./pages/NonResidentRemote";
import SafeDepositBoxes from "./pages/SafeDepositBoxes";
import MoneyTransfers from "./pages/MoneyTransfers";
import PaymentSystemsPage from "./pages/PaymentSystemsPage";
import SecuritiesPage from "./pages/SecuritiesPage";
import BondsSection from "./pages/BondsSection";
import HkdMainPage from "./pages/HkdMainPage";
import RepoMainPage from "./pages/RepoMainPage";
import EvocainvestMainPage from "./pages/EvocainvestMainPage";
import EvocasalaryMain from "./pages/EvocasalaryMain";
import EvocaTouch from "./pages/EvocaTouch";

// Նոր ավելացված OtherServices և BusinessMoneyTransfers էջերը
import OtherServices from "./pages/OtherServices";
import BusinessMoneyTransfers from "./pages/BusinessMoneyTransfers";

// Տերմինալի տեղադրման հայտի էջը
import TerminalRequestForm from "./pages/TerminalRequestForm";

// Mobile POS էջը
import MobilePOSPage from "./pages/MobilePOSPage";

// Բիզնես բաժնի էջեր
import BusinessLoans from "./pages/BusinessLoans";
import BusinessLeasing from "./pages/BusinessLeasing";
import BusinessLeasingSpecial from "./pages/BusinessLeasingSpecial";
import BusinessAccounts from "./pages/BusinessAccounts";
import BusinessDeposits from "./pages/BusinessDeposits"; 
import BusinessMetalAccounts from "./pages/BusinessMetalAccounts"; 
import BusinessSecurities from "./pages/BusinessSecurities";
import BusinessTrade from "./pages/BusinessTrade"; 
import BusinessFactoring from "./pages/BusinessFactoring"; 
import AccreditiveContent from "./pages/AccreditiveContent";
import BusinessInkasso from "./pages/BusinessInkasso";
import BusinessVPos from "./pages/BusinessVPos";
import BusinessPos from "./pages/BusinessPos"; 
import BusinessTariffs from "./pages/BusinessTariffs";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/anhat/*" element={<Anhat />} />
        <Route path="/loans" element={<Anhat />} />
        <Route path="/deposits" element={<Deposits />} /> 
        <Route path="/important-info" element={<ImportantInfo />} />
        <Route path="/accounts" element={<AccountIntro />} />
        <Route path="/unallocated-metal-accounts" element={<MetalAccountsIntro />} />
        <Route path="/non-resident-remote" element={<NonResidentRemote />} />
        <Route path="/safe-deposit-boxes" element={<SafeDepositBoxes />} />
        <Route path="/money-transfers" element={<MoneyTransfers />} />
        <Route path="/payment-systems" element={<PaymentSystemsPage />} />
        
        {/* Այլ ծառայությունների և Բիզնես փոխանցումների էջերի ուղիները */}
        <Route path="/other-services" element={<OtherServices />} />
        <Route path="/business-money-transfers" element={<BusinessMoneyTransfers />} />

        {/* Տերմինալի տեղադրման հայտի ուղին */}
        <Route path="/terminal-request" element={<TerminalRequestForm />} />

        {/* Արժեթղթերի էջերը */}
        <Route path="/securities" element={<SecuritiesPage />} />
        <Route path="/securities/services" element={<SecuritiesPage />} />
        <Route path="/securities/bonds" element={<BondsSection />} />
        <Route path="/securities/hcd" element={<HkdMainPage />} />
        <Route path="/securities/repo" element={<RepoMainPage />} />
        <Route path="/securities/evocainvest" element={<EvocainvestMainPage />} />

        {/* Բիզնես բաժնի էջերը */}
        <Route path="/biznes/loans" element={<BusinessLoans />} />
        <Route path="/biznes/leasing" element={<BusinessLeasing />} />
        <Route path="/biznes/leasing/special" element={<BusinessLeasingSpecial />} />
        <Route path="/biznes/accounts" element={<BusinessAccounts />} />
        <Route path="/biznes/deposits" element={<BusinessDeposits />} />
        <Route path="/biznes/metal-accounts" element={<BusinessMetalAccounts />} />
        <Route path="/biznes/securities" element={<BusinessSecurities />} />
        
        {/* Առևտրի ֆինանսավորման և ֆակտորինգի էջերը */}
        <Route path="/biznes/trade" element={<BusinessTrade />} />
        <Route path="/biznes/factoring" element={<BusinessFactoring />} />
        <Route path="/biznes/trade/letter-of-credit" element={<AccreditiveContent />} />
        <Route path="/biznes/trade/inkasso" element={<BusinessInkasso />} />
        
        {/* Դիջիթալ բաժնի ենթաէջեր */}
        <Route path="/biznes/trade/digital/v-pos" element={<BusinessVPos />} />
        <Route path="/biznes/trade/digital/pos" element={<BusinessPos />} />
        <Route path="/biznes/trade/digital/tariffs" element={<BusinessTariffs />} />
        
        {/* Mobile POS / mPOS էջը */}
        <Route path="/biznes/trade/digital/mpos" element={<MobilePOSPage />} />

        {/* EvocaSALARY էջը */}
        <Route path="/salary" element={<EvocasalaryMain />} />

        {/* EvocaTOUCH էջը */}
        <Route path="/touch" element={<EvocaTouch />} />

        <Route path="/transfers" element={<Navigate to="/money-transfers" replace />} />
        <Route path="/qarter" element={<Qarter />} />
        <Route path="/cards" element={<CardsList />} />
        <Route path="/benefits" element={<EvocaBenefits />} />
        <Route path="/terms" element={<CardTerms />} />
        <Route path="/social-cards" element={<PensionCards />} />
        
        <Route path="*" element={<Navigate to="/anhat" replace />} />
      </Routes>
    </BrowserRouter>
  );
}