import { useState } from 'react'

import './App.css'

import { Outlet, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home/Home'
import AboutMe from './components/AboutMe/AboutMe'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <div id="home"><Home /></div>
      <div id="aboutme"><AboutMe /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="footer"><Footer /></div>
    </>
  );
}

export default App
