import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Ambil tema dari localStorage saat komponen mount
    setMounted(true)
    const stored = localStorage.getItem('theme_mode') || 'light'
    setTheme(stored)
    document.documentElement.setAttribute('data-theme', stored)
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)
    localStorage.setItem('theme_mode', nextTheme)
    document.documentElement.setAttribute('data-theme', nextTheme)
  }

  // Hindari render mismatch dengan client-side rendering
  if (!mounted) return null

  return (
    <button 
      id="theme-toggle" 
      aria-label="Toggle dark mode" 
      onClick={toggleTheme}
      title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      <span>{theme === 'light' ? '🌙' : '☀️'}</span>
    </button>
  )
}
