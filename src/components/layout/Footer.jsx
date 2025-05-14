import { Link } from 'react-router-dom'
import { navigation, socialLinks } from '../../data/navigation'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-envia-gray text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
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
                  className="text-white hover:text-envia-red transition-colors"
                >
                  <span className="sr-only">{social.name}</span>
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </div>
          
          {navigation.map((section) => (
            <div key={section.name}>
              <h3 className="text-lg font-bold mb-4">{section.name}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <motion.li 
                    key={link.name}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Link 
                      to={link.href} 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Colvanes S.A.S. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer