import React from 'react';
import JobsSubNav from '../JobsSubNav';
import JoinTeamForm from '../JoinTeamForm';
import Header from '../Header';
import Footer from '../Footer';
import FloatingChatWidget from '../FloatingChatWidget';
import EvocaBridgeHero from '../EvocaBridgeHero';
import EvocaBridgeContent from '../EvocaBridgeContent';

export default function EvocaBridge() {
  return (
    <>
      <Header/>
      <JobsSubNav />
      <EvocaBridgeHero/>
      <EvocaBridgeContent/>
      <JoinTeamForm/>
      <FloatingChatWidget/>
      <Footer/>
    </>
  );
}