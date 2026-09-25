import React from 'react';
import JobsSubNav from '../JobsSubNav';
import InternshipHero from '../InternshipHero';
import JoinTeamForm from '../JoinTeamForm';
import Header from '../Header';
import Footer from '../Footer';
import FloatingChatWidget from '../FloatingChatWidget';
import InternshipDetails from '../InternshipDetails';

export default function Internship() {
  return (
    <>
      <Header/>
      <JobsSubNav />
      <InternshipHero />
      <InternshipDetails/>
      <JoinTeamForm/>
      <FloatingChatWidget/>
      <Footer/>
    </>
  );
}