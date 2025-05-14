import { services } from '../data/services'
import ServiceCard from '../components/ui/ServiceCard'

const ServicesPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-envia-gray mb-4">Nuestros Servicios</h1>
        <p className="text-xl text-envia-gray max-w-2xl mx-auto">
          Soluciones logísticas diseñadas para cada necesidad de envío
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </div>
  )
}

export default ServicesPage