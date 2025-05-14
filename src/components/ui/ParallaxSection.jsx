import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const ParallaxSection = ({ imageUrl, title, subtitle, className = '' }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <section 
      ref={ref} 
      className={`relative h-[400px] overflow-hidden ${className}`}
    >
      <motion.div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageUrl})`,
          y: yBg
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-center px-4">
          <motion.h2 
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
          <motion.p 
            className="text-xl text-white max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default ParallaxSection