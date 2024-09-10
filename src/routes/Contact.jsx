import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div> <NavBar/>
    <HeroImg2 heading="CONTACT." text="Let's have a chat."/>
    <ContactForm/>
    <Footer/>
    
     </div>

  )
}

export default Contact
