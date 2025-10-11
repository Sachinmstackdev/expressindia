'use client'

import { motion } from 'framer-motion'
import { Linkedin, Facebook, Twitter, Instagram } from 'lucide-react'

const FounderSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-0 bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Left - Image */}
          <div className="relative h-96 lg:h-auto">
            <img
              src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Founder - Daniel R. Vaughn"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right - Content */}
          <div className="bg-primary-500 p-12 lg:p-16 flex flex-col justify-center">
            <motion.blockquote
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <p className="text-2xl lg:text-3xl font-bold leading-tight mb-8">
                "I STARTED LOGISTIQA TO BRING CLARITY AND CONTROL TO THE CHAOS OF GLOBAL LOGISTICS. WE'RE NOT JUST MOVING CARGO — WE'RE MOVING BUSINESSES FORWARD."
              </p>
              
              <footer className="mt-8">
                <div className="text-white/90 text-sm font-medium mb-2">
                  Founder & Chief Executive Officer
                </div>
                <div className="text-white text-xl font-bold uppercase tracking-wide">
                  DANIEL R. VAUGHN
                </div>
              </footer>
            </motion.blockquote>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex space-x-6 mt-12"
            >
              <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
                <span className="text-sm font-medium">Facebook</span>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
                <span className="text-sm font-medium">Twitter (X)</span>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
                <span className="text-sm font-medium">Instagram</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FounderSection