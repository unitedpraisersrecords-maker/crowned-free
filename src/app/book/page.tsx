import PageHeader from '@/components/PageHeader'

const books = [
  {
    id: 'wisdom-is',
    title: 'Wisdom Is',
    image: '/images/wisdom_is_logo_2.png',
    amazon: 'https://www.amazon.com/s?k=Wisdom+Is+Steve+Allott'
  },
  {
    id: 'another-book',
    title: 'Another Book Title',
    image: '/images/wisdom_is_steve_1.jpeg',
    amazon: 'https://www.amazon.com/s?k=Steve+Allott'
  }
]

export default function BookPage() {
  return (
    <main>
      <PageHeader
        title="Steve Allott — Books"
        subtitle="Explore Steve's books and purchase on Amazon"
        imageSrc="/images/crowned_and_free_artist_pic_1.jpeg"
      />

      {/* Author intro */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10 items-center mb-12">
            <div className="lg:col-span-1">
              <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img src="/images/wisdom_is_steve_1.jpeg" alt="Steve Allott" className="w-full h-full object-cover object-center" />
              </div>
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About the Author</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Steve Allott is a singer, guitarist, and author whose writing reflects a heart for wisdom and 
                discipleship. Through stories, reflections, and Scripture-grounded insights, Steve explores how 
                faith shapes everyday life. His books complement his music and the Wisdom Is podcast, inviting 
                readers to rediscover the timeless call to live wisely and walk closely with Jesus.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Books</h3>
            <p className="text-sm text-gray-500">Tap any book to purchase on Amazon</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((b) => (
              <a key={b.id} href={b.amazon} target="_blank" rel="noopener noreferrer" className="group">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden group-hover:shadow-xl transition-shadow">
                  <div className="aspect-[4/3] bg-gray-100">
                    <img src={b.image} alt={b.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{b.title}</h4>
                    <span className="text-amber-600 text-sm font-medium">Buy on Amazon →</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
