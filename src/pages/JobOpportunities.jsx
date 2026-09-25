import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import FloatingChatWidget from '../FloatingChatWidget'
import JobsSubNav from '../JobsSubNav'
import JobOpportunitiesHero from '../JobOpportunitiesHero'
import JobQualities from '../JobQualities'
import JobListings from '../JobListings'

export default function JobOpportunities() {
  return (
    <>
        <Header/>
        <JobsSubNav/>
        <JobOpportunitiesHero/>
        <JobQualities/>
        <JobListings/>
        <FloatingChatWidget/>
        <Footer/>
    </>
  )
}
