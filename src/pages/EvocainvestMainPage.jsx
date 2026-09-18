import React from 'react'
import Header from '../Header'
import SecuritiesSubNav from '../SecuritiesSubNav'
import Footer from '../Footer'
import EvocainvestHero from '../EvocainvestHero'
import EvocainvestDetails from '../EvocainvestDetails'

export default function EvocainvestMainPage() {
  return (
    <>
    <Header/>
    <SecuritiesSubNav/>
    <EvocainvestHero/>
    <EvocainvestDetails/>
    <Footer/>
    </>
)
}
