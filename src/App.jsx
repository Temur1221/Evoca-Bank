import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Anhat from "./pages/Anhat";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Գլխավոր էջ */}
        <Route path="/" element={<Home />} />

        {/* Անհատական էջ */}
        <Route path="/anhat" element={<Anhat />} />

        {/* Եթե դեռ մյուս էջերը պատրաստ չեն, դրանց վրա սեղմելիս էլ է բացվում Anhat էջը */}
        <Route path="/loans" element={<Anhat />} />
        <Route path="/cards" element={<Anhat />} />
        <Route path="/deposits" element={<Anhat />} />
        <Route path="/accounts" element={<Anhat />} />
        <Route path="/transfers" element={<Anhat />} />

        {/* Ցանկացած անհայտ URL-ի դեպքում տանում է /anhat */}
        <Route path="*" element={<Navigate to="/anhat" replace />} />
      </Routes>
    </BrowserRouter>
  );
}