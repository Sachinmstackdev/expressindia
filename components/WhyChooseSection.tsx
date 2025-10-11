'use client'

import { motion } from 'framer-motion'
import { Award, Zap, Globe, Lightbulb } from 'lucide-react'

const WhyChooseSection = () => {
  const features = [
    {
      icon: <Award className="h-12 w-12" />,
      title: 'TRUSTED EXPERTISE',
      description: 'Over a decade of logistics excellence.'
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: 'SPEED & RELIABILITY',
      description: 'On-time deliveries with real-time updates.'
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: 'GLOBAL LOGISTICS NETWORK',
      description: 'Expanding your reach across 50+ countries.'
    },
    {
      icon: <Lightbulb className="h-12 w-12" />,
      title: 'TAILORED SOLUTIONS',
      description: 'Customized logistics strategies for your business.'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-secondary-900 mb-4 uppercase tracking-tight">
            WHY BUSINESSES CHOOSE<br />LOGISTIQA?
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl">
            Experience, trust, and technology — driving your success.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-6 group"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="text-secondary-800 group-hover:text-primary-500 transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-black text-primary-500 mb-3 uppercase tracking-wide group-hover:text-primary-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-secondary-600 text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseSection