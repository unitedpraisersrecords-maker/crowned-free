'use client'

import { motion } from 'framer-motion'
import { Music, Play, ExternalLink, Heart, Star, Calendar } from 'lucide-react'

export default function MusicSection() {
  // Sample music data - replace with actual Crowned & Free songs
  const songs = [
    {
      id: 1,
      title: "Crowned in Grace",
      album: "Freedom's Call",
      duration: "3:45",
      genre: "Christian Rock",
      releaseDate: "2024",
      streamingLink: "#",
      purchaseLink: "#"
    },
    {
      id: 2,
      title: "Free to Worship",
      album: "Freedom's Call",
      duration: "4:12",
      genre: "Contemporary Christian",
      releaseDate: "2024",
      streamingLink: "#",
      purchaseLink: "#"
    },
    {
      id: 3,
      title: "Wisdom's Light",
      album: "Freedom's Call",
      duration: "3:58",
      genre: "Folk Rock",
      releaseDate: "2024",
      streamingLink: "#",
      purchaseLink: "#"
    },
    {
      id: 4,
      title: "United in Faith",
      album: "Freedom's Call",
      duration: "4:25",
      genre: "Country Gospel",
      releaseDate: "2024",
      streamingLink: "#",
      purchaseLink: "#"
    },
    {
      id: 5,
      title: "Grace Upon Grace",
      album: "Freedom's Call",
      duration: "3:32",
      genre: "Christian Rock",
      releaseDate: "2024",
      streamingLink: "#",
      purchaseLink: "#"
    }
  ]

  const musicReleases = [
    {
      id: 1,
      title: "Freedom's Call",
      type: "Album",
      releaseDate: "2024",
      cover: "/images/album-cover-1.jpg",
      description: "Our debut album featuring 12 tracks of faith-inspired music",
      streamingLinks: {
        spotify: "#",
        apple: "#",
        amazon: "#",
        youtube: "#"
      }
    },
    {
      id: 2,
      title: "Wisdom Is - Single",
      type: "Single",
      releaseDate: "2024",
      cover: "/images/single-cover-1.jpg",
      description: "Title track from Steve's podcast, now available as a single",
      streamingLinks: {
        spotify: "#",
        apple: "#",
        amazon: "#",
        youtube: "#"
      }
    },
    {
      id: 3,
      title: "Crowned in Grace",
      type: "Single",
      releaseDate: "2024",
      cover: "/images/single-cover-2.jpg",
      description: "Lead single from our upcoming album",
      streamingLinks: {
        spotify: "#",
        apple: "#",
        amazon: "#",
        youtube: "#"
      }
    },
    {
      id: 4,
      title: "Live at Church",
      type: "EP",
      releaseDate: "2023",
      cover: "/images/ep-cover-1.jpg",
      description: "Live recordings from worship services",
      streamingLinks: {
        spotify: "#",
        apple: "#",
        amazon: "#",
        youtube: "#"
      }
    },
    {
      id: 5,
      title: "Acoustic Sessions",
      type: "EP",
      releaseDate: "2023",
      cover: "/images/ep-cover-2.jpg",
      description: "Intimate acoustic performances",
      streamingLinks: {
        spotify: "#",
        apple: "#",
        amazon: "#",
        youtube: "#"
      }
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-amber-600">Music</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the unique blend of Christian rock, folk, and country that speaks to the heart and soul
          </p>
        </motion.div>



        {/* Music Releases Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Music <span className="text-amber-600">Releases</span>
          </h3>
          
          <div className="grid grid-cols-5 gap-4">
            {musicReleases.map((release) => (
              <div key={release.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                  <Music className="w-12 h-12 text-amber-600" />
                </div>
                <div className="p-3 flex-1 flex flex-col">
                  <div className="flex items-center gap-1 mb-2">
                    <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full">
                      {release.type}
                    </span>
                    <span className="text-gray-500 text-xs">{release.releaseDate}</span>
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-2 leading-tight">{release.title}</h4>
                  <p className="text-gray-600 mb-3 text-xs leading-tight">{release.description}</p>
                  
                  <div className="space-y-2 mt-auto">
                    <h5 className="font-semibold text-gray-900 text-xs">Stream on:</h5>
                    <div className="flex flex-wrap gap-2">
                      <a href={release.streamingLinks.spotify} className="w-8 h-8 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.24 12.84c.361.181.54.78.301 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                        </svg>
                      </a>
                      <a href={release.streamingLinks.apple} className="w-8 h-8 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09 .06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                        </svg>
                      </a>
                      <a href={release.streamingLinks.amazon} className="w-8 h-8 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M15.93 12.86c0-.55-.45-1-1-1H9.07c-.55 0-1 .45-1 1s.45 1 1 1h5.86c.55 0 1-.45 1-1zm-5.86-3.14c0-.55-.45-1-1-1H9.07c-.55 0-1 .45-1 1s.45 1 1 1h1c.55 0 1-.45 1-1zm5.86 0c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1c.55 0 1-.45 1-1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                        </svg>
                      </a>
                      <a href={release.streamingLinks.youtube} className="w-8 h-8 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377 .505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871 .505 9.376 .505 9.376 .505s7.505 0 9.377 -.505a3.015 3.015 0 0 0 2.122 -2.136C24 15.93 24 12 24 12s0 -3.93 -.502 -5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Redesigned Video Component */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Music <span className="text-amber-600">Videos</span>
          </h3>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">
                  Watch Our Latest Video
                </h4>
                <p className="text-gray-600 mb-8 text-lg">
                  Experience the visual storytelling behind our music. Each video is crafted to 
                  complement the message and emotion of our songs.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                    <span className="text-gray-700">High-quality production</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                    <span className="text-gray-700">Faith-inspired storytelling</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                    <span className="text-gray-700">Professional cinematography</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <a href="/music" className="btn-primary">
                    <Play className="w-5 h-5" />
                    View All Videos
                  </a>
                  <a href="/booking" className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-amber-500 text-amber-600 font-semibold rounded-xl hover:bg-amber-50 transition-all duration-300">
                    <Calendar className="w-5 h-5" />
                    Book Live Performance
                  </a>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-8 lg:p-12 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                  <h5 className="text-2xl font-bold mb-4">Featured Video</h5>
                  <p className="text-amber-100 mb-6">
                    "Crowned in Grace" - Our latest music video featuring stunning visuals 
                    and powerful storytelling.
                  </p>
                  <div className="flex items-center justify-center gap-2 text-amber-100">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="font-medium">New Release</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
