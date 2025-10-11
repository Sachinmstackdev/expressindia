'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, ArrowUp, Phone, Mail } from 'lucide-react'

const FloatingElements = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [showWhatsApp, setShowWhatsApp] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    const timer = setTimeout(() => {
      setShowWhatsApp(true)
    }, 3000) // Show WhatsApp button after 3 seconds

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const openWhatsApp = () => {
    window.open('https://wa.me/919555606783?text=Hi! I need help with logistics services.', '_blank')
  }

  const callNow = () => {
    window.open('tel:+918700631697', '_self')
  }

  const sendEmail = () => {
    window.open('mailto:hello@expresindia.com?subject=Logistics Inquiry', '_self')
  }

  return (
    <>
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp Chat Button */}
      <AnimatePresence>
        {showWhatsApp && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 100 }}
            className="fixed bottom-6 left-6 z-50"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-3"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="h-6 w-6" />
              <span className="hidden sm:block font-medium">Chat with us</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Contact Buttons */}
      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-40 space-y-2">
        <motion.button
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={callNow}
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-l-lg shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Call now"
        >
          <Phone className="h-5 w-5" />
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={sendEmail}
          className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-l-lg shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Send email"
        >
          <Mail className="h-5 w-5" />
        </motion.button>
      </div>

    </>
  )
}

export default FloatingElements