import Header from '@/components/Header'
import MusicSection from '@/components/MusicSection'
import Footer from '@/components/Footer'

export default function MusicPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <MusicSection />
        <Footer />
      </div>
    </main>
  )
}
