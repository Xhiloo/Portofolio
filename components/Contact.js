import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', msg: '' })
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('') // Clear error saat user mulai typing ulang
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validasi
    if (!form.name.trim()) {
      setError('Nama tidak boleh kosong')
      return
    }
    if (!form.email.includes('@')) {
      setError('Email harus valid')
      return
    }
    if (!form.msg.trim()) {
      setError('Pesan tidak boleh kosong')
      return
    }

    setError('')

    // 🎯 INTEGRASI EMAIL (OPSIONAL)
    // Bisa pakai: EmailJS, Formspree, atau API sendiri
    // Untuk sekarang hanya show success message
    
    try {
      // Contoh dengan Formspree (uncomment jika pakai):
      // const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(form)
      // })

      console.log('Pesan terkirim:', form)
      setSent(true)
      setForm({ name: '', email: '', msg: '' })
      setTimeout(() => setSent(false), 3000)
    } catch (err) {
      setError('Gagal mengirim pesan, coba lagi')
    }
  }

  return (
    <section id="contact" className="contact-section">
      <h2>Get In Touch</h2>
      <motion.form
        className="contact-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <input
          type="text"
          name="name"
          placeholder="Nama Anda"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Anda"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="msg"
          placeholder="Pesan"
          value={form.msg}
          onChange={handleChange}
          required
        />
        <button type="submit">Kirim Pesan</button>
        {error && <span className="form-error">❌ {error}</span>}
        {sent && <span className="form-success">✅ Pesan terkirim!</span>}
      </motion.form>
    </section>
  )
}
