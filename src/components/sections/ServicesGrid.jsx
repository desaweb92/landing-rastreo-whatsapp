import { services } from '../../data/services'
import ServiceCard from '../ui/ServiceCard'

const ServicesGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-envia-gray mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-envia-gray max-w-2xl mx-auto">
            Soluciones diseñadas para cada necesidad de envío
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid