import Header from '@/components/Header'
import BookingSection from '@/components/BookingSection'
import Footer from '@/components/Footer'

export default function BookingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <BookingSection />
        <Footer />
      </div>
    </main>
  )
}
