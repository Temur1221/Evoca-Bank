import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Anhat from "./pages/Anhat";
import Qarter from "./pages/Qarter";
import CardsList from "./CardsList";
import CardTerms from "./CardTerms";
import PensionCards from "./pages/PensionCards";
import EvocaBenefits from "./pages/EvocaBenefits";
import Deposits from "./pages/Deposits";
import Partners from "./pages/Partners";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Գլխավոր էջ */}
        <Route path="/" element={<Home />} />
        <Route path="/partners" element={<Partners />} />
        {/* Անհատական էջ */}
        <Route path="/anhat/*" element={<Anhat />} />

        {/* Մյուս էջերը */}
        <Route path="/loans" element={<Anhat />} />
        
        {/* Ահա այստեղ /deposits-ը միացված է Deposits բաղադրիչին */}
        <Route path="/deposits" element={<Deposits />} /> 

        <Route path="/accounts" element={<Anhat />} />
        <Route path="/transfers" element={<Anhat />} />
        <Route path="/qarter" element={<Qarter />} />
        
        {/* Քարտերի հիմնական ցանկ */}
        <Route path="/cards" element={<CardsList />} />
        <Route path="/benefits" element={<EvocaBenefits />} />
        {/* Քարտերի պայմանների էջը */}
        <Route path="/terms" element={<CardTerms />} />

        {/* Սոցիալական/կենսաթոշակային քարտերի էջը */}
        <Route path="/social-cards" element={<PensionCards />} />

        {/* Ցանկացած անհայտ URL-ի դեպքում տանում է /anhat */}
        <Route path="*" element={<Navigate to="/anhat" replace />} />
      </Routes>
    </BrowserRouter>
  );
}