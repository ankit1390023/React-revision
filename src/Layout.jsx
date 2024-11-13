import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
      <>
          <Header />
          <Outlet/>{/*jha bhi outlet doge vha chize change hogi i.e header footer same rhngi bich ka changehogi*/}
          <Footer/>
      </>
  )
}

export default Layout