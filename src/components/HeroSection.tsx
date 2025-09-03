'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const [videoError, setVideoError] = useState(false)

  const handleVideoError = () => {
    setVideoError(true)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video/Image Background */}
      <div className="absolute inset-0">
        {!videoError ? (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/crowned_and_free_artist_pic_1.jpeg"
            onError={handleVideoError}
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
            <img 
              src="/images/crowned_and_free_artist_pic_1.jpeg" 
              alt="Crowned and Free performing live"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </video>
        ) : (
          <img 
            src="/images/crowned_and_free_artist_pic_1.jpeg" 
            alt="Crowned and Free performing live"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        
        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        data-testid="scroll-indicator"
      >
        <div className="flex flex-col items-center gap-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
          >
            <ChevronDown className="w-4 h-4 text-white/70" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
