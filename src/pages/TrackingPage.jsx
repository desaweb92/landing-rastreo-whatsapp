import { useState } from 'react'
import TrackingForm from '../components/ui/TrackingForm'
import StatusCard from '../components/ui/StatusCard'
import trackingService from '../utils/trackingService'

const TrackingPage = () => {
  const [trackingData, setTrackingData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleTrack = async (trackingNumber) => {
    setLoading(true)
    setError(null)
    try {
      const response = await trackingService.trackPackage(trackingNumber)
      if (response.success) {
        setTrackingData(response.data)
      } else {
        setError(response.message)
      }
    } catch (err) {
      setError('Ocurrió un error al rastrear tu envío')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-envia-gray mb-4">Rastreo de envíos</h1>
        <p className="text-xl text-gray-600">
          Ingresa tu número de guía para conocer el estado actual de tu paquete
        </p>
      </div>

      <div className="max-w-lg mx-auto mb-12">
        <TrackingForm onTrack={handleTrack} />
      </div>

      {loading && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-envia-red mx-auto mb-4"></div>
          <p className="text-envia-gray">Buscando información de tu envío...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      {trackingData && (
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-envia-gray">Resumen del envío</h2>
                <p className="text-envia-gray">Número de guía: <span className="font-bold">{trackingData.trackingNumber}</span></p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className={`px-4 py-2 rounded-full font-medium ${
                  trackingData.status === 'Entregado' ? 'bg-green-100 text-green-800' :
                  trackingData.status === 'En tránsito' ? 'bg-blue-100 text-blue-800' :
                  trackingData.status === 'Retrasado' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-envia-red text-white'
                }`}>
                  {trackingData.status}
                </span>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-envia-gray mb-2">Fecha estimada de entrega:</h3>
              <p className="text-lg">{trackingData.estimatedDelivery}</p>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold text-envia-gray mb-4">Historial de tu envío</h3>
              <div className="space-y-4">
                {trackingData.history.map((item, index) => (
                  <StatusCard
                    key={index}
                    status={item.status}
                    date={item.date}
                    location={item.location}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-envia-red bg-opacity-10 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-envia-gray mb-2">¿Necesitas ayuda con tu envío?</h3>
            <p className="mb-4">Nuestro equipo está disponible para ayudarte con cualquier inquietud.</p>
            <a 
              href="https://wa.me/573001234567" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-envia-red text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default TrackingPage