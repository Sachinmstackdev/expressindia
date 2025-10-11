'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Users, Globe, Award, Truck } from 'lucide-react'
import Image from 'next/image'

const AboutSection = () => {
  const stats = [
    { 
      number: '2+', 
      label: 'Years of Experience',
      description: 'Serving businesses with excellence',
      icon: <Award className="h-8 w-8 text-primary-500" />
    },
    { 
      number: '502K', 
      label: 'Deliveries Completed',
      description: 'Successful shipments delivered',
      icon: <Truck className="h-8 w-8 text-primary-500" />
    },
    { 
      number: '30K', 
      label: 'Global Partners',
      description: 'Worldwide network coverage',
      icon: <Globe className="h-8 w-8 text-primary-500" />
    },
    { 
      number: '5/7', 
      label: 'Customer Support',
      description: 'Round-the-clock assistance',
      icon: <Users className="h-8 w-8 text-primary-500" />
    },
    { 
      number: '0M+', 
      label: 'Kilometers Traveled Safely',
      description: 'Miles of safe transportation',
      icon: <CheckCircle className="h-8 w-8 text-primary-500" />
    },
    { 
      number: '100+', 
      label: 'Warehouse Facilities',
      description: 'Strategic storage locations',
      icon: <Users className="h-8 w-8 text-primary-500" />
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6"
              >
                DELIVERING SMARTER
                <br />
                <span className="text-gradient">LOGISTICS SOLUTIONS</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg text-secondary-600 mb-8 leading-relaxed"
              >
                At Logistiqa, we specialize in providing fast, reliable, and technology-driven 
                logistics services. With over 10 years of experience, we help businesses 
                streamline their supply chains, optimize costs, and ensure timely deliveries — no 
                matter where you operate.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>Learn More</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl md:text-4xl font-bold text-primary-600">
                    {stat.number}
                  </div>
                  <div className="opacity-70">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-sm font-semibold text-secondary-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-secondary-600">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center p-8 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl">
            <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-secondary-900 mb-2">Global Reach</h3>
            <p className="text-secondary-600">
              Worldwide logistics network spanning across 200+ countries with local expertise
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-2xl">
            <div className="w-16 h-16 bg-secondary-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-secondary-900 mb-2">Reliable Service</h3>
            <p className="text-secondary-600">
              99.9% on-time delivery rate with real-time tracking and insurance coverage
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-secondary-900 mb-2">Expert Support</h3>
            <p className="text-secondary-600">
              24/7 dedicated customer support with logistics experts ready to assist
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection