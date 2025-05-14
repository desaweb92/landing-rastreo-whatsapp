// src/utils/trackingService.js

/**
 * Servicio para el rastreo de envíos
 * Maneja las llamadas API al backend y formatea los datos
 */

// URL base de la API (deberías mover esto a variables de entorno)
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.envia.co/v1'

// Datos mock para desarrollo (eliminar en producción)
const mockTrackingData = {
  trackingNumber: 'ENV123456789',
  status: 'En tránsito',
  estimatedDelivery: '15 de Junio, 2023',
  origin: 'Bogotá, Colombia',
  destination: 'Medellín, Colombia',
  weight: '2.5 kg',
  dimensions: '30x20x15 cm',
  history: [
    {
      date: '2023-06-01 10:30',
      status: 'Recibido',
      location: 'Bogotá, Colombia',
      description: 'El paquete ha sido recibido en nuestras instalaciones.'
    },
    {
      date: '2023-06-02 15:45',
      status: 'En tránsito',
      location: 'Bogotá, Colombia',
      description: 'El paquete ha salido del centro de distribución.'
    },
    {
      date: '2023-06-03 09:20',
      status: 'En tránsito',
      location: 'La Dorada, Colombia',
      description: 'El paquete está en camino al destino final.'
    }
  ]
}

const trackPackage = async (trackingNumber) => {
  // Validación básica
  if (!trackingNumber || trackingNumber.trim() === '') {
    return {
      success: false,
      message: 'Por favor ingresa un número de seguimiento'
    }
  }

  try {
    // En desarrollo, usamos datos mock
    if (import.meta.env.MODE === 'development') {
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simula delay de red
      return {
        success: true,
        data: {
          ...mockTrackingData,
          trackingNumber // Usamos el número ingresado
        }
      }
    }

    // En producción, hacemos la llamada real a la API
    const response = await fetch(`${API_BASE_URL}/tracking/${encodeURIComponent(trackingNumber)}`, {
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`,
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      const errorData = await response.json()
      return {
        success: false,
        message: errorData.message || 'Error al buscar el envío'
      }
    }

    const data = await response.json()
    
    // Formateamos los datos para que coincidan con lo que espera tu componente
    return {
      success: true,
      data: formatTrackingData(data)
    }

  } catch (error) {
    console.error('Error en trackingService:', error)
    return {
      success: false,
      message: 'Error de conexión con el servidor'
    }
  }
}

// Función para formatear los datos de la API a la estructura que usa tu componente
const formatTrackingData = (apiData) => {
  return {
    trackingNumber: apiData.tracking_id,
    status: translateStatus(apiData.current_status),
    estimatedDelivery: formatDate(apiData.estimated_delivery),
    origin: apiData.origin?.description || 'No especificado',
    destination: apiData.destination?.description || 'No especificado',
    weight: apiData.package?.weight ? `${apiData.package.weight} kg` : 'No especificado',
    dimensions: apiData.package?.dimensions ? `${apiData.package.dimensions} cm` : 'No especificado',
    history: apiData.history?.map(item => ({
      date: formatDateTime(item.timestamp),
      status: translateStatus(item.status),
      location: item.location?.description || 'No especificado',
      description: item.description || 'Actualización de estado'
    })) || []
  }
}

// Helper para traducir estados (puedes personalizar según tu API)
const translateStatus = (status) => {
  const statusMap = {
    'received': 'Recibido',
    'in_transit': 'En tránsito',
    'delivered': 'Entregado',
    'delayed': 'Retrasado',
    'exception': 'Problema'
  }
  return statusMap[status] || status
}

// Helper para formatear fechas
const formatDate = (dateString) => {
  if (!dateString) return 'No especificado'
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('es-CO', options)
}

// Helper para formatear fecha y hora
const formatDateTime = (dateTimeString) => {
  if (!dateTimeString) return 'No especificado'
  const options = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }
  return new Date(dateTimeString).toLocaleDateString('es-CO', options)
}

export default {
  trackPackage
}