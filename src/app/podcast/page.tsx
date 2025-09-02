import PageHeader from '@/components/PageHeader'

const platforms = [
  { id: 'spotify', name: 'Spotify', href: 'https://open.spotify.com/', color: 'bg-green-600' },
  { id: 'apple', name: 'Apple Podcasts', href: 'https://podcasts.apple.com/', color: 'bg-black' },
  { id: 'google', name: 'Google Podcasts', href: 'https://podcasts.google.com/', color: 'bg-blue-600' },
  { id: 'youtube', name: 'YouTube', href: 'https://youtube.com/', color: 'bg-red-600' },
]

const episodes = [
  {
    id: 'ep-1',
    title: 'Wisdom Is — Returning to Wisdom',
    date: '2024-05-01',
    youtubeId: 'dQw4w9WgXcQ',
    thumb: '/images/wisdom_is_steve_1.jpeg',
    summary: 'Exploring biblical wisdom for modern life.'
  },
  {
    id: 'ep-2',
    title: 'Wisdom Is — Faith and Practice',
    date: '2024-05-15',
    youtubeId: 'dQw4w9WgXcQ',
    thumb: '/images/crowned_and_free_artist_pic_1.jpeg',
    summary: 'How wisdom shapes worship and daily practice.'
  }
]

const gallery = [
  '/images/wisdom_is_steve_1.jpeg',
  '/images/crowned_and_free_artist_pic_1.jpeg',
]

export default function PodcastPage() {
  return (
    <main>
      <PageHeader
        title="Wisdom Is Podcast"
        subtitle="Video and audio conversations hosted by Steve Allott."
        imageSrc="/images/crowned_and_free_artist_pic_1.jpeg"
      />

      {/* Platform Links */}
      <section className="py-8">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold text-gray-700">Listen on:</span>
              {platforms.map((p) => (
                <a key={p.id} href={p.href} target="_blank" rel="noopener noreferrer" className={`px-3 py-2 text-white text-sm font-medium rounded-lg ${p.color} hover:opacity-90 transition-opacity`}>
                  {p.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video + Gallery */}
      <section className="section-padding pt-8">
        <div className="container-custom grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="aspect-video bg-black">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${episodes[0].youtubeId}`}
                title={episodes[0].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{episodes[0].title}</h2>
              <p className="text-gray-600 text-sm">{episodes[0].summary}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {gallery.map((src) => (
              <a key={src} href={src} target="_blank" rel="noopener noreferrer" className="block rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <img src={src} alt="Podcast media" className="w-full h-full object-cover" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Episodes */}
      <section className="section-padding pt-8">
        <div className="container-custom">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Recent Episodes</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {episodes.map((ep) => (
              <div key={ep.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-black">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${ep.youtubeId}`}
                    title={ep.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="p-5 flex flex-col">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">{ep.title}</h4>
                  <span className="text-xs text-gray-500 mb-3">{new Date(ep.date).toLocaleDateString()}</span>
                  <div className="mt-auto flex gap-2">
                    {platforms.map((p) => (
                      <a key={`${ep.id}-${p.id}`} href={p.href} target="_blank" rel="noopener noreferrer" className={`px-2.5 py-1.5 text-white text-xs font-medium rounded ${p.color} hover:opacity-90 transition-opacity`}>
                        {p.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
