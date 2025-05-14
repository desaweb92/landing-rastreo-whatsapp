import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TrackingPage from './pages/TrackingPage'
import ServicesPage from './pages/ServicesPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import AnimatedLayout from './components/layout/AnimatedLayout'

function App() {
  return (
    <Router>
      <AnimatedLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rastrear" element={<TrackingPage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/servicios/:slug" element={<ServiceDetailPage />} />
        </Routes>
      </AnimatedLayout>
    </Router>
  )
}

export default App