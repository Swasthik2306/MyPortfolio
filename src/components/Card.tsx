import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function Card({ children, delay = 0, className = '' }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={`glass-morphism p-6 rounded-xl ${className}`}
    >
      {children}
    </motion.div>
  )
}
