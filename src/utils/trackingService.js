// Mock data mejorado
const mockTrackingData = (trackingNumber) => ({
  trackingNumber,
  status: 'En tránsito',
  estimatedDelivery: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString('es-CO', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  }),
  origin: 'Bogotá, Colombia',
  destination: 'Medellín, Colombia',
  weight: '2.5 kg',
  dimensions: '30x20x15 cm',
  history: [
    {
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toLocaleString('es-CO', {
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit'
      }),
      status: 'Recibido',
      location: 'Bogotá, Colombia',
      description: 'El paquete ha sido recibido en nuestras instalaciones.'
    },
    {
      date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toLocaleString('es-CO', {
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit'
      }),
      status: 'En centro de distribución',
      location: 'Bogotá, Colombia',
      description: 'El paquete está siendo preparado para su envío.'
    },
    {
      date: new Date(Date.now() - 12 * 60 * 60 * 1000).toLocaleString('es-CO', {
        hour: '2-digit',
        minute: '2-digit'
      }),
      status: 'En tránsito',
      location: 'Vía La Dorada',
      description: 'El paquete ha salido del centro de distribución.',
      isCurrent: true
    }
  ]
})

const trackPackage = async (trackingNumber) => {
  // Simular delay de red
  await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 700))

  // Simular error aleatorio (10% de probabilidad)
  if (Math.random() < 0.1) {
    return {
      success: false,
      message: 'No se encontró el número de guía. Verifica e intenta nuevamente.'
    }
  }

  return {
    success: true,
    data: mockTrackingData(trackingNumber)
  }
}

export default {
  trackPackage
}