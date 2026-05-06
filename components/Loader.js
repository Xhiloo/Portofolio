import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <div className="loader">
      <motion.div
        initial={{ scale: 1 }}
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 360, 0],
          background: ["#578cf8", "#6b8cff", "#578cf8"]
        }}
        transition={{ repeat: Infinity, duration: 1.4 }}
        className="loader__circle"
      />
      <span className="loader__text">Loading...</span>
    </div>
  )
}
