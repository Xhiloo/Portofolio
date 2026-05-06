import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const textArr = ["Developer.", "Tech Enthusiast.", "Web Creator."]
  const txtRef = useRef()
  let idx = 0
  let char = 0
  let forward = true
  let interval

  useEffect(() => {
    const type = () => {
      if (!txtRef.current) return

      if (forward) {
        txtRef.current.innerText = textArr[idx].slice(0, ++char)
        if (char === textArr[idx].length) {
          forward = false
          setTimeout(() => {}, 1500)
        }
      } else {
        txtRef.current.innerText = textArr[idx].slice(0, --char)
        if (char === 0) {
          forward = true
          idx = (idx + 1) % textArr.length
        }
      }
    }

    interval = setInterval(type, 80)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="hero-section">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>
          Hi, I'm <span className="highlight">Xhiloo</span>
        </h1>
        {/* 🎯 GANTI "Xhiloo" dengan nama Anda di atas */}
        
        <p className="typed-text" ref={txtRef}></p>
        {/* Teks di bawah akan otomatis berganti (Typing Effect) */}
      </motion.div>
    </section>
  )
}
