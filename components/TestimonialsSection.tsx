'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    quote:
      "What I love most is the real-time visibility. I always know where my cargo is, no surprises.",
    name: 'Raj Mehra',
    title: 'Logistics Coordinator, TradeVerse India',
    avatar:
      'https://res.cloudinary.com/twosapiens/image/upload/v1747893958/WhatsApp_Image_2025-04-09_at_19.20.16_5c2db04b_oibmpf.jpg',
  },
  {
    quote:
      'Their support team is amazing — responsive, helpful, and actually solves problems fast.',
    name: 'Julia Chen',
    title: 'Logistics Lead, EastBridge Imports',
    avatar:
      'https://res.cloudinary.com/twosapiens/image/upload/v1747893958/image_4_rpgncg.png',
  },
  {
    quote:
      'They helped us optimize routes and reduce shipping costs by over 20%. Very strategic and efficient.',
    name: 'Caroline Smith',
    title: 'Supply Chain Analyst, BioNova',
    avatar:
      'https://res.cloudinary.com/twosapiens/image/upload/v1747893959/image_3_sfske4.png',
  },
  {
    quote:
      "We've tried others. Logistiqa is the only one we stuck with. They're reliable, affordable, and honest.",
    name: 'Michael Reed',
    title: 'CEO, Oakland Global Trade',
    avatar:
      'https://res.cloudinary.com/twosapiens/image/upload/v1748803107/WhatsApp_Image_2025-06-02_at_12.07.10_AM_qqrzqf.jpg',
  },
]

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase text-secondary-900">
              What our clients say
            </h2>
            <p className="text-secondary-600 mt-4 max-w-xl">
              Trusted by logistics professionals and businesses worldwide — here’s how we make a difference.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="border rounded-2xl p-6 md:p-8 bg-white shadow-sm hover:shadow-md"
            >
              <p className="text-xl md:text-2xl font-extrabold tracking-wide text-secondary-800 uppercase leading-snug">
                “{t.quote}”
              </p>
              <div className="flex items-center space-x-4 mt-6">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-bold text-secondary-900">{t.name}</div>
                  <div className="text-xs text-secondary-600">{t.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection


