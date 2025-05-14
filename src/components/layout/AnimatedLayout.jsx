import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
}

const pageTransition = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
  duration: 0.5
}

const AnimatedLayout = ({ children }) => {
  const location = useLocation()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <motion.main
        key={location.key}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="flex-grow"
      >
        {children}
      </motion.main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default AnimatedLayout