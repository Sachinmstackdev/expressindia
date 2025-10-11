'use client'

import { Phone, MessageCircle, Mail } from 'lucide-react'

const EmergencyContacts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <div className="flex items-center gap-3 mb-2">
              <Phone className="h-5 w-5 text-primary-600" />
              <h3 className="text-lg font-semibold text-secondary-900">Phone Support</h3>
            </div>
            <p className="text-secondary-700">+91-8700631697 / +91-9310958552</p>
            <p className="text-secondary-500 text-sm">Available 24/7</p>
          </div>
          <div className="card">
            <div className="flex items-center gap-3 mb-2">
              <Mail className="h-5 w-5 text-primary-600" />
              <h3 className="text-lg font-semibold text-secondary-900">Email Support</h3>
            </div>
            <p className="text-secondary-700">hello@expresindia.com</p>
            <p className="text-secondary-500 text-sm">Response within 2 hours</p>
          </div>
          <div className="card">
            <div className="flex items-center gap-3 mb-2">
              <MessageCircle className="h-5 w-5 text-primary-600" />
              <h3 className="text-lg font-semibold text-secondary-900">WhatsApp</h3>
            </div>
            <p className="text-secondary-700">+91-9555606783</p>
            <p className="text-secondary-500 text-sm">Tap the floating button to chat</p>
          </div>
        </div>
        <div className="mt-8 text-secondary-700">
          <p><span className="font-semibold">Head Office:</span> Noida, Uttar Pradesh, India</p>
          <p className="mt-1"><span className="font-semibold">Business Hours:</span> 24/7 Operations</p>
        </div>
      </div>
    </section>
  )
}

export default EmergencyContacts

