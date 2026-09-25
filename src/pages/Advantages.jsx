import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import EvocaLifeSubNav from '../EvocaLifeSubNav'
import JoinTeamForm from '../JoinTeamForm'
import FloatingChatWidget from '../FloatingChatWidget'
import AdvantagesHero from '../AdvantagesHero'
import AdvantagesList from '../AdvantagesList'

export default function Advantages() {
  return (
    <>
       <Header/>
       <EvocaLifeSubNav/>
       <AdvantagesHero/>
       <AdvantagesList/>
       <JoinTeamForm/>
       <FloatingChatWidget/>
       <Footer/>
    </>
  )
}
