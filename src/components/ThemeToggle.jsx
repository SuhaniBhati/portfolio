import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle({ theme, setTheme }) {
  const toggle = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <button
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="icon-action"
      style={{ width: '2.35rem', height: '2.35rem' }}
    >
      {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  )
}
