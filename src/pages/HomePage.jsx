import HeroSection from '../components/sections/HeroSection'
import ServicesGrid from '../components/sections/ServicesGrid'
import StatsSection from '../components/sections/StatsSection'
import TrackingSection from '../components/sections/TrackingSection'
import ParallaxSection from '../components/ui/ParallaxSection'

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <StatsSection />
      <ParallaxSection 
        imageUrl="/assets/images/parallax-bg.webp"
        title="Tu paquete en las mejores manos"
        subtitle="Rastreo en tiempo real y notificaciones instantáneas"
      />
      <TrackingSection />
    </>
  )
}

export default HomePage