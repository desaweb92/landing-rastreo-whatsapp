import { motion } from 'framer-motion'
// import TrackingForm from '../../components/ui/TrackingForm'

const TrackingSection = () => {
  return (
    <section className="py-20 bg-envia-red bg-opacity-10">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="md:flex">
            <div className="md:w-1/2 bg-envia-red p-8 text-white flex items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">¿Dónde está tu envío?</h2>
                <p className="mb-6">
                  Ingresa tu número de guía para conocer el estado actual de tu paquete en tiempo real.
                </p>
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                  <span>100% seguro y confiable</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              {/* <TrackingForm /> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TrackingSection