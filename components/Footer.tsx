'use client'

import { motion } from 'framer-motion'
import { Truck, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Freight Transportation', href: '/services/freight' },
      { name: 'Warehousing & Storage', href: '/services/warehousing' },
      { name: 'Real-time Tracking', href: '/services/tracking' },
      { name: 'Customs Brokerage', href: '/services/customs' },
      { name: 'Last-mile Delivery', href: '/services/delivery' },
      { name: 'Supply Chain Consulting', href: '/services/consulting' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'News & Updates', href: '/news' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Get Quote', href: '/quote' },
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Track Shipment', href: '/track' },
      { name: 'Shipping Calculator', href: '/calculator' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Cookie Policy', href: '/cookies' },
    ]
  }

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: '#', name: 'Facebook' },
    { icon: <Twitter className="h-5 w-5" />, href: '#', name: 'Twitter' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#', name: 'LinkedIn' },
    { icon: <Instagram className="h-5 w-5" />, href: '#', name: 'Instagram' },
  ]

  return (
    <footer className="relative bg-secondary-900 text-white">
      {/* Top edge gradient to blend from previous section */}
      <div className="pointer-events-none absolute -top-16 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-secondary-900" />
      {/* Newsletter */}
      <div className="border-b border-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">Get logistics insights in your inbox</h3>
              <p className="text-gray-300 text-sm mt-1">Monthly tips, route updates, and industry news.</p>
            </div>
            <form className="w-full md:w-auto flex items-stretch">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-80 px-4 py-3 rounded-none text-secondary-900 placeholder-secondary-500 border border-secondary-300"
              />
              <button type="submit" className="bg-primary-500 hover:bg-primary-600 px-5 rounded-none font-semibold flex items-center gap-2">
                Subscribe <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-2 rounded-lg">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Express India</span>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Smart logistics solutions for your business growth. Fast, reliable, and technology-driven courier services across India and globally.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-400" />
                <span className="text-sm">+91-8700631697 / +91-9310958552</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-400" />
                <span className="text-sm">hello@expresindia.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary-400" />
                <span className="text-sm">Head Office: Noida, Uttar Pradesh, India</span>
              </div>
              <p className="text-xs text-gray-400">Business Hours: 24/7 Operations</p>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3 mb-8">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Follow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 bg-secondary-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            {/* Quick emergency contacts */}
            <div className="mt-6 space-y-2 text-sm text-gray-300">
              <p>Urgent Helpline: <a href="tel:+918700631697" className="underline">+91-8700631697</a></p>
              <p>Secondary Urgent: <a href="tel:+919310958552" className="underline">+91-9310958552</a></p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              © {currentYear} Express India Logistics. All rights reserved.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-6 text-sm"
            >
              <Link href="/terms" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                Terms
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                Privacy
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                Cookies
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer