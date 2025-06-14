import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';
import Navigation from './components/Navigation';
import HeroSection from './components/Herosection';
import Expertise from './components/Expertise';
import Works from './components/Works';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import FAQ from './components/Faq';
import Landing from './components/Landing';

function App() {


  return (
    <div>
      <Navigation />
      <HeroSection/>
      <Expertise/>
      <Works/>
      <Experience/>
      <Blog/>
      <Testimonials/>
      <FAQ/>
      <Landing/>
    </div>
  )
}

export default App
