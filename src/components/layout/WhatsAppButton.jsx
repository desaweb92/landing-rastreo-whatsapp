import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppButton = ({ phone = "573001234567", message = "Hola, necesito ayuda con mi envío", initialDelay = 0.5 }) => {
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg z-50 flex items-center gap-2"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: initialDelay }}
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="text-2xl" />
      <span className="hidden md:inline text-sm font-medium">Ayuda</span>
    </motion.a>
  )
}

export default WhatsAppButton