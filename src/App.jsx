import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { Outlet, Route, Routes } from 'react-router-dom'

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
