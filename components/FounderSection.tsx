'use client'

import { motion } from 'framer-motion'
import { Linkedin, Facebook, Twitter, Instagram } from 'lucide-react'

const FounderSection = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-0 bg-white rounded-lg sm:rounded-2xl shadow-xl sm:shadow-2xl overflow-hidden"
        >
          {/* Left - Image */}
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-auto">
            <img
              src="https://res.cloudinary.com/twosapiens/image/upload/v1768356676/Untitled_design_14_bfsuyp.png"
              alt="Founder - Dilip Singh"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right - Content */}
          <div className="bg-primary-500 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center min-h-0">
            <motion.blockquote
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed sm:leading-tight mb-6 sm:mb-8 break-words overflow-wrap-anywhere">
                "IN A WORLD WHERE EVERY DELIVERY MATTERS, WE DON'T JUST MOVE PACKAGES — WE DELIVER PROMISES, ON TIME, EVERY TIME."
              </p>

              <footer className="mt-6 sm:mt-8">
                <div className="text-white/90 text-xs sm:text-sm font-medium mb-2">
                  Founder & Chief Executive Officer
                </div>
                <div className="text-white text-lg sm:text-xl font-bold uppercase tracking-wide">
                  Dilip Singh
                </div>
              </footer>
            </motion.blockquote>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 sm:gap-6 mt-8 sm:mt-12"
            >
              <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
                <span className="text-xs sm:text-sm font-medium">LinkedIn</span>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
                <span className="text-xs sm:text-sm font-medium">Facebook</span>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
                <span className="text-xs sm:text-sm font-medium">Twitter</span>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
                <span className="text-xs sm:text-sm font-medium">Instagram</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FounderSection