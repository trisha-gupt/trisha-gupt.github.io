import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import ProjectDetail from './components/ProjectDetail'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navigation />
      <main className="main-content">
        <Routes>
          <Route path="/" element={(
            <>
              <Hero />
              <Projects />
              <About />
              <Contact />
            </>
          )} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
