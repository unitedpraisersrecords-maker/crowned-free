'use client'

import { motion } from 'framer-motion'
import { Play, ChevronDown } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video/Image Background */}
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/crowned_and_free_artist_pic_1.jpeg"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
      </div>

      {/* Minimal Center Action */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative h-full flex items-center justify-center">
        <motion.button 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          onClick={() => { window.location.href = '/music' }}
          aria-label="Listen to our music"
          className="group relative w-24 h-24 bg-white/15 backdrop-blur-md rounded-full border border-white/30 hover:bg-white/25 transition-all duration-300 transform hover:scale-110 flex items-center justify-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Play className="w-10 h-10 text-white relative z-10" />
        </motion.button>
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
