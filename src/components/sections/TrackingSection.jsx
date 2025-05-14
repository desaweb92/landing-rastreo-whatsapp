import React, { useState } from 'react'
import { motion } from 'framer-motion'
import TrackingForm from '../ui/TrackingForm'
import StatusCard from '../ui/StatusCard'
import trackingService from '../../utils/trackingService'

const TrackingSection = () => {
  const [trackingData, setTrackingData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleTrack = async (trackingNumber) => {
    setIsLoading(true)
    setError('')
    
    try {
      const result = await trackingService.trackPackage(trackingNumber)
      if (result.success) {
        setTrackingData(result.data)
      } else {
        setError(result.message)
      }
    } catch (err) {
      setError('Error al conectar con el servidor. Por favor intenta nuevamente.')
      console.error('Tracking error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    setTrackingData(null)
    setError('')
  }

  return (
    <section className="py-20 bg-envia-red bg-opacity-5" id="rastreo">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="md:flex">
            {/* Columna izquierda */}
            <div className="md:w-2/5 bg-envia-red p-8 text-white flex items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">¿Dónde está tu envío?</h2>
                <p className="mb-6 text-white text-opacity-90">
                  Ingresa tu número de guía para conocer el estado actual de tu paquete en tiempo real.
                  Recibirás actualizaciones automáticas hasta la entrega.
                </p>
                <div className="flex items-center text-white text-opacity-90">
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                  <span>100% seguro y confiable</span>
                </div>
              </div>
            </div>

            {/* Columna derecha */}
            <div className="md:w-3/5 p-8">
              {!trackingData ? (
                <>
                  <TrackingForm onTrack={handleTrack} isLoading={isLoading} />
                  {error && (
                    <motion.div
                      className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      role="alert"
                    >
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span>{error}</span>
                      </div>
                    </motion.div>
                  )}
                </>
              ) : (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-envia-gray mb-2">
                      Estado de tu envío
                    </h3>
                    <p className="text-sm text-gray-500">
                      Número de guía: <span className="font-mono">{trackingData.trackingNumber}</span>
                    </p>
                  </div>

                  <div className="relative">
                    {trackingData.history.map((item, index) => (
                      <StatusCard
                        key={index}
                        status={item.status}
                        date={item.date}
                        location={item.location}
                        description={item.description}
                        isCurrent={index === 0}
                        isLast={index === trackingData.history.length - 1}
                      />
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <button
                      onClick={handleReset}
                      className="text-envia-red hover:text-red-700 font-medium flex items-center"
                    >
                      <svg
                        className="w-5 h-5 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        ></path>
                      </svg>
                      Realizar nueva búsqueda
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TrackingSection