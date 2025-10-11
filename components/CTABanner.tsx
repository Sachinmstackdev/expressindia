'use client'

import { motion } from 'framer-motion'

const CTABanner = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/167684/pexels-photo-167684.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Mountain road background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary-900/70" />
        {/* Bottom fade to footer color to create continuous blend */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-secondary-900" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-black text-white uppercase"
        >
          Let’s move your business forward.
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-gray-200"
        >
          Fast, reliable, and customized logistics solutions at your fingertips.
        </motion.p>

        <motion.a
          href="#quote"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="inline-block mt-8 btn-primary"
        >
          Get a Free Quote
        </motion.a>
      </div>
    </section>
  )
}

export default CTABanner


