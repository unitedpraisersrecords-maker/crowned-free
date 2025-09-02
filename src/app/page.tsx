import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import MusicSection from '@/components/MusicSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <MusicSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
