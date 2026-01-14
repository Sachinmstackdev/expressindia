'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'What services does Express India offer?',
    a: 'We provide end-to-end logistics including freight, warehousing, customs clearance, last-mile delivery, and real-time shipment tracking.'
  },
  {
    q: 'How do I request a quote for my shipment?',
    a: 'Click Get Quote in the navigation, share shipment details, and our team will respond within minutes with a tailored estimate.'
  },
  {
    q: 'Can I track my shipment in real-time?',
    a: 'Yes. Our dashboard offers live tracking with status updates, milestones, and notifications across web and mobile.'
  },
  {
    q: 'Do you handle international shipments?',
    a: 'Absolutely. We manage door-to-door international logistics with customs brokerage and documentation support.'
  },
  {
    q: 'How secure are my goods during transport?',
    a: 'We use verified carriers, sealed containers, and insured routes. You can add additional insurance on request.'
  },
  {
    q: 'What is the estimated delivery time?',
    a: 'Transit time depends on route and mode. Most domestic shipments deliver within 24–72 hours.'
  },
  {
    q: 'Can I change or cancel a shipment after booking?',
    a: 'Changes are possible before dispatch. After dispatch, reach support for best available options or rescheduling.'
  },
]

const Item = ({ i, q, a }: { i: number; q: string; a: string }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-5 text-left"
      >
        <span className="text-lg font-extrabold tracking-wide uppercase text-primary-600">
          {q}
        </span>
        <ChevronDown
          className={`h-5 w-5 text-primary-600 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-5 text-secondary-700">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const FAQSection = () => {
  return (
    <section className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-secondary-900">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-secondary-600 max-w-md">
              Got questions? We’ve answered some of the most common ones.
            </p>
          </div>
          <div>
            {faqs.map((f, idx) => (
              <Item key={idx} i={idx} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection


