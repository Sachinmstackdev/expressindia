'use client'

import { useMemo } from 'react'

const ClientLogos = () => {
  const brandLogos: { src: string; alt: string }[] = [
    { src: 'https://res.cloudinary.com/twosapiens/image/upload/v1740983214/Black_Liquid_Minimalist_Daily_Quotes_LinkedIn_Banner-removebg-preview_rmwndu.png', alt: 'Brand logo 1' },
    { src: 'https://res.cloudinary.com/twosapiens/image/upload/v1748852541/ChatGPT_Image_Apr_19__2025__04_43_36_PM-removebg-preview_1__upscayl_2x_upscayl-standard-4x_k1sdbt.png', alt: 'Brand logo 2' },
    { src: 'https://res.cloudinary.com/twosapiens/image/upload/v1759215528/Tata_Consultancy_Services_old_logo_eu4ujs.svg', alt: 'Brand logo 3' },
    { src: 'https://res.cloudinary.com/twosapiens/image/upload/v1759215642/download_3_dnpook.png', alt: 'Brand logo 4' },
    { src: 'https://res.cloudinary.com/twosapiens/image/upload/v1759215644/download_smthlr.png', alt: 'Brand logo 5' },
  ]

  // Duplicate list so marquee can loop seamlessly
  const marqueeItems = useMemo(() => [...brandLogos, ...brandLogos], [])

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-secondary-600 text-base font-medium mb-4">Trusted by</p>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900">
            Leading Companies Across Industries
          </h2>
        </div>

        {/* Infinite marquee */}
        <div className="relative overflow-hidden">
          <div className="flex w-[200%] animate-marquee">
            {marqueeItems.map((item, idx) => (
              <div key={`${item.src}-${idx}`} className="flex-shrink-0 px-3">
                <div className="bg-white rounded-xl shadow-md flex items-center justify-center h-24 w-44 md:w-56">
                  <img src={item.src} alt={item.alt} className="max-h-12 md:max-h-14 object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientLogos