'use client'

import { motion } from 'framer-motion'
import { Play, ArrowRight, CheckCircle, Award, Globe } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          crossOrigin="anonymous"
          poster="https://res.cloudinary.com/twosapiens/video/upload/v1759154872/141056-776768318_small_jtkksa.mp4"
          className="w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/twosapiens/video/upload/v1759154872/141056-776768318_small_jtkksa.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 video-overlay"></div>
      </div>

      {/* Content */}
      <div className="absolute z-10 left-0 bottom-8 sm:bottom-12 lg:bottom-20 w-full">
        <div className="px-3 sm:px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-secondary-900/90 text-white p-6 sm:p-10 md:p-12 max-w-3xl shadow-xl"
          >
            <h1 className="heading-xl mb-4">Smart Logistics<br />For Your Business</h1>
            <p className="text-secondary-200 text-lg mb-8 max-w-2xl">
              Efficient logistics solutions for your business. Fast, reliable and technology‑driven services.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Explore services
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection