import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { services } from '../../data/services'
import ServiceFeatures from './ServiceFeatures'

const ServiceDetail = () => {
  const { slug } = useParams()
  const service = services.find(s => s.slug === slug)

  if (!service) {
    return <div>Servicio no encontrado</div>
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Link 
          to="/servicios" 
          className="text-envia-red hover:underline flex items-center"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Volver a servicios
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row gap-12 items-center mb-16"
      >
        <div className="md:w-1/2">
          <motion.img
            src={service.image}
            alt={service.title}
            className="rounded-xl shadow-2xl w-full"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400 }}
          />
        </div>
        
        <div className="md:w-1/2">
          <motion.h1 
            className="text-4xl font-bold text-envia-gray mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {service.title}
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {service.description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link 
              to="/contacto" 
              className="inline-block bg-envia-red text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-all transform hover:scale-105"
            >
              Solicitar este servicio
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <ServiceFeatures service={service} />
    </div>
  )
}

export default ServiceDetail