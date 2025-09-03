'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Calendar, Music, ExternalLink, Heart, Clock, Eye } from 'lucide-react'
import Link from 'next/link'

export default function VideoPage() {
  const [currentVideo, setCurrentVideo] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const musicVideos = [
    {
      id: 1,
      title: "Crowned in Grace",
      description: "Our latest music video featuring stunning visuals and powerful storytelling that captures the essence of God's grace in our lives.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URLs
      thumbnail: "/images/crowned_and_free_artist_pic_1.jpeg",
      duration: "4:32",
      releaseDate: "2024",
      views: "15.2K",
      likes: "1.2K",
      category: "Worship",
      streamingLinks: {
        spotify: "#",
        apple: "#",
        amazon: "#",
        youtube: "#"
      }
    },
    {
      id: 2,
      title: "Free to Worship",
      description: "Live performance video capturing the energy of our worship sessions and the joy of praising God together.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "/images/crowned_and_free_artist_pic_2.jpeg",
      duration: "5:18",
      releaseDate: "2024",
      views: "12.8K",
      likes: "980",
      category: "Live Performance",
      streamingLinks: {
        spotify: "#",
        apple: "#",
        amazon: "#",
        youtube: "#"
      }
    },
    {
      id: 3,
      title: "Wisdom's Light",
      description: "Acoustic version with intimate storytelling and beautiful cinematography that brings the message to life.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "/images/wisdom_is_steve_1.jpeg",
      duration: "3:45",
      releaseDate: "2024",
      views: "9.6K",
      likes: "750",
      category: "Acoustic",
      streamingLinks: {
        spotify: "#",
        apple: "#",
        amazon: "#",
        youtube: "#"
      }
    },
    {
      id: 4,
      title: "United in Faith",
      description: "Community-focused video celebrating unity and faith, featuring our church family and friends.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "/images/crowned_and_free_frances_1.jpeg",
      duration: "4:15",
      releaseDate: "2023",
      views: "18.4K",
      likes: "1.5K",
      category: "Community",
      streamingLinks: {
        spotify: "#",
        apple: "#",
        amazon: "#",
        youtube: "#"
      }
    },
    {
      id: 5,
      title: "Grace Upon Grace",
      description: "Studio recording with behind-the-scenes footage showing the creative process behind our music.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "/images/wisdom_is_steve_2.jpeg",
      duration: "3:58",
      releaseDate: "2023",
      views: "11.7K",
      likes: "890",
      category: "Studio",
      streamingLinks: {
        spotify: "#",
        apple: "#",
        amazon: "#",
        youtube: "#"
      }
    },
    {
      id: 6,
      title: "Live at Church",
      description: "Live worship session with congregation participation, capturing the spirit of community worship.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "/images/crowned_and_free_frances_2.jpeg",
      duration: "6:22",
      releaseDate: "2023",
      views: "22.1K",
      likes: "1.8K",
      category: "Live Worship",
      streamingLinks: {
        spotify: "#",
        apple: "#",
        amazon: "#",
        youtube: "#"
      }
    }
  ]

  const handleVideoSelect = (index: number) => {
    setIsLoading(true)
    setCurrentVideo(index)
    // Simulate loading time for better UX
    setTimeout(() => setIsLoading(false), 500)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-amber-500 to-orange-600 text-white">
        <div className="container-custom text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Music <span className="text-amber-200">Videos</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto"
          >
            Watch and experience our music through stunning visual storytelling
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Video Player - Left Side */}
            <div className="lg:col-span-2">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                {/* Video Player */}
                <div className="relative aspect-video bg-black">
                  {isLoading ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 border-4 border-amber-300 border-t-amber-600 rounded-full animate-spin"></div>
                    </div>
                  ) : (
                    <iframe
                      src={musicVideos[currentVideo].videoUrl}
                      title={musicVideos[currentVideo].title}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                </div>
                
                {/* Video Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm font-semibold rounded-full">
                      {musicVideos[currentVideo].category}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-semibold rounded-full">
                      {musicVideos[currentVideo].releaseDate}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {musicVideos[currentVideo].title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {musicVideos[currentVideo].description}
                  </p>
                  
                  {/* Video Stats */}
                  <div className="flex items-center gap-6 mb-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {musicVideos[currentVideo].duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      {musicVideos[currentVideo].views} views
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4" />
                      {musicVideos[currentVideo].likes} likes
                    </div>
                  </div>
                  
                  {/* Streaming Links */}
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-500 mb-3">Stream this song:</p>
                    <div className="flex gap-3">
                      <a href={musicVideos[currentVideo].streamingLinks.spotify} className="w-10 h-10 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.24 12.84c.361.181.54.78.301 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                        </svg>
                      </a>
                      <a href={musicVideos[currentVideo].streamingLinks.apple} className="w-10 h-10 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09 .06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                        </svg>
                      </a>
                      <a href={musicVideos[currentVideo].streamingLinks.youtube} className="w-10 h-10 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377 .505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871 .505 9.376 .505 9.376 .505s7.505 0 9.377 -.505a3.015 3.015 0 0 0 2.122 -2.136C24 15.93 24 12 24 12s0 -3.93 -.502 -5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Video Playlist - Right Side */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Video Playlist</h3>
              <div className="space-y-3">
                {musicVideos.map((video, index) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    onClick={() => handleVideoSelect(index)}
                    className={`bg-white rounded-lg p-4 cursor-pointer transition-all duration-200 hover:shadow-md ${
                      currentVideo === index ? 'ring-2 ring-amber-500 bg-amber-50' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-12 rounded overflow-hidden flex-shrink-0">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 text-sm truncate">
                          {video.title}
                        </h4>
                        <p className="text-gray-500 text-xs truncate">
                          {video.duration} • {video.views} views
                        </p>
                        <p className="text-gray-400 text-xs truncate">
                          {video.category} • {video.releaseDate}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="container-custom text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Experience More?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Book <span className="font-nexa">Crowned and Free</span> for your next event
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/#contact" className="btn-primary">
              <Calendar className="w-5 h-5" />
              Book Live Performance
            </Link>
            <Link href="/music" className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-amber-500 text-amber-400 font-semibold rounded-xl hover:bg-amber-500 hover:text-white transition-all duration-300">
              <Music className="w-5 h-5" />
              Explore Music
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
