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
          src="https://drive.google.com/file/d/1oyJ0KQf5RUvplFl-akVBsUMBXnXEziRj/view?usp=sharing" 
          alt="Profile"
        />
        {/* 🎯 GANTI URL di atas dengan foto Anda sendiri */}
        
        <div>
          <h2>About Me</h2>
          <p>
            Seorang developer passionate dengan fokus pada membuat pengalaman pengguna 
            yang luar biasa. Suka mengeksplorasi teknologi(AI) baru dan mengubah ide menjadi 
            kode yang fungsional dan indah.Pria (Mahasiswa) yang suka belajar hal baru dan selalu ingin berkembang.
            Pria yang udah IMMO in ML men.Jungler Assasin Keras Boss.
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
