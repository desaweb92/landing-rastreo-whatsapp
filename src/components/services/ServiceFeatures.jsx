import { motion } from 'framer-motion'

const ServiceFeatures = ({ service }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-3xl font-bold text-envia-gray mb-6">Características</h2>
        <ul className="space-y-4">
          {service.features.map((feature, index) => (
            <motion.li 
              key={index}
              className="flex items-start bg-gray-50 p-4 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-envia-red mr-3 mt-1">✓</span>
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>
      </div>
      
      <div>
        <h2 className="text-3xl font-bold text-envia-gray mb-6">Nuestros números</h2>
        <div className="grid grid-cols-2 gap-4">
          {service.stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-envia-red bg-opacity-10 p-6 rounded-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-envia-red mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-envia-gray">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiceFeatures