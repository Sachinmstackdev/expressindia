import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const openings = [
  { role: 'Operations Executive', location: 'Noida, Uttar Pradesh', type: 'Full-time' },
  { role: 'Fleet Coordinator', location: 'Gurugram, Haryana', type: 'Full-time' },
  { role: 'Customer Success Associate', location: 'Remote (India)', type: 'Full-time' },
]

export default function CareersPage() {
  return (
    <>
      <Head>
        <title>Careers | Express India</title>
      </Head>
      <main className="min-h-screen bg-white">
        <Navbar />
        <section className="pt-28 pb-10 bg-secondary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-secondary-900 mb-3">Careers</h1>
            <p className="text-secondary-700 max-w-3xl">Join a mission-driven logistics team building reliable movement for India.</p>
          </div>
        </section>
        <section className="py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {openings.map((o) => (
              <div key={o.role} className="card">
                <h3 className="text-lg font-semibold">{o.role}</h3>
                <p className="text-secondary-700 mt-1">{o.location}</p>
                <p className="text-secondary-500 text-sm">{o.type}</p>
                <a href="mailto:hello@expresindia.com?subject=Application:%20" className="btn-primary-rect mt-4 inline-flex">Apply via Email</a>
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}


