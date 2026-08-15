import React from 'react';
import TopNav from './TopNav';
import MainNav from './MainNav';

export default function Header() {
  return (
    <header className="w-full font-sans border-b border-gray-200">
      <TopNav />
      <MainNav />
    </header>
  );
}