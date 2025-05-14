import { stats } from '../../data/stats'
import AnimatedValue from '../ui/AnimatedValue'

const StatsSection = () => {
  return (
    <section className="py-20 bg-envia-gray text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-4xl font-bold text-envia-red mb-2">
                <AnimatedValue value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection