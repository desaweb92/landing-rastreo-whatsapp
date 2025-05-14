import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section 
      className="relative h-screen flex items-center justify-center bg-[#F7F7F7] bg-opacity-10 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/images/hero-bg.webp')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Conectamos tu mundo con pasión
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Soluciones logísticas confiables para tus necesidades de envío
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link 
            to="/rastrear" 
            className="bg-envia-red text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Rastrear envío
          </Link>
          <Link 
            to="/servicios" 
            className="bg-white text-envia-gray px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            Nuestros servicios
          </Link>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  )
}

export default HeroSection