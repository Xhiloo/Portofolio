import { motion } from 'framer-motion'

// 🎯 DAFTAR SKILLS - EDIT LEVEL (0-1) SESUAI KEMAMPUAN
const skills = [
  { name: 'React', level: 0.75 },
  { name: 'Next.js', level: 0.7 },
  { name: 'JavaScript', level: 0.7 },
  { name: 'CSS/SCSS', level: 0.75 },
  { name: 'HTML', level: 0.95 },
  { name: 'Framer Motion', level: 0.7 },
  { name: 'Fanny,Lancelot,Ling,Haya', level: 0.95 },
  { name: 'Woodpecker,M1590,AWM', level: 0.95 },
]

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-list">
        {skills.map((s) => (
          <motion.div
            key={s.name}
            className="skill-bar"
            initial={{ width: 0 }}
            whileInView={{ width: `${s.level * 100}%` }}
            transition={{ duration: 1.2, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span>{s.name}</span>
            <div className="skill-bg">
              <div 
                className="skill-fill" 
                style={{ width: `${s.level * 100}%` }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
