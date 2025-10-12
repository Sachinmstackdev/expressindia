'use client'

import Head from 'next/head'
import { motion } from 'framer-motion'
import { Globe, Users, Calendar, MapPin, Shield, Target, Heart, Package } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CTASection from '../components/CTASection'
import FounderSection from '../components/FounderSection'

export default function AboutPage() {
  const stats = [
    { number: '15+', label: 'Years in Service', icon: <Calendar className="h-6 w-6" /> },
    { number: '500+', label: 'Corporate Clients', icon: <Users className="h-6 w-6" /> },
    { number: '10M+', label: 'Parcels Delivered', icon: <Package className="h-6 w-6" /> }
  ]

  const partners = [
    { name: 'DHL', logo: 'https://logos-world.net/wp-content/uploads/2020/05/DHL-Logo.png' },
    { name: 'FedEx', logo: 'https://logos-world.net/wp-content/uploads/2020/03/FedEx-Logo.png' },
    { name: 'India Express', logo: 'https://via.placeholder.com/120x60/FF6B35/FFFFFF?text=India+Express' },
    { name: 'Blue Dart', logo: 'https://via.placeholder.com/120x60/0066CC/FFFFFF?text=Blue+Dart' },
    { name: 'IndiaMART', logo: 'https://via.placeholder.com/120x60/00A651/FFFFFF?text=IndiaMART' },
    { name: 'Tech Mahindra', logo: 'https://via.placeholder.com/120x60/E31837/FFFFFF?text=Tech+Mahindra' },
    { name: 'TCS', logo: 'https://via.placeholder.com/120x60/004B87/FFFFFF?text=TCS' },
    { name: 'Genpact', logo: 'https://via.placeholder.com/120x60/7B68EE/FFFFFF?text=Genpact' }
  ]

  const certifications = [
    { name: 'ISO 9001', description: 'Quality Management Systems' },
    { name: 'MSME Certified', description: 'Government Recognition' },
    { name: 'IATA Approved', description: 'International Air Transport' }
  ]

  // Timeline removed per request

  return (
    <>
      <Head>
        <title>About Express India Courier | Certified Logistics Partner with DHL, FedEx & India Express</title>
        <meta name="description" content="Learn about Express India Courier — an ISO-certified logistics and courier partner trusted by DHL, FedEx, and India Express. Delivering reliability across India and beyond." />
        <meta name="keywords" content="courier partner India, certified logistics company, DHL FedEx partner courier India, express delivery service" />
        <meta property="og:title" content="About Express India Courier | Certified Logistics Partner" />
        <meta property="og:description" content="ISO-certified logistics partner trusted by DHL, FedEx, and India Express. 15+ years of reliable courier services." />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="min-h-screen bg-white">
        <Navbar />
        
        {/* Hero section removed per request */}

        {/* 2. Company Overview - Golden Two-Column */}
        <section className="pt-32 md:pt-[140px] pb-20 md:pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              {/* Left Text - 61.8% */}
              <div className="lg:col-span-3">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Who We Are</h2>
                  <p className="text-lg text-gray-600 mb-13 leading-relaxed">
                    Express India Courier is a certified logistics partner serving enterprises and SMEs with seamless courier and freight services across India and overseas. With over 15 years in logistics, we've earned partnerships with global giants like DHL, FedEx, and India Express.
                  </p>
                  
                  {/* Counters */}
                  <div className="grid grid-cols-3 gap-8 pt-6">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="text-center"
                      >
                        <div className="text-blue-600 mb-3 flex justify-center">
                          {stat.icon}
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
              
              {/* Right Visual - 38.2% */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-secondary-100 rounded-2xl p-8 h-80 flex items-center justify-center border border-secondary-200">
                    <div className="text-center">
                      <MapPin className="h-20 w-20 text-primary-500 mx-auto mb-4" />
                      <p className="text-secondary-700">Interactive Delivery Route Map</p>
                      <p className="text-sm text-secondary-500 mt-2">Animated visualization coming soon</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Mission & Vision - Golden Ratio Card Grid */}
        <section className="py-20 md:py-24 bg-secondary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
                <p className="text-gray-600">Simplify logistics with reliability and speed.</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
                <p className="text-gray-600">Be India's most trusted and tech-driven courier brand.</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Values</h3>
                <p className="text-gray-600">Trust, Transparency, and Timely Delivery.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 4. Partner Brands Section */}
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Global & Indian Leaders</h2>
              <p className="text-lg text-gray-600">Partnerships that power our excellence</p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center grayscale hover:grayscale-0"
                >
                  <img src={partner.logo} alt={partner.name} className="h-12 object-contain" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Certifications Section */}
        <section className="py-20 md:py-24 bg-secondary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Certifications */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="grid gap-6">
                  {certifications.map((cert, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{cert.name}</h4>
                        <p className="text-sm text-gray-600">{cert.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              {/* Right Text */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Certified for Excellence</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We're ISO-certified and meet all logistics compliance standards, ensuring every shipment meets safety, reliability, and transparency protocols. Our certifications reflect our commitment to maintaining the highest industry standards.
                </p>
              </motion.div>
            </div>
            </div>
        </section>

        {/* 6. Leadership Section (from home) */}
        <FounderSection />

        {/* 7. Timeline Section removed */}

        {/* 8. CTA Section */}
        <CTASection />
        
        <Footer />
      </main>
    </>
  )
}


