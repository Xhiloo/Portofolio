export default function Modal({ image, onClose }) {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') onClose()
  }

  return (
    <div 
      className="modal-backdrop" 
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal">
        <img src={image.src} alt={image.title} />
        <h3>{image.title}</h3>
        <p>{image.desc}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}
