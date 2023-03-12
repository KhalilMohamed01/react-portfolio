import React from 'react'
import { About } from './components/about/About'
import { Contact } from './components/contact/Contact'
import { Experience } from './components/experience/Experience'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Nav } from './components/nav/Nav'
import { Portfolio } from './components/portfolio/Portfolio'
import { Testimonials } from './components/testimonials/Testimonials'
import { Services } from './components/services/Services'


export const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Portfolio/>
        <Services/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </>
    )
}
