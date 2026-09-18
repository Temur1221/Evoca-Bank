import React from 'react'
import Header from '../Header' 
import Footer from '../Footer'
import ReviewsSwiper from '../ReviewsSwiper'
import BusinessMetalAccountsHero from '../BusinessMetalAccountsHero'
import BusinessMetalAccountsDetails from '../BusinessMetalAccountsDetails'

export default function BusinessMetalAccounts() {
  return (
    <>
    <Header/>
    <BusinessMetalAccountsHero/>
    <BusinessMetalAccountsDetails/>
    <ReviewsSwiper/>
    <Footer/>
    </>
)
}
