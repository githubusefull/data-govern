import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import './App.css';
import Members from './components/Members/Members';
import AboutUs from './components/AboutUs/AboutUs';
import Team from './components/Team/Team';
import Slider2 from './components/Slider2/Slider2';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <About />
      <AboutUs />
      <Team />
      <Slider2/>
      <Members />
      <Footer/>
    </div>
  );
}

export default App;
