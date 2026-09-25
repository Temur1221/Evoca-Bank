import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import AnnouncementsContent from '../AnnouncementsContent'
import FloatingChatWidget from '../FloatingChatWidget'

export default function AnnouncementsPage() {
  return (
    <>
        <Header/>
        <AnnouncementsContent/>
        <FloatingChatWidget/>
        <Footer/>
    </>
)
}
