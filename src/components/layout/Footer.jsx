import { Link } from 'react-router-dom'
import { socialLinks } from '../../data/navigation'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-envia-gray text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="https://imgur.com/oYqJkkG.png" 
                alt="envia logo" 
                className="h-10"
              />
          
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className={`${social.color} text-white p-3 rounded-full transition-colors`}
                >
                  <span className="sr-only">{social.name}</span>
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Link to="/politicas-privacidad" className="text-gray-300 hover:text-white transition-colors">
                  Políticas de privacidad
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Link to="/terminos-condiciones" className="text-gray-300 hover:text-white transition-colors">
                  Términos y condiciones
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </motion.li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Compañía</h3>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Link to="/nosotros" className="text-gray-300 hover:text-white transition-colors">
                  Nosotros
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Link to="/historia" className="text-gray-300 hover:text-white transition-colors">
                  Historia
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Link to="/equipo" className="text-gray-300 hover:text-white transition-colors">
                  Equipo
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Link to="/trabaja-con-nosotros" className="text-gray-300 hover:text-white transition-colors">
                  Trabaja con nosotros
                </Link>
              </motion.li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Link to="/servicios/nacionales" className="text-gray-300 hover:text-white transition-colors">
                  Envíos nacionales
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Link to="/servicios/internacionales" className="text-gray-300 hover:text-white transition-colors">
                  Envíos internacionales
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Link to="/servicios/logistica" className="text-gray-300 hover:text-white transition-colors">
                  Soluciones logísticas
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Link to="/servicios/trazabilidad" className="text-gray-300 hover:text-white transition-colors">
                  Trazabilidad
                </Link>
              </motion.li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© 2025 Colvanes S.A.S. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer