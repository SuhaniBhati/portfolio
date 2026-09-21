import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Footer from './components/Footer.jsx'

function getInitialTheme() {
  const stored = localStorage.getItem('theme')
  if (stored === 'dark' || stored === 'light') return stored
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches
  return prefersLight ? 'light' : 'dark'
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="site-shell min-h-screen font-body">
      <div className="site-hex-background" aria-hidden="true" />

      <div className="site-content">
        <Navbar theme={theme} setTheme={setTheme} />

        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
        </main>

        <Footer />
      </div>
    </div>
  )
}