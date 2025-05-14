import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300"
    >
      <div className="p-8 text-center">
        <div className="text-5xl mb-4">{service.icon}</div>
        <h3 className="text-2xl font-bold text-envia-gray mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-6">{service.description}</p>
        <Link 
          to={service.slug}
          className="inline-flex items-center text-envia-red font-medium group"
        >
          <span className="mr-2">Conoce más</span>
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="inline-block group-hover:text-envia-red-dark"
          >
            →
          </motion.span>
        </Link>
      </div>
    </motion.div>
  )
}

export default ServiceCard