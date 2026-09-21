import { useEffect, useState } from 'react'
import { Menu, X, Download } from 'lucide-react'
import ThemeToggle from './ThemeToggle.jsx'
import { navItems, links, profile } from '../data/portfolioData.js'

export default function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('Home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = navItems.map((i) => (i === 'Home' ? 'home' : i.toLowerCase()))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = navItems.find(
              (i) => (i === 'Home' ? 'home' : i.toLowerCase()) === entry.target.id
            )
            if (match) setActive(match)
          }
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (item) => {
    setOpen(false)
    const id = item === 'Home' ? 'home' : item.toLowerCase()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      style={{
        backgroundColor: scrolled ? 'var(--bg-primary)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => handleNavClick('Home')}
          className="font-display font-semibold text-[1.05rem]"
          style={{ color: 'var(--text-primary)' }}
        >
          {profile.name}
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => handleNavClick(item)}
                className={`nav-link ${active === item ? 'active' : ''}`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <a
            href={links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <Download size={15} />
            Resume
          </a>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <button
            className="icon-action"
            style={{ width: '2.35rem', height: '2.35rem' }}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border-subtle)' }}
        >
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className={`nav-link text-left ${active === item ? 'active' : ''}`}
            >
              {item}
            </button>
          ))}
          <a href={links.resume} target="_blank" rel="noopener noreferrer" className="btn btn-outline w-fit">
            <Download size={15} />
            Resume
          </a>
        </div>
      )}
    </header>
  )
}
