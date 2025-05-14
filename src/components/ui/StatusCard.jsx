import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaCheckCircle, 
  FaTruck, 
  FaWarehouse, 
  FaExclamationTriangle,
  FaHome
} from 'react-icons/fa'

const statusIcons = {
  'Recibido': <FaWarehouse className="text-blue-500" />,
  'En tránsito': <FaTruck className="text-purple-500" />,
  'Entregado': <FaCheckCircle className="text-green-500" />,
  'Retrasado': <FaExclamationTriangle className="text-yellow-500" />,
  'Problema': <FaExclamationTriangle className="text-red-500" />,
  'En centro de distribución': <FaWarehouse className="text-indigo-500" />,
  'En destino final': <FaHome className="text-teal-500" />
}

const StatusCard = ({ status, date, location, description, isCurrent = false, isLast = false }) => {
  return (
    <motion.div
      className={`relative pl-8 pb-8 ${!isLast ? 'border-l-2 border-gray-200' : ''}`}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-envia-red flex items-center justify-center">
        {isCurrent ? (
          <motion.div
            className="w-2 h-2 rounded-full bg-white"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        ) : (
          <div className="w-2 h-2 rounded-full bg-gray-300" />
        )}
      </div>
      
      <div className={`p-4 rounded-lg ${isCurrent ? 'bg-envia-red bg-opacity-10 border border-envia-red' : 'bg-white'}`}>
        <div className="flex items-start gap-3">
          <div className="mt-1 flex-shrink-0">
            {statusIcons[status] || <FaTruck className="text-gray-400" />}
          </div>
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h3 className={`text-sm font-semibold ${isCurrent ? 'text-envia-red' : 'text-gray-900'}`}>
                {status}
              </h3>
              <p className="text-xs text-gray-500">{date}</p>
            </div>
            <p className="text-xs text-gray-500 mt-1">{location}</p>
            <p className="text-sm text-gray-700 mt-2">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default StatusCard