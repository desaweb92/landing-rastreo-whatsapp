import { Link } from 'react-router-dom'
import { navigation } from '../../data/navigation'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="https://imgur.com/jPtdhhZ.png" 
            alt="envia logo" 
            className="h-12"
          />
         
        </Link>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navigation.map((item) => (
              <motion.li
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to={item.href} 
                  className="text-envia-gray hover:text-envia-red transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="md:hidden"
        >
          <button className="text-envia-gray">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </motion.div>
      </div>
    </header>
  )
}

export default Header