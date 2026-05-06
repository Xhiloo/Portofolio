import { useState } from 'react'
import Modal from './Modal'

// 🎯 DAFTAR PORTFOLIO GAMBAR - EDIT INI SESUAI KEBUTUHAN
const images = [
  {
    src: 'https://via.placeholder.com/300x300?text=Mobile+Legends',
    title: 'Mobile Legends Battle',
    desc: 'Screenshot dari game Mobile Legends yang sedang saya mainkan'
  },
  {
    src: 'https://via.placeholder.com/300x300?text=Free+Fire',
    title: 'Free Fire Victory',
    desc: 'Momen kemenangan di Free Fire'
  },
  {
    src: 'https://via.placeholder.com/300x300?text=Project+1',
    title: 'My Project 1',
    desc: 'Deskripsi project pertama Anda'
  },
  {
    src: 'https://via.placeholder.com/300x300?text=Project+2',
    title: 'My Project 2',
    desc: 'Deskripsi project kedua Anda'
  },
]

export default function Gallery() {
  const [modal, setModal] = useState(null)

  return (
    <section id="gallery" className="gallery-section">
      <h2>Portfolio</h2>
      <div className="gallery-grid">
        {images.map((img, i) => (
          <div
            key={i}
            className="gallery-card"
            tabIndex={0}
            onClick={() => setModal(img)}
            onKeyDown={(e) => e.key === 'Enter' && setModal(img)}
            role="button"
            style={{ backgroundImage: `url(${img.src})` }}
          >
            <div className="overlay">
              <span>View</span>
            </div>
          </div>
        ))}
      </div>
      {modal && <Modal image={modal} onClose={() => setModal(null)} />}
    </section>
  )
}
