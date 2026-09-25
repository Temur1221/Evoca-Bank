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
import AboutEvoca from "./pages/AboutEvoca";
import Structure from "./pages/Structure";
import Management from "./pages/Management";
import Awards from "./pages/Awards";
import CSR from "./pages/CSR";
import AnnualReportsPage from "./pages/AnnualReportsPage";
import SemiannualPage from "./pages/SemiannualPage";
import FinancialGroup from "./pages/FinancialGroup";
import OtherServices from "./pages/OtherServices";
import BusinessMoneyTransfers from "./pages/BusinessMoneyTransfers";
import InstantPayments from "./pages/InstantPayments";
import TerminalRequestForm from "./pages/TerminalRequestForm";
import MobilePOSPage from "./pages/MobilePOSPage";
import BusinessLoans from "./pages/BusinessLoans";
import BusinessLeasing from "./pages/BusinessLeasing";
import BusinessLeasingSpecial from "./pages/BusinessLeasingSpecial";
import BusinessAccounts from "./pages/BusinessAccounts";
import BusinessDeposits from "./pages/BusinessDeposits"; 
import BusinessMetalAccounts from "./pages/BusinessMetalAccounts"; 
import BusinessSecurities from "./pages/BusinessSecurities";
import BusinessTrade from "./pages/BusinessTrade"; 
import BusinessFactoring from "./pages/BusinessFactoring"; 
import AccreditiveContent from "./pages/BusinessAccreditive";
import BusinessInkasso from "./pages/BusinessInkasso";
import BusinessVPos from "./pages/BusinessVPos";
import BusinessPos from "./pages/BusinessPos"; 
import BusinessTariffs from "./pages/BusinessTariffs";
import Shareholders from "./pages/Shareholders";
import HashvetvutyunnerPage from "./pages/HashvetvutyunnerPage";
import AuditPage from "./pages/AuditPage"; 
import FinancialReportsPage from "./pages/FinancialReportsPage";
import InvestorsReportsPage from "./pages/InvestorsReportsPage";
import AnnouncementsPage from './pages/AnnouncementsPage';
import NewsPage from './pages/NewsPage';
import BlogPage from "./pages/BlogPage";
import Login from "./pages/Login";
import CareerPage from "./pages/CareerPage";
import EvocaLifePage from './pages/EvocaLifePage';
import CulturePage from './pages/CulturePage';
import Advantages from './pages/Advantages';
import FAQPage from './pages/FAQPage';
import HowToApply from './pages/HowToApply';
import Jobs from './pages/Jobs';
import JobOpportunities from './pages/JobOpportunities';
import Internship from './pages/Internship';
import EvocaBridge from './pages/EvocaBridge'; // Ներմուծում ենք EvocaBridge բաղադրիչը

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
        <Route path="/mer-masin/shareholders" element={<Shareholders />} />
        <Route path="/mer-masin/about" element={<AboutEvoca />} />
        <Route path="/mer-masin/structure" element={<Structure />} />
        <Route path="/mer-masin/management" element={<Management />} />
        <Route path="/mer-masin/awards" element={<Awards />} />
        <Route path="/mer-masin/csr" element={<CSR />} />
        <Route path="/mer-masin/financial-group" element={<FinancialGroup />} />
        <Route path="/mer-masin/reports" element={<Navigate to="/mer-masin/reports/audit" replace />} />
        <Route path="/mer-masin/reports/main" element={<HashvetvutyunnerPage />} />
        <Route path="/mer-masin/reports/audit" element={<AuditPage />} />
        <Route path="/mer-masin/reports/financial" element={<FinancialReportsPage />} />
        <Route path="/mer-masin/reports/investors" element={<InvestorsReportsPage />} />
        <Route path="/instant-payments" element={<InstantPayments />} />
        <Route path="/other-services" element={<OtherServices />} />
        <Route path="/business-money-transfers" element={<BusinessMoneyTransfers />} />
        <Route path="/terminal-request" element={<TerminalRequestForm />} />
        <Route path="/securities" element={<SecuritiesPage />} />
        <Route path="/securities/services" element={<SecuritiesPage />} />
        <Route path="/securities/bonds" element={<BondsSection />} />
        <Route path="/securities/hcd" element={<HkdMainPage />} />
        <Route path="/securities/repo" element={<RepoMainPage />} />
        <Route path="/securities/evocainvest" element={<EvocainvestMainPage />} />
        <Route path="/biznes/loans" element={<BusinessLoans />} />
        <Route path="/biznes/leasing" element={<BusinessLeasing />} />
        <Route path="/biznes/leasing/special" element={<BusinessLeasingSpecial />} />
        <Route path="/biznes/accounts" element={<BusinessAccounts />} />
        <Route path="/biznes/deposits" element={<BusinessDeposits />} />
        <Route path="/biznes/metal-accounts" element={<BusinessMetalAccounts />} />
        <Route path="/biznes/securities" element={<BusinessSecurities />} />
        <Route path="/biznes/trade" element={<BusinessTrade />} />
        <Route path="/biznes/factoring" element={<BusinessFactoring />} />
        <Route path="/biznes/trade/letter-of-credit" element={<AccreditiveContent />} />
        <Route path="/biznes/trade/inkasso" element={<BusinessInkasso />} />
        <Route path="/biznes/trade/digital/v-pos" element={<BusinessVPos />} />
        <Route path="/biznes/trade/digital/pos" element={<BusinessPos />} />
        <Route path="/biznes/trade/digital/tariffs" element={<BusinessTariffs />} />
        <Route path="/biznes/trade/digital/mpos" element={<MobilePOSPage />} />
        <Route path="/salary" element={<EvocasalaryMain />} />
        <Route path="/touch" element={<EvocaTouch />} />
        <Route path="/transfers" element={<Navigate to="/money-transfers" replace />} />
        <Route path="/qarter" element={<Qarter />} />
        <Route path="/cards" element={<CardsList />} />
        <Route path="/benefits" element={<EvocaBenefits />} />
        <Route path="/terms" element={<CardTerms />} />
        <Route path="/social-cards" element={<PensionCards />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mer-masin/reports/semiannual" element={<SemiannualPage />} />
        <Route path="/mer-masin/reports/annual" element={<AnnualReportsPage />} />
        <Route path="/mer-masin/announcements" element={<AnnouncementsPage />} />
        <Route path="/mer-masin/news" element={<NewsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/kariera/life" element={<EvocaLifePage />} />
        <Route path="/kariera/culture" element={<CulturePage />} />
        <Route path="/advantages" element={<Advantages />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/how-to-apply" element={<HowToApply />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/job-opportunities" element={<JobOpportunities />} />
        <Route path="/jobs/internship" element={<Internship />} />
        <Route path="/jobs/bridge" element={<EvocaBridge />} />
        <Route path="*" element={<Navigate to="/anhat" replace />} />
      </Routes>
    </BrowserRouter>
  );
}