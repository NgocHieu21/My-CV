import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/skill';
import Services from './components/services/services';
import Qualification from './components/qualification/Qualification';
import Demo from './components/demo/demo';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';


const App = () => {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Services/>
      <Qualification />
      <Demo />
      <Contact />
      <Footer/>
    </main>
    </>
  )
}



export default App;
