import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CTASection from '../components/CTASection'
import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle, MapPin, Building2, Globe, Shield } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Express India Courier | Schedule Pickup</title>
        <meta name="description" content="Reliable courier contact form for domestic, international, and corporate logistics." />
        <meta name="robots" content="index, follow" />
      </Head>
      <main className="min-h-screen bg-white">
        <Navbar />

        {/* 1) Hero Section */}
        <section className="relative pt-32 md:pt-[140px] pb-12 md:pb-16 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-8 items-center">
            {/* Left text (61.8%) */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-3">
              <h1 className="heading-xl mb-4 text-secondary-900">Let’s Move Your Business Forward.</h1>
              <p className="text-secondary-700 text-lg max-w-2xl mb-6">We’re ready to help you schedule pickups, discuss partnerships, or answer your queries.</p>
              <a href="https://wa.me/919555606783?text=Hi!%20I%20want%20to%20get%20in%20touch%20about%20logistics." className="btn-primary inline-flex items-center gap-2" target="_blank" rel="noopener noreferrer">Get in Touch</a>
              <div className="mt-4 text-sm text-secondary-600">Looking for solutions? Explore our <Link href="/services" className="text-primary-600 hover:text-primary-700">Services</Link> or learn more <Link href="/about" className="text-primary-600 hover:text-primary-700">About us</Link>.</div>
            </motion.div>
            {/* Right visual (38.2%) */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-secondary-100">
                <img src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Logistics hub with trucks" className="w-full h-72 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
            </motion.div>
          </div>
        </section>

        {/* 2) Quick Info Strip */}
        <section className="py-8 md:py-10 bg-secondary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <MapPin className="h-5 w-5 text-[#004aad]" />, title: 'Location', line: 'Delhi NCR • India' },
              { icon: <Phone className="h-5 w-5 text-[#004aad]" />, title: 'Phone / WhatsApp', line: '+91-8700631697' },
              { icon: <Mail className="h-5 w-5 text-[#004aad]" />, title: 'Email', line: 'hello@expresindia.com' },
            ].map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-5 border border-secondary-200 shadow-sm flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#004aad]/10 flex items-center justify-center" aria-hidden="true">{c.icon}</div>
                <div>
                  <div className="font-semibold text-secondary-900">{c.title}</div>
                  <div className="text-secondary-700 text-sm">{c.line}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3) Contact Form Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-10 items-start">
            {/* Left content */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">Talk to Our Logistics Experts</h2>
              <p className="text-secondary-700 mb-6">Whether it’s domestic deliveries, international shipping, or corporate logistics, we’ll tailor a plan that fits your routes and SLAs.</p>
              <ul className="space-y-3 text-secondary-700">
                <li className="flex items-center gap-2"><Shield className="h-5 w-5 text-primary-500" /> ISO-aligned processes</li>
                <li className="flex items-center gap-2"><Globe className="h-5 w-5 text-primary-500" /> Global partner network</li>
                <li className="flex items-center gap-2"><Building2 className="h-5 w-5 text-primary-500" /> Dedicated corporate support</li>
              </ul>
            </motion.div>

            {/* Right form */}
            <motion.div id="contact-form" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-3">
              <form className="backdrop-blur bg-white/70 border border-secondary-200 rounded-2xl shadow-xl p-6 sm:p-8 grid grid-cols-1 gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input className="w-full px-4 py-3 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-[#004aad] outline-none" placeholder="Name" aria-label="Name" />
                  <input className="w-full px-4 py-3 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-[#004aad] outline-none" placeholder="Company" aria-label="Company" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input className="w-full px-4 py-3 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-[#004aad] outline-none" placeholder="Phone" aria-label="Phone" />
                  <input className="w-full px-4 py-3 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-[#004aad] outline-none" placeholder="Email" type="email" aria-label="Email" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <select className="w-full px-4 py-3 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-[#004aad] outline-none" aria-label="Service Type">
                    <option>Service Type</option>
                    <option>Domestic Courier</option>
                    <option>International Shipping</option>
                    <option>Same-Day Delivery</option>
                    <option>Corporate Logistics</option>
                    <option>E-commerce Fulfilment</option>
                    <option>Freight & Cargo</option>
                  </select>
                  <input className="w-full px-4 py-3 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-[#004aad] outline-none" placeholder="City / State" aria-label="City or State" />
                </div>
                <textarea className="w-full h-28 px-4 py-3 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-[#004aad] outline-none" placeholder="Message" aria-label="Message" />
                <a href="https://wa.me/919555606783?text=Hi!%20Please%20call%20me%20back%20about%20logistics." target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center px-6 py-3 rounded-none text-white font-semibold bg-gradient-to-r from-[#004aad] to-[#ff8a00] hover:opacity-95 transition">Request Callback</a>
                <a href="https://wa.me/919555606783?text=Hi! I need help with logistics services." className="text-primary-600 hover:text-primary-700 text-sm" aria-label="Chat on WhatsApp">Prefer WhatsApp? Message us instantly</a>

                {/* Partner logos */}
                <div className="pt-2 grid grid-cols-3 gap-4 items-center">
                  {[
                    {name:'DHL', src:'https://logos-world.net/wp-content/uploads/2020/05/DHL-Logo.png'},
                    {name:'FedEx', src:'https://logos-world.net/wp-content/uploads/2020/03/FedEx-Logo.png'},
                    {name:'India Express', src:'https://via.placeholder.com/120x60/FF6B35/FFFFFF?text=India+Express'}
                  ].map((p) => (
                    <img key={p.name} src={p.src} alt={`${p.name} logo`} loading="lazy" className="h-8 object-contain grayscale" />
                  ))}
                </div>
              </form>
            </motion.div>
          </div>
        </section>

        {/* 4) Map Section */}
        <section className="relative py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-2xl border border-secondary-200">
              <iframe
                title="Express India Courier Delhi HQ map"
                aria-label="Map showing Express India Courier headquarters in Delhi"
                src="https://www.google.com/maps?q=Delhi&output=embed"
                className="w-full h-[360px] md:h-[440px]"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 bg-secondary-900/80 text-white px-4 py-2 rounded-lg text-sm shadow">Serving 500+ cities across India</div>
            </div>
          </div>
        </section>

        <CTASection />
        <Footer />
      </main>
    </>
  )
}


