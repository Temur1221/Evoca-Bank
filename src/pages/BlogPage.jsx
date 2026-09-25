import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import BlogSection from '../BlogSection'
import BlogBestSection from '../BlogBestSection'
import FloatingChatWidget from '../FloatingChatWidget'

export default function BlogPage() {
  return (
    <>
        <Header/>
        <BlogSection/>
        <BlogBestSection/>
        <FloatingChatWidget/>
        <Footer/>
    </>
)
}
