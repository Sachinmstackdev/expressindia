'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Truck } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
  ]

  const isActive = (href: string) => router.pathname === href

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      {/* Header contact bar */}
      <div className="hidden md:block bg-secondary-900 text-secondary-100 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9">
          <div className="flex items-center gap-6">
            <a href="tel:+918700631697" className="hover:text-white">+91-8700631697</a>
            <a href="tel:+919310958552" className="hover:text-white">+91-9310958552</a>
          </div>
          <a href="mailto:hello@expresindia.com" className="hover:text-white">hello@expresindia.com</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop layout */}
        <div className="hidden md:grid md:grid-cols-[auto_1fr_auto] items-center h-16">
          {/* Brand */}
          <Link href="/" className="flex items-center space-x-3 justify-self-start">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="bg-gradient-to-r from-primary-500 to-primary-600 p-2 rounded-none"
            >
              <Truck className="h-6 w-6 text-white" />
            </motion.div>
            <span className="text-xl font-bold text-secondary-900">Express India</span>
          </Link>

          {/* Centered nav links */}
          <div className="hidden md:flex items-center justify-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-primary-600'
                    : 'text-secondary-700 hover:text-secondary-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right CTA */}
          <div className="justify-self-end">
            <motion.a
              href="#quote"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary-rect hidden lg:inline-flex"
            >
              Request a Logistics Plan
            </motion.a>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="flex md:hidden items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-2 rounded-none">
              <Truck className="h-6 w-6 text-white" />
            </div>
            <span className="text-lg font-bold text-secondary-900">Express India</span>
          </Link>

          <button
            aria-label="Open menu"
            onClick={() => setIsOpen(true)}
            className="p-2 rounded-lg text-secondary-900 focus-ring"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile drawer (portal to body so it covers the whole viewport) */}
      {typeof window !== 'undefined' && createPortal(
        (
          <AnimatePresence>
            {isOpen && (
              <>
                {/* Overlay (opaque) */}
                <motion.div
                  key="overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-white z-[60]"
                  onClick={() => setIsOpen(false)}
                />

                {/* Drawer */}
                <motion.aside
                  key="drawer"
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'tween', duration: 0.3 }}
                  className="fixed inset-y-0 right-0 w-72 sm:w-80 max-w-[85vw] bg-white shadow-2xl p-6 flex flex-col gap-4 z-[70]"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-base font-semibold text-secondary-900">Menu</span>
                    <button
                      aria-label="Close menu"
                      onClick={() => setIsOpen(false)}
                      className="p-2 rounded-lg text-secondary-900 focus-ring"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>

                  <nav className="flex-1 flex flex-col gap-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block rounded-none px-3 py-3 font-medium ${
                          isActive(item.href)
                            ? 'bg-secondary-50 text-primary-600'
                            : 'text-secondary-800 hover:bg-secondary-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>

                  <a
                    href="#quote"
                    onClick={() => setIsOpen(false)}
                    className="btn-primary-rect w-full text-center"
                  >
                    Get Quote
                  </a>
                </motion.aside>
              </>
            )}
          </AnimatePresence>
        ),
        document.body
      )}
    </nav>
  )
}

export default Navbar