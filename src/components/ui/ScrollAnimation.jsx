import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const AnimatedValue = ({ value, suffix = '', prefix = '' }) => {
  const [currentValue, setCurrentValue] = useState(0)

  useEffect(() => {
    const duration = 2000
    const start = 0
    const increment = value / (duration / 16)

    let current = start
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        current = value
        clearInterval(timer)
      }
      setCurrentValue(Math.floor(current))
    }, 16)

    return () => clearInterval(timer)
  }, [value])

  return (
    <motion.span 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="inline-block"
    >
      {prefix}{currentValue}{suffix}
    </motion.span>
  )
}

export default AnimatedValue