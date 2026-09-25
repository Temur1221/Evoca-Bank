import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import MobilePOSContent from '../MobilePOSContent'
import MPOSContent from '../MPOSContent'
import FloatingChatWidget from '../FloatingChatWidget'

export default function MobilePOSPage() {
  return (
    <>
      <Header/>
      <MobilePOSContent/>
      <MPOSContent/>
      <FloatingChatWidget/>
      <Footer/>  
    </>
)
}
