import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import JoinTeamForm from '../JoinTeamForm'
import FloatingChatWidget from '../FloatingChatWidget'
import HowToApplyHero from '../HowToApplyHero'
import EvocaLifeSubNav from '../EvocaLifeSubNav'
import HowToApplyList from '../HowToApplyList'

export default function HowToApply() {
  return (
    <>
        <Header/>
        <EvocaLifeSubNav/>
        <HowToApplyHero/>
        <HowToApplyList/>
        <JoinTeamForm/>
        <FloatingChatWidget/>
        <Footer/>
    </>
  )
}
