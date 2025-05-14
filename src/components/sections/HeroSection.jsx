import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import WhatsAppButton from '../layout/WhatsAppButton'

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-[#ADADAB]">
      
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Rastrea tus envíos directamente desde <span className="text-envia-red">WhatsApp</span>
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Recibe notificaciones instantáneas y consulta el estado de tu paquete con un solo clic
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link 
            to="#rastreo" 
            className="bg-envia-red text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Rastrear ahora
          </Link>
          <a 
            href="https://wa.me/573001234567?text=Quiero%20rastrear%20mi%20envío" 
            className="bg-white text-envia-gray px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
          >
            <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.868-2.031-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.578-2.39-1.596-1.135-1.016-1.898-2.168-2.118-2.572-.224-.403-.027-.622.224-.922.225-.31.673-.762.673-.762.173-.198.224-.397.074-.694-.151-.297-.669-1.613-.993-2.207-.32-.6-.641-.646-.92-.646-.272 0-.57.074-.87.223-.297.15-1.093.744-1.093 1.815s1.09 2.104 1.242 2.25c.15.148 2.095 3.2 5.037 4.487.709.306 1.262.487 1.694.624.73.227 1.396.26 1.87.076.473-.18 1.756-.738 2.006-1.432.248-.694.248-1.289.173-1.433-.074-.148-.272-.223-.568-.372zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.888-9.885 9.888zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat WhatsApp
          </a>
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

      <WhatsAppButton />
    </section>
  )
}

export default HeroSection