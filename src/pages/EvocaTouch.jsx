import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import ReviewsSwiper from '../ReviewsSwiper'
import EvocaBanner from '../EvocaBanner'
import EvocaTouchDetails from '../EvocaTouchDetails'
import EvocaTouchDocs from '../EvocaTouchDocs'
import FloatingChatWidget from '../FloatingChatWidget'

export default function EvocaTouch() {
  return (
    <>
    <Header/>
    <EvocaTouchDetails/>
    <EvocaTouchDocs/>
    <EvocaBanner/>
    <ReviewsSwiper/>
    <FloatingChatWidget/>
    <Footer/>
    </>
)
}
