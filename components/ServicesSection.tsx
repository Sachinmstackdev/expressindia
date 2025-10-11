'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Truck, Globe, Zap, Building2, ShoppingCart, Boxes } from 'lucide-react'

const ServicesSection = () => {
  const services = [
    {
      icon: <Truck className="h-10 w-10 text-primary-600" aria-hidden="true" />,
      title: 'Domestic Courier Services',
      description: 'Fast, secure parcel delivery across India with reliable tracking.'
    },
    {
      icon: <Globe className="h-10 w-10 text-primary-600" aria-hidden="true" />,
      title: 'International Shipping',
      description: 'End-to-end exports and imports with trusted global partners.'
    },
    {
      icon: <Zap className="h-10 w-10 text-primary-600" aria-hidden="true" />,
      title: 'Same-Day Delivery',
      description: 'Priority pickup and door-to-door delivery on the same day.'
    },
    {
      icon: <Building2 className="h-10 w-10 text-primary-600" aria-hidden="true" />,
      title: 'Corporate Logistics',
      description: 'Customized B2B logistics, scheduled runs, and SLAs for teams.'
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-primary-600" aria-hidden="true" />,
      title: 'E-commerce Fulfilment',
      description: 'Pick, pack, ship, and return management for online stores.'
    },
    {
      icon: <Boxes className="h-10 w-10 text-primary-600" aria-hidden="true" />,
      title: 'Freight & Cargo Handling',
      description: 'Air, road, and rail cargo with documentation & consolidation.'
    }
  ]

  return (
    <section className="relative pt-32 md:pt-[140px] pb-12 bg-secondary-50 overflow-hidden">
      {/* Subtle courier imagery via radial gradient */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(100,116,139,0.08),transparent_60%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1) Title + Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">Our Services</h2>
          <p className="text-secondary-600 text-lg">
            End-to-end courier and logistics solutions crafted for reliability and scale.
          </p>
        </motion.div>

        {/* 2) 3x2 Grid of Cards */}
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative bg-white rounded-2xl p-6 border border-secondary-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300" aria-label={`${service.title} icon`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">{service.title}</h3>
              <p className="text-secondary-600 leading-relaxed mb-4">{service.description}</p>
              <Link href="/contact" className="text-primary-600 font-medium hover:text-primary-700">
                Contact us →
              </Link>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-primary-200 group-hover:-translate-y-1 transition-all duration-300"></div>
            </motion.article>
          ))}
        </div>

        {/* 3) Optional visual flow */}
        <div className="mt-12 md:mt-16">
          <div className="grid md:grid-cols-3 gap-6">
            {[{t:'Request Pickup',d:'Schedule a pickup online or by call.'},{t:'We Collect & Process',d:'Secure packaging and smart routing.'},{t:'On-time Delivery',d:'Track live until delivery confirmation.'}].map((s, i) => (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white rounded-xl p-5 border border-secondary-200 shadow-sm text-center"
              >
                <div className="mx-auto mb-2 w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold">{i+1}</div>
                <p className="font-semibold text-secondary-900">{s.t}</p>
                <p className="text-sm text-secondary-600 mt-1">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA moved to page level (shared hero CTA) */}
      </div>
    </section>
  )
}

export default ServicesSection