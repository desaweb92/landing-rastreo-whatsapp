import React, { useState } from 'react'
import { motion } from 'framer-motion'

const TrackingForm = ({ onTrack, isLoading = false }) => {
  const [trackingNumber, setTrackingNumber] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!trackingNumber.trim()) {
      setError('Por favor ingresa tu número de guía')
      return
    }
    if (!/^[A-Za-z0-9]{8,20}$/.test(trackingNumber)) {
      setError('El número de guía debe tener entre 8-20 caracteres alfanuméricos')
      return
    }
    setError('')
    onTrack(trackingNumber)
  }

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-xl p-6 max-w-md mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      role="region"
      aria-labelledby="trackingHeading"
    >
      <h2 id="trackingHeading" className="text-2xl font-bold text-envia-gray mb-4">Rastrea tu envío</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4">
          <label htmlFor="tracking" className="block text-envia-gray mb-2">
            Número de guía <span className="text-red-500">*</span>
            <span className="sr-only">(campo requerido)</span>
          </label>
          <input
            type="text"
            id="tracking"
            value={trackingNumber}
            onChange={(e) => {
              setTrackingNumber(e.target.value)
              setError('')
            }}
            placeholder="Ej: ENV123456789"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-envia-red focus:border-transparent"
            aria-required="true"
            aria-invalid={!!error}
            aria-describedby={error ? "trackingError" : undefined}
            disabled={isLoading}
          />
          {error && (
            <p id="trackingError" className="text-red-500 text-sm mt-1" role="alert">
              {error}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full bg-envia-red text-white py-3 px-4 rounded-lg font-medium hover:bg-red-700 transition duration-300 ${
            isLoading ? 'opacity-75 cursor-not-allowed' : ''
          }`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Buscando...
            </span>
          ) : (
            'Rastrear envío'
          )}
        </button>
      </form>
      <p className="text-sm text-gray-500 mt-4">
        ¿No tienes tu número de guía?{' '}
        <a
          href="#contacto"
          className="text-envia-red hover:underline focus:outline-none focus:ring-2 focus:ring-envia-red focus:ring-offset-2 rounded"
        >
          Contáctanos
        </a>
      </p>
    </motion.div>
  )
}

export default TrackingForm