import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CTASection from '../components/CTASection'
import ServicesSection from '../components/ServicesSection'

const services = [
  { title: 'Freight Transportation', desc: 'PAN-India road transport for FTL/LTL with reliable scheduling.' },
  { title: 'Warehousing & Storage', desc: 'Secure short and long-term storage with inventory control.' },
  { title: 'Last-mile Delivery', desc: 'Urban and regional last-mile coverage with tracking.' },
  { title: 'Customs Brokerage', desc: 'Import/export documentation and clearance assistance.' },
  { title: 'Real-time Tracking', desc: 'Live shipment visibility and proactive notifications.' },
  { title: 'Supply Chain Consulting', desc: 'Route optimization and process improvement for scale.' },
]

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services | Express India</title>
      </Head>
      <main className="min-h-screen bg-white">
        <Navbar />
        <ServicesSection />
        <CTASection />
        <Footer />
      </main>
    </>
  )
}


