import { motion } from 'framer-motion'

export default function AboutMe() {
  return (
    <section id="about" className="about-section">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img 
          className="about-avatar" 
          src="https://via.placeholder.com/250" 
          alt="Profile"
        />
        {/* 🎯 GANTI URL di atas dengan foto Anda sendiri */}
        
        <div>
          <h2>About Me</h2>
          <p>
            Seorang developer passionate dengan fokus pada membuat pengalaman pengguna 
            yang luar biasa. Suka mengeksplorasi teknologi baru dan mengubah ide menjadi 
            kode yang fungsional dan indah.
          </p>
          {/* 🎯 GANTI DESKRIPSI di atas dengan cerita Anda */}
          
          <p>
            Ketika tidak sedang coding, saya suka main game dan belajar hal-hal baru!
          </p>
        </div>
      </motion.div>
    </section>
  )
}
