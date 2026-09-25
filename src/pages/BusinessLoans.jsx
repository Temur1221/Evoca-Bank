import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import BusinessLoansList from '../BusinessLoansList'
import FloatingChatWidget from '../FloatingChatWidget'

export default function BusinessLoans() {
  return (
    <>
        <Header/>
        <BusinessLoansList/>
        <FloatingChatWidget/>
        <Footer/>
    </>
  )
}
