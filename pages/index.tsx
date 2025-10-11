import Head from 'next/head'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ClientLogos from '../components/ClientLogos'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import FounderSection from '../components/FounderSection'
import WhyChooseSection from '../components/WhyChooseSection'
import CTASection from '../components/CTASection'
import EmergencyContacts from '../components/EmergencyContacts'
import TestimonialsSection from '../components/TestimonialsSection'
import FAQSection from '../components/FAQSection'
import CTABanner from '../components/CTABanner'
import Footer from '../components/Footer'
import FloatingElements from '../components/FloatingElements'

export default function Home() {
  return (
    <>
      <Head>
        <title>Express India - Smart Logistics Solutions for Your Business | Premier Courier Services</title>
        <meta 
          name="description" 
          content="Express India offers smart logistics solutions with 15+ years experience. Fast, reliable courier services across India and globally. Get instant quotes for freight transportation, warehousing, and supply chain consulting." 
        />
        <meta 
          name="keywords" 
          content="logistics solutions India, courier services, freight transportation, warehousing storage, supply chain consulting, express delivery, international shipping, customs clearance, real-time tracking" 
        />
        <meta name="author" content="Express India Logistics" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Express India - Smart Logistics Solutions for Your Business" />
        <meta property="og:description" content="Trusted by 500+ businesses. Fast, reliable logistics and courier services across India and globally with 99.9% success rate." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://expressindia.com" />
        <meta property="og:image" content="https://expressindia.com/og-image.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Express India - Smart Logistics Solutions" />
        <meta name="twitter:description" content="Premier courier and logistics services with 15+ years experience. Get instant quotes today." />
        <meta name="twitter:image" content="https://expressindia.com/twitter-image.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://expressindia.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Express India Logistics",
              "url": "https://expressindia.com",
              "logo": "https://expressindia.com/logo.png",
              "description": "Smart logistics solutions for businesses with 15+ years experience in courier and freight services",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Business Hub, Sector 18",
                "addressLocality": "Gurugram",
                "addressRegion": "Haryana",
                "postalCode": "122001",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9876543210",
                "contactType": "customer service",
                "availableLanguage": ["English", "Hindi"]
              },
              "sameAs": [
                "https://www.facebook.com/expressindia",
                "https://www.linkedin.com/company/expressindia",
                "https://twitter.com/expressindia"
              ]
            })
          }}
        />
      </Head>

      <main className="min-h-screen">
        <Navbar />
        <HeroSection />
        <ClientLogos />
        <AboutSection />
        <ServicesSection />
        <FounderSection />
        <WhyChooseSection />
        <CTASection />
        <EmergencyContacts />
        <TestimonialsSection />
        <FAQSection />
        <CTABanner />
        <Footer />
        <FloatingElements />
      </main>
    </>
  )
}